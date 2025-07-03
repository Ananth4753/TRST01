import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate/validate.service';
import { AuthService } from 'app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdatereportService } from '../updatereport/updatereport.service';
import Swal from 'sweetalert2';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { DashboardService } from '../dashboard/dashboard.service';
import { MD5 } from 'crypto-js';
import { SignoffreportService } from './signoffreport.service';
@Component({
  selector: 'app-signoffreport',
  templateUrl: './signoffreport.component.html',
  styleUrls: ['./signoffreport.component.scss']
})
export class SignoffreportComponent implements OnInit {
  reportid: any;
  reportname: any;
  reportstartdate: any;
  reportenddate: any;
  orgid: any;
  email: any;
  name: any;
  password: any;
  mailid: any;
  Validateform: FormGroup;
  namesofvalidator: any[];
  filteredNames: any[] = [];
  storeddata: any[];
  goo:any
  boo:any;
  constructor(
    private AuthService: AuthService,
    private ss: ValidateService,
    private signoffreportservice:SignoffreportService,
    private router: Router,
    private aa: ActivatedRoute,
    private fb: FormBuilder,
    private us: UpdatereportService,
    private ds: DashboardService
  ) {}

  ngOnInit() {
    console.log(this.AuthService.user);
    this.orgid = this.AuthService.user.orgId;
    this.ds.getuserdetails(this.AuthService.user.id).subscribe((data1) => {
      this.email = data1[0]['FirstName'];
      this.reportid = this.aa.snapshot.paramMap.get('reportId');
      this.us.getReportDetailsByReportId(this.reportid).subscribe((res) => {
        this.reportname = res[0].ReportName;
        this.reportstartdate = res[0].StartDate;
        this.reportenddate = res[0].EndDate;
        this.ss.getUsersinOrganization(res[0].OrgId).subscribe((data) => {
          this.storeddata = data;
          if (this.email === data[0].FirstName) {
            console.log(data);
            this.mailid = data[0].EmailId;
            this.password = data[0].Password;
            this.filteredNames = data.filter((user) => user.FirstName !== this.email);
          } else {
            this.filteredNames = data;
          }
        });
      });
    });
    this.Validateform = this.fb.group({
      iei: [''],
    });
  }

  back() {
    this.router.navigate(['/previewreport', this.reportid]);
  }

  abc(event) {
    console.log(this.Validateform.get('iei').value);
    var val = this.Validateform.get('iei').value;
    var selectedUser = this.filteredNames.find((user) => user.Id === val);

    if (selectedUser) {
      this.goo = selectedUser.UserName;
      this.boo = selectedUser.RoleId;
      console.log(this.boo);
      this.password = selectedUser.Password;
    }
  }

  async validate() {
    console.log(this.Validateform.get('iei').value);
    const selectedUserIds = this.Validateform.get('iei').value;
    
    for (const selectedUserId of selectedUserIds) {
      const selectedUser = this.filteredNames.find((user) => user.Id === selectedUserId);
      if (selectedUser) {
        this.goo = selectedUser.UserName;
        this.boo = selectedUser.RoleId;
        console.log(this.boo);
        this.password = selectedUser.Password;
      }
  
      const obj = {
        "MailId": this.goo,
        "reportid": this.reportid
      };
  
      try {
        await this.signoffreportservice.pushforvalidation(obj).toPromise();
        console.log('Email sent');
      } catch (error) {
        console.log('Email sending error:', error);
      }
    }
    this.router.navigate(['/previewreport', this.reportid]);
  }
}