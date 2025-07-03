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
  selector: 'app-principal1b',
  templateUrl: './principal1b.component.html',
  styleUrls: ['./principal1b.component.css']
})
export class Principal1bComponent implements OnInit {
  principalform:FormGroup
  @Input() princi1l:any;
  lookupdtl: any;
  storedchan:any;
  dropinput:any;
  filteredList:any;
  reltypeother:any;
  newAttribute2x: {  Labs2x: string; Project2x: string;Remarks: string; };
  finalobj: any;
  initialDraftReport1: any = {};
  reportid:any;
  orgId:any;
  
  constructor(private fb: FormBuilder,private is:ImportdisService,public AuthService:AuthService,public dialog: MatDialog,private ss:SelectbrsrService,private aa: ActivatedRoute,private cs:CreatereportforbrsrService,) {
    this.lookupdtl = [];
   }

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.principalform = this.fb.group({
      princilead1: [''],
      princilead2: [''],
      glao2: [''],
     })
     this.is.getLookupDetailsByHdrId(2).subscribe((Data) => {
      this.storedchan = Data;
      this.filteredList = this.storedchan.slice();
  });
     
     this.addFieldValue2x();
     this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport1 = JSON.parse(reportdata.InitialDraftReport);
        this.lookupdtl=JSON.parse(this.initialDraftReport1[10]['Table1']);
        this.principalform.patchValue(this.initialDraftReport1);
        this.principalform.patchValue({
          princilead2: this.initialDraftReport1[10]['one'],
          glao2: this.initialDraftReport1[10]['two'],
        });
        this.dropinput=this.principalform.get('glao2').value;
        // var draft={value:this.initialDraftReport1[2]['ten']}
        // this.OnChangeType(draft)
        // var draft1={value:this.initialDraftReport1[2]['eleven']}
        // this.OnChangeType1(draft1)
      }
    });
  }
  ownershipandlegalfor2(value) {
    console.log(value.value);
    this.dropinput=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
}
  changeAssessments(i) {
  
    console.log(
        (<HTMLInputElement>(
            document.getElementById('Labs2x' + i.toString())
        )).value
    );
    this.lookupdtl[i]['Labs2x'] = (<HTMLInputElement>(
        document.getElementById('Labs2x' + i.toString())
    )).value;
}
Turnoverper1(i) {

  console.log(
      (<HTMLInputElement>(
          document.getElementById('Project2x' + i.toString())
      )).value
  );
  this.lookupdtl[i]['Project2x'] = (<HTMLInputElement>(
      document.getElementById('Project2x' + i.toString())
  )).value;
}
changeAssessments4(i) {

  console.log(
      (<HTMLInputElement>(
          document.getElementById('Remarks' + i.toString())
      )).value
  );
  this.lookupdtl[i]['Remarks'] = (<HTMLInputElement>(
      document.getElementById('Remarks' + i.toString())
  )).value;
}
validatePercentageInput(event:any) {
  const inputValue = event.target.value;
  const isValidPercentage = /^(\d{1,2}(\.\d{1,2})?|100(\.0{1,2})?)$/.test(inputValue);

  if (!isValidPercentage) {
      event.target.value = ''; // Clear the input value if it is not a valid percentage
  }
}

addFieldValue2x() {
  this.newAttribute2x = {
      Labs2x: '',
      Project2x:'',
      Remarks:'',
  };
  this.lookupdtl.push(this.newAttribute2x);
 
  console.log(typeof this.lookupdtl);
}
onSave() {
  var one = this.principalform.get('princilead2').value;
  var two = this.principalform.get('glao2').value;
  
  this.initialDraftReport1[10] = {
      one,
      two,
      Table1: JSON.stringify(this.lookupdtl),
  };
  console.log(this.initialDraftReport1);
  const currentInitialDraftReport = this.initialDraftReport1;
  this.ss.liquid[10] = currentInitialDraftReport[10];

  this.ss
      .GetBRSR_ReportGenerationByReportId(this.reportid)
      .subscribe((data) => {
          const reportdata = data[0];
          var init = JSON.parse(reportdata.InitialDraftReport);
          if (init != null) {
              init[10] = this.ss.liquid[10];
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
              init[10] = this.ss.liquid[10];
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
