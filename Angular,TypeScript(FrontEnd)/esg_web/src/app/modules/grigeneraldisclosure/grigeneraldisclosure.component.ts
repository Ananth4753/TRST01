import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdatereportService } from '../updatereport/updatereport.service';
import { ImagereportService } from '../imagereport/imagereport.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { AppService } from 'app/app.service';
import { AuthService } from 'app/core/auth/auth.service';
import { ImportdisService } from '../importdis/importdis.service';
import { SelectdisService } from '../selectdis/selectdis.service';
import { CreatereportService } from '../createreport/createreport.service';
import { DynamiccontentService } from '../dynamiccontent/dynamiccontent.service';
import  Questions   from '../../../assets/questions.json'


@Component({
  selector: 'app-grigeneraldisclosure',
  templateUrl: './grigeneraldisclosure.component.html',
  styleUrls: ['./grigeneraldisclosure.component.scss']
})
export class GrigeneraldisclosureComponent implements OnInit {
  reportid:any;
  reportname:any
  templatemenu: any;
  qaa:any;
  qa:any;
  valfortf:boolean = false;
  valfortf2:boolean = false;
  valfortf3:boolean = false;
  valfortf4:boolean = false;
  valfortf5:boolean = false;
  valfortf6:boolean = false;
  valfortf7:boolean = false;
  valfortf8:boolean = false;
  valfortf9:boolean = false;
  valfortf10:boolean = false;
  valfortf11:boolean = false;
  valfortf12:boolean = false;
  valfortf13:boolean = false;
  valfortf14:boolean = false;
  valfortf15:boolean = false;
  valfortf16:boolean = false;
  valfortf17:boolean = false;
  valfortf18:boolean = false;
  valfortf19:boolean = false;
  valfortf20:boolean = false;
  valfortf21:boolean = false;
  valfortf22:boolean = false;
  dynamicTabletur:any[];
  valfortf23:boolean = false;
  valfortf24:boolean = false;
  valfortf25:boolean = false;
  valfortf26:boolean = false;
  valfortf27:boolean = false;
  valfortf28:boolean = false;
  valfortf29:boolean = false;
  valfortf30:boolean = false;
  valfortf31:boolean = false;
  valfortf32:boolean = false;
  valfortf33:boolean = false;
  valfortf34:boolean = false;
  valfortf35:boolean = false;
  valfortf36:boolean = false;
  valfortf37:boolean = false;
  valfortf38:boolean = false;
  valfortf39:boolean = false;
  valfortf40:boolean = false;
  valfortf41:boolean = false;
  valfortf42:boolean = false;
  valfortf43:boolean = false;
  valfortf44:boolean = false;
  raa:any;
  keys:any;
  vals:any;
  entries:any;
  questions:any;
  answers:any;
  name:any;
  answer1:any;
  answer2:any;
  answer3:any;
  answer4:any;
  htmlContent:any;
  answer5:any;
  pagenumber:any;
  dynamicobj:any;
  str:any[];
  dynamicTable:any[];
  dynamicTable1:any[];
  designtemplate:any;
  dynamicTable10261:any[];
  dynamicTable10262:any[];
  dynamicTable7th:any[];
  dynamicTable7thb:any[];
  dynamicTable7thc:any[];
  dynamicTable227f:any[];
  dynamicTable227ff:any[];
  dynamicTable23new:any[];
  dynamicTable2021:any[];
  dynamicTable2022:any[];
  dynamicTable2041:any[];
  dynamicTable2052:any[];
  dynamicTable20523:any[];
  dynamicTable20525:any[];
  dynamicTable20526:any[];

  dynamicTable20534:any[];

  dynamicTable20712:any[];

  dynamicTable3011i:any[];
  dynamicTable3011ii:any[];
  dynamicTable3012:any[];
  dynamicTable3013:any[];
  dynamicTable3021:any[];

  dynamicTable4031:any[];
  dynamicTable4043:any[];
  dynamicTable4051:any[];
  dynamicTable4052:any[];

  dynamicTable4121:any[];
  dynamicTable4151:any[];
  dynamicTable20212:any[];
  dynamicTable20213:any[];
  dynamicTable20214:any[];
  dynamicTable20131:any[];
  dynamicTable20132:any[];
  dynamicTable20133:any[];
  dynamicTable20134:any[];
  dynamicTable20135:any[];
  dynamicTable20137:any[];
  dynamicTable20141:any[];
  dynamicTable20142:any[];
  dynamicTable20143:any[];
  dynamicTable20144:any[];
  dynamicTable20145:any[];
  dynamicTable20146:any[];
  dynamicTable20147:any[];
  dynamicTable20148:any[];
  dynamicTable201410:any[];
  dynamicTable201411:any[];
  dynamicTable201412:any[];
  dynamicTable201413:any[];
  dynamicTable201414:any[];
  dynamicTable201415:any[];
  dynamicTable201416:any[];
  dynamicTable201417:any[];
  dynamicTable20321:any[];
  dynamicTable20322:any[];
  dynamicTable2052b:any[];
  dynamicTable2061b:any[];

  dynamicTable30415:any[];


  dynamicTable3034b1:any[];
  dynamicTable3034b2:any[];
  dynamicTable3034b3:any[];
  dynamicTable3034b4:any[];
  dynamicTable3063:any[];
  dynamicTable3064:any[];
  onlyval:any;
  counter=1;
  dynamicTableturnover1:any[];
  dynamicTableturnover2:any[];
  dynamicTable4122:any[];
  startdate:any;
  enddate:any;
  firstimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp1.png";
  secondimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp2.png";
  thirdimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp3.png";
  fourthimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp4.png";
  fifthimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp5.png";
  imageUrl:any;
  constructor(private route:ActivatedRoute,private aa:ActivatedRoute,private AuthService:AuthService,private service: AppService,
    private importservice:ImportdisService,private dds:DynamiccontentService,private ss:SelectdisService,private crs:CreatereportService,private us:UpdatereportService,private is:ImagereportService,private ds:DashboardService) { }
  finalobj:any={}
  ngOnInit() {
   
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    this.us.getReportDetailsByReportId(this.reportid).subscribe(res=>{
      this.reportname=res[0].ReportName
      this.startdate=res[0].StartDate
      this.enddate=res[0].EndDate
     this.qaa=JSON.parse(res[0].InitialDraftReport) 
     this.dynamicobj = JSON.parse(res[0].InitialDraftReport) 
     if(this.dynamicobj==null){
      this.importservice.getReportTemplateMenuSubIdByReportId(this.reportid).subscribe((data:any)=>{
            for(let i=0;i<data.length;i++)
            {
               let yoy=data[i]["TemplateMenuId"];
                if(Questions[yoy] != undefined)
                 {
                   if (JSON.stringify(this.finalobj) == '{}')
                   {
                     this.finalobj = Questions[yoy][0];
                    }
                     else{
                       Object.assign(this.finalobj,Questions[yoy][0])
                       }
                       }
                        if (data.length-1 ==i)
                         {
                          this.dynamicobj=this.finalobj
                          // console.log(this.finalobj)
                           } 
                          }
      }) 
     }

         //100 Series 
        if(this.dynamicobj["102-2AddTable2x"] == null || this.dynamicobj["102-2AddTable2x"] =='' || this.dynamicobj["102-2AddTable2x"]=='[]'|| this.dynamicobj["102-2AddTable2x"] == undefined)
        {
         this.dynamicTable1=null
        }
        else{
         this.dynamicTable1 =JSON.parse(this.dynamicobj['102-2AddTable2x']);
         var dynamicTable1len=this.dynamicTable1.length;
  
        }
        if(this.dynamicobj["102-2AddTable"] == null || this.dynamicobj["102-2AddTable"] =='' || this.dynamicobj["102-2AddTable"]=='[]'|| this.dynamicobj["102-2AddTable"] == undefined)
        {
         this.dynamicTable=null
        }
        else{
         this.dynamicTable =JSON.parse(this.dynamicobj['102-2AddTable']);
         let dynamicTablelen=this.dynamicTable.length;
        }
        if(this.dynamicobj["102-6T1AddTable"] == null || this.dynamicobj["102-6T1AddTable"] =='' || this.dynamicobj["102-6T1AddTable"]=='[]'|| this.dynamicobj["102-6T1AddTable"] == undefined)
        {
         this.dynamicTable10261=null
        }
        else{
         this.dynamicTable10261 =JSON.parse(this.dynamicobj['102-6T1AddTable']);
         var dynamicTable10261len=this.dynamicTable10261.length;
        }
        if(this.dynamicobj["102-6AddTable"] == null || this.dynamicobj["102-6AddTable"] =='' || this.dynamicobj["102-6AddTable"]=='[]'|| this.dynamicobj["102-6AddTable"] == undefined)
        {
         this.dynamicTable10262=null
        }
        else{
         this.dynamicTable10262 =JSON.parse(this.dynamicobj['102-6AddTable']);
         var dynamicTable10262len=this.dynamicTable10262.length;
        }
         if(this.dynamicobj["102-7A-Table"] == null || this.dynamicobj["102-7A-Table"] =='' || this.dynamicobj["102-7A-Table"]=='[]'|| this.dynamicobj["102-7A-Table"] == undefined)
         {
          this.dynamicTable7th=null
         }
         else{
          this.dynamicTable7th =JSON.parse(this.dynamicobj['102-7A-Table']);
         // console.log(this.dynamicTable7th);
          var dynamicTable7thlen=this.dynamicTable7th.length;
         }
         if(this.dynamicobj["102-7B-Table1"] == null || this.dynamicobj["102-7B-Table1"] =='' || this.dynamicobj["102-7B-Table1"]=='[]'|| this.dynamicobj["102-7B-Table1"] == undefined)
         {
          this.dynamicTable7thb=null
         }
         else{
          this.dynamicTable7thb =JSON.parse(this.dynamicobj['102-7B-Table1']);
         // console.log(this.dynamicTable7th);
          var dynamicTable7thblen=this.dynamicTable7thb.length;
         }
         if(this.dynamicobj["102-7B-Table2"] == null || this.dynamicobj["102-7B-Table2"] =='' || this.dynamicobj["102-7B-Table2"]=='[]'|| this.dynamicobj["102-7B-Table2"] == undefined)
         {
          this.dynamicTable7thc=null
         }
         else{
          this.dynamicTable7thc =JSON.parse(this.dynamicobj['102-7B-Table2']);
         // console.log(this.dynamicTable7th);
          var dynamicTable7thclen=this.dynamicTable7thc.length;
         }
         if(this.dynamicobj["102-27b11AddTable"] == null || this.dynamicobj["102-27b11AddTable"] =='' || this.dynamicobj["102-27b11AddTable"]=='[]'|| this.dynamicobj["102-27b11AddTable"] == undefined)
         {
          this.dynamicTable227f=null
         }
         else{
          this.dynamicTable227f =JSON.parse(this.dynamicobj['102-27b11AddTable']);
         // console.log(this.dynamicTable7th);
          var dynamicTable227flen=this.dynamicTable227f.length;
         }
         if(this.dynamicobj["102-27b22AddTable"] == null || this.dynamicobj["102-27b22AddTable"] =='' || this.dynamicobj["102-27b22AddTable"]=='[]'|| this.dynamicobj["102-27b22AddTable"] == undefined)
         {
          this.dynamicTable227ff=null
         }
         else{
          this.dynamicTable227ff =JSON.parse(this.dynamicobj['102-27b22AddTable']);
         // console.log(this.dynamicTable7th);
          var dynamicTable227fflen=this.dynamicTable227ff.length;
         }
         if(this.dynamicobj["102-23q5"] == null || this.dynamicobj["102-23q5"] =='' || this.dynamicobj["102-23q5"]=='[]'|| this.dynamicobj["102-23q5"] == undefined)
         {
          this.dynamicTable23new=null
         }
         else{
          this.dynamicTable23new =JSON.parse(this.dynamicobj['102-23q5']);
         // console.log(this.dynamicTable7th);
          var dynamicTable23newlen=this.dynamicTable23new.length;
         }
         

     this.keys=Object.keys(this.qaa)
    this.vals=Object.values(this.qaa)
    this.entries=Object.entries(this.qaa)

     })
 
  this.dds.getPreviewReportById(this.reportid).subscribe((data)=>{

    this.templatemenu=data;
    
  })
     this.is.getFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
      var size=Object.keys(res).length;
      
      this.designtemplate=res[0].DesignTemplate
      if(this.designtemplate==1){
        this.imageUrl=this.firstimage;
      }
      else if(this.designtemplate==2){
        this.imageUrl=this.secondimage;
      }
      else if(this.designtemplate==3){
        this.imageUrl=this.thirdimage;
      }
      else if(this.designtemplate==4){
        this.imageUrl=this.fourthimage;
      }
else{
  this.imageUrl=this.fifthimage;
}


    
  })
this.raa=1;

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
trufal7(){
  this.valfortf7=true;
}
trufal8(){
  this.valfortf8=true;
}
trufal9(){
  this.valfortf9=true;
}
trufal10(){
  this.valfortf10=true;
}

trufal11(){
  this.valfortf11=true;
}
trufal12(){
  this.valfortf12=true;
}
trufal13(){
  this.valfortf13=true;
}
trufal14(){
  this.valfortf14=true;
}
trufal15(){
  this.valfortf15=true;
}
trufal16(){
  this.valfortf16=true;
}
trufal17(){
  this.valfortf17=true;
}
trufal18(){
  this.valfortf18=true;
}
trufal19(){
  this.valfortf19=true;
}
trufal20(){
  this.valfortf20=true;
}

trufal21(){
  this.valfortf21=true;
}
trufal22(){
  this.valfortf22=true;
}
trufal23(){
  this.valfortf23=true;
}
trufal24(){
  this.valfortf24=true;
}
trufal25(){
  this.valfortf25=true;
}
trufal26(){
  this.valfortf26=true;
}
trufal27(){
  this.valfortf27=true;
}
trufal28(){
  this.valfortf28=true;
}
trufal29(){
  this.valfortf29=true;
}
trufal30(){
  this.valfortf30=true;
}

trufal31(){
  this.valfortf31=true;
}
trufal32(){
  this.valfortf32=true;
}
trufal33(){
  this.valfortf33=true;
}
trufal34(){
  this.valfortf34=true;
}
trufal35(){
  this.valfortf35=true;
}
trufal36(){
  this.valfortf36=true;
}
trufal37(){
  this.valfortf37=true;
}
trufal38(){
  this.valfortf38=true;
}
trufal39(){
  this.valfortf39=true;
}
trufal40(){
  this.valfortf40=true;
}
trufal41(){
  this.valfortf41=true;
}
trufal42(){
  this.valfortf42=true;
}
trufal43(){
  this.valfortf43=true;
}
trufal44(){
  this.valfortf44=true;
}

hello(){
  
  this.counter=this.counter+1;
 // console.log(this.counter);
  // const res=this.counter;

  this.service.counter=this.counter;
  // console.log(res);
  this.dynamicTabletur=this.dynamicobj['102-22Describe  political'];
}





  }  


