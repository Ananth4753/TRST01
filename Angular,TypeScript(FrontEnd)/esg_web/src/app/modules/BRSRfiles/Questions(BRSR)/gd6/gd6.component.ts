import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-gd6',
  templateUrl: './gd6.component.html',
  styleUrls: ['./gd6.component.scss']
})
export class Gd6Component implements OnInit {
  gdform:FormGroup
  @Input() csrd:any;
  selectchange:any;
  selectchange1:any;
  foods: Food[] = [
    {value: 'Yes', viewValue: 'Yes'},
    {value: 'No', viewValue: 'No'}
  ];
  foods1: Food[] = [
    {value: 'Lakh', viewValue: 'Lakh'},
    {value: 'Cr', viewValue: 'Cr'}
  ];
  reportid:any;
  initialDraftReport1: any = {};
  orgId:any;
  
  constructor(private fb: FormBuilder,private sele:SelectbrsrService,public AuthService:AuthService,public dialog: MatDialog,private aa:ActivatedRoute,private cs:CreatereportforbrsrService,private is:ImportdisService) { }

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.gdform = this.fb.group({
      csrd1:[],
      csrd2:[],
      csrd3:[],
      csrd4:[],
      csrd5:[],
      // csrd6:[],
    })
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
        this.gdform.patchValue(this.initialDraftReport1);
        this.gdform.patchValue({
          csrd1: this.initialDraftReport1[5]['one'],
          csrd2: this.initialDraftReport1[5]['two'],
          csrd3: this.initialDraftReport1[5]['three'],
          csrd4: this.initialDraftReport1[5]['four'],
          csrd5: this.initialDraftReport1[5]['five'],
          // csrd6: this.initialDraftReport1[5]['six'],
          // puta: this.initialDraftReport1[2]['seven'],
          // puta1: this.initialDraftReport1[2]['eight'],
          // puta2: this.initialDraftReport1[2]['nine'],
          // puta3: this.initialDraftReport1[2]['ten'],
          // puta4: this.initialDraftReport1[2]['eleven'],
         
        });
      
        // var draft={value:this.initialDraftReport1[2]['ten']}
        // this.OnChangeType(draft)
        // var draft1={value:this.initialDraftReport1[2]['eleven']}
        // this.OnChangeType1(draft1)
      }
    });
  }
  coomo12(event: any){
    console.log(event.target.value);
    var saver=event.target.value;
    this.selectchange1= parseFloat(saver.replace(/\,/g, ''));
  }
  coomo(value){
    console.log(value);
    this.selectchange=value.value;
    if(this.selectchange=='Lakh'){
      
      this.sele.turnover= this.selectchange1*100000;
      console.log(this.sele.turnover)
      }
      else if(this.selectchange=='Cr'){
      
        this.sele.turnover= this.selectchange1*10000000;
        console.log(this.sele.turnover)
      }
  }
  // turnover1(event:any){
  //   const turn = (document.getElementById('turn1') as HTMLInputElement).value;
  //   var saver = parseFloat(turn.replace(/\,/g, ''));
  //   this.selectchange1=saver;
  //   this.sele.turnover= saver;
    
  // }
  onSave() {
    var one=this.gdform.get('csrd1').value;
    //var two = (document.getElementById('turn1') as HTMLInputElement).value;
    var two=this.gdform.get('csrd2').value;
    var three = this.gdform.get('csrd3').value;
    var four = this.gdform.get('csrd4').value;
    var five = this.gdform.get('csrd5').value;
    // var  six = this.gdform.get('csrd1').value;
    // var seven = this.gdform.get('puta').value;
    // var eight = this.gdform.get('puta1').value;
    // var nine = this.gdform.get('puta2').value;
    // var ten = this.val1;
    // var eleven = this.val2;
    this.initialDraftReport1[5] = {one,two,three,four,five}
    console.log(this.initialDraftReport1);
    const currentInitialDraftReport = this.initialDraftReport1;
    this.sele.liquid[5]=currentInitialDraftReport[5];
    console.log(currentInitialDraftReport);
    console.log(this.sele.liquid[5])
    console.log(this.sele.liquid);
  
    this.sele.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      console.log(JSON.parse(reportdata.InitialDraftReport));
      console.log(this.sele.liquid[5])
     var init=JSON.parse(reportdata.InitialDraftReport);
     if(init!=null){
     init[5]=this.sele.liquid[5]
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
     init[5]=this.sele.liquid[5]
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
