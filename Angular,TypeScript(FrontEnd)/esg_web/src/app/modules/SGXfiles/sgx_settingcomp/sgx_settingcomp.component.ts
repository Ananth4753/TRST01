import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportgenerationService } from 'app/services/reportgeneration.service';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';

@Component({
  selector: 'app-sgx_settingcomp',
  templateUrl: './sgx_settingcomp.component.html',
  styleUrls: ['./sgx_settingcomp.component.scss']
})
export class Sgx_settingcompComponent implements OnInit {

  reportid: any;
  reportname: any;
  reportstartdate: any;
  reportenddate: any;
  Stage:any;
  constructor( private route: ActivatedRoute,
    private aa: ActivatedRoute,
    private us: UpdatereportService,
    private router: Router,
    private st:ReportgenerationService) { }

  ngOnInit() {
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.us.getSGXReportDetailsByReportId(this.reportid).subscribe((res) => {
        //console.log(res);
        this.reportname = res[0].ReportName;
        this.reportstartdate = res[0].StartDate;
        this.reportenddate = res[0].EndDate;
    });
  }
  SaveandNext(){
    this.Stage = '/sgx_previewreport'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateSGXStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
  }
  back(){
    this.Stage = '/sgx_introduction'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateSGXStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
    // this.router.navigate([`/sectemplate`,this.reportid]);
 
  }
  design(){
    this.Stage = '/sgx_secdesign'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateSGXStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
   
  }
  layout(){
    this.Stage = '/sgx_sectemplate'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateSGXStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
   
  }
  cover(){
    this.Stage = '/sgx_imagereport'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateSGXStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
  }
  logo(){
    this.Stage = '/sgx_uploadlogo'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateSGXStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
  }
}
