import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { Sgx_imagereportService } from '../sgx_imagereport/sgx_imagereport.service';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';
import { AppService } from 'app/app.service';
import { AuthService } from 'app/core/auth/auth.service';
import { SelectsgxService } from '../selectsgx/selectsgx.service';
import { CreatereportforsgxService } from '../createreportforsgx/createreportforsgx.service';
import Questions from '../../../../assets/sgx_questions.json';

@Component({
  selector: 'app-sgx_generaldisclosure',
  templateUrl: './sgx_generaldisclosure.component.html',
  styleUrls: ['./sgx_generaldisclosure.component.scss']
})
export class Sgx_generaldisclosureComponent implements OnInit {
  reportid: any;
  reportname: any;
  templatemenu: any;
  designtemplate: any;
  startdate: any;
  enddate: any;
  currentYear: number;
  PreviousYear:number;
  srno:any;
  dynamicobjzero: any;
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
  private ds: DashboardService
) {
  this.srno=0;
}
finalobj: any = {};

ngOnInit() {

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
          console.log(this.qaa[0]);
          this.dynamicobj = this.qaa;
          console.log(this.dynamicobj);
          
          // const questionValues = Object.values(Questions[0]);
          // const answerValues =Object.values(this.qaa)
          // this.questionValues = Object.values(Questions[0]);
          // this.answerValues = Object.values(this.qaa);
          // console.log(this.answerValues[0]);
          // console.log(this.answerValues);

          this.dynamicobj = JSON.parse(res[0].InitialDraftReport);
          console.log(this.dynamicobj[0]);
          console.log(this.dynamicobj[0]['Question10']);
          console.log(this.dynamicobj[1]['env1bQuestion5']);
          console.log(this.dynamicobj[1]['env1bQuestion1']);
          console.log(this.dynamicobj[1]['env1bQuestion3']);
          // console.log(this.dynamicobj[0]['Question16'])
//           if(this.dynamicobj!=null){
//            this.dynamicobjzero = this.dynamicobj[0];
//           console.log(this.dynamicobj[0]['Question1']);
//           console.log(this.dynamicobj[0]['Question2']);
//  console.log(this.dynamicobj);
//           }
console.log(this.dynamicobj[1]['env1bQuestion7']);

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

}
