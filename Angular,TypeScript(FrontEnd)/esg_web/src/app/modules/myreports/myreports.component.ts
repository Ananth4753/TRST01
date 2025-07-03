import { Component, Inject, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import {  FormControl, FormGroup,Validators, FormBuilder }  from '@angular/forms';
import { NgForm } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { MD5 } from 'crypto-js';
import { DashboardService } from '../dashboard/dashboard.service';
import { CreatereportService } from '../createreport/createreport.service';
import { MyreportsService } from './myreports.service';
import { UpdatereportService } from '../updatereport/updatereport.service';
import { ImagereportService } from '../imagereport/imagereport.service';


@Component({
  selector: 'app-myreports',
  templateUrl: './myreports.component.html',
  styleUrls: ['./myreports.component.scss']
})
export class MyreportsComponent implements OnInit {
  reportbyid:any;
  reportid:any;
  store:any;
  constructor(private ds :DashboardService,private router:Router,private ups:UpdatereportService,private irs:ImagereportService,
    private fb:FormBuilder,private reportService:CreatereportService,private activatedroute:ActivatedRoute,
    private AuthService:AuthService,private mr:MyreportsService) { }

  ngOnInit() {
    // this.reportid=this.activatedroute.snapshot.paramMap.get('reportId')
    console.log(this.AuthService.user);

    if(this.AuthService.user.rolename=='Collaborators'){
this.mr.getcollabreportById(this.AuthService.user.id).subscribe((data)=>{
console.log(data);
this.reportbyid=data;
$(document).ready(function () {
  $('#example').DataTable();
});
})
    }
    else{
      this.ds.showreportrbyUserId(this.AuthService.user.orgId).subscribe((data)=>{
        console.log(data)
        this.reportbyid=data;
        $(document).ready(function () {
          $('#example').DataTable();
        });
              })
    }
  }
  Stage:any;
    navigatetoselect(reportid,ReportType){
      console.log(reportid)
      console.log(ReportType)
      this.mr.getReportGenerationByReportIdReportType(reportid,ReportType).subscribe((data)=>{
            console.log(data)
          this.Stage = data[0].Stage
          this.router.navigate([`${this.Stage}/${reportid}`]);
      })
      // this.reportService.getReportById(reportid).subscribe((data)=>{
      //   console.log(data)
      //     this.Stage = data[0].Stage
      //     this.router.navigate([`${this.Stage}/${reportid}`]);
      // })
    }
    navigatetoselect1(reportid){
      console.log(reportid)
      this.reportService.getReportById(reportid).subscribe((data)=>{
        console.log(data)
          this.Stage = data[0].Stage
          this.irs.getFinalReportId(reportid).subscribe((datta)=>{
            console.log(datta);
            this.store=datta;
            console.log(this.store[0].IsValidate)
       
         
          if(this.store[0].IsValidate!=null) {
          this.router.navigate(['/preremarksscreen',reportid]);
          // this.router.navigate([`${this.Stage}/${reportid}`]);
          }
          else{
            alert('No Remarks Available');
          }
        })
      })
    }
    data(){
      $(document).ready(function() {
       $("#example").DataTable();
     });
   }
}
