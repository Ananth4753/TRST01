import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-principal8b',
  templateUrl: './principal8b.component.html',
  styleUrls: ['./principal8b.component.css']
})
export class Principal8bComponent implements OnInit {
  principalform:FormGroup
  @Input() princi8l:any;
  newAttribute1:any  = {};
  lookupdtl1:any;
  newAttribute2:any  = {};
  lookupdtl2:any;
  newAttribute3:any  = {};
  lookupdtl3:any;
  newAttribute4:any  = {};
  lookupdtl4:any;
  newAttribute5:any  = {};
  lookupdtl5:any;
  srno:any;
  YesorNo:any;
  vulnerablegrp:any
  thirdquestionbol:boolean = false;
  statehdr:any
  distdtl:any;
  reportid:any;
  initialDraftReport1: any = {};
  filteredList2:any;
  selectedName:any;
  filteredList1:any;
  ansdrp: any;
  orgId:any;
  
  constructor(private fb: FormBuilder,public is:ImportdisService,public AuthService:AuthService,public dialog: MatDialog,private ss:SelectbrsrService,private cs:CreatereportforbrsrService,private aa:ActivatedRoute) {
    this.lookupdtl1 = [];
    this.lookupdtl2 = [];
    this.lookupdtl3 = [];
    this.lookupdtl4 = [];
    this.lookupdtl5 = [];
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
        this.principalform.patchValue(this.initialDraftReport1);
        this.principalform.patchValue({
          shurio3:  this.initialDraftReport1[24]['threea'],
          shurio3aa: this.initialDraftReport1[24]['threeaa'],
          shurio3bb: this.initialDraftReport1[24]['threeb'],
          shurio3cc: this.initialDraftReport1[24]['threec'],
          
        });
        //this.lookupdtl=JSON.parse(this.initialDraftReport1[23]['Table1']);
        this.ansdrp =  this.initialDraftReport1[24]['threea']
        this.lookupdtl1=JSON.parse(this.initialDraftReport1[24]['Table1']);
        this.lookupdtl2=JSON.parse(this.initialDraftReport1[24]['Table2']);
        this.lookupdtl3=JSON.parse(this.initialDraftReport1[24]['Table4']);
        this.lookupdtl4=JSON.parse(this.initialDraftReport1[24]['Table5']);
        this.lookupdtl5=JSON.parse(this.initialDraftReport1[24]['Table6']);
      }
    });
    this.addFieldValue1();
    this.addFieldValue2();
    this.addFieldValue3();
    this.addFieldValue4();
    this.addFieldValue5();

    this.is.getLookupDetailsByHdrId(2).subscribe((Data) => {
      this.YesorNo = Data;
    });

    this.is.getLookupDetailsByHdrId(44).subscribe((Data) => {
      this.vulnerablegrp = Data;
    });
    
    this.ss.getStateHdr().subscribe((data)=>{
      console.log(data);
      this.statehdr=data;
      this.filteredList1 = this.statehdr.slice();
    })
    this.principalform = this.fb.group({

      shurio3: [''],
      shurio3aa: [''],
      shurio3bb: [''],
      shurio3cc: [''],

     })
  }
  addFieldValue1() {
    this.newAttribute1 = { operation1: '', percentage1: '' };
    this.lookupdtl1.push(this.newAttribute1);
}
deleteQ1(i){
  this.lookupdtl1.splice(i, 1);
}
stateselect(i,value){
  console.log(value.value.text);

  console.log(value.value.id);
  this.lookupdtl2[i]['state'] = value.value.text;
  this.ss.GetDistrictDtlbyessential(value.value.id).subscribe((res)=>{
    this.distdtl=res;
    this.filteredList2 = this.distdtl.slice();
  })
  
    }
addFieldValue2() {
  this.newAttribute2 = {
    srnumber: '',
    state: '',
    district: '',
    Amountspent:''
   
  };
  this.lookupdtl2.push(this.newAttribute2);
  this.srno += 1;
}
deleteQ2(i) {
  this.lookupdtl2.splice(i, 1);
  this.srno -= 1;
  }

  addFieldValue3() {
    this.newAttribute3 = {
      srnumber1: '',
      Intellectual1:'',
      state1: '',
      district1: '',
      Amountspent1:''
     
    };
    this.lookupdtl3.push(this.newAttribute3);
    this.srno += 1;
  }
  deleteQ3(i) {
    this.lookupdtl3.splice(i, 1);
    this.srno -= 1;
    }

    addFieldValue4() {
      this.newAttribute4 = {
       Intellectual2:'',
       district2: '',
        Amountspent2:''
      };
      this.lookupdtl4.push(this.newAttribute4);
    }
    deleteQ4(i) {
      this.lookupdtl4.splice(i, 1);
    }

    addFieldValue5() {
      this.newAttribute5 = {
        srnumber3: '',
        Intellectual3:'',
        state3: '',   
        Amountspent3:''
       
      };
      this.lookupdtl5.push(this.newAttribute5);
      this.srno += 1;
    }
    deleteQ5(i) {
      this.lookupdtl5.splice(i, 1);
      this.srno -= 1;
      }
  principle83a(value) {
    console.log(value);
    this.ansdrp = value.value;
    if (value.value == 'Yes') {
        this.thirdquestionbol = true;
    } else {
        this.thirdquestionbol = false;
    }
  }

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
    this.lookupdtl2[i]['district'] = value.value;
    console.log(value.value);
    
  }

  changeOperation1(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('operation1' + i.toString())
        )).value
    );
    this.lookupdtl1[i]['operation1'] = (<HTMLInputElement>(
        document.getElementById('operation1' + i.toString())
    )).value;
  }

  changePercentage1(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('percentage1' + i.toString())
        )).value
    );
    this.lookupdtl1[i]['percentage1'] = (<HTMLInputElement>(
        document.getElementById('percentage1' + i.toString())
    )).value;
  }

  changeAmountSpent2(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('Amountspent' + i.toString())
        )).value
    );
    this.lookupdtl2[i]['Amountspent'] = (<HTMLInputElement>(
        document.getElementById('Amountspent' + i.toString())
    )).value;
  }

  changeIntellectual4(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('Intellectual1' + i.toString())
        )).value
    );
    this.lookupdtl3[i]['Intellectual1'] = (<HTMLInputElement>(
        document.getElementById('Intellectual1' + i.toString())
    )).value;
  }

  changeAmountSpent4(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('Amountspent1' + i.toString())
        )).value
    );
    this.lookupdtl3[i]['Amountspent1'] = (<HTMLInputElement>(
        document.getElementById('Amountspent1' + i.toString())
    )).value;
  }

  changeDistrict4(i,value) {
    console.log(value.value);
    this.lookupdtl3[i]['district1']=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }

  changeState4(i,value) {
    console.log(value.value);
    this.lookupdtl3[i]['state1']=value.value;
    // this.finalobj['Nature of ownership and Legal Form'] = value.value;
  }

  changeIntellectual5(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('Intellectual2' + i.toString())
        )).value
    );
    this.lookupdtl4[i]['Intellectual2'] = (<HTMLInputElement>(
        document.getElementById('Intellectual2' + i.toString())
    )).value;
  }

  changeDistrict5(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('district2' + i.toString())
        )).value
    );
    this.lookupdtl4[i]['district2'] = (<HTMLInputElement>(
        document.getElementById('district2' + i.toString())
    )).value;
  }

  changeAmountSpent5(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('Amountspent2' + i.toString())
        )).value
    );
    this.lookupdtl4[i]['Amountspent2'] = (<HTMLInputElement>(
        document.getElementById('Amountspent2' + i.toString())
    )).value;
  }

  changeIntellectual6(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('Intellectual3' + i.toString())
        )).value
    );
    this.lookupdtl5[i]['Intellectual3'] = (<HTMLInputElement>(
        document.getElementById('Intellectual3' + i.toString())
    )).value;
  }

  changeState6(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('state3' + i.toString())
        )).value
    );
    this.lookupdtl5[i]['state3'] = (<HTMLInputElement>(
        document.getElementById('state3' + i.toString())
    )).value;
  }

  changeAmountSpent6(i) {
    console.log(
        (<HTMLInputElement>(
            document.getElementById('Amountspent3' + i.toString())
        )).value
    );
    this.lookupdtl5[i]['Amountspent3'] = (<HTMLInputElement>(
        document.getElementById('Amountspent3' + i.toString())
    )).value;
  }

  onSave() {
    // var three = this.principalform.get('shine3').value;
    // var four1 = this.principalform.get('shine1in4').value;
    // var four2 = this.principalform.get('shine2in4').value;
    var threea = this.ansdrp;
    var threeaa = this.principalform.get('shurio3aa').value;
    var threeb = this.principalform.get('shurio3bb').value;
    var threec = this.principalform.get('shurio3cc').value;
    // var Table1 = JSON.stringify(this.lookupdtl)
    this.initialDraftReport1[24] = {threea,threeaa,threeb,threec,Table1:JSON.stringify(this.lookupdtl1),Table2:JSON.stringify(this.lookupdtl2),
                                    Table4:JSON.stringify(this.lookupdtl3),Table5:JSON.stringify(this.lookupdtl4),Table6:JSON.stringify(this.lookupdtl5)}
                                    
    //this.initialDraftReport1[14] = {one}
    console.log(this.initialDraftReport1);
    const currentInitialDraftReport = this.initialDraftReport1;
    this.ss.liquid[24]=currentInitialDraftReport[24];
    console.log(currentInitialDraftReport);
    console.log(this.ss.liquid[24])
    console.log(this.ss.liquid);
  
    this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      console.log(JSON.parse(reportdata.InitialDraftReport));
      console.log(this.ss.liquid[24])
     var init=JSON.parse(reportdata.InitialDraftReport);
     if(init!=null){
     init[24]=this.ss.liquid[24]
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
     init[24]=this.ss.liquid[24]
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
