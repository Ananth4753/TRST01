import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-principal4a',
  templateUrl: './principal4a.component.html',
  styleUrls: ['./principal4a.component.css']
})
export class Principal4aComponent implements OnInit {
  principalform:FormGroup
  @Input() princi4e:any;
  newAttribute: {};
  lookupdtl:any;
  reportid:any;
  initialDraftReport1: any = {};
  YesorNo:any;
  inputfordrop:string;
  inputfordrops: string;
  relothers1: any;
  selectedName:any;
  inputfordrops1: string;
  relothers2: any;
  gfds:any;
  Communication :any;
  Frequency :any;
  onInputChange: any;
  orgId:any;
  
  constructor(private fb: FormBuilder, private is: ImportdisService,public AuthService:AuthService,public dialog: MatDialog,private cs:CreatereportforbrsrService,private aa:ActivatedRoute,private sele:SelectbrsrService) { 
    this.lookupdtl = [];
  }
  
  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
this.addFieldValue();
    this.is.getLookupDetailsByHdrId(35).subscribe((Data) => {
      this.gfds = Data;
    });
    this.is.getLookupDetailsByHdrId(37).subscribe((Data) => {
      this.YesorNo = Data;
    });
    this.sele.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      console.log(reportdata);
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport1 = JSON.parse(reportdata.InitialDraftReport);
        console.log(this.initialDraftReport1);
  
      }
    });
    this.sele.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport1 = JSON.parse(reportdata.InitialDraftReport);
        //this.lookupdtl=JSON.parse(this.initialDraftReport1[1]['Table1']);
        this.principalform.patchValue(this.initialDraftReport1);
        this.principalform.patchValue({
          dos1: this.initialDraftReport1[15]['one'],

        });
        this.lookupdtl=JSON.parse(this.initialDraftReport1[15]['Table1']);
      
  
      }
    });
    this.is.getLookupDetailsByHdrId(41).subscribe((Data) => {
      this.Communication = Data;
    });

    this.is.getLookupDetailsByHdrId(12).subscribe((Data) => {
      this.Frequency = Data;
      console.log(Data);
    });
    this.principalform = this.fb.group({
      dos1: [''],
      
      
     })
  }

  addFieldValue() {
    this.newAttribute = {
      Stakeholder: '',
      Whetheridentified: '',
      Channels: '',
      Frequency : '',
      PurposeScope: ''
    };
    this.lookupdtl.push(this.newAttribute);
    this.relothers1 = '';
    this.relothers2 = '';
}

deleteQ1(i) {
  this.lookupdtl.splice(i, 1);
}

// inputforothers1(i, value) {

//   this.inputfordrops = (<HTMLInputElement>(
//       document.getElementById('Channels' + i.toString())
//   )).value;
//   console.log(this.inputfordrops);

// }

inputforothers1(i, value) {
  //1
  this.inputfordrops = (<HTMLInputElement>(
      document.getElementById('Channels' + i.toString())
  )).value;
  console.log(this.inputfordrops);
  this.lookupdtl[i]['Channels'] = this.inputfordrops;
  console.log(this.lookupdtl);
}

inputforothers(i, value) {
  //1
  this.inputfordrop = (<HTMLInputElement>(
      document.getElementById('Stakeholder' + i.toString())
  )).value;
  console.log(this.inputfordrop);
  this.lookupdtl[i]['Stakeholder'] = this.inputfordrop;
  console.log(this.lookupdtl);
}

OnChangeType1(i, value) {
  this.relothers1 = value.value;

  if (value.value != 'Others'){
this.lookupdtl[i]['Channels'] = value.value;
  }
}
OnChangeType2(i, value) {
  this.relothers2 = value.value;

  if (value.value != 'Other'){
this.lookupdtl[i]['Stakeholder'] = value.value;
  }
}

OnChangeType3(i, value) {
  this.relothers2 = value.value;
  if (value.value != 'Others'){
    this.lookupdtl[i]['Frequency'] = value.value;
      }
  //if (value.value != 'Others'){
// this.lookupdtl[i]['Frequency'] = value.value;
  //}
}

OnChangeType4(i, value) {
  this.relothers1 = value.value;

  //if (value.value != 'NA'){
this.lookupdtl[i]['Whetheridentified'] = value.value;
  //}
}

// OnChangeType5(i, value) {
//   this.relothers1 = value.value;

//   //if (value.value != 'NA'){
// this.lookupdtl[i]['PurposeScope'] = value.value;
//   //}
// }

OnChangeType(i, value) {
  var empty = '';
  this.onInputChange(empty);
  this.lookupdtl[i]['Type'] = value.value;
  }
  changeAssessments(i) {
    this.lookupdtl[i]['PurposeScope'] = (<HTMLInputElement>(
        document.getElementById('PurposeScope' + i.toString())
    )).value;
}

inputforothers2(i, value) {

  this.inputfordrops1 = (<HTMLInputElement>(
      document.getElementById('Frequency' + i.toString())
  )).value;
  console.log(this.inputfordrops1);
  this.lookupdtl[i]['Frequency'] = this.inputfordrops1;
  console.log(this.lookupdtl);
}
// OnChangeType2(i, value) {
//   this.relothers2 = value.value;
// }
onSave() {
  var one=this.principalform.get('dos1').value
  var Table1 = JSON.stringify(this.lookupdtl)
  console.log(Table1);
  this.initialDraftReport1[15] = {one,Table1:JSON.stringify(this.lookupdtl)}
  //this.initialDraftReport1[14] = {one}
  console.log(this.initialDraftReport1);
  const currentInitialDraftReport = this.initialDraftReport1;
  this.sele.liquid[15]=currentInitialDraftReport[15];
  console.log(currentInitialDraftReport);
  console.log(this.sele.liquid[15])
  console.log(this.sele.liquid);

  this.sele.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    const reportdata = data[0];
    console.log(JSON.parse(reportdata.InitialDraftReport));
    console.log(this.sele.liquid[15])
   var init=JSON.parse(reportdata.InitialDraftReport);
   if(init!=null){
   init[15]=this.sele.liquid[15]
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
  else{
    init=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
   init[15]=this.sele.liquid[15]
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
openuploadimgcompo(ReportId: any, GuidanceNumber: any, OrgId: any, ques: any) {

  const dialogRef = this.dialog.open(UploadevidenceforbrsrComponent, {

    autoFocus: false,

    data: { ReportId, GuidanceNumber, OrgId, ques },

  });

}

}
