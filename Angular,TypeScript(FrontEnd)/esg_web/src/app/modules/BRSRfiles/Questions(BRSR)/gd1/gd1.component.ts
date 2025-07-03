import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { AuthService } from 'app/core/auth/auth.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-gd1',
  templateUrl: './gd1.component.html',
  styleUrls: ['./gd1.component.scss']
})
export class Gd1Component implements OnInit {
  emailFormControl: FormControl = new FormControl(null, [Validators.required, this.emailValidator]);
  emailFormControl1: FormControl = new FormControl(null, [Validators.required, this.emailValidator]);
  gdform:FormGroup
  currentYear:any;
  reportid: any;
  years=[];
  fmlife:any;
  foods3: Food[] = [
    {value: 'Lakh', viewValue: 'Lakh'},
    {value: 'Cr', viewValue: 'Cr'}
  ];
  citystate:any
  filteredList1:any;
  Cityname:any;
  selectedName:any;
  finalarray=[];
  arr:any[];
  foods: Food[] = [
    {value: 'Bombay Stock Exchange Ltd (BSE)', viewValue: 'Bombay Stock Exchange Ltd (BSE)'},
    {value: 'National Stock Exchange Ltd (NSE)', viewValue: 'National Stock Exchange Ltd (NSE)'}
  ];
  foods1: Food[] = [
    {value: 'Standalone basis', viewValue: 'Standalone basis'},
    {value: 'Consolidated basis', viewValue: 'Consolidated basis'}
  ];
  initialDraftReport: any = {};

  dynamicobj: any;
  foods2: Food[] = [
    {value: 'Mr', viewValue: 'Mr'},
    {value: 'Mrs', viewValue: 'Mrs'},
    {value: 'Ms', viewValue: 'Ms'},
  ];
  @Input() org:any;
  orgId:any
  constructor(private fb: FormBuilder,public AuthService:AuthService,  public dialog: MatDialog,  private ss: SelectbrsrService,    private aa: ActivatedRoute,    private cs: CreatereportforbrsrService,) { }

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.gdform = this.fb.group({
      csrd3: [''],
      detailsofen1: [''],
      detailsofen2: [''],
      detailsofen3:[],
      detailsofen4: [],
      detailsofen5: [],
      detailsofen6: [''],
      detailsofen7: [''],
      detailsofen8:[],
      detailsofen9: [],
      detailsofen10: [],
      detailsofen11: [''],
      detailsofen12: [''],
      detailsofen13:[],
      detailsofen14:[],
      detailsofen15:[],
      detailsofen16:[],
      detailsofen17:[],
      detailsofen18:[],
      detailsofen19:[],
      detailsofen20:[],
      detailsofen21:[],
      detailsofen22:[],
      detailsofen23:[],
      detailsofen24:[],
      detailsofen25:[],
      detailsofen26:[],
      detailsofen27:[],
    })
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.currentYear = new Date().getFullYear();
    for (let i = 0; i <= 100; i++) {
      const a = this.currentYear - i;
      this.years.push(a);
    }
    this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport = JSON.parse(reportdata.InitialDraftReport);
        console.log(this.initialDraftReport);
        this.gdform.patchValue(this.initialDraftReport);
        this.gdform.patchValue({
          detailsofen1: this.initialDraftReport[0]['Question1'],
          detailsofen2: this.initialDraftReport[0]['Question2'],
          detailsofen3: this.initialDraftReport[0]['Question3'],
          detailsofen4: this.initialDraftReport[0]['Question4'],
          detailsofen5: this.initialDraftReport[0]['Question5'],
          detailsofen6: this.initialDraftReport[0]['Question6'],
          detailsofen7: this.initialDraftReport[0]['Question7'],
          detailsofen8: this.initialDraftReport[0]['Question8'],
          detailsofen9: this.initialDraftReport[0]['Question9'],
          detailsofen10: this.initialDraftReport[0]['Question10'],
          detailsofen11: this.initialDraftReport[0]['Question11'],
          detailsofen12: this.initialDraftReport[0]['Question12'],
          detailsofen13: this.initialDraftReport[0]['Question13'],
          detailsofen14: this.initialDraftReport[0]['Question14'],
          detailsofen15: this.initialDraftReport[0]['Question15'],
          detailsofen16: this.initialDraftReport[0]['Question16'],
          detailsofen17: this.initialDraftReport[0]['Question17'],
          detailsofen18: this.initialDraftReport[0]['Question18'],
          detailsofen19: this.initialDraftReport[0]['Question19'],
          detailsofen20: this.initialDraftReport[0]['Question20'],
          detailsofen21: this.initialDraftReport[0]['Question21'],
          detailsofen22: this.initialDraftReport[0]['Question22'],
          detailsofen23: this.initialDraftReport[0]['Question23'],
          detailsofen24: this.initialDraftReport[0]['Question24'],
          detailsofen25: this.initialDraftReport[0]['Question25'],
          detailsofen26: this.initialDraftReport[0]['Question26'],
          detailsofen27: this.initialDraftReport[0]['Question27'],
          csrd3: this.initialDraftReport[0]['Question28']
        });
      }
    });
    this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      console.log(data[0]);
      this.fmlife = JSON.parse(data[0]['InitialDraftReport']);
      console.log(this.fmlife);
      
    });
    this.ss.getCityState().subscribe((Data)=>{
      this.citystate=Data;
      this.filteredList1 = this.citystate.slice();
      
    })
  }
  emailValidator(control) {
    if (control.value) {
      const matches = control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
      return matches ? null : { 'invalidEmail': true };
    } else {
      return null;
    }
  }
  coomo(value: any) {
    var empty='';
    this.inputdetailsofen5(empty);
    const selectedGood = this.citystate.find(g => g.Id === value);
    if (selectedGood != undefined) {
      const exchangeRate = selectedGood.State;
      this.gdform.get('detailsofen6').setValue(exchangeRate);
    }
  }  
  coomo1(value: any) {
    var empty='';
    this.inputdetailsofen5(empty);
    const selectedGood = this.citystate.find(g => g.Id === value);
    if (selectedGood != undefined) {
      const exchangeRate = selectedGood.State;
      this.gdform.get('detailsofen10').setValue(exchangeRate);
    }
  }
  coomo2(value: any) {
    var empty='';
    this.inputdetailsofen5(empty);
    const selectedGood = this.citystate.find(g => g.Id === value);
    if (selectedGood != undefined) {
      const exchangeRate = selectedGood.State;
      this.gdform.get('detailsofen22').setValue(exchangeRate);
    }
  }  
  onSave() {
   
    var Question1 = this.gdform.get('detailsofen1').value;
    var  Question2 = this.gdform.get('detailsofen2').value;
    var  Question3 = this.gdform.get('detailsofen3').value;
    var  Question4 = this.gdform.get('detailsofen4').value;
    var  Question5 = this.gdform.get('detailsofen5').value;
    var  Question6 = this.gdform.get('detailsofen6').value;
    var  Question7 = this.gdform.get('detailsofen7').value;
    var  Question8 = this.gdform.get('detailsofen8').value;
    var  Question9 = this.gdform.get('detailsofen9').value;
    var Question10 = this.gdform.get('detailsofen10').value;
    var Question11 = this.gdform.get('detailsofen11').value;
    var Question12 = this.gdform.get('detailsofen12').value;
    var Question13 = this.gdform.get('detailsofen13').value;
    var Question14 = this.gdform.get('detailsofen14').value;
    var Question15 = this.gdform.get('detailsofen15').value;
    var Question16 = this.gdform.get('detailsofen16').value;
    var Question17 = this.gdform.get('detailsofen17').value;
    var Question18 = this.gdform.get('detailsofen18').value;
    var Question19 = this.gdform.get('detailsofen19').value;
    var Question20 = this.gdform.get('detailsofen20').value;
    var Question21 = this.gdform.get('detailsofen21').value;
    var Question22 = this.gdform.get('detailsofen22').value;
    var Question23 = this.gdform.get('detailsofen23').value;
    var Question24 = this.gdform.get('detailsofen24').value;
    var Question25 = this.gdform.get('detailsofen25').value;
    var Question26 = this.gdform.get('detailsofen26').value;
    var Question27 = this.gdform.get('detailsofen27').value;
    var Question28 = this.gdform.get('csrd3').value;
    this.initialDraftReport[0] = {Question1,Question2,Question3,Question4,Question5,Question6,Question7,Question8,Question9,Question10,Question11,Question12,Question13,Question14,Question15,Question16,Question17,Question18,Question19,Question20,Question21,Question22,Question23,Question24,Question25,Question26,Question27,Question28}
    // this.ss.liquid[0]=this.initialDraftReport;
    console.log(this.initialDraftReport);
    const currentInitialDraftReport = this.initialDraftReport;
    const updatedInitialDraftReport = {
      ...currentInitialDraftReport,
      
    };
    this.ss.liquid[0]=currentInitialDraftReport[0];
    // this.ss.liquid[1]=this.fmlife[1];
    // this.ss.liquid[2]=this.fmlife[2];
    // console.log(currentInitialDraftReport);
    // console.log(this.ss.liquid[0])
    // console.log(this.arr);
      this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
        const reportdata = data[0];
        console.log(JSON.parse(reportdata.InitialDraftReport));
        var init=JSON.parse(reportdata.InitialDraftReport);
        if(init!=null){
        init[0]=this.ss.liquid[0]
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
       init[0]=this.ss.liquid[0]
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
  //question 7 and 12phone
  validateInput(input: HTMLInputElement) {
    const value = parseInt(input.value);
    if (isNaN(value) || value < 1 || value > 999999999999999) {
      input.value = ''; // Clear the input if it's invalid
    }
  }

  inputdetailsofen5(value: string) {
    this.filteredList1 = this.citystate.filter(
      (item) =>
          item.City.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
 // console.log(value);
  console.log(this.filteredList1);
  }

  
  onOptionSelectedcity(event: any) {
    this.selectedName = event.option.value;
    console.log(this.selectedName);
    this.gdform.setValue(this.selectedName);  
}
onOptionSelectedcity9(event: any) {
  this.selectedName = event.option.value;
  console.log(this.selectedName);
  this.gdform.setValue(this.selectedName);  
}
onOptionSelectedcity21(event: any) {
  this.selectedName = event.option.value;
  console.log(this.selectedName);
  this.gdform.setValue(this.selectedName);  
}
openuploadimgcompo(ReportId: any, GuidanceNumber: any, OrgId: any, ques: any) {

  const dialogRef = this.dialog.open(UploadevidenceforbrsrComponent, {

    autoFocus: false,

    data: { ReportId, GuidanceNumber, OrgId, ques },

  });

}
}
