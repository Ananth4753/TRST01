import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdatereportService } from '../updatereport/updatereport.service';
import { ImagereportService } from '../imagereport/imagereport.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { AuthService } from 'app/core/auth/auth.service';
import { CreatereportService } from '../createreport/createreport.service';
import { DynamiccontentService } from '../dynamiccontent/dynamiccontent.service';
import { split } from 'lodash';
import { GlobalvariableService } from '../services/globalvariable.service';
@Component({
  selector: 'app-indexcontent',
  templateUrl: './indexcontent.component.html',
  styleUrls: ['./indexcontent.component.scss']
})
export class IndexcontentComponent implements OnInit {
  reportid:any;
  reportname:any
  reportstartdate:any;
  reportenddate:any;
  reportpic:any;
  base64ofreport:any;
  companypic:any;
  name:any;
  first:boolean=false;
  second:boolean=false;
  third:boolean=false;
  fourth:boolean=false;
  fifth:boolean=false;
  comp:any;
  string:any;
  anse:any;
  comp1:any;
  string1:any;
  anse1:any;
  coverpagelayout:any;
  templatemenu:any;
  constructor(private route:ActivatedRoute,private aa:ActivatedRoute,
    private dcs:DynamiccontentService,private AuthService:AuthService,private crs:CreatereportService,private us:UpdatereportService,private is:ImagereportService,private ds:DashboardService) { }

  ngOnInit() {
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    this.dcs.getPreviewReportById(this.reportid).subscribe((data)=>{
      console.log(data);
      this.templatemenu=data;
    })
  }

}
