import { Component, Inject, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import {  FormControl, FormGroup,Validators, FormBuilder }  from '@angular/forms';
import { NgForm } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { MD5 } from 'crypto-js';
import { DashboardService } from './dashboard.service';
import { CreatereportService} from '../createreport/createreport.service'
@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  RegistrationId:any;
  roleIt: any;
  usersform : FormGroup;
  msg:string;
  name:string;
  reportbyid:any;
    constructor(private ds :DashboardService,private router:Router,
      private fb:FormBuilder,private activatedroute:ActivatedRoute,
      private AuthService:AuthService,private reportService:CreatereportService) { 
      var now = new Date();
      var hrs = now.getHours();
      var msg = "";
      
      if (hrs >  0) msg = "Good morning"; // REALLY early
      if (hrs >  6) msg = "Good morning";      // After 6am
      if (hrs > 12) msg = "Good afternoon";    // After 12pm
      if (hrs > 17) msg = "Good evening";      // After 5pm
      if (hrs > 22) msg = "Good evening";        // After 10pm
      this.msg=msg
    }
  
    ngOnInit() {
   console.log(this.AuthService.user);
      this.ds.getuserdetails(this.AuthService.user.id).subscribe((data) => {
        console.log(data);
        this.name=data[0]['FirstName'];
      });
      this.ds.showreportrbyUserId(this.AuthService.user.id).subscribe((data)=>{
this.reportbyid=data;
      })
    }
    Stage:any;
    navigatetoselect(reportid){
      console.log(reportid)
      this.reportService.getReportById(reportid).subscribe((data)=>{
          this.Stage = data[0].Stage
          this.router.navigate([`${this.Stage}/${reportid}`]);
      })
    }
    remove(reportid){
      this.ds.removebyId(reportid).subscribe((Data)=>{
        console.log(Data);
        window.location.reload()
      })
    }
    reloadComponent(self:boolean,urlToNavigateTo ?:string){
      //skipLocationChange:true means dont update the url to / when navigating
     console.log("Current route I am on:",this.router.url);
     const url=self ? this.router.url :urlToNavigateTo;
     this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
       this.router.navigate([`/${url}`]).then(()=>{
         console.log(`After navigation I am on:${this.router.url}`)
       })
     })
   }
  
  }
  