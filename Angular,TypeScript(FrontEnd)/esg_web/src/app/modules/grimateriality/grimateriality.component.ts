import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdatereportService } from '../updatereport/updatereport.service';
import { ImagereportService } from '../imagereport/imagereport.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { AuthService } from 'app/core/auth/auth.service';
import { ImportdisService } from '../importdis/importdis.service';
import { SelectdisService } from '../selectdis/selectdis.service';
import { CreatereportService } from '../createreport/createreport.service';
import { DynamiccontentService } from '../dynamiccontent/dynamiccontent.service';
import  Questions   from '../../../assets/questions.json'
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-grimateriality',
  templateUrl: './grimateriality.component.html',
  styleUrls: ['./grimateriality.component.css']
})
export class GrimaterialityComponent implements OnInit {
  reportid:any;
  reportname:any
  templatemenu: any;
  qaa:any;
  qa:any;
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

  dynamicTablemtptdmttwotable1:any[];
  dynamicTablemtptdmttwotable2:any[];
  dynamicTablemtptdmttwotable3:any[];
  dynamicTablemtptdmttwotable4:any[];
  dynamicTablemtptdmttwotable5:any[];
  dynamicTablemtptdmttwotable6:any[];
  dynamicTablemtptdmttwotable7:any[];
  dynamicTablemtptdmttwotable8:any[];
  dynamicTablemtptdmttwotable9:any[];
  dynamicTablemtptdmttwotable10:any[];
  dynamicTablemtptdmttwotable11:any[];

  dynamicTable3034b1:any[];
  dynamicTable3034b2:any[];
  dynamicTable3034b3:any[];
  dynamicTable3034b4:any[];
  dynamicTable3063:any[];
  dynamicTable3064:any[];
  onlyval:any;

  dynamicTableturnover1:any[];
  dynamicTableturnover2:any[];
  dynamicTable4122:any[];
  tsarray:any[];

  tsarray1:any[];
  firstimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp1.png";
  secondimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp2.png";
  thirdimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp3.png";
  fourthimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp4.png";
  fifthimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp5.png";
  imageUrl:any;
  constructor(private route:ActivatedRoute,private aa:ActivatedRoute,private AuthService:AuthService,private apps:AppService,
    private importservice:ImportdisService,private dds:DynamiccontentService,private ss:SelectdisService,private crs:CreatereportService,private us:UpdatereportService,private is:ImagereportService,private ds:DashboardService) { }
  finalobj:any={}
  ngOnInit() {
    this.tsarray = [0,0,0,0,0,0,0];

    this.tsarray1 = [0,0,0,0,0,0,0];

    //console.log(this.tsarray.length);
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    this.us.getReportDetailsByReportId(this.reportid).subscribe(res=>{
     // console.log(res)
      this.reportname=res[0].ReportName
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

         //3 Series 
         if(this.dynamicobj["mtptdmttwotable1"] == null || this.dynamicobj["mtptdmttwotable1"] =='' || this.dynamicobj["mtptdmttwotable1"]=='[]'|| this.dynamicobj["mtptdmttwotable1"] == undefined)
         {
          this.dynamicTablemtptdmttwotable1=null
         }
         else{
          this.dynamicTablemtptdmttwotable1 =JSON.parse(this.dynamicobj['mtptdmttwotable1']);
          var dynamicTablemtptdmttwotable1len=this.dynamicTablemtptdmttwotable1.length;
         }
         if(this.dynamicobj["mtptdmttwotable2"] == null || this.dynamicobj["mtptdmttwotable2"] =='' || this.dynamicobj["mtptdmttwotable2"]=='[]'|| this.dynamicobj["mtptdmttwotable2"] == undefined)
         {
          this.dynamicTablemtptdmttwotable2=null
         }
         else{
          this.dynamicTablemtptdmttwotable2 =JSON.parse(this.dynamicobj['mtptdmttwotable2']);
          var dynamicTablemtptdmttwotable2len=this.dynamicTablemtptdmttwotable2.length;
         }
         if(this.dynamicobj["mtptdmttwotable3"] == null || this.dynamicobj["mtptdmttwotable3"] =='' || this.dynamicobj["mtptdmttwotable3"]=='[]'|| this.dynamicobj["mtptdmttwotable3"] == undefined)
         {
          this.dynamicTablemtptdmttwotable3=null
         }
         else{
          this.dynamicTablemtptdmttwotable3 =JSON.parse(this.dynamicobj['mtptdmttwotable3']);
          var dynamicTablemtptdmttwotable3len=this.dynamicTablemtptdmttwotable3.length;
         }
         if(this.dynamicobj["mtptdmttwotable4"] == null || this.dynamicobj["mtptdmttwotable4"] =='' || this.dynamicobj["mtptdmttwotable4"]=='[]'|| this.dynamicobj["mtptdmttwotable4"] == undefined)
         {
          this.dynamicTablemtptdmttwotable4=null
         }
         else{
          this.dynamicTablemtptdmttwotable4 =JSON.parse(this.dynamicobj['mtptdmttwotable4']);
          var dynamicTablemtptdmttwotable4len=this.dynamicTablemtptdmttwotable4.length;
         }
         if(this.dynamicobj["mtptdmttwotable5"] == null || this.dynamicobj["mtptdmttwotable5"] =='' || this.dynamicobj["mtptdmttwotable5"]=='[]'|| this.dynamicobj["mtptdmttwotable5"] == undefined)
         {
          this.dynamicTablemtptdmttwotable5=null
         }
         else{
          this.dynamicTablemtptdmttwotable5 =JSON.parse(this.dynamicobj['mtptdmttwotable5']);
          var dynamicTablemtptdmttwotable5len=this.dynamicTablemtptdmttwotable5.length;
         }
         if(this.dynamicobj["mtptdmttwotable6"] == null || this.dynamicobj["mtptdmttwotable6"] =='' || this.dynamicobj["mtptdmttwotable6"]=='[]'|| this.dynamicobj["mtptdmttwotable6"] == undefined)
         {
          this.dynamicTablemtptdmttwotable6=null
         }
         else{
          this.dynamicTablemtptdmttwotable6 =JSON.parse(this.dynamicobj['mtptdmttwotable6']);
          var dynamicTablemtptdmttwotable6len=this.dynamicTablemtptdmttwotable6.length;
         }
         if(this.dynamicobj["mtptdmttwotable7"] == null || this.dynamicobj["mtptdmttwotable7"] =='' || this.dynamicobj["mtptdmttwotable7"]=='[]'|| this.dynamicobj["mtptdmttwotable7"] == undefined)
         {
          this.dynamicTablemtptdmttwotable7=null
         }
         else{
          this.dynamicTablemtptdmttwotable7 =JSON.parse(this.dynamicobj['mtptdmttwotable7']);
          var dynamicTablemtptdmttwotable7len=this.dynamicTablemtptdmttwotable7.length;
         }
         if(this.dynamicobj["mtptdmttwotable8"] == null || this.dynamicobj["mtptdmttwotable8"] =='' || this.dynamicobj["mtptdmttwotable8"]=='[]'|| this.dynamicobj["mtptdmttwotable8"] == undefined)
         {
          this.dynamicTablemtptdmttwotable8=null
         }
         else{
          this.dynamicTablemtptdmttwotable8 =JSON.parse(this.dynamicobj['mtptdmttwotable8']);
          var dynamicTablemtptdmttwotable8len=this.dynamicTablemtptdmttwotable8.length;
         }
         if(this.dynamicobj["mtptdmttwotable9"] == null || this.dynamicobj["mtptdmttwotable9"] =='' || this.dynamicobj["mtptdmttwotable9"]=='[]'|| this.dynamicobj["mtptdmttwotable9"] == undefined)
         {
          this.dynamicTablemtptdmttwotable9=null
         }
         else{
          this.dynamicTablemtptdmttwotable9 =JSON.parse(this.dynamicobj['mtptdmttwotable9']);
          var dynamicTablemtptdmttwotable9len=this.dynamicTablemtptdmttwotable9.length;
         }
         if(this.dynamicobj["mtptdmttwotable10"] == null || this.dynamicobj["mtptdmttwotable10"] =='' || this.dynamicobj["mtptdmttwotable10"]=='[]'|| this.dynamicobj["mtptdmttwotable10"] == undefined)
         {
          this.dynamicTablemtptdmttwotable10=null
         }
         else{
          this.dynamicTablemtptdmttwotable10 =JSON.parse(this.dynamicobj['mtptdmttwotable10']);
          var dynamicTablemtptdmttwotable10len=this.dynamicTablemtptdmttwotable10.length;
         }
         if(this.dynamicobj["mtptdmttwotable11"] == null || this.dynamicobj["mtptdmttwotable11"] =='' || this.dynamicobj["mtptdmttwotable11"]=='[]'|| this.dynamicobj["mtptdmttwotable11"] == undefined)
         {
          this.dynamicTablemtptdmttwotable11=null
         }
         else{
          this.dynamicTablemtptdmttwotable11 =JSON.parse(this.dynamicobj['mtptdmttwotable11']);
          var dynamicTablemtptdmttwotable11len=this.dynamicTablemtptdmttwotable11.length;
         }

   // console.log(this.dynamicTable);
    
     this.keys=Object.keys(this.qaa)
    this.vals=Object.values(this.qaa)
    this.entries=Object.entries(this.qaa)

      // let vals=Object.values(this.qaa)

      // console.log('Vals ',vals);
     })
 
  this.dds.getPreviewReportById(this.reportid).subscribe((data)=>{

    this.templatemenu=data;
   // console.log(this.templatemenu);
    
  })
     this.is.getFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
      var size=Object.keys(res).length;
      //console.log(res);
      
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
  
    
  })}
  counter(i: number) {
    return new Array(i);
   // console.log(i);
    
    
}
hello1(index:number,change:any){

  this.tsarray[index]=change;

  //  console.log(this.apps.counter);

  // this.store=1;

  for(var i=0;i<this.tsarray.length;i++){

    if(this.tsarray[i]==1){

      this.tsarray1[i]=this.apps.counter+i+1;

    }

  }

  // console.log(this.tsarray1);

}
  }
