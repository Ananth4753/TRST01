import { Component, OnInit } from '@angular/core';
import { Brsr_imagereportService } from '../brsr_imagereport/brsr_imagereport.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brsr_introreport',
  templateUrl: './brsr_introreport.component.html',
  styleUrls: ['./brsr_introreport.component.scss']
})
export class Brsr_introreportComponent implements OnInit {
  reportid: any;
  intro:any;
  messagefrom:any;
  about:any;
  keyhigh:any;
  vis:any;
  first:boolean=false;
  second:boolean=false;
  third:boolean=false;
  fourth:boolean=false;
  constructor(private is:Brsr_imagereportService,private aa:ActivatedRoute,) { }

  ngOnInit() {
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.is.getBRSRFinalReportDetailsByReportId(this.reportid).subscribe((data)=>{
     // console.log(data);
      this.intro=data[0].Introduction
      this.messagefrom=data[0].Messagefromceo
      this.about=data[0].aboutthisreport
      this.keyhigh=data[0].keyhighlights
      this.vis=data[0].vision
      if(data[0].Messagefromceo != ""){
        this.first=true;
      }
      if(data[0].aboutthisreport != ""){
        this.second=true;
      }
      if(data[0].keyhighlights != ""){
        this.third=true;
      }
      if(data[0].vision != ""){
        this.fourth=true;
      }
  })

}
}