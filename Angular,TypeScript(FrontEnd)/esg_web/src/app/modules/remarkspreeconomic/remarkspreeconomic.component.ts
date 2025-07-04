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
import { ValidatingreportscreenService } from '../validatingreportscreen/validatingreportscreen.service';

@Component({
  selector: 'app-remarkspreeconomic',
  templateUrl: './remarkspreeconomic.component.html',
  styleUrls: ['./remarkspreeconomic.component.scss']
})
export class RemarkspreeconomicComponent implements OnInit {
  reportid:any;
  reportname:any
  templatemenu: any;
  qaa:any;
  qa:any;

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
  dynamicTable2021:any[];
  dynamicTable2022:any[];
  dynamicTable2041:any[];
  dynamicTable2052:any[];
  dynamicTable20523:any[];
  dynamicTable20525:any[];
  dynamicTable20526:any[];
  tsarray:any[];
  tsarray1:any[];
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
  store:number = 0;
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
  counter=1;

  startdate:any;
  enddate:any;
  firstimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp1.png";
  secondimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp2.png";
  thirdimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp3.png";
  fourthimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp4.png";
  fifthimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp5.png";
  imageUrl:any;
  constructor(private route:ActivatedRoute,private aa:ActivatedRoute,private AuthService:AuthService,private service: AppService,private vrs:ValidatingreportscreenService,
    private importservice:ImportdisService,private dds:DynamiccontentService,private ss:SelectdisService,private crs:CreatereportService,private us:UpdatereportService,private is:ImagereportService,private ds:DashboardService) { }
  finalobj:any={}
  ngOnInit() {
   
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    // this.vrs.GetValidatingFinalReportByonlyReportid(this.reportid).subscribe(res =>{
    //   console.log(res);
    // });
    // console.log(this.AuthService.user.id);
    console.log(this.service.valuserid);
    this.vrs.GetValidatingFinalReportByReportId(this.reportid,this.service.valuserid).subscribe(datta=>{
      console.log(datta);
   
    this.us.getReportDetailsByReportId(this.reportid).subscribe(res=>{
      
      this.reportname=res[0].ReportName
      this.startdate=res[0].StartDate
      this.enddate=res[0].EndDate
     this.qaa=JSON.parse(datta[0].Remarks) 
     this.dynamicobj = JSON.parse(datta[0].Remarks) 
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
    // console.log(this.dynamicobj);
    //  console.log(this.dynamicobj['one']);
 //200  Series
 if(this.dynamicobj["201-1question2"] == null || this.dynamicobj["201-1question2"] =='' || this.dynamicobj["201-1question2"]=='[]'|| this.dynamicobj["201-1question2"] == undefined)
 {
  this.dynamicTable20212=null
 }
 else{
  this.dynamicTable20212 =JSON.parse(this.dynamicobj['201-1question2']);
  var dynamicTable20212len=this.dynamicTable20212.length;
 }
 if(this.dynamicobj["201-1question3"] == null || this.dynamicobj["201-1question3"] =='' || this.dynamicobj["201-1question3"]=='[]'|| this.dynamicobj["201-1question3"] == undefined)
 {
  this.dynamicTable20213=null
 }
 else{
  this.dynamicTable20213 =JSON.parse(this.dynamicobj['201-1question3']);
  var dynamicTable20213len=this.dynamicTable20213.length;
 }
 if(this.dynamicobj["201-1question4"] == null || this.dynamicobj["201-1question4"] =='' || this.dynamicobj["201-1question4"]=='[]'|| this.dynamicobj["201-1question4"] == undefined)
 {
  this.dynamicTable20214=null
 }
 else{
  this.dynamicTable20214 =JSON.parse(this.dynamicobj['201-1question4']);
  var dynamicTable20214len=this.dynamicTable20214.length;
 }
 if(this.dynamicobj["201-3question1"] == null || this.dynamicobj["201-3question1"] =='' || this.dynamicobj["201-3question1"]=='[]'|| this.dynamicobj["201-3question1"] == undefined)
 {
  this.dynamicTable20131=null
 }
 else{
  this.dynamicTable20131 =JSON.parse(this.dynamicobj['201-3question1']);
  var dynamicTable20131len=this.dynamicTable20131.length;
 }
 if(this.dynamicobj["201-3question2"] == null || this.dynamicobj["201-3question2"] =='' || this.dynamicobj["201-3question2"]=='[]'|| this.dynamicobj["201-3question2"] == undefined)
 {
  this.dynamicTable20132=null
 }
 else{
  this.dynamicTable20132 =JSON.parse(this.dynamicobj['201-3question2']);
  var dynamicTable20132len=this.dynamicTable20132.length;
 }
 if(this.dynamicobj["201-3question3"] == null || this.dynamicobj["201-3question3"] =='' || this.dynamicobj["201-3question3"]=='[]'|| this.dynamicobj["201-3question3"] == undefined)
 {
  this.dynamicTable20133=null
 }
 else{
  this.dynamicTable20133 =JSON.parse(this.dynamicobj['201-3question3']);
  var dynamicTable20133len=this.dynamicTable20133.length;
 }
 if(this.dynamicobj["201-3question4"] == null || this.dynamicobj["201-3question4"] =='' || this.dynamicobj["201-3question4"]=='[]'|| this.dynamicobj["201-3question4"] == undefined)
 {
  this.dynamicTable20134=null
 }
 else{
  this.dynamicTable20134 =JSON.parse(this.dynamicobj['201-3question4']);
  var dynamicTable20134len=this.dynamicTable20134.length;
 }
 if(this.dynamicobj["201-3question5"] == null || this.dynamicobj["201-3question5"] =='' || this.dynamicobj["201-3question5"]=='[]'|| this.dynamicobj["201-3question5"] == undefined)
 {
  this.dynamicTable20135=null
 }
 else{
  this.dynamicTable20135 =JSON.parse(this.dynamicobj['201-3question5']);
  var dynamicTable20135len=this.dynamicTable20135.length;
 }
 if(this.dynamicobj["201-3question7"] == null || this.dynamicobj["201-3question7"] =='' || this.dynamicobj["201-3question7"]=='[]'|| this.dynamicobj["201-3question7"] == undefined)
 {
  this.dynamicTable20137=null
 }
 else{
  this.dynamicTable20137 =JSON.parse(this.dynamicobj['201-3question7']);
  var dynamicTable20137len=this.dynamicTable20137.length;
 }
 if(this.dynamicobj["201-4question1"] == null || this.dynamicobj["201-4question1"] =='' || this.dynamicobj["201-4question1"]=='[]'|| this.dynamicobj["201-4question1"] == undefined)
 {
  this.dynamicTable20141=null
 }
 else{
  this.dynamicTable20141 =JSON.parse(this.dynamicobj['201-4question1']);
  var dynamicTable20141len=this.dynamicTable20141.length;
 }
 if(this.dynamicobj["201-4question2"] == null || this.dynamicobj["201-4question2"] =='' || this.dynamicobj["201-4question2"]=='[]'|| this.dynamicobj["201-4question2"] == undefined)
 {
  this.dynamicTable20142=null
 }
 else{
  this.dynamicTable20142 =JSON.parse(this.dynamicobj['201-4question2']);
  var dynamicTable20142len=this.dynamicTable20142.length;
 }
 if(this.dynamicobj["201-4question3"] == null || this.dynamicobj["201-4question3"] =='' || this.dynamicobj["201-4question3"]=='[]'|| this.dynamicobj["201-4question3"] == undefined)
 {
  this.dynamicTable20143=null
 }
 else{
  this.dynamicTable20143 =JSON.parse(this.dynamicobj['201-4question3']);
  var dynamicTable20143len=this.dynamicTable20143.length;
 }
 if(this.dynamicobj["201-4question4"] == null || this.dynamicobj["201-4question4"] =='' || this.dynamicobj["201-4question4"]=='[]'|| this.dynamicobj["201-4question4"] == undefined)
 {
  this.dynamicTable20144=null
 }
 else{
  this.dynamicTable20144 =JSON.parse(this.dynamicobj['201-4question4']);
  var dynamicTable20144len=this.dynamicTable20144.length;
 }
 if(this.dynamicobj["201-4question5"] == null || this.dynamicobj["201-4question5"] =='' || this.dynamicobj["201-4question5"]=='[]'|| this.dynamicobj["201-4question5"] == undefined)
 {
  this.dynamicTable20145=null
 }
 else{
  this.dynamicTable20145 =JSON.parse(this.dynamicobj['201-4question5']);
  var dynamicTable20145len=this.dynamicTable20145.length;
 }
 if(this.dynamicobj["201-4question6"] == null || this.dynamicobj["201-4question6"] =='' || this.dynamicobj["201-4question6"]=='[]'|| this.dynamicobj["201-4question6"] == undefined)
 {
  this.dynamicTable20146=null
 }
 else{
  this.dynamicTable20146 =JSON.parse(this.dynamicobj['201-4question6']);
  var dynamicTable20146len=this.dynamicTable20146.length;
 }
 if(this.dynamicobj["201-4question7"] == null || this.dynamicobj["201-4question7"] =='' || this.dynamicobj["201-4question7"]=='[]'|| this.dynamicobj["201-4question7"] == undefined)
 {
  this.dynamicTable20147=null
 }
 else{
  this.dynamicTable20147 =JSON.parse(this.dynamicobj['201-4question7']);
  var dynamicTable20147len=this.dynamicTable20147.length;
 }
 if(this.dynamicobj["201-4question8"] == null || this.dynamicobj["201-4question8"] =='' || this.dynamicobj["201-4question8"]=='[]'|| this.dynamicobj["201-4question8"] == undefined)
 {
  this.dynamicTable20148=null
 }
 else{
  this.dynamicTable20148 =JSON.parse(this.dynamicobj['201-4question8']);
  var dynamicTable20148len=this.dynamicTable20148.length;
 }
 if(this.dynamicobj["201-4question10"] == null || this.dynamicobj["201-4question10"] =='' || this.dynamicobj["201-4question10"]=='[]'|| this.dynamicobj["201-4question10"] == undefined)
 {
  this.dynamicTable201410=null
 }
 else{
  this.dynamicTable201410 =JSON.parse(this.dynamicobj['201-4question10']);
  var dynamicTable201410len=this.dynamicTable201410.length;
 }
 if(this.dynamicobj["201-4question11"] == null || this.dynamicobj["201-4question11"] =='' || this.dynamicobj["201-4question11"]=='[]'|| this.dynamicobj["201-4question11"] == undefined)
 {
  this.dynamicTable201411=null
 }
 else{
  this.dynamicTable201411 =JSON.parse(this.dynamicobj['201-4question11']);
  var dynamicTable201411len=this.dynamicTable201411.length;
 }
 if(this.dynamicobj["201-4question12"] == null || this.dynamicobj["201-4question12"] =='' || this.dynamicobj["201-4question12"]=='[]'|| this.dynamicobj["201-4question12"] == undefined)
 {
  this.dynamicTable201412=null
 }
 else{
  this.dynamicTable201412 =JSON.parse(this.dynamicobj['201-4question12']);
  var dynamicTable201412len=this.dynamicTable201412.length;
 }
 if(this.dynamicobj["201-4question13"] == null || this.dynamicobj["201-4question13"] =='' || this.dynamicobj["201-4question13"]=='[]'|| this.dynamicobj["201-4question13"] == undefined)
 {
  this.dynamicTable201413=null
 }
 else{
  this.dynamicTable201413 =JSON.parse(this.dynamicobj['201-4question13']);
  var dynamicTable201413len=this.dynamicTable201413.length;
 }
 if(this.dynamicobj["201-4question14"] == null || this.dynamicobj["201-4question14"] =='' || this.dynamicobj["201-4question14"]=='[]'|| this.dynamicobj["201-4question14"] == undefined)
 {
  this.dynamicTable201414=null
 }
 else{
  this.dynamicTable201414 =JSON.parse(this.dynamicobj['201-4question14']);
  var dynamicTable201414len=this.dynamicTable201414.length;
 }
 if(this.dynamicobj["201-4question15"] == null || this.dynamicobj["201-4question15"] =='' || this.dynamicobj["201-4question15"]=='[]'|| this.dynamicobj["201-4question15"] == undefined)
 {
  this.dynamicTable201415=null
 }
 else{
  this.dynamicTable201415 =JSON.parse(this.dynamicobj['201-4question15']);
  var dynamicTable201415len=this.dynamicTable201415.length;
 }
 if(this.dynamicobj["201-4question16"] == null || this.dynamicobj["201-4question16"] =='' || this.dynamicobj["201-4question16"]=='[]'|| this.dynamicobj["201-4question16"] == undefined)
 {
  this.dynamicTable201416=null
 }
 else{
  this.dynamicTable201416 =JSON.parse(this.dynamicobj['201-4question16']);
  var dynamicTable201416len=this.dynamicTable201416.length;
 }
 if(this.dynamicobj["201-4question17"] == null || this.dynamicobj["201-4question17"] =='' || this.dynamicobj["201-4question17"]=='[]'|| this.dynamicobj["201-4question17"] == undefined)
 {
  this.dynamicTable201417=null
 }
 else{
  this.dynamicTable201417 =JSON.parse(this.dynamicobj['201-4question17']);
  var dynamicTable201417len=this.dynamicTable201417.length;
 }
 if(this.dynamicobj["202-1question1"] == null || this.dynamicobj["202-1question1"] =='' || this.dynamicobj["202-1question1"]=='[]'|| this.dynamicobj["202-1question1"] == undefined)
 {
  this.dynamicTable2021=null
 }
 else{
  this.dynamicTable2021 =JSON.parse(this.dynamicobj['202-1question1']);
  var dynamicTable2021len=this.dynamicTable2021.length;
 }
 if(this.dynamicobj["202-2question1"] == null || this.dynamicobj["202-2question1"] =='' || this.dynamicobj["202-2question1"]=='[]'|| this.dynamicobj["202-2question1"] == undefined)
 {
  this.dynamicTable2022=null
 }
 else{
  this.dynamicTable2022 =JSON.parse(this.dynamicobj['202-2question1']);
  var dynamicTable2022len=this.dynamicTable2022.length;
 }
 if(this.dynamicobj["203-2question1"] == null || this.dynamicobj["203-2question1"] =='' || this.dynamicobj["203-2question1"]=='[]'|| this.dynamicobj["203-2question1"] == undefined)
 {
  this.dynamicTable20321=null
 }
 else{
  this.dynamicTable20321 =JSON.parse(this.dynamicobj['203-2question1']);
  var dynamicTable20321len=this.dynamicTable20321.length;
 }
 if(this.dynamicobj["203-2question2"] == null || this.dynamicobj["203-2question2"] =='' || this.dynamicobj["203-2question2"]=='[]'|| this.dynamicobj["203-2question2"] == undefined)
 {
  this.dynamicTable20322=null
 }
 else{
  this.dynamicTable20322 =JSON.parse(this.dynamicobj['203-2question2']);
  var dynamicTable20322len=this.dynamicTable20322.length;
 }
 if(this.dynamicobj["204-1question1"] == null || this.dynamicobj["204-1question1"] =='' || this.dynamicobj["204-1question1"]=='[]'|| this.dynamicobj["204-1question1"] == undefined)
 {
  this.dynamicTable2041=null
 }
 else{
  this.dynamicTable2041 =JSON.parse(this.dynamicobj['204-1question1']);
  var dynamicTable2041len=this.dynamicTable2041.length;
 }
 if(this.dynamicobj["205-2question1"] == null || this.dynamicobj["205-2question1"] =='' || this.dynamicobj["205-2question1"]=='[]'|| this.dynamicobj["205-2question1"] == undefined)
 {
  this.dynamicTable2052=null
 }
 else{
  this.dynamicTable2052 =JSON.parse(this.dynamicobj['205-2question1']);
  var dynamicTable2052len=this.dynamicTable2052.length;
 }
 if(this.dynamicobj["205-2question2"] == null || this.dynamicobj["205-2question2"] =='' || this.dynamicobj["205-2question2"]=='[]'|| this.dynamicobj["205-2question2"] == undefined)
 {
  this.dynamicTable2052b=null
 }
 else{
  this.dynamicTable2052b =JSON.parse(this.dynamicobj['205-2question2']);
  var dynamicTable2052blen=this.dynamicTable2052b.length;
 }
 if(this.dynamicobj["205-2question3"] == null || this.dynamicobj["205-2question3"] =='' || this.dynamicobj["205-2question3"]=='[]'|| this.dynamicobj["205-2question3"] == undefined)
 {
  this.dynamicTable20523=null
 }
 else{
  this.dynamicTable20523 =JSON.parse(this.dynamicobj['205-2question3']);
  var dynamicTable20523len=this.dynamicTable20523.length;
 }
 if(this.dynamicobj["205-2question5"] == null || this.dynamicobj["205-2question5"] =='' || this.dynamicobj["205-2question5"]=='[]'|| this.dynamicobj["205-2question5"] == undefined)
 {
  this.dynamicTable20525=null
 }
 else{
  this.dynamicTable20525 =JSON.parse(this.dynamicobj['205-2question5']);
  var dynamicTable20525len=this.dynamicTable20525.length;
 }
 if(this.dynamicobj["205-2question6"] == null || this.dynamicobj["205-2question6"] =='' || this.dynamicobj["205-2question6"]=='[]'|| this.dynamicobj["205-2question6"] == undefined)
 {
  this.dynamicTable20526=null
 }
 else{
  this.dynamicTable20526 =JSON.parse(this.dynamicobj['205-2question6']);
  var dynamicTable20526len=this.dynamicTable20526.length;
 }
 if(this.dynamicobj["205-3question4"] == null || this.dynamicobj["205-3question4"] =='' || this.dynamicobj["205-3question4"]=='[]'|| this.dynamicobj["205-3question4"] == undefined)
 {
  this.dynamicTable20534=null
 }
 else{
  this.dynamicTable20534 =JSON.parse(this.dynamicobj['205-3question4']);
  var dynamicTable20534len=this.dynamicTable20534.length;
 }
 if(this.dynamicobj["206-1question2"] == null || this.dynamicobj["206-1question2"] =='' || this.dynamicobj["206-1question2"]=='[]'|| this.dynamicobj["206-1question2"] == undefined)
 {
  this.dynamicTable2061b=null
 }
 else{
  this.dynamicTable2061b =JSON.parse(this.dynamicobj['206-1question2']);
  var dynamicTable2061blen=this.dynamicTable2061b.length;
 }
 if(this.dynamicobj["207-1question2"] == null || this.dynamicobj["207-1question2"] =='' || this.dynamicobj["207-1question2"]=='[]'|| this.dynamicobj["207-1question2"] == undefined)
 {
  this.dynamicTable20712=null
 }
 else{
  this.dynamicTable20712 =JSON.parse(this.dynamicobj['207-1question2']);
  var dynamicTable20712len=this.dynamicTable20712.length;
 }

     this.keys=Object.keys(this.qaa)
    this.vals=Object.values(this.qaa)
    this.entries=Object.entries(this.qaa)

     })
    });
 
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

hello(){
  
  this.counter=this.counter+1;
  console.log(this.counter);
  // const res=this.counter;

  this.service.counter=this.counter;
  // console.log(res);
}
hello1(index:number,change:any){
  this.tsarray[index]=change;
  //  console.log(this.apps.counter);
  // this.store=1;
  for(var i=0;i<this.tsarray.length;i++){
    if(this.tsarray[i]==1){
      // this.store+=1;
      this.tsarray1[i]=this.service.counter+i+1;
    }
  }
  this.store=Math.max(...this.tsarray1);

  //  console.log(this.store);
}




  }  