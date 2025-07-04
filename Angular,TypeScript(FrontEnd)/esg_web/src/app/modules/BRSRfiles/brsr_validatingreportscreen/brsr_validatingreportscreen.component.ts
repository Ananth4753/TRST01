import { Component, OnInit } from '@angular/core';
import { Brsr_validatingreportscreenService } from './brsr_validatingreportscreen.service';
import { AuthService } from 'app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import Swal from 'sweetalert2';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { Brsr_imagereportService } from '../brsr_imagereport/brsr_imagereport.service';
import { UserService } from 'app/modules/admin/user/user.service';
import { Brsr_validateService } from '../brsr_validate/brsr_validate.service';
import { Brsr_introreportComponent } from '../brsr_introreport/brsr_introreport.component';
import { Brsr_dynamicreportComponent } from '../brsr_dynamicreport/brsr_dynamicreport.component';
import { Brsr_previewreportComponent } from '../brsr_previewreport/brsr_previewreport.component';
import { split } from 'lodash';
import { GlobalvariableService } from 'app/modules/services/globalvariable.service';
import { Brsr_generaldisclosureComponent } from '../brsr_generaldisclosure/brsr_generaldisclosure.component';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { Brsr_managementComponent } from '../brsr_management/brsr_management.component';
import { Brsr_principalsreportComponent } from '../brsr_principalsreport/brsr_principalsreport.component';
import { Brsr_remarksgeneralComponent } from '../brsr_remarksgeneral/brsr_remarksgeneral.component';
import { Brsr_remarksmanagementComponent } from '../brsr_remarksmanagement/brsr_remarksmanagement.component';
import { BrsrRemarksprincipalComponent } from '../brsr-remarksprincipal/brsr-remarksprincipal.component';
@Component({
  selector: 'app-brsr_validatingreportscreen',
  templateUrl: './brsr_validatingreportscreen.component.html',
  styleUrls: ['./brsr_validatingreportscreen.component.scss']
})
export class Brsr_validatingreportscreenComponent implements OnInit {
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
 dynamicComponent3:any;
 dynamicComponent4:any;
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
 remarksmanagement:any
 remarksprincipals:any
 goo:any;
 constructor(private domSanitizer: DomSanitizer,private aa:ActivatedRoute,private router: Router,private vrs:Brsr_validatingreportscreenService,private user:UserService,
  private us: UpdatereportService,private auth:AuthService,private is:Brsr_imagereportService,private val:Brsr_validateService,private ds:DashboardService) { }
src: any;
 
   ngOnInit() {
    (this.dynamicComponent = Brsr_dynamicreportComponent),
    (this.dynamicComponent1 = Brsr_introreportComponent),
    (this.dynamicComponent2 = Brsr_generaldisclosureComponent),
    (this.dynamicComponent3 = Brsr_managementComponent),
    (this.dynamicComponent4 = Brsr_principalsreportComponent),
    (this.remarksgeneral=Brsr_remarksgeneralComponent),
    (this.remarksmanagement=Brsr_remarksmanagementComponent),
    (this.remarksprincipals=BrsrRemarksprincipalComponent)
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    this.us.getBRSRReportDetailsByReportId(this.reportid).subscribe((res) => {
        this.reportname = res[0].ReportName;
        this.reportstartdate = res[0].StartDate;
        this.reportenddate = res[0].EndDate;
    });
    this.is.getBRSRFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
      
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
  this.vrs.GetBRSRValidatingFinalReportByReportId(this.reportid,this.auth.user.id).subscribe((res) => {
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
    this.vrs.GetBRSRValidatingFinalReportByonlyReportid(this.reportid).subscribe((reu) => {
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
        this.is.getBRSRFinalReportDetailsByReportId(this.reportid).subscribe((data) => {
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
              this.is.createBRSRFinalReport(selectedboxes).subscribe((data) => {
                console.log(data);
              });
            });
      }
    });
  }
  Approve() {
  console.log(this.reportid)
console.log(this.auth.user.roleId)
  this.vrs.GetBRSRValidatingFinalReportByReportId(this.reportid,this.auth.user.id).subscribe((res) => {
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