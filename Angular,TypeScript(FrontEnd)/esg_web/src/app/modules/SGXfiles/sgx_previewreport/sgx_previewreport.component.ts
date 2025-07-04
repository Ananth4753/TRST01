import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Sgx_imagereportService } from '../sgx_imagereport/sgx_imagereport.service';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { Sgx_dynamicreportComponent } from '../sgx_dynamicreport/sgx_dynamicreport.component';
import { Sgx_introreportComponent } from '../sgx_introreport/sgx_introreport.component';
import { Sgx_generaldisclosureComponent } from '../sgx_generaldisclosure/sgx_generaldisclosure.component';
import { Sgx_governancedisclosureComponent } from '../sgx_governancedisclosure/sgx_governancedisclosure.component';
import { Sgx_socialdisclosureComponent } from '../sgx_socialdisclosure/sgx_socialdisclosure.component';


@Component({
  selector: 'app-sgx_previewreport',
  templateUrl: './sgx_previewreport.component.html',
  styleUrls: ['./sgx_previewreport.component.scss']
})
export class Sgx_previewreportComponent implements OnInit {

  BLSCertificateUrllocal: any;
  reportpic:any;
  reportid: any;
  reportname: any;
  reportstartdate: any;
  reportenddate: any;
  dynamicComponent: any;
 dynamicComponent1: any;
 dynamicComponent2:any;
 dynamicComponent3:any;
 dynamicComponent4: any;
 generaldisclosure:any;
 economic:any;
 environment:any;
 social:any;
 materiality:any
 uploadedevidence:any
 constructor(private domSanitizer: DomSanitizer,private aa:ActivatedRoute,private router: Router,
   private us: UpdatereportService,private auth:AuthService,private is:Sgx_imagereportService) { }
 src: any;
 ngOnInit() {
   (this.dynamicComponent = Sgx_dynamicreportComponent),
   (this.dynamicComponent1 = Sgx_introreportComponent),
   (this.dynamicComponent2 = Sgx_generaldisclosureComponent),
   (this.dynamicComponent4 = Sgx_governancedisclosureComponent),
   (this.dynamicComponent3 = Sgx_socialdisclosureComponent),
   this.reportid=this.aa.snapshot.paramMap.get('reportId')
   this.us.getSGXReportDetailsByReportId(this.reportid).subscribe((res) => {
       this.reportname = res[0].ReportName;
       this.reportstartdate = res[0].StartDate;
       this.reportenddate = res[0].EndDate;
   });
   this.is.getSGXFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
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
   this.router.navigate(['/sgx_settingcomp',this.reportid]);
 }
//  next(){
//    this.is.getSGXFinalReportDetailsByReportId(this.reportid).subscribe((data) => {
//      console.log(data);
//      if (data[0]['IsValidate'] == 1 && data[0]['IsSignoff'] == 1) {
//        this.router.navigate(['/generate', this.reportid]);
//      } else if (data[0]['IsValidate'] == 1) {
//        this.router.navigate(['/signoffreport', this.reportid]);
//      } else {
//        this.router.navigate(['/sgx_validate', this.reportid]);
//      }
//    });
//  }

 next(){
  this.is.getSGXFinalReportDetailsByReportId(this.reportid).subscribe((data) => {
    console.log(data);
    if (data[0]['IsValidate'] == 1 && data[0]['IsSignoff'] == 1) {
      this.router.navigate(['/sgx_generatereport', this.reportid]);
    } else if (data[0]['IsValidate'] == 1) {
      this.router.navigate(['/sgx_signoffreport', this.reportid]);
    } else {
      this.router.navigate(['/sgx_validate', this.reportid]);
    }
  });
}
 }