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
  selector: 'app-principal3b',
  templateUrl: './principal3b.component.html',
  styleUrls: ['./principal3b.component.css']
})
export class Principal3bComponent implements OnInit {
  YesorNo:any;
  currentYear:number;
  PreviousYear:number;
  NextYear:number;
  reportid:any;
  initialDraftReport1: any = {};
  principalform:FormGroup;
  eueu4explainyesclicked:boolean=false;
  eueu1aexplainyesclicked:boolean=false;
  eueu1bexplainyesclicked:boolean=false;
  @Input() princi3l:any;
  orgId:any;
  constructor(private fb: FormBuilder,private is: ImportdisService,
    private aa:ActivatedRoute,
    private cs:CreatereportforbrsrService,  private sbrs:SelectbrsrService, public AuthService:AuthService,public dialog: MatDialog,) { }

  ngOnInit() {
    this.orgId=this.AuthService.user.orgId
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    const Today = new Date();
this.currentYear = Today.getFullYear();
this.PreviousYear=this.currentYear-1;
this.NextYear = this.currentYear+1;
    this.is.getLookupDetailsByHdrId(37).subscribe((Data) => {
      this.YesorNo = Data;
    });
    this.sbrs.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      console.log(reportdata);
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport1 = JSON.parse(reportdata.InitialDraftReport);
        console.log(this.initialDraftReport1);
      }
    });
    this.sbrs.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
      const reportdata = data[0];
      if (reportdata && reportdata.InitialDraftReport) {
        this.initialDraftReport1 = JSON.parse(reportdata.InitialDraftReport);
       // this.lookupdtl=JSON.parse(this.initialDraftReport1[13]['Table1']);
        this.principalform.patchValue(this.initialDraftReport1);
        this.principalform.patchValue({
          eueu1a: this.initialDraftReport1[14]['one'],
          eueu1ayes: this.initialDraftReport1[14]['one1'],
          eueu1b: this.initialDraftReport1[14]['one2'],
          eueu1byes: this.initialDraftReport1[14]['one3'],
          eueu2: this.initialDraftReport1[14]['two'],
          eueu3a: this.initialDraftReport1[14]['three1'],
          eueu3b: this.initialDraftReport1[14]['three2'],
          eueu3c: this.initialDraftReport1[14]['three3'],
          eueu3d: this.initialDraftReport1[14]['three4'],
          eueu3e: this.initialDraftReport1[14]['three5'],
          eueu3f: this.initialDraftReport1[14]['three6'],
          eueu3g: this.initialDraftReport1[14]['three7'],
          eueu3h: this.initialDraftReport1[14]['three8'],
          eueu4: this.initialDraftReport1[14]['four1'],
          eueu4yes: this.initialDraftReport1[14]['four2'],
          eueu5a: this.initialDraftReport1[14]['five1'],
          eueu5b: this.initialDraftReport1[14]['five2'],
          eueu6 : this.initialDraftReport1[14]['six'],
        
          // ope12: this.initialDraftReport1[13]['twelve'],
          // puta3: this.initialDraftReport1[2]['ten'],
          // puta4: this.initialDraftReport1[2]['eleven'],
         
        });
    
      }
    });
    this.principalform = this.fb.group({
      eueu1a: [''],
      eueu1ayes: [''],
      eueu1b: [''],
      eueu1byes: [''],
      eueu2: [''],

      eueu3a: [''],
      eueu3b: [''],
      eueu3c: [''],
      eueu3d: [''],
      eueu3e: [''],
      eueu3f: [''],
      eueu3g: [''],
      eueu3h: [''],

      eueu4: [''],
      eueu4yes: [''],

      eueu5a: [''],
      eueu5b: [''],

      eueu6: [''],
     })
  }

  Changeeueu4(value){
if(value.value == 'Yes'){
  this.eueu4explainyesclicked = true;
}
else{
  this.eueu4explainyesclicked = false;
}
  }

  Changeeueu1a(value){
    if(value.value == 'Yes'){
      this.eueu1aexplainyesclicked = true;
    }
    else{
      this.eueu1aexplainyesclicked = false;
    }
      }

      Changeeueu1b(value){
        if(value.value == 'Yes'){
          this.eueu1bexplainyesclicked = true;
        }
        else{
          this.eueu1bexplainyesclicked = false;
        }
          }
          onSave() {
            var one = this.principalform.get('eueu1a').value;
            var one1 = this.principalform.get('eueu1ayes').value;
            var one2 = this.principalform.get('eueu1b').value;
            var one3 = this.principalform.get('eueu1byes').value;
            var two = this.principalform.get('eueu2').value;
            var three1 = this.principalform.get('eueu3a').value;
            var three2 = this.principalform.get('eueu3b').value;
            var three3 = this.principalform.get('eueu3c').value;
            var three4 = this.principalform.get('eueu3d').value;
            var three5 = this.principalform.get('eueu3e').value;
            var three6 = this.principalform.get('eueu3f').value;
            var three7 = this.principalform.get('eueu3g').value;
            var three8 = this.principalform.get('eueu3h').value;
            var four1 = this.principalform.get('eueu4').value;
            var four2 = this.principalform.get('eueu4yes').value;
            var five1 = this.principalform.get('eueu5a').value;
            var five2 = this.principalform.get('eueu5b').value;
            var six = this.principalform.get('eueu6').value;
           
            this.initialDraftReport1[14] = {one,one1,one2,one3,two,three1,three2,three3,three4,three5,three6,three7,three8,four1,four2,five1,five2,six
            }
            console.log(this.initialDraftReport1);
            const currentInitialDraftReport = this.initialDraftReport1;
            this.sbrs.liquid[14]=currentInitialDraftReport[14];
            console.log(currentInitialDraftReport);
            console.log(this.sbrs.liquid[14])
            console.log(this.sbrs.liquid);
          
            this.sbrs.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
              const reportdata = data[0];
              console.log(JSON.parse(reportdata.InitialDraftReport));
              console.log(this.sbrs.liquid[14])
             var init=JSON.parse(reportdata.InitialDraftReport);
             if(init!=null){
             init[14]=this.sbrs.liquid[14]
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
             init[14]=this.sbrs.liquid[14]
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
