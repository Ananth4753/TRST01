import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportdisService } from '../importdis/importdis.service';
import { ImagereportService } from '../imagereport/imagereport.service';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-tableofcontents',
  templateUrl: './tableofcontents.component.html',
  styleUrls: ['./tableofcontents.component.css']
})
export class TableofcontentsComponent implements OnInit {
  reportid:any;
  templatemenu:any;
  grigeneral:any;
  temp:any;
  designtemplate:any;
  page1:any;
  page2:any;
  page3:any;
  firstimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp1.png";
  secondimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp2.png";
  thirdimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp3.png";
  fourthimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp4.png";
  fifthimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp5.png";
  imageUrl:any;
  constructor(private aa:ActivatedRoute,private is:ImportdisService,private iis:ImagereportService,private app:AppService) { }

  ngOnInit() {
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
  this.is.GetSelectedTemplateMenuCategoryTreeView(this.reportid).subscribe((data)=>{
    console.log(data);
    this.templatemenu=data;
  })
  this.iis.getFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
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
})
this.page1=this.app.counter+1;
this.page2=this.app.counter1+1;
this.page3=this.app.counter2+1;
}
  
  
  getNumbers(): number[] {
    return Array.from({length: 20}, (_, i) => i + 1);
  }
}
