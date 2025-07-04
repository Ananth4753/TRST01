import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sgx_desfiveComponent } from '../sgx_desfive/sgx_desfive.component';
import { Sgx_desfourComponent } from '../sgx_desfour/sgx_desfour.component';
import { Sgx_desthreeComponent } from '../sgx_desthree/sgx_desthree.component';
import { Sgx_destwoComponent } from '../sgx_destwo/sgx_destwo.component';
import { Sgx_desoneComponent } from '../sgx_desone/sgx_desone.component';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { Sgx_imagereportService } from '../sgx_imagereport/sgx_imagereport.service';
import { ThrowStmt } from '@angular/compiler';
import {ReportgenerationService} from 'app/services/reportgeneration.service';

@Component({
  selector: 'app-sgx_secdesign',
  templateUrl: './sgx_secdesign.component.html',
  styleUrls: ['./sgx_secdesign.component.scss']
})
export class Sgx_secdesignComponent implements OnInit {
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
    private is:Sgx_imagereportService,
    private st:ReportgenerationService
    ) { }

  ngOnInit() {
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.us.getSGXReportDetailsByReportId(this.reportid).subscribe((res) => {
        //console.log(res);
        this.reportname = res[0].ReportName;
        this.reportstartdate = res[0].StartDate;
        this.reportenddate = res[0].EndDate;
    });
    (this.dynamicComponent = Sgx_desoneComponent),
        (this.dynamicComponent1 = Sgx_destwoComponent),
        (this.dynamicComponent2 = Sgx_desthreeComponent);
    this.dynamicComponent3 = Sgx_desfourComponent;
    this.dynamicComponent4 = Sgx_desfiveComponent;
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
    this.Stage = '/sgx_sectemplate'
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
    this.is.getSGXFinalReportDetailsByReportId(this.reportid).subscribe((data)=>{
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

this.is.createSGXFinalReport(selectedboxes).subscribe((data)=>{
  console.log(data); 
})

      
}) ; 

this.Stage = '/sgx_uploadlogo'
var obj = {
  "ReportId" : this.reportid,
  "Stage":this.Stage
}
this.st.updateSGXStage(obj).subscribe((data=>{
    this.router.navigate([`${this.Stage}/${this.reportid}`]);
}))
//this.router.navigate([`/uploadlogo`,this.reportid]);
  }
  cover(){
    this.router.navigate([`/sgx_imagereport`,this.reportid]);
  }
}
