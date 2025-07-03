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
  selector: 'app-remarkspremateriality',
  templateUrl: './remarkspremateriality.component.html',
  styleUrls: ['./remarkspremateriality.component.scss']
})
export class RemarksprematerialityComponent implements OnInit {
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
   //  console.log(this.dynamicobj);
   //   console.log(this.dynamicobj['six']);
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
         var dynamicTablelen=this.dynamicTable.length;
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
          console.log(this.dynamicTable7th);
          var dynamicTable7thlen=this.dynamicTable7th.length;
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





  }  
