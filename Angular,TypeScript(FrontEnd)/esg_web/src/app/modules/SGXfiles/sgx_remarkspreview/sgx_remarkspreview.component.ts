import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ImagereportService } from 'app/modules/imagereport/imagereport.service';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { Sgx_remarkspreenviroComponent } from '../sgx_remarkspreenviro/sgx_remarkspreenviro.component';
import { Sgx_remarkspresocialComponent } from '../sgx_remarkspresocial/sgx_remarkspresocial.component';
import { Sgx_remarkspregoverComponent } from '../sgx_remarkspregover/sgx_remarkspregover.component';
import { Sgx_dynamicreportComponent } from '../sgx_dynamicreport/sgx_dynamicreport.component';
import { Sgx_introreportComponent } from '../sgx_introreport/sgx_introreport.component';
import { Sgx_generaldisclosureComponent } from '../sgx_generaldisclosure/sgx_generaldisclosure.component';
import { Sgx_socialdisclosureComponent } from '../sgx_socialdisclosure/sgx_socialdisclosure.component';
import { Sgx_governancedisclosureComponent } from '../sgx_governancedisclosure/sgx_governancedisclosure.component';
import { Sgx_validatingreportscreenService } from '../sgx_validatingreportscreen/sgx_validatingreportscreen.service';
import { Sgx_validateService } from '../sgx_validate/sgx_validate.service';
import Swal from 'sweetalert2';
import { UserService } from 'app/modules/admin/user/user.service';
import { Sgx_imagereportService } from '../sgx_imagereport/sgx_imagereport.service';

@Component({
  selector: 'app-sgx_remarkspreview',
  templateUrl: './sgx_remarkspreview.component.html',
  styleUrls: ['./sgx_remarkspreview.component.scss']
})
export class Sgx_remarkspreviewComponent implements OnInit {
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
 dynamicComponent4: any;
 remarkspreenvironment:any;
 remarkspresocial:any;
 remarkspregovernance:any;
 socialdisclosure:any;
 materialitydisclosure:any
 economic:any;
 environment:any;
 social:any;
 materiality:any
  constructor(private router: Router,private domSanitizer: DomSanitizer,private aa:ActivatedRoute,private auth:AuthService,private vrs:Sgx_validatingreportscreenService,private val:Sgx_validateService,private user:UserService
    ,private is:Sgx_imagereportService) { }

  ngOnInit() {
    (this.dynamicComponent = Sgx_dynamicreportComponent),
    (this.dynamicComponent1 = Sgx_introreportComponent),
    (this.dynamicComponent2 = Sgx_generaldisclosureComponent),
    (this.dynamicComponent3 = Sgx_socialdisclosureComponent),
    (this.dynamicComponent4 = Sgx_governancedisclosureComponent),
   (this.remarkspreenvironment = Sgx_remarkspreenviroComponent),
   (this.remarkspresocial = Sgx_remarkspresocialComponent),
   (this.remarkspregovernance = Sgx_remarkspregoverComponent)

  }
  back(){
    // this.router.navigate(['/preremarksscreen', this.reportid]);
    //  this.router.navigate(['/settingcomp',this.reportid]);
   }
   next(){
    //  this.is.getFinalReportDetailsByReportId(this.reportid).subscribe((data) => {
    //   // console.log(data);
    //    if (data[0]['IsValidate'] == 1 && data[0]['IsSignoff'] == 1) {
    //      this.router.navigate(['/generate', this.reportid]);
    //    } else if (data[0]['IsValidate'] == 1) {
    //      this.router.navigate(['/signoffreport', this.reportid]);
    //    } else {
    //      this.router.navigate(['/validate', this.reportid]);
    //    }
    //  });
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
