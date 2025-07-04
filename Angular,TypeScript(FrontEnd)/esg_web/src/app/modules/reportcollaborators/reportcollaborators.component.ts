import { Component, Inject, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import {  FormControl, FormGroup,Validators, FormBuilder }  from '@angular/forms';
import { NgForm } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { MD5 } from 'crypto-js';
import { DashboardService } from '../dashboard/dashboard.service';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import * as jQuery from "jquery";
import DataTable from 'datatables.net-dt';

@Component({
  selector: 'app-reportcollaborators',
  templateUrl: './reportcollaborators.component.html',
  styleUrls: ['./reportcollaborators.component.scss']
})
export class ReportcollaboratorsComponent implements OnInit {
  reportbyid:any;
  reportid:any;
  constructor(private ds :DashboardService,private router:Router,public dialog: MatDialog,private fb:FormBuilder,private activatedroute:ActivatedRoute,private AuthService:AuthService) { }

  ngOnInit() {
    this.ds.showreportrbyUserId(this.AuthService.user.orgId).subscribe((data)=>{
      console.log(data)
      this.reportbyid=data;
      $(document).ready(function () {
        $('#example').DataTable();
      });
            })
  }
  opendi(ReportId:any,ReportName:any){
    const dialogRef = this.dialog.open(PopupComponent, {
      autoFocus: false,
     data:{ReportId,ReportName}
  });
  }
  data(){
    $(document).ready(function() {
     $("#example").DataTable();
   });
 }
}
