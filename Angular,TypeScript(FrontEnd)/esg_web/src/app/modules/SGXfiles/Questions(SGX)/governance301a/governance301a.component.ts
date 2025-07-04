import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectsgxService } from '../../selectsgx/selectsgx.service';
import { CreatereportforsgxService } from '../../createreportforsgx/createreportforsgx.service';
import { UploadevidenceforsgxComponent } from '../uploadevidenceforsgx/uploadevidenceforsgx.component';
import { AuthService } from 'app/core/auth/auth.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-governance301a',
  templateUrl: './governance301a.component.html',
  styleUrls: ['./governance301a.component.scss']
})
export class Governance301aComponent implements OnInit {

  constructor(private fb:FormBuilder,public dialog: MatDialog,public AuthService:AuthService,private sgx:SelectsgxService, private aa: ActivatedRoute,private cs: CreatereportforsgxService) { }
  gdform:FormGroup;
  @Input() gov1:any;
  @Input() guidance: any;
  @Input() description: any;
  orgId:any;
  reportid:any;
  arr:any [];
  initialDraftReport: any = {};
  ngOnInit() {
    this.reportid = this.aa.snapshot.paramMap.get('reportId');

    this.gdform = this.fb.group({
      Dghgemi1:['']
    });

    this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport = JSON.parse(reportdata.InitialDraftReport);
        this.gdform.patchValue(this.initialDraftReport);
        this.gdform.patchValue({
          Dghgemi1: this.initialDraftReport[19]['gov301aQuestion1']
          
        });
      }
    });
  }
  openuploadimgcompo(ReportId: any, GuidanceNumber: any, OrgId: any, ques: any) {
    const dialogRef = this.dialog.open(UploadevidenceforsgxComponent, {
      autoFocus: false,
      data: { ReportId, GuidanceNumber, OrgId, ques },
    });
  } 
  onSave() {
    var gov301aQuestion1 = this.gdform.get('Dghgemi1').value;

    this.initialDraftReport[19] = {gov301aQuestion1}
  // this.sgx.sgxanswers[19]=this.initialDraftReport;
  console.log(this.initialDraftReport);
  const currentInitialDraftReport = this.initialDraftReport;
  const updatedInitialDraftReport = {
    ...currentInitialDraftReport,
    
  };
  this.sgx.sgxanswers[19]=currentInitialDraftReport[19];
 
  this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      console.log(JSON.parse(reportdata.InitialDraftReport));
      var init=JSON.parse(reportdata.InitialDraftReport);
      if(init!=null){
      init[19]=this.sgx.sgxanswers[19]
      console.log(reportdata);
    
      const selectedboxes: any = {
        Id: reportdata.Id,
        ReportName: reportdata.ReportName,
        InitialDraftReport:  init,
        StartDate: reportdata.StartDate,
        EndDate: reportdata.EndDate,
        IsActive: reportdata.IsActive,
        UpdatedByUserId: reportdata.UpdatedByUserId,
        UpdatedDate: reportdata.UpdatedDate,
      };

    console.log(selectedboxes);
    this.cs.createreport(selectedboxes).subscribe((res) => {
      console.log(res);
    });
     }
     else{
      init=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
     init[19]=this.sgx.sgxanswers[19]
     console.log(init);
     const selectedboxes: any = {
      Id: reportdata.Id,
      ReportName: reportdata.ReportName,
      InitialDraftReport:  init,
      StartDate: reportdata.StartDate,
      EndDate: reportdata.EndDate,
      IsActive: reportdata.IsActive,
      UpdatedByUserId: reportdata.UpdatedByUserId,
      UpdatedDate: reportdata.UpdatedDate,
    };
    console.log(selectedboxes);
    this.cs.createreport(selectedboxes).subscribe((res) => {
      console.log(res);
    });
    }
     
    });
  } 
}
