import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Brsr_imagereportService } from '../brsr_imagereport/brsr_imagereport.service';
import { Brsr_remarkspregenComponent } from '../brsr_remarkspregen/brsr_remarkspregen.component';
import { Brsr_remarkspremangComponent } from '../brsr_remarkspremang/brsr_remarkspremang.component';
import { Brsr_remarkspreprinciComponent } from '../brsr_remarkspreprinci/brsr_remarkspreprinci.component';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';

@Component({
  selector: 'app-brsr_previewremarksscreen',
  templateUrl: './brsr_previewremarksscreen.component.html',
  styleUrls: ['./brsr_previewremarksscreen.component.scss']
})
export class Brsr_previewremarksscreenComponent implements OnInit {
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
 management:any;
 principals:any;
 materialitydisclosure:any
 economic:any;
 environment:any;
 social:any;
 materiality:any;
 src: any;
  constructor(private domSanitizer: DomSanitizer,private aa:ActivatedRoute,private router: Router,
    private auth:AuthService,private us:UpdatereportService,private is:Brsr_imagereportService) { }

  ngOnInit() {
  
    (this.generaldisclosure=Brsr_remarkspregenComponent),
    (this.management=Brsr_remarkspremangComponent),
    (this.principals=Brsr_remarkspreprinciComponent),
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    this.us.getBRSRReportDetailsByReportId(this.reportid).subscribe((res) => {
      //console.log(res);
      this.reportname = res[0].ReportName;
      this.reportstartdate = res[0].StartDate;
      this.reportenddate = res[0].EndDate;
  });
  this.is.getBRSRFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
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
    // this.router.navigate(['/preremarksscreen', this.reportid]);
    //  this.router.navigate(['/settingcomp',this.reportid]);
   }
   next(){
    //  this.is.getFinalReportDetailsByReportId(this.reportid).subscribe((data) => {
    //   // console.log(data);
    //    if (data[0]['IsValidate'] == 1 && data[0]['IsSignoff'] == 1) {
    //      this.router.navigate(['/generate', this.reportid]);
    //    } else if (data[0]['IsValidate'] == 1) {
    //      this.router.navigate(['/signoffreport', this.reportid]);
    //    } else {
    //      this.router.navigate(['/validate', this.reportid]);
    //    }
    //  });
   }
}
