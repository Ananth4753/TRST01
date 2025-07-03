import { Component, OnInit } from '@angular/core';
import { ValidatingreportscreenService } from './validatingreportscreen.service';
import { AuthService } from 'app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdatereportService } from '../updatereport/updatereport.service';

import Swal from 'sweetalert2';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { DashboardService } from '../dashboard/dashboard.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { ImagereportService } from '../imagereport/imagereport.service';
import { UserService } from '../admin/user/user.service';
import { ValidateService } from '../validate/validate.service';
import { DynamicreportComponent } from '../dynamicreport/dynamicreport.component';
import { IntroreportComponent } from '../introreport/introreport.component';
import { DynamiccontentComponent } from '../dynamiccontent/dynamiccontent.component';
import * as html2pdf from 'html2pdf.js'
import { GrigeneraldisclosureComponent } from '../grigeneraldisclosure/grigeneraldisclosure.component';
import { GrieconomicComponent } from '../grieconomic/grieconomic.component';
import { GrienvironmentComponent } from '../grienvironment/grienvironment.component';
import { GrisocialComponent } from '../grisocial/grisocial.component';
import { GrimaterialityComponent } from '../grimateriality/grimateriality.component';
import { RemarksgeneralComponent } from '../remarksgeneral/remarksgeneral.component';
import { RemarkseconomicComponent } from '../remarkseconomic/remarkseconomic.component';
import { RemarksenvironmentComponent } from '../remarksenvironment/remarksenvironment.component';
import { RemarkssocialComponent } from '../remarkssocial/remarkssocial.component';
import { RemarksmaterialityComponent } from '../remarksmateriality/remarksmateriality.component';

@Component({
  selector: 'app-validatingreportscreen',
  templateUrl: './validatingreportscreen.component.html',
  styleUrls: ['./validatingreportscreen.component.scss']
})
export class ValidatingreportscreenComponent implements OnInit {
  BLSCertificateUrllocal: any;
  reportpic:any;
  reportid: any;
  counter:number=0;
  reportname: any;
  reportstartdate: any;
  reportenddate: any;
  dynamicComponent: any;
 dynamicComponent1: any;
 dynamicComponent2:any;
 generaldisclosure:any;
 remarkcomponent:any;
 economic:any;
 environment:any;
 social:any;
 materiality:any;
 email:any;
 remarksgeneral:any
 remarksmateriality:any
 remarkseconomic:any
 remarksenvironment:any
 remarkssocial:any
 goo:any;
 constructor(private domSanitizer: DomSanitizer,private aa:ActivatedRoute,private router: Router,private vrs:ValidatingreportscreenService,private user:UserService,
  private us: UpdatereportService,private auth:AuthService,private is:ImagereportService,private val:ValidateService,private ds:DashboardService) { }
src: any;
 
   ngOnInit() {
    (this.dynamicComponent = DynamicreportComponent),
    (this.dynamicComponent1 = IntroreportComponent),
    (this.generaldisclosure=GrigeneraldisclosureComponent),
    (this.economic=GrieconomicComponent),
    (this.environment=GrienvironmentComponent),
    (this.social=GrisocialComponent),
    (this.materiality=GrimaterialityComponent),
    (this.remarksgeneral=RemarksgeneralComponent),
    (this.remarksmateriality=RemarksmaterialityComponent),
    (this.remarkseconomic=RemarkseconomicComponent),
    (this.remarksenvironment=RemarksenvironmentComponent),
    (this.remarkssocial=RemarkssocialComponent),
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    this.us.getReportDetailsByReportId(this.reportid).subscribe((res) => {
        this.reportname = res[0].ReportName;
        this.reportstartdate = res[0].StartDate;
        this.reportenddate = res[0].EndDate;
    });
    this.is.getFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
      
      var size=Object.keys(res).length;
      
      this.reportpic=res[0].CoverPageImage
    
      
      this.BLSCertificateUrllocal = this.reportpic;
  
    this.src = this.domSanitizer.bypassSecurityTrustResourceUrl(this.BLSCertificateUrllocal);
     })
    console.log(this.auth.user.orgId)
  }
  Reject(){
    console.log(this.reportid)
console.log(this.auth.user.roleId)
  this.vrs.GetValidatingFinalReportByReportId(this.reportid,this.auth.user.id).subscribe((res) => {
          console.log(res);
          const resdata = res[0];
          const boxes: any = {
            Id: resdata.Id,
            ReportId: resdata.ReportId,
            OrgId: resdata.OrgId,
            UserId: resdata.UserId,
            IsValidate: 0,
            Remarks: JSON.parse(resdata.Remarks),
            IsActive: resdata.IsActive,
            CreatedByUserId: resdata.CreatedByUserId,
            CreatedDate: resdata.CreatedDate,
            UpdatedByUserId: resdata.UpdatedByUserId,
            UpdatedDate: resdata.UpdatedDate
          };
  
          this.val.addfinalreportvalidation(boxes).subscribe((final) => {
            console.log(final);
            Swal.fire({
              title: 'Rejected',
              text: 'The report has been rejected.',
              icon: 'error',
              confirmButtonText: 'OK',
            });
            this.user.getUserinorg(this.auth.user.orgId).subscribe((data) => {
              let i = 0;
              const sendNextMail = () => {
                if (i < data.length) {
                  const obj = {
                    "MailId": data[i]['UserName'],
                    "reportid": this.reportid
                  };
                  this.vrs.rejectremarksmail(obj).subscribe((dat) => {
                    console.log(dat);
                    i++;
                    sendNextMail(); // Call the function recursively to send the next mail
                  });
                }
              };
              sendNextMail(); // Start sending mails
            });
          });
        });

  }
  isapprovecheck(){
    this.vrs.GetValidatingFinalReportByonlyReportid(this.reportid).subscribe((reu) => {
      console.log(reu);
      for( var i=0;i<reu.length;i++){
       if(reu[i]['IsValidate']==0) {
        break;
       }
       else{
        this.counter+=1;
       }
                }
      if(this.counter==reu.length){
        this.is.getFinalReportDetailsByReportId(this.reportid).subscribe((data) => {
              const reportdata = data[0];
              console.log(reportdata);
              const selectedboxes: any = {
                Id: reportdata.Id,
                ReportId: this.reportid,
                ReportName: reportdata.ReportName,
                StartDate: reportdata.StartDate,
                EndDate: reportdata.EndDate,
                CoverPageImage: reportdata.CoverPageImage,
                CoverPageLayout: reportdata.CoverPageLayout,
                DesignTemplate: reportdata.DesignTemplate,
                Logo: reportdata.Logo,
                Introduction: reportdata.Introduction,
                Messagefromceo: reportdata.Messagefromceo,
                aboutthisreport: reportdata.aboutthisreport,
                keyhighlights: reportdata.keyhighlights,
                vision: reportdata.vision,
                IsActive: reportdata.IsActive,
                FinalDraftGuidance: reportdata.FinalDraftGuidance,
                Settings: 1,
                UpdatedByUserId: reportdata.UpdatedByUserId,
                UpdatedDate: reportdata.UpdatedDate,
                CreatedByUserId: reportdata.CreatedByUserId,
                CreatedDate: reportdata.CreatedDate,
                Reportpicbase: reportdata.Reportpicbase,
                IsSignoff: 0,
                IsValidate: 1
              };
              console.log(selectedboxes);
              this.is.createFinalReport(selectedboxes).subscribe((data) => {
                console.log(data);
              });
            });
      }
    });
  }
  Approve() {
  console.log(this.reportid)
console.log(this.auth.user.roleId)
  this.vrs.GetValidatingFinalReportByReportId(this.reportid,this.auth.user.id).subscribe((res) => {
          console.log(res);
          const resdata = res[0];
          const boxes: any = {
            Id: resdata.Id,
            ReportId: resdata.ReportId,
            OrgId: resdata.OrgId,
            UserId: resdata.UserId,
            IsValidate: 1,
            Remarks: JSON.parse(resdata.Remarks),
            IsActive: resdata.IsActive,
            CreatedByUserId: resdata.CreatedByUserId,
            CreatedDate: resdata.CreatedDate,
            UpdatedByUserId: resdata.UpdatedByUserId,
            UpdatedDate: resdata.UpdatedDate
          };
          this.val.addfinalreportvalidation(boxes).subscribe((final) => {
            console.log(final);
            Swal.fire({
              title: 'Approved',
              text: 'The report has been approved.',
              icon: 'success',
              confirmButtonText: 'OK',
            });
     this.isapprovecheck();
     this.user.getUserinorg(this.auth.user.orgId).subscribe((data) => {
      let i = 0;
      const sendNextMail = () => {
        if (i < data.length) {
          const obj = {
            "MailId": data[i]['UserName'],
            "reportid": this.reportid
          };
          this.vrs.approveremarksmail(obj).subscribe((dat) => {
            console.log(dat);
            i++;
            sendNextMail(); // Call the function recursively to send the next mail
          });
        }
      };
      sendNextMail(); // Start sending mails
    });
          });
        });

      }
    }