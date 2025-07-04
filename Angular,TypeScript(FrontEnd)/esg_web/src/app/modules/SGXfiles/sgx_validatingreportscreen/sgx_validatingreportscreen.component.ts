import { Component, OnInit } from '@angular/core';
import { Sgx_validatingreportscreenService } from './sgx_validatingreportscreen.service';
import { AuthService } from 'app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { Sgx_imagereportService } from '../sgx_imagereport/sgx_imagereport.service';
import { UserService } from 'app/modules/admin/user/user.service';
import { Sgx_validateService } from '../sgx_validate/sgx_validate.service';
import { Sgx_introreportComponent } from '../sgx_introreport/sgx_introreport.component';
import { Sgx_dynamicreportComponent } from '../sgx_dynamicreport/sgx_dynamicreport.component';
import { Sgx_generaldisclosureComponent } from '../sgx_generaldisclosure/sgx_generaldisclosure.component';
import { Sgx_socialdisclosureComponent } from '../sgx_socialdisclosure/sgx_socialdisclosure.component';
import { Sgx_governancedisclosureComponent } from '../sgx_governancedisclosure/sgx_governancedisclosure.component';
import { Sgx_remarksenvironmentComponent } from '../sgx_remarksenvironment/sgx_remarksenvironment.component';
import { Sgx_remarksgovernanceComponent } from '../sgx_remarksgovernance/sgx_remarksgovernance.component';
import { Sgx_remarkssocialComponent } from '../sgx_remarkssocial/sgx_remarkssocial.component';

@Component({
  selector: 'app-sgx_validatingreportscreen',
  templateUrl: './sgx_validatingreportscreen.component.html',
  styleUrls: ['./sgx_validatingreportscreen.component.scss']
})
export class Sgx_validatingreportscreenComponent implements OnInit {
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
 src:any
 constructor(private domSanitizer: DomSanitizer,private aa:ActivatedRoute,private router: Router,private vrs:Sgx_validatingreportscreenService,private user:UserService,
  private us: UpdatereportService,private auth:AuthService,private is:Sgx_imagereportService,private val:Sgx_validateService,private ds:DashboardService) { }

  ngOnInit() {
    (this.dynamicComponent = Sgx_dynamicreportComponent),
    (this.dynamicComponent1 = Sgx_introreportComponent),
    (this.dynamicComponent2 = Sgx_generaldisclosureComponent),
    (this.dynamicComponent3 = Sgx_socialdisclosureComponent),
    (this.dynamicComponent4 = Sgx_governancedisclosureComponent),
    (this.remarksgeneral=Sgx_remarksenvironmentComponent),
    (this.remarksmanagement=Sgx_remarkssocialComponent),
    (this.remarksprincipals=Sgx_remarksgovernanceComponent)
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    this.us.getSGXReportDetailsByReportId(this.reportid).subscribe((res) => {
        this.reportname = res[0].ReportName;
        this.reportstartdate = res[0].StartDate;
        this.reportenddate = res[0].EndDate;
    });
    this.is.getSGXFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
      
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
  this.vrs.GetSGXValidatingFinalReportByReportId(this.reportid,this.auth.user.id).subscribe((res) => {
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
    this.vrs.GetSGXValidatingFinalReportByonlyReportid(this.reportid).subscribe((reu) => {
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
        this.is.getSGXFinalReportDetailsByReportId(this.reportid).subscribe((data) => {
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
              this.is.createSGXFinalReport(selectedboxes).subscribe((data) => {
                console.log(data);
              });
            });
      }
    });
  }
  Approve() {
  console.log(this.reportid)
console.log(this.auth.user.roleId)
  this.vrs.GetSGXValidatingFinalReportByReportId(this.reportid,this.auth.user.id).subscribe((res) => {
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