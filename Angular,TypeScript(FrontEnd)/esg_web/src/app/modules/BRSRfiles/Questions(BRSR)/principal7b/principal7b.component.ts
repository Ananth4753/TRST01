import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { ActivatedRoute } from '@angular/router';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-principal7b',
  templateUrl: './principal7b.component.html',
  styleUrls: ['./principal7b.component.css']
})
export class Principal7bComponent implements OnInit {
  principalform:FormGroup
  lookupdtl: any;
  @Input() princi7l:any;
  dropyear:any
  inputfordrops: string;
  relothers1: any;
  foods: Food[] = [
    {value: 'Yes', viewValue: 'Yes'},
    {value: 'No', viewValue: 'No'}
  ];
  newAttribute: { Subject: string; Type: string; Assessments: string,Assessments2: string,Frequency:string,webl:string};

  reportid:any;
  selectedValue:any;
  initialDraftReport1: any = {};
  orgId:any;
  

  constructor(private fb: FormBuilder,private is:ImportdisService,public AuthService:AuthService,public dialog: MatDialog,private aa: ActivatedRoute,private ss:SelectbrsrService,private cs:CreatereportforbrsrService,) { 
    this.lookupdtl = [];
  }

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.principalform = this.fb.group({
      kamp1: [''],
     });

     this.addFieldValue();
     this.is.getLookupDetailsByHdrId(42).subscribe((Data) => {
      this.dropyear = Data;
    });

    this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      console.log(reportdata);
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport1 = JSON.parse(reportdata.InitialDraftReport);
     console.log(this.initialDraftReport1);
  
      this.lookupdtl=JSON.parse(this.initialDraftReport1[22]['SevenbTable1']);
     console.log(this.lookupdtl);
   
      }
    });

  }
  addFieldValue() {
    this.newAttribute = {
        Subject: '',
        Type: '',
        Assessments: '',
        Assessments2: '',
        Frequency:'',
        webl:''
    };
    this.lookupdtl.push(this.newAttribute);
    console.log(this.lookupdtl);
    this.relothers1 = '';
}
deleteQ102a(i) {
  this.lookupdtl.splice(i, 1);
}
inputforothers2(i, value) {

  //1
  this.inputfordrops = (<HTMLInputElement>(
    document.getElementById('Frequency' + i.toString())
)).value;
console.log(this.inputfordrops);
this.lookupdtl[i]['Frequency'] = this.inputfordrops;
console.log(this.lookupdtl);
}
OnChangeType2(i, value) {
  this.relothers1 = value.value;

  if (value.value != 'Others'){
this.lookupdtl[i]['Frequency'] = value.value;
  }
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
changewebl(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('webl' + i.toString())
      )).value
  );
  this.lookupdtl[i]['webl'] = (<HTMLInputElement>(
      document.getElementById('webl' + i.toString())
  )).value;
}
changeAssessments2(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Assessments2' + i.toString())
      )).value
  );
  this.lookupdtl[i]['Assessments2'] = (<HTMLInputElement>(
      document.getElementById('Assessments2' + i.toString())
  )).value;
}

changeType(i,value) {
  this.lookupdtl[i]['Type'] = value.value;
  console.log(value.value);
}
onSave() {

  this.initialDraftReport1[22] = {SevenbTable1: JSON.stringify(this.lookupdtl)}

      console.log(this.initialDraftReport1);
      const currentInitialDraftReport = this.initialDraftReport1;
      this.ss.liquid[22]=currentInitialDraftReport[22];
      console.log(currentInitialDraftReport);
      console.log(this.ss.liquid[22])
      console.log(this.ss.liquid);
    
      this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
        const reportdata = data[0];
        console.log(JSON.parse(reportdata.InitialDraftReport));
        console.log(this.ss.liquid[22])
       var init=JSON.parse(reportdata.InitialDraftReport);
       if(init!=null){
       init[22]=this.ss.liquid[22]
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
       init[22]=this.ss.liquid[22]
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
