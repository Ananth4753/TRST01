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
  selector: 'app-envi102b',
  templateUrl: './envi102b.component.html',
  styleUrls: ['./envi102b.component.scss']
})
export class Envi102bComponent implements OnInit {
  enviroform:FormGroup;
  @Input() envi4:any;
  @Input() guidance: any;
  @Input() description: any;
  energyconsumption:any;
  Intensity:any;
  reportid:any;
  orgId:any;
  arr:any [];
  initialDraftReport: any = {};

  constructor(private fb:FormBuilder,public dialog: MatDialog,public AuthService:AuthService,private is:ImportdisService,private sgx:SelectsgxService, private aa: ActivatedRoute,private cs: CreatereportforsgxService) { }

  ngOnInit() {
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.orgId=this.AuthService.user.orgId
    this.is.getLookupDetailsByHdrId(9).subscribe((Data) => {
      this.energyconsumption = Data;
  });

  this.is.getLookupDetailsByHdrId(45).subscribe((Data) => {
    this.Intensity = Data;
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
          Env1: this.initialDraftReport[3]['env102bQuestion1'],
          Env2: this.initialDraftReport[3]['env102bQuestion2'],
          Env3: this.initialDraftReport[3]['env102bQuestion3']
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
    var env102bQuestion1 = this.enviroform.get('Env1').value;
    var env102bQuestion2 = this.enviroform.get('Env2').value;
    var env102bQuestion3 = this.enviroform.get('Env3').value;

    this.initialDraftReport[3] = {env102bQuestion1,env102bQuestion2,env102bQuestion3}
  // this.sgx.sgxanswers[3]=this.initialDraftReport;
  console.log(this.initialDraftReport);
  const currentInitialDraftReport = this.initialDraftReport;
  const updatedInitialDraftReport = {
    ...currentInitialDraftReport,
    
  };
  this.sgx.sgxanswers[3]=currentInitialDraftReport[3];
 
  this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      console.log(JSON.parse(reportdata.InitialDraftReport));
      var init=JSON.parse(reportdata.InitialDraftReport);
      if(init!=null){
      init[3]=this.sgx.sgxanswers[3]
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
     init[3]=this.sgx.sgxanswers[3]
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
