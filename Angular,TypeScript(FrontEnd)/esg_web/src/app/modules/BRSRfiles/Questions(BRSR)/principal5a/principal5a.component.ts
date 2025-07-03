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
  selector: 'app-principal5a',
  templateUrl: './principal5a.component.html',
  styleUrls: ['./principal5a.component.css']
})
export class Principal5aComponent implements OnInit {
  principalform:FormGroup
  @Input() princi5e:any;
  reportid:any;
  initialDraftReport2: any = {};
  storedchan:any;
  filteredList:any;
  lookupdtl: any;
  reltypeother:any;
  newAttribute: { forreal6: string; forreal7: string; };
  currentYear: number;
  PreviousYear:number;
  dropinput4:any;
  orgId:any;

  constructor(private fb: FormBuilder,private is:ImportdisService,public AuthService:AuthService,public dialog: MatDialog,private cs:CreatereportforbrsrService,private aa:ActivatedRoute,private sele:SelectbrsrService) {
    this.lookupdtl = [];
   }

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');

    this.sele.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      console.log(reportdata);
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport2 = JSON.parse(reportdata.InitialDraftReport);
        console.log(this.initialDraftReport2);
  
      }
    });
    this.sele.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport2 = JSON.parse(reportdata.InitialDraftReport);
        this.principalform.patchValue(this.initialDraftReport2);
        this.principalform.patchValue({
          one1: this.initialDraftReport2[17]['Eone11'],
          two2: this.initialDraftReport2[17]['Eone12'],
          three3: this.initialDraftReport2[17]['Eone13'],
          four4: this.initialDraftReport2[17]['Eone14'],
          five5: this.initialDraftReport2[17]['Eone15'],
          six6: this.initialDraftReport2[17]['Eone16'],
          seven7: this.initialDraftReport2[17]['Eone21'],
          eight8: this.initialDraftReport2[17]['Eone22'],
          nine9: this.initialDraftReport2[17]['Eone23'],
          ten10: this.initialDraftReport2[17]['Eone24'],
          eleven11: this.initialDraftReport2[17]['Eone25'],
          twelve12: this.initialDraftReport2[17]['Eone26'],
          thirteen13: this.initialDraftReport2[17]['Eone31'],
          fourteen14: this.initialDraftReport2[17]['Eone32'],
          fifteen15: this.initialDraftReport2[17]['Eone33'],
          sixteen16: this.initialDraftReport2[17]['Eone34'],
          seventeen17: this.initialDraftReport2[17]['Eone35'],
          eighteen18: this.initialDraftReport2[17]['Eone36'],
          nineteen19: this.initialDraftReport2[17]['Etwo11'],
          twenty20: this.initialDraftReport2[17]['Etwo12'],
          twentyone21: this.initialDraftReport2[17]['Etwo13'],
          twentytwo22: this.initialDraftReport2[17]['Etwo14'],
          twentythree23: this.initialDraftReport2[17]['Etwo15'],
          twentyfour24: this.initialDraftReport2[17]['Etwo16'],
          twentyfive25: this.initialDraftReport2[17]['Etwo21'],
          twentysix26: this.initialDraftReport2[17]['Etwo22'],
          twentyseven27: this.initialDraftReport2[17]['Etwo23'],
          twentyeight28: this.initialDraftReport2[17]['Etwo24'],
          twentynine29: this.initialDraftReport2[17]['Etwo25'],
          thirty30: this.initialDraftReport2[17]['Etwo26'],
          thirtyone31: this.initialDraftReport2[17]['Etwo31'],
          thirtytwo32: this.initialDraftReport2[17]['Etwo32'],
          thirtythree33: this.initialDraftReport2[17]['Etwo33'],
          thirtyfour34: this.initialDraftReport2[17]['Etwo34'],
          thirtyfive35: this.initialDraftReport2[17]['Etwo35'],
          thirtysix36: this.initialDraftReport2[17]['Etwo36'],
          oneness:this.initialDraftReport2[17]['Wtwo11'],
          twoness:this.initialDraftReport2[17]['Wtwo12'],
          threeness:this.initialDraftReport2[17]['Wtwo13'],
          fourness:this.initialDraftReport2[17]['Wtwo14'],
          fiveness:this.initialDraftReport2[17]['Wtwo15'],
          sixness:this.initialDraftReport2[17]['Wtwo16'],
          eightness:this.initialDraftReport2[17]['Wtwo17'],
          nineness:this.initialDraftReport2[17]['Wtwo18'],
          tenness:this.initialDraftReport2[17]['Wtwo19'],
          elevenness:this.initialDraftReport2[17]['Wtwo10'],
          twelveness:this.initialDraftReport2[17]['Wtwo21'],
          thirteenness:this.initialDraftReport2[17]['Wtwo22'],
          fourteenness:this.initialDraftReport2[17]['Wtwo23'],
          fifteenness:this.initialDraftReport2[17]['Wtwo24'],
          sixteenness:this.initialDraftReport2[17]['Wtwo25'],
          seventeenness:this.initialDraftReport2[17]['Wtwo26'],
          eighteenness:this.initialDraftReport2[17]['Wtwo27'],
          nineteenness:this.initialDraftReport2[17]['Wtwo28'],
          twentyness:this.initialDraftReport2[17]['Wtwo29'],
          twentyoneness:this.initialDraftReport2[17]['Wtwo30'],
          twentytwoness:this.initialDraftReport2[17]['Wtwo31'],
          twentythreeness:this.initialDraftReport2[17]['Wtwo32'],
          twentyfourness:this.initialDraftReport2[17]['Wtwo33'],
          twentyfiveness:this.initialDraftReport2[17]['Wtwo34'],
          twentysixness:this.initialDraftReport2[17]['Wtwo35'],
          twentysevenness:this.initialDraftReport2[17]['Wtwo36'],
          twentyeightness:this.initialDraftReport2[17]['Wtwo37'],
          twentynineness:this.initialDraftReport2[17]['Wtwo38'],
          thirtyness:this.initialDraftReport2[17]['Wtwo39'],
          thirtyoneness:this.initialDraftReport2[17]['Wtwo30'],
          ftwentytwoness:this.initialDraftReport2[17]['Wtwo41'],
          ftwentythreeness:this.initialDraftReport2[17]['Wtwo42'],
          ftwentyfourness:this.initialDraftReport2[17]['Wtwo43'],
          ftwentyfiveness:this.initialDraftReport2[17]['Wtwo44'],
          ftwentysixness:this.initialDraftReport2[17]['Wtwo45'],
          ftwentysevenness:this.initialDraftReport2[17]['Wtwo46'],
          ftwentyeightness:this.initialDraftReport2[17]['Wtwo47'],
          ftwentynineness:this.initialDraftReport2[17]['Wtwo48'],
          fthirtyness:this.initialDraftReport2[17]['Wtwo49'],
          fthirtyoneness:this.initialDraftReport2[17]['Wtwo40'],
          thirtytwoness:this.initialDraftReport2[17]['Wtwo51'],
          thirtythreeness:this.initialDraftReport2[17]['Wtwo52'],
          thirtyfourness:this.initialDraftReport2[17]['Wtwo53'],
          thirtyfiveness:this.initialDraftReport2[17]['Wtwo54'],
          thirtysixness:this.initialDraftReport2[17]['Wtwo55'],
          thirtysevenness:this.initialDraftReport2[17]['Wtwo56'],
          thirtyeightness:this.initialDraftReport2[17]['Wtwo57'],
          thirtynineness:this.initialDraftReport2[17]['Wtwo58'],
          fourtyness:this.initialDraftReport2[17]['Wtwo59'],
          fourtyoneness:this.initialDraftReport2[17]['Wtwo50'],
          fourtytwoness:this.initialDraftReport2[17]['Wtwo61'],
          fourtythreeness:this.initialDraftReport2[17]['Wtwo62'],
          fourtyfourness:this.initialDraftReport2[17]['Wtwo63'],
          fourtyfiveness:this.initialDraftReport2[17]['Wtwo64'],
          fourtysixness:this.initialDraftReport2[17]['Wtwo65'],
          fourtysevenness:this.initialDraftReport2[17]['Wtwo66'],
          fourtyeightness:this.initialDraftReport2[17]['Wtwo67'],
          fourtynineness:this.initialDraftReport2[17]['Wtwo68'],
          fiftyness:this.initialDraftReport2[17]['Wtwo69'],
          fiftyoneness:this.initialDraftReport2[17]['Wtwo60'],
          fiftytwoness:this.initialDraftReport2[17]['Wtwo71'],
          fiftythreeness:this.initialDraftReport2[17]['Wtwo72'],
          fiftyfourness:this.initialDraftReport2[17]['Wtwo73'],
          fiftyfiveness:this.initialDraftReport2[17]['Wtwo74'],
          fiftysixness:this.initialDraftReport2[17]['Wtwo75'],
          fiftysevenness:this.initialDraftReport2[17]['Wtwo76'],
          fiftyeightness:this.initialDraftReport2[17]['Wtwo77'],
          fiftynineness:this.initialDraftReport2[17]['Wtwo78'],
          sixtyness:this.initialDraftReport2[17]['Wtwo79'],
          sixtyoneness:this.initialDraftReport2[17]['Wtwo70'],
          ffiftytwoness:this.initialDraftReport2[17]['Wtwo81'],
          ffiftythreeness:this.initialDraftReport2[17]['Wtwo82'],
          ffiftyfourness:this.initialDraftReport2[17]['Wtwo83'],
          ffiftyfiveness:this.initialDraftReport2[17]['Wtwo84'],
          ffiftysixness:this.initialDraftReport2[17]['Wtwo85'],
          ffiftysevenness:this.initialDraftReport2[17]['Wtwo86'],
          ffiftyeightness:this.initialDraftReport2[17]['Wtwo87'],
          ffiftynineness:this.initialDraftReport2[17]['Wtwo88'],
          fsixtyness:this.initialDraftReport2[17]['Wtwo89'],
          fsixtyoneness:this.initialDraftReport2[17]['Wtwo80'],
          Board1: this.initialDraftReport2[17]['three11'],
          Board2: this.initialDraftReport2[17]['three12'],
          Board3: this.initialDraftReport2[17]['three13'],
          Board4: this.initialDraftReport2[17]['three14'],
          Key1: this.initialDraftReport2[17]['three21'],
          Key2: this.initialDraftReport2[17]['three22'],
          Key3: this.initialDraftReport2[17]['three23'],
          Key4: this.initialDraftReport2[17]['three24'],
          Employees1: this.initialDraftReport2[17]['three31'],
          Employees2: this.initialDraftReport2[17]['three32'],
          Employees3: this.initialDraftReport2[17]['three33'],
          Employees4: this.initialDraftReport2[17]['three34'],
          Workers1: this.initialDraftReport2[17]['three41'],
          Workers2: this.initialDraftReport2[17]['three42'],
          Workers3: this.initialDraftReport2[17]['three43'],
          Workers4: this.initialDraftReport2[17]['three44'],
          sea4: this.initialDraftReport2[17]['four'],
          Ifsea4: this.initialDraftReport2[17]['four1'],
          sea5: this.initialDraftReport2[17]['five'],
          Harassment1: this.initialDraftReport2[17]['six11'],
          Harassment2: this.initialDraftReport2[17]['six12'],
          Harassment3: this.initialDraftReport2[17]['six13'],
          Harassment4: this.initialDraftReport2[17]['six14'],
          Harassment5: this.initialDraftReport2[17]['six15'],
          Harassment6: this.initialDraftReport2[17]['six16'],
          Discrimination1: this.initialDraftReport2[17]['six21'],
          Discrimination2: this.initialDraftReport2[17]['six22'],
          Discrimination3: this.initialDraftReport2[17]['six23'],
          Discrimination4: this.initialDraftReport2[17]['six24'],
          Discrimination5: this.initialDraftReport2[17]['six25'],
          Discrimination6: this.initialDraftReport2[17]['six26'],
          Child1: this.initialDraftReport2[17]['six31'],
          Child2: this.initialDraftReport2[17]['six32'],
          Child3: this.initialDraftReport2[17]['six33'],
          Child4: this.initialDraftReport2[17]['six34'],
          Child5: this.initialDraftReport2[17]['six35'],
          Child6: this.initialDraftReport2[17]['six36'],
          Involuntary1: this.initialDraftReport2[17]['six41'],
          Involuntary2: this.initialDraftReport2[17]['six42'],
          Involuntary3: this.initialDraftReport2[17]['six43'],
          Involuntary4: this.initialDraftReport2[17]['six44'],
          Involuntary5: this.initialDraftReport2[17]['six45'],
          Involuntary6: this.initialDraftReport2[17]['six46'],
          Wages1: this.initialDraftReport2[17]['six51'],
          Wages2: this.initialDraftReport2[17]['six52'],
          Wages3: this.initialDraftReport2[17]['six53'],
          Wages4: this.initialDraftReport2[17]['six54'],
          Wages5: this.initialDraftReport2[17]['six55'],
          Wages6: this.initialDraftReport2[17]['six56'],
          rights1: this.initialDraftReport2[17]['six61'],
          rights2: this.initialDraftReport2[17]['six62'],
          rights3: this.initialDraftReport2[17]['six63'],
          rights4: this.initialDraftReport2[17]['six64'],
          rights5: this.initialDraftReport2[17]['six65'],
          rights6: this.initialDraftReport2[17]['six66'],
          sea7: this.initialDraftReport2[17]['seven'],
          sea8: this.initialDraftReport2[17]['eight'],
          forreal1:this.initialDraftReport2[17]['nine1'],
          forreal2:this.initialDraftReport2[17]['nine2'],
          forreal3:this.initialDraftReport2[17]['nine3'],
          forreal4:this.initialDraftReport2[17]['nine4'],
          forreal5:this.initialDraftReport2[17]['nine5'],
          sea10: this.initialDraftReport2[17]['ten'],
         
        });
        this.dropinput4=this.initialDraftReport2[17]['four'];
        this.lookupdtl=JSON.parse(this.initialDraftReport2[17]['Table1']);
        //this.lookupdtl=JSON.parse(this.initialDraftReport2[17]['Table1']);
       
        
      }
    });

    this.principalform = this.fb.group({
      sea1: [''],
      sea2: [''],
      sea3: [''],
      sea4: [''],
      Ifsea4: [''],
      sea5: [''],
      sea6: [''],
      sea7: [''],
      sea8: [''],
      sea9: [''],
      sea10: [''],
      forreal1:[''],
      forreal2:[''],
      forreal3:[''],
      forreal4:[''],
      forreal5:[''],
      Harassment1:[''],
      Harassment2:[''],
      Harassment3:[''],
      Harassment4:[''],
      Harassment5:[''],
      Harassment6:[''],
      Discrimination1:[''],
      Discrimination2:[''],
      Discrimination3:[''],
      Discrimination4:[''],
      Discrimination5:[''],
      Discrimination6:[''],
      Child1:[''],
      Child2:[''],
      Child3:[''],
      Child4:[''],
      Child5:[''],
      Child6:[''],
      Involuntary1:[''],
      Involuntary2:[''],
      Involuntary3:[''],
      Involuntary4:[''],
      Involuntary5:[''],
      Involuntary6:[''],
      Wages1:[''],
      Wages2:[''],
      Wages3:[''],
      Wages4:[''],
      Wages5:[''],
      Wages6:[''],
      rights1:[''],
      rights2:[''],
      rights3:[''],
      rights4:[''],
      rights5:[''],
      rights6:[''],
      Board1:[''],
      Board2:[''],
      Board3:[''],
      Board4:[''],
      Key1:[''],
      Key2:[''],
      Key3:[''],
      Key4:[''],
      Employees1:[''],
      Employees2:[''],
      Employees3:[''],
      Employees4:[''],
      Workers1:[''],
      Workers2:[''],
      Workers3:[''],
      Workers4:[''],
      one1:[''],
      two2:[''],
      three3:[''],
      four4:[''],
      five5:[''],
      six6:[''],
      seven7:[''],
      eight8:[''],
      nine9:[''],
      ten10:[''],
      eleven11:[''],
      twelve12:[''],
      thirteen13:[''],
      fourteen14:[''],
      fifteen15:[''],
      sixteen16:[''],
      seventeen17:[''],
      eighteen18:[''],
      nineteen19:[''],
      twenty20:[''],
      twentyone21:[''],
      twentytwo22:[''],
      twentythree23:[''],
      twentyfour24:[''],
      twentyfive25:[''],
      twentysix26:[''],
      twentyseven27:[''],
      twentyeight28:[''],
      twentynine29:[''],
      thirty30:[''],
      thirtyone31:[''],
      thirtytwo32:[''],
      thirtythree33:[''],
      thirtyfour34:[''],
      thirtyfive35:[''],
      thirtysix36:[''],
      oneness:[''],
      twoness:[''],
      threeness:[''],
      fourness:[''],
      fiveness:[''],
      sixness:[''],
      eightness:[''],
      nineness:[''],
      tenness:[''],
      elevenness:[''],
      twelveness:[''],
      thirteenness:[''],
      fourteenness:[''],
      fifteenness:[''],
      sixteenness:[''],
      seventeenness:[''],
      eighteenness:[''],
      nineteenness:[''],
      twentyness:[''],
      twentyoneness:[''],
      twentytwoness:[''],
      twentythreeness:[''],
      twentyfourness:[''],
      twentyfiveness:[''],
      twentysixness:[''],
      twentysevenness:[''],
      twentyeightness:[''],
      twentynineness:[''],
      thirtyness:[''],
      thirtyoneness:[''],
      ftwentytwoness:[''],
      ftwentythreeness:[''],
      ftwentyfourness:[''],
      ftwentyfiveness:[''],
      ftwentysixness:[''],
      ftwentysevenness:[''],
      ftwentyeightness:[''],
      ftwentynineness:[''],
      fthirtyness:[''],
      fthirtyoneness:[''],
      thirtytwoness:[''],
      thirtythreeness:[''],
      thirtyfourness:[''],
      thirtyfiveness:[''],
      thirtysixness:[''],
      thirtysevenness:[''],
      thirtyeightness:[''],
      thirtynineness:[''],
      fourtyness:[''],
      fourtyoneness:[''],
      fourtytwoness:[''],
      fourtythreeness:[''],
      fourtyfourness:[''],
      fourtyfiveness:[''],
      fourtysixness:[''],
      fourtysevenness:[''],
      fourtyeightness:[''],
      fourtynineness:[''],
      fiftyness:[''],
      fiftyoneness:[''],
      fiftytwoness:[''],
      fiftythreeness:[''],
      fiftyfourness:[''],
      fiftyfiveness:[''],
      fiftysixness:[''],
      fiftysevenness:[''],
      fiftyeightness:[''],
      fiftynineness:[''],
      sixtyness:[''],
      sixtyoneness:[''],
      ffiftytwoness:[''],
      ffiftythreeness:[''],
      ffiftyfourness:[''],
      ffiftyfiveness:[''],
      ffiftysixness:[''],
      ffiftysevenness:[''],
      ffiftyeightness:[''],
      ffiftynineness:[''],
      fsixtyness:[''],
      fsixtyoneness:[''],
     })
     const Today = new Date();
this.currentYear = Today.getFullYear();
this.PreviousYear=this.currentYear-1;
     this.is.getLookupDetailsByHdrId(2).subscribe((Data) => {
      this.storedchan = Data;
      this.filteredList = this.storedchan.slice();
  });
  this.addFieldValue();
  }
  addFieldValue() {
    this.newAttribute = {
      forreal6: '',
      forreal7: '',
      
    };
    this.lookupdtl.push(this.newAttribute);
    this.reltypeother = '';
    console.log(this.lookupdtl);
}
deleteQ102a(i) {
  this.lookupdtl.splice(i, 1);
}
changeAssessments(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('forreal6' + i.toString())
      )).value
  );
  this.lookupdtl[i]['forreal6'] = (<HTMLInputElement>(
      document.getElementById('forreal6' + i.toString())
  )).value;
}
changeAssessments1(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('forreal7' + i.toString())
      )).value
  );
  this.lookupdtl[i]['forreal7'] = (<HTMLInputElement>(
      document.getElementById('forreal7' + i.toString())
  )).value;
}
  ownershipandlegalfor5(value) {
    console.log(value.value);
    this.dropinput4=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  ownershipandlegalfor6(value) {
    console.log(value.value);
    // this.dropinput4=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }
  uw1(event: any){
    const firstval = (document.getElementById('1one') as HTMLInputElement).value;
    const secondval = (document.getElementById('2two') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    //const result = (saver1 / saver) * 100;
    console.log(saver,saver1);
    var result;
   if(saver1!=0 && saver!=0){
    result = ((saver1 / saver) * 100).toFixed(0);
    console.log(result)
   }else{
    result =0;
   }
    const result1=result;
    console.log(result1);
    const thirdInput = document.getElementById('3three') as HTMLInputElement;
    thirdInput.value = result1.toString();

  }
  uw2(event:any){
    const fourthval = (document.getElementById('4four') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('5five') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
    //const result=(saver3/saver2)*100
    var result;
    if(saver2!=0 && saver3!=0){
     result = ((saver3 / saver2) * 100).toFixed(0);
    }else{
     result =0;
    }
    const result1=result;
    const thirdInput12 = document.getElementById('6six') as HTMLInputElement;
    thirdInput12.value = result1.toString();
  }
  uw3(event: any){
    const firstval = (document.getElementById('7seven') as HTMLInputElement).value;
    const secondval = (document.getElementById('8eight') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
   // const result = (saver1 / saver) * 100;
   var result;
   if(saver1!=0 && saver!=0){
    result = ((saver1 / saver) * 100).toFixed(0);
   }else{
    result =0;
   }
    const result1=result;
    const thirdInput = document.getElementById('9nine') as HTMLInputElement;
    thirdInput.value = result1.toString();

  }
  uw4(event:any){
    const fourthval = (document.getElementById('10ten') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('11eleven') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
    //const result=(saver3/saver2)*100
    var result;
    if(saver2!=0 && saver3!=0){
     result = ((saver3 / saver2) * 100).toFixed(0);
    }else{
     result =0;
    }
    const result1=result;
    const thirdInput12 = document.getElementById('12twelve') as HTMLInputElement;
    thirdInput12.value = result1.toString();
  }
  uw5(event: any){
    const firstval = (document.getElementById('19nineteen') as HTMLInputElement).value;
    const secondval = (document.getElementById('20twenty') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
   // const result = (saver1 / saver) * 100;
   var result;
   if(saver1!=0 && saver!=0){
    result = ((saver1 / saver) * 100).toFixed(0);
   }else{
    result =0;
   }
    const result1=result;
    const thirdInput = document.getElementById('21twentyone') as HTMLInputElement;
    thirdInput.value = result1.toString();

  }
  uw6(event:any){
    const fourthval = (document.getElementById('22twentytwo') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('23twentythree') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
   // const result=(saver3/saver2)*100
   var result;
   if(saver2!=0 && saver3!=0){
    result = ((saver3 / saver2) * 100).toFixed(0);
   }else{
    result =0;
   }
    const result1=result;
    const thirdInput12 = document.getElementById('24twentyfour') as HTMLInputElement;
    thirdInput12.value = result1.toString();
  }


  uw7(event: any){
    const firstval = (document.getElementById('25twentyfive') as HTMLInputElement).value;
    const secondval = (document.getElementById('26twentysix') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
   // const result = (saver1 / saver) * 100;
   var result;
   if(saver1!=0 && saver!=0){
    result = ((saver1 / saver) * 100).toFixed(0);
   }else{
    result =0;
   }
    const result1=result;
    const thirdInput = document.getElementById('27twentyseven') as HTMLInputElement;
    thirdInput.value = result1.toString();

  }
  uw8(event:any){
    const fourthval = (document.getElementById('28twentyeight') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('29twentynine') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
   // const result=(saver3/saver2)*100
   var result;
   if(saver2!=0 && saver3!=0){
    result = ((saver3 / saver2) * 100).toFixed(0);
   }else{
    result =0;
   }
    const result1=result;
    const thirdInput12 = document.getElementById('30thirty') as HTMLInputElement;
    thirdInput12.value = result1.toString();
  }
  alltot(event:any){
    const fourthval = (document.getElementById('1one') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('7seven') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
    const result11=saver3+saver2
    
    const result1=result11.toFixed(0);
    const result21 = Number(result1).toLocaleString('en-IN');
    const thirdInput12 = document.getElementById('13thirteen') as HTMLInputElement;
    thirdInput12.value = result21.toString();
  }
  altot(){

    const firstval = (document.getElementById('2two') as HTMLInputElement).value;
    const secondval = (document.getElementById('8eight') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    const result11 = saver1 + saver;

    const result1=result11.toFixed(0);
    const result21 = Number(result1).toLocaleString('en-IN');
    const thirdInput = document.getElementById('14fourteen') as HTMLInputElement;
    thirdInput.value = result21.toString();
  }
  altott(){
    const firstval1 = (document.getElementById('13thirteen') as HTMLInputElement).value;
  
    const secondval1 = (document.getElementById('14fourteen') as HTMLInputElement).value;
   
    var saver1 = parseFloat(firstval1.replace(/\,/g, ''));
  
    var saver11 = parseFloat(secondval1.replace(/\,/g, ''));

    const result11 = (saver11 *100)/saver1;

    const result1=result11.toFixed(0);
    const thirdInput1 = document.getElementById('15fifteen') as HTMLInputElement;
    thirdInput1.value = result1.toString();
  }
  alltot1(event:any){
    const fourthval = (document.getElementById('4four') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('10ten') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
    const result11=saver3+saver2
    const result1=result11.toFixed(0);
    const result21 = Number(result1).toLocaleString('en-IN');
    const thirdInput12 = document.getElementById('16sixteen') as HTMLInputElement;
    thirdInput12.value = result21.toString();}

    altot1(){
    const firstval = (document.getElementById('5five') as HTMLInputElement).value;
    const secondval = (document.getElementById('11eleven') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    const result11 = saver1 + saver;
    const result1=result11.toFixed(0);
    const result21 = Number(result1).toLocaleString('en-IN');
    const thirdInput = document.getElementById('17seventeen') as HTMLInputElement;
    thirdInput.value = result21.toString();
    }
    altot2(){
    const firstval1 = (document.getElementById('16sixteen') as HTMLInputElement).value;
    const secondval1 = (document.getElementById('17seventeen') as HTMLInputElement).value;
    var saver1 = parseFloat(firstval1.replace(/\,/g, ''));
    var saver11 = parseFloat(secondval1.replace(/\,/g, ''));
    const result11 = (saver11*100) / saver1;
    const result1=result11.toFixed(0);
    const thirdInput1 = document.getElementById('18eighteen') as HTMLInputElement;
    thirdInput1.value = result1.toString();
  }
  alltot2(event:any){
    const fourthval = (document.getElementById('19nineteen') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('25twentyfive') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
    const result1=saver3+saver2
    const result21 = Number(result1).toLocaleString('en-IN');
    const thirdInput12 = document.getElementById('31thirtyone') as HTMLInputElement;
    thirdInput12.value = result21.toString();


    const firstval = (document.getElementById('20twenty') as HTMLInputElement).value;
    const secondval = (document.getElementById('26twentysix') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    const result = saver1 + saver;
    const results21 = Number(result1).toLocaleString('en-IN');
    const thirdInput = document.getElementById('32thirtytwo') as HTMLInputElement;
    thirdInput.value = results21.toString();

    const firstval1 = (document.getElementById('31thirtyone') as HTMLInputElement).value;
    const secondval1 = (document.getElementById('32thirtytwo') as HTMLInputElement).value;
    var saver1 = parseFloat(firstval1.replace(/\,/g, ''));
    var saver11 = parseFloat(secondval1.replace(/\,/g, ''));
    const result11 = (saver11*100)/  saver1;
    const result121=result11.toFixed(0);
    const thirdInput1 = document.getElementById('33thirtythree') as HTMLInputElement;
    thirdInput1.value = result121.toString();
  }
  alltot3(event:any){
    const fourthval = (document.getElementById('22twentytwo') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('28twentyeight') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver3= parseFloat(fourthvall.replace(/\,/g, ''));
    const result1=saver3+saver2
    const result21 = Number(result1).toLocaleString('en-IN');
    const thirdInput12 = document.getElementById('34thirtyfour') as HTMLInputElement;
    thirdInput12.value = result21.toString();


    const firstval = (document.getElementById('23twentythree') as HTMLInputElement).value;
    const secondval = (document.getElementById('29twentynine') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    const result = saver1 + saver;
    const results21 = Number(result1).toLocaleString('en-IN');
    const thirdInput = document.getElementById('35thirtyfive') as HTMLInputElement;
    thirdInput.value = results21.toString();

    const firstval1 = (document.getElementById('34thirtyfour') as HTMLInputElement).value;
    const secondval1 = (document.getElementById('35thirtyfive') as HTMLInputElement).value;
    var saver1 = parseFloat(firstval1.replace(/\,/g, ''));
    var saver11 = parseFloat(secondval1.replace(/\,/g, ''));
    const result11 = (saver11*100) / saver1;
    const result121=result11.toFixed(0);
    const thirdInput1 = document.getElementById('36thirtysix') as HTMLInputElement;
    thirdInput1.value = result121.toString();
  }
  
  ness1(event: any) {
    const firstval = (document.getElementById('oneness') as HTMLInputElement).value;
    const secondval = (document.getElementById('twoness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
    //var saver2=(saver1/saver)*100;
var saver2;
if(saver1!=0 && saver!=0){
  saver2=((saver1/saver)*100).toFixed(0);
}else{
  saver2 =0;
}
    const result1=saver2;
   // const result1 = saver2 % 1 === 0 ? saver2.toFixed(0) : saver2.toFixed(1);
    const thirdInput = document.getElementById('threeness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness2(event: any) {
    const firstval = (document.getElementById('fourness') as HTMLInputElement).value;
    const secondval = (document.getElementById('oneness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver/saver1)*100;
   var saver2;
if(saver1!=0 && saver!=0){
  saver2=((saver/saver1)*100).toFixed(0);
}else{
  saver2 =0;
}
    const result1=saver2;
    const thirdInput = document.getElementById('fiveness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness3(event: any) {
    const firstval = (document.getElementById('sixness') as HTMLInputElement).value;
    const secondval = (document.getElementById('eightness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver1/saver)*100;
   var saver2;
if(saver1!=0 && saver!=0){
  saver2=((saver1/saver)*100).toFixed(0);
}else{
  saver2 =0;
}
    const result1=saver2;
    const thirdInput = document.getElementById('nineness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness4(event: any) {
    const firstval = (document.getElementById('tenness') as HTMLInputElement).value;
    const secondval = (document.getElementById('sixness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver/saver1)*100;
   var saver2;
if(saver1!=0 && saver!=0){
  saver2=((saver/saver1)*100).toFixed(0);
}else{
  saver2 =0;
}
    const result1=saver2;
    const thirdInput = document.getElementById('elevenness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness5(event: any) {
    const firstval = (document.getElementById('twelveness') as HTMLInputElement).value;
    const secondval = (document.getElementById('thirteenness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver1/saver)*100;
   var saver2;
if(saver1!=0 && saver!=0){
  saver2=(saver1/saver)*100;
}else{
  saver2 =0;
}
    const result1=saver2.toFixed(0);
    const thirdInput = document.getElementById('fourteenness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness6(event: any) {
    const firstval = (document.getElementById('fifteenness') as HTMLInputElement).value;
    const secondval = (document.getElementById('twelveness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver/saver1)*100;
   var saver2;
   if(saver1!=0 && saver!=0){
     saver2=((saver/saver1)*100).toFixed(0);
   }else{
     saver2 =0;
   }
    const result1=saver2;
    const thirdInput = document.getElementById('sixteenness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness7(event: any) {
    const firstval = (document.getElementById('seventeenness') as HTMLInputElement).value;
    const secondval = (document.getElementById('eighteenness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver1/saver)*100;
   var saver2;
   if(saver1!=0 && saver!=0){
     saver2=((saver1/saver)*100).toFixed(0);
   }else{
     saver2 =0;
   }
    const result1=saver2;
    const thirdInput = document.getElementById('nineteenness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness8(event: any) {
    const firstval = (document.getElementById('twentyness') as HTMLInputElement).value;
    const secondval = (document.getElementById('seventeenness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver/saver1)*100;
   var saver2;
   if(saver1!=0 && saver!=0){
     saver2=((saver/saver1)*100).toFixed(0);
   }else{
     saver2 =0;
   }
    const result1=saver2;
    const thirdInput = document.getElementById('twentyoneness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness9(event: any) {
    const firstval = (document.getElementById('thirtytwoness') as HTMLInputElement).value;
    const secondval = (document.getElementById('thirtythreeness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver1/saver)*100;
   var saver2;
   if(saver1!=0 && saver!=0){
     saver2=((saver1/saver)*100).toFixed(0);
   }else{
     saver2 =0;
   }
    const result1=saver2;
    const thirdInput = document.getElementById('thirtyfourness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness10(event: any) {
    const firstval = (document.getElementById('thirtyfiveness') as HTMLInputElement).value;
    const secondval = (document.getElementById('thirtytwoness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver/saver1)*100;
   var saver2;
   if(saver1!=0 && saver!=0){
     saver2=((saver/saver1)*100).toFixed(0);
   }else{
     saver2 =0;
   }
    const result1=saver2;
    const thirdInput = document.getElementById('thirtysixness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness11(event: any) {
    const firstval = (document.getElementById('thirtysevenness') as HTMLInputElement).value;
    const secondval = (document.getElementById('thirtyeightness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver1/saver)*100;
   var saver2;
   if(saver1!=0 && saver!=0){
     saver2=((saver1/saver)*100).toFixed(0);
   }else{
     saver2 =0;
   }
    const result1=saver2;
    const thirdInput = document.getElementById('thirtynineness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness12(event: any) {
    const firstval = (document.getElementById('fourtyness') as HTMLInputElement).value;
    const secondval = (document.getElementById('thirtysevenness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
    //var saver2=(saver/saver1)*100;
    var saver2;
    if(saver1!=0 && saver!=0){
      saver2=((saver/saver1)*100).toFixed(0);
    }else{
      saver2 =0;
    }
    const result1=saver2;
    const thirdInput = document.getElementById('fourtyoneness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness13(event: any) {
    const firstval = (document.getElementById('fourtytwoness') as HTMLInputElement).value;
    const secondval = (document.getElementById('fourtythreeness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver1/saver)*100;
   var saver2;
   if(saver1!=0 && saver!=0){
     saver2=((saver1/saver)*100).toFixed(0);
   }else{
     saver2 =0;
   }
    const result1=saver2;
    const thirdInput = document.getElementById('fourtyfourness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness14(event: any) {
    const firstval = (document.getElementById('fourtyfiveness') as HTMLInputElement).value;
    const secondval = (document.getElementById('fourtytwoness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
    //var saver2=(saver/saver1)*100;
    var saver2;
    if(saver1!=0 && saver!=0){
      saver2=((saver/saver1)*100).toFixed(0);
    }else{
      saver2 =0;
    }
    const result1=saver2;
    const thirdInput = document.getElementById('fourtysixness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness15(event: any) {
    const firstval = (document.getElementById('fourtysevenness') as HTMLInputElement).value;
    const secondval = (document.getElementById('fourtyeightness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
    //var saver2=(saver1/saver)*100;
    var saver2;
    if(saver1!=0 && saver!=0){
      saver2=((saver1/saver)*100).toFixed(0);
    }else{
      saver2 =0;
    }
    const result1=saver2;
    const thirdInput = document.getElementById('fourtynineness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness16(event: any) {
    const firstval = (document.getElementById('fiftyness') as HTMLInputElement).value;
    const secondval = (document.getElementById('fourtysevenness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver/saver1)*100;
   var saver2;
    if(saver1!=0 && saver!=0){
      saver2=((saver/saver1)*100).toFixed(0);
    }else{
      saver2 =0;
    }
    const result1=saver2;
    const thirdInput = document.getElementById('fiftyoneness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness17(event: any) {
    const firstval = (document.getElementById('twentytwoness') as HTMLInputElement).value;
    const secondval = (document.getElementById('twentythreeness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver1/saver)*100;
   var saver2;
   if(saver1!=0 && saver!=0){
     saver2=((saver1/saver)*100).toFixed(0);
   }else{
     saver2 =0;
   }
    const result1=saver2;
    const thirdInput = document.getElementById('twentyfourness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness18(event: any) {
    const firstval = (document.getElementById('twentyfiveness') as HTMLInputElement).value;
    const secondval = (document.getElementById('twentytwoness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver/saver1)*100;
   var saver2;
    if(saver1!=0 && saver!=0){
      saver2=((saver/saver1)*100).toFixed(0);
    }else{
      saver2 =0;
    }
    const result1=saver2;
    const thirdInput = document.getElementById('twentysixness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness19(event: any) {
    const firstval = (document.getElementById('twentysevenness') as HTMLInputElement).value;
    const secondval = (document.getElementById('twentyeightness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver1/saver)*100;
   var saver2;
   if(saver1!=0 && saver!=0){
     saver2=(saver1/saver)*100;
   }else{
     saver2 =0;
   }
    const result1=saver2.toFixed(0);
    const thirdInput = document.getElementById('twentynineness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness20(event: any) {
    const firstval = (document.getElementById('thirtyness') as HTMLInputElement).value;
    const secondval = (document.getElementById('twentysevenness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver/saver1)*100;
   var saver2;
    if(saver1!=0 && saver!=0){
      saver2=((saver/saver1)*100).toFixed(0);
    }else{
      saver2 =0;
    }
    const result1=saver2;
    const thirdInput = document.getElementById('thirtyoneness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness21(event: any) {
    const firstval = (document.getElementById('ftwentytwoness') as HTMLInputElement).value;
    const secondval = (document.getElementById('ftwentythreeness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver1/saver)*100;
   var saver2;
   if(saver1!=0 && saver!=0){
     saver2=((saver1/saver)*100).toFixed(0);
   }else{
     saver2 =0;
   }
    const result1=saver2;
    const thirdInput = document.getElementById('ftwentyfourness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness22(event: any) {
    const firstval = (document.getElementById('ftwentyfiveness') as HTMLInputElement).value;
    const secondval = (document.getElementById('ftwentytwoness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver/saver1)*100;
   var saver2;
   if(saver1!=0 && saver!=0){
     saver2=((saver/saver1)*100).toFixed(0);
   }else{
     saver2 =0;
   }
    const result1=saver2;
    const thirdInput = document.getElementById('ftwentysixness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness23(event: any) {
    const firstval = (document.getElementById('ftwentysevenness') as HTMLInputElement).value;
    const secondval = (document.getElementById('ftwentyeightness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver1/saver)*100;
   var saver2;
   if(saver1!=0 && saver!=0){
     saver2=(saver1/saver)*100;
   }else{
     saver2 =0;
   }
    const result1=saver2.toFixed(0);
    const thirdInput = document.getElementById('ftwentynineness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness24(event: any) {
    const firstval = (document.getElementById('fthirtyness') as HTMLInputElement).value;
    const secondval = (document.getElementById('ftwentysevenness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver/saver1)*100;
   var saver2;
   if(saver1!=0 && saver!=0){
     saver2=(saver1/saver)*100;
   }else{
     saver2 =0;
   }
    const result1=saver2.toFixed(0);
    const thirdInput = document.getElementById('fthirtyoneness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness25(event: any) {
    const firstval = (document.getElementById('fiftytwoness') as HTMLInputElement).value;
    const secondval = (document.getElementById('fiftythreeness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
    //var saver2=(saver1/saver)*100;
    var saver2;
    if(saver1!=0 && saver!=0){
      saver2=(saver1/saver)*100;
    }else{
      saver2 =0;
    }
    const result1=saver2.toFixed(0);
    const thirdInput = document.getElementById('fiftyfourness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness26(event: any) {
    const firstval = (document.getElementById('fiftyfiveness') as HTMLInputElement).value;
    const secondval = (document.getElementById('fiftytwoness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
    //var saver2=(saver/saver1)*100;
    var saver2;
    if(saver1!=0 && saver!=0){
      saver2=(saver/saver1)*100;
    }else{
      saver2 =0;
    }
    const result1=saver2.toFixed(0);
    const thirdInput = document.getElementById('fiftysixness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness27(event: any) {
    const firstval = (document.getElementById('fiftysevenness') as HTMLInputElement).value;
    const secondval = (document.getElementById('fiftyeightness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
    //var saver2=(saver1/saver)*100;
    var saver2;
    if(saver1!=0 && saver!=0){
      saver2=(saver1/saver)*100;
    }else{
      saver2 =0;
    }
    const result1=saver2.toFixed(0);
    const thirdInput = document.getElementById('fiftynineness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness28(event: any) {
    const firstval = (document.getElementById('sixtyness') as HTMLInputElement).value;
    const secondval = (document.getElementById('fiftysevenness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
    //var saver2=(saver/saver1)*100;3
    var saver2;
    if(saver1!=0 && saver!=0){
      saver2=(saver/saver1)*100;
    }else{
      saver2 =0;
    }
    const result1=saver2.toFixed(0);
    const thirdInput = document.getElementById('sixtyoneness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }

   ness29(event: any) {
    const firstval = (document.getElementById('ffiftytwoness') as HTMLInputElement).value;
    const secondval = (document.getElementById('ffiftythreeness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
    //var saver2=(saver1/saver)*100;
    var saver2;
    if(saver1!=0 && saver!=0){
      saver2=(saver1/saver)*100;
    }else{
      saver2 =0;
    }
    const result1=saver2.toFixed(0);
    const thirdInput = document.getElementById('ffiftyfourness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness30(event: any) {
    const firstval = (document.getElementById('ffiftyfiveness') as HTMLInputElement).value;
    const secondval = (document.getElementById('ffiftytwoness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
    //var saver2=(saver/saver1)*100;
    var saver2;
    if(saver1!=0 && saver!=0){
      saver2=(saver/saver1)*100;
    }else{
      saver2 =0;
    }
    const result1=saver2.toFixed(0);
    const thirdInput = document.getElementById('ffiftysixness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness31(event: any) {
    const firstval = (document.getElementById('ffiftysevenness') as HTMLInputElement).value;
    const secondval = (document.getElementById('ffiftyeightness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
   // var saver2=(saver1/saver)*100;
   var saver2;
   if(saver1!=0 && saver!=0){
     saver2=(saver1/saver)*100;
   }else{
     saver2 =0;
   }
    const result1=saver2.toFixed(0);
    const thirdInput = document.getElementById('ffiftynineness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  ness32(event: any) {
    const firstval = (document.getElementById('fsixtyness') as HTMLInputElement).value;
    const secondval = (document.getElementById('ffiftysevenness') as HTMLInputElement).value;
    console.log(firstval, secondval);

    var saver  = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    console.log(saver, saver1);
  //  var saver2=(saver/saver1)*100;
  var saver2;
  if(saver1!=0 && saver!=0){
    saver2=(saver/saver1)*100;
  }else{
    saver2 =0;
  }
    const result1=saver2.toFixed(0);
    const thirdInput = document.getElementById('fsixtyoneness') as HTMLInputElement;
    thirdInput.value = result1.toString();
  }
  onSave() {
    var Eone11=this.principalform.get('one1').value;
    var Eone12=this.principalform.get('two2').value;
    var Eone13=(document.getElementById('3three') as HTMLInputElement).value;
    var Eone14=this.principalform.get('four4').value;
    var Eone15=this.principalform.get('five5').value;
    var Eone16=(document.getElementById('6six') as HTMLInputElement).value;
    var Eone21=this.principalform.get('seven7').value;
    var Eone22=this.principalform.get('eight8').value;
    var Eone23=(document.getElementById('9nine') as HTMLInputElement).value;
    var Eone24=this.principalform.get('ten10').value;
    var Eone25=this.principalform.get('eleven11').value;
    var Eone26=(document.getElementById('12twelve') as HTMLInputElement).value;
    var Eone31=(document.getElementById('13thirteen') as HTMLInputElement).value;
    var Eone32=(document.getElementById('14fourteen') as HTMLInputElement).value;
    var Eone33=(document.getElementById('15fifteen') as HTMLInputElement).value;
    var Eone34=(document.getElementById('16sixteen') as HTMLInputElement).value;
    var Eone35=(document.getElementById('17seventeen') as HTMLInputElement).value;
    var Eone36=(document.getElementById('18eighteen') as HTMLInputElement).value;
    var Etwo11=this.principalform.get('nineteen19').value;
    var Etwo12=this.principalform.get('twenty20').value;
    var Etwo13=(document.getElementById('21twentyone') as HTMLInputElement).value;
    var Etwo14=this.principalform.get('twentytwo22').value;
    var Etwo15=this.principalform.get('twentythree23').value;
    var Etwo16=(document.getElementById('24twentyfour') as HTMLInputElement).value;
    var Etwo21=this.principalform.get('twentyfive25').value;
    var Etwo22=this.principalform.get('twentysix26').value;
    var Etwo23=(document.getElementById('27twentyseven') as HTMLInputElement).value;
    var Etwo24=this.principalform.get('twentyeight28').value;
    var Etwo25=this.principalform.get('twentynine29').value;
    var Etwo26=(document.getElementById('30thirty') as HTMLInputElement).value;
    var Etwo31=(document.getElementById('31thirtyone') as HTMLInputElement).value;
    var Etwo32=(document.getElementById('32thirtytwo') as HTMLInputElement).value;
    var Etwo33=(document.getElementById('33thirtythree') as HTMLInputElement).value;
    var Etwo34=(document.getElementById('34thirtyfour') as HTMLInputElement).value;
    var Etwo35=(document.getElementById('35thirtyfive') as HTMLInputElement).value;
    var Etwo36=(document.getElementById('36thirtysix') as HTMLInputElement).value;
    var Wtwo11=this.principalform.get('oneness').value;
    var Wtwo12=this.principalform.get('twoness').value;
    var Wtwo13=(document.getElementById('threeness') as HTMLInputElement).value;
    var Wtwo14=this.principalform.get('fourness').value;
    var Wtwo15=(document.getElementById('fiveness') as HTMLInputElement).value;
    var Wtwo16=this.principalform.get('sixness').value;
    var Wtwo17=this.principalform.get('eightness').value;
    var Wtwo18=(document.getElementById('nineness') as HTMLInputElement).value;
    var Wtwo19=this.principalform.get('tenness').value;
    var Wtwo10=(document.getElementById('elevenness') as HTMLInputElement).value;
    var Wtwo21=this.principalform.get('twelveness').value;
    var Wtwo22=this.principalform.get('thirteenness').value;
    var Wtwo23=(document.getElementById('fourteenness') as HTMLInputElement).value;
    var Wtwo24=this.principalform.get('fifteenness').value;
    var Wtwo25=(document.getElementById('sixteenness') as HTMLInputElement).value;
    var Wtwo26=this.principalform.get('seventeenness').value;
    var Wtwo27=this.principalform.get('eighteenness').value;
    var Wtwo28=(document.getElementById('nineteenness') as HTMLInputElement).value;
    var Wtwo29=this.principalform.get('twentyness').value;
    var Wtwo20=(document.getElementById('twentyoneness') as HTMLInputElement).value;
    var Wtwo31=this.principalform.get('twentytwoness').value;
    var Wtwo32=this.principalform.get('twentythreeness').value;
    var Wtwo33=(document.getElementById('twentyfourness') as HTMLInputElement).value;
    var Wtwo34=this.principalform.get('twentyfiveness').value;
    var Wtwo35=(document.getElementById('twentysixness') as HTMLInputElement).value;
    var Wtwo36=this.principalform.get('twentysevenness').value;
    var Wtwo37=this.principalform.get('twentyeightness').value;
    var Wtwo38=(document.getElementById('twentynineness') as HTMLInputElement).value;
    var Wtwo39=this.principalform.get('thirtyness').value;
    var Wtwo30=(document.getElementById('thirtyoneness') as HTMLInputElement).value;
    var Wtwo41=this.principalform.get('ftwentytwoness').value;
    var Wtwo42=this.principalform.get('ftwentythreeness').value;
    var Wtwo43=(document.getElementById('ftwentyfourness') as HTMLInputElement).value;
    var Wtwo44=this.principalform.get('ftwentyfiveness').value;
    var Wtwo45=(document.getElementById('ftwentysixness') as HTMLInputElement).value;
    var Wtwo46=this.principalform.get('ftwentysevenness').value;
    var Wtwo47=this.principalform.get('ftwentyeightness').value;
    var Wtwo48=(document.getElementById('ftwentynineness') as HTMLInputElement).value;
    var Wtwo49=this.principalform.get('fthirtyness').value;
    var Wtwo40=(document.getElementById('fthirtyoneness') as HTMLInputElement).value;
    var Wtwo51=this.principalform.get('thirtytwoness').value;
    var Wtwo52=this.principalform.get('thirtythreeness').value;
    var Wtwo53=(document.getElementById('thirtyfourness') as HTMLInputElement).value;
    var Wtwo54=this.principalform.get('thirtyfiveness').value;
    var Wtwo55=(document.getElementById('thirtysixness') as HTMLInputElement).value;
    var Wtwo56=this.principalform.get('thirtysevenness').value;
    var Wtwo57=this.principalform.get('thirtyeightness').value;
    var Wtwo58=(document.getElementById('thirtynineness') as HTMLInputElement).value;
    var Wtwo59=this.principalform.get('fourtyness').value;
    var Wtwo50=(document.getElementById('fourtyoneness') as HTMLInputElement).value;
    var Wtwo61=this.principalform.get('fourtytwoness').value;
    var Wtwo62=this.principalform.get('fourtythreeness').value;
    var Wtwo63=(document.getElementById('fourtyfourness') as HTMLInputElement).value;
    var Wtwo64=this.principalform.get('fourtyfiveness').value;
    var Wtwo65=(document.getElementById('fourtysixness') as HTMLInputElement).value;
    var Wtwo66=this.principalform.get('fourtysevenness').value;
    var Wtwo67=this.principalform.get('fourtyeightness').value;
    var Wtwo68=(document.getElementById('fourtynineness') as HTMLInputElement).value;
    var Wtwo69=this.principalform.get('fiftyness').value;
    var Wtwo60=(document.getElementById('fiftyoneness') as HTMLInputElement).value;
    var Wtwo71=this.principalform.get('fiftytwoness').value;
    var Wtwo72=this.principalform.get('fiftythreeness').value;
    var Wtwo73=(document.getElementById('fiftyfourness') as HTMLInputElement).value;
    var Wtwo74=this.principalform.get('fiftyfiveness').value;
    var Wtwo75=(document.getElementById('fiftysixness') as HTMLInputElement).value;
    var Wtwo76=this.principalform.get('fiftysevenness').value;
    var Wtwo77=this.principalform.get('fiftyeightness').value;
    var Wtwo78=(document.getElementById('fiftynineness') as HTMLInputElement).value;
    var Wtwo79=this.principalform.get('sixtyness').value;
    var Wtwo70=(document.getElementById('sixtyoneness') as HTMLInputElement).value;
    var Wtwo81=this.principalform.get('ffiftytwoness').value;
    var Wtwo82=this.principalform.get('ffiftythreeness').value;
    var Wtwo83=(document.getElementById('ffiftyfourness') as HTMLInputElement).value;
    var Wtwo84=this.principalform.get('ffiftyfiveness').value;
    var Wtwo85=(document.getElementById('ffiftysixness') as HTMLInputElement).value;
    var Wtwo86=this.principalform.get('ffiftysevenness').value;
    var Wtwo87=this.principalform.get('ffiftyeightness').value;
    var Wtwo88=(document.getElementById('ffiftynineness') as HTMLInputElement).value;
    var Wtwo89=this.principalform.get('fsixtyness').value;
    var Wtwo80=(document.getElementById('fsixtyoneness') as HTMLInputElement).value;
    var three11=this.principalform.get('Board1').value;
    var three12=this.principalform.get('Board2').value;
    var three13=this.principalform.get('Board3').value;
    var three14=this.principalform.get('Board4').value;
    var three21=this.principalform.get('Key1').value;
    var three22=this.principalform.get('Key2').value;
    var three23=this.principalform.get('Key3').value;
    var three24=this.principalform.get('Key4').value;
    var three31=this.principalform.get('Employees1').value;
    var three32=this.principalform.get('Employees2').value;
    var three33=this.principalform.get('Employees3').value;
    var three34=this.principalform.get('Employees4').value;
    var three41=this.principalform.get('Workers1').value;
    var three42=this.principalform.get('Workers2').value;
    var three43=this.principalform.get('Workers3').value;
    var three44=this.principalform.get('Workers4').value;
    var four=this.dropinput4;
    if(four == "Yes"){
    var four1=(document.getElementById('sea421') as HTMLInputElement).value;
    }
    else{
      var four1='';
    }
    var five=this.principalform.get('sea5').value;
    var six11=this.principalform.get('Harassment1').value;
    var six12=this.principalform.get('Harassment2').value;
    var six13=this.principalform.get('Harassment3').value;
    var six14=this.principalform.get('Harassment4').value;
    var six15=this.principalform.get('Harassment5').value;
    var six16=this.principalform.get('Harassment6').value;
    var six21=this.principalform.get('Discrimination1').value;
    var six22=this.principalform.get('Discrimination2').value;
    var six23=this.principalform.get('Discrimination3').value;
    var six24=this.principalform.get('Discrimination4').value;
    var six25=this.principalform.get('Discrimination5').value;
    var six26=this.principalform.get('Discrimination6').value;
    var six31=this.principalform.get('Child1').value;
    var six32=this.principalform.get('Child2').value;
    var six33=this.principalform.get('Child3').value;
    var six34=this.principalform.get('Child4').value;
    var six35=this.principalform.get('Child5').value;
    var six36=this.principalform.get('Child6').value;
    var six41=this.principalform.get('Involuntary1').value;
    var six42=this.principalform.get('Involuntary2').value;
    var six43=this.principalform.get('Involuntary3').value;
    var six44=this.principalform.get('Involuntary4').value;
    var six45=this.principalform.get('Involuntary5').value;
    var six46=this.principalform.get('Involuntary6').value;
    var six51=this.principalform.get('Wages1').value;
    var six52=this.principalform.get('Wages2').value;
    var six53=this.principalform.get('Wages3').value;
    var six54=this.principalform.get('Wages4').value;
    var six55=this.principalform.get('Wages5').value;
    var six56=this.principalform.get('Wages6').value;
    var six61=this.principalform.get('rights1').value;
    var six62=this.principalform.get('rights2').value;
    var six63=this.principalform.get('rights3').value;
    var six64=this.principalform.get('rights4').value;
    var six65=this.principalform.get('rights5').value;
    var six66=this.principalform.get('rights6').value;
    var seven=this.principalform.get('sea7').value;
    var eight=this.principalform.get('sea8').value;
    var nine1=this.principalform.get('forreal1').value;
    var nine2=this.principalform.get('forreal2').value;
    var nine3=this.principalform.get('forreal3').value;
    var nine4=this.principalform.get('forreal4').value;
    var nine5=this.principalform.get('forreal5').value;
    var ten=this.principalform.get('sea10').value;
    this.initialDraftReport2[17] = {Eone11,Eone12,Eone13,Eone14,Eone15,Eone16,Eone21,Eone22,Eone23,Eone24,Eone25,Eone26,
      Eone31,Eone32,Eone33,Eone34,Eone35,Eone36,Etwo11,Etwo12,Etwo13,Etwo14,Etwo15,Etwo16,Etwo21,Etwo22,Etwo23,Etwo24,Etwo25,Etwo26,
      Etwo31,Etwo32,Etwo33,Etwo34,Etwo35,Etwo36,Wtwo11,Wtwo12,Wtwo13,Wtwo14,Wtwo15,Wtwo16,Wtwo17,Wtwo18,Wtwo19,Wtwo10,Wtwo21,Wtwo22,Wtwo23,Wtwo24,Wtwo25,Wtwo26,Wtwo27,Wtwo28,Wtwo29,Wtwo20,
      Wtwo31,Wtwo32,Wtwo33,Wtwo34,Wtwo35,Wtwo36,Wtwo37,Wtwo38,Wtwo39,Wtwo30,
      Wtwo41,Wtwo42,Wtwo43,Wtwo44,Wtwo45,Wtwo46,Wtwo47,Wtwo48,Wtwo49,Wtwo40,
      Wtwo51,Wtwo52,Wtwo53,Wtwo54,Wtwo55,Wtwo56,Wtwo57,Wtwo58,Wtwo59,Wtwo50,
      Wtwo61,Wtwo62,Wtwo63,Wtwo64,Wtwo65,Wtwo66,Wtwo67,Wtwo68,Wtwo69,Wtwo60,
      Wtwo71,Wtwo72,Wtwo73,Wtwo74,Wtwo75,Wtwo76,Wtwo77,Wtwo78,Wtwo79,Wtwo70,
      Wtwo81,Wtwo82,Wtwo83,Wtwo84,Wtwo85,Wtwo86,Wtwo87,Wtwo88,Wtwo89,Wtwo80,
      three11,three12,three13,three14,three21,three22,three23,three24,three31,three32,three33,three34,
      three41,three42,three43,three44,four,four1,five,six11,six12,six13,six14,six15,six16,six21,six22,six23,six24,six25,six26,
      six31,six32,six33,six34,six35,six36,six41,six42,six43,six44,six45,six46,six51,six52,six53,six54,six55,six56,
      six61,six62,six63,six64,six65,six66,seven,eight,nine1,nine2,nine3,nine4,nine5,Table1:JSON.stringify(this.lookupdtl),ten}
    console.log(this.initialDraftReport2);
    const currentInitialDraftReport = this.initialDraftReport2;
    this.sele.liquid[17]=currentInitialDraftReport[17];
    console.log(currentInitialDraftReport);
    console.log(this.sele.liquid[17])
    console.log(this.sele.liquid);
  
    this.sele.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      console.log(JSON.parse(reportdata.InitialDraftReport));
      console.log(this.sele.liquid[17])
     var init=JSON.parse(reportdata.InitialDraftReport);
     if(init!=null){
     init[17]=this.sele.liquid[17]
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
     init[17]=this.sele.liquid[17]
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
