import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Brsr_imagereportService } from '../brsr_imagereport/brsr_imagereport.service';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { Brsr_dynamicreportComponent } from '../brsr_dynamicreport/brsr_dynamicreport.component';
import { Brsr_introreportComponent } from '../brsr_introreport/brsr_introreport.component';
import { Brsr_generaldisclosureComponent } from '../brsr_generaldisclosure/brsr_generaldisclosure.component';
import { Brsr_managementComponent } from '../brsr_management/brsr_management.component';
import { Brsr_principalsreportComponent } from '../brsr_principalsreport/brsr_principalsreport.component';
// import { DynamicreportComponent } from '../dynamicreport/dynamicreport.component';
// import { IntroreportComponent } from '../introreport/introreport.component';
// import { DynamiccontentComponent } from '../dynamiccontent/dynamiccontent.component';
// import * as html2pdf from 'html2pdf.js'
// import { GrigeneraldisclosureComponent } from '../grigeneraldisclosure/grigeneraldisclosure.component';
// import { GrieconomicComponent } from '../grieconomic/grieconomic.component';
// import { GrienvironmentComponent } from '../grienvironment/grienvironment.component';
// import { GrisocialComponent } from '../grisocial/grisocial.component';
// import { GrimaterialityComponent } from '../grimateriality/grimateriality.component';

@Component({
  selector: 'app-brsr_previewreport',
  templateUrl: './brsr_previewreport.component.html',
  styleUrls: ['./brsr_previewreport.component.scss']
})
export class Brsr_previewreportComponent implements OnInit {
  BLSCertificateUrllocal: any;
  reportpic:any;
  reportid: any;
  reportname: any;
  reportstartdate: any;
  reportenddate: any;
  dynamicComponent: any;
 dynamicComponent1: any;
 dynamicComponent2:any;
 dynamicComponent3: any;
 dynamicComponent4:any;
 generaldisclosure:any;
 economic:any;
 environment:any;
 social:any;
 materiality:any
 uploadedevidence:any
 constructor(private domSanitizer: DomSanitizer,private aa:ActivatedRoute,private router: Router,
   private us: UpdatereportService,private auth:AuthService,private is:Brsr_imagereportService) { }
 src: any;
 ngOnInit() {
   (this.dynamicComponent = Brsr_dynamicreportComponent),
   (this.dynamicComponent1 = Brsr_introreportComponent),
   (this.dynamicComponent2 = Brsr_generaldisclosureComponent),
   (this.dynamicComponent3 = Brsr_managementComponent),
   (this.dynamicComponent4 = Brsr_principalsreportComponent),
   this.reportid=this.aa.snapshot.paramMap.get('reportId')
   this.us.getBRSRReportDetailsByReportId(this.reportid).subscribe((res) => {
       this.reportname = res[0].ReportName;
       this.reportstartdate = res[0].StartDate;
       this.reportenddate = res[0].EndDate;
   });
   this.is.getBRSRFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
     console.log(res);
     var size=Object.keys(res).length;
     console.log(size);
     this.reportpic=res[0].CoverPageImage
     console.log(this.reportpic);
     
     this.BLSCertificateUrllocal = this.reportpic;
 
   this.src = this.domSanitizer.bypassSecurityTrustResourceUrl(this.BLSCertificateUrllocal);
    })
 
  }
 back(){
   this.router.navigate(['/brsr_settingcomp',this.reportid]);
 }
 next(){
   this.is.getBRSRFinalReportDetailsByReportId(this.reportid).subscribe((data) => {
     console.log(data);
     if (data[0]['IsValidate'] == 1 && data[0]['IsSignoff'] == 1) {
       this.router.navigate(['/generate', this.reportid]);
     } else if (data[0]['IsValidate'] == 1) {
       this.router.navigate(['/signoffreport', this.reportid]);
     } else {
       this.router.navigate(['/brsr_validate', this.reportid]);
     }
   });
 }
 }