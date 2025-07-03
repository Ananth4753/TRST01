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
  selector: 'app-grienvironment',
  templateUrl: './grienvironment.component.html',
  styleUrls: ['./grienvironment.component.scss']
})
export class GrienvironmentComponent implements OnInit {
  reportid:any;
  reportname:any
  templatemenu: any;
  sssss:any
  qaa:any;
  qa:any;
  tsarray:any[];
  tsarray1:any[];
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
  dynamicTable3022:any[];
  dynamicTableturnover1:any[];
  dynamicTableturnover2:any[];
  dynamicTable4122:any[];

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
    this.tsarray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.tsarray1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    //console.log(this.tsarray.length);
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    this.us.getReportDetailsByReportId(this.reportid).subscribe(res=>{
      //console.log(res)
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

   
     
    //300  Series
//300  Series

if(this.dynamicobj["301-1AddTable"] == null || this.dynamicobj["301-1AddTable"] =='' || this.dynamicobj["301-1AddTable"]=='[]'|| this.dynamicobj["301-1AddTable"] == undefined)
{
 this.dynamicTable3011i=null
}
else{
  this.dynamicTable3011i =JSON.parse(this.dynamicobj['301-1AddTable']);
  //console.log(this.dynamicTable3011i)
  var dynamicTable3011ilen=this.dynamicTable3011i.length;

}

if(this.dynamicobj["301-1AddTableii"] == null || this.dynamicobj["301-1AddTableii"] =='' || this.dynamicobj["301-1AddTableii"]=='[]'|| this.dynamicobj["301-1AddTableii"] == undefined)
{
 this.dynamicTable3011ii=null
}
else{
  this.dynamicTable3011ii =JSON.parse(this.dynamicobj['301-1AddTableii']);
  //console.log(this.dynamicTable3011ii)
  var dynamicTable3011iilen=this.dynamicTable3011ii.length;
}

if(this.dynamicobj["301-2AddTable"] == null || this.dynamicobj["301-2AddTable"] =='' || this.dynamicobj["301-2AddTable"]=='[]'|| this.dynamicobj["301-2AddTable"] == undefined)
{
 this.dynamicTable3012=null
}
else{
  this.dynamicTable3012 =JSON.parse(this.dynamicobj['301-2AddTable']);
//console.log(this.dynamicTable3012)
var dynamicTable3012len=this.dynamicTable3012.length;

}

if(this.dynamicobj["301-3AddTable"] == null || this.dynamicobj["301-3AddTable"] =='' || this.dynamicobj["301-3AddTable"]=='[]'|| this.dynamicobj["301-3AddTable"] == undefined)
{
 this.dynamicTable3013=null
}
else{
  this.dynamicTable3013 =JSON.parse(this.dynamicobj['301-3AddTable']);
  //console.log(this.dynamicTable3013)
  var dynamicTable3013len=this.dynamicTable3013.length;

}

if(this.dynamicobj["302-1AddTable"] == null || this.dynamicobj["302-1AddTable"] =='' || this.dynamicobj["302-1AddTable"]=='[]'|| this.dynamicobj["302-1AddTable"] == undefined)
{
 this.dynamicTable3021=null
}
else{

  this.dynamicTable3021 =JSON.parse(this.dynamicobj['302-1AddTable']);
  //console.log(this.dynamicTable3021)
  var dynamicTable3021len=this.dynamicTable3021.length;

}
if(this.dynamicobj["302-1AddTable2"] == null || this.dynamicobj["302-1AddTable2"] =='' || this.dynamicobj["302-1AddTable2"]=='[]'|| this.dynamicobj["302-1AddTable2"] == undefined)
{
 this.dynamicTable3022=null
}
else{

this.dynamicTable3022 =JSON.parse(this.dynamicobj['302-1AddTable2']);
//console.log(this.dynamicTable3022)
var dynamicTable3022len=this.dynamicTable3022.length;

}
if(this.dynamicobj["303-4Q2"] == null || this.dynamicobj["303-4Q2"] =='' || this.dynamicobj["303-4Q2"]=='[]'|| this.dynamicobj["303-4Q2"] == undefined)
{
 this.dynamicTable3034b1=null
}
else{
  this.dynamicTable3034b1 =JSON.parse(this.dynamicobj['303-4Q2']);
  //console.log(this.dynamicTable3034b1)
  var dynamicTable3034b1len=this.dynamicTable3034b1.length;

}
if(this.dynamicobj["303-4Q3"] == null || this.dynamicobj["303-4Q3"] =='' || this.dynamicobj["303-4Q3"]=='[]'|| this.dynamicobj["303-4Q3"] == undefined)
{
 this.dynamicTable3034b2=null
}
else{

  this.dynamicTable3034b2 =JSON.parse(this.dynamicobj['303-4Q3']);
  var dynamicTable3034b2len=this.dynamicTable3034b2.length;
}
if(this.dynamicobj["303-4Q4"] == null || this.dynamicobj["303-4Q4"] =='' || this.dynamicobj["303-4Q4"]=='[]'|| this.dynamicobj["303-4Q4"] == undefined)
{
 this.dynamicTable3034b3=null
}
else{

  this.dynamicTable3034b3 =JSON.parse(this.dynamicobj['303-4Q4']);
  var dynamicTable3034b3len=this.dynamicTable3034b3.length;

}

if(this.dynamicobj["303-4Q5"] == null || this.dynamicobj["303-4Q5"] =='' || this.dynamicobj["303-4Q5"]=='[]'|| this.dynamicobj["303-4Q5"] == undefined)
{
 this.dynamicTable3034b4=null
}
else{

  this.dynamicTable3034b4 =JSON.parse(this.dynamicobj['303-4Q5']);
  var dynamicTable3034b4len=this.dynamicTable3034b4.length;

}
if(this.dynamicobj["304-1AddTable"] == null || this.dynamicobj["304-1AddTable"] =='' || this.dynamicobj["304-1AddTable"]=='[]'|| this.dynamicobj["304-1AddTable"] == undefined)
{
 this.dynamicTable30415=null
}
else{


  this.dynamicTable30415 =JSON.parse(this.dynamicobj['304-1AddTable']);
  var dynamicTable30415len=this.dynamicTable30415.length;

}
if(this.dynamicobj["306-4Qaddiii"] == null || this.dynamicobj["306-4Qaddiii"] =='' || this.dynamicobj["306-4Qaddiii"]=='[]'|| this.dynamicobj["306-4Qaddiii"] == undefined)
{
 this.dynamicTable3063=null
}
else{


  this.dynamicTable3063 =JSON.parse(this.dynamicobj['306-4Qaddiii']);
var dynamicTable3063len=this.dynamicTable3063.length;

}

if(this.dynamicobj["306-4Qaddii"] == null || this.dynamicobj["306-4Qaddii"] =='' || this.dynamicobj["306-4Qaddii"]=='[]'|| this.dynamicobj["306-4Qaddii"] == undefined)
{
 this.dynamicTable3064=null
}
else{

  this.dynamicTable3064 =JSON.parse(this.dynamicobj['306-4Qaddii']);
  var dynamicTable3064len=this.dynamicTable3064.length;
}


    //console.log(this.dynamicTable);
    
     this.keys=Object.keys(this.qaa)
    this.vals=Object.values(this.qaa)
    this.entries=Object.entries(this.qaa)

      // let vals=Object.values(this.qaa)

      // console.log('Vals ',vals);
     })
 
  this.dds.getPreviewReportById(this.reportid).subscribe((data)=>{

    this.templatemenu=data;
    //console.log(this.templatemenu);
    
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
    console.log(i);
    
    
}
hello1(index:number,change:any){
  this.tsarray[index]=change;
  //  console.log(this.apps.counter);
  // this.store=1;
  for(var i=0;i<this.tsarray.length;i++){
    if(this.tsarray[i]==1){
      this.tsarray1[i]=this.apps.counter1+i;
    }
  }
  this.sssss=Math.max(...this.tsarray1);
  this.apps.counter2=this.sssss
}
  }


