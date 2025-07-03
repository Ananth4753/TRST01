import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ImagereportService } from '../imagereport/imagereport.service';
import { UpdatereportService } from '../updatereport/updatereport.service';
import { RemarkspregeneralComponent } from '../remarkspregeneral/remarkspregeneral.component';
import { DynamicreportComponent } from '../dynamicreport/dynamicreport.component';
import { IntroreportComponent } from '../introreport/introreport.component';
import { DynamiccontentComponent } from '../dynamiccontent/dynamiccontent.component';
import * as html2pdf from 'html2pdf.js'
import { GrigeneraldisclosureComponent } from '../grigeneraldisclosure/grigeneraldisclosure.component';
import { GrieconomicComponent } from '../grieconomic/grieconomic.component';
import { GrienvironmentComponent } from '../grienvironment/grienvironment.component';
import { GrisocialComponent } from '../grisocial/grisocial.component';
import { GrimaterialityComponent } from '../grimateriality/grimateriality.component';
import { RemarksenvironmentComponent } from '../remarksenvironment/remarksenvironment.component';
import { RemarkspreenvironmentComponent } from '../remarkspreenvironment/remarkspreenvironment.component';
import { RemarkspreeconomicComponent } from '../remarkspreeconomic/remarkspreeconomic.component';
import { RemarkspresocialComponent } from '../remarkspresocial/remarkspresocial.component';
import { RemarksmaterialityComponent } from '../remarksmateriality/remarksmateriality.component';
import { RemarksprematerialityComponent } from '../remarkspremateriality/remarkspremateriality.component';

@Component({
  selector: 'app-remarksdisplay',
  templateUrl: './remarksdisplay.component.html',
  styleUrls: ['./remarksdisplay.component.css']
})
export class RemarksdisplayComponent implements OnInit {
  BLSCertificateUrllocal: any;
  reportpic:any;
  reportid: any;
  reportname: any;
  reportstartdate: any;
  reportenddate: any;
  dynamicComponent: any;
 dynamicComponent1: any;
 dynamicComponent2:any;
 generaldisclosure:any;
 environmentdisclosure:any;
 economicdisclosure:any;
 socialdisclosure:any;
 materialitydisclosure:any
 economic:any;
 environment:any;
 social:any;
 materiality:any
 constructor(private domSanitizer: DomSanitizer,private aa:ActivatedRoute,private router: Router,
   private us: UpdatereportService,private auth:AuthService,private is:ImagereportService) { }
 src: any;
 ngOnInit() {
   (this.dynamicComponent = DynamicreportComponent),
   (this.dynamicComponent1 = IntroreportComponent),
   (this.generaldisclosure=RemarkspregeneralComponent),
   (this.materialitydisclosure=RemarksprematerialityComponent),
   (this.economic=GrieconomicComponent),
   (this.environmentdisclosure=RemarkspreenvironmentComponent),
   (this.economicdisclosure=RemarkspreeconomicComponent),
   (this.socialdisclosure=RemarkspresocialComponent),
   (this.social=GrisocialComponent),
   (this.materiality=GrimaterialityComponent),
   this.reportid=this.aa.snapshot.paramMap.get('reportId')
   //console.log(this.dynamicComponent);
   this.us.getReportDetailsByReportId(this.reportid).subscribe((res) => {
       //console.log(res);
       this.reportname = res[0].ReportName;
       this.reportstartdate = res[0].StartDate;
       this.reportenddate = res[0].EndDate;
   });
   this.is.getFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
    // console.log(res);
     var size=Object.keys(res).length;
    // console.log(size);
     this.reportpic=res[0].CoverPageImage
    // console.log(this.reportpic);
     
     this.BLSCertificateUrllocal = this.reportpic;
 
   this.src = this.domSanitizer.bypassSecurityTrustResourceUrl(this.BLSCertificateUrllocal);
    })

    
   
 
 }
 back(){
  this.router.navigate(['/preremarksscreen', this.reportid]);
  //  this.router.navigate(['/settingcomp',this.reportid]);
 }
 next(){
   this.is.getFinalReportDetailsByReportId(this.reportid).subscribe((data) => {
    // console.log(data);
     if (data[0]['IsValidate'] == 1 && data[0]['IsSignoff'] == 1) {
       this.router.navigate(['/generate', this.reportid]);
     } else if (data[0]['IsValidate'] == 1) {
       this.router.navigate(['/signoffreport', this.reportid]);
     } else {
       this.router.navigate(['/validate', this.reportid]);
     }
   });
 }
 }