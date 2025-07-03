import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-gd2',
  templateUrl: './gd2.component.html',
  styleUrls: ['./gd2.component.scss']
})
export class Gd2Component implements OnInit {
  gdform:FormGroup
  lookupdtl: any;
  initialDraftReport: any = {};
  @Input() entity:any;
  newAttribute: { Subject: string; Type: string; Assessments: string; Labs: string; Turnover: string; };
  finalobj: any;
  reltypeothers: any;
  selectedName: any;
  srno:any;
  reportid: any;
  filteredList5: any;
  lookupdtl2x: any;
  filteredListMA:any;
  Relationshiptype: any;
  MainAct:any;
  inputfordrops: string;
  industries: any;
  filteredList6: any;
  filteredList7: any;
  countrylist: any;
  newAttribute2x: { Subject2x: string; Type2x: string; Assessments2x: string; Labs2x: string; Projects2x: string; };
  reltypeother: string;
  storeschan: any;
  inputfordrop: string;
  orgId:any
  constructor(private fb: FormBuilder ,private is: ImportdisService,public AuthService:AuthService, public dialog: MatDialog,  private ss: SelectbrsrService,private aa: ActivatedRoute, private cs: CreatereportforbrsrService,) {
    this.lookupdtl = [];
    this.lookupdtl2x=[];
    this.srno=0;
   }

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId

    this.gdform = this.fb.group({
      prodserv1:[],
      prodserv2:[],
    })
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.is.getLookupDetailsByHdrId(21).subscribe((Data) => {
  });
  this.is.getLookupDetailsByHdrId(30).subscribe((Data) => {
    this.MainAct = Data;
    this.filteredListMA = this.MainAct.slice();
});
  this.is.getNICCode().subscribe((Data) => {
    this.Relationshiptype = Data;
      this.filteredList5 = this.Relationshiptype.slice();
      console.log(this.filteredList5);
  });

  this.is.getLookupDetailsByHdrId(3).subscribe((Data) => {
    this.industries = Data;
    this.filteredList6 = this.industries.slice();
});

this.is.getCountryDetails().subscribe((data) => {
  this.countrylist = data;
  this.filteredList7 = this.countrylist.slice();
});
this.addFieldValue();
this.addFieldValue2x();
this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
  const reportdata = data[0];
  if (reportdata && reportdata.InitialDraftReport) {
    this.initialDraftReport = JSON.parse(reportdata.InitialDraftReport);
    // this.gdform.patchValue(this.initialDraftReport);
    // this.gdform.patchValue({
    //   detailsofen1: this.initialDraftReport['Question1'],
    // });
    console.log(this.initialDraftReport);
  }
});
// This below code is for retriving:

this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
  console.log(data);
  // var reportdata = JSON.parse(data[0]['InitialDraftReport']);
  const reportdata = data[0];
  console.log(reportdata);
  if (reportdata && reportdata.InitialDraftReport) {
    this.initialDraftReport = JSON.parse(reportdata.InitialDraftReport);
    // this.gdform.patchValue(this.initialDraftReport);
    this.lookupdtl=JSON.parse(this.initialDraftReport[1]['Table1']);
    this.lookupdtl2x=JSON.parse(this.initialDraftReport[1]['Table2']);
    // console.log(this.lookupdtl); 
    // console.log(this.lookupdtl2x); 
  }
});
  }
  addFieldValue() {
    this.newAttribute = {
        Subject: '',
        Type: '',
        Assessments: '',
        Labs: '',
        Turnover: '',
    };
    this.lookupdtl.push(this.newAttribute);
    this.reltypeothers = '';
}
addFieldValue2x() {
  this.newAttribute2x = {
      Subject2x: '',
      Type2x: '',
      Assessments2x: '',
      Labs2x: '',
      Projects2x: '',
  };
  this.lookupdtl2x.push(this.newAttribute2x);
  this.reltypeother = '';
  this.srno+=1;
}
changeAssessments2x(i) {
  this.lookupdtl2x[i]['Assessments2x'] = (<HTMLInputElement>(
      document.getElementById('Assessments2x' + i.toString())
  )).value;
}
changeLabs2x(i) {
  this.lookupdtl2x[i]['Labs2x'] = (<HTMLInputElement>(
      document.getElementById('Labs2x' + i.toString())
  )).value;
}
OnChangeLabs2x(i, value) {
  var empty = '';
  this.onInputChangeindustry(empty);
  this.lookupdtl2x[i]['Labs2x'] = value.value;
}
OnChangeProjects2x(i, value) {
  var empty = '';
  this.onInputChangecountry(empty);
  this.lookupdtl2x[i]['Projects2x'] = value.value;
}

deleteRecord2x(index) {
  this.lookupdtl2x.splice(index, 1);
}
inputforother(i, value) {
  this.inputfordrop = (<HTMLInputElement>(
      document.getElementById('Type2x' + i.toString())
  )).value;
  this.lookupdtl2x[i]['Type2x'] = this.inputfordrop;
}
validatePercentageInput(event:any) {
  const inputValue = event.target.value;
  const isValidPercentage = /^(\d{1,2}(\.\d{1,2})?|100(\.0{1,2})?)$/.test(inputValue);

  if (!isValidPercentage) {
      event.target.value = ''; // Clear the input value if it is not a valid percentage
  }
}
inputforother1(i, value) {
  this.inputfordrop = (<HTMLInputElement>(
      document.getElementById('Labs2x' + i.toString())
  )).value;
  this.lookupdtl2x[i]['Labs2x'] = this.inputfordrop;
}
inputforother2(i, value) {
  this.inputfordrop = (<HTMLInputElement>(
      document.getElementById('Projects2x' + i.toString())
  )).value;
  this.lookupdtl2x[i]['Projects2x'] = this.inputfordrop;
}
onOptionSelectedType2x(event: any, i) {
  this.selectedName = event.option.value;
  console.log(this.selectedName);
  this.lookupdtl2x[i]['Type2x'] = this.selectedName;
}
OnchangeType2x(i, value) {
 
  var empty = '';

  this.onInputChange(empty);
  var codeforfilter=value.value;
this.is.getNICCodefilter(codeforfilter).subscribe((Data)=>{
  var codefiltervalue=Data
  this.lookupdtl2x[i]['Projects2x'] = codefiltervalue[0].Description;
});
      this.lookupdtl2x[i]['Type2x'] = value.value;
  
}
changeSubject2x(i) {
  this.lookupdtl2x[i]['Subject2x'] = (<HTMLInputElement>(
      document.getElementById('Subject2x' + i.toString())
  )).value;
}
//Note this method is called only on dropdown and this decide the value of serial number
changeSubject(i) {
  this.lookupdtl[i]['Subject'] = (<HTMLInputElement>(
      document.getElementById('Subject' + i.toString())
  )).value;
}
Turnoverper(i) {
  this.lookupdtl[i]['Turnover'] = (<HTMLInputElement>(
      document.getElementById('Turnover' + i.toString())
  )).value;
}
onInputChange(value: string) {
  this.filteredList5 = this.Relationshiptype.filter(
      (item) =>
          item.NICCode.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}
OnChangeType(i, value) {
  var empty = '';
  this.onInputChange(empty);
  this.lookupdtl[i]['Type'] = value.value;
  }
  changeAssessments(i) {
    this.lookupdtl[i]['Assessments'] = (<HTMLInputElement>(
        document.getElementById('Assessments' + i.toString())
    )).value;
}
OnChangeLabs(i, value) {
    var empty = '';
    this.onInputChangeindustry(empty);
    this.lookupdtl[i]['Labs'] = value.value;
}
onInputChangeindustry(value: string) {
  this.filteredList6 = this.industries.filter(
      (item) =>
          item.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}
onOptionSelectedLabs2x(event: any, i) {
  this.selectedName = event.option.value;
  this.lookupdtl2x[i]['Labs2x'] = this.selectedName;
}
onInputChangecountry(value: string) {
  this.filteredList7 = this.countrylist.filter(
      (item) =>
          item.CountryName.toLowerCase().indexOf(value.toLowerCase()) !==
          -1
  );
}
deleteQ102b(i) {
  this.lookupdtl2x.splice(i, 1);
  this.srno-=1;
}
onOptionSelectedProjects2x(event: any, i) {
  this.selectedName = event.option.value;
  this.lookupdtl2x[i]['Projects2x'] = this.selectedName;
}

OnChangeProjects(i, value) {

    var empty = '';
    this.onInputChangecountry(empty);
    this.lookupdtl[i]['Projects'] = value.value;
}
deleteRecord(index) {
    this.lookupdtl.splice(index, 1);
}

onOptionSelectedtype(event: any, i) {
  this.selectedName = event.option.value;
  this.lookupdtl[i]['Type'] = this.selectedName;
}
deleteQ102a(i) {
  this.lookupdtl.splice(i, 1);
}
onOptionSelectedlabs(event: any, i) {
  this.selectedName = event.option.value;
  this.lookupdtl[i]['Labs'] = this.selectedName;
}
onOptionSelectedProjects(event: any, i) {
  this.selectedName = event.option.value;
  this.lookupdtl[i]['Projects'] = this.selectedName;
}

inputforothers(i, value) {
    this.inputfordrops = (<HTMLInputElement>(
        document.getElementById('Type' + i.toString())
    )).value;
    this.lookupdtl[i]['Type'] = this.inputfordrops;
}

onSave() {

  this.initialDraftReport[1]={Table1: JSON.stringify(this.lookupdtl),
    Table2: JSON.stringify(this.lookupdtl2x)}
    console.log(this.initialDraftReport)
    const currentInitialDraftReport = this.initialDraftReport;
    this.ss.liquid[1]=currentInitialDraftReport[1];
    console.log(currentInitialDraftReport);
    console.log(this.ss.liquid[1])
    console.log(this.ss.liquid);
  this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    const reportdata = data[0];
    console.log(JSON.parse(reportdata.InitialDraftReport));
    var init=JSON.parse(reportdata.InitialDraftReport);
    if(init!=null){
      init[1]=this.ss.liquid[1]
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
     init[1]=this.ss.liquid[1]
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
