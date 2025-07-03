import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { ActivatedRoute } from '@angular/router';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-principal9b',
  templateUrl: './principal9b.component.html',
  styleUrls: ['./principal9b.component.css']
})
export class Principal9bComponent implements OnInit {
  principalform:FormGroup
  @Input() princi9l:any;
  YesorNo:any;
  YesorNowithNA:any;
  reportid:any;
  numnil:any;
  pernil:any;
  ifyesChangeaction4a:boolean=false;
  ifyesChangeaction4b:boolean=false;
  filteredList:any;
  filteredList1:any
  filteredList2:any
  action5abool:any;
  action5bbool:any;
  initialDraftReport1: any = {};
  orgId:any;
  
  constructor(private fb: FormBuilder, private is: ImportdisService,public AuthService:AuthService,public dialog: MatDialog,private ss:SelectbrsrService,private aa: ActivatedRoute,private cs:CreatereportforbrsrService,) {}

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.is.getLookupDetailsByHdrId(37).subscribe((Data) => {
      this.YesorNowithNA = Data;
  });
  this.is.getLookupDetailsByHdrId(2).subscribe((Data) => {
    this.YesorNo = Data;
    this.filteredList = this.YesorNo.slice();
});
this.is.getLookupDetailsByHdrId(43).subscribe((Data) => {
  this.numnil = Data;
  this.filteredList1 = this.numnil.slice();
});
this.is.getLookupDetailsByHdrId(50).subscribe((Data) => {
  this.pernil = Data;
  this.filteredList2 = this.pernil.slice();
});

    this.principalform = this.fb.group({
      action1: [''],
      action2: [''],
      action3: [''],

      action4a: [''],
      ifyesaction4a: [''],

      action4b: [''],
      ifyesaction4b: [''],

      action5a: [''],
      action5ayes: [''],
      action5aDetails: [''],

      action5b: [''],
      action5byes: [''],
      action5bDetails: [''],
     })
     this.action5abool = 'Nil';
     this.action5bbool = 'Nil';

     this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport1 = JSON.parse(reportdata.InitialDraftReport);
        this.principalform.patchValue(this.initialDraftReport1);
        this.principalform.patchValue({
          action1:  this.initialDraftReport1[26]['one'],
          action2: this.initialDraftReport1[26]['two'],
          action3: this.initialDraftReport1[26]['three'],
          action4a: this.initialDraftReport1[26]['four'],
          ifyesaction4a:  this.initialDraftReport1[26]['five'],
          action4b: this.initialDraftReport1[26]['six'],
          ifyesaction4b: this.initialDraftReport1[26]['seven'],
          action5a: this.initialDraftReport1[26]['eight'],
          action5ayes:  this.initialDraftReport1[26]['nine'],
          action5aDetails: this.initialDraftReport1[26]['ten'],
          action5b: this.initialDraftReport1[26]['eleven'],
          action5byes: this.initialDraftReport1[26]['twelve'],
        });
        //this.dropinput=this.principalform.get('glao2').value;
      }
    });
  }

  Changeaction4a(value) {
    if (value.value == 'Yes') {
        this.ifyesChangeaction4a = true;
    } else {
        this.ifyesChangeaction4a = false;
    }
}
Changeaction4b(value) {
  if (value.value == 'Yes') {
      this.ifyesChangeaction4b = true;
  } else {
      this.ifyesChangeaction4b = false;
  }
}
changeaction5abool(value) {
  console.log(value.value);
  this.action5abool = value.value;
}
resetaction5abool() {
  this.action5abool = 'Nil';
}

changeaction5bbool(value) {
  console.log(value.value);
  this.action5bbool = value.value;
}
resetaction5bbool() {
  this.action5bbool = 'Nil';
}
onSave() {
  var one = this.principalform.get('action1').value;
  var two = this.principalform.get('action2').value;
  var three = this.principalform.get('action3').value;
  var four = this.principalform.get('action4a').value;
  var five = this.principalform.get('ifyesaction4a').value;
  var six = this.principalform.get('action4b').value;
  var seven = this.principalform.get('ifyesaction4b').value;
  var eight = this.principalform.get('action5a').value;
  var nine = this.principalform.get('action5ayes').value;
  var ten = this.principalform.get('action5aDetails').value;
  var eleven = this.principalform.get('action5b').value;
  var twelve = this.principalform.get('action5byes').value;

  
  this.initialDraftReport1[26] = {
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
      ten,
      eleven,twelve
  };
  console.log(this.initialDraftReport1);
  const currentInitialDraftReport = this.initialDraftReport1;
  this.ss.liquid[26] = currentInitialDraftReport[26];

  this.ss
      .GetBRSR_ReportGenerationByReportId(this.reportid)
      .subscribe((data) => {
          const reportdata = data[0];
          var init = JSON.parse(reportdata.InitialDraftReport);
          if (init != null) {
              init[26] = this.ss.liquid[26];
              console.log(init);
              const selectedboxes: any = {
                  Id: reportdata.Id,
                  ReportName: reportdata.ReportName,
                  InitialDraftReport: init,
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
          } else {
            init=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
              init[26] = this.ss.liquid[26];
              console.log(init);
              const selectedboxes: any = {
                  Id: reportdata.Id,
                  ReportName: reportdata.ReportName,
                  InitialDraftReport: init,
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
