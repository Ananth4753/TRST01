import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { SelectsgxService } from '../../selectsgx/selectsgx.service';
import { CreatereportforsgxService } from '../../createreportforsgx/createreportforsgx.service';
import { UploadevidenceforsgxComponent } from '../uploadevidenceforsgx/uploadevidenceforsgx.component';
import { AuthService } from 'app/core/auth/auth.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-envi101b',
  templateUrl: './envi101b.component.html',
  styleUrls: ['./envi101b.component.scss']
})
export class Envi101bComponent implements OnInit {
  envform:FormGroup;
  @Input() envi2:any;
  @Input() guidance: any;
  @Input() description: any;
  Intensity:any;
  reportid:any;
  orgId:any;
  arr:any [];
  initialDraftReport: any = {};
  constructor(private fb:FormBuilder,public dialog: MatDialog,public AuthService:AuthService,private is:ImportdisService, private sgx:SelectsgxService, private aa: ActivatedRoute,private cs: CreatereportforsgxService) { }

  ngOnInit() {
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.orgId=this.AuthService.user.orgId
    this.is.getLookupDetailsByHdrId(45).subscribe(data => {
      this.Intensity = data;
       });

    this.envform = this.fb.group({
      Dghgemi1: [''],
      Dghgemi2: [''],
      Dghgemi3:[],
      Dghgemi4: [],
      Dghgemi5: [],
      Dghgemi6: [''],
      Dghgemi7: [''],
      Dghgemi8:[]
    });
    
  

    this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport = JSON.parse(reportdata.InitialDraftReport);
        this.envform.patchValue(this.initialDraftReport);
        this.envform.patchValue({
          Dghgemi1: this.initialDraftReport[1]['env1bQuestion1'],
          Dghgemi2: this.initialDraftReport[1]['env1bQuestion2'],
          Dghgemi3: this.initialDraftReport[1]['env1bQuestion3'],
          Dghgemi4: this.initialDraftReport[1]['env1bQuestion4'],
          Dghgemi5: this.initialDraftReport[1]['env1bQuestion5'],
          Dghgemi6: this.initialDraftReport[1]['env1bQuestion6'],
          Dghgemi7: this.initialDraftReport[1]['env1bQuestion7'],
          Dghgemi8: this.initialDraftReport[1]['env1bQuestion8']
         
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
   var env1bQuestion1 = this.envform.get('Dghgemi1').value;
   var env1bQuestion2 = this.envform.get('Dghgemi2').value;
   var env1bQuestion3 = this.envform.get('Dghgemi3').value;
   var env1bQuestion4 = this.envform.get('Dghgemi4').value;
   var env1bQuestion5 = this.envform.get('Dghgemi5').value;
   var env1bQuestion6 = this.envform.get('Dghgemi6').value;
   var env1bQuestion7 = this.envform.get('Dghgemi7').value;
   var env1bQuestion8 = this.envform.get('Dghgemi8').value;
  
    this.initialDraftReport[1] = {env1bQuestion1,env1bQuestion2,env1bQuestion3,env1bQuestion4,env1bQuestion5,env1bQuestion6,env1bQuestion7,env1bQuestion8}
  // this.sgx.sgxanswers[1]=this.initialDraftReport;
  console.log(this.initialDraftReport);
  const currentInitialDraftReport = this.initialDraftReport;
  const updatedInitialDraftReport = {
    ...currentInitialDraftReport,
    
  };
  this.sgx.sgxanswers[1]=currentInitialDraftReport[1];
 
  this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      console.log(JSON.parse(reportdata.InitialDraftReport));
      var init=JSON.parse(reportdata.InitialDraftReport);
      if(init!=null){
      init[1]=this.sgx.sgxanswers[1]
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
     init[1]=this.sgx.sgxanswers[1]
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
