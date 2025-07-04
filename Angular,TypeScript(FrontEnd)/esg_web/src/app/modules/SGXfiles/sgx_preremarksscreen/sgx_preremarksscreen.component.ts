import { Component, Inject, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import {  FormControl, FormGroup,Validators, FormBuilder }  from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AppService } from 'app/app.service';
import {Router,ActivatedRoute} from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { Sgx_validatingreportscreenService } from '../sgx_validatingreportscreen/sgx_validatingreportscreen.service';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';

@Component({
  selector: 'app-sgx_preremarksscreen',
  templateUrl: './sgx_preremarksscreen.component.html',
  styleUrls: ['./sgx_preremarksscreen.component.scss']
})
export class Sgx_preremarksscreenComponent implements OnInit {

  reportbyid:any;
  reportid:any;
  reportrep:any;
  reportres:any[];
  store:any;
  constructor(private router:Router,private vrs:Sgx_validatingreportscreenService,private aa:ActivatedRoute,private apps:AppService,
    private fb:FormBuilder,private ds :DashboardService,
    private AuthService:AuthService) { 
      this.reportres = [];
    }

  ngOnInit() {
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    console.log(this.AuthService.user);
   
    this.vrs.GetSGXValidatingFinalReportByonlyReportid(this.reportid).subscribe(rep=>{
      console.log(rep);
      this.ds.showSGXreportrbyReportId(this.reportid).subscribe((data)=>{
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
      this.router.navigate(['/sgx_remarkspreview', this.reportid]);
    }
    data(){
      $(document).ready(function() {
       $("#example").DataTable();
     });
   }
}
