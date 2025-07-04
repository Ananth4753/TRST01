import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdatereportService } from '../updatereport/updatereport.service';
import { ImagereportService } from '../imagereport/imagereport.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { AuthService } from 'app/core/auth/auth.service';
import { ImportdisService } from '../importdis/importdis.service';
import { SelectdisService } from '../selectdis/selectdis.service';
import { CreatereportService } from '../createreport/createreport.service';
import { DynamiccontentService } from './dynamiccontent.service';
import  Questions   from '../../../assets/questions.json'

@Component({
  selector: 'app-dynamiccontent',
  templateUrl: './dynamiccontent.component.html',
  styleUrls: ['./dynamiccontent.component.scss']
})
export class DynamiccontentComponent implements OnInit {
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
  designtemplate:any;
  firstimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp1.png";
  secondimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp2.png";
  thirdimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp3.png";
  fourthimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp4.png";
  fifthimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp5.png";
  imageUrl:any;
  constructor(private route:ActivatedRoute,private aa:ActivatedRoute,private AuthService:AuthService,
    private importservice:ImportdisService,private dds:DynamiccontentService,private ss:SelectdisService,private crs:CreatereportService,private us:UpdatereportService,private is:ImagereportService,private ds:DashboardService) { }
  finalobj:any={}
  ngOnInit() {
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    this.us.getReportDetailsByReportId(this.reportid).subscribe(res=>{
      console.log(res)
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

   
     
    this.dynamicTable =JSON.parse(this.dynamicobj['102-2AddTable']);
    console.log(this.dynamicTable);
    
     this.keys=Object.keys(this.qaa)
    this.vals=Object.values(this.qaa)
    this.entries=Object.entries(this.qaa)

      // let vals=Object.values(this.qaa)

      // console.log('Vals ',vals);
     })
 
  this.dds.getPreviewReportById(this.reportid).subscribe((data)=>{

    this.templatemenu=data;
    console.log(this.templatemenu);
    
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
}
