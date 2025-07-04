import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-gd7',
  templateUrl: './gd7.component.html',
  styleUrls: ['./gd7.component.scss']
})
export class Gd7Component implements OnInit {
  gdform:FormGroup
  lookupdtl: any;
  
  @Input() tadc:any;
  newAttribute: { Subject: string; Type: string; Assessments: string; Labs: string; Projects: string;Mitigated: string;Financial: string;Remarks: string };
  finalobj: any;
  reltypeothers: string;
  selectedName: any;
  srno:any;
  filteredList5: any;
  lookupdtl2x: any;
  filteredListMA:any;
  Relationshiptype: any;
  MainAct:any;
  inputfordrops: string;
  industries: any;
  filteredList2: any;
  filteredList6: any;
  filteredList7: any;
  countrylist: any;
  newAttribute2x: { Subject2x: string; Type2x: string; Assessments2x: string; Labs2x: string; Financial1: string;Project2x: string;Remarks: string;Projects2x: string; };
 
  reltypeother: string;
  reltypeothers2x: string;
  storeschan: any;
  storeschan1: any;
  inputfordrop: string;
  inputfordrop2x: string;
  othersassements:string;
  currentYear: number;
  initialDraftReport: any = {};
  reportid: any;
  PreviousYear:number;
  filteredList4: any;
  storeschan3: any;
  orgId:any;
  
  constructor(private fb: FormBuilder ,private is: ImportdisService,public AuthService:AuthService,public dialog: MatDialog,private cs:CreatereportforbrsrService,private ss:SelectbrsrService,private aa:ActivatedRoute) {
    this.lookupdtl = [];
    this.lookupdtl2x=[];
    this.srno=0;
   }

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.gdform = this.fb.group({
      prodserv1:[],
      prodserv2:[],
    })
    const Today = new Date();
    this.currentYear = Today.getFullYear();
    this.PreviousYear=this.currentYear-1;
  this.is.getLookupDetailsByHdrId(32).subscribe((Data) => {
      
    console.log(Data);
    this.MainAct = Data;
    this.filteredListMA = this.MainAct.slice();
});
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
this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
  console.log(data);
  // var reportdata = JSON.parse(data[0]['InitialDraftReport']);
  const reportdata = data[0];
  console.log(reportdata);
  if (reportdata && reportdata.InitialDraftReport) {
    this.initialDraftReport = JSON.parse(reportdata.InitialDraftReport);
    console.log(JSON.parse(this.initialDraftReport[6]['Table1']))
    // this.gdform.patchValue(this.initialDraftReport);
    this.lookupdtl=JSON.parse(this.initialDraftReport[6]['Table1']);
    this.lookupdtl2x=JSON.parse(this.initialDraftReport[6]['Table2']);
    // console.log(this.lookupdtl); 
    // console.log(this.lookupdtl2x); 
  }
});
  this.is.getLookupDetailsByHdrId(33).subscribe((Data) => {
    this.industries = Data;
    this.filteredList6 = this.industries.slice();
});
this.is.getLookupDetailsByHdrId(34).subscribe((Data) => {
  this.storeschan1 = Data;
  this.filteredList2 = this.storeschan1.slice();
});

this.is.getLookupDetailsByHdrId(27).subscribe((Data) => {
  this.storeschan = Data;
  this.filteredList5 = this.storeschan.slice();
  console.log(this.filteredList5);
  
});
this.is.getLookupDetailsByHdrId(35).subscribe((Data) => {
  this.storeschan3 = Data;
  this.filteredList4 = this.storeschan3.slice();
});
this.addFieldValue();
this.addFieldValue2x();

  }
  addFieldValue() {
    this.newAttribute = {
        Subject: '',
        Type: '',
        Assessments: '',
        Labs: '',
        Projects: '',
        Mitigated: '',
        Financial: '',
        Remarks: '',
    };
    this.lookupdtl.push(this.newAttribute);
    this.reltypeothers = '';
    console.log(this.lookupdtl);
}


addFieldValue2x() {
  this.newAttribute2x = {
      Subject2x: '',
      Type2x: '',
      Assessments2x: '',
      Labs2x: '',
      Projects2x: '',
      Financial1:'',
      Project2x:'',
      Remarks:'',


  };
  this.lookupdtl2x.push(this.newAttribute2x);
  this.reltypeother = '';
  this.reltypeothers2x = ';'
  console.log(typeof this.lookupdtl2x);
}

  


validatePercentageInput(event:any) {
  const inputValue = event.target.value;
  const isValidPercentage = /^(\d{1,2}(\.\d{1,2})?|100(\.0{1,2})?)$/.test(inputValue);

  if (!isValidPercentage) {
      event.target.value = ''; // Clear the input value if it is not a valid percentage
  }
}
OnChangeType5(i, value) {
  //1
  var empty = '';
  this.onInputChange(empty);
  console.log(i);
  // this.storeschans=i;
  console.log(value);
  this.reltypeother = value.value;
  console.log(this.reltypeother);
  if (value.value != 'Other') {
      console.log(i);
      this.lookupdtl2x[i]['Subject2x'] = value.value;
  }
}
onInputChange(value: string) {
  //1
  this.filteredList4 = this.storeschan3.filter(
      (item) =>
          item.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
  console.log(value);
  console.log(this.filteredList4.Name);
}
onOptionSelectedtype2(event: any, i) {
  //1
  this.selectedName = event.option.value;
  console.log(this.selectedName);
  console.log(i);
  this.lookupdtl2x[i]['Type'] = this.selectedName;
}
inputforothers5(i, value) {
  //1
  this.inputfordrops = (<HTMLInputElement>(
      document.getElementById('Subject2x' + i.toString())
  )).value;
  console.log(this.inputfordrops);
  this.lookupdtl2x[i]['Subject2x'] = this.inputfordrops;
  console.log(this.lookupdtl2x);
}

onOptionSelectedtype2x(event: any, i) {
  //1
  this.selectedName = event.option.value;
  console.log(this.selectedName);
  console.log(i);
  this.lookupdtl2x[i]['Type2x'] = this.selectedName;
}
inputforothers5x(i, value) {
  //1
  this.inputfordrop2x = (<HTMLInputElement>(
      document.getElementById('Type2x' + i.toString())
  )).value;
  console.log(this.inputfordrop2x);
  this.lookupdtl2x[i]['Type2x'] = this.inputfordrop2x;
  console.log(this.lookupdtl2x);
}

//24 question
inputforothersAssessments(i, value) {
  //1
  this.othersassements = (<HTMLInputElement>(
      document.getElementById('Assessments' + i.toString())
  )).value;
  console.log(this.othersassements);
  this.lookupdtl[i]['Assessments'] = this.othersassements;
  console.log(this.lookupdtl);
}

changeSubject1(i) {
  //21
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Subject' + i.toString())
      )).value
  );
  // this.lookupdtl[i]['Subject'] = (<HTMLInputElement>(
  //     document.getElementById('Subject' + i.toString())
  // )).value;
}
changeSubject2(i) {
  //2
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Type2x' + i.toString())
      )).value
  );
  this.lookupdtl2x[i]['Type2x'] = (<HTMLInputElement>(
      document.getElementById('Type2x' + i.toString())
  )).value;
}

changeSubject(i) {
  //22
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Subject' + i.toString())
      )).value
  );
  this.lookupdtl[i]['Subject'] = (<HTMLInputElement>(
      document.getElementById('Subject' + i.toString())
  )).value;
}
Turnoverper1(i) {
  //lastsec
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Project2x' + i.toString())
      )).value
  );
  this.lookupdtl2x[i]['Project2x'] = (<HTMLInputElement>(
      document.getElementById('Project2x' + i.toString())
  )).value;
}
Turnoverper(i) {
  //3
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Assessments2x' + i.toString())
      )).value
  );
  this.lookupdtl2x[i]['Assessments2x'] = (<HTMLInputElement>(
      document.getElementById('Assessments2x' + i.toString())
  )).value;
}



OnChangeType2(i, value) {
  console.log(value.value);

  var empty = '';
  this.onInputChange1(empty);
  console.log(i);
  // this.storeschans=i;
  console.log(value);
  this.reltypeothers = value.value;
  console.log(this.reltypeothers);
  if (value.value != 'Others') {
      console.log(i);
      this.lookupdtl[i]['Assessments'] = value.value;
      ;
  }
}
  // OnChangeType3(i, value) {
  //   //2
  //   console.log(value.value);
    
  //   this.lookupdtl2x[i]['Type2x'] = value.value;
  //   }

  OnChangeType3(i, value) {
      //1
    
      console.log(value);
      this.reltypeothers2x = value.value;
      console.log(this.reltypeothers2x);
      if (value.value != 'Yes') {
          console.log(i);
          this.lookupdtl2x[i]['Type2x'] = value.value;
      }
    }


OnChangeType1(i, value) {
  console.log(value);
  
  this.lookupdtl[i]['Projects'] = value.value;
  }

OnChangeType(i, value) {
  //23

  this.lookupdtl[i]['Type'] = value.value;
  }
  changeAssessments(i) {
    //4
    console.log(
        (<HTMLInputElement>(
            document.getElementById('Labs2x' + i.toString())
        )).value
    );
    this.lookupdtl2x[i]['Labs2x'] = (<HTMLInputElement>(
        document.getElementById('Labs2x' + i.toString())
    )).value;
}
changeAssessments2(i) {
  //4
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Projects2x' + i.toString())
      )).value
  );
  this.lookupdtl2x[i]['Projects2x'] = (<HTMLInputElement>(
      document.getElementById('Projects2x' + i.toString())
  )).value;
}
changeAssessments3(i) {
  //4
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Financial1' + i.toString())
      )).value
  );
  this.lookupdtl2x[i]['Financial1'] = (<HTMLInputElement>(
      document.getElementById('Financial1' + i.toString())
  )).value;
}
changeAssessments4(i) {
  //4
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Remarks' + i.toString())
      )).value
  );
  this.lookupdtl2x[i]['Remarks'] = (<HTMLInputElement>(
      document.getElementById('Remarks' + i.toString())
  )).value;
}
changeAssessments1(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Mitigated' + i.toString())
      )).value
  );
  this.lookupdtl[i]['Mitigated'] = (<HTMLInputElement>(
      document.getElementById('Mitigated' + i.toString())
  )).value;
}
changeAssessments5(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Financial' + i.toString())
      )).value
  );
  this.lookupdtl[i]['Financial'] = (<HTMLInputElement>(
      document.getElementById('Financial' + i.toString())
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
  console.log(value);
  console.log(this.filteredList6.Name);
}

onInputChangecountry(value: string) {
  this.filteredList7 = this.countrylist.filter(
      (item) =>
          item.CountryName.toLowerCase().indexOf(value.toLowerCase()) !==
          -1
  );
  console.log(value);
  console.log(this.filteredList7.CountryName);
}
deleteQ102b(i) {
  this.lookupdtl2x.splice(i, 1);
  this.srno-=1;
}
onOptionSelectedProjects2x(event: any, i) {
  this.selectedName = event.option.value;
  console.log(this.selectedName);
  console.log(i);
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
  console.log(this.selectedName);
  console.log(i);
  this.lookupdtl[i]['Type'] = this.selectedName;
}
deleteQ102a(i) {
  this.lookupdtl.splice(i, 1);
}
deleteQ10(i) {
  this.lookupdtl2x.splice(i, 1);
}
onOptionSelectedlabs(event: any, i) {
  this.selectedName = event.option.value;
  console.log(this.selectedName);
  console.log(i);
  this.lookupdtl[i]['Labs'] = this.selectedName;
}
onOptionSelectedProjects(event: any, i) {
  this.selectedName = event.option.value;
  console.log(this.selectedName);
  console.log(i);
  this.lookupdtl[i]['Projects'] = this.selectedName;
}

inputforothers(i, value) {
    this.inputfordrops = (<HTMLInputElement>(
        document.getElementById('Type' + i.toString())
    )).value;
    console.log(this.inputfordrops);
    this.lookupdtl[i]['Type'] = this.inputfordrops;
    console.log(this.lookupdtl);
}
onInputChange1(value: string) {
  //1
  this.filteredList5 = this.storeschan.filter(
      (item) =>
          item.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
  console.log(value);
  console.log(this.filteredList5.Name);
}
onOptionSelectedtype1(event: any, i) {
  //1
  this.selectedName = event.option.value;
  console.log(this.selectedName);
  console.log(i);
  this.lookupdtl[i]['Assessments'] = this.selectedName;
}
onSave() {

  this.initialDraftReport[6]={Table1: JSON.stringify(this.lookupdtl),
    Table2: JSON.stringify(this.lookupdtl2x)}
    console.log(this.initialDraftReport)
    const currentInitialDraftReport = this.initialDraftReport;
    this.ss.liquid[6]=currentInitialDraftReport[6];
    console.log(currentInitialDraftReport);
    console.log(this.ss.liquid[6])
    console.log(this.ss.liquid);
  this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    const reportdata = data[0];
    console.log(JSON.parse(reportdata.InitialDraftReport));
    var init=JSON.parse(reportdata.InitialDraftReport);
    if(init!=null){
      init[6]=this.ss.liquid[6]
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
     init[6]=this.ss.liquid[6]
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
