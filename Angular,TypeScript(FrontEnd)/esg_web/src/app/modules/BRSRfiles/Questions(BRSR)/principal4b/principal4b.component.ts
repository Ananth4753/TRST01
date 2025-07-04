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
  selector: 'app-principal4b',
  templateUrl: './principal4b.component.html',
  styleUrls: ['./principal4b.component.css']
})
export class Principal4bComponent implements OnInit {
  principalform:FormGroup
  reportid:any;
  answrdrp:any;
  initialDraftReport2: any = {};
  @Input() princi4l:any;

  IfChangeshie2:boolean = false;
  YesorNo:any;
  orgId:any;
  
  constructor(private fb: FormBuilder,private is: ImportdisService,public AuthService:AuthService,public dialog: MatDialog,private cs:CreatereportforbrsrService,private aa:ActivatedRoute,private sele:SelectbrsrService) { }

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');

    this.is.getLookupDetailsByHdrId(37).subscribe((Data) => {
      this.YesorNo = Data;
    });

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
          shie1: this.initialDraftReport2[16]['one'],
          shie2: this.initialDraftReport2[16]['two'],
          IfShie2: this.initialDraftReport2[16]['three'],
          shie3: this.initialDraftReport2[16]['four'],
         
        });
        this.answrdrp=this.initialDraftReport2[16]['two'];
  
      }
    });

    this.principalform = this.fb.group({
      shie1: [''],
      shie2: [''],
      IfShie2: [''],
      shie3: [''],
     })
  }

  Changeshie2(value) {
    console.log(value.value);
    this.answrdrp=value.value;
  
}
onSave() {
  var one=this.principalform.get('shie1').value;
  var two=this.answrdrp;
  if(this.answrdrp=='Yes'){
  var three=(document.getElementById('getval') as HTMLInputElement).value;}
  else{
    var three='';
  }
  var four=this.principalform.get('shie3').value;
  this.initialDraftReport2[16] = {one,two,three,four}
  console.log(this.initialDraftReport2);
  const currentInitialDraftReport = this.initialDraftReport2;
  this.sele.liquid[16]=currentInitialDraftReport[16];
  console.log(currentInitialDraftReport);
  console.log(this.sele.liquid[16])
  console.log(this.sele.liquid);

  this.sele.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    const reportdata = data[0];
    console.log(JSON.parse(reportdata.InitialDraftReport));
    console.log(this.sele.liquid[16])
   var init=JSON.parse(reportdata.InitialDraftReport);
   if(init!=null){
   init[16]=this.sele.liquid[16]
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
   init[16]=this.sele.liquid[16]
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
