import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { Sgx_imagereportService } from '../sgx_imagereport/sgx_imagereport.service';

@Component({
  selector: 'app-sgx_templateone',
  templateUrl: './sgx_templateone.component.html',
  styleUrls: ['./sgx_templateone.component.scss']
})
export class Sgx_templateoneComponent implements OnInit {

  reportid:any;
  reportname:any
  reportstartdate:any;
  reportenddate:any;
  reportpic:any;
  constructor(private route:ActivatedRoute,private aa:ActivatedRoute,private us:UpdatereportService,private is:Sgx_imagereportService,) { }

  ngOnInit() {
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    this.us.getSGXReportDetailsByReportId(this.reportid).subscribe(res=>{
      //console.log(res);
      this.reportname=res[0].ReportName
      this.reportstartdate=res[0].StartDate
      this.reportenddate=res[0].EndDate
     })
     this.is.getSGXFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
      console.log(res);
      var size=Object.keys(res).length;
      console.log(size);
      this.reportpic=res[0].CoverPageImage
     })
  }

}