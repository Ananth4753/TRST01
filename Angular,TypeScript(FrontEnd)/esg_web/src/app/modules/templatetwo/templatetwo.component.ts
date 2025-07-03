import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdatereportService } from '../updatereport/updatereport.service';
import { ImagereportService } from '../imagereport/imagereport.service';

@Component({
  selector: 'app-templatetwo',
  templateUrl: './templatetwo.component.html',
  styleUrls: ['./templatetwo.component.scss']
})
export class TemplatetwoComponent implements OnInit {
  reportid:any;
  reportname:any
  reportstartdate:any;
  reportenddate:any;
  reportpic:any;
  constructor(private route:ActivatedRoute,private aa:ActivatedRoute,private us:UpdatereportService,private is:ImagereportService) { }

  ngOnInit() {
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    this.us.getReportDetailsByReportId(this.reportid).subscribe(res=>{
      //console.log(res);
      this.reportname=res[0].ReportName
      this.reportstartdate=res[0].StartDate
      this.reportenddate=res[0].EndDate
     })
     this.is.getFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
      console.log(res);
      var size=Object.keys(res).length;
      console.log(size);
      this.reportpic=res[0].CoverPageImage
     })
  }

}
