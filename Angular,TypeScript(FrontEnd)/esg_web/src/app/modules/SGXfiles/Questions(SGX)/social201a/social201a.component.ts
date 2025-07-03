import { Component, OnInit, Input } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { SelectsgxService } from '../../selectsgx/selectsgx.service';
import {Router,ActivatedRoute} from '@angular/router';
import { CreatereportforsgxService } from '../../createreportforsgx/createreportforsgx.service';
import { AuthService } from 'app/core/auth/auth.service';
import { UploadevidenceforsgxComponent } from '../uploadevidenceforsgx/uploadevidenceforsgx.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-social201a',
  templateUrl: './social201a.component.html',
  styleUrls: ['./social201a.component.scss']
})
export class Social201aComponent implements OnInit {
  socialform:FormGroup;
  @Input() soc1:any;
  @Input() guidance: any;
  @Input() description: any;
  Gender:any; 
  reportid:any;
  orgId:any;
  arr:any [];
  initialDraftReport: any = {};
  newAttribute:any = {};
  lookupdtl:any;
  constructor(private fb:FormBuilder,public dialog: MatDialog,public AuthService:AuthService,private is:ImportdisService,private sgx:SelectsgxService, private aa: ActivatedRoute,private cs: CreatereportforsgxService) { 
    this.lookupdtl = [];
  }

  ngOnInit() {
    this.addFieldValue();
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.is.getLookupDetailsByHdrId(1).subscribe((Data) => {
      this.Gender = Data;
  });

    this.socialform = this.fb.group({
      social1: [''],
      social2: ['']
    });
    // this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    //   const reportdata = data[0];
    //   if (reportdata && reportdata.InitialDraftReport) {
    //     this.initialDraftReport = JSON.parse(reportdata.InitialDraftReport);
    //     this.lookupdtl=JSON.parse(this.initialDraftReport[7]['Table1']);
    //     this.socialform.patchValue(this.initialDraftReport);
    //     this.socialform.patchValue({
    //       social1: this.initialDraftReport['social201aQuestion1'],
    //       social2: this.initialDraftReport['social201aQuestion2']
    //     });
    //   }
    // });

    this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport = JSON.parse(reportdata.InitialDraftReport);
        this.lookupdtl=JSON.parse(this.initialDraftReport[7]['Table1']);
        this.socialform.patchValue(this.initialDraftReport);
        // this.socialform.patchValue({
        //   social1: this.initialDraftReport[7]['social201aQuestion1'],
        //   social2: this.initialDraftReport[7]['social201aQuestion2']
        // });
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
    // var social201aQuestion1 = this.socialform.get('social1').value;
    // var social201aQuestion2 = this.socialform.get('social2').value;
  
    this.initialDraftReport[7] = {Table1: JSON.stringify(this.lookupdtl)}
    // this.sgx.sgxanswers[7]=this.initialDraftReport;
    console.log(this.initialDraftReport);
    const currentInitialDraftReport = this.initialDraftReport;
    const updatedInitialDraftReport = {
      ...currentInitialDraftReport,
      
    };
    this.sgx.sgxanswers[7]=currentInitialDraftReport[7];
   
    this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
        const reportdata = data[0];
        console.log(JSON.parse(reportdata.InitialDraftReport));
        var init=JSON.parse(reportdata.InitialDraftReport);
        if(init!=null){
        init[7]=this.sgx.sgxanswers[7]
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
       init[7]=this.sgx.sgxanswers[7]
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

  addFieldValue() {
    this.newAttribute = {
        Subject: '',
        Gender: '',
        Assessments: ''
    };
    this.lookupdtl.push(this.newAttribute);
}
deleteQ102a(i) {
  this.lookupdtl.splice(i, 1);
}
changegender(i,value) {
  this.lookupdtl[i]['Gender'] = value.value;
  console.log(value.value);
}
changeAssessments(i){
  console.log(
    (<HTMLInputElement>(
        document.getElementById('Assessments' + i.toString())
    )).value
);
this.lookupdtl[i]['Assessments'] = (<HTMLInputElement>(
    document.getElementById('Assessments' + i.toString())
)).value;
}

changeSubject(i){
  console.log(
    (<HTMLInputElement>(
        document.getElementById('Subject' + i.toString())
    )).value
);
this.lookupdtl[i]['Subject'] = (<HTMLInputElement>(
    document.getElementById('Subject' + i.toString())
)).value;
}
}
