import { Component, Inject, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import {  FormControl, FormGroup,Validators, FormBuilder }  from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AppService } from 'app/app.service';
import {Router,ActivatedRoute} from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { CreatereportService } from '../createreport/createreport.service';
import { MyreportsService } from '../myreports/myreports.service';
import { ValidatingreportscreenService } from '../validatingreportscreen/validatingreportscreen.service';
@Component({
  selector: 'app-preremarksscreen',
  templateUrl: './preremarksscreen.component.html',
  styleUrls: ['./preremarksscreen.component.scss']
})
export class PreremarksscreenComponent implements OnInit {
  reportbyid:any;
  reportid:any;
  reportrep:any;
  reportres:any[];
  store:any;
  constructor(private ds :DashboardService,private router:Router,private vrs:ValidatingreportscreenService,private aa:ActivatedRoute,private apps:AppService,
    private fb:FormBuilder,private reportService:CreatereportService,
    private AuthService:AuthService,private mr:MyreportsService) { 
      this.reportres = [];
    }

  ngOnInit() {
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    console.log(this.AuthService.user);
   
    this.vrs.GetValidatingFinalReportByonlyReportid(this.reportid).subscribe(rep=>{
      console.log(rep);
      this.ds.showreportrbyReportId(this.reportid).subscribe((data)=>{
        console.log(data)
        this.reportbyid=data;
       
    })
      this.reportrep=rep;
for (var i=0;i <this.reportrep.length;i++) {
  console.log(typeof(this.reportrep[i].UserId))
  this.store=parseInt(this.reportrep[i].UserId);
     this.ds.getuserdetailsonly(this.store).subscribe(res=>{
      console.log(res);
      this.reportres.push(res[0]);
      console.log(this.reportres);
      $(document).ready(function () {
        $('#example').DataTable();
      });
     });
   
    }
  
    
  })
  
  
  }
 
    navigatetoselect(reportid,usid){
      console.log(usid);
      this.apps.valuserid=usid;
      console.log(reportid)
      this.router.navigate(['/remarksdisplay', this.reportid]);
    }
    data(){
      $(document).ready(function() {
       $("#example").DataTable();
     });
   }
}
