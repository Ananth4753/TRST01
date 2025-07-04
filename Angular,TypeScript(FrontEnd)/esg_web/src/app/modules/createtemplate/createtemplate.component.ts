import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'app/core/auth/auth.service';
import { CreatetemplateService } from './createtemplate.service';

@Component({
  selector: 'app-createtemplate',
  templateUrl: './createtemplate.component.html',
  styleUrls: ['./createtemplate.component.scss']
})
export class CreatetemplateComponent implements OnInit {
  reportform: FormGroup;
  orgid:any;
  constructor(private router:Router,private fb: FormBuilder,private as:AuthService,private cs:CreatetemplateService) { }

  ngOnInit() {
    this.orgid=this.as.user.orgId
    console.log(this.as.user.orgId);
    this.reportform = this.fb.group({
      Id: [null],
      TemplateName: ['', Validators.required],
    	CreatedByUserId: [this.as.user.id],	
      UpdatedByUserId: [this.as.user.id],
      OrgId:[this.as.user.orgId]
    });
  }
    back(){
      this.router.navigate(['/grifortemplate']);
    }
  next(){
    const ReportDetails: any = this.reportform.value;
    console.log(ReportDetails);
this.cs.createtemplate(ReportDetails).subscribe((data)=>{
console.log(data);
// this.gs.saveReportId(data.reportid);
this.router.navigate(['/selectfortemplate',data.Tid]);
})
  }
}
