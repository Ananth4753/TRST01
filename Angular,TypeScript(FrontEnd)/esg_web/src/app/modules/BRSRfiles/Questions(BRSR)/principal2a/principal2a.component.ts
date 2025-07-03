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
  selector: 'app-principal2a',
  templateUrl: './principal2a.component.html',
  styleUrls: ['./principal2a.component.css']
})
export class Principal2aComponent implements OnInit {
  principalform:FormGroup
  @Input() princi2e:any;
  currentYear: number;
  PreviousYear:number;
  NextYear:number;
  YesorNo:any;
  newAttribute: {};
  lookupdtl:any;
  initialDraftReport1: any = {};
  principle21explainyesclicked:boolean = false;
  principle41explainyesclicked:boolean = false;
  principle41explainnoclicked:boolean = false;
  reportid:any;
  principle41yes: any;
  principle41no: any;
  ansdrp: any;
  orgId:any;
 
  constructor(private fb: FormBuilder, private is: ImportdisService,public AuthService:AuthService,public dialog: MatDialog,private sele:SelectbrsrService,private aa: ActivatedRoute,private cs:CreatereportforbrsrService,) { 
    this.lookupdtl = [];
  }

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');

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
        this.principalform.patchValue(this.initialDraftReport1);
        this.principalform.patchValue({
          principle1: this.initialDraftReport1[11]['one'],
          principle2: this.initialDraftReport1[11]['two'],
          principle3: this.initialDraftReport1[11]['three'],
          principle4: this.initialDraftReport1[11]['four'],
          principle5: this.initialDraftReport1[11]['five'],
          principle6: this.initialDraftReport1[11]['six'],
          principle21: this.initialDraftReport1[11]['secondq'],
          Ifprinciple21: this.initialDraftReport1[11]['ifsecondq'],
          principle2b1: this.initialDraftReport1[11]['seven'],
          principle2b2: this.initialDraftReport1[11]['eight'],
          principle31: this.initialDraftReport1[11]['nine'],
          principle41: this.initialDraftReport1[11]['ten'],
          principle41yes: this.initialDraftReport1[11]['eleven'],
          principle41no: this.initialDraftReport1[11]['twelve'],
          
          
          
          
          
          
         
        });
        //this.principle41explainyesclicked = this.initialDraftReport1[11]['eleven'],
        //this.principle41explainnoclicked = this.initialDraftReport1[11]['twelve'],
        this.ansdrp = this.principalform.get('principle41').value;
        this.lookupdtl = JSON.parse(this.initialDraftReport1[11]['Table1']);
        
       
        
      }
    });
this.addFieldValue();
    this.is.getLookupDetailsByHdrId(37).subscribe((Data) => {
      this.YesorNo = Data;
    });

    const Today = new Date();
this.currentYear = Today.getFullYear();
this.PreviousYear=this.currentYear-1;
this.NextYear = this.currentYear+1;
    this.principalform = this.fb.group({
           //Question1
           principle1: [''],
           principle2: [''],
           principle3: [''],
           principle4: [''],
           principle5: [''],
           principle6: [''],
           //Question2
           principle21: [''],
           Ifprinciple21: [''],
           principle2b1: [''],
           principle2b2: [''],
           //Question3
           principle31: [''],
           //Question4
           principle41: [''],
           principle41yes: [''],
           principle41no: ['']
     })
  }

  principle21(value) {
    console.log(value);
    if (value.value == 'Yes') {
        this.principle21explainyesclicked = true;
    } else {
        this.principle21explainyesclicked = false;
    }
  }

  principle41(value) {
    console.log(value);
    this.ansdrp = value.value;
    if (value.value == 'Yes') {
        
        this.principle41explainyesclicked = true;
        this.principle41explainnoclicked = false;

    } else if(value.value == 'No') {
      this.principle41explainnoclicked = true;
      this.principle41explainyesclicked = false;

    }
    else {
      this.principle41explainnoclicked = false;
      this.principle41explainyesclicked = false;
  }
  }

  addFieldValue() {
    this.newAttribute = {
        Subject: ''
    };
    this.lookupdtl.push(this.newAttribute);

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
  onSave() {
    var one = this.principalform.get('principle1').value;
    var two = this.principalform.get('principle2').value;
    var three = this.principalform.get('principle3').value;
    var four = this.principalform.get('principle4').value;
    var five = this.principalform.get('principle5').value;
    var six = this.principalform.get('principle6').value;
    var secondq = this.principalform.get('principle21').value;
    var ifsecondq = this.principalform.get('Ifprinciple21').value;
    // if(secondq == "Yes"){
    //   var Table1 = JSON.stringify(this.lookupdtl);
    // }
    var seven = this.principalform.get('principle2b1').value;
    var eight = this.principalform.get('principle2b2').value;
    var nine = this.principalform.get('principle31').value;
    var ten = this.ansdrp;
    if(ten == "Yes"){
    var eleven = this.principalform.get('principle41yes').value;
    }
    if(ten == "No"){
    var twelve = this.principalform.get('principle41no').value;
    }
    var thirteen = this.principalform.get('principle2b2').value;

    this.initialDraftReport1[11] = {
        one,
        two,
        three,
        four,
        five,
        six,
        secondq,
        ifsecondq,
        Table1: JSON.stringify(this.lookupdtl),
        seven,
        eight,
        nine,
        ten,
        eleven,
        twelve,
    };
    console.log(this.initialDraftReport1);
    const currentInitialDraftReport = this.initialDraftReport1;
    this.sele.liquid[11] = currentInitialDraftReport[11];
  
    this.sele
        .GetBRSR_ReportGenerationByReportId(this.reportid)
        .subscribe((data) => {
            const reportdata = data[0];
            var init = JSON.parse(reportdata.InitialDraftReport);
            if (init != null) {
                init[11] = this.sele.liquid[11];
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
                init[11] = this.sele.liquid[11];
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
