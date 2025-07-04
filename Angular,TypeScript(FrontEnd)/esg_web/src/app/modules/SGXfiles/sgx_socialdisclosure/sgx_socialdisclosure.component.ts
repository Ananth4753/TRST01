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
  selector: 'app-sgx_socialdisclosure',
  templateUrl: './sgx_socialdisclosure.component.html',
  styleUrls: ['./sgx_socialdisclosure.component.scss']
})
export class Sgx_socialdisclosureComponent implements OnInit {

  reportid: any;
  reportname: any;
  templatemenu: any;
  designtemplate: any;
  startdate: any;
  enddate: any;
  currentYear: number;
  PreviousYear:number;
  srno:any;
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
dynamicobjTable1: any=[];
dynamicobjTable2: any=[];
dynamicobjTable3: any=[];
dynamicobjTable4: any =[];

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
       
          this.dynamicobj = JSON.parse(res[0].InitialDraftReport);
          if(this.dynamicobj!=null){
          console.log(this.dynamicobj[7]);
          //this.dynamicobjTable1 = JSON.parse(this.dynamicobj[7]['Table1']);
           
        if(this.dynamicobj[7]['Table1'] != null || this.dynamicobj[7]['Table1'] != undefined )
        {
          let localval = JSON.parse(this.dynamicobj[7]['Table1']);
         if(localval[0]['Subject'] != '' || localval[0]['Gender'] != '' || localval[0]['Assessments'] != '' ) 
         {
          this.dynamicobjTable1 = JSON.parse(this.dynamicobj[7]['Table1']);
          console.log(this.dynamicobjTable1);
          
         }
         else 
         {
          this.dynamicobjTable1 = [];
         }
          
        } else 
        {
          this.dynamicobjTable1 = [];
        }

         var dynamicobjTable1len = this.dynamicobjTable1[0]['Gender'];
         console.log(dynamicobjTable1len);
         
          //this.dynamicobjTable2 = JSON.parse(this.dynamicobj[8]['SocialTable1']);
          if(this.dynamicobj[8]['SocialTable1'] != null || this.dynamicobj[8]['SocialTable1'] != undefined )
          {
            let localval = JSON.parse(this.dynamicobj[8]['SocialTable1']);
           if(localval[0]['Subject'] != '' || localval[0]['Gender'] != '' || localval[0]['Assessments'] != '' ) 
           {
            this.dynamicobjTable2 = JSON.parse(this.dynamicobj[8]['SocialTable1']);
            //console.log(this.dynamicobjTable1);
            
           }
           else 
           {
            this.dynamicobjTable2 = [];
           }
            
          } else 
          {
            this.dynamicobjTable2 = [];
          }
  
          //this.dynamicobjTable3 = JSON.parse(this.dynamicobj[8]['SocialTable2']);
          if(this.dynamicobj[8]['SocialTable2'] != null || this.dynamicobj[8]['SocialTable2'] != undefined )
          {
            let localval = JSON.parse(this.dynamicobj[8]['SocialTable2']);
           if(localval[0]['Subject1'] != '' || localval[0]['Gender1'] != '' || localval[0]['Assessments1'] != '' ) 
           {
            this.dynamicobjTable3 = JSON.parse(this.dynamicobj[8]['SocialTable2']);
            //console.log(this.dynamicobjTable1);
            
           }
           else 
           {
            this.dynamicobjTable3 = [];
           }
            
          } else 
          {
            this.dynamicobjTable3 = [];
          }
  
          //this.dynamicobjTable4 = JSON.parse(this.dynamicobj[14]['Social204bTable1']);
          if(this.dynamicobj[14]['Social204bTable1'] != null || this.dynamicobj[7]['Social204bTable1'] != undefined )
          {
            let localval = JSON.parse(this.dynamicobj[14]['Social204bTable1']);
           if(localval[0]['Subject'] != '' || localval[0]['Gender'] != '' || localval[0]['Assessments'] != '' ) 
           {
            this.dynamicobjTable4 = JSON.parse(this.dynamicobj[14]['Social204bTable1']);
            console.log(this.dynamicobjTable4);
            
           }
           else 
           {
            this.dynamicobjTable4 = [];
           }
            
          } else 
          {
            this.dynamicobjTable4 = [];
          }
  
          console.log(this.dynamicobjTable4);
          }
        
      console.log(this.dynamicobj[16]['social202aQuestion3']);
      console.log(this.dynamicobj[16]?.social205bQuestion1);
      
         
         
          
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
