import { Component, OnInit, Input } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectsgxService } from '../../selectsgx/selectsgx.service';
import { CreatereportforsgxService } from '../../createreportforsgx/createreportforsgx.service';
import { UploadevidenceforsgxComponent } from '../uploadevidenceforsgx/uploadevidenceforsgx.component';
import { AuthService } from 'app/core/auth/auth.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-envi104a',
  templateUrl: './envi104a.component.html',
  styleUrls: ['./envi104a.component.scss']
})
export class Envi104aComponent implements OnInit {
  enviroform:FormGroup;
  @Input() envi7:any;
  @Input() guidance: any;
  @Input() description: any;
  Waterconsumption:any;
  reportid:any;
  orgId:any;
  arr:any [];
  initialDraftReport: any = {};
  constructor(private fb:FormBuilder,public dialog: MatDialog,public AuthService:AuthService,private is:ImportdisService,private sgx:SelectsgxService, private aa: ActivatedRoute,private cs: CreatereportforsgxService) { }

  ngOnInit() {
    this.reportid = this.aa.snapshot.paramMap.get('reportId');

    this.is.getLookupDetailsByHdrId(46).subscribe((Data) => {
      this.Waterconsumption = Data;
  });

    this.enviroform = this.fb.group({
      Env1: [''],
      Env2: [''],
      Env3: ['']
    });
    this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport = JSON.parse(reportdata.InitialDraftReport);
        this.enviroform.patchValue(this.initialDraftReport);
        this.enviroform.patchValue({
          Env1: this.initialDraftReport[6]['env104Question1'],
          Env2: this.initialDraftReport[6]['env104Question2'],
          Env3: this.initialDraftReport[6]['env104Question3']
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
    var env104Question1 = this.enviroform.get('Env1').value;
    var env104Question2 = this.enviroform.get('Env2').value;
    var env104Question3 = this.enviroform.get('Env3').value;

    this.initialDraftReport[6] = {env104Question1,env104Question2,env104Question3}
  // this.sgx.sgxanswers[6]=this.initialDraftReport;
  console.log(this.initialDraftReport);
  const currentInitialDraftReport = this.initialDraftReport;
  const updatedInitialDraftReport = {
    ...currentInitialDraftReport,
    
  };
  this.sgx.sgxanswers[6]=currentInitialDraftReport[6];
 
  this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      console.log(JSON.parse(reportdata.InitialDraftReport));
      var init=JSON.parse(reportdata.InitialDraftReport);
      if(init!=null){
      init[6]=this.sgx.sgxanswers[6]
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
     init[6]=this.sgx.sgxanswers[6]
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
