import { Component, Inject, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import {  FormControl, FormGroup,Validators, FormBuilder }  from '@angular/forms';
import { NgForm } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { MD5 } from 'crypto-js';
import { DashboardService } from '../dashboard/dashboard.service';
import { CreatereportService } from '../createreport/createreport.service';
import { MyreportsService } from '../myreports/myreports.service';
import { PublishedService } from './published.service';
@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.scss']
})
export class PublishedComponent implements OnInit {
  reportbyid:any;
  constructor(private ds :DashboardService,private router:Router,
    private fb:FormBuilder,private reportService:CreatereportService,private activatedroute:ActivatedRoute,
    private AuthService:AuthService,private mr:MyreportsService,private ps:PublishedService) { }

  ngOnInit() {
    console.log(this.AuthService.user);
    this.ps.getPublishedReportsByOrgId(this.AuthService.user.orgId).subscribe((data)=>{
      console.log(data)
      this.reportbyid=data;
      $(document).ready(function () {
        $('#example').DataTable();
      });
            })
  }
  data(){
    $(document).ready(function() {
     $("#example").DataTable();
   });
 }
}
