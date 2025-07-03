import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-gd5',
  templateUrl: './gd5.component.html',
  styleUrls: ['./gd5.component.scss']
})
export class Gd5Component implements OnInit {
  gdform:FormGroup
  lookupdtl: any;
  
  @Input() holdingandall:any;
  newAttribute: { Subject: string; Type: string; Assessments: string; Labs: string; Projects: string; };
  finalobj: any;
  reltypeothers: any;
  selectedName: any;
  srno:any;
  filteredList5: any;
  lookupdtl2x: any;
  filteredListMA:any;
  Relationshiptype: any;
  MainAct:any;
  reportid:any;
  inputfordrops: string;
  industries: any;
  filteredList6: any;
  filteredList7: any;
  countrylist: any;
  newAttribute2x: { Subject2x: string; Type2x: string; Assessments2x: string; Labs2x: string; Projects2x: string; };
  reltypeother: string;
  storeschan: any;
  initialDraftReport: any = {};
  inputfordrop: string;
  orgId:any;
  
  constructor(private fb: FormBuilder ,public AuthService:AuthService,public dialog: MatDialog,private is: ImportdisService,private cs:CreatereportforbrsrService,private aa:ActivatedRoute,private ss: SelectbrsrService) {
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

  this.is.getLookupDetailsByHdrId(23).subscribe((Data) => {
      
    console.log(Data);
    this.MainAct = Data;
    this.filteredListMA = this.MainAct.slice();
    console.log(this.filteredListMA);
});


  this.is.getLookupDetailsByHdrId(2).subscribe((Data) => {
    this.industries = Data;
    this.filteredList6 = this.industries.slice();
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
    console.log(JSON.parse(this.initialDraftReport[4]['Table1']))
    // this.gdform.patchValue(this.initialDraftReport);
    this.lookupdtl=JSON.parse(this.initialDraftReport[4]['Table1']);
    // this.lookupdtl2x=JSON.parse(this.initialDraftReport[1]['Table2']);
    // console.log(this.lookupdtl); 
    // console.log(this.lookupdtl2x); 
  }
});
this.addFieldValue();

  }
  addFieldValue() {
    this.newAttribute = {
        Subject: '',
        Type: '',
        Assessments: '',
        Labs: '',
        Projects: '',
    };
    this.lookupdtl.push(this.newAttribute);
    this.reltypeother = '';
    console.log(this.lookupdtl);
}

  


validatePercentageInput(event:any) {
  const inputValue = event.target.value;
  const isValidPercentage = /^(\d{1,2}(\.\d{1,2})?|100(\.0{1,2})?)$/.test(inputValue);

  if (!isValidPercentage) {
      event.target.value = ''; // Clear the input value if it is not a valid percentage
  }
}


//Note this method is called only on dropdown and this decide the value of serial number
changeSubject(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Subject' + i.toString())
      )).value
  );
  this.lookupdtl[i]['Subject'] = (<HTMLInputElement>(
      document.getElementById('Subject' + i.toString())
  )).value;
}
// changeSubject1(i) {
//   console.log(
//       (<HTMLInputElement>(
//           document.getElementById('Projects' + i.toString())
//       )).value
//   );
//   this.lookupdtl[i]['Projects'] = (<HTMLInputElement>(
//       document.getElementById('Projects' + i.toString())
//   )).value;
// }
Turnoverper(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Labs' + i.toString())
      )).value
  );
  this.lookupdtl[i]['Labs'] = (<HTMLInputElement>(
      document.getElementById('Labs' + i.toString())
  )).value;
}
onSave() {

  this.initialDraftReport[4]={Table1: JSON.stringify(this.lookupdtl)}
    console.log(this.initialDraftReport)
    const currentInitialDraftReport = this.initialDraftReport;
    this.ss.liquid[4]=currentInitialDraftReport[4];
    console.log(currentInitialDraftReport);
    console.log(this.ss.liquid[4])
    console.log(this.ss.liquid);
  this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    const reportdata = data[0];
    console.log(JSON.parse(reportdata.InitialDraftReport));
    var init=JSON.parse(reportdata.InitialDraftReport);
    if(init!=null){
      init[4]=this.ss.liquid[4]
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
     init[1]=this.ss.liquid[4]
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
onInputChange(value: string) {
  this.filteredListMA = this.MainAct.filter(
      (item) =>
          item.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
  console.log(value);
  console.log(this.filteredListMA);
}
onOptionSelectedType2x(event: any, i) {
  this.selectedName = event.option.value;
  console.log(this.selectedName);
  console.log(i);
  // this.lookupdtl2x[i]['Type2x'] = this.selectedName;
}
OnChangeType1(i, value) {
  console.log(value);
  // var empty = '';
  // this.onInputChange(empty);
  // console.log(i);
  this.lookupdtl[i]['Projects'] = value.value;
  }

    // OnChangeType(i, value) {
    //   var empty = '';
    //   this.onInputChange(empty);
    //   console.log(i);
    //   this.lookupdtl[i]['Type'] = value.value;
    //   }
  
OnChangeType(i, value) {
  //1
  var empty = '';
  this.onInputChange(empty);
  console.log(i);
  // this.storeschans=i;
  console.log(value);
  this.reltypeother = value.value;
  console.log(this.reltypeother);
  if (value.value != 'Others') {
      console.log(i);
      this.lookupdtl[i]['Type'] = value.value;
  }
}
  changeAssessments(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('Assessments' + i.toString())
        )).value
    );
    this.lookupdtl[i]['Assessments'] = (<HTMLInputElement>(
        document.getElementById('Assessments' + i.toString())
    )).value;
}
OnChangeLabs(i, value) {
    //  console.log((<HTMLInputElement>document.getElementById("Labs" + i.toString())).value)
    //  this.lookupdtl[i]['Labs'] = (<HTMLInputElement>document.getElementById("Labs" + i.toString())).value
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
    //  console.log((<HTMLInputElement>document.getElementById("Projects" + i.toString())).value)
    //  this.lookupdtl[i]['Projects'] = (<HTMLInputElement>document.getElementById("Projects" + i.toString())).value

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

inputforother(i, value) {
    this.inputfordrops = (<HTMLInputElement>(
        document.getElementById('Type' + i.toString())
    )).value;
    console.log(this.inputfordrops);
    this.lookupdtl[i]['Type'] = this.inputfordrops;
    console.log(this.lookupdtl);
}

inputforothers(i, value) {
  this.inputfordrops = (<HTMLInputElement>(
      document.getElementById('Type' + i.toString())
  )).value;
  console.log(this.inputfordrops);
  this.lookupdtl[i]['Type'] = this.inputfordrops;
  console.log(this.lookupdtl);
}

openuploadimgcompo(ReportId: any, GuidanceNumber: any, OrgId: any, ques: any) {

  const dialogRef = this.dialog.open(UploadevidenceforbrsrComponent, {

    autoFocus: false,

    data: { ReportId, GuidanceNumber, OrgId, ques },

  });

}
}
