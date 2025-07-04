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
import { DesigntemplateService } from './designtemplate.service';
import * as jQuery from "jquery";
import DataTable from 'datatables.net-dt';

@Component({
  selector: 'app-designtemplate',
  templateUrl: './designtemplate.component.html',
  styleUrls: ['./designtemplate.component.scss']
})
export class DesigntemplateComponent implements OnInit {
  reportbyid:any;
  reportid:any
  currentYear:any
  constructor(private ds :DashboardService,private router:Router,
    private fb:FormBuilder,private reportService:CreatereportService,private activatedroute:ActivatedRoute,
    private AuthService:AuthService,private mr:MyreportsService,private dts:DesigntemplateService) { }

  ngOnInit() {
    console.log(this.AuthService.user);
    this.reportid = this.activatedroute.snapshot.paramMap.get('reportId');
    this.dts.getDesignTemplatesByOrgId(this.AuthService.user.orgId).subscribe((data)=>{
      console.log(data)
      this.reportbyid=data;
      $(document).ready(function () {
        $('#example').DataTable();
      });
            })
            this.currentYear=new Date().getFullYear();
for (var i=0;i<=10;i++){
  var a=this.currentYear-i;
}
  }
  data(){
    $(document).ready(function() {
     $("#example").DataTable();
   });
 }
 gotoreport(Id){
  this.dts.geTemplateIdDetailsByIdonly(Id).subscribe((Data)=>{
    console.log(Data[0]['TemplateId']);
    this.dts.getTemplatedetailsbyId(Data[0]['TemplateId']).subscribe((data)=>{
      console.log(data[0]['TemplateMenuId']);
              var obj = {
                Id:null,
                ReportName: null,
                currentYear:this.currentYear,
                StartDate: null,
                EndDate: null,
                CreatedByUserId: [this.AuthService.user.id],	
                UpdatedByUserId: [this.AuthService.user.id],
                OrgId:[this.AuthService.user.orgId]
              };
      this.dts.createreport(obj).subscribe((res)=>{
console.log(res.Rid);
console.log(data)
// console.log(data[0]['TemplateMenuId']);
for (var i=0;i<data.length;i++){
  console.log(data[i]['TemplateMenuId']);
  var shampak = {
            Id: null,
            ReportId: res.Rid,
            UserId: this.AuthService.user.id,
           TemplateMenuId: data[i]['TemplateMenuId'],
            IsActive: 1,
            CreatedByUserId: this.AuthService.user.id,
            CreatedDate: new Date(),
            UpdatedByUserId: this.AuthService.user.id,
            UpdatedDate: new Date(),
            Checked: 1,
            Status: 0,
        };
        this.dts.pushselected(shampak).subscribe((rue)=>{
          console.log(rue);
        })
}
this.router.navigate(['/createreportfromtemplate', res.Rid]);
      })
    })
  })
 }
}
