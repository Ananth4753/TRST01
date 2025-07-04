import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { GhemissionsComponent } from 'app/modules/importdis/ghemissions/ghemissions.component';
import { ElectriccalcComponent } from 'app/modules/importdis/electriccalc/electriccalc.component';
import { Scope2renewComponent } from 'app/modules/importdis/scope2renew/scope2renew.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-principal6a',
  templateUrl: './principal6a.component.html',
  styleUrls: ['./principal6a.component.css']
})
export class Principal6aComponent implements OnInit {
  principalform:FormGroup
  @Input() princi6e:any;
  currentYear:any;
  PreviousYear:any;
  storedchan:any;
  filteredList:any;
  dropinput5:any;
  dropinput6:any;
  dropinput7:any;
  dropinput8:any;
  dropinput9:any;
  dropinput10:any;
  dropinput14:any;
  dropinput13:any;
  dropinput11:any;
  dropinput12:any;
  dropinput15:any;
  dropinput16:any;
  dropinput17:any;
  dropinput18:any;
  dropinput40:any;
  dropinput41:any;
  dropinput42:any;
  dropinput43:any;
  dropinput111:any;
  inputfordrops:any;
  peta:any;
  YesorNo:any;
  reltypeother:any;
  inputfordrops1:any;
  lookupdtl: any;
  lookupdtl2x: any;
  reportid:any;
  initialDraftReport: any = {};
  lookupdtl3x: any;
  lookupdtl4x: any;
  newAttribute: { forreal7: string; forreal71: string; forreal72: string; forreal73: string; };
  newAttribute2x: { Subject: string; Assessments: string; Labs: string; Type: string; };
  newAttribute3x: { Assessments2x: string; Labs2x: string; sus2x: string; Type2x: string;Type3x: string;sus3x: string; };
  newAttribute4x: { Yolo: string; Yolo1: string; Yolo2: string; Yolo3: string; };
  dropinput4:any;
  orgId:any;
  constructor(private fb: FormBuilder,private is:ImportdisService,public AuthService:AuthService,private sele:SelectbrsrService,public dialog: MatDialog,private aa:ActivatedRoute,private cs:CreatereportforbrsrService) { 
    this.lookupdtl = [];
    this.lookupdtl2x = [];
    this.lookupdtl3x = [];
    this.lookupdtl4x = [];
  }

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.is.getLookupDetailsByHdrId(51).subscribe((Data) => {
      this.storedchan = Data;
      this.filteredList = this.storedchan.slice();
  });
  this.sele.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
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
  this.sele.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    console.log(data);
    // var reportdata = JSON.parse(data[0]['InitialDraftReport']);
    const reportdata = data[0];
    console.log(reportdata);
    if (reportdata && reportdata.InitialDraftReport) {
      this.initialDraftReport = JSON.parse(reportdata.InitialDraftReport);
      this.principalform.patchValue(this.initialDraftReport);
        this.principalform.patchValue({
          twel7: this.initialDraftReport[19]['one'],
          twel17: this.initialDraftReport[19]['two'],
          rover1: this.initialDraftReport[19]['three'],
          rover2: this.initialDraftReport[19]['four'],
          rover3: this.initialDraftReport[19]['five'],
          rover4: this.initialDraftReport[19]['six'],
          rover5: this.initialDraftReport[19]['seven'],
          rover6: this.initialDraftReport[19]['eight'],
          rover7: this.initialDraftReport[19]['nine'],
          rover8: this.initialDraftReport[19]['ten'],
          rover9: this.initialDraftReport[19]['eleven'],
          rover10: this.initialDraftReport[19]['twelve'],
          rover11: this.initialDraftReport[19]['thirteen'],
          rover12: this.initialDraftReport[19]['fourteen'],
          rover13: this.initialDraftReport[19]['fifteen'],
          rover14: this.initialDraftReport[19]['sixteen'],
          rover15: this.initialDraftReport[19]['seventeen'],
          rover16: this.initialDraftReport[19]['eighteen'],
          rover17: this.initialDraftReport[19]['nineteen'],
          rover18: this.initialDraftReport[19]['twenty'],
          rover19: this.initialDraftReport[19]['twentyone'],
          rover20: this.initialDraftReport[19]['twentytwo'],
          rover21: this.initialDraftReport[19]['twentythree'],
          rover22: this.initialDraftReport[19]['twentyfour'],
          rover23: this.initialDraftReport[19]['twentyfive'],
          rover24: this.initialDraftReport[19]['twentysix'],
          rover25: this.initialDraftReport[19]['twentyseven'],
          rover26: this.initialDraftReport[19]['twentyeight'],
          rover27: this.initialDraftReport[19]['twentynine'],
          rover28: this.initialDraftReport[19]['thirty'],
          rover29: this.initialDraftReport[19]['thirtyone'],
          rover30: this.initialDraftReport[19]['thirtytwo'],
          rover31: this.initialDraftReport[19]['thirtythree'],
          rover32: this.initialDraftReport[19]['thirtyfour'],
          rover33: this.initialDraftReport[19]['thirtyfive'],
          rover34: this.initialDraftReport[19]['thirtysix'],
          twel24:this.initialDraftReport[19]['thirtyseven'],
          twel18:this.initialDraftReport[19]['thirtyeight'],
          twel9:this.initialDraftReport[19]['thirtynine'],
          lastall: this.initialDraftReport[19]['fourty'],
          lastall1: this.initialDraftReport[19]['fourtyone'],
          lastall2: this.initialDraftReport[19]['fourtytwo'],
          lastall3: this.initialDraftReport[19]['fourtythree'],
          lastall4: this.initialDraftReport[19]['fourtyfour'],
          lastall5: this.initialDraftReport[19]['fourtyfive'],
          lastall6: this.initialDraftReport[19]['fourtysix'],
          lastall7: this.initialDraftReport[19]['fourtyseven'],
          lastall8: this.initialDraftReport[19]['fourtyeight'],
          lastall9: this.initialDraftReport[19]['fourtynine'],
          lastall10: this.initialDraftReport[19]['fifty'],
          lastall11: this.initialDraftReport[19]['fiftyone'],
          lastall12: this.initialDraftReport[19]['fiftytwo'],
          lastall13: this.initialDraftReport[19]['fiftythree'],
          lastall14: this.initialDraftReport[19]['fiftyfour'],
          lastall15: this.initialDraftReport[19]['fiftyfive'],
          lastall16: this.initialDraftReport[19]['fiftysix'],
          lastall17: this.initialDraftReport[19]['fiftyseven'],
          lastall18: this.initialDraftReport[19]['fiftyeight'],
          lastall19: this.initialDraftReport[19]['fiftynine'],
          lastall20: this.initialDraftReport[19]['sixty'],
          twel21: this.initialDraftReport[19]['sixtyone'],
          twel19: this.initialDraftReport[19]['sixtytwo'],
          twel2: this.initialDraftReport[19]['sixtythree'],
          twel20: this.initialDraftReport[19]['sixtyfour'],
          twel22: this.initialDraftReport[19]['sixtyfive'],
          twel25: this.initialDraftReport[19]['sixtysix'],
          twel4: this.initialDraftReport[19]['sixtyseven'],
          twel26: this.initialDraftReport[19]['sixtyeight'],
          ///////////////////////////////
          role1: this.initialDraftReport[19]['sixtynine'],
          role2: this.initialDraftReport[19]['seventy'],
          role3: this.initialDraftReport[19]['seventyone'],
          role4: this.initialDraftReport[19]['seventytwo'],
          role5: this.initialDraftReport[19]['seventythree'],
          role6: this.initialDraftReport[19]['seventyfour'],
          role7: this.initialDraftReport[19]['seventyfive'],
          role8: this.initialDraftReport[19]['seventysix'],
          role9: this.initialDraftReport[19]['seventyseven'],
          role10: this.initialDraftReport[19]['seventyeight'],
          role11: this.initialDraftReport[19]['seventynine'],
          role12: this.initialDraftReport[19]['eighty'],
          role13: this.initialDraftReport[19]['eightyone'],
          role14: this.initialDraftReport[19]['eightytwo'],
          role15: this.initialDraftReport[19]['eightythree'],
          role16: this.initialDraftReport[19]['eightyfour'],
          role17: this.initialDraftReport[19]['eightyfive'],
          role18: this.initialDraftReport[19]['eightysix'],
          twel23: this.initialDraftReport[19]['eightyseven'],
          twel27: this.initialDraftReport[19]['eightyeight'],
          forreal1: this.initialDraftReport[19]['eightynine'],
          forreal12: this.initialDraftReport[19]['ninty'],
          forreal13: this.initialDraftReport[19]['nintyone'],

          forreal2: this.initialDraftReport[19]['nintytwo'],
          forreal21: this.initialDraftReport[19]['nintythree'],
          forreal22: this.initialDraftReport[19]['nintyfour'],

          forreal3: this.initialDraftReport[19]['nintyfive'],
          forreal31: this.initialDraftReport[19]['nintysix'],
          forreal32: this.initialDraftReport[19]['nintyseven'],

          forreal4: this.initialDraftReport[19]['nintyeight'],
          forreal41: this.initialDraftReport[19]['nintynine'],
          forreal42: this.initialDraftReport[19]['tenten'],

          forreal5: this.initialDraftReport[19]['teneleven'],
          forreal51: this.initialDraftReport[19]['tentwelve'],
          forreal52: this.initialDraftReport[19]['tenthirteen'],

          forreal6: this.initialDraftReport[19]['tenfourteen'],
          forreal61: this.initialDraftReport[19]['tenfifteen'],
          forreal62: this.initialDraftReport[19]['tensixteen'],



          scope1cal: this.initialDraftReport[19]['tenseventeen'],
          scope1cal1: this.initialDraftReport[19]['teneightteen'],
          scope2loc: this.initialDraftReport[19]['tennineteen'],

          scope2loc1: this.initialDraftReport[19]['tentwenty'],
          scope2mark: this.initialDraftReport[19]['tentwentyone'],
          scope2mark1: this.initialDraftReport[19]['tentwentytwo'],

          scope2mark2: this.initialDraftReport[19]['tentwentythree'],
          scope2mark3: this.initialDraftReport[19]['tentwentyfour'],
          scope2mark4: this.initialDraftReport[19]['tentwentyfive'],
          scope2mark5: this.initialDraftReport[19]['tentwentysix'],
        });
        if(this.principalform.get('twel7').value=='Yes'){
          this.dropinput15=this.principalform.get('twel7').value;
        }
        if(this.principalform.get('twel24').value=='Yes'){
          this.dropinput43=this.principalform.get('twel24').value;
        }
        if(this.principalform.get('twel21').value=='Yes'){
          this.dropinput40=this.principalform.get('twel21').value;
        }
        if(this.principalform.get('twel2').value=='Yes'){
          this.dropinput4=this.principalform.get('twel2').value;
        }
        if(this.principalform.get('twel22').value=='Yes'){
          this.dropinput41=this.principalform.get('twel22').value;
        }
        if(this.principalform.get('twel4').value=='Yes'){
          this.dropinput5=this.principalform.get('twel4').value;
        }
        if(this.principalform.get('twel23').value=='Yes'){
          this.dropinput42=this.principalform.get('twel23').value;
        }
        this.dropinput111=this.principalform.get('twel241').value;
        this.dropinput6=this.principalform.get('forreal1').value;
        this.dropinput7=this.principalform.get('forreal2').value;
        this.dropinput8=this.principalform.get('forreal3').value;
        this.dropinput9=this.principalform.get('forreal4').value;
        this.dropinput10=this.principalform.get('forreal5').value;
        this.dropinput11=this.principalform.get('forreal6').value;
        this.lookupdtl2x=JSON.parse(this.initialDraftReport[19]['Table1']);
        this.lookupdtl3x=JSON.parse(this.initialDraftReport[19]['Table2']);
        this.lookupdtl4x=JSON.parse(this.initialDraftReport[19]['Table3']);
        this.lookupdtl=JSON.parse(this.initialDraftReport[19]['Table4']);
      // console.log(JSON.parse(this.initialDraftReport[1]['Table1']))
   
      // this.lookupdtl=JSON.parse(this.initialDraftReport[1]['Table1']);
      // this.lookupdtl2x=JSON.parse(this.initialDraftReport[1]['Table2']);
    
    }
  });

  this.is.getLookupDetailsByHdrId(9).subscribe((Data) => {
    this.peta = Data;
});

this.is.getLookupDetailsByHdrId(2).subscribe((Data) => {
  this.YesorNo = Data;
});

    const Today = new Date();
    this.currentYear = Today.getFullYear();
    this.PreviousYear=this.currentYear-1;
    this.principalform = this.fb.group({
      sumofscop2:[''],
      twel1: [''],
      scope1cal:[''],
      scope1cal1:[''],
      scope2loc:[''],
      scope2loc1:[''],
      scope2mark:[''],
      scope2mark1:[''],
      scope2mark2:[''],
      scope2mark3:[''],
      scope2mark4:[''],
      scope2mark5:[''],
      twel2: [''],
      twel3: [''],
      twel4: [''],
      twel5: [''],
      twel6: [''],
      twel7: [''],
      twel17: [''],
      twel18: [''],
      twel19: [''],
      twel20: [''],
      twel8: [''],
      twel9: [''],
      twel10: [''],
      twel11: [''],
      twel12: [''],
      twel21:[''],
      twel22:[''],
      twel23:[''],
      twel24:[''],
      twel241:[''],
      twel25:[''],
      twel26:[''],
      twel27:[''],
      twel28:[''],
      forreal1: [''],
      forreal12: [''],
      forreal13: [''],
      forreal21: [''],
      forreal22: [''],
      forreal31: [''],
      forreal32: [''],
      forreal41: [''],
      forreal42: [''],
      forreal51: [''],
      forreal52: [''],
      forreal61: [''],
      forreal62: [''],
      forreal2: [''],
      forreal3: [''],
      forreal4: [''],
      forreal5: [''],
      forreal6: [''],
      forreal71: [''],
      five1:[''],
      seven1:[''],
      role1: [''],
      role2: [''],
      role3: [''],
      role4: [''],
      role5: [''],
      role6: [''],
      role7: [''],
      role8: [''],
      role9: [''],
      role10: [''],
      role11: [''],
      role12: [''],
      role13: [''],
      role14: [''],
      role15: [''],
      role16: [''],
      role17: [''],
      role18: [''],
      lastall:[''],
      lastall1: [''],
      lastall2: [''],
      lastall3: [''],
      lastall4: [''],
      lastall5: [''],
      lastall6: [''],
      lastall7: [''],
      lastall8: [''],
      lastall9: [''],
      lastall10: [''],
      lastall11: [''],
      lastall12: [''],
      lastall13: [''],
      lastall14: [''],
      lastall15: [''],
      lastall16: [''],
      lastall17: [''],
      lastall18: [''],
      lastall19: [''],
      lastall20: [''],
      rover1: [''],
      rover2: [''],
      rover3: [''],
      rover4: [''],
      rover5: [''],
      rover6: [''],
      rover7: [''],
      rover8: [''],
      rover9: [''],
      rover10: [''],
      rover11: [''],
      rover12: [''],
      rover13: [''],
      rover14: [''],
      rover15: [''],
      rover16: [''],
      rover17: [''],
      rover18: [''],
      rover19: [''],
      rover20: [''],
      rover21: [''],
      rover22: [''],
      rover23: [''],
      rover24: [''],
      rover25: [''],
      rover26: [''],
      rover27: [''],
      rover28: [''],
      rover29: [''],
      rover30: [''],
      rover31: [''],
      rover32: [''],
      rover33: [''],
      rover34: [''],
     })
     this.addFieldValue();
     this.addFieldValue2x();
     this.addFieldValue3x();
     this.addFieldValue4x();
  }
  addFieldValue4x() {
    this.newAttribute4x = {
      Yolo: '',
      Yolo1: '',
      Yolo2: '',
      Yolo3: '',
     
    };
    this.lookupdtl4x.push(this.newAttribute4x);
    // this.dropinput16 = '';
    console.log(this.lookupdtl4x);
}
  addFieldValue3x() {
    this.newAttribute3x = {
      Assessments2x: '',
      Labs2x: '',
      sus2x: '',
      Type2x: '',
      Type3x:'',
      sus3x: '',
    };
    this.lookupdtl3x.push(this.newAttribute3x);
    // this.dropinput16 = '';
    console.log(this.lookupdtl3x);
}
  addFieldValue2x() {
    this.newAttribute2x = {
      Subject: '',
      Assessments: '',
      Labs: '',
      Type: '',
    };
    this.lookupdtl2x.push(this.newAttribute2x);
    this.dropinput16 = '';
    console.log(this.lookupdtl2x);
}
  addFieldValue() {
    this.newAttribute = {
      forreal7: '',
      forreal71: '',
      forreal72: '',
      forreal73: '',
    };
    this.lookupdtl.push(this.newAttribute);
    this.dropinput12 = '';
    console.log(this.lookupdtl);
}
sumofall(data){
  const quant1 = this.principalform.get('scope2mark').value;
  const quant2 = this.principalform.get('scope2loc').value;
  const quant3 = this.principalform.get('scope1cal').value;

  const parseValue = (value) => {
    if (!value) return 0; // Return 0 if value is empty or undefined
    const parsedValue = parseFloat(value.replace(/,/g, ''));
    return isNaN(parsedValue) ? 0 : parsedValue; // Return 0 if parsed value is NaN
  };

  const sum =
    ((parseValue(quant1) +
    parseValue(quant2) +
    parseValue(quant3))/this.sele.turnover).toFixed(2);
    this.principalform.get('scope2mark2').setValue(sum);
    console.log(sum);
}
deleteQ102a52(i) {
  this.lookupdtl4x.splice(i, 1);
}
deleteQ102a(i) {
  this.lookupdtl.splice(i, 1);
}
deleteQ102a2x(i) {
  this.lookupdtl2x.splice(i, 1);
}
deleteQ102a3x(i) {
  this.lookupdtl3x.splice(i, 1);
}
changeAssessments53(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Yolo3' + i.toString())
      )).value
  );
  this.lookupdtl4x[i]['Yolo3'] = (<HTMLInputElement>(
      document.getElementById('Yolo3' + i.toString())
  )).value;
}
changeAssessments52(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Yolo2' + i.toString())
      )).value
  );
  this.lookupdtl4x[i]['Yolo2'] = (<HTMLInputElement>(
      document.getElementById('Yolo2' + i.toString())
  )).value;
}
changeAssessments51(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Yolo1' + i.toString())
      )).value
  );
  this.lookupdtl4x[i]['Yolo1'] = (<HTMLInputElement>(
      document.getElementById('Yolo1' + i.toString())
  )).value;
}
changeAssessments5(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Yolo' + i.toString())
      )).value
  );
  this.lookupdtl4x[i]['Yolo'] = (<HTMLInputElement>(
      document.getElementById('Yolo' + i.toString())
  )).value;
}
changeAssessments(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('forreal7' + i.toString())
      )).value
  );
  this.lookupdtl[i]['forreal7'] = (<HTMLInputElement>(
      document.getElementById('forreal7' + i.toString())
  )).value;
}
changeAssessments1(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('forreal71' + i.toString())
      )).value
  );
  this.lookupdtl[i]['forreal71'] = (<HTMLInputElement>(
      document.getElementById('forreal71' + i.toString())
  )).value;
}
changeAssessments2(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('forreal72' + i.toString())
      )).value
  );
  this.lookupdtl[i]['forreal72'] = (<HTMLInputElement>(
      document.getElementById('forreal72' + i.toString())
  )).value;
}
changeAssessments3(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('forreal73' + i.toString())
      )).value
  );
  this.lookupdtl[i]['forreal73'] = (<HTMLInputElement>(
      document.getElementById('forreal73' + i.toString())
  )).value;
}
changeAssessments3x13(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('sus3x' + i.toString())
      )).value
  );
  this.lookupdtl3x[i]['sus3x'] = (<HTMLInputElement>(
      document.getElementById('sus3x' + i.toString())
  )).value;
}
  // alltot1(event:any){
  //   const fourthval = (document.getElementById('eueu3a1') as HTMLInputElement).value;
  //   const fourthvall = (document.getElementById('eueu3e3') as HTMLInputElement).value;
  //   const fourthvall1 = (document.getElementById('eueu3e5') as HTMLInputElement).value;
  //   var saver2= parseFloat(fourthval.replace(/\,/g, ''));
  //   var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
  //   var saver4= parseFloat(fourthvall1.replace(/\,/g, ''));
  //   const result1=saver3+saver2+saver4;
  //   const thirdInput12 = document.getElementById('eueu3e7') as HTMLInputElement;
  //   thirdInput12.value = result1.toString();
  // }

  alltot1(event: any) {
    const fourthval = (document.getElementById('eueu3a1') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('eueu3e3') as HTMLInputElement).value;
    const fourthvall1 = (document.getElementById('eueu3e5') as HTMLInputElement).value;
    var saver2 = parseFloat(fourthval.replace(/\,/g, ''));
    var saver3 = parseFloat(fourthvall.replace(/\,/g, ''));
    var saver4 = parseFloat(fourthvall1.replace(/\,/g, ''));
    const result1 = saver3 + saver2 + saver4;
    const result1Formatted = result1.toLocaleString('en-IN'); // Format with Indian numbering and commas
    const thirdInput12 = document.getElementById('eueu3e7') as HTMLInputElement;
    thirdInput12.value = result1Formatted;
}
  alltot3(event:any){
    const firstval = (document.getElementById('eueu3b2') as HTMLInputElement).value;
    const secondval = (document.getElementById('eueu3f4') as HTMLInputElement).value;
    const secondval2 = (document.getElementById('eueu3f6') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    var saver12 = parseFloat(secondval2.replace(/\,/g, ''));
    const result = saver1 + saver+saver12;
    const result1Formatted = result.toLocaleString('en-IN');
    const thirdInput = document.getElementById('eueu3f8') as HTMLInputElement;
    thirdInput.value =result1Formatted;

  }
  ownershipandlegalfor50(value) {
    console.log(value.value);
    this.dropinput40=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor51(value) {
    console.log(value.value);
    this.dropinput41=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor52(value) {
    console.log(value.value);
    this.dropinput42=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor53(value) {
    console.log(value.value);
    this.dropinput43=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor531(value) {
    console.log(value.value);
    this.dropinput111=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor5(value) {
    console.log(value.value);
    this.dropinput4=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor7(value) {
    console.log(value.value);
    this.dropinput5=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor8(value) {
    console.log(value.value);
    this.dropinput6=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor9(value) {
    console.log(value.value);
    this.dropinput7=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor10(value) {
    console.log(value.value);
    this.dropinput8=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor11(value) {
    console.log(value.value);
    this.dropinput9=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor12(value) {
    console.log(value.value);
    this.dropinput10=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor13(value) {
    console.log(value.value);
    this.dropinput11=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor14(i,value) {
  
      this.dropinput12 = value.value;
      this.lookupdtl[i]['forreal71'] =value.value;
    //   if (value.value != 'Others'){
    // // this.lookupdtl[i]['Channels'] = value.value;
    //   }
    
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor15(value) {
    console.log(value.value);
    this.dropinput13=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor16(value) {
    console.log(value.value);
    this.dropinput14=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor17(value) {
  
    console.log(value.value);
    this.dropinput15=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor18(i,value) {
    console.log(value.value);
    this.dropinput16=value.value;
    this.lookupdtl2x[i]['Type'] =value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor182x(i,value) {
    console.log(value.value);
    this.dropinput17=value.value;
    this.lookupdtl3x[i]['Type2x'] =value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor183x(i,value) {
    console.log(value.value);
    this.dropinput18=value.value;
    this.lookupdtl3x[i]['Type3x'] =value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  changeAssessments11(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('Assessments' + i.toString())
        )).value
    );
    this.lookupdtl2x[i]['Assessments'] = (<HTMLInputElement>(
        document.getElementById('Assessments' + i.toString())
    )).value;
}
changeAssessments2x11(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Assessments2x' + i.toString())
      )).value
  );
  this.lookupdtl3x[i]['Assessments2x'] = (<HTMLInputElement>(
      document.getElementById('Assessments2x' + i.toString())
  )).value;
}
changeAssessments2x13(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('sus2x' + i.toString())
      )).value
  );
  this.lookupdtl3x[i]['sus2x'] = (<HTMLInputElement>(
      document.getElementById('sus2x' + i.toString())
  )).value;
}
changeAssessments2x12(i) {
  const startdateInput = <HTMLInputElement>(
      document.getElementById('Labs2x' + i.toString())
  );
  const startdateValue = startdateInput.value;
  this.lookupdtl3x[i]['Labs2x'] = startdateValue;

}
changeAssessments12(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Labs' + i.toString())
      )).value
  );
  this.lookupdtl2x[i]['Labs'] = (<HTMLInputElement>(
      document.getElementById('Labs' + i.toString())
  )).value;
}
  inputforothers1(i, value) {
    //1
    this.inputfordrops = (<HTMLInputElement>(
        document.getElementById('forreal71' + i.toString())
    )).value;
    console.log(this.inputfordrops);
    this.lookupdtl[i]['forreal71'] = this.inputfordrops;
    console.log(this.lookupdtl);
  }
  inputforother1(i, value) {
    //1
    this.inputfordrops1 = (<HTMLInputElement>(
        document.getElementById('Type' + i.toString())
    )).value;
    console.log(this.inputfordrops1);
    this.lookupdtl2x[i]['Type'] = this.inputfordrops1;
    console.log(this.lookupdtl2x);
  }
  alltot2(event:any){
    const fourthval = (document.getElementById('eueu3a9') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('eueu3e11') as HTMLInputElement).value;
    const fourthvall1 = (document.getElementById('eueu3e13') as HTMLInputElement).value;
    const thirdval = (document.getElementById('eueu3a1') as HTMLInputElement).value;
    const thirdvall = (document.getElementById('eueu3e3') as HTMLInputElement).value;
    const thirdvall1 = (document.getElementById('eueu3e5') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
    var saver311= parseFloat(fourthvall1.replace(/\,/g, ''));
    var saver9= parseFloat(thirdval.replace(/\,/g, ''));
    var saver99= parseFloat(thirdvall.replace(/\,/g, ''));
    var saver999= parseFloat(thirdvall1.replace(/\,/g, ''));
    const result1=saver3+saver2+saver311
    const result2=saver9+saver99+saver999
    console.log(result1, result2)
    const result1Formatted = result1.toString();
    const thirdInput12 = document.getElementById('eueu3e15') as HTMLInputElement;
    thirdInput12.value = result1Formatted;
    console.log(this.sele.turnover);
    const turn=(result1+result2)/this.sele.turnover;
    console.log(turn);
    const thirdInput123 = document.getElementById('eueu3e17') as HTMLInputElement;
    thirdInput123.value = turn.toString();
  }
    alltot4(event:any){
    const firstval = (document.getElementById('eueu3b10') as HTMLInputElement).value;
    const secondval = (document.getElementById('eueu3f12') as HTMLInputElement).value;
    const secondval2 = (document.getElementById('eueu3f14') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    var saver12 = parseFloat(secondval2.replace(/\,/g, ''));
    const result = saver1 + saver+saver12;
    const result1Formatted = result.toLocaleString('en-IN');
    const thirdInput = document.getElementById('eueu3f16') as HTMLInputElement;
    thirdInput.value = result1Formatted;
    const turn=result/this.sele.turnover;
    const thirdInput123 = document.getElementById('eueu3f18') as HTMLInputElement;
    thirdInput123.value = turn.toString();

    
  }
  alltot5(event:any){
    const fourthval = (document.getElementById('one') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('three') as HTMLInputElement).value;
    const fourthvall1 = (document.getElementById('five') as HTMLInputElement).value;
    const fourthvall2 = (document.getElementById('seven') as HTMLInputElement).value;
    const fourthvall3 = (document.getElementById('nine') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
    var saver4= parseFloat(fourthvall1.replace(/\,/g, ''));
    var saver5= parseFloat(fourthvall2.replace(/\,/g, ''));
    var saver6= parseFloat(fourthvall3.replace(/\,/g, ''));
    const result1=saver3+saver2+saver4+saver5+saver6;
    const result21 = Number(result1).toLocaleString('en-IN');
    const thirdInput12 = document.getElementById('eleven') as HTMLInputElement;
    thirdInput12.value = result21.toString();
  }
  alltot6(event:any){
    const fourthval = (document.getElementById('two') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('four') as HTMLInputElement).value;
    const fourthvall1 = (document.getElementById('six') as HTMLInputElement).value;
    const fourthvall2 = (document.getElementById('eight') as HTMLInputElement).value;
    const fourthvall3 = (document.getElementById('ten') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
    var saver4= parseFloat(fourthvall1.replace(/\,/g, ''));
    var saver5= parseFloat(fourthvall2.replace(/\,/g, ''));
    var saver6= parseFloat(fourthvall3.replace(/\,/g, ''));
    const result1=saver3+saver2+saver4+saver5+saver6;
    const result21 = Number(result1).toLocaleString('en-IN');
    const thirdInput12 = document.getElementById('twelve') as HTMLInputElement;
    thirdInput12.value = result21.toString();
  }
  alltot7(event:any){
    const fourthval = (document.getElementById('oneness') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('threeness') as HTMLInputElement).value;
    const fourthvall1 = (document.getElementById('fiveness') as HTMLInputElement).value;
    const fourthvall2 = (document.getElementById('sevenness') as HTMLInputElement).value;
    const fourthvall3 = (document.getElementById('nineness') as HTMLInputElement).value;
    const fourthvall4 = (document.getElementById('elevenness') as HTMLInputElement).value;
    const fourthvall5 = (document.getElementById('thirteenness') as HTMLInputElement).value;
    const fourthvall6 = (document.getElementById('fifteenness') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
    var saver4= parseFloat(fourthvall1.replace(/\,/g, ''));
    var saver5= parseFloat(fourthvall2.replace(/\,/g, ''));
    var saver6= parseFloat(fourthvall3.replace(/\,/g, ''));
    var saver7= parseFloat(fourthvall4.replace(/\,/g, ''));
    var saver8= parseFloat(fourthvall5.replace(/\,/g, ''));
    var saver9= parseFloat(fourthvall6.replace(/\,/g, ''));
    const result1=saver3+saver2+saver4+saver5+saver6+saver7+saver8+saver9;
    const result1Formatted = result1.toLocaleString('en-IN'); 
    const thirdInput12 = document.getElementById('seventeenness') as HTMLInputElement;
    thirdInput12.value = result1Formatted;
  }
   alltot8(event:any){
    const fourthval = (document.getElementById('twoness') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('fourness') as HTMLInputElement).value;
    const fourthvall1 = (document.getElementById('sixness') as HTMLInputElement).value;
    const fourthvall2 = (document.getElementById('eightness') as HTMLInputElement).value;
    const fourthvall3 = (document.getElementById('tenness') as HTMLInputElement).value;
    const fourthvall4 = (document.getElementById('twelveness') as HTMLInputElement).value;
    const fourthvall5 = (document.getElementById('fourteenness') as HTMLInputElement).value;
    const fourthvall6 = (document.getElementById('sixteenness') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
    var saver4= parseFloat(fourthvall1.replace(/\,/g, ''));
    var saver5= parseFloat(fourthvall2.replace(/\,/g, ''));
    var saver6= parseFloat(fourthvall3.replace(/\,/g, ''));
    var saver7= parseFloat(fourthvall4.replace(/\,/g, ''));
    var saver8= parseFloat(fourthvall5.replace(/\,/g, ''));
    var saver9= parseFloat(fourthvall6.replace(/\,/g, ''));
    const result1=saver3+saver2+saver4+saver5+saver6+saver7+saver8+saver9;
    const result1Formatted = result1.toLocaleString('en-IN'); 
    const thirdInput12 = document.getElementById('eighteenness') as HTMLInputElement;
    thirdInput12.value = result1Formatted;
  }
  alltot9(event:any){
    const fourthval = (document.getElementById('nineteenness') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('twentytwoness') as HTMLInputElement).value;
    const fourthvall1 = (document.getElementById('twentyfourness') as HTMLInputElement).value;
    
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
    var saver4= parseFloat(fourthvall1.replace(/\,/g, ''));
   
    const result1=saver3+saver2+saver4;
    const result21 = Number(result1).toLocaleString('en-IN');
    const thirdInput12 = document.getElementById('twentysixness') as HTMLInputElement;
    thirdInput12.value = result21.toString();
  }
   alltot10(event:any){
    const fourthval = (document.getElementById('twentyoneness') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('twentythreeness') as HTMLInputElement).value;
    const fourthvall1 = (document.getElementById('twentyfiveness') as HTMLInputElement).value;
   
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
    var saver4= parseFloat(fourthvall1.replace(/\,/g, ''));
    
    const result1=saver3+saver2+saver4;
    const result21 = Number(result1).toLocaleString('en-IN');
    const thirdInput12 = document.getElementById('twentysevenness') as HTMLInputElement;
    thirdInput12.value = result21.toString();
  }
  alltot11(event:any){
    const fourthval = (document.getElementById('twentyeightness') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('thirtyness') as HTMLInputElement).value;
    const fourthvall1 = (document.getElementById('thirtytwoness') as HTMLInputElement).value;
    
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
    var saver4= parseFloat(fourthvall1.replace(/\,/g, ''));
   
    const result1=saver3+saver2+saver4;
    const result21 = Number(result1).toLocaleString('en-IN');
    const thirdInput12 = document.getElementById('thirtyfourness') as HTMLInputElement;
    thirdInput12.value = result21.toString();
  }
   alltot12(event:any){
    const fourthval = (document.getElementById('twentynineness') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('thirtyoneness') as HTMLInputElement).value;
    const fourthvall1 = (document.getElementById('thirtythreeness') as HTMLInputElement).value;
   
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
    var saver4= parseFloat(fourthvall1.replace(/\,/g, ''));
    
    const result1=saver3+saver2+saver4;
    const result21 = Number(result1).toLocaleString('en-IN');
    const thirdInput12 = document.getElementById('thirtyfiveness') as HTMLInputElement;
    thirdInput12.value = result21.toString();
  }
  aal(event:any){
    const fourthval = (document.getElementById('tulol') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    const result1=saver2/this.sele.turnover;
    const thirdInput12 = document.getElementById('tulol2') as HTMLInputElement;
    thirdInput12.value = result1.toString();

  }
  aal1(event:any){
    const fourthval = (document.getElementById('tulol1') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    const result1=saver2/this.sele.turnover;
    console.log(this.sele.turnover)
    console.log(result1)
    const thirdInput12 = document.getElementById('tulol3') as HTMLInputElement;
    thirdInput12.value = result1.toString();
  }

  alldrop(event){
    console.log(event.value);
    this.principalform.get('lastall').setValue(event.value)
  }
  openscope1(data) {
    const dialogRef = this.dialog.open(GhemissionsComponent, {
        autoFocus: false,
        data: { data },
    });
    dialogRef.afterClosed().subscribe((result) => {
        console.log(this.is.metricsCO2e);
        this.principalform
            .get('scope1cal')
            .setValue(this.is.metricsCO2e.toLocaleString());
        if (result) {
            console.log(result);
        }
    });
}
openscope2location(data) {
  const dialogRef = this.dialog.open(ElectriccalcComponent, {
      autoFocus: false,
      data: { data },
  });
  dialogRef.afterClosed().subscribe((result) => {
      console.log(this.is.electricsum);
      this.principalform
          .get('scope2loc')
          .setValue(this.is.electricsum.toLocaleString());
      if (result) {
          console.log(result);
      }
  });
}
openscope2marketbased(data) {
  const dialogRef = this.dialog.open(Scope2renewComponent, {
      autoFocus: false,
      data: { data },
  });
  dialogRef.afterClosed().subscribe((result) => {
      console.log(this.is.scope2marketbased);
      this.principalform
          .get('scope2mark')
          .setValue(this.is.scope2marketbased.toLocaleString());
      if (result) {
          console.log(result);
      }
  });
}
onSave() {
  var one=this.principalform.get('twel7').value
  var two = this.principalform.get('twel17').value;
  var three = this.principalform.get('rover1').value;
  var four = this.principalform.get('rover2').value;
  var five = this.principalform.get('rover3').value;
  var six = this.principalform.get('rover4').value;
  var seven = this.principalform.get('rover5').value;
  var eight = this.principalform.get('rover6').value;
  var nine = this.principalform.get('rover7').value;
  var ten = this.principalform.get('rover8').value;
  var eleven = this.principalform.get('rover9').value;
  var twelve=this.principalform.get('rover10').value
  var thirteen = this.principalform.get('rover11').value;
  var fourteen = this.principalform.get('rover12').value;
  var fifteen = this.principalform.get('rover13').value;
  var sixteen = this.principalform.get('rover14').value;
  var seventeen = this.principalform.get('rover15').value;
  var eighteen = this.principalform.get('rover16').value;
  var nineteen = (document.getElementById('seventeenness') as HTMLInputElement).value;
  var twenty = (document.getElementById('eighteenness') as HTMLInputElement).value;
  var twentyone = this.principalform.get('rover19').value;
  var twentytwo = this.principalform.get('rover20').value;
  var twentythree= this.principalform.get('rover21').value;
  var twentyfour =  this.principalform.get('rover22').value;
  var twentyfive = this.principalform.get('rover23').value;
  var twentysix =  this.principalform.get('rover24').value;
  var twentyseven = (document.getElementById('twentysixness') as HTMLInputElement).value;
  var  twentyeight =(document.getElementById('twentysevenness') as HTMLInputElement).value;
  var twentynine = this.principalform.get('rover27').value;
  var thirty =  this.principalform.get('rover28').value;
  var thirtyone = this.principalform.get('rover29').value;
  var thirtytwo =  this.principalform.get('rover30').value;
  var thirtythree = this.principalform.get('rover31').value;
  var thirtyfour = this.principalform.get('rover32').value;
  var thirtyfive =  (document.getElementById('thirtyfourness') as HTMLInputElement).value;
  var thirtysix = (document.getElementById('thirtyfiveness') as HTMLInputElement).value;
  var thirtyseven = this.principalform.get('twel24').value;
  var thirtyeight = this.principalform.get('twel18').value;
  var thirtynine = this.principalform.get('twel9').value;
  // console.log(one);

  var fourty =  this.principalform.get('lastall').value;
  var fourtyone = this.principalform.get('lastall1').value;
  var fourtytwo = this.principalform.get('lastall2').value;
  var fourtythree = this.principalform.get('lastall3').value;
  var fourtyfour = this.principalform.get('lastall4').value;
  var fourtyfive=this.principalform.get('lastall5').value
  var fourtysix = this.principalform.get('lastall6').value;
  var fourtyseven = (document.getElementById('eueu3e7') as HTMLInputElement).value;
  var fourtyeight = (document.getElementById('eueu3f8') as HTMLInputElement).value;
  var fourtynine =this.principalform.get('lastall9').value;
  var  fifty = this.principalform.get('lastall10').value;
  var fiftyone = this.principalform.get('lastall11').value;
  var fiftytwo = this.principalform.get('lastall12').value;
  var fiftythree = this.principalform.get('lastall13').value;
  var fiftyfour = this.principalform.get('lastall14').value;
  var fiftyfive = (document.getElementById('eueu3e15') as HTMLInputElement).value;
  var fiftysix= (document.getElementById('eueu3f16') as HTMLInputElement).value;
  var fiftyseven = (document.getElementById('eueu3e17') as HTMLInputElement).value;
  var fiftyeight = (document.getElementById('eueu3f18') as HTMLInputElement).value;
  var fiftynine =  this.principalform.get('lastall19').value;
  var sixty = this.principalform.get('lastall20').value;
  var sixtyone = this.principalform.get('twel21').value;
  var sixtytwo = this.principalform.get('twel19').value;
  var sixtythree = this.principalform.get('twel2').value;
  var sixtyfour = this.principalform.get('twel20').value;
  var sixtyfive = this.principalform.get('twel22').value;
  var sixtysix = this.principalform.get('twel25').value;
  var sixtyseven = this.principalform.get('twel4').value;
  var sixtyeight = this.principalform.get('twel26').value;
  ///////////
  var sixtynine =  this.principalform.get('role1').value;
  var seventy = this.principalform.get('role2').value;
  var seventyone = this.principalform.get('role3').value;
  var seventytwo = this.principalform.get('role4').value;
  var seventythree = this.principalform.get('role5').value;
  var seventyfour = this.principalform.get('role6').value;
  var seventyfive = this.principalform.get('role7').value;
  var seventysix = this.principalform.get('role8').value;
  var seventyseven = this.principalform.get('role9').value;
  var seventyeight = this.principalform.get('role10').value;
  var seventynine = (document.getElementById('eleven') as HTMLInputElement).value;
  var eighty =(document.getElementById('twelve') as HTMLInputElement).value;
  var eightyone = this.principalform.get('role13').value;
  var eightytwo = this.principalform.get('role14').value;
  var eightythree = (document.getElementById('tulol2') as HTMLInputElement).value;
  var eightyfour = (document.getElementById('tulol3') as HTMLInputElement).value;
  var eightyfive = this.principalform.get('role17').value;
  var eightysix = this.principalform.get('role18').value;
  var eightyseven = this.principalform.get('twel23').value;
  var eightyeight = this.principalform.get('twel27').value;
  var eightynine = this.dropinput6;
  var ninty = this.principalform.get('forreal12').value;
  var nintyone = this.principalform.get('forreal13').value;
  var nintytwo = this.dropinput7;
  var nintythree = this.principalform.get('forreal21').value;
  var nintyfour = this.principalform.get('forreal22').value;
  var nintyfive = this.dropinput8;
  var nintysix = this.principalform.get('forreal31').value;
  var nintyseven = this.principalform.get('forreal32').value;
  var nintyeight = this.dropinput9;
  var nintynine = this.principalform.get('forreal41').value;
  var tenten = this.principalform.get('forreal42').value;
  var teneleven = this.dropinput10;
  var tentwelve = this.principalform.get('forreal51').value;
  var tenthirteen = this.principalform.get('forreal52').value;
  var tenfourteen = this.dropinput11;
  var tenfifteen = this.principalform.get('forreal61').value;
  var tensixteen = this.principalform.get('forreal62').value;

  var tenseventeen = this.principalform.get('scope1cal').value;
  var teneightteen = this.principalform.get('scope1cal1').value;
  var tennineteen = this.principalform.get('scope2loc').value;
  var tentwenty = this.principalform.get('scope2loc1').value;
  var tentwentyone = this.principalform.get('scope2mark').value;
  var tentwentytwo = this.principalform.get('scope2mark1').value;
  var tentwentythree = (document.getElementById('six1') as HTMLInputElement).value;
  var tentwentyfour = (document.getElementById('six2') as HTMLInputElement).value;
  var tentwentyfive = this.principalform.get('scope2mark4').value;
  var tentwentysix = this.principalform.get('scope2mark5').value;
  var tentwentyseven = this.principalform.get('twel241').value;

  this.initialDraftReport[19]={Table1: JSON.stringify(this.lookupdtl2x),Table2: JSON.stringify(this.lookupdtl3x),Table3: JSON.stringify(this.lookupdtl4x),Table4: JSON.stringify(this.lookupdtl),one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen,twenty,twentyone,twentytwo,
    twentythree,twentyfour,twentyfive,twentysix,twentyseven,twentyeight,twentynine,thirty,thirtyone,thirtytwo,thirtythree,thirtyfour,thirtyfive,thirtysix,thirtyseven,thirtyeight,thirtynine,fourty,
    fourtyone,fourtytwo,fourtythree,fourtyfour,fourtyfive,fourtysix,fourtyseven,fourtyeight,fourtynine,fifty,fiftyone,fiftytwo,fiftythree,fiftyfour,fiftyfive,fiftysix,
    fiftyseven,fiftyeight,fiftynine,sixty,sixtyone,sixtytwo,sixtythree,sixtyfour,sixtyfive,sixtysix,sixtyseven,sixtyeight,sixtynine,seventy,seventyone,seventytwo,seventythree,seventyfour,seventyfive,seventysix,seventyseven,seventyeight,seventynine,eighty,
    eightyone,eightytwo,eightythree,eightyfour,eightyfive,eightysix,eightyseven,eightyeight,eightynine,ninty,nintyone,nintytwo,nintythree,nintyfour,nintyfive,nintysix,nintyseven,
    nintyeight,nintynine,tenten,teneleven,tentwelve,tenthirteen,tenfourteen,tenfifteen,tensixteen,
    tenseventeen,teneightteen,tennineteen,tentwenty,tentwentyone,tentwentytwo,tentwentythree,
    tentwentyfour,tentwentyfive,tentwentysix,tentwentyseven}
    console.log(this.initialDraftReport)
    const currentInitialDraftReport = this.initialDraftReport;
    this.sele.liquid[19]=currentInitialDraftReport[19];
    console.log(currentInitialDraftReport);
    console.log(this.sele.liquid[19])
    console.log(this.sele.liquid);
  this.sele.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    const reportdata = data[0];
    console.log(JSON.parse(reportdata.InitialDraftReport));
    var init=JSON.parse(reportdata.InitialDraftReport);
    if(init!=null){
      init[19]=this.sele.liquid[19]
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
     init[19]=this.sele.liquid[19]
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
