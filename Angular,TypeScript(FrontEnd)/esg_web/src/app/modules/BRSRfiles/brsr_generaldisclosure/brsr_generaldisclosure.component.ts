import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { Brsr_imagereportService } from '../brsr_imagereport/brsr_imagereport.service';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';
import { AppService } from 'app/app.service';
import { AuthService } from 'app/core/auth/auth.service';
import { SelectbrsrService } from '../selectbrsr/selectbrsr.service';
import { CreatereportforbrsrService } from '../createreportforbrsr/createreportforbrsr.service';
import Questions from '../../../../assets/brsr_questions.json';

@Component({
    selector: 'app-brsr_generaldisclosure',
    templateUrl: './brsr_generaldisclosure.component.html',
    styleUrls: ['./brsr_generaldisclosure.component.scss'],
})
export class Brsr_generaldisclosureComponent implements OnInit {
    reportid: any;
    reportname: any;
    templatemenu: any;
    designtemplate: any;
    startdate: any;
    enddate: any;
    currentYear: number;
    PreviousYear:number;
    previousOfPreviousYear:number;
    qaaobject:any;
    counter=0 ;
    tsarray:any[];
  tsarray1:any[];
  store:number = 0;
    srno:any;
    table1:any;
    gd2table1:any =[];
    gd2table2:any =[];
    gd5table1:any =[];
    gd7table1:any =[];
    gd7table2:any =[];
    valfortf:boolean = false;
    valfortf2:boolean = false;
    valfortf3:boolean = false;
    valfortf4:boolean = false;
    valfortf5:boolean = false;
    valfortf6:boolean = false;
    valfortf7:boolean = false;
    
    public questionValues19: any[] = [];
    public answerValues19: any[] = [];
    public questionValues: any[] = [];
    public answerValues: any[] = [];
    public questionValues1: any[] = [];
    public answerValues1: any[] = [];
   // public answerValues2: any[] = [];
    public questionValues3: any[] = [];
    public answerValues3: any[] = [];
    public questionValues4: any[] = [];
    public answerValues4: any[] = [];
    public questionValues5: any[] = [];
    public answerValues5: any[] = [];
    public questionValues6: any[] = [];
    public answerValues6: any[] = [];
    public questionValues7: any[] = [];
    public answerValues7: any[] = [];
    public questionValues8: any[] = [];
    public answerValues8: any[] = [];
    public questionValues9: any[] = [];
    public answerValues9: any[] = [];

    public questionValues10: any[] = [];
    public answerValues10: any[] = [];
    public answerValues10values: any[] = [];
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
        private ss: SelectbrsrService,
        private crs: CreatereportforbrsrService,
        private us: UpdatereportService,
        private is: Brsr_imagereportService,
        private ds: DashboardService
    ) {
        this.srno=0;
    }
    finalobj: any = {};
    ngOnInit() {
      this.tsarray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      this.tsarray1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        const Today = new Date();
    this.currentYear = Today.getFullYear();
    this.PreviousYear=this.currentYear-1;
    this.previousOfPreviousYear = this.currentYear-2;
        this.reportid = this.aa.snapshot.paramMap.get('reportId');
        this.us
            .getBRSRReportDetailsByReportId(this.reportid)
            .subscribe((res) => {
                this.reportname = res[0].ReportName;
                this.startdate = res[0].StartDate;
                this.enddate = res[0].EndDate;
                this.qaa = JSON.parse(res[0].InitialDraftReport);
                this.qaaobject = this.qaa;
                console.log(this.qaaobject);
                
                const questionValues = Object.values(Questions[0]);
                const answerValues =Object.values(this.qaa[0])
                this.questionValues = Object.values(Questions[0]);
                this.answerValues = Object.values(this.qaa[0]);
                this.questionValues1 = Object.values(Questions[1]);
                console.log(this.questionValues1);
                // Assuming answerValues1 is an array of JSON strings
                this.answerValues1 = Object.values(this.qaa[1]).map((jsonString: string) => JSON.parse(jsonString));
               // this.answerValues19 = Object.values(this.qaa[19]).map((jsonString: string) => JSON.parse(jsonString));
                //this.answerValues1 = Object.values(this.qaa[1]);
               // this.answerValues2 = Object.values(this.qaa[1]).map((jsonString: string) => JSON.parse(jsonString));
                 console.log(this.answerValues19);
                 console.log(this.answerValues1);
                // console.log(this.answerValues1[0]);
                this.questionValues3 = Object.values(Questions[2]);
                this.answerValues3 = Object.values(this.qaa[2]);
                // console.log(this.answerValues3);
                // console.log(this.questionValues3);
                this.questionValues4 = Object.values(Questions[3]);
                this.answerValues4 = Object.values(this.qaa[3]);

                this.questionValues5 = Object.values(Questions[4]);
                this.answerValues5 = Object.values(this.qaa[4]).map((jsonString: string) => JSON.parse(jsonString));
               console.log(this.answerValues5);
               console.log(this.questionValues5);
               
               this.questionValues6 = Object.values(Questions[5]);
               this.answerValues6 = Object.values(this.qaa[5]);

               this.questionValues7 = Object.values(Questions[6]);
               this.answerValues7 = Object.values(this.qaa[6]).map((jsonString: string) => JSON.parse(jsonString));
               console.log(this.answerValues7);
               //management1
               this.questionValues8 = Object.values(Questions[7]);
               this.answerValues8 = Object.values(this.qaa[7]);
               console.log(this.qaaobject[3]['Question1']);
               console.log(this.qaaobject[3]['Question31']);
            //    //management2
            //    this.questionValues9 = Object.values(Questions[8]);
            //    this.answerValues9 = Object.values(this.qaa[8]);


            //    console.log(this.answerValues9);
            //    console.log( this.answerValues );
            //                 //principle6
            // //    console.log(Questions);
            // //    this.questionValues10 = Object.values(Questions[9]);
            // //    this.answerValues10 = Object.values(this.qaa[9]).map((jsonString: string) => JSON.parse(jsonString));
            // //    this.answerValues10values = Object.values(this.qaa[9]);
 
   // this.gd2table1 = JSON.parse(this.qaaobject[1]['Table1']);
   if(this.qaaobject[1]['Table1'] != null || this.qaaobject[1]['Table1'] != undefined )
   {
     let localval = JSON.parse(this.qaaobject[1]['Table1']);
    if(localval[0]['Type'] != '' || localval[0]['Assessments'] != '' || localval[0]['Turnover'] != '') 
    {
     this.gd2table1 = JSON.parse(this.qaaobject[1]['Table1']);
     console.log(this.gd2table1);
     
    }
    else 
    {
     this.gd2table1 = [];
    }
     
   } else 
   {
     this.gd2table1 = [];
   };

   
   if(this.qaaobject[4]['Table1'] != null || this.qaaobject[4]['Table1'] != undefined )
   {
     let localval = JSON.parse(this.qaaobject[4]['Table1']);
     if(localval[0]['Subject'] != '' || localval[0]['Type'] != '' || localval[0]['Assessments'] != '' || localval[0]['Labs'] != '' || localval[0]['Projects'] != '' )
    {
     this.gd5table1 = JSON.parse(this.qaaobject[4]['Table1']);
     console.log(this.gd5table1);
    }
    else 
    {
     this.gd5table1 = [];
    }
     
   } else 
   {
     this.gd5table1 = [];
   };
  // this.gd2table2 = JSON.parse(this.qaaobject[1]['Table2']);
  if(this.qaaobject[1]['Table2'] != null || this.qaaobject[1]['Table2'] != undefined )
  {
    let localval = JSON.parse(this.qaaobject[1]['Table2']);
   if(localval[0]['Assessments2x'] != '' || localval[0]['Type2x'] != '' || localval[0]['Projects2x'] != '' || localval[0]['Labs2x'] != '') 
   {
    this.gd2table2 = JSON.parse(this.qaaobject[1]['Table2']);
    console.log(this.gd2table2);
    
   }
   else 
   {
    this.gd2table2 = [];
   }
    
  } else 
  {
    this.gd2table2 = [];
  };
   
   if(this.qaaobject[6]['Table1'] != null || this.qaaobject[6]['Table1'] != undefined )
   {
     let localval = JSON.parse(this.qaaobject[6]['Table1']);
     if(localval[0]['Subject'] != '' || localval[0]['Type'] != '' || localval[0]['Assessments'] != '' || localval[0]['Labs'] != '' || localval[0]['Projects'] != '' || localval[0]['Mitigated'] != '' || localval[0]['Financial'] != '' || localval[0]['Remarks'] != '' )
    {
     this.gd7table2 = JSON.parse(this.qaaobject[6]['Table1']);
     console.log(this.gd7table2);
     
    }
    else 
    {
     this.gd7table2 = [];
    }
     
   } else 
   {
     this.gd7table2 = [];
   }

   if(this.qaaobject[6]['Table2'] != null || this.qaaobject[6]['Table2'] != undefined )
   {
     let localval = JSON.parse(this.qaaobject[6]['Table2']);
     if(localval[0]['Subject2x'] != '' || localval[0]['Type2x'] != '' || localval[0]['Assessments2x'] != '' || localval[0]['Labs2x'] != '' || localval[0]['Projects2x'] != '' || localval[0]['Project2x'] != '' || localval[0]['Remarks'] != '' || localval[0]['Financial1'] != '' ) 
   {
     this.gd7table1 = JSON.parse(this.qaaobject[6]['Table2']);
     console.log(this.gd7table1);
     
    }
    else 
    {
     this.gd7table1 = [];
    }
     
   } else 
   {
     this.gd7table1 = [];
   }

  


  

 
               //console.log(JSON.parse(this.answerValues19[2])[0]) ;
            });

        this.is
            .getBRSRFinalReportDetailsByReportId(this.reportid)
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

    hello1(index:number,change:any){
 
      this.tsarray[index]=change;
      //  console.log(this.apps.counter);
      // this.store=1;
      for(var i=0;i<this.tsarray.length;i++){
        if(this.tsarray[i]==1){
          // this.store+=1;
          this.tsarray1[i]=this.counter+i+1;
        }
      }
      this.store=Math.max(...this.tsarray1);
    
        // console.log(this.store);
        // this.counter1=this.store;
        this.service.counter=this.store;
    
    }
trufal(){
    this.valfortf=true;
  }
  trufal2(){
    this.valfortf2=true;
  }
  trufal3(){
    this.valfortf3=true;
  }
  trufal4(){
    this.valfortf4=true;
  }
  trufal5(){
    this.valfortf5=true;
  }
  trufal6(){
    this.valfortf6=true;
  }

}
