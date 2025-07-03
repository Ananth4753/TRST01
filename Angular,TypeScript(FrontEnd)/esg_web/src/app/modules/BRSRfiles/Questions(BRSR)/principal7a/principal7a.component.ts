import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
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
  selector: 'app-principal7a',
  templateUrl: './principal7a.component.html',
  styleUrls: ['./principal7a.component.css']
})
export class Principal7aComponent implements OnInit {
  lookupdtl: any;
  lookupdtl1: any;
  principalform:FormGroup
  filteredListMA:any;
  @Input() princi7e:any;
  foods: Food[] = [
    {value: 'State', viewValue: 'State'},
    {value: 'National', viewValue: 'National'},
    {value: 'International', viewValue: 'International'}
  ];
  newAttribute: { Subject: string; Type: string; Assessments: string};
  newAttribute1: { sec1: string; sec2: string; sec3: string};
  reportid:any;
  selectedValue:any;
  initialDraftReport1: any = {};
  orgId:any;
  
  constructor(private fb: FormBuilder, private is: ImportdisService,public AuthService:AuthService,public dialog: MatDialog,private ss:SelectbrsrService,private cs:CreatereportforbrsrService,private aa: ActivatedRoute) { 
    this.lookupdtl = [];
    this.lookupdtl1 = [];
  }

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');

    this.principalform = this.fb.group({
     overida1: [''],
     overida2: [''],
     })
     this.addFieldValue();
     this.addFieldValuesec();

     this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      console.log(reportdata);
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport1 = JSON.parse(reportdata.InitialDraftReport);
     console.log(this.initialDraftReport1);
  
      this.lookupdtl=JSON.parse(this.initialDraftReport1[21]['SevenaTable1']);
     console.log(this.lookupdtl);
     this.lookupdtl1=JSON.parse(this.initialDraftReport1[21]['SevenbbTable2']);
     console.log(this.lookupdtl1);
      }
    });

    this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport1 = JSON.parse(reportdata.InitialDraftReport);
        this.principalform.patchValue(this.initialDraftReport1);
        this.principalform.patchValue({
         
          overida1: this.initialDraftReport1[21]['PrincipleQuestion1']
 
  
        });
    
      }
    }); 
  }
  addFieldValue() {
    this.newAttribute = {
        Subject: '',
        Type: '',
        Assessments: ''
    };
    this.lookupdtl.push(this.newAttribute);
    console.log(this.lookupdtl);
}
addFieldValuesec() {
  this.newAttribute1 = {
      sec1: '',
      sec2: '',
      sec3: ''
  };
  this.lookupdtl1.push(this.newAttribute1);
  console.log(this.lookupdtl1);
}
deleteQ102a(i) {
  this.lookupdtl.splice(i, 1);
}
deletesec(i) {
  this.lookupdtl1.splice(i, 1);
}

changeSubject(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Subject' + i.toString())
      )).value
  );
  this.lookupdtl[i]['Subject'] = (<HTMLInputElement>(
      document.getElementById('Subject' + i.toString())
  )).value;
}

changeType(i,value) {
  this.lookupdtl[i]['Type'] = value.value;
  console.log(value.value);
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

changeSec1(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('sec1' + i.toString())
      )).value
  );
  this.lookupdtl1[i]['sec1'] = (<HTMLInputElement>(
      document.getElementById('sec1' + i.toString())
  )).value;
}

changeSec2(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('sec2' + i.toString())
      )).value
  );
  this.lookupdtl1[i]['sec2'] = (<HTMLInputElement>(
      document.getElementById('sec2' + i.toString())
  )).value;
}
changeSec3(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('sec3' + i.toString())
      )).value
  );
  this.lookupdtl1[i]['sec3'] = (<HTMLInputElement>(
      document.getElementById('sec3' + i.toString())
  )).value;
}
onSave() {

  var	PrincipleQuestion1 = this.principalform.get('overida1').value;

  
  this.initialDraftReport1[21] = {PrincipleQuestion1,SevenaTable1: JSON.stringify(this.lookupdtl),SevenbbTable2: JSON.stringify(this.lookupdtl1)
      }

      console.log(this.initialDraftReport1);
      const currentInitialDraftReport = this.initialDraftReport1;
      this.ss.liquid[21]=currentInitialDraftReport[21];
      console.log(currentInitialDraftReport);
      console.log(this.ss.liquid[21])
      console.log(this.ss.liquid);
    
      this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
        const reportdata = data[0];
        console.log(JSON.parse(reportdata.InitialDraftReport));
        console.log(this.ss.liquid[21])
       var init=JSON.parse(reportdata.InitialDraftReport);
       if(init!=null){
       init[21]=this.ss.liquid[21]
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
       init[21]=this.ss.liquid[21]
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
