import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { CalforworkermComponent } from '../principal3a/calforworkerm/calforworkerm.component';
import { CalforworkerfComponent } from '../principal3a/calforworkerf/calforworkerf.component';
import { CalforprefComponent } from '../principal3a/calforpref/calforpref.component';
import { CalcforpemplComponent } from '../principal3a/calcforpempl/calcforpempl.component';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-gd4',
  templateUrl: './gd4.component.html',
  styleUrls: ['./gd4.component.scss']
})
export class Gd4Component implements OnInit {
  gdform:FormGroup
  currentYear:any
  val1:any;
  val11:any;
  val2:any;
  bringmetot:any;
  fmlife:any;
  reportid:any;
  selectedValue:any;
  initialDraftReport1: any = {};
  previousYear:any
  holdit:any;
  holdit1:any;
  holdit2:any;
  bringmetot1:any;
  previousOfPreviousYear:any
  @Input() emp:any;
  orgId:any;
  
  constructor(private fb: FormBuilder,
    public dialog: MatDialog,
    private _datepipe : DatePipe,
    private cs:CreatereportforbrsrService,
    private aa: ActivatedRoute,
    private ss: SelectbrsrService,
    private is:ImportdisService,
    public AuthService:AuthService, ) { 
    
    
  }

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.gdform = this.fb.group({
      emp1:[],
      emp2:[],
      emp3:[],
      emp4:[],
      emp5:[],
      emp6:[],
      emp7:[],
      emp8:[],
      emp9:[],
      emp10:[],
      emp11:[],
      emp12:[],
      emp13:[],
      emp14:[],
      emp15:[],
      emp16:[],
      emp17:[],
      emp18:[],
      emp19:[],
      emp20:[],
      emp21:[],
      emp22:[],
      emp23:[],
      emp24:[],
      emp25:[],
      emp26:[],
      emp27:[],
      emp28:[],
      emp29:[],
      emp30:[],
      emp31:[],
      emp32:[],
      emp33:[],
      emp34:[],
      emp35:[],
      emp36:[],
      emp37:[],
      emp38:[],
      emp39:[],
      emp40:[],
      emp41:[],
      emp42:[],
      emp43:[],
      emp44:[],
      emp45:[],
      emp46:[],
      emp47:[],
      emp48:[],
      emp49:[],
      emp50:[],
      emp51:[],
      emp52:[],
      emp53:[],
      emp54:[],
      emp55:[],
      emp56:[],
      emp57:[],
      emp58:[],
      emp59:[],
      emp60:[],
      emp61:[],
      emp62:[],
      emp63:[],
      emp64:[],
      emp65:[],
      emp66:[],
      emp67:[],
      emp68:[],
      emp69:[],
      emp70:[],
      emp71:[],
      emp72:[],
      emp73:[],
      emp74:[],
      emp75:[],
      emp76:[],
      emp77:[],
      emp78:[],
      emp79:[],
      emp80:[],
      emp81:[],
      emp82:[],
      emp83:[],
      emp84:[]
    })
    const Today = new Date();
    this.currentYear = Today.getFullYear();
    this.previousYear = this.currentYear - 1;
    this.previousOfPreviousYear = this.currentYear - 2;

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
        this.gdform.patchValue(this.initialDraftReport1);
        this.gdform.patchValue({
          emp1: this.initialDraftReport1[3]['Question1'],
          emp2: this.initialDraftReport1[3]['Question2'],
          emp3: this.initialDraftReport1[3]['Question3'],
          emp4: this.initialDraftReport1[3]['Question4'],
          emp5: this.initialDraftReport1[3]['Question5'],
          emp6: this.initialDraftReport1[3]['Question6'],
          emp7: this.initialDraftReport1[3]['Question7'],
          emp8: this.initialDraftReport1[3]['Question8'],
          emp9: this.initialDraftReport1[3]['Question9'],
          emp10: this.initialDraftReport1[3]['Question10'],
          emp11: this.initialDraftReport1[3]['Question11'],
          emp12: this.initialDraftReport1[3]['Question12'],
          emp13: this.initialDraftReport1[3]['Question13'],
          emp14: this.initialDraftReport1[3]['Question14'],
          emp15: this.initialDraftReport1[3]['Question15'],
          emp16: this.initialDraftReport1[3]['Question16'],
          emp17: this.initialDraftReport1[3]['Question17'],
          emp18: this.initialDraftReport1[3]['Question18'],
          emp19: this.initialDraftReport1[3]['Question19'],
          emp20: this.initialDraftReport1[3]['Question20'],
          emp21: this.initialDraftReport1[3]['Question21'],
          emp22: this.initialDraftReport1[3]['Question22'],
          emp23: this.initialDraftReport1[3]['Question23'],
          emp24: this.initialDraftReport1[3]['Question24'],
          emp25: this.initialDraftReport1[3]['Question25'],
          emp26: this.initialDraftReport1[3]['Question26'],
          emp27: this.initialDraftReport1[3]['Question27'],
          emp28: this.initialDraftReport1[3]['Question28'],
          emp29: this.initialDraftReport1[3]['Question29'],
          emp30: this.initialDraftReport1[3]['Question30'],
//second question
emp31:this.initialDraftReport1[3]['Question31'],
emp32:this.initialDraftReport1[3]['Question32'],
emp33:this.initialDraftReport1[3]['Question33'],
emp34:this.initialDraftReport1[3]['Question34'],
emp35:this.initialDraftReport1[3]['Question35'],
emp36:this.initialDraftReport1[3]['Question36'],
emp37:this.initialDraftReport1[3]['Question37'],
emp38:this.initialDraftReport1[3]['Question38'],
emp39:this.initialDraftReport1[3]['Question39'],
emp40:this.initialDraftReport1[3]['Question40'],
emp41:this.initialDraftReport1[3]['Question41'],
emp42:this.initialDraftReport1[3]['Question42'],
emp43:this.initialDraftReport1[3]['Question43'],
emp44:this.initialDraftReport1[3]['Question44'],
emp45:this.initialDraftReport1[3]['Question45'],
emp46:this.initialDraftReport1[3]['Question46'],
emp47:this.initialDraftReport1[3]['Question47'],
emp48:this.initialDraftReport1[3]['Question48'],
emp49:this.initialDraftReport1[3]['Question49'],
emp50:this.initialDraftReport1[3]['Question50'],
emp51:this.initialDraftReport1[3]['Question51'],
emp52:this.initialDraftReport1[3]['Question52'],
emp53:this.initialDraftReport1[3]['Question53'],
emp54:this.initialDraftReport1[3]['Question54'],
emp55:this.initialDraftReport1[3]['Question55'],
emp56:this.initialDraftReport1[3]['Question56'],
emp57:this.initialDraftReport1[3]['Question57'],
emp58:this.initialDraftReport1[3]['Question58'],
emp59:this.initialDraftReport1[3]['Question59'],
emp60:this.initialDraftReport1[3]['Question60'],
//third question
          emp61: this.initialDraftReport1[3]['Question61'],
          emp62: this.initialDraftReport1[3]['Question62'],
          emp63: this.initialDraftReport1[3]['Question63'],
          emp64: this.initialDraftReport1[3]['Question64'],
          emp65: this.initialDraftReport1[3]['Question65'],
          emp66: this.initialDraftReport1[3]['Question66'],
          //fourth question
          emp67:this.initialDraftReport1[3]['Question67'],
          emp68:this.initialDraftReport1[3]['Question68'],
          emp69:this.initialDraftReport1[3]['Question69'],
          emp70:this.initialDraftReport1[3]['Question70'],
          emp71: this.initialDraftReport1[3]['Question71'],
          emp72: this.initialDraftReport1[3]['Question72'],
          emp73: this.initialDraftReport1[3]['Question73'],
          emp74: this.initialDraftReport1[3]['Question74'],
          emp75: this.initialDraftReport1[3]['Question75'],
          emp76: this.initialDraftReport1[3]['Question76'],
          emp77: this.initialDraftReport1[3]['Question77'],
          emp78: this.initialDraftReport1[3]['Question78'],
          emp79: this.initialDraftReport1[3]['Question79'],
          emp80: this.initialDraftReport1[3]['Question80'],
          emp81: this.initialDraftReport1[3]['Question81'],
          emp82: this.initialDraftReport1[3]['Question82'],
          emp83: this.initialDraftReport1[3]['Question83'],
          emp84: this.initialDraftReport1[3]['Question84'],
        });
      
        // var draft={value:this.initialDraftReport1[2]['ten']}
        // this.OnChangeType(draft)
        // var draft1={value:this.initialDraftReport1[2]['eleven']}
        // this.OnChangeType1(draft1)
      }
    });


  }
  onSave() {
    var Question1=(document.getElementById('first') as HTMLInputElement).value;
    var Question2 = (document.getElementById('second') as HTMLInputElement).value;
    var Question3 = (document.getElementById('third') as HTMLInputElement).value;
    var Question4 = (document.getElementById('fourth') as HTMLInputElement).value;
    var Question5 = (document.getElementById('fifth') as HTMLInputElement).value;
    var Question6=(document.getElementById('sixth') as HTMLInputElement).value;
    var Question7 = (document.getElementById('seventh') as HTMLInputElement).value;
    var Question8 = (document.getElementById('eight') as HTMLInputElement).value;
    var Question9 = (document.getElementById('nine') as HTMLInputElement).value;
    var Question10 = (document.getElementById('ten') as HTMLInputElement).value;
    var Question11=(document.getElementById('eleven') as HTMLInputElement).value;
    var Question12 = (document.getElementById('twelve') as HTMLInputElement).value;
    var Question13 = (document.getElementById('thirteen') as HTMLInputElement).value;
    var Question14 = (document.getElementById('fourteen') as HTMLInputElement).value;
    var Question15 = (document.getElementById('fifteen') as HTMLInputElement).value;
    var Question16=(document.getElementById('sixteen') as HTMLInputElement).value;
    var Question17 = (document.getElementById('seventeen') as HTMLInputElement).value;
    var Question18 = (document.getElementById('eighteen') as HTMLInputElement).value;
    var Question19 = (document.getElementById('nineteen') as HTMLInputElement).value;
    var Question20 = (document.getElementById('twenty') as HTMLInputElement).value;
    var Question21=(document.getElementById('twentyone') as HTMLInputElement).value;
    var Question22 = (document.getElementById('twentytwo') as HTMLInputElement).value;
    var Question23 = (document.getElementById('twentythree') as HTMLInputElement).value;
    var Question24 = (document.getElementById('twentyfour') as HTMLInputElement).value;
    var Question25 = (document.getElementById('twentyfive') as HTMLInputElement).value;
    var Question26 = (document.getElementById('twentysix') as HTMLInputElement).value;
    var Question27 = (document.getElementById('twentyseven') as HTMLInputElement).value;
    var Question28 = (document.getElementById('twentyeight') as HTMLInputElement).value;
    var Question29 = (document.getElementById('twentynine') as HTMLInputElement).value;
    var Question30 = (document.getElementById('thirty') as HTMLInputElement).value;
    //second question
    var Question31=(document.getElementById('thirtyone') as HTMLInputElement).value;
    var Question32 = (document.getElementById('thirtytwo') as HTMLInputElement).value;
    var Question33 = (document.getElementById('thirtythree') as HTMLInputElement).value;
    var Question34 = (document.getElementById('thirtyfour') as HTMLInputElement).value;
    var Question35 = (document.getElementById('thirtyfive') as HTMLInputElement).value;
    var Question36=(document.getElementById('thirtysix') as HTMLInputElement).value;
    var Question37 = (document.getElementById('thirtyseven') as HTMLInputElement).value;
    var Question38 = (document.getElementById('thirtyeight') as HTMLInputElement).value;
    var Question39 = (document.getElementById('thirtynine') as HTMLInputElement).value;
    var Question40 = (document.getElementById('fourty') as HTMLInputElement).value;
    var Question41=(document.getElementById('fourtyone') as HTMLInputElement).value;
    var Question42 = (document.getElementById('fourtytwo') as HTMLInputElement).value;
    var Question43 = (document.getElementById('fourtythree') as HTMLInputElement).value;
    var Question44 = (document.getElementById('fourtyfour') as HTMLInputElement).value;
    var Question45 = (document.getElementById('fourtyfive') as HTMLInputElement).value;
    var Question46=(document.getElementById('fourtysix') as HTMLInputElement).value;
    var Question47 = (document.getElementById('fourtyseven') as HTMLInputElement).value;
    var Question48 = (document.getElementById('fourtyeight') as HTMLInputElement).value;
    var Question49 = (document.getElementById('fourtynine') as HTMLInputElement).value;
    var Question50 = (document.getElementById('fifty') as HTMLInputElement).value;
    var Question51=(document.getElementById('fiftyone') as HTMLInputElement).value;
    var Question52 = (document.getElementById('fiftytwo') as HTMLInputElement).value;
    var Question53 = (document.getElementById('fiftythree') as HTMLInputElement).value;
    var Question54 = (document.getElementById('fiftyfour') as HTMLInputElement).value;
    var Question55 = (document.getElementById('fiftyfive') as HTMLInputElement).value;
    var Question56=(document.getElementById('fiftysix') as HTMLInputElement).value;
    var Question57 = (document.getElementById('fiftyseven') as HTMLInputElement).value;
    var Question58 = (document.getElementById('fiftyeight') as HTMLInputElement).value;
    var Question59 = (document.getElementById('fiftynine') as HTMLInputElement).value;
    var Question60 = (document.getElementById('sixty') as HTMLInputElement).value;
    //third question
    var Question61=(document.getElementById('sixtyone') as HTMLInputElement).value;
    var Question62 = (document.getElementById('sixtytwo') as HTMLInputElement).value;
    var Question63 = (document.getElementById('sixtythree') as HTMLInputElement).value;
    var Question64 = (document.getElementById('sixtyfour') as HTMLInputElement).value;
    var Question65 = (document.getElementById('sixtyfive') as HTMLInputElement).value;
    var Question66=(document.getElementById('sixtysix') as HTMLInputElement).value;
   //fourth question
    var Question67 = (document.getElementById('sixtyseven') as HTMLInputElement).value;
    var Question68 = (document.getElementById('sixtyeight') as HTMLInputElement).value;
    var Question69 = (document.getElementById('sixtynine') as HTMLInputElement).value;
    var Question70 = (document.getElementById('seventy') as HTMLInputElement).value;
    var Question71=(document.getElementById('seventyone') as HTMLInputElement).value;
    var Question72 = (document.getElementById('seventytwo') as HTMLInputElement).value;
    var Question73 = (document.getElementById('seventythree') as HTMLInputElement).value;
    var Question74 = (document.getElementById('seventyfour') as HTMLInputElement).value;
    var Question75 = (document.getElementById('seventyfive') as HTMLInputElement).value;
    var Question76=(document.getElementById('seventysix') as HTMLInputElement).value;
    var Question77 = (document.getElementById('seventyseven') as HTMLInputElement).value;
    var Question78 = (document.getElementById('seventyeight') as HTMLInputElement).value;
    var Question79 = (document.getElementById('seventynine') as HTMLInputElement).value;
    var Question80 = (document.getElementById('eighty') as HTMLInputElement).value;
    var Question81=(document.getElementById('eightyone') as HTMLInputElement).value;
    var Question82 = (document.getElementById('eightytwo') as HTMLInputElement).value;
    var Question83 = (document.getElementById('eightythree') as HTMLInputElement).value;
    var Question84 = (document.getElementById('eightyfour') as HTMLInputElement).value;
    // var  six = (document.getElementById('Assessments2x2') as HTMLInputElement).value;
    // var seven = this.gdform.get('puta').value;
    // var eight = this.gdform.get('puta1').value;
    // var nine = this.gdform.get('puta2').value;
    // var ten = this.val1;
    // var eleven = this.val2;
    this.initialDraftReport1[3] = {Question1,Question2,Question3,Question4,Question5,Question6,Question7,Question8,Question9,Question10,Question11,Question12,Question13,Question14,Question15,Question16,Question17,Question18,Question19,Question20,Question21,Question22,Question23,Question24,
      Question25,Question26,Question27,Question28,Question29,Question30,Question31,Question32,Question33,Question34,Question35,Question36,Question37,Question38,Question39,Question40,Question41,Question42,Question43,Question44,Question45,Question46,Question47,Question48,Question49,Question50,
      Question51,Question52,Question53,Question54,Question55,Question56,Question57,Question58,Question59,Question60,Question61,Question62,Question63,Question64,Question65,Question66,Question67,Question68,Question69,Question70,Question71,Question72,Question73,Question74,Question75,Question76,
      Question77,Question78,Question79,Question80,Question81,Question82,Question83,Question84
    }
    console.log(this.initialDraftReport1);
    const currentInitialDraftReport = this.initialDraftReport1;
    this.ss.liquid[3]=currentInitialDraftReport[3];
    console.log(currentInitialDraftReport);
    console.log(this.ss.liquid[3])
    console.log(this.ss.liquid);
  
    this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      console.log(JSON.parse(reportdata.InitialDraftReport));
      console.log(this.ss.liquid[3])
     var init=JSON.parse(reportdata.InitialDraftReport);
     if(init!=null){
     init[3]=this.ss.liquid[3]
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
     init[3]=this.ss.liquid[3]
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
  addreset9(data) {
    const dialogRef = this.dialog.open(CalcforpemplComponent, {
        autoFocus: false,
        data: "one",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(this.ss.permaemp);
      this.holdit=this.ss.permaemp3;
      this.gdform.get('emp73')
            .setValue(this.ss.permaemp);
        if (result) {
            console.log(result);
        }
    });
    
}
  addreset7(data) {
    const dialogRef = this.dialog.open(CalcforpemplComponent, {
        autoFocus: false,
        data: "one",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(this.ss.permaemp);
      this.holdit=this.ss.permaemp3;
      this.gdform.get('emp70')
            .setValue(this.ss.permaemp);
        if (result) {
            console.log(result);
        }
    });
    
}
  addreset5(data) {
    const dialogRef = this.dialog.open(CalcforpemplComponent, {
        autoFocus: false,
        data: "one",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(this.ss.permaemp);
      this.holdit=this.ss.permaemp3;
      this.gdform.get('emp67')
            .setValue(this.ss.permaemp);
        if (result) {
            console.log(result);
        }
    });
    
}
addreset10(data) {
  const dialogRef = this.dialog.open(CalforprefComponent, {
      autoFocus: false,
      data: "one",
  });
  dialogRef.afterClosed().subscribe((result) => {
    // console.log(this.ss.permaemp1);
    this.gdform.get('emp74')
          .setValue(this.ss.permaemp1);
      if (result) {
          console.log(result);
      }
      const refer=((this.ss.permaemp3+this.ss.permaemp2)/intconv)*100;
      console.log(refer);
      const thirdInput = document.getElementById('seventyfive') as HTMLInputElement;
      thirdInput.value = refer.toFixed(0).toString();
  });
  this.bringmetot=(document.getElementById('first') as HTMLInputElement).value;
  console.log(this.bringmetot);
  var intconv=parseFloat(this.bringmetot.replace(/,/g, ''))
  console.log(intconv);
  // console.log(typeof(intconv));
  // console.log(typeof(this.holdit));
  // console.log(this.holdit1)
 
}
addreset8(data) {
  const dialogRef = this.dialog.open(CalforprefComponent, {
      autoFocus: false,
      data: "one",
  });
  dialogRef.afterClosed().subscribe((result) => {
    // console.log(this.ss.permaemp1);
    this.gdform.get('emp71')
          .setValue(this.ss.permaemp1);
      if (result) {
          console.log(result);
      }
      const refer=((this.ss.permaemp3+this.ss.permaemp2)/intconv)*100;
      console.log(refer);
      const thirdInput = document.getElementById('seventytwo') as HTMLInputElement;
      thirdInput.value = refer.toFixed(0).toString();
  });
  this.bringmetot=(document.getElementById('first') as HTMLInputElement).value;
  console.log(this.bringmetot);
  var intconv=parseFloat(this.bringmetot.replace(/,/g, ''))
  console.log(intconv);
  // console.log(typeof(intconv));
  // console.log(typeof(this.holdit));
  // console.log(this.holdit1)
 
}
addreset6(data) {
  const dialogRef = this.dialog.open(CalforprefComponent, {
      autoFocus: false,
      data: "one",
  });
  dialogRef.afterClosed().subscribe((result) => {
    // console.log(this.ss.permaemp1);
    this.gdform.get('emp68')
          .setValue(this.ss.permaemp1);
      if (result) {
          console.log(result);
      }
      const refer=((this.ss.permaemp3+this.ss.permaemp2)/intconv)*100;
      console.log(refer);
      const thirdInput = document.getElementById('sixtynine') as HTMLInputElement;
      thirdInput.value = refer.toFixed(0).toString();
  });
  this.bringmetot=(document.getElementById('first') as HTMLInputElement).value;
  console.log(this.bringmetot);
  var intconv=parseFloat(this.bringmetot.replace(/,/g, ''))
  console.log(intconv);
  // console.log(typeof(intconv));
  // console.log(typeof(this.holdit));
  // console.log(this.holdit1)
 
}
  qu1(event: any) {
    const firstval = (document.getElementById('first') as HTMLInputElement).value;
    const secondval = (document.getElementById('second') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
    if(saver1!=0 && saver!=0){
     result = ((saver1 / saver) * 100).toFixed(0);
    }else{
     result =0;
    }
    const subt=saver-saver1
    const roundedResult1a = subt.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult1 = Number(roundedResult1a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const roundedResulta = result.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult = Number(roundedResulta).toLocaleString('en-IN'); // Format the number with Indian standard commas
    
    const thirdInput = document.getElementById('third') as HTMLInputElement;
    thirdInput.value = roundedResult.toString();
    const thirdInput1 = document.getElementById('fourth') as HTMLInputElement;
    thirdInput1.value = roundedResult1.toString();
    const fourthval = (document.getElementById('fourth') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    // const result1=(saver2/saver)*100
    var result1;
    if(saver2!=0 && saver!=0){
     result1 = ((saver2 / saver) * 100).toFixed(0);
    }else{
     result1 =0;
    }
    const thirdInput12 = document.getElementById('fifth') as HTMLInputElement;
    const res= result1.toFixed(0).toString();
    thirdInput12.value  = Number(res).toLocaleString('en-IN'); // Format the number with Indian standard commas
  }
  
  qu3(event: any) {
    const firstval = (document.getElementById('sixth') as HTMLInputElement).value;
    const secondval = (document.getElementById('seventh') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
    if(saver1!=0 && saver!=0){
     result = ((saver1 / saver) * 100).toFixed(0);
    }else{
     result =0;
    }
    const subt=saver-saver1
    const roundedResult1a = subt.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult1 = Number(roundedResult1a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const roundedResulta = result.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult = Number(roundedResulta).toLocaleString('en-IN'); // Format the number with Indian standard commas

    
    const thirdInput = document.getElementById('eight') as HTMLInputElement;
    thirdInput.value = roundedResult.toString();
    const thirdInput1 = document.getElementById('nine') as HTMLInputElement;
    thirdInput1.value = roundedResult1.toString();
    const fourthval = (document.getElementById('nine') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    // const result1=(saver2/saver)*100
    var result1;
    if(saver2!=0 && saver!=0){
     result1 = ((saver2 / saver) * 100).toFixed(0);
    }else{
     result1 =0;
    }
    const thirdInput12 = document.getElementById('ten') as HTMLInputElement;
    const res= result1.toFixed(0).toString();
    thirdInput12.value  = Number(res).toLocaleString('en-IN'); // Format the number with Indian standard commas
  }

  qu4(event: any) {
    const firstval = (document.getElementById('first') as HTMLInputElement).value;
    const secondval = (document.getElementById('second') as HTMLInputElement).value;
    const fourval = (document.getElementById('fourth') as HTMLInputElement).value;
    const sixthval = (document.getElementById('sixth') as HTMLInputElement).value;
    const seventhval = (document.getElementById('seventh') as HTMLInputElement).value;
    const ninthval = (document.getElementById('nine') as HTMLInputElement).value;
    var saver  = parseFloat(sixthval.replace(/\,/g, ''));
    var saver1 = parseFloat(ninthval.replace(/\,/g, ''));
    var saver2 = parseFloat(seventhval.replace(/\,/g, ''));
    var saver3 = parseFloat(fourval.replace(/\,/g, ''));
    var saver4 = parseFloat(secondval.replace(/\,/g, ''));
    var saver5 = parseFloat(firstval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
    if(saver1!=0 && saver!=0){
     result = ((saver1 / saver) * 100).toFixed(0);
    }else{
     result =0;
    }
    const roundedResulta = result.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult10 = Number(roundedResulta).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput = document.getElementById('ten') as HTMLInputElement;
    thirdInput.value = roundedResult10.toString();
    const result1 =saver5 + saver;
    const roundedResult1a = result1.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult1 = Number(roundedResult1a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput1 = document.getElementById('eleven') as HTMLInputElement;
    thirdInput1.value = roundedResult1.toString();
    const result2 =saver4 + saver2;
    const roundedResult2a = result2.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult2 = Number(roundedResult2a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput2 = document.getElementById('twelve') as HTMLInputElement;
    thirdInput2.value = roundedResult2.toString();
    // const result3 =(result2/result1)*100;
    var result3;
    if(result2!=0 && result1!=0){
     result3 = ((result2 / result1) * 100).toFixed(0);
    }else{
     result3 =0;
    }
    const roundedResult3a = result3.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult3 = Number(roundedResult3a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput3 = document.getElementById('thirteen') as HTMLInputElement;
    thirdInput3.value = roundedResult3.toString();
    const result4 =saver1+saver3
    const roundedResult4a = result4.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult4 = Number(roundedResult4a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput4 = document.getElementById('fourteen') as HTMLInputElement;
    thirdInput4.value = roundedResult4.toString();
    // const result5 =(result4/result1)*100;
    var result5;
    if(result4!=0 && result1!=0){
     result5 = ((result4 / result1) * 100).toFixed(0);
    }else{
     result5 =0;
    }
    const roundedResult5a = result5.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult5 = Number(roundedResult5a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput5 = document.getElementById('fifteen') as HTMLInputElement;
    thirdInput5.value = roundedResult5.toString();
  }
  qu5(event: any) {
    
    const firstval = (document.getElementById('sixteen') as HTMLInputElement).value;
    const secondval = (document.getElementById('seventeen') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
    if(saver1!=0 && saver!=0){
     result = ((saver1 / saver) * 100).toFixed(0);
    }else{
     result =0;
    }
    const subt=saver-saver1
    const roundedResult1a = subt.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult1 = Number(roundedResult1a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const roundedResulta = result.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult = Number(roundedResulta).toLocaleString('en-IN'); // Format the number with Indian standard commas
    
    const thirdInput = document.getElementById('eighteen') as HTMLInputElement;
    thirdInput.value = roundedResult.toString();
    const thirdInput1 = document.getElementById('nineteen') as HTMLInputElement;
    thirdInput1.value = roundedResult1.toString();
    const fourthval = (document.getElementById('nineteen') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    // const result1=(saver2/saver)*100
    var result1;
    if(saver2!=0 && saver!=0){
     result1 = ((saver2 / saver) * 100).toFixed(0);
    }else{
     result1 =0;
    }
    const thirdInput12 = document.getElementById('twenty') as HTMLInputElement;
    const res = result1.toFixed(0).toString();
    thirdInput12.value  = Number(res).toLocaleString('en-IN'); // Format the number with Indian standard commas
  }

  qu6(event: any) {
    const firstval = (document.getElementById('sixteen') as HTMLInputElement).value;
    const fourthval = (document.getElementById('nineteen') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(fourthval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
    if(saver1!=0 && saver!=0){
     result = ((saver1 / saver) * 100).toFixed(0);
    }else{
     result =0;
    }
    const roundedResult = result.toFixed(0); // Rounds the result to 2 decimal places
    const thirdInput = document.getElementById('twenty') as HTMLInputElement;
    thirdInput.value = roundedResult.toString();
  }
  qu7(event: any) {
    
    
    const firstval = (document.getElementById('twentyone') as HTMLInputElement).value;
    const secondval = (document.getElementById('twentytwo') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
    if(saver1!=0 && saver!=0){
     result = ((saver1 / saver) * 100).toFixed(0);
    }else{
     result =0;
    }
    const subt=saver-saver1
    const roundedResult1a = subt.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult1 = Number(roundedResult1a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const roundedResulta = result.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult = Number(roundedResulta).toLocaleString('en-IN'); // Format the number with Indian standard commas
    
    const thirdInput = document.getElementById('twentythree') as HTMLInputElement;
    thirdInput.value = roundedResult.toString();
    const thirdInput1 = document.getElementById('twentyfour') as HTMLInputElement;
    thirdInput1.value = roundedResult1.toString();
    const fourthval = (document.getElementById('twentyfour') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    // const result1=(saver2/saver)*100
    var result1;
    if(saver2!=0 && saver!=0){
     result1 = ((saver2 / saver) * 100).toFixed(0);
    }else{
     result1 =0;
    }
    const thirdInput12 = document.getElementById('twentyfive') as HTMLInputElement;
    const res = result1.toString();
    thirdInput12.value  = Number(res).toLocaleString('en-IN'); // Format the number with Indian standard commas
  }

  qu8(event: any) {
    const firstval = (document.getElementById('sixteen') as HTMLInputElement).value;
    const secondval = (document.getElementById('seventeen') as HTMLInputElement).value;
    const fourval = (document.getElementById('nineteen') as HTMLInputElement).value;
    const sixthval = (document.getElementById('twentyone') as HTMLInputElement).value;
    const seventhval = (document.getElementById('twentytwo') as HTMLInputElement).value;
    const ninthval = (document.getElementById('twentyfour') as HTMLInputElement).value;
    var saver  = parseFloat(sixthval.replace(/\,/g, ''));
    var saver1 = parseFloat(ninthval.replace(/\,/g, ''));
    var saver2 = parseFloat(seventhval.replace(/\,/g, ''));
    var saver3 = parseFloat(fourval.replace(/\,/g, ''));
    var saver4 = parseFloat(secondval.replace(/\,/g, ''));
    var saver5 = parseFloat(firstval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
    if(saver1!=0 && saver!=0){
     result = ((saver1 / saver) * 100).toFixed(0);
    }else{
     result =0;
    }
    const roundedResulta = result.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult10 = Number(roundedResulta).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput = document.getElementById('twentyfive') as HTMLInputElement;
    thirdInput.value = roundedResult10.toString();
    const result1 =saver5 + saver;
    const roundedResult1a = result1.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult1 = Number(roundedResult1a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput1 = document.getElementById('twentysix') as HTMLInputElement;
    thirdInput1.value = roundedResult1.toString();
    const result2 =saver4 + saver2;
    const roundedResult2a = result2.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult2 = Number(roundedResult2a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput2 = document.getElementById('twentyseven') as HTMLInputElement;
    thirdInput2.value = roundedResult2.toString();
    // const result3 =(result2/result1)*100;
    var result3;
    if(result2!=0 && result1!=0){
     result3 = ((result2 / result1) * 100).toFixed(0);
    }else{
     result3 =0;
    }
    const roundedResult3a = result3.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult3 = Number(roundedResult3a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput3 = document.getElementById('twentyeight') as HTMLInputElement;
    thirdInput3.value = roundedResult3.toString();
    const result4 =saver1+saver3
    const roundedResult4a = result4.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult4 = Number(roundedResult4a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput4 = document.getElementById('twentynine') as HTMLInputElement;
    thirdInput4.value = roundedResult4.toString();
    // const result5 =(result4/result1)*100;
    var result5;
   if(result4!=0 && result1!=0){
    result5 = ((result4 / result1) * 100).toFixed(0);
   }else{
    result5 =0;
   }
    const roundedResult5a = result5.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult5 = Number(roundedResult5a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput5 = document.getElementById('thirty') as HTMLInputElement;
    thirdInput5.value = roundedResult5.toString();
  }

  qu9(event: any) {
    
    const firstval = (document.getElementById('thirtyone') as HTMLInputElement).value;
    const secondval = (document.getElementById('thirtytwo') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
    if(saver1!=0 && saver!=0){
     result = ((saver1 / saver) * 100).toFixed(0);
    }else{
     result =0;
    }
    const subt=saver-saver1
    const roundedResult1a = subt.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult1 = Number(roundedResult1a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const roundedResulta = result.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult = Number(roundedResulta).toLocaleString('en-IN'); // Format the number with Indian standard commas
    
    const thirdInput = document.getElementById('thirtythree') as HTMLInputElement;
    thirdInput.value = roundedResult.toString();
    const thirdInput1 = document.getElementById('thirtyfour') as HTMLInputElement;
    thirdInput1.value = roundedResult1.toString();
    const fourthval = (document.getElementById('thirtyfour') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    // const result1=(saver2/saver)*100
    var result1;
    if(saver2!=0 && saver!=0){
     result1 = ((saver2 / saver) * 100).toFixed(0);
    }else{
     result1 =0;
    }
    const thirdInput12 = document.getElementById('thirtyfive') as HTMLInputElement;
    const res = result1.toFixed(0).toString();
    thirdInput12.value  = Number(res).toLocaleString('en-IN'); // Format the number with Indian standard commas
  }

  qu10(event: any) {
    const firstval = (document.getElementById('thirtyone') as HTMLInputElement).value;
    const fourthval = (document.getElementById('thirtyfour') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(fourthval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
    if(saver1!=0 && saver!=0){
     result = ((saver1 / saver) * 100).toFixed(0);
    }else{
     result =0;
    }
    const roundedResult = result.toFixed(0); // Rounds the result to 2 decimal places
    const thirdInput = document.getElementById('thirtyfive') as HTMLInputElement;
    thirdInput.value = roundedResult.toString();
  }
  qu11(event: any) {
    const firstval = (document.getElementById('thirtysix') as HTMLInputElement).value;
    const secondval = (document.getElementById('thirtyseven') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
    if(saver1!=0 && saver!=0){
     result = ((saver1 / saver) * 100).toFixed(0);
    }else{
     result =0;
    }
    const subt=saver-saver1
    const roundedResult1a = subt.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult1 = Number(roundedResult1a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const roundedResulta = result.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult = Number(roundedResulta).toLocaleString('en-IN'); // Format the number with Indian standard commas
    
    const thirdInput = document.getElementById('thirtyeight') as HTMLInputElement;
    thirdInput.value = roundedResult.toString();
    const thirdInput1 = document.getElementById('thirtynine') as HTMLInputElement;
    thirdInput1.value = roundedResult1.toString();
    const fourthval = (document.getElementById('thirtynine') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    // const result1=(saver2/saver)*100
    var result1;
    if(saver2!=0 && saver!=0){
     result1 = ((saver2 / saver) * 100).toFixed(0);
    }else{
     result1 =0;
    }
    const thirdInput12 = document.getElementById('fourty') as HTMLInputElement;
    const res = result1.toString();
    thirdInput12.value  = Number(res).toLocaleString('en-IN'); // Format the number with Indian standard commas
  }

  qu12(event: any) {
    const firstval = (document.getElementById('thirtyone') as HTMLInputElement).value;
    const secondval = (document.getElementById('thirtytwo') as HTMLInputElement).value;
    const fourval = (document.getElementById('thirtyfour') as HTMLInputElement).value;
    const sixthval = (document.getElementById('thirtysix') as HTMLInputElement).value;
    const seventhval = (document.getElementById('thirtyseven') as HTMLInputElement).value;
    const ninthval = (document.getElementById('thirtynine') as HTMLInputElement).value;
    var saver  = parseFloat(sixthval.replace(/\,/g, ''));
    var saver1 = parseFloat(ninthval.replace(/\,/g, ''));
    var saver2 = parseFloat(seventhval.replace(/\,/g, ''));
    var saver3 = parseFloat(fourval.replace(/\,/g, ''));
    var saver4 = parseFloat(secondval.replace(/\,/g, ''));
    var saver5 = parseFloat(firstval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
   if(saver1!=0 && saver!=0){
    result = ((saver1 / saver) * 100).toFixed(0);
   }else{
    result =0;
   }
    const roundedResulta = result.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult10 = Number(roundedResulta).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput = document.getElementById('fourty') as HTMLInputElement;
    thirdInput.value = roundedResult10.toString();
    const result1 =saver5 + saver;
    const roundedResult1a = result1.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult1 = Number(roundedResult1a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput1 = document.getElementById('fourtyone') as HTMLInputElement;
    thirdInput1.value = roundedResult1.toString();
    const result2 =saver4 + saver2;
    const roundedResult2a = result2.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult2 = Number(roundedResult2a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput2 = document.getElementById('fourtytwo') as HTMLInputElement;
    thirdInput2.value = roundedResult2.toString();
    // const result3 =(result2/result1)*100;
    var result3;
    if(result2!=0 && result1!=0){
     result3 = ((result2 / result1) * 100).toFixed(0);
    }else{
     result3 =0;
    }
    const roundedResult3a = result3.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult3 = Number(roundedResult3a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput3 = document.getElementById('fourtythree') as HTMLInputElement;
    thirdInput3.value = roundedResult3.toString();
    const result4 =saver1+saver3
    const roundedResult4a = result4.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult4 = Number(roundedResult4a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput4 = document.getElementById('fourtyfour') as HTMLInputElement;
    thirdInput4.value = roundedResult4.toString();
    // const result5 =(result4/result1)*100;
    var result5;
    if(result4!=0 && result1!=0){
     result5 = ((result4 / result1) * 100).toFixed(0);
    }else{
     result5 =0;
    }
    const roundedResult5a = result5.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult5 = Number(roundedResult5a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput5 = document.getElementById('fourtyfive') as HTMLInputElement;
    thirdInput5.value = roundedResult5.toString();
  }
  qu13(event: any) {
    const firstval = (document.getElementById('fourtysix') as HTMLInputElement).value;
    const secondval = (document.getElementById('fourtyseven') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
    if(saver1!=0 && saver!=0){
     result = ((saver1 / saver) * 100).toFixed(0);
    }else{
     result =0;
    }
    const subt=saver-saver1
    const roundedResult1a = subt.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult1 = Number(roundedResult1a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const roundedResulta = result.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult = Number(roundedResulta).toLocaleString('en-IN'); // Format the number with Indian standard commas
    
    const thirdInput = document.getElementById('fourtyeight') as HTMLInputElement;
    thirdInput.value = roundedResult.toString();
    const thirdInput1 = document.getElementById('fourtynine') as HTMLInputElement;
    thirdInput1.value = roundedResult1.toString();
    const fourthval = (document.getElementById('fourtynine') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    // const result1=(saver2/saver)*100
    var result1;
    if(saver2!=0 && saver!=0){
     result1 = ((saver2 / saver) * 100).toFixed(0);
    }else{
     result1 =0;
    }
    const thirdInput12 = document.getElementById('fifty') as HTMLInputElement;
    const res= result1.toFixed(0).toString();
    thirdInput12.value  = Number(res).toLocaleString('en-IN'); // Format the number with Indian standard commas
  }

  qu14(event: any) {
    const firstval = (document.getElementById('fourtysix') as HTMLInputElement).value;
    const fourthval = (document.getElementById('fourtynine') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(fourthval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
    if(saver1!=0 && saver!=0){
     result = ((saver1 / saver) * 100).toFixed(0);
    }else{
     result =0;
    }
    const roundedResult = result.toFixed(0); // Rounds the result to 2 decimal places
    const thirdInput = document.getElementById('fifty') as HTMLInputElement;
    thirdInput.value = roundedResult.toString();
  }
  qu15(event: any) {
    const firstval = (document.getElementById('fiftyone') as HTMLInputElement).value;
    const secondval = (document.getElementById('fiftytwo') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
    if(saver1!=0 && saver!=0){
     result = ((saver1 / saver) * 100).toFixed(0);
    }else{
     result =0;
    }
    const subt=saver-saver1
    const roundedResult1a = subt.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult1 = Number(roundedResult1a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const roundedResulta = result.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult = Number(roundedResulta).toLocaleString('en-IN'); // Format the number with Indian standard commas
    
    const thirdInput = document.getElementById('fiftythree') as HTMLInputElement;
    thirdInput.value = roundedResult.toString();
    const thirdInput1 = document.getElementById('fiftyfour') as HTMLInputElement;
    thirdInput1.value = roundedResult1.toString();
    const fourthval = (document.getElementById('fiftyfour') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    // const result1=(saver2/saver)*100
    var result1;
    if(saver2!=0 && saver!=0){
     result1 = ((saver2 / saver) * 100).toFixed(0);
    }else{
     result1 =0;
    }
    const thirdInput12 = document.getElementById('fiftyfive') as HTMLInputElement;
    const res = result1.toString();
    thirdInput12.value  = Number(res).toLocaleString('en-IN'); // Format the number with Indian standard commas
  }

  qu16(event: any) {
    const firstval = (document.getElementById('fourtysix') as HTMLInputElement).value;
    const secondval = (document.getElementById('fourtyseven') as HTMLInputElement).value;
    const fourval = (document.getElementById('fourtynine') as HTMLInputElement).value;
    const sixthval = (document.getElementById('fiftyone') as HTMLInputElement).value;
    const seventhval = (document.getElementById('fiftytwo') as HTMLInputElement).value;
    const ninthval = (document.getElementById('fiftyfour') as HTMLInputElement).value;
    var saver  = parseFloat(sixthval.replace(/\,/g, ''));
    var saver1 = parseFloat(ninthval.replace(/\,/g, ''));
    var saver2 = parseFloat(seventhval.replace(/\,/g, ''));
    var saver3 = parseFloat(fourval.replace(/\,/g, ''));
    var saver4 = parseFloat(secondval.replace(/\,/g, ''));
    var saver5 = parseFloat(firstval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
    if(saver1!=0 && saver!=0){
     result = ((saver1 / saver) * 100).toFixed(0);
    }else{
     result =0;
    }
    const roundedResulta = result.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult10 = Number(roundedResulta).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput = document.getElementById('fiftyfive') as HTMLInputElement;
    thirdInput.value = roundedResult10.toString();
    const result1 =saver5 + saver;
    const roundedResult1a = result1.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult1 = Number(roundedResult1a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput1 = document.getElementById('fiftysix') as HTMLInputElement;
    thirdInput1.value = roundedResult1.toString();
    const result2 =saver4 + saver2;
    const roundedResult2a = result2.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult2 = Number(roundedResult2a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput2 = document.getElementById('fiftyseven') as HTMLInputElement;
    thirdInput2.value = roundedResult2.toString();
    // const result3 =(result2/result1)*100;
    var result3;
    if(result2!=0 && result1!=0){
     result3 = ((result2 / result1) * 100).toFixed(0);
    }else{
     result3 =0;
    }
    const roundedResult3a = result3.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult3 = Number(roundedResult3a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput3 = document.getElementById('fiftyeight') as HTMLInputElement;
    thirdInput3.value = roundedResult3.toString();
    const result4 =saver1+saver3
    const roundedResult4a = result4.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult4 = Number(roundedResult4a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput4 = document.getElementById('fiftynine') as HTMLInputElement;
    thirdInput4.value = roundedResult4.toString();
    // const result5 =(result4/result1)*100;
    var result5;
    if(result4!=0 && result1!=0){
     result5 = ((result4 / result1) * 100).toFixed(0);
    }else{
     result5 =0;
    }
    const roundedResult5a = result5.toFixed(0); // Rounds the result to 2 decimal places
    const roundedResult5 = Number(roundedResult5a).toLocaleString('en-IN'); // Format the number with Indian standard commas
    const thirdInput5 = document.getElementById('sixty') as HTMLInputElement;
    thirdInput5.value = roundedResult5.toString();
  }
  
  
  eww1(event: any) {
    const firstval = (document.getElementById('sixtyone') as HTMLInputElement).value;
    const secondval = (document.getElementById('sixtytwo') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
    if(saver1!=0 && saver!=0){
     result = ((saver1 / saver) * 100).toFixed(0);
    }else{
     result =0;
    }
    const roundedResult = result.toFixed(0); // Rounds the result to 2 decimal places
    const thirdInput = document.getElementById('sixtythree') as HTMLInputElement;
    thirdInput.value = roundedResult.toString();
  }

  eww2(event: any) {
    const firstval = (document.getElementById('sixtyfour') as HTMLInputElement).value;
    const fourthval = (document.getElementById('sixtyfive') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(fourthval.replace(/\,/g, ''));
    // const result = (saver1 / saver) * 100;
    var result;
    if(saver1!=0 && saver!=0){
     result = ((saver1 / saver) * 100).toFixed(0);
    }else{
     result =0;
    }
    const roundedResult = result.toFixed(0); // Rounds the result to 2 decimal places
    const thirdInput = document.getElementById('sixtysix') as HTMLInputElement;
    thirdInput.value = roundedResult.toString();
  }

  uwu1(event: any) {
    const firstval = (document.getElementById('sixtyseven') as HTMLInputElement).value;
    const secondval = (document.getElementById('sixtyeight') as HTMLInputElement).value;
    const result = Number(firstval) + Number(secondval);
    const thirdInput = document.getElementById('sixtynine') as HTMLInputElement;
    thirdInput.value = result.toFixed(0).toString();
  }
  uwu2(event: any) {
    const firstval = (document.getElementById('seventy') as HTMLInputElement).value;
    const secondval = (document.getElementById('seventyone') as HTMLInputElement).value;
    const result = Number(firstval) + Number(secondval);
    const thirdInput = document.getElementById('seventytwo') as HTMLInputElement;
    thirdInput.value = result.toString();
  }
  uwu3(event: any) {
    const firstval = (document.getElementById('seventythree') as HTMLInputElement).value;
    const secondval = (document.getElementById('seventyfour') as HTMLInputElement).value;
    const result = Number(firstval) + Number(secondval);
    const thirdInput = document.getElementById('seventyfive') as HTMLInputElement;
    thirdInput.value = result.toString();
  }
  uwu4(event: any) {
    const firstval = (document.getElementById('seventysix') as HTMLInputElement).value;
    const secondval = (document.getElementById('seventyseven') as HTMLInputElement).value;
    const result = Number(firstval) + Number(secondval);
    const thirdInput = document.getElementById('seventyeight') as HTMLInputElement;
    thirdInput.value = result.toString();
  }
  uwu5(event: any) {
    const firstval = (document.getElementById('seventynine') as HTMLInputElement).value;
    const secondval = (document.getElementById('eighty') as HTMLInputElement).value;
    const result = Number(firstval) + Number(secondval);
    const thirdInput = document.getElementById('eightyone') as HTMLInputElement;
    thirdInput.value = result.toString();
  }

  uwu6(event: any) {
    const firstval = (document.getElementById('eightytwo') as HTMLInputElement).value;
    const secondval = (document.getElementById('eightythree') as HTMLInputElement).value;
    const result = Number(firstval) + Number(secondval);
    const thirdInput = document.getElementById('eightyfour') as HTMLInputElement;
    thirdInput.value = result.toString();
  }

  
  calforworker9(data) {
    const dialogRef = this.dialog.open(CalforworkermComponent, {
        autoFocus: false,
        data: "one",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(this.ss.permaemp);
      this.holdit2=this.ss.permaemp5;
      this.gdform.get('emp76')
            .setValue(this.ss.permaemp4);
        if (result) {
            console.log(result);
        }
    });
    
}
  calforworker7(data) {
    const dialogRef = this.dialog.open(CalforworkermComponent, {
        autoFocus: false,
        data: "one",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(this.ss.permaemp);
      this.holdit2=this.ss.permaemp5;
      this.gdform.get('emp79')
            .setValue(this.ss.permaemp4);
        if (result) {
            console.log(result);
        }
    });
    
}
  calforworker5(data) {
    const dialogRef = this.dialog.open(CalforworkermComponent, {
        autoFocus: false,
        data: "one",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(this.ss.permaemp);
      this.holdit2=this.ss.permaemp5;
      this.gdform.get('emp82')
            .setValue(this.ss.permaemp4);
        if (result) {
            console.log(result);
        }
    });
    
}
calforworker10(data) {
  const dialogRef = this.dialog.open(CalforworkerfComponent, {
      autoFocus: false,
      data: "one",
  });
  dialogRef.afterClosed().subscribe((result) => {
    // console.log(this.ss.permaemp1);
    this.gdform.get('emp77')
          .setValue(this.ss.permaemp6);
      if (result) {
          console.log(result);
      }
      const refer=((this.ss.permaemp5+this.ss.permaemp7)/intconv)*100;
      console.log(refer);
      const thirdInput = document.getElementById('seventyeight') as HTMLInputElement;
      thirdInput.value = refer.toFixed(0).toString();
  });
  this.bringmetot1=(document.getElementById('sixteen') as HTMLInputElement).value;
  console.log(this.bringmetot1);
  var intconv=parseFloat(this.bringmetot1.replace(/,/g, ''))
  console.log(intconv);
 
}
calforworker8(data) {
  const dialogRef = this.dialog.open(CalforworkerfComponent, {
      autoFocus: false,
      data: "one",
  });
  dialogRef.afterClosed().subscribe((result) => {
    // console.log(this.ss.permaemp1);
    this.gdform.get('emp80')
          .setValue(this.ss.permaemp6);
      if (result) {
          console.log(result);
      }
      const refer=((this.ss.permaemp5+this.ss.permaemp7)/intconv)*100;
      console.log(refer);
      const thirdInput = document.getElementById('eightyone') as HTMLInputElement;
      thirdInput.value = refer.toFixed(0).toString();
  });
  this.bringmetot1=(document.getElementById('sixteen') as HTMLInputElement).value;
  console.log(this.bringmetot1);
  var intconv=parseFloat(this.bringmetot1.replace(/,/g, ''))
  console.log(intconv);
  // console.log(typeof(intconv));
  // console.log(typeof(this.holdit));
  // console.log(this.holdit1)
 
}
calforworker6(data) {
  const dialogRef = this.dialog.open(CalforworkerfComponent, {
      autoFocus: false,
      data: "one",
  });
  dialogRef.afterClosed().subscribe((result) => {
    // console.log(this.ss.permaemp1);
    this.gdform.get('emp83')
          .setValue(this.ss.permaemp6);
      if (result) {
          console.log(result);
      }
      const refer=((this.ss.permaemp5+this.ss.permaemp7)/intconv)*100;
      console.log(refer);
      const thirdInput = document.getElementById('eightyfour') as HTMLInputElement;
      thirdInput.value = refer.toFixed(0).toString();
  });
  this.bringmetot1=(document.getElementById('sixteen') as HTMLInputElement).value;
  console.log(this.bringmetot1);
  var intconv=parseFloat(this.bringmetot1.replace(/,/g, ''))
  console.log(intconv);
  // console.log(typeof(intconv));
  // console.log(typeof(this.holdit));
  // console.log(this.holdit1)
 
}
openuploadimgcompo(ReportId: any, GuidanceNumber: any, OrgId: any, ques: any) {

  const dialogRef = this.dialog.open(UploadevidenceforbrsrComponent, {

    autoFocus: false,

    data: { ReportId, GuidanceNumber, OrgId, ques },

  });

}  

}
