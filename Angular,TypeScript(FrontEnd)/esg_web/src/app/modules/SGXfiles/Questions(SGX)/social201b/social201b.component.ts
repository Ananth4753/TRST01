import { Component, OnInit, Input } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { SelectsgxService } from '../../selectsgx/selectsgx.service';
import {Router,ActivatedRoute} from '@angular/router';
import { CreatereportforsgxService } from '../../createreportforsgx/createreportforsgx.service';
import { UploadevidenceforsgxComponent } from '../uploadevidenceforsgx/uploadevidenceforsgx.component';
import { AuthService } from 'app/core/auth/auth.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-social201b',
  templateUrl: './social201b.component.html',
  styleUrls: ['./social201b.component.scss']
})
export class Social201bComponent implements OnInit {
  socialform:FormGroup;
  @Input() soc2:any;
  @Input() guidance: any;
  @Input() description: any;
  Gender:any;
  reportid:any;
  orgId:any;
  arr:any [];
  initialDraftReport: any = {};
  newAttribute:any={};
  lookupdtl201b1:any;
  newAttribute1:any={};
  lookupdtl201b2:any;

  constructor(private fb:FormBuilder,public dialog: MatDialog,public AuthService:AuthService,private is:ImportdisService,private sgx:SelectsgxService, private aa: ActivatedRoute,private cs: CreatereportforsgxService) { 
    this.lookupdtl201b1 = [];
    this.lookupdtl201b2 = [];
  }

  ngOnInit() {

    this.addFieldValue();
    this.addFieldValue1();

    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.is.getLookupDetailsByHdrId(1).subscribe((Data) => {
      this.Gender = Data;
  });

    this.socialform = this.fb.group({
      social1: [''],
      social2: [''],
      social3: [''],
      social4: ['']
    });

    this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport = JSON.parse(reportdata.InitialDraftReport);
        this.lookupdtl201b1 = JSON.parse(this.initialDraftReport[8]['SocialTable1']);
        this.lookupdtl201b2 = JSON.parse(this.initialDraftReport[8]['SocialTable2']);
        this.socialform.patchValue(this.initialDraftReport);
        // this.socialform.patchValue({
        //   social1: this.initialDraftReport[8]['social201bQuestion1'],
        //   social2: this.initialDraftReport[8]['social201bQuestion2'],
        //   social3: this.initialDraftReport[8]['social201bQuestion3'],
        //   social4: this.initialDraftReport[8]['social201bQuestion4']
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
  //  var social201bQuestion1 = this.socialform.get('social1').value;
  //  var social201bQuestion2 = this.socialform.get('social2').value;
  //  var social201bQuestion3 = this.socialform.get('social3').value;
  //  var social201bQuestion4 = this.socialform.get('social4').value
  
    this.initialDraftReport[8] = {SocialTable1:JSON.stringify(this.lookupdtl201b1),SocialTable2:JSON.stringify(this.lookupdtl201b2)}
    // this.sgx.sgxanswers[8]=this.initialDraftReport;
    console.log(this.initialDraftReport);
    const currentInitialDraftReport = this.initialDraftReport;
    const updatedInitialDraftReport = {
      ...currentInitialDraftReport,
      
    };
    this.sgx.sgxanswers[8]=currentInitialDraftReport[8];
   
    this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
        const reportdata = data[0];
        console.log(JSON.parse(reportdata.InitialDraftReport));
        var init=JSON.parse(reportdata.InitialDraftReport);
        if(init!=null){
        init[8]=this.sgx.sgxanswers[8]
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
       init[8]=this.sgx.sgxanswers[8]
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
    this.lookupdtl201b1.push(this.newAttribute);
}

deleteQ102a(i) {
  this.lookupdtl201b1.splice(i, 1);
}
changegender(i,value) {
  this.lookupdtl201b1[i]['Gender'] = value.value;
  console.log(value.value);
}
changeAssessments(i){
  console.log(
    (<HTMLInputElement>(
        document.getElementById('Assessments' + i.toString())
    )).value
);
this.lookupdtl201b1[i]['Assessments'] = (<HTMLInputElement>(
    document.getElementById('Assessments' + i.toString())
)).value;
}

changeSubject(i){
  console.log(
    (<HTMLInputElement>(
        document.getElementById('Subject' + i.toString())
    )).value
);
this.lookupdtl201b1[i]['Subject'] = (<HTMLInputElement>(
    document.getElementById('Subject' + i.toString())
)).value;
}

addFieldValue1() {
  this.newAttribute1 = {
      Subject1: '',
      Gender1: '',
      Assessments1: ''
  };
  this.lookupdtl201b2.push(this.newAttribute1);
}

deleteQ102a1(i) {
this.lookupdtl201b2.splice(i, 1);
}
changegender1(i,value) {
this.lookupdtl201b2[i]['Gender1'] = value.value;
console.log(value.value);
}

changeAssessments1(i){
  console.log(
    (<HTMLInputElement>(
        document.getElementById('Assessments1' + i.toString())
    )).value
);
this.lookupdtl201b2[i]['Assessments1'] = (<HTMLInputElement>(
    document.getElementById('Assessments1' + i.toString())
)).value;
}

changeSubject1(i){
console.log(
  (<HTMLInputElement>(
      document.getElementById('Subject1' + i.toString())
  )).value
);
this.lookupdtl201b2[i]['Subject1'] = (<HTMLInputElement>(
  document.getElementById('Subject1' + i.toString())
)).value;
}
}
