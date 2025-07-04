import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { NgIf } from '@angular/common';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-principal5b',
  templateUrl: './principal5b.component.html',
  styleUrls: ['./principal5b.component.css']
})
export class Principal5bComponent implements OnInit {
  principalform:FormGroup
  @Input() princi5l:any;
  reportid:any;
  initialDraftReport2: any = {};
  storedchan:any;
  filteredList:any;
  lookupdtl: any;
  reltypeother:any;
  newAttribute: { forreal6: string; forreal7: string; };
  dropinput:any;
  orgId:any;
 
  constructor(private fb: FormBuilder,private is:ImportdisService, public AuthService:AuthService,public dialog: MatDialog,private cs:CreatereportforbrsrService,private aa:ActivatedRoute,private sele:SelectbrsrService) {
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
          fifth1: this.initialDraftReport2[18]['one'],
          fifth2: this.initialDraftReport2[18]['two'],
          fifth3: this.initialDraftReport2[18]['three'],
          Iffifth3: this.initialDraftReport2[18]['four'],
          //fifth4: this.initialDraftReport2[18]['four'],
          forreal1:this.initialDraftReport2[18]['five1'],
          forreal2:this.initialDraftReport2[18]['five2'],
          forreal3:this.initialDraftReport2[18]['five3'],
          forreal4:this.initialDraftReport2[18]['five4'],
          forreal5:this.initialDraftReport2[18]['five5'],
          fifth5: this.initialDraftReport2[18]['six'],
         
        });
        this.dropinput=this.initialDraftReport2[18]['three'];
        this.lookupdtl=JSON.parse(this.initialDraftReport2[18]['Table1']);
       
        
      }
    });

    this.principalform = this.fb.group({
      fifth1: [''],
      fifth2: [''],
      fifth3: [''],
      Iffifth3: [''],
      fifth4: [''],
      fifth5: [''],
      forreal1:[''],
      forreal2:[''],
      forreal3:[''],
      forreal4:[''],
      forreal5:[''],
     })
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
  ownershipandlegalfor(value){
    console.log(value.value);
    this.dropinput=value.value;
  }

  

  Changefifth3(value) {
    console.log(value.value);
    this.dropinput=value.value;
  
}


  onSave() {
    var one=this.principalform.get('fifth1').value;
    var two=this.principalform.get('fifth2').value;
    var three=this.dropinput;
    if(three == "Yes"){
    var four=(document.getElementById('forreal') as HTMLInputElement).value;
    }
    var five1=this.principalform.get('forreal1').value;
    var five2=this.principalform.get('forreal2').value;
    var five3=this.principalform.get('forreal3').value;
    var five4=this.principalform.get('forreal4').value;
    var five5=this.principalform.get('forreal5').value;
    var six=this.principalform.get('fifth5').value;
    this.initialDraftReport2[18] = {one,two,three,four,five1,five2,five3,five4,five5,six,Table1:JSON.stringify(this.lookupdtl)}
    console.log(this.initialDraftReport2);
    const currentInitialDraftReport = this.initialDraftReport2;
    this.sele.liquid[18]=currentInitialDraftReport[18];
    console.log(currentInitialDraftReport);
    console.log(this.sele.liquid[18])
    console.log(this.sele.liquid);
  
    this.sele.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      console.log(JSON.parse(reportdata.InitialDraftReport));
      console.log(this.sele.liquid[15])
     var init=JSON.parse(reportdata.InitialDraftReport);
     if(init!=null){
     init[18]=this.sele.liquid[18]
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
     init[18]=this.sele.liquid[18]
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
