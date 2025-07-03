import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportgenerationService } from 'app/services/reportgeneration.service';
import { UpdatereportService } from '../updatereport/updatereport.service';

@Component({
  selector: 'app-settingcomp',
  templateUrl: './settingcomp.component.html',
  styleUrls: ['./settingcomp.component.scss']
})
export class SettingcompComponent implements OnInit {
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
    this.us.getReportDetailsByReportId(this.reportid).subscribe((res) => {
        //console.log(res);
        this.reportname = res[0].ReportName;
        this.reportstartdate = res[0].StartDate;
        this.reportenddate = res[0].EndDate;
    });
  }
  SaveandNext(){
    this.Stage = '/previewreport'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
  }
  back(){
    this.Stage = '/introduction'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
    // this.router.navigate([`/sectemplate`,this.reportid]);
 
  }
  design(){
    this.Stage = '/secdesign'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
   
  }
  layout(){
    this.Stage = '/sectemplate'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
   
  }
  cover(){
    this.Stage = '/imagereport'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
  }
  logo(){
    this.Stage = '/uploadlogo'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
  }
}
