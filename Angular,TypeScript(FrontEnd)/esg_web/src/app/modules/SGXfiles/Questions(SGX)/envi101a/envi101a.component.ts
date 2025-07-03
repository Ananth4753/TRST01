import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GhemissionsComponent } from 'app/modules/importdis/ghemissions/ghemissions.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { ElectriccalcComponent } from 'app/modules/importdis/electriccalc/electriccalc.component';
import { Scope2renewComponent } from 'app/modules/importdis/scope2renew/scope2renew.component';
import { Scope3calculatorsComponent } from 'app/modules/importdis/scope3calculators/scope3calculators.component';
import { Scope3avgComponent } from 'app/modules/importdis/scope3avg/scope3avg.component';
import { SelectsgxService } from '../../selectsgx/selectsgx.service';
import { CreatereportforsgxService } from '../../createreportforsgx/createreportforsgx.service';
import { Scope3category3Component } from 'app/modules/importdis/scope3category3/scope3category3.component';
import { Scope3category4Component } from 'app/modules/importdis/scope3category4/scope3category4.component';
import { Scope3category5Component } from 'app/modules/importdis/scope3category5/scope3category5.component';
import { Scope3category7Component } from 'app/modules/importdis/scope3category7/scope3category7.component';
import { Scope3category10Component } from 'app/modules/importdis/scope3category10/scope3category10.component';
import { Scope3category11Component } from 'app/modules/importdis/scope3category11/scope3category11.component';
import { Scope3category14Component } from 'app/modules/importdis/scope3category14/scope3category14.component';
import { Scope3category15Component } from 'app/modules/importdis/scope3category15/scope3category15.component';
import { Scope3category813Component } from 'app/modules/importdis/scope3category813/scope3category813.component';
import { Scope3hotelComponent } from 'app/modules/importdis/scope3hotel/scope3hotel.component';
import { UploadevidenceforsgxComponent } from '../uploadevidenceforsgx/uploadevidenceforsgx.component';
import { data } from 'jquery';
import { AuthService } from 'app/core/auth/auth.service';
@Component({
  selector: 'app-envi101a',
  templateUrl: './envi101a.component.html',
  styleUrls: ['./envi101a.component.scss']
})
export class Envi101aComponent implements OnInit {
  envform:FormGroup;
  @Input() envi1:any;
  @Input() guidance: any;
  @Input() description: any;
  scopeonevalue:any;
  scopetwovalue:any;
  totalscopevalue:number;
  scope3calc1:any;
  scope3calc2:any;
  scope3calc3:any;
  scope3calc4:any;
  scope3calc5:any;
  scope3calc6:any;
  scope3calc7:any;
  scope3calc8:any;
  scope3calc9:any;
  scope3calc10:any;
  scope3calc11:any;
  scope3calc12:any;
  scope3calc13:any;
  scope3calc14:any;
  scope3calc15:any;
  scope3calc16:any;
  scope3calc17:any;
totalscope3sum:any;
dghgemi4Value:any;
reportid:any;
arr:any [];
totalcalculatorvalue:any;
initialDraftReport: any = {};
orgId:any
  constructor(private fb:FormBuilder, public dialog: MatDialog,private is:ImportdisService, private sgx:SelectsgxService, private aa: ActivatedRoute,private cs: CreatereportforsgxService,public AuthService:AuthService ) { }

  ngOnInit() {
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.orgId=this.AuthService.user.orgId
    this.envform = this.fb.group({
      Dghgemi1: [''],
      Dghgemi2: [''],
      Dghgemi3:[''],
      Dghgemi4: [''],
      Dghgemi5: [''],
      Dghgemi6: [''],
      Dghgemi7: [''],
      Dghgemi8:[''],
      Dghgemi9: [''],
      Dghgemi10: [''],
      Dghgemi11: [''],
      Dghgemi12: [''],
      Dghgemi13:[''],
      Dghgemi14:[''],
      Dghgemi15:[''],
      Dghgemi16:[''],
      Dghgemi17:[''],
      Dghgemi18:[''],
      Dghgemi19:[''],
      Dghgemi20:[''],
      Dghgemi21:[''],
      Dghgemi22:[''],
     
    });

    // this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    //   const reportdata = data[0];
    //   if (reportdata && reportdata.InitialDraftReport) {
    //     this.initialDraftReport = JSON.parse(reportdata.InitialDraftReport);
    //     this.envform.patchValue(this.initialDraftReport);
    //     this.envform.patchValue({
    //       Dghgemi1: this.initialDraftReport['Question1'],
    //       Dghgemi2: this.initialDraftReport['Question2'],
    //       Dghgemi3: this.initialDraftReport['Question3'],
    //       Dghgemi4: this.initialDraftReport['Question4'],
    //       Dghgemi5: this.initialDraftReport['Question5'],
    //       Dghgemi6: this.initialDraftReport['Question6'],
    //       Dghgemi7: this.initialDraftReport['Question7'],
    //       Dghgemi8: this.initialDraftReport['Question8'],
    //       Dghgemi9: this.initialDraftReport['Question9'],
    //       Dghgemi10: this.initialDraftReport['Question10'],
    //       Dghgemi11: this.initialDraftReport['Question11'],
    //       Dghgemi12: this.initialDraftReport['Question12'],
    //       Dghgemi13: this.initialDraftReport['Question13'],
    //       Dghgemi14: this.initialDraftReport['Question14'],
    //       Dghgemi15: this.initialDraftReport['Question15'],
    //       Dghgemi16: this.initialDraftReport['Question16'],
    //       Dghgemi17: this.initialDraftReport['Question17'],
    //       Dghgemi18: this.initialDraftReport['Question18'],
    //       Dghgemi19: this.initialDraftReport['Question19'],
    //       Dghgemi20: this.initialDraftReport['Question20'],
    //       Dghgemi21: this.initialDraftReport['Question21'],
    //       Dghgemi22: this.initialDraftReport['Question22']
    //     });
    //   }
    // });

    this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport = JSON.parse(reportdata.InitialDraftReport);
        console.log(this.initialDraftReport);
        this.envform.patchValue(this.initialDraftReport);
        this.envform.patchValue({
          Dghgemi1: this.initialDraftReport[0]['Question1'],
          Dghgemi2: this.initialDraftReport[0]['Question2'],
          Dghgemi3: this.initialDraftReport[0]['Question3'],
          Dghgemi4: this.initialDraftReport[0]['Question4'],
          Dghgemi5: this.initialDraftReport[0]['Question5'],
          Dghgemi6: this.initialDraftReport[0]['Question6'],
          Dghgemi7: this.initialDraftReport[0]['Question7'],
          Dghgemi8: this.initialDraftReport[0]['Question8'],
          Dghgemi9: this.initialDraftReport[0]['Question9'],
          Dghgemi10: this.initialDraftReport[0]['Question10'],
          Dghgemi11: this.initialDraftReport[0]['Question11'],
          Dghgemi12: this.initialDraftReport[0]['Question12'],
          Dghgemi13: this.initialDraftReport[0]['Question13'],
          Dghgemi14: this.initialDraftReport[0]['Question14'],
          Dghgemi15: this.initialDraftReport[0]['Question15'],
          Dghgemi16: this.initialDraftReport[0]['Question16'],
          Dghgemi17: this.initialDraftReport[0]['Question17'],
          Dghgemi18: this.initialDraftReport[0]['Question18'],
          Dghgemi19: this.initialDraftReport[0]['Question19'],
          Dghgemi20: this.initialDraftReport[0]['Question20'],
          Dghgemi21: this.initialDraftReport[0]['Question21'],
          Dghgemi22: this.initialDraftReport[0]['Question22'],
         
        });
      }
    });
  
  }
  openghemiicalc(data) {
    const dialogRef = this.dialog.open(GhemissionsComponent, {
        autoFocus: false,
        data: { data },
    });
    dialogRef.afterClosed().subscribe((result) => {
        console.log(this.is.metricsCO2e);
        this.envform
            .get('Dghgemi2')
            .setValue(this.is.metricsCO2e.toLocaleString());
        console.log(this.is.metricsCO2e);
        if (result) {
            console.log(result);
        }
    });
}

  
openelectriccalculator(data) {
  const dialogRef = this.dialog.open(ElectriccalcComponent, {
      autoFocus: false,
      data: { data },
  });
  dialogRef.afterClosed().subscribe((result) => {
      console.log(this.is.electricsum);
      this.envform
          .get('Dghgemi22')
          .setValue(this.is.electricsum.toLocaleString());
      if (result) {
          console.log(result);
      }
  });
}
openelectriccalculator1(data) {
  const dialogRef = this.dialog.open(Scope2renewComponent, {
      autoFocus: false,
      data: { data },
  });
  dialogRef.afterClosed().subscribe((result) => {
      console.log(this.is.scope2marketbased);
      this.envform
          .get('Dghgemi3')
          .setValue(this.is.scope2marketbased.toLocaleString());
      if (result) {
          console.log(result);
      }
  });
}
calculateAllscopeSum() {
  console.log(this.envform.get('Dghgemi2').value)
  const calc1 = (this.envform.get('Dghgemi2').value);
  var saver1= calc1.replace(/,/g, '');;
  var saver2=parseFloat(saver1);
  const calc2 = (this.envform.get('Dghgemi3').value);
  var saver3= calc2.replace(/,/g, '');;
  var saver4=parseFloat(saver3);
  const calc3 = (this.envform.get('Dghgemi4').value).toString();
  if(calc3.includes(',')){
  var saver5= calc3.replace(/,/g, '');;
  var saver6=parseFloat(saver5);
  }
  else{
  
    var saver6=parseFloat(calc3); 
  }
 
  const calc4 = (this.envform.get('Dghgemi22').value);
  var saver7= calc4.replace(',','');
  var saver8=parseFloat(saver7);
console.log(saver2,saver4,saver6,saver8)
  const sum = saver2 +saver4 +saver6+saver8;
  console.log(sum);
  this.envform.get('Dghgemi1').setValue(sum);
}


calculateAllSum() {

const quant1 = (this.envform.get('Dghgemi5').value);
var saver1= quant1.replace(/,/g, '');;
var saver2=parseFloat(saver1);
const quant2 = (this.envform.get('Dghgemi6').value);
var saver3= quant2.replace(/,/g, '');;
var saver4=parseFloat(saver3);
const quant3 = (this.envform.get('Dghgemi7').value);
var saver5= quant3.replace(/,/g, '');;
var saver6=parseFloat(saver5);
const quant4 = (this.envform.get('Dghgemi8').value);
var saver7= quant4.replace(/,/g, '');;
var saver8=parseFloat(saver7);
const quant5 = (this.envform.get('Dghgemi9').value);
var saver9= quant5.replace(/,/g, '');;
var saver10=parseFloat(saver9);
const quant6 = (this.envform.get('Dghgemi10').value);
var saver11= quant6.replace(/,/g, '');;
var saver12=parseFloat(saver11);
const quant7 = (this.envform.get('Dghgemi11').value);
var saver13= quant7.replace(/,/g, '');;
var saver14=parseFloat(saver13);
const quant8 = (this.envform.get('Dghgemi12').value);
var saver15= quant8.replace(/,/g, '');;
var saver16=parseFloat(saver15);
const quant9 = (this.envform.get('Dghgemi13').value);
var saver17= quant9.replace(/,/g, '');;
var saver18=parseFloat(saver17);
const quant10 = (this.envform.get('Dghgemi14').value);
var saver19= quant10.replace(/,/g, '');;
var saver20=parseFloat(saver19);
const quant11 = (this.envform.get('Dghgemi15').value);
var saver21= quant11.replace(/,/g, '');;
var saver22=parseFloat(saver21);
const quant12 = (this.envform.get('Dghgemi16').value);
var saver23= quant12.replace(/,/g, '');;
var saver24=parseFloat(saver23);
const quant13 = (this.envform.get('Dghgemi17').value);
var saver25= quant13.replace(/,/g, '');;
var saver26=parseFloat(saver25);
const quant14 = (this.envform.get('Dghgemi18').value);
var saver27= quant14.replace(/,/g, '');;
var saver28=parseFloat(saver27);
const quant15 = (this.envform.get('Dghgemi19').value);
var saver29= quant15.replace(/,/g, '');;
var saver30=parseFloat(saver29);
const quant16 = (this.envform.get('Dghgemi20').value);
var saver31= quant16.replace(/,/g, '');;
var saver32=parseFloat(saver31);
const quant17 = (this.envform.get('Dghgemi21').value);
var saver33= quant17.replace(/,/g, '');;
var saver34=parseFloat(saver33);
 
  const sum =
  saver2 +
  saver4 +
  saver6 +
  saver8 +
  saver10 +
  saver12 +
  saver14 +
  saver16 +
  saver18 +
  saver20 +
  saver22 +
  saver24 +
  saver26 +
  saver28 +
  saver30 +
  saver32 +
  saver34;
 
  console.log(sum);
  this.envform.get('Dghgemi4').setValue(sum);
}
openscope3calculators1(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3calculatorsComponent, {
      autoFocus: false,
      data: { data },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi5')
          .setValue(this.is.scope3specificsum.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}
openscope3calculators2(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3avgComponent, {
      autoFocus: false,
      data: { data },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi6')
          .setValue(this.is.scope3avg.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}
openscope3calculators3(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3category3Component, {
      autoFocus: false,
      data: { data },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi7')
          .setValue(this.is.scope3category3.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}
openscope3calculators4(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3category4Component, {
      autoFocus: false,
      data: { downstreamValue: 'upstream' },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi8')
          .setValue(this.is.scope3category4.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}
openscope3calculators5(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3category5Component, {
      autoFocus: false,
      data: { downstreamValue: 'five' },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi9')
          .setValue(this.is.scope3category5.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}
openscope3calculators6(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3hotelComponent, {
      autoFocus: false,
      data: { data },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi10')
          .setValue(this.is.scope3hotel.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}
openscope3calculators7(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3category7Component, {
      autoFocus: false,
      data: { data },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi11')
          .setValue(this.is.scope3category7.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}
openscope3calculators8(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3category813Component, {
      autoFocus: false,
      data: { downstreamValue: 'eight' },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi12')
          .setValue(this.is.scope3category813.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}
openscope3calculators9(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3calculatorsComponent, {
      autoFocus: false,
      data: { data },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi13')
          .setValue(this.is.scope3specificsum.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}
openscope3calculators10(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3category4Component, {
      autoFocus: false,
      data: { downstreamValue: 'downstream' },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi14')
          .setValue(this.is.scope3category4.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}
openscope3calculators11(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3category10Component, {
      autoFocus: false,
      data: { data },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi15')
          .setValue(this.is.scope3category10.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}
openscope3calculators12(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3category11Component, {
      autoFocus: false,
      data: { data },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi16')
          .setValue(this.is.scope3category11.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}
openscope3calculators13(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3category5Component, {
      autoFocus: false,
      data: { data },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi17')
          .setValue(this.is.scope3category5.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}
openscope3calculators14(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3category813Component, {
      autoFocus: false,
      data: { downstreamValue: '13' },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi18')
          .setValue(this.is.scope3category813.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}
openscope3calculators15(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3category14Component, {
      autoFocus: false,
      data: { data },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi19')
          .setValue(this.is.scope3category14.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}
openscope3calculators16(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3category15Component, {
      autoFocus: false,
      data: { data },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi20')
          .setValue(this.is.scope3category15.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}
openscope3calculators17(data) {
  console.log(data);
  const dialogRef = this.dialog.open(Scope3calculatorsComponent, {
      autoFocus: false,
      data: { data },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(this.is.userentered);
      this.envform
          .get('Dghgemi21')
          .setValue(this.is.scope3specificsum.toLocaleString());
       console.log(this.is.userentered); 
      if (result) {
          console.log(result);
      }
  });
}

onSave() {
   
  var Question1 = this.envform.get('Dghgemi1').value;
  var  Question2 = this.envform.get('Dghgemi2').value;
  var  Question3 = this.envform.get('Dghgemi3').value;
  var  Question4 = this.envform.get('Dghgemi4').value;
  var  Question5 = this.envform.get('Dghgemi5').value;
  var  Question6 = this.envform.get('Dghgemi6').value;
  var  Question7 = this.envform.get('Dghgemi7').value;
  var  Question8 = this.envform.get('Dghgemi8').value;
  var  Question9 = this.envform.get('Dghgemi9').value;
  var Question10 = this.envform.get('Dghgemi10').value;
  var Question11 = this.envform.get('Dghgemi11').value;
  var Question12 = this.envform.get('Dghgemi12').value;
  var Question13 = this.envform.get('Dghgemi13').value;
  var Question14 = this.envform.get('Dghgemi14').value;
  var Question15 = this.envform.get('Dghgemi15').value;
  var Question16 = this.envform.get('Dghgemi16').value;
  var Question17 = this.envform.get('Dghgemi17').value;
  var Question18 = this.envform.get('Dghgemi18').value;
  var Question19 = this.envform.get('Dghgemi19').value;
  var Question20 = this.envform.get('Dghgemi20').value;
  var Question21 = this.envform.get('Dghgemi21').value;
  var Question22 = this.envform.get('Dghgemi22').value;
 
  this.initialDraftReport[0] = {Question1,Question2,Question3,Question4,Question5,Question6,Question7,Question8,Question9,Question10,Question11,Question12,Question13,Question14,Question15,Question16,Question17,Question18,Question19,Question20,Question21,Question22}
  // this.sgx.sgxanswers[0]=this.initialDraftReport;
  console.log(this.initialDraftReport);
  const currentInitialDraftReport = this.initialDraftReport;
  const updatedInitialDraftReport = {
    ...currentInitialDraftReport,
    
  };
  this.sgx.sgxanswers[0]=currentInitialDraftReport[0];
  // this.sgx.sgxanswers[1]=this.fmlife[1];
  // this.sgx.sgxanswers[2]=this.fmlife[2];
  // console.log(currentInitialDraftReport);
  // console.log(this.sgx.sgxanswers[0])
  // console.log(this.arr);
  this.sgx.GetSGX_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      console.log(JSON.parse(reportdata.InitialDraftReport));
      var init=JSON.parse(reportdata.InitialDraftReport);
      if(init!=null){
      init[0]=this.sgx.sgxanswers[0]
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
     init[0]=this.sgx.sgxanswers[0]
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
  const dialogRef = this.dialog.open(UploadevidenceforsgxComponent, {
    autoFocus: false,
    data: { ReportId, GuidanceNumber, OrgId, ques },
  });
}
}
