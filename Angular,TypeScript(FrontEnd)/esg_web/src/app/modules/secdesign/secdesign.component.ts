import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DesoneComponent } from '../desone/desone.component';
import { DestwoComponent } from '../destwo/destwo.component';
import { Des3Component } from '../des3/des3.component';
import { DesfourComponent } from '../desfour/desfour.component';
import { DesfiveComponent } from '../desfive/desfive.component';
import { UpdatereportService } from '../updatereport/updatereport.service';
import { SectemplateService } from '../sectemplate/sectemplate.service';
import { ImagereportService } from '../imagereport/imagereport.service';
import { ThrowStmt } from '@angular/compiler';
import {ReportgenerationService} from 'app/services/reportgeneration.service';

@Component({
  selector: 'app-secdesign',
  templateUrl: './secdesign.component.html',
  styleUrls: ['./secdesign.component.scss']
})
export class SecdesignComponent implements OnInit {
  reportid: any;
  reportname: any;
  reportstartdate: any;
  reportenddate: any;
  color: any;
  dynamicComponent: any;
  dynamicComponent1: any;
  dynamicComponent2: any;
  dynamicComponent3: any;
  dynamicComponent4: any;
  imageUrl: any;
    one="1";
    two="2";
    three="3";
    four="4";
    five="5";
  constructor(  private route: ActivatedRoute,
    private aa: ActivatedRoute,
    private us: UpdatereportService,
    private router: Router,
    private ss:SectemplateService,
    private is:ImagereportService,
    private st:ReportgenerationService
    ) { }

  ngOnInit() {
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.us.getReportDetailsByReportId(this.reportid).subscribe((res) => {
        //console.log(res);
        this.reportname = res[0].ReportName;
        this.reportstartdate = res[0].StartDate;
        this.reportenddate = res[0].EndDate;
    });
    (this.dynamicComponent = DesoneComponent),
        (this.dynamicComponent1 = DestwoComponent),
        (this.dynamicComponent2 = Des3Component);
    this.dynamicComponent3 = DesfourComponent;
    this.dynamicComponent4 = DesfiveComponent;
    this.imageUrl=this.one;
  }
  updatecolor(event) {
    document.documentElement.style.setProperty('--wcColor', '#1c75bc');
    document.documentElement.style.setProperty('--wcColor1', 'white');
    document.documentElement.style.setProperty('--wcColor2', 'white');
    document.documentElement.style.setProperty('--wcColor3', 'white');
    document.documentElement.style.setProperty('--wcColor4', 'white');
    event=this.one;
    this.imageUrl=event
    console.log(event);
}
updatecolor1(event) {
       document.documentElement.style.setProperty('--wcColor', 'white');
    document.documentElement.style.setProperty('--wcColor1', '#1c75bc');
    document.documentElement.style.setProperty('--wcColor2', 'white');
    document.documentElement.style.setProperty('--wcColor3', 'white');
    document.documentElement.style.setProperty('--wcColor4', 'white');
    event=this.two;
        this.imageUrl=event
        console.log(event);
}
updatecolor2(event) {
       document.documentElement.style.setProperty('--wcColor', 'white');
    document.documentElement.style.setProperty('--wcColor1', 'white');
    document.documentElement.style.setProperty('--wcColor2', '#1c75bc');
    document.documentElement.style.setProperty('--wcColor3', 'white');
    document.documentElement.style.setProperty('--wcColor4', 'white');
    event=this.three;
    this.imageUrl=event 
    console.log(event);
}
updatecolor3(event) {
       document.documentElement.style.setProperty('--wcColor', 'white');
    document.documentElement.style.setProperty('--wcColor1', 'white');
    document.documentElement.style.setProperty('--wcColor2', 'white');
    document.documentElement.style.setProperty('--wcColor3', '#1c75bc');
    document.documentElement.style.setProperty('--wcColor4', 'white');
    event=this.four;
    this.imageUrl=event
    console.log(event);
}
updatecolor4(event) {
       document.documentElement.style.setProperty('--wcColor', 'white');
    document.documentElement.style.setProperty('--wcColor1', 'white');
    document.documentElement.style.setProperty('--wcColor2', 'white');
    document.documentElement.style.setProperty('--wcColor3', 'white');
    document.documentElement.style.setProperty('--wcColor4', '#1c75bc');
    event=this.five;
    this.imageUrl=event
    console.log(event);
}
Stage:any;
  back(){
    this.Stage = '/sectemplate'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
    // this.router.navigate([`/sectemplate`,this.reportid]);
 
  }
  next(){
    this.is.getFinalReportDetailsByReportId(this.reportid).subscribe((data)=>{
      const reportdata=data[0]
      console.log(reportdata);
      
        const selectedboxes:any = {
          Id:reportdata.Id,
          ReportId:this.reportid,
          ReportName:reportdata.ReportName,
          StartDate:reportdata.StartDate,
          EndDate:reportdata.EndDate,
          CoverPageImage:reportdata.CoverPageImage,
          CoverPageLayout:reportdata.CoverPageLayout,
          DesignTemplate:this.imageUrl,
          Introduction:reportdata.Introduction,
          IsActive:reportdata.IsActive,
          Messagefromceo:reportdata.Messagefromceo,
          aboutthisreport:reportdata.aboutthisreport,
          keyhighlights:reportdata.keyhighlights,
          vision:reportdata.vision,
          Logo:reportdata.Logo,
          IsValidate:reportdata.IsValidate,
          FinalDraftGuidance:JSON.parse(reportdata.FinalDraftGuidance),
          Settings:0,
          UpdatedByUserId:reportdata.UpdatedByUserId,
          UpdatedDate:reportdata.UpdatedDate,
          CreatedByUserId:reportdata.CreatedByUserId,
          CreatedDate:reportdata.CreatedDate,
          Reportpicbase:reportdata.Reportpicbase
        };
console.log(selectedboxes);

this.is.createFinalReport(selectedboxes).subscribe((data)=>{
  console.log(data); 
})

      
}) ; 

this.Stage = '/uploadlogo'
var obj = {
  "ReportId" : this.reportid,
  "Stage":this.Stage
}
this.st.updateStage(obj).subscribe((data=>{
    this.router.navigate([`${this.Stage}/${this.reportid}`]);
}))
//this.router.navigate([`/uploadlogo`,this.reportid]);
  }
  cover(){
    this.router.navigate([`/imagereport`,this.reportid]);
  }
}
