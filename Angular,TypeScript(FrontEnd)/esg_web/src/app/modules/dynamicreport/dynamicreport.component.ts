import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdatereportService } from '../updatereport/updatereport.service';
import { ImagereportService } from '../imagereport/imagereport.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { AuthService } from 'app/core/auth/auth.service';
import { CreatereportService } from '../createreport/createreport.service';
import { DynamiccontentService } from '../dynamiccontent/dynamiccontent.service';
import { split } from 'lodash';
@Component({
  selector: 'app-dynamicreport',
  templateUrl: './dynamicreport.component.html',
  styleUrls: ['./dynamicreport.component.scss']
})
export class DynamicreportComponent implements OnInit {
  reportid:any;
  reportname:any
  reportstartdate:any;
  reportenddate:any;
  reportpic:any;
  base64ofreport:any;
  companypic:any;
  name:any;
  first:boolean=false;
  second:boolean=false;
  third:boolean=false;
  fourth:boolean=false;
  fifth:boolean=false;
  comp:any;
  string:any;
  anse:any;
  comp1:any;
  string1:any;
  anse1:any;

  coverpagelayout:any;
  constructor(private route:ActivatedRoute,private aa:ActivatedRoute,
    private dcs:DynamiccontentService,private AuthService:AuthService,private crs:CreatereportService,private us:UpdatereportService,private is:ImagereportService,private ds:DashboardService) { }

  ngOnInit() {
    this.ds.getuserbyId(this.AuthService.user.id).subscribe((data) => {
      this.name=data[0]['OrganizationName'];
     
    });
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    this.us.getReportDetailsByReportId(this.reportid).subscribe(res=>{
      this.reportname=res[0].ReportName
      this.reportstartdate=res[0].StartDate
      this.reportenddate=res[0].EndDate
     })
  

// this.is.getFinalReportDetailsByReportId(this.reportid).subscribe((data)=>{
//   console.log(data);
  
//   this.reportpic=data[0].Reportpicbase
//   //console.log(this.reportpic)
// })
this.is.getFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
 
  if(res[0].CoverPageImage=='https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/scene1.jpg'){
   this.reportpic=res[0].Reportpicbase
   //console.log(res[0]['Reportpicbase']);
}
else if(res[0].CoverPageImage=='https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/scene2.jpg'){
  this.reportpic=res[0].Reportpicbase
  //console.log(res[0]['Reportpicbase']);
}
else if(res[0].CoverPageImage=='https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/scene3.jpg'){
  this.reportpic=res[0].Reportpicbase
  //console.log(res[0]['Reportpicbase']);
}
else{
  this.reportpic=res[0].Reportpicbase
  //console.log(res[0]['Reportpicbase']);
//   this.comp1=split(this.reportpic,'"')
//  this.anse1=this.comp1[4];
//  console.log(this.anse1);
//  this.string1 = this.anse1;
//  this.string1 = this.string1.substring(0, this.string1.length-15);
}
   this.companypic=res[0].FinalDraftGuidance
   this.comp=split(this.companypic,'"')
   this.anse=this.comp[2];
   this.string = this.anse;
   this.string = this.string.substring(0, this.string.length-1);
   this.coverpagelayout=res[0].CoverPageLayout;
   //console.log(this.coverpagelayout)
  // console.log(this.reportpic)
   if(this.coverpagelayout==1){
     this.first=true;
   }
   else if(this.coverpagelayout==2){
     this.second=true;
   }
   else if(this.coverpagelayout==3){
this.third=true;
   }
   else if(this.coverpagelayout==4){
this.fourth=true;
   }
else{
this.fifth=true;
}    })  
  }
}
