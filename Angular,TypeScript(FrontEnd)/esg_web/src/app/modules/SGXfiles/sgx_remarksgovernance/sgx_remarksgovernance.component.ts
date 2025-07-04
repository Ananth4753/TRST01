import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { Sgx_imagereportService } from '../sgx_imagereport/sgx_imagereport.service';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';
import { AppService } from 'app/app.service';
import { CreatereportforsgxService } from '../createreportforsgx/createreportforsgx.service';
import { AuthService } from 'app/core/auth/auth.service';
import { SelectsgxService } from '../selectsgx/selectsgx.service';
import {FormControl, FormGroup,Validators, FormBuilder,FormArray, } from '@angular/forms';
import { Sgx_validatingreportscreenService } from '../sgx_validatingreportscreen/sgx_validatingreportscreen.service';
import { UploadevidenceforsgxComponent } from '../sgx_remarksenvironment/uploadevidenceforsgx/uploadevidenceforsgx.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-sgx_remarksgovernance',
  templateUrl: './sgx_remarksgovernance.component.html',
  styleUrls: ['./sgx_remarksgovernance.component.scss']
})
export class Sgx_remarksgovernanceComponent implements OnInit {
  govform:FormGroup;
  reportid: any;
  reportname: any;
  templatemenu: any;
  designtemplate: any;
  startdate: any;
  enddate: any;
  currentYear: number;
  PreviousYear:number;
  srno:any;
  orgId:any;
  public questionValues: any[] = [];
  public answerValues: any[] = [];
  firstimage =
  'https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp1.png';
secondimage =
  'https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp2.png';
thirdimage =
  'https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp3.png';
fourthimage =
  'https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp4.png';
fifthimage =
  'https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp5.png';
imageUrl: any;
qaa: any;
questions: any;
dynamicobj: any;
constructor(
  private route: ActivatedRoute,
  private aa: ActivatedRoute,
  private AuthService: AuthService,
  private service: AppService,
  private ss: SelectsgxService,
  private crs: CreatereportforsgxService,
  private us: UpdatereportService,
  private is: Sgx_imagereportService,
  private ds: DashboardService,
  private fb: FormBuilder,
  public dialog: MatDialog,
  private vrs:Sgx_validatingreportscreenService
) {
  this.srno=0;
}
finalobj: any = {};

ngOnInit() {
  this.orgId=this.AuthService.user.orgId
this.govform = this.fb.group({
  
gov1:[''],
gov2:[''],
gov3:[''],
gov4:[''],
gov5:[''],
gov6:[''],
gov7:[''],
gov8:[''],
gov9:[''],
gov10:[''],
gov11:[''],
gov12:[''],


});

  const Today = new Date();
this.currentYear = Today.getFullYear();
this.PreviousYear=this.currentYear-1;

  this.reportid = this.aa.snapshot.paramMap.get('reportId');
  this.us
      .getSGXReportDetailsByReportId(this.reportid)
      .subscribe((res) => {
          this.reportname = res[0].ReportName;
          this.startdate = res[0].StartDate;
          this.enddate = res[0].EndDate;
          this.qaa = JSON.parse(res[0].InitialDraftReport);
          // const questionValues = Object.values(Questions[0]);
          // const answerValues =Object.values(this.qaa)
          // this.questionValues = Object.values(Questions[0]);
          // this.answerValues = Object.values(this.qaa);
       
          this.dynamicobj = JSON.parse(res[0].InitialDraftReport);
          console.log(this.dynamicobj);
          if(this.dynamicobj!=null){
          console.log(this.dynamicobj['Question2']);
          console.log(this.dynamicobj['env1bQuestion2']);
          }
      });

  this.is
      .getSGXFinalReportDetailsByReportId(this.reportid)
      .subscribe((res) => {
          var size = Object.keys(res).length;

          this.designtemplate = res[0].DesignTemplate;
          if (this.designtemplate == 1) {
              this.imageUrl = this.firstimage;
          } else if (this.designtemplate == 2) {
              this.imageUrl = this.secondimage;
          } else if (this.designtemplate == 3) {
              this.imageUrl = this.thirdimage;
          } else if (this.designtemplate == 4) {
              this.imageUrl = this.fourthimage;
          } else {
              this.imageUrl = this.fifthimage;
          }
      });
}

Save(){
  let formva=this.govform.value
  //console.log(formva);
      this.vrs.GetSGXValidatingFinalReportByReportId(this.reportid,this.AuthService.user.id).subscribe((data)=>{
        console.log(data);
        const resdata = data[0];
        
        const existingRemarks = JSON.parse(resdata.Remarks); // Assuming the existing Remarks data is stored in JSON format
        console.log(existingRemarks);
        const newRemarks = {
          ...existingRemarks,
          ...formva // Assuming the 'value' is an object containing new data to be added
        };
        console.log(newRemarks);
        const boxes: any = {
          Id: resdata.Id,
          ReportId: resdata.ReportId,
          OrgId: resdata.OrgId,
          UserId: resdata.UserId,
          IsValidate: 1,
          Remarks: newRemarks,
          IsActive: resdata.IsActive,
          UpdatedByUserId: resdata.UpdatedByUserId,
          UpdatedDate: resdata.UpdatedDate,
          CreatedByUserId: resdata.CreatedByUserId,
          CreatedDate: resdata.CreatedDate,
        };
        console.log(boxes);
        this.vrs.addSGXfinalreportvalidation(boxes).subscribe((final) => {
          console.log(final);
        });
      })
  }
  openuploadimgcompo(ReportId: any, GuidanceNumber: any, OrgId: any, ques: any) {

    const dialogRef = this.dialog.open(UploadevidenceforsgxComponent, {
  
      autoFocus: false,
  
      data: { ReportId, GuidanceNumber, OrgId, ques },
  
    });
  
  }

}
