import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { Brsr_imagereportService } from '../brsr_imagereport/brsr_imagereport.service';

@Component({
  selector: 'app-brsr_templatefive',
  templateUrl: './brsr_templatefive.component.html',
  styleUrls: ['./brsr_templatefive.component.scss']
})
export class Brsr_templatefiveComponent implements OnInit {
  reportid:any;
  reportname:any
  reportstartdate:any;
  reportenddate:any;
  reportpic:any;
  constructor(private route:ActivatedRoute,private aa:ActivatedRoute,private us:UpdatereportService,private is:Brsr_imagereportService,) { }

  ngOnInit() {
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    this.us.getBRSRReportDetailsByReportId(this.reportid).subscribe(res=>{
      //console.log(res);
      this.reportname=res[0].ReportName
      this.reportstartdate=res[0].StartDate
      this.reportenddate=res[0].EndDate
     })
     this.is.getBRSRFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
      console.log(res);
      var size=Object.keys(res).length;
      console.log(size);
      this.reportpic=res[0].CoverPageImage
     })
  }

}