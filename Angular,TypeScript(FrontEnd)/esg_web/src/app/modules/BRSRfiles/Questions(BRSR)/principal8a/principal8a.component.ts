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
  selector: 'app-principal8a',
  templateUrl: './principal8a.component.html',
  styleUrls: ['./principal8a.component.css']
})
export class Principal8aComponent implements OnInit {
  principalform:FormGroup
  @Input() princi8e:any;
  newAttribute: {};
  lookupdtl:any;
  newAttribute1: {srnumber: string; ongoing: string; state: string;district: string; Families: string; Coveredpafs: string; percentagecovered: string; amountpaid: string};
  lookupdtl1:any;
  YesorNo:any;
  srno:any;
  CurrentYear:any;
  PreviousYear:any;
  NextYear:any;
  statehdr:any
  distdtl:any;
  filteredList1:any;
  filteredList2:any;
  selectedName:any;
  reportid:any;
  initialDraftReport1: any = {};
  dropinput1: any;
  dropinput2: any;
  orgId:any;
  
  constructor(private fb: FormBuilder,public is:ImportdisService,public AuthService:AuthService,public dialog: MatDialog,private ss:SelectbrsrService,private cs:CreatereportforbrsrService,private aa:ActivatedRoute) { 
    this.lookupdtl = [];
    this.lookupdtl1 = [];
    this.srno = 0;
  }

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
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
        console.log(this.initialDraftReport1[23]);
        //this.lookupdtl=JSON.parse(this.initialDraftReport1[1]['Table1']);
        this.principalform.patchValue(this.initialDraftReport1);
        this.principalform.patchValue({
          shine3 : this.initialDraftReport1[23]['three'],
          shine1in4 : this.initialDraftReport1[23]['four1'],
          shine2in4 : this.initialDraftReport1[23]['four2'],
          shine3in4 : this.initialDraftReport1[23]['four3'],
          shine4in4 : this.initialDraftReport1[23]['four4'],
          
        });
        this.lookupdtl=JSON.parse(this.initialDraftReport1[23]['Table1']);
        this.lookupdtl1=JSON.parse(this.initialDraftReport1[23]['Table2']);
  
      }
    });
const Today = new Date();
 this.CurrentYear = Today.getFullYear();
this.PreviousYear = Today.getFullYear()-1;
this.NextYear = Today.getFullYear()+1;
// console.log(this.CurrentYear);
// console.log(this.PreviousYear);
// console.log(this.NextYear);

    this.addFieldValue();
    this.addFieldValue1();
    this.is.getLookupDetailsByHdrId(2).subscribe((Data) => {
      this.YesorNo = Data;
    });
    
    this.ss.getStateHdr().subscribe((data)=>{
      console.log(data);
      this.statehdr=data;
      this.filteredList1 = this.statehdr.slice();
    })
    this.principalform = this.fb.group({
      shine3: [''],
      
      shine1in4: [''],
      shine2in4: [''],
      shine3in4: [''],
      shine4in4: [''],
     })
  }
  addFieldValue() {
    this.newAttribute = {
      project: '',
      Notification: '',
      Datenotification: '',
      independent: '',
      communicated: '',
      Weblink:''

    };
    this.lookupdtl.push(this.newAttribute);
  }

  deleteQ1(i) {
    this.lookupdtl.splice(i, 1);
    }

    stateselect(i,value){
      console.log(value.value.text);

  console.log(value.value.id);
  //console.log(event.target.value,'welcome');
  // var empty = '';
  // this.onInputChange(empty);
   this.lookupdtl1[i]['state'] = value.value.text;
  this.ss.GetDistrictDtlbyessential(value.value.id).subscribe((res)=>{
    this.distdtl=res;
    this.filteredList2 = this.distdtl.slice();
  })
    }

    addFieldValue1() {
      this.newAttribute1 = {
        srnumber: '',
        ongoing: '',
        state: '',
        district: '',
        Families: '',
        Coveredpafs:'',
        percentagecovered:'',
        amountpaid: ''
      };
      this.lookupdtl1.push(this.newAttribute1);
      this.srno += 1;
    }
    deleteQ2(i) {
      this.lookupdtl1.splice(i, 1);
      this.srno -= 1;
      }


  calculatePercentage(i: number) {
    const familiesInput = document.getElementById(`Families${i}`) as HTMLInputElement;
    const coveredPafsInput = document.getElementById(`Coveredpafs${i}`) as HTMLInputElement;
    const percentageCoveredInput = document.getElementById(`percentagecovered${i}`) as HTMLInputElement;

    if (familiesInput && coveredPafsInput && percentageCoveredInput) {
        const A = parseFloat(familiesInput.value);
        const B = parseFloat(coveredPafsInput.value);

        if (!isNaN(A) && !isNaN(B)) {
            const calculatedPercentage = (B / A) * 100;
            percentageCoveredInput.value = calculatedPercentage.toFixed(2);
            this.lookupdtl1[i]['percentagecovered'] = percentageCoveredInput.value;
        } else {
            percentageCoveredInput.value = '';
        }
    }
}

// calculatePercentage(i: number) {
//   const familiesInput = document.getElementById(`Families${i}`) as HTMLInputElement;
//   const coveredPafsInput = document.getElementById(`Coveredpafs${i}`) as HTMLInputElement;
//   const percentageCoveredInput = document.getElementById(`percentagecovered${i}`) as HTMLInputElement;

//   if (familiesInput && coveredPafsInput && percentageCoveredInput) {
//       const A = parseFloat(familiesInput.value);
//       const B = parseFloat(coveredPafsInput.value);

//       if (!isNaN(A) && !isNaN(B)) {
//           let calculatedPercentage = (B / A) * 100;
//           calculatedPercentage = Math.min(calculatedPercentage, 100); // Ensure it's not more than 100
//           percentageCoveredInput.value = calculatedPercentage.toFixed(2);
//       } else {
//           percentageCoveredInput.value = '';
//       }
//   }
// }

onInputChange(value: string) {
  this.filteredList1 = this.statehdr.filter(
      (item) =>
          item.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
  console.log(value);
  console.log(this.filteredList1);
}

onOptionSelectedstate(event: any, i) {
  this.selectedName = event.option.value;
  //this.lookupdtl1[i]['state'] = this.selectedName;
  console.log(this.selectedName);
  console.log(i);
  
}
onInputChange2(value: string) {
  this.filteredList2 = this.distdtl.filter(
      (item) =>
          item.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
  console.log(value);
  console.log(this.filteredList2);
}
onOptionSelecteddistrict(event: any, i) {
  this.selectedName = event.option.value;
  console.log(this.selectedName);
  console.log(i);
  
}

OnChangeType1(i, value) {
 
  var empty = '';
  this.onInputChange2(empty);
  this.lookupdtl1[i]['district'] = value.value;
  console.log(value.value);
  
}

changeProject1(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('project' + i.toString())
      )).value
  );
  this.lookupdtl[i]['project'] = (<HTMLInputElement>(
      document.getElementById('project' + i.toString())
  )).value;
}

changeNotification1(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Notification' + i.toString())
      )).value
  );
  this.lookupdtl[i]['Notification'] = (<HTMLInputElement>(
      document.getElementById('Notification' + i.toString())
  )).value;
}

changeDateNotification1(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Datenotification' + i.toString())
      )).value
  );
  this.lookupdtl[i]['Datenotification'] = (<HTMLInputElement>(
      document.getElementById('Datenotification' + i.toString())
  )).value;
}

changeIndependent1(i,value) {
  console.log(value.value);
  this.lookupdtl[i]['independent'] = value.value;
  // this.finalobj['Nature of ownership and Legal Form'] = value.value;
}

changeCommunicated1(i,value) {
  console.log(value.value);
  this.lookupdtl[i]['communicated']=value.value;
  // this.finalobj['Nature of ownership and Legal Form'] = value.value;
}

changeWeblink1(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Weblink' + i.toString())
      )).value
  );
  this.lookupdtl[i]['Weblink'] = (<HTMLInputElement>(
      document.getElementById('Weblink' + i.toString())
  )).value;
}

changeSrnumber2(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('srnumber' + i.toString())
      )).value
  );
  this.lookupdtl1[i]['srnumber'] = (<HTMLInputElement>(
      document.getElementById('srnumber' + i.toString())
  )).value;
}

changeOngoing2(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('ongoing' + i.toString())
      )).value
  );
  this.lookupdtl1[i]['ongoing'] = (<HTMLInputElement>(
      document.getElementById('ongoing' + i.toString())
  )).value;
}

changeFamilies2(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Families' + i.toString())
      )).value
  );
  this.lookupdtl1[i]['Families'] = (<HTMLInputElement>(
      document.getElementById('Families' + i.toString())
  )).value;
}

changeCoveredpafs2(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('Coveredpafs' + i.toString())
      )).value
  );
  this.lookupdtl1[i]['Coveredpafs'] = (<HTMLInputElement>(
      document.getElementById('Coveredpafs' + i.toString())
  )).value;
}

changePercentageCovered2(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('percentagecovered' + i.toString())
      )).value
  );
  this.lookupdtl1[i]['percentagecovered'] = (<HTMLInputElement>(
      document.getElementById('percentagecovered' + i.toString())
  )).value;
}

changeAmountPaid2(i) {
  console.log(
      (<HTMLInputElement>(
          document.getElementById('amountpaid' + i.toString())
      )).value
  );
  this.lookupdtl1[i]['amountpaid'] = (<HTMLInputElement>(
      document.getElementById('amountpaid' + i.toString())
  )).value;
}

onSave() {
  var three = this.principalform.get('shine3').value;
  var four1 = this.principalform.get('shine1in4').value;
  var four2 = this.principalform.get('shine2in4').value;
  var four3 = this.principalform.get('shine3in4').value;
  var four4 = this.principalform.get('shine4in4').value;
  // var Table1 = JSON.stringify(this.lookupdtl)
  this.initialDraftReport1[23] = {three,four1,four2,four3,four4,Table1:JSON.stringify(this.lookupdtl),Table2:JSON.stringify(this.lookupdtl1)}
                                  
  //this.initialDraftReport1[14] = {one}
  console.log(this.initialDraftReport1);
  const currentInitialDraftReport = this.initialDraftReport1;
  this.ss.liquid[23]=currentInitialDraftReport[23];
  console.log(currentInitialDraftReport);
  console.log(this.ss.liquid[23])
  console.log(this.ss.liquid);

  this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
    const reportdata = data[0];
    console.log(JSON.parse(reportdata.InitialDraftReport));
    console.log(this.ss.liquid[23])
   var init=JSON.parse(reportdata.InitialDraftReport);
   if(init!=null){
   init[23]=this.ss.liquid[23]
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
   init[23]=this.ss.liquid[23]
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
