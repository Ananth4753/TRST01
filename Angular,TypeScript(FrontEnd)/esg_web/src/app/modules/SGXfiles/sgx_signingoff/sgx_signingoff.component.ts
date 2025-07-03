import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'app/modules/validate/validate.service';
import { AuthService } from 'app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';
import Swal from 'sweetalert2';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { Sgx_validatingreportscreenService } from '../sgx_validatingreportscreen/sgx_validatingreportscreen.service';
import { Sgx_generaldisclosureComponent } from '../sgx_generaldisclosure/sgx_generaldisclosure.component';
import { Sgx_socialdisclosureComponent } from '../sgx_socialdisclosure/sgx_socialdisclosure.component';
import { Sgx_governancedisclosureComponent } from '../sgx_governancedisclosure/sgx_governancedisclosure.component';
import { Sgx_dynamicreportComponent } from '../sgx_dynamicreport/sgx_dynamicreport.component';
import { Sgx_introreportComponent } from '../sgx_introreport/sgx_introreport.component';



@Component({
  selector: 'app-sgx_signingoff',
  templateUrl: './sgx_signingoff.component.html',
  styleUrls: ['./sgx_signingoff.component.scss']
})
export class Sgx_signingoffComponent implements OnInit {
  reportid: any;
  reportname: any;
  reportstartdate: any;
  reportenddate: any;
  orgid: any;
  email: any;
  name: any;
  password: any;
  mailid: any;
  Validateform: FormGroup;
  namesofvalidator: any[];
  filteredNames: any[] = [];
  storeddata: any[];
  goo:any
  boo:any;
  dynamicComponent: any;
  dynamicComponent1: any;
  dynamicComponent2:any;
  generaldisclosure:any;
  social:any;
  governence:any;
  materiality:any
  counter:number=0;
  constructor(
    private router: Router,
    private aa: ActivatedRoute,
    private fb: FormBuilder,
    private val:ValidateService,
    private auth:AuthService,
    private us: UpdatereportService,
    private ds: DashboardService,
  ) { }

  ngOnInit():void {
    (this.dynamicComponent = Sgx_dynamicreportComponent),
    (this.dynamicComponent1 = Sgx_introreportComponent),
    (this.generaldisclosure=Sgx_generaldisclosureComponent),
    (this.social=Sgx_socialdisclosureComponent),
    (this.governence=Sgx_governancedisclosureComponent),
    
    console.log(this.auth.user);
    this.orgid = this.auth.user.orgId;
    this.ds.getuserdetails(this.auth.user.id).subscribe((data1) => {
      this.email = data1[0]['FirstName'];
      this.reportid = this.aa.snapshot.paramMap.get('reportId');
      this.us.getSGXReportDetailsByReportId(this.reportid).subscribe((res) => {
        this.reportname = res[0].ReportName;
        this.reportstartdate = res[0].StartDate;
        this.reportenddate = res[0].EndDate;
        this.val.getUsersinOrganization(res[0].OrgId).subscribe((data) => {
          this.storeddata = data;
          if (this.email === data[0].FirstName) {
            console.log(data);
            this.mailid = data[0].EmailId;
            this.password = data[0].Password;
            this.filteredNames = data.filter((user) => user.FirstName !== this.email);
          } else {
            this.filteredNames = data;
          }
        });
      });
    });
    this.Validateform = this.fb.group({
      Messagefromceo: [''],
    });
  }
  back() {
    // this.router.navigate(['/previewreport', this.reportid]);
  }

  abc(event) {
    // console.log(this.Validateform.get('iei').value);
    // var val = this.Validateform.get('iei').value;
    // var selectedUser = this.filteredNames.find((user) => user.Id === val);

    // if (selectedUser) {
    //   this.goo = selectedUser.UserName;
    //   this.boo = selectedUser.RoleId;
    //   console.log(this.boo);
    //   this.password = selectedUser.Password;
    // }
  }

  async validate() {
    // console.log(this.Validateform.get('iei').value);
    // const selectedUserIds = this.Validateform.get('iei').value;
    
    // for (const selectedUserId of selectedUserIds) {
    //   const selectedUser = this.filteredNames.find((user) => user.Id === selectedUserId);
    //   if (selectedUser) {
    //     this.goo = selectedUser.UserName;
    //     this.boo = selectedUser.RoleId;
    //     console.log(this.boo);
    //     this.password = selectedUser.Password;
    //   }
  
    //   const obj1 = {
    //     Id: null,
    //     ReportId: this.reportid,
    //     OrgId: this.orgid,
    //     UserId: this.boo,
    //     IsValidate: 0,
    //     Remarks: null,
    //     IsActive: true,
    //     CreatedDate: new Date(),
    //     CreatedByUserId: this.auth.user.id,
    //     UpdatedDate: new Date(),
    //     UpdatedByUserId: this.auth.user.id,
    //   };
  
    //   try {
    //     await this.val.addfinalreportvalidation(obj1).toPromise();
    //     console.log('Validation added');
    //   } catch (error) {
    //     console.log('Validation error:', error);
    //   }
  
    //   const obj = {
    //     "MailId": this.goo,
    //     "reportid": this.reportid
    //   };
  
    //   try {
    //     await this.val.pushforvalidation(obj).toPromise();
    //     console.log('Email sent');
    //   } catch (error) {
    //     console.log('Email sending error:', error);
    //   }
    // }
    // this.router.navigate(['/previewreport', this.reportid]);
  }

  validate1() {
    // this.router.navigate(['/generate', this.reportid]);
  }
  isapprovecheck(){
        // this.is.getFinalReportDetailsByReportId(this.reportid).subscribe((data) => {
        //       const reportdata = data[0];
        //       console.log(reportdata);
        //       const selectedboxes: any = {
        //         Id: reportdata.Id,
        //         ReportId: this.reportid,
        //         ReportName: reportdata.ReportName,
        //         StartDate: reportdata.StartDate,
        //         EndDate: reportdata.EndDate,
        //         CoverPageImage: reportdata.CoverPageImage,
        //         CoverPageLayout: reportdata.CoverPageLayout,
        //         DesignTemplate: reportdata.DesignTemplate,
        //         Logo: reportdata.Logo,
        //         Introduction: reportdata.Introduction,
        //         Messagefromceo: reportdata.Messagefromceo,
        //         aboutthisreport: reportdata.aboutthisreport,
        //         keyhighlights: reportdata.keyhighlights,
        //         vision: reportdata.vision,
        //         IsActive: reportdata.IsActive,
        //         FinalDraftGuidance: reportdata.FinalDraftGuidance,
        //         Settings: 1,
        //         UpdatedByUserId: reportdata.UpdatedByUserId,
        //         UpdatedDate: reportdata.UpdatedDate,
        //         CreatedByUserId: reportdata.CreatedByUserId,
        //         CreatedDate: reportdata.CreatedDate,
        //         Reportpicbase: reportdata.Reportpicbase,
        //         IsSignoff: 1,
        //         IsValidate: 1
        //       };
        //       console.log(selectedboxes);
        //       this.is.createFinalReport(selectedboxes).subscribe((data) => {
        //         console.log(data);
        //       });
        //     });
  }
  Approve() {

            Swal.fire({
              title: 'Successful',
              text: 'The report has been signed off.',
              icon: 'success',
              confirmButtonText: 'OK',
            });
  
     this.isapprovecheck();
       
      }
      Reject(){
        Swal.fire({
          title: 'Unsuccessful',
          text: 'The report has not been signed off.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      }
}
