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
  selector: 'app-principal2b',
  templateUrl: './principal2b.component.html',
  styleUrls: ['./principal2b.component.css']
})
export class Principal2bComponent implements OnInit {
  principalform:FormGroup
  @Input() princi2l:any;
  newAttribute: { Projects: string; Labs2x: string; Remarks: string; Project2x: string; Projects1: string; Projects2: string; };
  newAttribute2x: {  Labs3x: string; Remarks3x: string; Project3x: string; };
  newAttribute3x: {  Labs4x: string; Remarks4x: string; Project4x: string; };
  newAttribute4x: {  Labs5x: string; Remarks5x: string; };
  dropinput: any;
  lookupdtl: any;
  lookupdtl2x: any;
  lookupdtl3x:any;
  lookupdtl4x:any;
  lookupdtl5x:any;
  currentYear:any;
  previousYear:any;
  filteredList:any;
  storedchan:any;
  filteredList1:any;
  selectedName:any;
  storedchan1:any;
  reltypeother: string;
  inputfordrops: string;
  dropinput1: any;
  dropinput2: any;
  srno:any;
  srno1:any;
  srno2:any;
  srno3:any;
  dropinput6:any;
  dropinput4:any;
  reportid:any;
  initialDraftReport1: any = {};
  orgId:any;
  
  constructor(private fb: FormBuilder,private is:ImportdisService,public AuthService:AuthService,public dialog: MatDialog,private cs:CreatereportforbrsrService,private aa:ActivatedRoute,private sele:SelectbrsrService) { 
    this.lookupdtl = [];
    this.lookupdtl2x = [];
    this.lookupdtl3x = [];
    this.lookupdtl4x = [];
    this.lookupdtl5x = [];
    this.srno=0;
    this.srno1=0;
    this.srno2=0;
    this.srno3=0;
  }

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
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
          //dos1: this.initialDraftReport1[14]['one'],
          leaderda2 : this.initialDraftReport1[12]['two'],
          glao2 : this.initialDraftReport1[12]['one'],
          glao3 : this.initialDraftReport1[12]['five'],
          glao4 : this.initialDraftReport1[12]['four'],
          //Ifglao4 : this.initialDraftReport1[12][]
          sixtysix : this.initialDraftReport1[12]['fone'],
          sixtyseven : this.initialDraftReport1[12]['ftwo'],
          sixtyeight : this.initialDraftReport1[12]['fthree'],
          sixtynine : this.initialDraftReport1[12]['ffour'],
          seventy : this.initialDraftReport1[12]['ffive'],
          seventyone : this.initialDraftReport1[12]['fsix'],
          seventytwo : this.initialDraftReport1[12]['fseven'],
          seventythree : this.initialDraftReport1[12]['feight'],
          seventyfour : this.initialDraftReport1[12]['fnine'],
          seventyfive : this.initialDraftReport1[12]['ften'],
          seventyten : this.initialDraftReport1[12]['feleven'],
          seventyten1 : this.initialDraftReport1[12]['ftwelve'],
          seventysix : this.initialDraftReport1[12]['fthirteen'],
          seventyseven : this.initialDraftReport1[12]['ffourteen'],
          seventyeight: this.initialDraftReport1[12]['ffifteen'],
          seventynine : this.initialDraftReport1[12]['fsixteen'],
          seventyten2: this.initialDraftReport1[12]['fseventeen'],
          seventyten3 : this.initialDraftReport1[12]['feighteen'],
          eightytwo: this.initialDraftReport1[12]['fnineteen'],
          eightythree: this.initialDraftReport1[12]['ftwenty'],
          eightyfour: this.initialDraftReport1[12]['ftwentyone'],
          eightyfive: this.initialDraftReport1[12]['ftwentytwo'],
          eightysix: this.initialDraftReport1[12]['ftwentythree'],
          eightyseven: this.initialDraftReport1[12]['ftwentyfour'],

        });
        this.lookupdtl4x=JSON.parse(this.initialDraftReport1[12]['Table5']);
        this.lookupdtl2x=JSON.parse(this.initialDraftReport1[12]['Table2']);
        this.lookupdtl=JSON.parse(this.initialDraftReport1[12]['Table1']);
        this.lookupdtl3x=JSON.parse(this.initialDraftReport1[12]['Table3']);
        this.dropinput4=this.initialDraftReport1[12]['four'];
        this.dropinput1=this.initialDraftReport1[12]['five'];
        this.dropinput=this.initialDraftReport1[12]['one'];
        this.dropinput6=this.initialDraftReport1[12]['two'];
  
      }
    });
    this.principalform = this.fb.group({
      leaderda1: [''],
      leaderda2: [''],
      leaderda3: [''],
      leaderda4: [''],
      leaderda5: [''],
      //glao1: [''],
      glao2: [''],
      glao3: [''],
      glao4: [''],
      Ifglao4: [''],
      sixtysix: [''],
      sixtyseven: [''],
      sixtyeight: [''],
      sixtynine: [''],
      seventy: [''],
      seventyone: [''],
      seventytwo: [''],
      seventythree: [''],
      seventyfour: [''],
      seventyfive: [''],
      seventyten: [''],
      seventyten1: [''],
      seventysix: [''],
      seventyseven: [''],
      seventyeight: [''],
      seventynine: [''],
      seventyten2: [''],
      seventyten3: [''],
      eightytwo: [''],
      eightythree: [''],
      eightyfour: [''],
      eightyfive: [''],
      eightysix: [''],
      eightyseven: [''],
     })
     this.is.getLookupDetailsByHdrId(2).subscribe((Data) => {
      this.storedchan = Data;
      this.filteredList = this.storedchan.slice();
  });
  this.is.getNICCode().subscribe((Data) => {
    this.storedchan1 = Data;
    console.log(this.storedchan1);
    this.filteredList1 = this.storedchan1.slice();
});
const Today = new Date();
this.currentYear = Today.getFullYear();
this.previousYear = this.currentYear - 1;

this.addFieldValue();
this.addFieldValue2x();
this.addFieldValue3x();
this.addFieldValue5x();
  }
  addFieldValue() {
    this.newAttribute = {
      Projects: '',
      Labs2x: '',
      Remarks: '',
      Project2x: '',
      Projects1: '',
      Projects2: '',
    };
    this.lookupdtl.push(this.newAttribute);
     this.reltypeother = '';
     this.srno+=1;
    console.log(this.lookupdtl);
}
addFieldValue2x() {
  this.newAttribute2x = {
   
    Labs3x: '',
    Remarks3x: '',
    Project3x: '',
  
  };
  this.lookupdtl2x.push(this.newAttribute2x);
  this.srno1+=1;
  console.log(this.lookupdtl2x);
}
addFieldValue3x() {
  this.newAttribute3x = {
   
    Labs4x: '',
    Remarks4x: '',
    Project4x: '',
  
  };
  this.lookupdtl3x.push(this.newAttribute3x);
  this.srno2+=1;
  console.log(this.lookupdtl3x);
}
addFieldValue5x() {
  this.newAttribute4x = {
   
    Labs5x: '',
    Remarks5x: '',
  
  
  };
  this.lookupdtl4x.push(this.newAttribute4x);
  this.srno3+=1;
  console.log(this.lookupdtl4x);
}
inputforother(i, value) {
  this.inputfordrops = (<HTMLInputElement>(
      document.getElementById('Projects2' + i.toString())
  )).value;
  console.log(this.inputfordrops);
  this.lookupdtl[i]['Projects2'] = this.inputfordrops;
  console.log(this.lookupdtl);
}
  ownershipandlegalfor2(value) {
    console.log(value.value);
    this.dropinput=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
}
ownershipandlegalfor5(value) {
  console.log(value.value);
  this.dropinput4=value.value;
  // this.finalobj['Nature of ownership and Legal Form'] = value.value;
}
ownershipandlegalfor3(value) {
  console.log(value.value);
  this.dropinput1=value.value;
  // this.finalobj['Nature of ownership and Legal Form'] = value.value;
}
ownershipandlegalfor6(value) {
  console.log(value.value);
  this.dropinput6=value.value;
  // this.finalobj['Nature of ownership and Legal Form'] = value.value;
}
ownershipandlegalfor4(value) {
  console.log(value.value);
  this.dropinput2=value.value;
  // this.finalobj['Nature of ownership and Legal Form'] = value.value;
}
OnChangeType1(i, value) {
  console.log(value);

  this.lookupdtl[i]['Projects'] = value.value;
  }
  OnChangeType2(i, value) {
    console.log(value);
    
    this.lookupdtl[i]['Projects1'] = value.value;
    }
    OnChangeType3(i, value) {
      console.log(value);
    
      this.reltypeother = value.value;
  console.log(this.reltypeother);
  if (value.value != 'Yes') {
      console.log(i);
      this.lookupdtl[i]['Projects2'] = value.value;
  }
   
      }
      changeAssessments4(i) {
        //4
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Remarks5x' + i.toString())
            )).value
        );
        this.lookupdtl4x[i]['Remarks5x'] = (<HTMLInputElement>(
            document.getElementById('Remarks5x' + i.toString())
        )).value;
      }
      changeAssessments(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Labs2x' + i.toString())
            )).value
        );
        this.lookupdtl[i]['Labs2x'] = (<HTMLInputElement>(
            document.getElementById('Labs2x' + i.toString())
        )).value;
    }
    changeAssessments41(i) {
      console.log(
          (<HTMLInputElement>(
              document.getElementById('Remarks' + i.toString())
          )).value
      );
      this.lookupdtl[i]['Remarks'] = (<HTMLInputElement>(
          document.getElementById('Remarks' + i.toString())
      )).value;
  }
    Turnoverper1(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('Project2x' + i.toString())
        )).value
    );
    this.lookupdtl[i]['Project2x'] = (<HTMLInputElement>(
        document.getElementById('Project2x' + i.toString())
    )).value;
  }
    changeAssessments31x(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('Labs4x' + i.toString())
        )).value
    );
    this.lookupdtl3x[i]['Labs4x'] = (<HTMLInputElement>(
        document.getElementById('Labs4x' + i.toString())
    )).value;
  }
    changeAssessments431x(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('Remarks4x' + i.toString())
        )).value
    );
    this.lookupdtl3x[i]['Remarks4x'] = (<HTMLInputElement>(
        document.getElementById('Remarks4x' + i.toString())
    )).value;
  }
    Turnoverper131x(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('Project4x' + i.toString())
        )).value
    );
    this.lookupdtl3x[i]['Project4x'] = (<HTMLInputElement>(
        document.getElementById('Project4x' + i.toString())
    )).value;
  }
      changeAssessments4x(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Labs5x' + i.toString())
            )).value
        );
        this.lookupdtl4x[i]['Labs5x'] = (<HTMLInputElement>(
            document.getElementById('Labs5x' + i.toString())
        )).value;
    }
  changeAssessments3x(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Labs3x' + i.toString())
            )).value
        );
        this.lookupdtl2x[i]['Labs3x'] = (<HTMLInputElement>(
            document.getElementById('Labs3x' + i.toString())
        )).value;
    }
    changeAssessments43x(i) {
      console.log(
          (<HTMLInputElement>(
              document.getElementById('Remarks3x' + i.toString())
          )).value
      );
      this.lookupdtl2x[i]['Remarks3x'] = (<HTMLInputElement>(
          document.getElementById('Remarks3x' + i.toString())
      )).value;
  }
  Turnoverper13x(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('Project3x' + i.toString())
        )).value
    );
    this.lookupdtl2x[i]['Project3x'] = (<HTMLInputElement>(
        document.getElementById('Project3x' + i.toString())
    )).value;
}
onInputChange(value: string) {
  this.filteredList1 = this.storedchan1.filter(
      (item) =>
          item.NICCode.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}
onOptionSelectedType2x(event: any, i) {
  this.selectedName = event.option.value;
  this.lookupdtl[i]['Projects'] = this.selectedName;
}
deleteQ102b(i) {
  this.lookupdtl.splice(i, 1);
  this.srno-=1;
}
deleteQ102b1(i) {
  this.lookupdtl2x.splice(i, 1);
  this.srno1-=1;
}
deleteQ102b2(i) {
  this.lookupdtl3x.splice(i, 1);
  this.srno2-=1;
}
deleteQ102b3(i) {
  this.lookupdtl4x.splice(i, 1);
  this.srno3-=1;
}


onSave() {
  var one=this.dropinput;
  var two=this.dropinput6;
  var four=this.dropinput4;
  var five=this.dropinput1;
  var fone=this.principalform.get('sixtysix').value;
  var ftwo=this.principalform.get('sixtyseven').value;
  var fthree=this.principalform.get('sixtyeight').value;
  var ffour=this.principalform.get('sixtynine').value;
  var ffive=this.principalform.get('seventy').value;
  var fsix=this.principalform.get('seventyone').value;
  var fseven=this.principalform.get('seventytwo').value;
  var feight=this.principalform.get('seventythree').value;
  var fnine=this.principalform.get('seventyfour').value;
  var ften=this.principalform.get('seventyfive').value;
  var feleven=this.principalform.get('seventyten').value;
  var ftwelve=this.principalform.get('seventyten1').value;
  var fthirteen=this.principalform.get('seventysix').value;
  var ffourteen=this.principalform.get('seventyseven').value;
  var ffifteen=this.principalform.get('seventyeight').value;
  var fsixteen=this.principalform.get('seventynine').value;
  var fseventeen=this.principalform.get('seventyten2').value;
  var feighteen=this.principalform.get('seventyten3').value;
  var fnineteen=this.principalform.get('eightytwo').value;
  var ftwenty=this.principalform.get('eightythree').value;
  var ftwentyone=this.principalform.get('eightyfour').value;
  var ftwentytwo=this.principalform.get('eightyfive').value;
  var ftwentythree=this.principalform.get('eightysix').value;
  var ftwentyfour=this.principalform.get('eightyseven').value;

  // var Table1 = JSON.stringify(this.lookupdtl)
  this.initialDraftReport1[12] = {one,two,four,five,fone,ftwo,fthree,ffour,ffive,fsix,
                                  fseven,feight,fnine,ften,feleven,ftwelve,
                                  fthirteen,ffourteen,ffifteen,fsixteen,fseventeen,feighteen,
                                  fnineteen,ftwenty,ftwentyone,ftwentytwo,ftwentythree,ftwentyfour,Table5:JSON.stringify(this.lookupdtl4x),
                                  Table2:JSON.stringify(this.lookupdtl2x),Table1:JSON.stringify(this.lookupdtl),
                                  Table3:JSON.stringify(this.lookupdtl3x),}
  //this.initialDraftReport1[14] = {one}
  console.log(this.initialDraftReport1);
  const currentInitialDraftReport = this.initialDraftReport1;
  this.sele.liquid[12]=currentInitialDraftReport[12];
  console.log(currentInitialDraftReport);
  console.log(this.sele.liquid[12])
  console.log(this.sele.liquid);

  this.sele.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    const reportdata = data[0];
    console.log(JSON.parse(reportdata.InitialDraftReport));
    console.log(this.sele.liquid[12])
   var init=JSON.parse(reportdata.InitialDraftReport);
   if(init!=null){
   init[12]=this.sele.liquid[12]
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
   init[12]=this.sele.liquid[12]
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
