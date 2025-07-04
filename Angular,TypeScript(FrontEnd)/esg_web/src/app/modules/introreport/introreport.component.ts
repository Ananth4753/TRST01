import { Component, OnInit } from '@angular/core';
import { ImagereportService } from '../imagereport/imagereport.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalvariableService } from '../services/globalvariable.service';
@Component({
  selector: 'app-introreport',
  templateUrl: './introreport.component.html',
  styleUrls: ['./introreport.component.scss']
})
export class IntroreportComponent implements OnInit {
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
  constructor(private is:ImagereportService,private aa:ActivatedRoute,) { }

  ngOnInit() {
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.is.getFinalReportDetailsByReportId(this.reportid).subscribe((data)=>{
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