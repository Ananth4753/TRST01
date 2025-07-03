import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { SelectsgxService } from '../../selectsgx/selectsgx.service';
import { CreatereportforsgxService } from '../../createreportforsgx/createreportforsgx.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
import { UploadevidenceforsgxComponent } from '../uploadevidenceforsgx/uploadevidenceforsgx.component';

@Component({
  selector: 'app-governance306a',
  templateUrl: './governance306a.component.html',
  styleUrls: ['./governance306a.component.scss']
})
export class Governance306aComponent implements OnInit {

  gdform:FormGroup;
  @Input() gov9:any;
  Assurancedata:any;
  @Input() guidance: any;
  @Input() description: any;
  reportid:any;
  orgId:any;
  arr:any[];
  initialDraftReport:any = {};
  constructor(private fb:FormBuilder,public dialog: MatDialog,public AuthService:AuthService,private is:ImportdisService,private aa:ActivatedRoute, private sgx:SelectsgxService, private cs:CreatereportforsgxService) { }

  ngOnInit() {
this.reportid = this.aa.snapshot.paramMap.get('reportId');
this.orgId=this.AuthService.user.orgId
    this.is.getLookupDetailsByHdrId(49).subscribe((Data) => {
      this.Assurancedata = Data;
  });

    this.gdform = this.fb.group({
      Dghgemi1:['']
    });
    this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport = JSON.parse(reportdata.InitialDraftReport);
        this.gdform.patchValue(this.initialDraftReport);
        this.gdform.patchValue({
          Dghgemi1: this.initialDraftReport[26]['gov306aQuestion1'],
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
    var gov306aQuestion1 = this.gdform.get('Dghgemi1').value;
    this.initialDraftReport[26] = {gov306aQuestion1}
    // this.sgx.sgxanswers[26]=this.initialDraftReport;
    console.log(this.initialDraftReport);
    const currentInitialDraftReport = this.initialDraftReport;
    const updatedInitialDraftReport = {
      ...currentInitialDraftReport,
      
    };
    this.sgx.sgxanswers[26]=currentInitialDraftReport[26];
   
    this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
        const reportdata = data[0];
        console.log(JSON.parse(reportdata.InitialDraftReport));
        var init=JSON.parse(reportdata.InitialDraftReport);
        if(init!=null){
        init[26]=this.sgx.sgxanswers[26]
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
       init[26]=this.sgx.sgxanswers[26]
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
