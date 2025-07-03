import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Scope3calculatorsComponent } from 'app/modules/importdis/scope3calculators/scope3calculators.component';
import { Scope3avgComponent } from 'app/modules/importdis/scope3avg/scope3avg.component';
import { Scope3category3Component } from 'app/modules/importdis/scope3category3/scope3category3.component';
import { Scope3category4Component } from 'app/modules/importdis/scope3category4/scope3category4.component';
import { Scope3category5Component } from 'app/modules/importdis/scope3category5/scope3category5.component';
import { Scope3hotelComponent } from 'app/modules/importdis/scope3hotel/scope3hotel.component';
import { Scope3category7Component } from 'app/modules/importdis/scope3category7/scope3category7.component';
import { Scope3category813Component } from 'app/modules/importdis/scope3category813/scope3category813.component';
import { Scope3category10Component } from 'app/modules/importdis/scope3category10/scope3category10.component';
import { Scope3category11Component } from 'app/modules/importdis/scope3category11/scope3category11.component';
import { Scope3category14Component } from 'app/modules/importdis/scope3category14/scope3category14.component';
import { Scope3category15Component } from 'app/modules/importdis/scope3category15/scope3category15.component';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { ActivatedRoute } from '@angular/router';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';

import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector: 'app-principal6b',
    templateUrl: './principal6b.component.html',
    styleUrls: ['./principal6b.component.css'],
})
export class Principal6bComponent implements OnInit {
    principalform: FormGroup;
    @Input() princi6l: any;
    lookupdtl: any;
    ifyesChangelast5: boolean = false;
    ifyesChangelast4:boolean=false;
    ifyesChangelast3:boolean=false;
    ifyesChangelast2:boolean=false;
    YesorNo: any;
    currentyear: any;
    previousyear: any;
    total1: any;
    total: any;
    city:any;
    countries:any;
    peta: any;
    newAttribute: {
        Subject: string;
        Assessments: string;
        Labs: string;
        Labs2: string;
    }; reportid:any;
    selectedValue:any;
    initialDraftReport1: any = {};
    orgId:any;
    constructor(private fb: FormBuilder, private is: ImportdisService,public AuthService:AuthService,private ss:SelectbrsrService,public dialog: MatDialog,private cs:CreatereportforbrsrService,private aa: ActivatedRoute) {
        this.lookupdtl = [];
    }

    ngOnInit() {
        this.orgId=this.AuthService.user.orgId
        this.reportid = this.aa.snapshot.paramMap.get('reportId');


        this.principalform = this.fb.group({
            shi:[''],
            shi1:[''],
            shi2:[''],
            shi3:[''],
            shi4:[''],
            shi5:[''],
            shi6:[''],
            shi7:[''],
            shi8:[''],
            shi9:[''],
            shi10:[''],
            shi11:[''],
            shi12:[''],
            shi13:[''],
            shi14:[''],
            shi15:[''],
            shi16:[''],
            shi17:[''],
            shi18:[''],
            shi19:[''],
            shi20:[''],
            shi21:[''],
            shi22:[''],
            shi23:[''],
            shi24:[''],
            shi25:[''],
            shi26:[''],
            shi27:[''],
            shi28:[''],
            shi29:[''],
            shi30:[''],
            shi31:[''],
            shi32:[''],
            shi33:[''],
            shi34:[''],
            shi35:[''],
            shi36:[''],
            shi37:[''],
            shi38:[''],
            shi39:[''],
          countdrop:[''],
          citydrop:[''],
            last5: [''],
            last2: [''],
            addofpla:[''],
            moimore:[''],
            lastall: [''],
            lastal1: [''],
            lastal2: [''],
            lastal3: [''],
            lastal4: [''],
            lastal5: [''],
            lastal6: [''],
            lastal7: [''],
            last4: [''],
            last3: [''],
            noine1: [''],
            noine2: [''],
            noine3: [''],
            noine4: [''],
            noine5: [''],
            noine6: [''],
            noine7: [''],
            noine8: [''],
            noine9: [''],
            one21: [''],
            one20: [''],
            one19: [''],
            one18: [''],
            one17: [''],
            one16: [''],
            one15: [''],
            one14: [''],
            one13: [''],
            one12: [''],
            one11: [''],
            one10: [''],
            one9: [''],
            one8: [''],
            one7: [''],
            one6: [''],
            one5: [''],
            one4: [''],
            one3: [''],
            one2: [''],
            one1: [''],
            one: [''],
            two: [''],
            two1: [''],
            two2: [''],
            two3: [''],
            two4: [''],
            two5: [''],
            two6: [''],
            two7: [''],
            two8: [''],
            two9: [''],
            two10: [''],
            two11: [''],
            two12: [''],
            two14: [''],
            two13: [''],
            two15: [''],
            sumallcal:[''],
            sumallcal1:[''],
            upstream1:[''],
            satish1:[''],
            upstream2:[''],
            satish2:[''],
            upstream3:[''],
            satish3:[''],
            upstream4:[''],
            satish4:[''],
            upstream5:[''],
            satish5:[''],
            upstream6:[''],
            satish6:[''],
            upstream7:[''],
            satish7:[''],
            upstream8:[''],
            satish8:[''],
            upstream9:[''],
            satish9:[''],
            downstream1:[''],
            shiva1:[''],
            downstream2:[''],
            shiva2:[''],
            downstream3:[''],
            shiva3:[''],
            downstream4:[''],
            shiva4:[''],
            downstream5:[''],
            shiva5:[''],
            downstream6:[''],
            shiva6:[''],
            downstream7:[''],
            shiva7:[''],
            downstream8:[''],
            shiva8:[''],
            turndownup:[''],
            mtco38:[''],
            mtco39:[''],
            mtco40:['']
        });

//for saving and retrieving
this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    const reportdata = data[0];
    console.log(reportdata);
    if (reportdata && reportdata.InitialDraftReport) {
      this.initialDraftReport1 = JSON.parse(reportdata.InitialDraftReport);
    console.log(this.initialDraftReport1);

    this.lookupdtl=JSON.parse(this.initialDraftReport1[20]['Table1']);
   console.log(this.lookupdtl);

    }
  });
  
 this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    const reportdata = data[0];
    if (reportdata && reportdata.InitialDraftReport) {
      this.initialDraftReport1 = JSON.parse(reportdata.InitialDraftReport);
      this.principalform.patchValue(this.initialDraftReport1);
      this.principalform.patchValue({
       
 lastall: this.initialDraftReport1[20]['PolicyQuestion1'],
two: this.initialDraftReport1[20]['PolicyQuestion2'],
two1: this.initialDraftReport1[20]['PolicyQuestion3'],
//lastal1: this.initialDraftReport1[20]['PolicyQuestion4'],
two2: this.initialDraftReport1[20]['PolicyQuestion5'],
two3: this.initialDraftReport1[20]['PolicyQuestion6'],
//lastal7: this.initialDraftReport1[20]['PolicyQuestion7'],
two4: this.initialDraftReport1[20]['PolicyQuestion8'],
two5: this.initialDraftReport1[20]['PolicyQuestion9'],
//lastal2: this.initialDraftReport1[20]['PolicyQuestion10'],
two6: this.initialDraftReport1[20]['PolicyQuestion11'],
two7: this.initialDraftReport1[20]['PolicyQuestion12'],
//lastal3: this.initialDraftReport1[20]['PolicyQuestion13'],
two8: this.initialDraftReport1[20]['PolicyQuestion14'],
two9: this.initialDraftReport1[20]['PolicyQuestion15'],
//lastal4: this.initialDraftReport1[20]['PolicyQuestion16'],
two10: this.initialDraftReport1[20]['PolicyQuestion17'],
two11: this.initialDraftReport1[20]['PolicyQuestion18'],
//lastal5: this.initialDraftReport1[20]['PolicyQuestion19'],
two12: this.initialDraftReport1[20]['PolicyQuestion20'],
two13: this.initialDraftReport1[20]['PolicyQuestion21'],
//lastal6: this.initialDraftReport1[20]['PolicyQuestion22'],
two14: this.initialDraftReport1[20]['PolicyQuestion23'],
two15: this.initialDraftReport1[20]['PolicyQuestion24'],
last3: this.initialDraftReport1[20]['PolicyQuestion25'],
noine1: this.initialDraftReport1[20]['PolicyQuestion26'],
one: this.initialDraftReport1[20]['PolicyQuestion27'],
one1: this.initialDraftReport1[20]['PolicyQuestion28'],
one2: this.initialDraftReport1[20]['PolicyQuestion29'],
one3: this.initialDraftReport1[20]['PolicyQuestion30'],
one4: this.initialDraftReport1[20]['PolicyQuestion31'],
one5: this.initialDraftReport1[20]['PolicyQuestion32'],
one6: this.initialDraftReport1[20]['PolicyQuestion33'],
one7: this.initialDraftReport1[20]['PolicyQuestion34'],
one8: this.initialDraftReport1[20]['PolicyQuestion35'],
one9: this.initialDraftReport1[20]['PolicyQuestion36'],
one10: this.initialDraftReport1[20]['PolicyQuestion37'],
one11: this.initialDraftReport1[20]['PolicyQuestion38'],
one12: this.initialDraftReport1[20]['PolicyQuestion39'],
one13: this.initialDraftReport1[20]['PolicyQuestion40'],
one14: this.initialDraftReport1[20]['PolicyQuestion41'],
one15: this.initialDraftReport1[20]['PolicyQuestion42'],
one16: this.initialDraftReport1[20]['PolicyQuestion43'],
one17: this.initialDraftReport1[20]['PolicyQuestion44'],
one18: this.initialDraftReport1[20]['PolicyQuestion45'],
one19: this.initialDraftReport1[20]['PolicyQuestion46'],
one20: this.initialDraftReport1[20]['PolicyQuestion47'],
one21: this.initialDraftReport1[20]['PolicyQuestion48'],
last4: this.initialDraftReport1[20]['PolicyQuestion49'],
noine2: this.initialDraftReport1[20]['PolicyQuestion50'],
countdrop:this.initialDraftReport1[20]['PolicyQuestion51'],
citydrop:this.initialDraftReport1[20]['PolicyQuestion52'],
addofpla:this.initialDraftReport1[20]['PolicyQuestion53'],
moimore:this.initialDraftReport1[20]['PolicyQuestion54'],
shi: this.initialDraftReport1[20]['PolicyQuestion55'],
shi1: this.initialDraftReport1[20]['PolicyQuestion56'],
shi2: this.initialDraftReport1[20]['PolicyQuestion57'],
shi3: this.initialDraftReport1[20]['PolicyQuestion58'],
shi4: this.initialDraftReport1[20]['PolicyQuestion59'],
shi5: this.initialDraftReport1[20]['PolicyQuestion60'],
shi6: this.initialDraftReport1[20]['PolicyQuestion61'],
shi7: this.initialDraftReport1[20]['PolicyQuestion62'],
shi8: this.initialDraftReport1[20]['PolicyQuestion63'],
shi9: this.initialDraftReport1[20]['PolicyQuestion64'],
shi10: this.initialDraftReport1[20]['PolicyQuestion65'],
shi11: this.initialDraftReport1[20]['PolicyQuestion66'],
shi34: this.initialDraftReport1[20]['PolicyQuestion67'],
shi35: this.initialDraftReport1[20]['PolicyQuestion68'],
shi36: this.initialDraftReport1[20]['PolicyQuestion69'],
shi37: this.initialDraftReport1[20]['PolicyQuestion70'],
shi38: this.initialDraftReport1[20]['PolicyQuestion71'],
shi39: this.initialDraftReport1[20]['PolicyQuestion72'],
shi12: this.initialDraftReport1[20]['PolicyQuestion73'],
shi13: this.initialDraftReport1[20]['PolicyQuestion74'],
shi14: this.initialDraftReport1[20]['PolicyQuestion75'],
shi15: this.initialDraftReport1[20]['PolicyQuestion76'],
shi16: this.initialDraftReport1[20]['PolicyQuestion77'],
shi17: this.initialDraftReport1[20]['PolicyQuestion78'],
shi18: this.initialDraftReport1[20]['PolicyQuestion79'],
shi19: this.initialDraftReport1[20]['PolicyQuestion80'],
shi20: this.initialDraftReport1[20]['PolicyQuestion81'],
shi21: this.initialDraftReport1[20]['PolicyQuestion82'],
shi22: this.initialDraftReport1[20]['PolicyQuestion83'],
shi23: this.initialDraftReport1[20]['PolicyQuestion84'],
shi24: this.initialDraftReport1[20]['PolicyQuestion85'],
shi25: this.initialDraftReport1[20]['PolicyQuestion86'],
shi26: this.initialDraftReport1[20]['PolicyQuestion87'],
shi27: this.initialDraftReport1[20]['PolicyQuestion88'],
shi28: this.initialDraftReport1[20]['PolicyQuestion89'],
shi29: this.initialDraftReport1[20]['PolicyQuestion90'],
shi30: this.initialDraftReport1[20]['PolicyQuestion91'],
shi31: this.initialDraftReport1[20]['PolicyQuestion92'],
shi32: this.initialDraftReport1[20]['PolicyQuestion93'],
shi33: this.initialDraftReport1[20]['PolicyQuestion94'],
last2:this.initialDraftReport1[20]['PolicyQuestion95'],
noine3:this.initialDraftReport1[20]['PolicyQuestion96'],
sumallcal: this.initialDraftReport1[20]['PolicyQuestion97'],
sumallcal1: this.initialDraftReport1[20]['PolicyQuestion98'],
upstream1: this.initialDraftReport1[20]['PolicyQuestion99'],
satish1: this.initialDraftReport1[20]['PolicyQuestion100'],
upstream2: this.initialDraftReport1[20]['PolicyQuestion101'],
satish2: this.initialDraftReport1[20]['PolicyQuestion102'],
upstream3: this.initialDraftReport1[20]['PolicyQuestion103'],
satish3: this.initialDraftReport1[20]['PolicyQuestion104'],
upstream4: this.initialDraftReport1[20]['PolicyQuestion105'],
satish4: this.initialDraftReport1[20]['PolicyQuestion106'],
upstream5: this.initialDraftReport1[20]['PolicyQuestion107'],
satish5: this.initialDraftReport1[20]['PolicyQuestion108'],
upstream6: this.initialDraftReport1[20]['PolicyQuestion109'],
satish6: this.initialDraftReport1[20]['PolicyQuestion110'],
upstream7: this.initialDraftReport1[20]['PolicyQuestion111'],
satish7: this.initialDraftReport1[20]['PolicyQuestion112'],
upstream8: this.initialDraftReport1[20]['PolicyQuestion113'],
satish8: this.initialDraftReport1[20]['PolicyQuestion114'],
upstream9: this.initialDraftReport1[20]['PolicyQuestion115'],
satish9: this.initialDraftReport1[20]['PolicyQuestion116'],
downstream1: this.initialDraftReport1[20]['PolicyQuestion117'],
shiva1: this.initialDraftReport1[20]['PolicyQuestion118'],
downstream2: this.initialDraftReport1[20]['PolicyQuestion119'],
shiva2: this.initialDraftReport1[20]['PolicyQuestion120'],
downstream3: this.initialDraftReport1[20]['PolicyQuestion121'],
shiva3: this.initialDraftReport1[20]['PolicyQuestion122'],
downstream4: this.initialDraftReport1[20]['PolicyQuestion123'],
shiva4: this.initialDraftReport1[20]['PolicyQuestion124'],
downstream5: this.initialDraftReport1[20]['PolicyQuestion125'],
shiva5: this.initialDraftReport1[20]['PolicyQuestion126'],
downstream6: this.initialDraftReport1[20]['PolicyQuestion127'],
shiva6: this.initialDraftReport1[20]['PolicyQuestion128'],
downstream7: this.initialDraftReport1[20]['PolicyQuestion129'],
shiva7: this.initialDraftReport1[20]['PolicyQuestion130'],
downstream8: this.initialDraftReport1[20]['PolicyQuestion131'],
shiva8: this.initialDraftReport1[20]['PolicyQuestion132'],
turndownup: this.initialDraftReport1[20]['PolicyQuestion133'],
mtco38: this.initialDraftReport1[20]['PolicyQuestion134'],
mtco39: this.initialDraftReport1[20]['PolicyQuestion135'],
mtco40: this.initialDraftReport1[20]['PolicyQuestion136'],
last5:this.initialDraftReport1[20]['PolicyQuestion137'],
noine4:this.initialDraftReport1[20]['PolicyQuestion138'],
noine5:this.initialDraftReport1[20]['PolicyQuestion139'],
noine6:this.initialDraftReport1[20]['PolicyQuestion140'],
noine7:this.initialDraftReport1[20]['PolicyQuestion141'],
noine8:this.initialDraftReport1[20]['PolicyQuestion142'],
noine9:this.initialDraftReport1[20]['PolicyQuestion143'],

      });
  
    }
  });
        this.addFieldValue();
        this.is.getLookupDetailsByHdrId(2).subscribe((Data) => {
            this.YesorNo = Data;
        });
        this.is.getLookupDetailsByHdrId(9).subscribe((Data) => {
            this.peta = Data;
        });
        this.is.getCountryDetails().subscribe((data)=>{
          this.countries=data;
        })
        this.ss.getCityState().subscribe((data)=>{
          this.city=data
        })
        this.currentyear = new Date().getFullYear();
        this.previousyear = this.currentyear - 1;
//Question1 Renewable
  this.principalform.get('two').valueChanges.subscribe(() => this.finalc1());
  this.principalform.get('two1').valueChanges.subscribe(() => this.finalc1());
  this.principalform.get('two2').valueChanges.subscribe(() => this.finalc1());
  this.principalform.get('two3').valueChanges.subscribe(() => this.finalc1());
  this.principalform.get('two4').valueChanges.subscribe(() => this.finalc1());
  this.principalform.get('two5').valueChanges.subscribe(() => this.finalc1());

  //Question1 Non-Renewable
  this.principalform.get('two8').valueChanges.subscribe(() => this.finalc2());
  this.principalform.get('two9').valueChanges.subscribe(() => this.finalc2());
  this.principalform.get('two10').valueChanges.subscribe(() => this.finalc2());
  this.principalform.get('two11').valueChanges.subscribe(() => this.finalc2());
  this.principalform.get('two12').valueChanges.subscribe(() => this.finalc2());
  this.principalform.get('two13').valueChanges.subscribe(() => this.finalc2());
  //Question2
  this.principalform.get('one').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one1').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one2').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one3').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one4').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one5').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one6').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one7').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one8').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one9').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one10').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one11').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one12').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one13').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one14').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one15').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one16').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one17').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one18').valueChanges.subscribe(() => this.finalc());
  this.principalform.get('one19').valueChanges.subscribe(() => this.finalc());
  //Question3a
  this.principalform.get('shi').valueChanges.subscribe(() => this.thirdfi());
  this.principalform.get('shi1').valueChanges.subscribe(() => this.thirdfi());
  this.principalform.get('shi2').valueChanges.subscribe(() => this.thirdfi());
  this.principalform.get('shi3').valueChanges.subscribe(() => this.thirdfi());
  this.principalform.get('shi4').valueChanges.subscribe(() => this.thirdfi());
  this.principalform.get('shi5').valueChanges.subscribe(() => this.thirdfi());
  this.principalform.get('shi6').valueChanges.subscribe(() => this.thirdfi());
  this.principalform.get('shi7').valueChanges.subscribe(() => this.thirdfi());
  this.principalform.get('shi8').valueChanges.subscribe(() => this.thirdfi());
  this.principalform.get('shi9').valueChanges.subscribe(() => this.thirdfi());
  //Question3b
  this.principalform.get('shi12').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi13').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi14').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi15').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi16').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi17').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi18').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi19').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi20').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi21').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi22').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi23').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi24').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi25').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi26').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi27').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi28').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi29').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi30').valueChanges.subscribe(() => this.thirdfi1());
  this.principalform.get('shi31').valueChanges.subscribe(() => this.thirdfi1());
    }
    addFieldValue() {
        this.newAttribute = {
            Subject: '',
            Assessments: '',
            Labs: '',
            Labs2: '',
        };
        this.lookupdtl.push(this.newAttribute);
    }
    alldrop(event){
      console.log(event.value);
      this.principalform.get('lastall').setValue(event.value)
    }
    deleteQ102a(i) {
        this.lookupdtl.splice(i, 1);
    }
    Changelast5(value) {
        if (value.value == 'Yes') {
            this.ifyesChangelast5 = true;
        } else {
            this.ifyesChangelast5 = false;
        }
    }
    Changelast4(value) {
      if (value.value == 'Yes') {
          this.ifyesChangelast4 = true;
      } else {
          this.ifyesChangelast4 = false;
      }
  }
  Changelast3(value) {
    if (value.value == 'Yes') {
        this.ifyesChangelast3 = true;
    } else {
        this.ifyesChangelast3 = false;
    }
}
Changelast2(value) {
  if (value.value == 'Yes') {
      this.ifyesChangelast2 = true;
  } else {
      this.ifyesChangelast2 = false;
  }
}
    finalc() {
        var a = parseFloat(
            this.principalform.get('one').value.replace(/\,/g, '')
        );
        var b = parseFloat(
            this.principalform.get('one1').value.replace(/\,/g, '')
        );
        var c = parseFloat(
            this.principalform.get('one2').value.replace(/\,/g, '')
        );
        var d = parseFloat(
            this.principalform.get('one3').value.replace(/\,/g, '')
        );
        var e = parseFloat(
            this.principalform.get('one4').value.replace(/\,/g, '')
        );
        var f = parseFloat(
            this.principalform.get('one5').value.replace(/\,/g, '')
        );
        var g = parseFloat(
            this.principalform.get('one6').value.replace(/\,/g, '')
        );
        var h = parseFloat(
            this.principalform.get('one7').value.replace(/\,/g, '')
        );
        var i = parseFloat(
            this.principalform.get('one8').value.replace(/\,/g, '')
        );
        var j = parseFloat(
            this.principalform.get('one9').value.replace(/\,/g, '')
        );
        var k = parseFloat(
            this.principalform.get('one10').value.replace(/\,/g, '')
        );
        var l = parseFloat(
            this.principalform.get('one11').value.replace(/\,/g, '')
        );
        var m = parseFloat(
            this.principalform.get('one12').value.replace(/\,/g, '')
        );
        var n = parseFloat(
            this.principalform.get('one13').value.replace(/\,/g, '')
        );
        var o = parseFloat(
            this.principalform.get('one14').value.replace(/\,/g, '')
        );
        var p = parseFloat(
            this.principalform.get('one15').value.replace(/\,/g, '')
        );
        var q = parseFloat(
            this.principalform.get('one16').value.replace(/\,/g, '')
        );
        var r = parseFloat(
            this.principalform.get('one17').value.replace(/\,/g, '')
        );
        var s = parseFloat(
            this.principalform.get('one18').value.replace(/\,/g, '')
        );
        var t = parseFloat(
            this.principalform.get('one19').value.replace(/\,/g, '')
        );
        // var u = parseFloat(
        //     this.principalform.get('one20').value.replace(/\,/g, '')
        // );
        // var v = parseFloat(
        //     this.principalform.get('one21').value.replace(/\,/g, '')
        // );
        this.total = a + c + e + g + i + k + m + o + q + s;
        const result1 = Number(this.total).toLocaleString('en-IN');
        this.total1 = b + d + f + h + j + l + n + p + r + t;
        const result2 = Number(this.total1).toLocaleString('en-IN');
        this.principalform.get('one20').setValue(result1);
        this.principalform.get('one21').setValue(result2);
    }
    thirdfi() {
        var a = parseFloat(
            this.principalform.get('shi').value.replace(/\,/g, '')
        );
        var b = parseFloat(
            this.principalform.get('shi1').value.replace(/\,/g, '')
        );
        var c = parseFloat(
            this.principalform.get('shi2').value.replace(/\,/g, '')
        );
        var d = parseFloat(
            this.principalform.get('shi3').value.replace(/\,/g, '')
        );
        var e = parseFloat(
            this.principalform.get('shi4').value.replace(/\,/g, '')
        );
        var f = parseFloat(
            this.principalform.get('shi5').value.replace(/\,/g, '')
        );
        var g = parseFloat(
            this.principalform.get('shi6').value.replace(/\,/g, '')
        );
        var h = parseFloat(
            this.principalform.get('shi7').value.replace(/\,/g, '')
        );
        var i = parseFloat(
            this.principalform.get('shi8').value.replace(/\,/g, '')
        );
        var j = parseFloat(
            this.principalform.get('shi9').value.replace(/\,/g, '')
        );
        this.total = a + c + e + g +i
        const result21 = Number(this.total).toLocaleString('en-IN');
        this.total1 = b + d + f +h +j
        const result2 = Number(this.total1).toLocaleString('en-IN');
        this.principalform.get('shi10').setValue(result21);
        this.principalform.get('shi11').setValue(result2);
    }
    thirdfi1() {
        var a = parseFloat(
            this.principalform.get('shi12').value.replace(/\,/g, '')
        );
        var b = parseFloat(
            this.principalform.get('shi13').value.replace(/\,/g, '')
        );
        var c = parseFloat(
            this.principalform.get('shi14').value.replace(/\,/g, '')
        );
        var d = parseFloat(
            this.principalform.get('shi15').value.replace(/\,/g, '')
        );
        var e = parseFloat(
            this.principalform.get('shi16').value.replace(/\,/g, '')
        );
        var f = parseFloat(
            this.principalform.get('shi17').value.replace(/\,/g, '')
        );
        var g = parseFloat(
            this.principalform.get('shi18').value.replace(/\,/g, '')
        );
        var h = parseFloat(
            this.principalform.get('shi19').value.replace(/\,/g, '')
        );
        var i = parseFloat(
            this.principalform.get('shi20').value.replace(/\,/g, '')
        );
        var j = parseFloat(
            this.principalform.get('shi21').value.replace(/\,/g, '')
        );
        var k = parseFloat(
            this.principalform.get('shi22').value.replace(/\,/g, '')
        );
        var l = parseFloat(
            this.principalform.get('shi23').value.replace(/\,/g, '')
        );
        var m = parseFloat(
            this.principalform.get('shi24').value.replace(/\,/g, '')
        );
        var n = parseFloat(
            this.principalform.get('shi25').value.replace(/\,/g, '')
        );
        var o = parseFloat(
            this.principalform.get('shi26').value.replace(/\,/g, '')
        );
        var p = parseFloat(
            this.principalform.get('shi27').value.replace(/\,/g, '')
        );
        var q = parseFloat(
            this.principalform.get('shi28').value.replace(/\,/g, '')
        );
        var r = parseFloat(
            this.principalform.get('shi29').value.replace(/\,/g, '')
        );
        var s = parseFloat(
            this.principalform.get('shi30').value.replace(/\,/g, '')
        );
        var t = parseFloat(
            this.principalform.get('shi31').value.replace(/\,/g, '')
        );
        this.total = a + c + e + g +i+k+m+o+q+s
        const result21 = Number(this.total).toLocaleString('en-IN');
        this.total1 = b + d + f +h +j+l+n+p+r+t
        const result2 = Number(this.total1).toLocaleString('en-IN');
        this.principalform.get('shi32').setValue(result21);
        this.principalform.get('shi33').setValue(result2);
    }
    finalc1() {
    //   var a = parseFloat(
    //       this.principalform.get('two').value.replace(/\,/g, '')
    //   );
    //   var b = parseFloat(
    //       this.principalform.get('two1').value.replace(/\,/g, '')
    //   );
    //   var c = parseFloat(
    //       this.principalform.get('two2').value.replace(/\,/g, '')
    //   );
    //   var d = parseFloat(
    //       this.principalform.get('two3').value.replace(/\,/g, '')
    //   );
    //   var e = parseFloat(
    //       this.principalform.get('two4').value.replace(/\,/g, '')
    //   );
    //   var f = parseFloat(
    //       this.principalform.get('two5').value.replace(/\,/g, '')
    //   );
    //   var g = parseFloat(
    //       this.principalform.get('two6').value.replace(/\,/g, '')
    //   );
    //   var h = parseFloat(
    //       this.principalform.get('two7').value.replace(/\,/g, '')
    //   );
    //   this.total = a + c + e
    //   this.total1 = b + d + f 
    //   this.principalform.get('two6').setValue(this.total);
    //   this.principalform.get('two7').setValue(this.total1);
    var a = parseFloat(this.principalform.get('two').value.replace(/\,/g, ''));
  var b = parseFloat(this.principalform.get('two1').value.replace(/\,/g, ''));
  var c = parseFloat(this.principalform.get('two2').value.replace(/\,/g, ''));
  var d = parseFloat(this.principalform.get('two3').value.replace(/\,/g, ''));
  var e = parseFloat(this.principalform.get('two4').value.replace(/\,/g, ''));
  var f = parseFloat(this.principalform.get('two5').value.replace(/\,/g, ''));

  this.total = a + c + e;
  const result1Formatted = this.total.toLocaleString('en-IN'); 
  this.total1 = b + d + f;
  const result2Formatted = this.total1.toLocaleString('en-IN');   
  // Update the values of 'two6' and 'two7' fields
  this.principalform.get('two6').setValue(result1Formatted);
  this.principalform.get('two7').setValue(result2Formatted);
  }
  finalc2() {
    var a = parseFloat(
        this.principalform.get('two8').value.replace(/\,/g, '')
    );
    var b = parseFloat(
        this.principalform.get('two9').value.replace(/\,/g, '')
    );
    var c = parseFloat(
        this.principalform.get('two10').value.replace(/\,/g, '')
    );
    var d = parseFloat(
        this.principalform.get('two11').value.replace(/\,/g, '')
    );
    var e = parseFloat(
        this.principalform.get('two12').value.replace(/\,/g, '')
    );
    var f = parseFloat(
        this.principalform.get('two13').value.replace(/\,/g, '')
    );
    // var g = parseFloat(
    //     this.principalform.get('two14').value.replace(/\,/g, '')
    // );
    // var h = parseFloat(
    //     this.principalform.get('two15').value.replace(/\,/g, '')
    // );
    this.total = a + c + e;
    const result1Formatted = this.total.toLocaleString('en-IN'); 
    this.total1 = b + d + f;
    const result2Formatted = this.total1.toLocaleString('en-IN'); 
    this.principalform.get('two14').setValue(result1Formatted);
    this.principalform.get('two15').setValue(result2Formatted);
}
openscope3calculators(data) {
    const dialogRef = this.dialog.open(Scope3calculatorsComponent, {
        autoFocus: false,
        data: { data },
    });
    dialogRef.afterClosed().subscribe((result) => {
        this.principalform
            .get('upstream1')
            .setValue(
                this.is.scope3specificsum.toLocaleString() + ' tCO2e'
            );
            console.log(this.principalform
                .get('upstream1').value);
                console.log(this.is.scope3specificsum);
            
    });
}
openscope3calculators1(data) {
    const dialogRef = this.dialog.open(Scope3avgComponent, {
        autoFocus: false,
        data: { data },
    });
    dialogRef.afterClosed().subscribe((result) => {
        this.principalform
            .get('upstream2')
            .setValue(
                this.is.scope3avg.toLocaleString() + ' tCO2e'
            );
    });
}
openscope3calculators2(data) {
    const dialogRef = this.dialog.open(Scope3category3Component, {
        autoFocus: false,
        data: { data },
    });
    dialogRef.afterClosed().subscribe((result) => {
        this.principalform
            .get('upstream3')
            .setValue(
                this.is.scope3category3.toLocaleString() + ' tCO2e'
            );
    });
}

openscope3calculators3(data) {
    const dialogRef = this.dialog.open(Scope3category4Component, {
        autoFocus: false,
        data: { downstreamValue: 'upstream' },
    });
    dialogRef.afterClosed().subscribe((result) => {
        this.principalform
            .get('upstream4')
            .setValue(
                this.is.scope3category4.toLocaleString() + ' tCO2e'
            );
    });
}

openscope3calculators4(data) {
    const dialogRef = this.dialog.open(Scope3category5Component, {
        autoFocus: false,
        data: { downstreamValue: 'five' },
    });
    dialogRef.afterClosed().subscribe((result) => {
        this.principalform
            .get('upstream5')
            .setValue(
                this.is.scope3category5.toLocaleString() + ' tCO2e'
            );
    });
}

openscope3calculators5(data) {
    const dialogRef = this.dialog.open(Scope3hotelComponent, {
        autoFocus: false,
        data: { data },
    });
    dialogRef.afterClosed().subscribe((result) => {
        this.principalform
            .get('upstream6')
            .setValue(
                this.is.scope3hotel.toLocaleString() + ' tCO2e'
            );
    });
}

openscope3calculators6(data) {
    const dialogRef = this.dialog.open(Scope3category7Component, {
        autoFocus: false,
        data: { data },
    });
    dialogRef.afterClosed().subscribe((result) => {
        this.principalform
            .get('upstream7')
            .setValue(
                this.is.scope3category7.toLocaleString() + ' tCO2e'
            );
    });
}

openscope3calculators7(data) {
    const dialogRef = this.dialog.open(Scope3category813Component, {
        autoFocus: false,
        data: { downstreamValue: 'eight' },
    });
    dialogRef.afterClosed().subscribe((result) => {
        this.principalform
            .get('upstream8')
            .setValue(
                this.is.scope3category813.toLocaleString() + ' tCO2e'
            );
    });
}

openscope3calculators8(data) {
    const dialogRef = this.dialog.open(Scope3category4Component, {
        autoFocus: false,
        data: { downstreamValue: 'downstream' },
    });
    dialogRef.afterClosed().subscribe((result) => {
        this.principalform
            .get('downstream1')
            .setValue(
                this.is.scope3category4.toLocaleString() + ' tCO2e'
            );
    });
}
openscope3calculators9(data) {
    const dialogRef = this.dialog.open(Scope3category10Component, {
        autoFocus: false,
        data: { downstreamValue: 'ww' },
    });
    dialogRef.afterClosed().subscribe((result) => {
        this.principalform
            .get('downstream2')
            .setValue(
                this.is.scope3category10.toLocaleString() + ' tCO2e'
            );
    });
}

openscope3calculators10(data) {
    const dialogRef = this.dialog.open(Scope3category11Component, {
        autoFocus: false,
        data: { downstreamValue: 'ww' },
    });
    dialogRef.afterClosed().subscribe((result) => {
        this.principalform
            .get('downstream3')
            .setValue(
                this.is.scope3category11.toLocaleString() + ' tCO2e'
            );
    });
}

openscope3calculators11(data) {
    const dialogRef = this.dialog.open(Scope3category5Component, {
        autoFocus: false,
        data: { downstreamValue: 'ww' },
    });
    dialogRef.afterClosed().subscribe((result) => {
        this.principalform
            .get('downstream4')
            .setValue(
                this.is.scope3category5.toLocaleString() + ' tCO2e'
            );
    });
}

openscope3calculators12(data) {
    const dialogRef = this.dialog.open(Scope3category813Component, {
        autoFocus: false,
        data: { downstreamValue: '13' },
    });
    dialogRef.afterClosed().subscribe((result) => {
        this.principalform
            .get('downstream5')
            .setValue(
                this.is.scope3category813.toLocaleString() + ' tCO2e'
            );
    });
}

openscope3calculators13(data) {
    const dialogRef = this.dialog.open(Scope3category14Component, {
        autoFocus: false,
        data: { downstreamValue: '13' },
    });
    dialogRef.afterClosed().subscribe((result) => {
        this.principalform
            .get('downstream6')
            .setValue(
                this.is.scope3category14.toLocaleString() + ' tCO2e'
            );
    });
}

openscope3calculators14(data) {
    const dialogRef = this.dialog.open(Scope3category15Component, {
        autoFocus: false,
        data: { downstreamValue: '13' },
    });
    dialogRef.afterClosed().subscribe((result) => {
        this.principalform
            .get('downstream7')
            .setValue(
                this.is.scope3category15.toLocaleString() + ' tCO2e'
            );
    });
}
calculateAllSum() {
    const quant1 = this.principalform.get('upstream1').value;
    const quant2 = this.principalform.get('upstream2').value;
    const quant3 = this.principalform.get('upstream3').value;
    const quant4 = this.principalform.get('upstream4').value;
    const quant5 = this.principalform.get('upstream5').value;
    const quant6 = this.principalform.get('upstream6').value;
    const quant7 = this.principalform.get('upstream7').value;
    const quant8 = this.principalform.get('upstream8').value;
    const quantl = this.principalform.get('upstream9').value;
    const quant9 = this.principalform.get('downstream1').value;
    const quant10 = this.principalform.get('downstream2').value;
    const quant11 = this.principalform.get('downstream3').value;
    const quant12 = this.principalform.get('downstream4').value;
    const quant13 = this.principalform.get('downstream5').value;
    const quant14 = this.principalform.get('downstream6').value;
    const quant15 = this.principalform.get('downstream7').value;
    const quantll = this.principalform.get('downstream8').value;

    const bitch1 = this.principalform.get('satish1').value;
    const bitch2 = this.principalform.get('satish2').value;
    const bitch3 = this.principalform.get('satish3').value;
    const bitch4 = this.principalform.get('satish4').value;
    const bitch5 = this.principalform.get('satish5').value;
    const bitch6 = this.principalform.get('satish6').value;
    const bitch7 = this.principalform.get('satish7').value;
    const bitch8 = this.principalform.get('satish8').value;
    const bitchl = this.principalform.get('satish9').value;
    const bitch9 = this.principalform.get('shiva1').value;
    const bitch10 = this.principalform.get('shiva2').value;
    const bitch11 = this.principalform.get('shiva3').value;
    const bitch12 = this.principalform.get('shiva4').value;
    const bitch13 = this.principalform.get('shiva5').value;
    const bitch14 = this.principalform.get('shiva6').value;
    const bitch15 = this.principalform.get('shiva7').value;
    const bitchll = this.principalform.get('shiva8').value;
  
    // Remove commas and convert to numbers
    const parseValue = (value) => {
      if (!value) return 0; // Return 0 if value is empty or undefined
      const parsedValue = parseFloat(value.replace(/,/g, ''));
      return isNaN(parsedValue) ? 0 : parsedValue; // Return 0 if parsed value is NaN
    };
  
    const sum =
      parseValue(quant1) +
      parseValue(quant2) +
      parseValue(quant3) +
      parseValue(quant4) +
      parseValue(quant5) +
      parseValue(quant6) +
      parseValue(quant7) +
      parseValue(quant8) +
      parseValue(quant9) +
      parseValue(quant10) +
      parseValue(quant11) +
      parseValue(quant12) +
      parseValue(quant13) +
      parseValue(quant14) +
      parseValue(quantl) +
      parseValue(quantll) +
      parseValue(quant15);

      const postivity =
      parseValue(bitch1) +
      parseValue(bitch2) +
      parseValue(bitch3) +
      parseValue(bitch4) +
      parseValue(bitch5) +
      parseValue(bitch6) +
      parseValue(bitch7) +
      parseValue(bitch8) +
      parseValue(bitch9) +
      parseValue(bitch10) +
      parseValue(bitch11) +
      parseValue(bitch12) +
      parseValue(bitch13) +
      parseValue(bitch14) +
      parseValue(bitchl) +
      parseValue(bitchll) +
      parseValue(bitch15);
  
      this.principalform.get('sumallcal1').setValue(postivity);

      const formattedSum = sum.toLocaleString();
    this.principalform.get('sumallcal').setValue(formattedSum);
    const turn=
    (sum /this.ss.turnover);
    console.log(this.ss.turnover);
    console.log(turn);
    this.principalform.get('turndownup').setValue(turn);
  }

  alltot7(event){
    console.log(event.target.value);
    const quant1 = event.target.value
    const parseValue = (value) => {
        if (!value) return 0; // Return 0 if value is empty or undefined
        const parsedValue = parseFloat(value.replace(/,/g, ''));
        return isNaN(parsedValue) ? 0 : parsedValue; // Return 0 if parsed value is NaN
      };
      const sum =
      (parseValue(quant1))/this.ss.turnover;
      this.principalform.get('shi36').setValue(sum);
  }
  
 onSave() {

    var	PolicyQuestion1 = this.principalform.get('lastall').value;
    var	PolicyQuestion2 = this.principalform.get('two').value;
    var	PolicyQuestion3 = this.principalform.get('two1').value;
   // var	PolicyQuestion4 = this.principalform.get('lastal1').value;
    var	PolicyQuestion5 = this.principalform.get('two2').value;
    var	PolicyQuestion6 = this.principalform.get('two3').value;
  //  var	PolicyQuestion7 = this.principalform.get('lastal7').value;
    var	PolicyQuestion8 = this.principalform.get('two4').value;
    var	PolicyQuestion9 = this.principalform.get('two5').value;
   // var	PolicyQuestion10 = this.principalform.get('lastal2').value;
    var	PolicyQuestion11 = this.principalform.get('two6').value;
    var	PolicyQuestion12 = this.principalform.get('two7').value;
   // var	PolicyQuestion13 = this.principalform.get('lastal3').value;
    var	PolicyQuestion14 = this.principalform.get('two8').value;
    var	PolicyQuestion15 = this.principalform.get('two9').value;
  //  var	PolicyQuestion16 = this.principalform.get('lastal4').value;
    var	PolicyQuestion17 = this.principalform.get('two10').value;
    var	PolicyQuestion18 = this.principalform.get('two11').value;
   // var	PolicyQuestion19 = this.principalform.get('lastal5').value;
    var	PolicyQuestion20 = this.principalform.get('two12').value;
    var	PolicyQuestion21 = this.principalform.get('two13').value;
  //  var	PolicyQuestion22 = this.principalform.get('lastal6').value;
    var	PolicyQuestion23 = this.principalform.get('two14').value;
    var	PolicyQuestion24 = this.principalform.get('two15').value;
    var	PolicyQuestion25 = this.principalform.get('last3').value;
    var	PolicyQuestion26 = this.principalform.get('noine1').value;
    var	PolicyQuestion27 = this.principalform.get('one').value;
    var	PolicyQuestion28 = this.principalform.get('one1').value;
    var	PolicyQuestion29 = this.principalform.get('one2').value;
    var	PolicyQuestion30 = this.principalform.get('one3').value;
    var	PolicyQuestion31 = this.principalform.get('one4').value;
    var	PolicyQuestion32 = this.principalform.get('one5').value;
    var	PolicyQuestion33 = this.principalform.get('one6').value;
    var	PolicyQuestion34 = this.principalform.get('one7').value;
    var	PolicyQuestion35 = this.principalform.get('one8').value;
    var	PolicyQuestion36 = this.principalform.get('one9').value;
    var	PolicyQuestion37 = this.principalform.get('one10').value;
    var	PolicyQuestion38 = this.principalform.get('one11').value;
    var	PolicyQuestion39 = this.principalform.get('one12').value;
    var	PolicyQuestion40 = this.principalform.get('one13').value;
    var	PolicyQuestion41 = this.principalform.get('one14').value;
    var	PolicyQuestion42 = this.principalform.get('one15').value;
    var	PolicyQuestion43 = this.principalform.get('one16').value;
    var	PolicyQuestion44 = this.principalform.get('one17').value;
    var	PolicyQuestion45 = this.principalform.get('one18').value;
    var	PolicyQuestion46 = this.principalform.get('one19').value;
    var	PolicyQuestion47 = this.principalform.get('one20').value;
    var	PolicyQuestion48 = this.principalform.get('one21').value;
    var	PolicyQuestion49 = this.principalform.get('last4').value;
    var	PolicyQuestion50 = this.principalform.get('noine2').value;
    var	PolicyQuestion51 = this.principalform.get('countdrop').value;
    var	PolicyQuestion52 = this.principalform.get('citydrop').value;
    var	PolicyQuestion53 = this.principalform.get('addofpla').value;
    var	PolicyQuestion54 = this.principalform.get('moimore').value;
    var	PolicyQuestion55 = this.principalform.get('shi').value;
    var	PolicyQuestion56 = this.principalform.get('shi1').value;
    var	PolicyQuestion57 = this.principalform.get('shi2').value;
    var	PolicyQuestion58 = this.principalform.get('shi3').value;
    var	PolicyQuestion59 = this.principalform.get('shi4').value;
    var	PolicyQuestion60 = this.principalform.get('shi5').value;
    var	PolicyQuestion61 = this.principalform.get('shi6').value;
    var	PolicyQuestion62 = this.principalform.get('shi7').value;
    var	PolicyQuestion63 = this.principalform.get('shi8').value;
    var	PolicyQuestion64 = this.principalform.get('shi9').value;
    var	PolicyQuestion65 = this.principalform.get('shi10').value;
    var	PolicyQuestion66 = this.principalform.get('shi11').value;
    var	PolicyQuestion67 = this.principalform.get('shi34').value;
    var	PolicyQuestion68 = this.principalform.get('shi35').value;
    var	PolicyQuestion69 = this.principalform.get('shi36').value;
    var	PolicyQuestion70 = this.principalform.get('shi37').value;
    var	PolicyQuestion71 = this.principalform.get('shi38').value;
    var	PolicyQuestion72 = this.principalform.get('shi39').value;
    var	PolicyQuestion73 = this.principalform.get('shi12').value;
    var	PolicyQuestion74 = this.principalform.get('shi13').value;
    var	PolicyQuestion75 = this.principalform.get('shi14').value;
    var	PolicyQuestion76 = this.principalform.get('shi15').value;
    var	PolicyQuestion77 = this.principalform.get('shi16').value;
    var	PolicyQuestion78 = this.principalform.get('shi17').value;
    var	PolicyQuestion79 = this.principalform.get('shi18').value;
    var	PolicyQuestion80 = this.principalform.get('shi19').value;
    var	PolicyQuestion81 = this.principalform.get('shi20').value;
    var	PolicyQuestion82 = this.principalform.get('shi21').value;
    var	PolicyQuestion83 = this.principalform.get('shi22').value;
    var	PolicyQuestion84 = this.principalform.get('shi23').value;
    var	PolicyQuestion85 = this.principalform.get('shi24').value;
    var	PolicyQuestion86 = this.principalform.get('shi25').value;
    var	PolicyQuestion87 = this.principalform.get('shi26').value;
    var	PolicyQuestion88 = this.principalform.get('shi27').value;
    var	PolicyQuestion89 = this.principalform.get('shi28').value;
    var	PolicyQuestion90 = this.principalform.get('shi29').value;
    var	PolicyQuestion91 = this.principalform.get('shi30').value;
    var	PolicyQuestion92 = this.principalform.get('shi31').value;
    var	PolicyQuestion93 = this.principalform.get('shi32').value;
    var	PolicyQuestion94 = this.principalform.get('shi33').value;
    var	PolicyQuestion95 = this.principalform.get('last2').value;
    var	PolicyQuestion96 = this.principalform.get('noine3').value;
    var	PolicyQuestion97 = this.principalform.get('sumallcal').value;
    var	PolicyQuestion98 = this.principalform.get('sumallcal1').value;
    var	PolicyQuestion99 = this.principalform.get('upstream1').value;
    var	PolicyQuestion100 = this.principalform.get('satish1').value;
    var	PolicyQuestion101 = this.principalform.get('upstream2').value;
    var	PolicyQuestion102 = this.principalform.get('satish2').value;
    var	PolicyQuestion103 = this.principalform.get('upstream3').value;
    var	PolicyQuestion104 = this.principalform.get('satish3').value;
    var	PolicyQuestion105 = this.principalform.get('upstream4').value;
    var	PolicyQuestion106 = this.principalform.get('satish4').value;
    var	PolicyQuestion107 = this.principalform.get('upstream5').value;
    var	PolicyQuestion108 = this.principalform.get('satish5').value;
    var	PolicyQuestion109 = this.principalform.get('upstream6').value;
    var	PolicyQuestion110 = this.principalform.get('satish6').value;
    var	PolicyQuestion111 = this.principalform.get('upstream7').value;
    var	PolicyQuestion112 = this.principalform.get('satish7').value;
    var	PolicyQuestion113 = this.principalform.get('upstream8').value;
    var	PolicyQuestion114 = this.principalform.get('satish8').value;
    var	PolicyQuestion115 = this.principalform.get('upstream9').value;
    var	PolicyQuestion116 = this.principalform.get('satish9').value;
    var	PolicyQuestion117 = this.principalform.get('downstream1').value;
    var	PolicyQuestion118 = this.principalform.get('shiva1').value;
    var	PolicyQuestion119 = this.principalform.get('downstream2').value;
    var	PolicyQuestion120 = this.principalform.get('shiva2').value;
    var	PolicyQuestion121 = this.principalform.get('downstream3').value;
    var	PolicyQuestion122 = this.principalform.get('shiva3').value;
    var	PolicyQuestion123 = this.principalform.get('downstream4').value;
    var	PolicyQuestion124 = this.principalform.get('shiva4').value;
    var	PolicyQuestion125 = this.principalform.get('downstream5').value;
    var	PolicyQuestion126 = this.principalform.get('shiva5').value;
    var	PolicyQuestion127 = this.principalform.get('downstream6').value;
    var	PolicyQuestion128 = this.principalform.get('shiva6').value;
    var	PolicyQuestion129 = this.principalform.get('downstream7').value;
    var	PolicyQuestion130 = this.principalform.get('shiva7').value;
    var	PolicyQuestion131 = this.principalform.get('downstream8').value;
    var	PolicyQuestion132 = this.principalform.get('shiva8').value;
    var	PolicyQuestion133 = this.principalform.get('turndownup').value;
    var	PolicyQuestion134 = this.principalform.get('mtco38').value;
    var	PolicyQuestion135 = this.principalform.get('mtco39').value;
    var	PolicyQuestion136 = this.principalform.get('mtco40').value;
    var	PolicyQuestion137 = this.principalform.get('last5').value;
    var	PolicyQuestion138 = this.principalform.get('noine4').value;
    var	PolicyQuestion139 = this.principalform.get('noine5').value;
    var	PolicyQuestion140 = this.principalform.get('noine6').value;
    var	PolicyQuestion141 = this.principalform.get('noine7').value;
    var	PolicyQuestion142 = this.principalform.get('noine8').value;
    var	PolicyQuestion143 = this.principalform.get('noine9').value;
    


  
        
        this.initialDraftReport1[20] = {PolicyQuestion1,PolicyQuestion2,PolicyQuestion3,PolicyQuestion5,PolicyQuestion6,PolicyQuestion8,PolicyQuestion9,PolicyQuestion11,PolicyQuestion12,PolicyQuestion14,PolicyQuestion15,PolicyQuestion17,PolicyQuestion18,PolicyQuestion20,PolicyQuestion21,PolicyQuestion23,PolicyQuestion24,
          PolicyQuestion25,PolicyQuestion26,PolicyQuestion27,PolicyQuestion28,PolicyQuestion29,PolicyQuestion30,PolicyQuestion31,PolicyQuestion32,PolicyQuestion33,PolicyQuestion34,PolicyQuestion35,PolicyQuestion36,PolicyQuestion37,PolicyQuestion38,PolicyQuestion39,PolicyQuestion40,PolicyQuestion41,PolicyQuestion42,PolicyQuestion43,PolicyQuestion44,PolicyQuestion45,PolicyQuestion46,PolicyQuestion47,PolicyQuestion48,PolicyQuestion49,PolicyQuestion50,PolicyQuestion51,PolicyQuestion52,PolicyQuestion53,
          PolicyQuestion54,PolicyQuestion55,PolicyQuestion56,PolicyQuestion57,PolicyQuestion58,PolicyQuestion59,PolicyQuestion60,PolicyQuestion61,PolicyQuestion62,PolicyQuestion63,PolicyQuestion64,PolicyQuestion65,PolicyQuestion66,PolicyQuestion67,PolicyQuestion68,PolicyQuestion69,PolicyQuestion70,PolicyQuestion71,PolicyQuestion72,PolicyQuestion73,PolicyQuestion74,PolicyQuestion75,PolicyQuestion76,PolicyQuestion77,PolicyQuestion78,PolicyQuestion79,PolicyQuestion80,PolicyQuestion81,PolicyQuestion82,
          PolicyQuestion83,PolicyQuestion84,PolicyQuestion85,PolicyQuestion86,PolicyQuestion87,PolicyQuestion88,PolicyQuestion89,PolicyQuestion90,PolicyQuestion91,PolicyQuestion92,PolicyQuestion93,PolicyQuestion94,PolicyQuestion95,PolicyQuestion96,PolicyQuestion97,PolicyQuestion98,PolicyQuestion99,PolicyQuestion100,PolicyQuestion101,PolicyQuestion102,PolicyQuestion103,PolicyQuestion104,PolicyQuestion105,PolicyQuestion106,PolicyQuestion107,PolicyQuestion108,PolicyQuestion109,PolicyQuestion110,
          PolicyQuestion111,PolicyQuestion112,PolicyQuestion113,PolicyQuestion114,PolicyQuestion115,PolicyQuestion116,PolicyQuestion117,PolicyQuestion118,PolicyQuestion119,PolicyQuestion120,PolicyQuestion121,PolicyQuestion122,PolicyQuestion123,PolicyQuestion124,PolicyQuestion125,PolicyQuestion126,PolicyQuestion127,PolicyQuestion128,PolicyQuestion129,PolicyQuestion130,PolicyQuestion131,PolicyQuestion132,PolicyQuestion133,PolicyQuestion134,PolicyQuestion135,PolicyQuestion136,PolicyQuestion137,PolicyQuestion138,
          PolicyQuestion139,PolicyQuestion140,PolicyQuestion141,PolicyQuestion142,PolicyQuestion143,Table1: JSON.stringify(this.lookupdtl)
        }

       // this.initialDraftReport1[20]={Table1: JSON.stringify(this.lookupdtl)}
          
       console.log(this.initialDraftReport1);
       const currentInitialDraftReport = this.initialDraftReport1;
       this.ss.liquid[20]=currentInitialDraftReport[20];
       console.log(currentInitialDraftReport);
       console.log(this.ss.liquid[20])
       console.log(this.ss.liquid);
     
       this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
         const reportdata = data[0];
         console.log(JSON.parse(reportdata.InitialDraftReport));
         console.log(this.ss.liquid[20])
        var init=JSON.parse(reportdata.InitialDraftReport);
        if(init!=null){
        init[20]=this.ss.liquid[20]
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
        init[20]=this.ss.liquid[20]
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
   
      changeSubject(i) {
       
        this.lookupdtl[i]['Subject'] = (<HTMLInputElement>(
            document.getElementById('Subject' + i.toString())
        )).value;
      }
      ChangeLabs(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Labs' + i.toString())
            )).value
        );
        this.lookupdtl[i]['Labs'] = (<HTMLInputElement>(
            document.getElementById('Labs' + i.toString())
        )).value;
      }
      ChangeLabs2(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Labs2' + i.toString())
            )).value
        );
        this.lookupdtl[i]['Labs2'] = (<HTMLInputElement>(
            document.getElementById('Labs2' + i.toString())
        )).value;
      }
      openuploadimgcompo(ReportId: any, GuidanceNumber: any, OrgId: any, ques: any) {

        const dialogRef = this.dialog.open(UploadevidenceforbrsrComponent, {
      
          autoFocus: false,
      
          data: { ReportId, GuidanceNumber, OrgId, ques },
      
        });
      
      }
}
