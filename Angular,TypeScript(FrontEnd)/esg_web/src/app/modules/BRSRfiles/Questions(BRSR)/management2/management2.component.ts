import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';


@Component({
  selector: 'app-management2',
  templateUrl: './management2.component.html',
  styleUrls: ['./management2.component.css']
})
export class Management2Component implements OnInit {
  managementform:FormGroup
  @Input() glao:any;
  lookupdtl: any;
  industries: any;
  filteredList6: any;
  storedchan:any;
  filteredList7:any;
  selectedName:any;
  filteredList5:any;
  // relothers1:any;
  initialDraftReport1: any = {};
  finalobj: any;
  storedchan1: any;
  reportid:any;
  storedchan6:any;
  filteredList4: any;
  filteredList9: any;
  val1:any;
  inputfordrops: string;
  relothers1: any;
  relothers11: any;
  principalform: any;
  orgId:any;
  
  constructor(private fb: FormBuilder,private is:ImportdisService,public AuthService:AuthService,public dialog: MatDialog,private cs:CreatereportforbrsrService,private aa:ActivatedRoute,private ss:SelectbrsrService) { }
  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.managementform = this.fb.group({
      glao1: [''],
      glao2: [''],
      glao221: [''],
      glao222: [''],
      glao223: [''],
      glao3: [''],
      glao4: [''],
      glao4a: [''],
      glao41b: [''],
      glao42b: [''],
      glao51: [''],
      glao52: [''],
      glao53: [''],
      glao54: [''],
      glao55: [''],
      glao56: [''],
      glao57: [''],
      glao58: [''],
      glao59: [''],
      glao6: [''],
      glao7: [''],
      glao8: [''],
      glao9: [''],
      glao10: [''],
      compir5: [''],
      emp1: [''],
     })
     this.is.getLookupDetailsByHdrId(36).subscribe((Data) => {
      this.storedchan6 = Data;
      this.filteredList9 = this.storedchan6.slice();
  });
     this.is.getLookupDetailsByHdrId(29).subscribe((Data) => {
      this.industries = Data;
      this.filteredList6 = this.industries.slice();
     // this.filteredList7 = this.industries.slice();

  });
  this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    const reportdata = data[0];
    console.log(reportdata);
    if (reportdata && reportdata.InitialDraftReport) {
      this.initialDraftReport1 = JSON.parse(reportdata.InitialDraftReport);
      console.log(this.initialDraftReport1);

    }
  });
  this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    const reportdata = data[0];
    if (reportdata && reportdata.InitialDraftReport) {
      this.initialDraftReport1 = JSON.parse(reportdata.InitialDraftReport);
      this.managementform.patchValue(this.initialDraftReport1);
      this.managementform.patchValue({
        emp1: this.initialDraftReport1[8]['Question1'],
         glao2: this.initialDraftReport1[8]['Question2'],
         glao221: this.initialDraftReport1[8]['Question3'],
         glao222: this.initialDraftReport1[8]['Question5'],

         glao3: this.initialDraftReport1[8]['Question6'],
         glao4: this.initialDraftReport1[8]['ten1'],
      glao4a: this.initialDraftReport1[8]['ten2'],
      glao41b: this.initialDraftReport1[8]['ten3'],
      glao42b: this.initialDraftReport1[8]['ten4'],
      glao51 : this.initialDraftReport1[8]['eleven1'],
      glao52 : this.initialDraftReport1[8]['eleven2'],
      glao53 : this.initialDraftReport1[8]['eleven3'],
      glao54 : this.initialDraftReport1[8]['eleven4'],
      glao55: this.initialDraftReport1[8]['eleven5'],
      glao56 : this.initialDraftReport1[8]['eleven6'],
      glao57 : this.initialDraftReport1[8]['eleven7'],
      glao58 : this.initialDraftReport1[8]['eleven8'],
      glao59 : this.initialDraftReport1[8]['eleven9'],
      glao6: this.initialDraftReport1[8]['twelve1'],
      glao7: this.initialDraftReport1[8]['twelve2'],
      glao8: this.initialDraftReport1[8]['twelve3'],
      glao9: this.initialDraftReport1[8]['twelve4'],
      glao10: this.initialDraftReport1[8]['twelve5'],
//         emp7: this.initialDraftReport1[3]['Question7'],
//         emp8: this.initialDraftReport1[3]['Question8'],
//         emp9: this.initialDraftReport1[3]['Question9'],
//         emp10: this.initialDraftReport1[3]['Question10'],
//         emp11: this.initialDraftReport1[3]['Question11'],
//         emp12: this.initialDraftReport1[3]['Question12'],
//         emp13: this.initialDraftReport1[3]['Question13'],
//         emp14: this.initialDraftReport1[3]['Question14'],
//         emp15: this.initialDraftReport1[3]['Question15'],
//         emp16: this.initialDraftReport1[3]['Question16'],
//         emp17: this.initialDraftReport1[3]['Question17'],
//         emp18: this.initialDraftReport1[3]['Question18'],
//         emp19: this.initialDraftReport1[3]['Question19'],
//         emp20: this.initialDraftReport1[3]['Question20'],
//         emp21: this.initialDraftReport1[3]['Question21'],
//         emp22: this.initialDraftReport1[3]['Question22'],
//         emp23: this.initialDraftReport1[3]['Question23'],
//         emp24: this.initialDraftReport1[3]['Question24'],
//         emp25: this.initialDraftReport1[3]['Question25'],
//         emp26: this.initialDraftReport1[3]['Question26'],
//         emp27: this.initialDraftReport1[3]['Question27'],
//         emp28: this.initialDraftReport1[3]['Question28'],
//         emp29: this.initialDraftReport1[3]['Question29'],
//         emp30: this.initialDraftReport1[3]['Question30'],
// //second question
// emp31:this.initialDraftReport1[3]['Question31'],
// emp32:this.initialDraftReport1[3]['Question32'],
// emp33:this.initialDraftReport1[3]['Question33'],
// emp34:this.initialDraftReport1[3]['Question34'],
// emp35:this.initialDraftReport1[3]['Question35'],
// emp36:this.initialDraftReport1[3]['Question36'],
// emp37:this.initialDraftReport1[3]['Question37'],
// emp38:this.initialDraftReport1[3]['Question38'],
// emp39:this.initialDraftReport1[3]['Question39'],
// emp40:this.initialDraftReport1[3]['Question40'],
// emp41:this.initialDraftReport1[3]['Question41'],
// emp42:this.initialDraftReport1[3]['Question42'],
// emp43:this.initialDraftReport1[3]['Question43'],
// emp44:this.initialDraftReport1[3]['Question44'],
// emp45:this.initialDraftReport1[3]['Question45'],
// emp46:this.initialDraftReport1[3]['Question46'],
// emp47:this.initialDraftReport1[3]['Question47'],
// emp48:this.initialDraftReport1[3]['Question48'],
// emp49:this.initialDraftReport1[3]['Question49'],
// emp50:this.initialDraftReport1[3]['Question50'],
// emp51:this.initialDraftReport1[3]['Question51'],
// emp52:this.initialDraftReport1[3]['Question52'],
// emp53:this.initialDraftReport1[3]['Question53'],
// emp54:this.initialDraftReport1[3]['Question54'],
// emp55:this.initialDraftReport1[3]['Question55'],
// emp56:this.initialDraftReport1[3]['Question56'],
// emp57:this.initialDraftReport1[3]['Question57'],
// emp58:this.initialDraftReport1[3]['Question58'],
// emp59:this.initialDraftReport1[3]['Question59'],
// emp60:this.initialDraftReport1[3]['Question60'],
// //third question
//         emp61: this.initialDraftReport1[3]['Question61'],
//         emp62: this.initialDraftReport1[3]['Question62'],
//         emp63: this.initialDraftReport1[3]['Question63'],
//         emp64: this.initialDraftReport1[3]['Question64'],
//         emp65: this.initialDraftReport1[3]['Question65'],
//         emp66: this.initialDraftReport1[3]['Question66'],
//         //fourth question
//         emp67:this.initialDraftReport1[3]['Question67'],
//         emp68:this.initialDraftReport1[3]['Question68'],
//         emp69:this.initialDraftReport1[3]['Question69'],
//         emp70:this.initialDraftReport1[3]['Question70'],
//         emp71: this.initialDraftReport1[3]['Question71'],
//         emp72: this.initialDraftReport1[3]['Question72'],
//         emp73: this.initialDraftReport1[3]['Question73'],
//         emp74: this.initialDraftReport1[3]['Question74'],
//         emp75: this.initialDraftReport1[3]['Question75'],
//         emp76: this.initialDraftReport1[3]['Question76'],
//         emp77: this.initialDraftReport1[3]['Question77'],
//         emp78: this.initialDraftReport1[3]['Question78'],
//         emp79: this.initialDraftReport1[3]['Question79'],
//         emp80: this.initialDraftReport1[3]['Question80'],
//         emp81: this.initialDraftReport1[3]['Question81'],
//         emp82: this.initialDraftReport1[3]['Question82'],
//         emp83: this.initialDraftReport1[3]['Question83'],
//         emp84: this.initialDraftReport1[3]['Question84'],
      });
    
      var draft={value:this.initialDraftReport1[8]['Question4']}
      this.OnChangeType(draft)
      // var draft1={value:this.initialDraftReport1[2]['eleven']}
      // this.OnChangeType1(draft1)
    }
  });
  this.is.getLookupDetailsByHdrId(12).subscribe((Data) => {
    this.storedchan = Data;
    this.filteredList5 = this.storedchan.slice();
});
this.is.getLookupDetailsByHdrId(37).subscribe((Data) => {
  this.storedchan1 = Data;
  this.filteredList4 = this.storedchan1.slice();
});
  }
  OnChangeType( value) {
    // var empty = '';
    // this.onInputChange(empty);
    // console.log(i);
    this.val1 = value.value;
    // this.lookupdtl[i]['Type'] = value.value;
    }
    ownershipandlegalfor(value) {
      var empty='';
      this.onInputChangecountry1(empty);
     // this.finalobj['Nature of ownership and Legal Form'] = value.value;
     this.managementform.get('glao41').setValue = value.value;

  }
  ownershipandlegalfor21(value) {
    console.log(value);
    this.relothers11 = value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
}
ownershipandlegalfor211(value) {
  console.log(value);
  this.val1 = value.value;
 this.relothers1 = value.value;
  // this.finalobj['Nature of ownership and Legal Form'] = value.value;
}
  ownershipandlegalfor2(value) {
    console.log(value);
    this.relothers11 = value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
}
onSave() {
  var Question1=(document.getElementById('Labs') as HTMLInputElement).value;
   //var Question2 = this.relothers11;
   var Question2 = this.managementform.get('glao2').value;
   var Question3 = (document.getElementById('Labs1') as HTMLInputElement).value;
   var Question4 =  this.val1 ;
  var Question5 = (document.getElementById('fifth') as HTMLInputElement).value;
  var Question6=(document.getElementById('sixth') as HTMLInputElement).value;
  var ten1 = this.managementform.get('glao4').value;
  var ten2 = this.managementform.get('glao4a').value;
  var ten3 = this.managementform.get('glao41b').value;
  var ten4 = this.managementform.get('glao42b').value;
  var eleven1 = this.managementform.get('glao51').value;
  var eleven2 = this.managementform.get('glao52').value;
  var eleven3 = this.managementform.get('glao53').value;
  var eleven4 = this.managementform.get('glao54').value;
  var eleven5 = this.managementform.get('glao55').value;
  var eleven6 = this.managementform.get('glao56').value;
  var eleven7 = this.managementform.get('glao57').value;
  var eleven8 = this.managementform.get('glao58').value;
  var eleven9 = this.managementform.get('glao59').value;
  var twelve1 = this.managementform.get('glao6').value;
  var twelve2 = this.managementform.get('glao7').value;
  var twelve3 = this.managementform.get('glao8').value;
  var twelve4 = this.managementform.get('glao9').value;
  var twelve5 = this.managementform.get('glao10').value;
//   var Question7 = (document.getElementById('seventh') as HTMLInputElement).value;
//   var Question8 = (document.getElementById('eight') as HTMLInputElement).value;
//   var Question9 = (document.getElementById('nine') as HTMLInputElement).value;
//   var Question10 = (document.getElementById('ten') as HTMLInputElement).value;
//   var Question11=(document.getElementById('eleven') as HTMLInputElement).value;
//   var Question12 = (document.getElementById('twelve') as HTMLInputElement).value;
//   var Question13 = (document.getElementById('thirteen') as HTMLInputElement).value;
//   var Question14 = (document.getElementById('fourteen') as HTMLInputElement).value;
//   var Question15 = (document.getElementById('fifteen') as HTMLInputElement).value;
//   var Question16=(document.getElementById('sixteen') as HTMLInputElement).value;
//   var Question17 = (document.getElementById('seventeen') as HTMLInputElement).value;
//   var Question18 = (document.getElementById('eighteen') as HTMLInputElement).value;
//   var Question19 = (document.getElementById('nineteen') as HTMLInputElement).value;
//   var Question20 = (document.getElementById('twenty') as HTMLInputElement).value;
//   var Question21=(document.getElementById('twentyone') as HTMLInputElement).value;
//   var Question22 = (document.getElementById('twentytwo') as HTMLInputElement).value;
//   var Question23 = (document.getElementById('twentythree') as HTMLInputElement).value;
//   var Question24 = (document.getElementById('twentyfour') as HTMLInputElement).value;
//   var Question25 = (document.getElementById('twentyfive') as HTMLInputElement).value;
//   var Question26 = (document.getElementById('twentysix') as HTMLInputElement).value;
//   var Question27 = (document.getElementById('twentyseven') as HTMLInputElement).value;
//   var Question28 = (document.getElementById('twentyeight') as HTMLInputElement).value;
//   var Question29 = (document.getElementById('twentynine') as HTMLInputElement).value;
//   var Question30 = (document.getElementById('thirty') as HTMLInputElement).value;
//   //second question
//   var Question31=(document.getElementById('thirtyone') as HTMLInputElement).value;
//   var Question32 = (document.getElementById('thirtytwo') as HTMLInputElement).value;
//   var Question33 = (document.getElementById('thirtythree') as HTMLInputElement).value;
//   var Question34 = (document.getElementById('thirtyfour') as HTMLInputElement).value;
//   var Question35 = (document.getElementById('thirtyfive') as HTMLInputElement).value;
//   var Question36=(document.getElementById('thirtysix') as HTMLInputElement).value;
//   var Question37 = (document.getElementById('thirtyseven') as HTMLInputElement).value;
//   var Question38 = (document.getElementById('thirtyeight') as HTMLInputElement).value;
//   var Question39 = (document.getElementById('thirtynine') as HTMLInputElement).value;
//   var Question40 = (document.getElementById('fourty') as HTMLInputElement).value;
//   var Question41=(document.getElementById('fourtyone') as HTMLInputElement).value;
//   var Question42 = (document.getElementById('fourtytwo') as HTMLInputElement).value;
//   var Question43 = (document.getElementById('fourtythree') as HTMLInputElement).value;
//   var Question44 = (document.getElementById('fourtyfour') as HTMLInputElement).value;
//   var Question45 = (document.getElementById('fourtyfive') as HTMLInputElement).value;
//   var Question46=(document.getElementById('fourtysix') as HTMLInputElement).value;
//   var Question47 = (document.getElementById('fourtyseven') as HTMLInputElement).value;
//   var Question48 = (document.getElementById('fourtyeight') as HTMLInputElement).value;
//   var Question49 = (document.getElementById('fourtynine') as HTMLInputElement).value;
//   var Question50 = (document.getElementById('fifty') as HTMLInputElement).value;
//   var Question51=(document.getElementById('fiftyone') as HTMLInputElement).value;
//   var Question52 = (document.getElementById('fiftytwo') as HTMLInputElement).value;
//   var Question53 = (document.getElementById('fiftythree') as HTMLInputElement).value;
//   var Question54 = (document.getElementById('fiftyfour') as HTMLInputElement).value;
//   var Question55 = (document.getElementById('fiftyfive') as HTMLInputElement).value;
//   var Question56=(document.getElementById('fiftysix') as HTMLInputElement).value;
//   var Question57 = (document.getElementById('fiftyseven') as HTMLInputElement).value;
//   var Question58 = (document.getElementById('fiftyeight') as HTMLInputElement).value;
//   var Question59 = (document.getElementById('fiftynine') as HTMLInputElement).value;
//   var Question60 = (document.getElementById('sixty') as HTMLInputElement).value;
//   //third question
//   var Question61=(document.getElementById('sixtyone') as HTMLInputElement).value;
//   var Question62 = (document.getElementById('sixtytwo') as HTMLInputElement).value;
//   var Question63 = (document.getElementById('sixtythree') as HTMLInputElement).value;
//   var Question64 = (document.getElementById('sixtyfour') as HTMLInputElement).value;
//   var Question65 = (document.getElementById('sixtyfive') as HTMLInputElement).value;
//   var Question66=(document.getElementById('sixtysix') as HTMLInputElement).value;
//  //fourth question
//   var Question67 = (document.getElementById('sixtyseven') as HTMLInputElement).value;
//   var Question68 = (document.getElementById('sixtyeight') as HTMLInputElement).value;
//   var Question69 = (document.getElementById('sixtynine') as HTMLInputElement).value;
//   var Question70 = (document.getElementById('seventy') as HTMLInputElement).value;
//   var Question71=(document.getElementById('seventyone') as HTMLInputElement).value;
//   var Question72 = (document.getElementById('seventytwo') as HTMLInputElement).value;
//   var Question73 = (document.getElementById('seventythree') as HTMLInputElement).value;
//   var Question74 = (document.getElementById('seventyfour') as HTMLInputElement).value;
//   var Question75 = (document.getElementById('seventyfive') as HTMLInputElement).value;
//   var Question76=(document.getElementById('seventysix') as HTMLInputElement).value;
//   var Question77 = (document.getElementById('seventyseven') as HTMLInputElement).value;
//   var Question78 = (document.getElementById('seventyeight') as HTMLInputElement).value;
//   var Question79 = (document.getElementById('seventynine') as HTMLInputElement).value;
//   var Question80 = (document.getElementById('eighty') as HTMLInputElement).value;
//   var Question81=(document.getElementById('eightyone') as HTMLInputElement).value;
//   var Question82 = (document.getElementById('eightytwo') as HTMLInputElement).value;
//   var Question83 = (document.getElementById('eightythree') as HTMLInputElement).value;
//   var Question84 = (document.getElementById('eightyfour') as HTMLInputElement).value;
  // var  six = (document.getElementById('Assessments2x2') as HTMLInputElement).value;
  // var seven = this.gdform.get('puta').value;
  // var eight = this.gdform.get('puta1').value;
  // var nine = this.gdform.get('puta2').value;
  // var ten = this.val1;
  // var eleven = this.val2;
  this.initialDraftReport1[8] = {Question1,Question2,Question3,Question4,Question5,Question6,ten1,ten2,ten3,ten4,eleven1,
    eleven2,eleven3,eleven4,eleven5,eleven6,eleven7,eleven8,eleven9,twelve1,twelve2,twelve3,twelve4,twelve5,
  }
  console.log(this.initialDraftReport1);
  const currentInitialDraftReport = this.initialDraftReport1;
  this.ss.liquid[8]=currentInitialDraftReport[8];
  console.log(currentInitialDraftReport);
  console.log(this.ss.liquid[8])
  console.log(this.ss.liquid);

  this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    const reportdata = data[0];
    console.log(JSON.parse(reportdata.InitialDraftReport));
    console.log(this.ss.liquid[8])
   var init=JSON.parse(reportdata.InitialDraftReport);
   if(init!=null){
   init[8]=this.ss.liquid[8]
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
   init[8]=this.ss.liquid[8]
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
ownershipandlegalfor3(value) {
  this.finalobj['Nature of ownership and Legal Form'] = value.value;
}
ownershipandlegalfor4(value) {
  this.finalobj['Nature of ownership and Legal Form'] = value.value;
}
  ownershipandlegalfor1(value) {
    this.finalobj['Nature of ownership and Legal Form'] = value.value;
}
ownershipandlegalfor1b(value) {
  var empty='';
  this.onInputChangecountry1(empty);
 // this.finalobj['Nature of ownership and Legal'] = value.value;
 this.managementform.get('glao41b').setValue = value.value;
}
validatePercentageInput(event:any) {
  const inputValue = event.target.value;
  const isValidPercentage = /^(\d{1,8}(\.\d{1,8})?|100000000(\.0{1,2})?)$/.test(inputValue);

  if (!isValidPercentage) {
      event.target.value = ''; // Clear the input value if it is not a valid percentage
  }
}


inputforothers5(input:HTMLInputElement) {
  
 // console.log(this.managementform.get('glao2').value);
 const value = parseInt(input.value);
 console.log(input.value);
 this.val1=input.value;
}
// OnChangeType1(i, value) {
//   this.relothers1 = value.value;
  
// }
addreset(){
  this.relothers1='';
}
onOptionSelectedcountry11(event: any, i) {
  // this.selectedName = event.option.value;
  // console.log(this.selectedName);
  this.relothers1 =event.option.value;
  // this.lookupdtl2x[i]['Type2x'] = this.selectedName;
}
onInputChangecountry1(value: string) {
  this.filteredList6 = this.industries.filter(
    (item) =>
        item.Name.toLowerCase().indexOf(value.toLowerCase()) !==
        -1
);
console.log(value);
console.log(this.filteredList6.Name);
}
onOptionSelectedcountry(event: any) {
  this.selectedName = event.option.value;
  console.log(this.selectedName);
  // this.finalobj['Location of the Organization Headquarters'] =this.selectedName;
}

onOptionSelectedcountry1b(event: any) {
  this.selectedName = event.option.value;
  console.log(this.selectedName);
}
openuploadimgcompo(ReportId: any, GuidanceNumber: any, OrgId: any, ques: any) {

  const dialogRef = this.dialog.open(UploadevidenceforbrsrComponent, {

    autoFocus: false,

    data: { ReportId, GuidanceNumber, OrgId, ques },

  });

}
}
