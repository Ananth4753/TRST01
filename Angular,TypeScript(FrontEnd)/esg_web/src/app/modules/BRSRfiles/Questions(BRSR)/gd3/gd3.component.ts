import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { event } from 'jquery';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-gd3',
  templateUrl: './gd3.component.html',
  styleUrls: ['./gd3.component.scss']
})
export class Gd3Component implements OnInit {
  gdform:FormGroup
  @Input() ope:any;
  finalobj: any;
  finalobj1: any;
  numberfield:any;
  filteredList:any;
  filteredList1:any;
  sumtotal: any;
  inivalue:any;
  val1:any;
  val11:any;
  val2:any;
  finalobj2: any;
  fmlife:any;
  reportid:any;
  selectedValue:any;
  finalobj3: any;
  sumtotal1: any;
  reltypeothers: any;
  reltypeothers1: any;
  initialDraftReport1: any = {};
  orgId: any;
 
  constructor(private fb: FormBuilder,private is:ImportdisService, public AuthService:AuthService,public dialog: MatDialog, private ss: SelectbrsrService,private aa: ActivatedRoute,private cs:CreatereportforbrsrService) { }

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.gdform = this.fb.group({
      ope1:[],
      ope2:[],
      ope3:[],
      ope4:[],
      ope5:[],
      ope6:[],
      puta:[],
      puta1:[],
      puta2:[],
      puta3:[],
      puta4:[],
    })
    this.is.getLookupDetailsByHdrId(31).subscribe((Data) => {
      this.numberfield = Data;
      this.filteredList = this.numberfield.slice();
      this.filteredList1 = this.numberfield.slice(1,);
  });
  this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    const reportdata = data[0];
    console.log(reportdata);
    if (reportdata && reportdata.InitialDraftReport) {
      this.initialDraftReport1 = JSON.parse(reportdata.InitialDraftReport);
      console.log(this.initialDraftReport1);

    }
  });
  //this is only for retrieving values
  // this.setSelectValue();
  this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    const reportdata = data[0];
    if (reportdata && reportdata.InitialDraftReport) {
      this.initialDraftReport1 = JSON.parse(reportdata.InitialDraftReport);
      this.gdform.patchValue(this.initialDraftReport1);
      this.gdform.patchValue({
        ope1: this.initialDraftReport1[2]['one'],
        ope2: this.initialDraftReport1[2]['two'],
        ope3: this.initialDraftReport1[2]['three'],
        ope4: this.initialDraftReport1[2]['four'],
        ope5: this.initialDraftReport1[2]['five'],
        ope6: this.initialDraftReport1[2]['six'],
        puta: this.initialDraftReport1[2]['seven'],
        puta1: this.initialDraftReport1[2]['eight'],
        puta2: this.initialDraftReport1[2]['nine'],
        // puta3: this.initialDraftReport1[2]['ten'],
        // puta4: this.initialDraftReport1[2]['eleven'],
       
      });
    
      var draft={value:this.initialDraftReport1[2]['ten']}
      this.OnChangeType(draft)
      var draft1={value:this.initialDraftReport1[2]['eleven']}
      this.OnChangeType1(draft1)
    }
  });
  // this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
  //   console.log(data[0]);
  //   this.fmlife = JSON.parse(data[0]['InitialDraftReport']);
  //   console.log(this.fmlife);
    
  // });
  this.inivalue=0;
  
  }

  inputforothers(i, event) {
    this.inivalue = event.target.value
}
  ope1(index: number, event: any) {
    this.finalobj= event.target.value;
    var saver
    saver=this.finalobj.replace(/\,/g,''); // 1125, but a string, so convert it to number
    this.finalobj=parseFloat(saver);
    
    // this.finalobj= Number(this.finalobj)
}
ope2(index: number, event: any) {
  this.finalobj1= event.target.value;
  var saver
    saver=this.finalobj1.replace(/\,/g,''); // 1125, but a string, so convert it to number
    this.finalobj1=parseFloat(saver);
  this.sumtotal=this.finalobj+this.finalobj1;
}
addreset(){
this.reltypeothers='';
}
addreset1(){
  this.reltypeothers1='';
  }
ope4(index: number, event: any) {
  this.finalobj2= event.target.value;
  var saver
  saver=this.finalobj2.replace(/\,/g,''); // 1125, but a string, so convert it to number
  this.finalobj2=parseFloat(saver);
}
ope5(index: number, event: any) {
  this.finalobj3= event.target.value;
  var saver
  saver=this.finalobj3.replace(/\,/g,''); // 1125, but a string, so convert it to number
  this.finalobj3=parseFloat(saver);
  this.sumtotal1=this.finalobj2+this.finalobj3;
}
ope3(index: number, event: any) {
  }
ope6(index: number, event: any) {
}
OnChangeType( value) {
  console.log(value.value)

  this.val1=value.value;
  this.reltypeothers = value.value;
  
}
OnChangeType1( value) {
  console.log(value.value)
  this.val2=value.value;
  this.reltypeothers1 = value.value;
  
}
validateInput(input: HTMLInputElement) {
  const value = parseInt(input.value);
  console.log(input.value);
  this.val1=input.value;
  if (isNaN(value) || value < 1 || value > 36) {
    input.value = ''; // Clear the input if it's invalid
  }
}
validateInput1(input: HTMLInputElement) {
  const value = parseInt(input.value);
  console.log(input.value);
  this.val2=input.value;
  if (isNaN(value) || value < 1 || value > 250) {
    input.value = ''; // Clear the input if it's invalid
  }
}
onSave() {
  var one=this.gdform.get('ope1').value
  var two = this.gdform.get('ope2').value;
  var three = (document.getElementById('Assessments2x1') as HTMLInputElement).value;
  var four = this.gdform.get('ope4').value;
  var five = this.gdform.get('ope5').value;
  var  six = (document.getElementById('Assessments2x2') as HTMLInputElement).value;
  var seven = this.gdform.get('puta').value;
  var eight = this.gdform.get('puta1').value;
  var nine = this.gdform.get('puta2').value;
  var ten = this.val1;
  var eleven = this.val2;
  this.initialDraftReport1[2] = {one,two,three,four,five,six,seven,eight,nine,ten,eleven}
  console.log(this.initialDraftReport1);
  const currentInitialDraftReport = this.initialDraftReport1;
  this.ss.liquid[2]=currentInitialDraftReport[2];
  console.log(currentInitialDraftReport);
  console.log(this.ss.liquid[2])
  console.log(this.ss.liquid);

  this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    const reportdata = data[0];
    console.log(JSON.parse(reportdata.InitialDraftReport));
    console.log(this.ss.liquid[2])
   var init=JSON.parse(reportdata.InitialDraftReport);
   if(init!=null){
   init[2]=this.ss.liquid[2]
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
   init[2]=this.ss.liquid[2]
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
