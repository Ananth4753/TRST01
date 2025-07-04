import { Component, OnInit,Input } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { SelectsgxService } from '../../selectsgx/selectsgx.service';
import {Router,ActivatedRoute} from '@angular/router';
import { CreatereportforsgxService } from '../../createreportforsgx/createreportforsgx.service';
import { UploadevidenceforsgxComponent } from '../uploadevidenceforsgx/uploadevidenceforsgx.component';
import { AuthService } from 'app/core/auth/auth.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-social202b',
  templateUrl: './social202b.component.html',
  styleUrls: ['./social202b.component.scss']
})
export class Social202bComponent implements OnInit {
  socialform:FormGroup;
  @Input() soc4:any;
  @Input() guidance: any;
  @Input() description: any;
  yesorno:any;
  orgId:any;
  reportid:any;
  arr:any [];
  initialDraftReport: any = {};
  constructor(private fb:FormBuilder,public dialog: MatDialog,public AuthService:AuthService,private is:ImportdisService, private sgx:SelectsgxService, private aa: ActivatedRoute,private cs: CreatereportforsgxService ) { }

  ngOnInit() {
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.orgId=this.AuthService.user.orgId
    this.is.getLookupDetailsByHdrId(2).subscribe((Data) => {
      this.yesorno = Data;
  });

    this.socialform = this.fb.group({
      social1: [''],
      social2: [''],
      social3: [''],
      social4: [''],
      social5: [''],
      social6: ['']
    });


    this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport = JSON.parse(reportdata.InitialDraftReport);
        this.socialform.patchValue(this.initialDraftReport);
        this.socialform.patchValue({
          social1: this.initialDraftReport[10]['social202bQuestion1'],
          social2: this.initialDraftReport[10]['social202bQuestion2'],
          social3: this.initialDraftReport[10]['social202bQuestion3'],
          social4: this.initialDraftReport[10]['social202bQuestion4'],
          social5: this.initialDraftReport[10]['social202bQuestion5'],
          social6: this.initialDraftReport[10]['social202bQuestion6']
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
   var social202bQuestion1 = this.socialform.get('social1').value;
   var social202bQuestion2 = this.socialform.get('social2').value;
   var social202bQuestion3 = this.socialform.get('social3').value;
   var social202bQuestion4 = this.socialform.get('social4').value;
   var social202bQuestion5 = this.socialform.get('social5').value;
   var social202bQuestion6 = this.socialform.get('social6').value

    this.initialDraftReport[10] = {social202bQuestion1,social202bQuestion2,social202bQuestion3,social202bQuestion4,social202bQuestion5,social202bQuestion6}
    // this.sgx.sgxanswers[10]=this.initialDraftReport;
    console.log(this.initialDraftReport);
    const currentInitialDraftReport = this.initialDraftReport;
    const updatedInitialDraftReport = {
      ...currentInitialDraftReport,
      
    };
    this.sgx.sgxanswers[10]=currentInitialDraftReport[10];
   
    this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
        const reportdata = data[0];
        console.log(JSON.parse(reportdata.InitialDraftReport));
        var init=JSON.parse(reportdata.InitialDraftReport);
        if(init!=null){
        init[10]=this.sgx.sgxanswers[10]
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
       init[10]=this.sgx.sgxanswers[10]
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
