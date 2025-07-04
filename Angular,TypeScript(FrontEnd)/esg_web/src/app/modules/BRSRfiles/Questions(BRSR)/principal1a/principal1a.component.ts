import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { ActivatedRoute } from '@angular/router';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector: 'app-principal1a',
    templateUrl: './principal1a.component.html',
    styleUrls: ['./principal1a.component.css'],
})
export class Principal1aComponent implements OnInit {
    principalform: FormGroup;
    @Input() princi1e: any;
    newAttribute: {Subject: string; Principlelist: string; Regulatory: string;Amount: string; Case: string; YesNo: string;};
    newAttribute1: {Subject1: string; Principlelist1: string; Regulatory1: string;Amount1: string; Case1: string; YesNo1: string;};
    lookupdtl: any;
    lookupdtl1: any;
    YesorNo: any;
    Principle: any;
    Penalty: any;
    Imprisonment: any;
    principle41explainyesclicked: boolean = false;
    currentYear: number;
    PreviousYear: number;
    initialDraftReport1: any = {};
    reportid:any;
    orgId:any;
    isNILSelected:boolean[] = [] ;
    isNILSelected2:boolean[] = [];
    
    constructor(private fb: FormBuilder, private is: ImportdisService,public AuthService:AuthService,public dialog: MatDialog,private ss:SelectbrsrService,private aa: ActivatedRoute,private cs:CreatereportforbrsrService,) {
        this.lookupdtl = [];
        this.lookupdtl1 = [];
    }

    ngOnInit() {
        this.orgId=this.AuthService.user.orgId
      this.reportid = this.aa.snapshot.paramMap.get('reportId');
        this.addFieldValue();
        this.addFieldValue();
        this.addFieldValue();
        this.addFieldValue1();

        const Today = new Date();
        this.currentYear = Today.getFullYear();
        this.PreviousYear = this.currentYear - 1;

        this.is.getLookupDetailsByHdrId(37).subscribe((Data) => {
            this.YesorNo = Data;
        });

        this.is.getLookupDetailsByHdrId(38).subscribe((Data) => {
            this.Penalty = Data;
        });

        this.is.getLookupDetailsByHdrId(39).subscribe((Data) => {
            this.Principle = Data;
        });

        this.is.getLookupDetailsByHdrId(40).subscribe((Data) => {
            this.Imprisonment = Data;
        });

        this.principalform = this.fb.group({
            //Question1
            principle1: [''],
            principle2: [''],
            principle3: [''],
            principle4: [''],
            principle5: [''],
            principle6: [''],
            principle7: [''],
            principle8: [''],
            principle9: [''],
            principle10: [''],
            principle11: [''],
            principle12: [''],
            //Question3
            principle31: [''],
            principle32: [''],
            //Question4
            principle41: [''],
            principle42: [''],
            //Question5
            principle51: [''],
            principle52: [''],
            principle53: [''],
            principle54: [''],
            principle55: [''],
            principle56: [''],
            principle57: [''],
            principle58: [''],
            //Question6
            principle61: [''],
            principle62: [''],
            principle63: [''],
            principle64: [''],
            principle65: [''],
            principle66: [''],
            principle67: [''],
            principle68: [''],
            //Question7
            principle71: [''],
        });
        this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
          const reportdata = data[0];
          if (reportdata && reportdata.InitialDraftReport) {
            this.initialDraftReport1 = JSON.parse(reportdata.InitialDraftReport);
            this.principalform.patchValue(this.initialDraftReport1);
            this.principalform.patchValue({
              principle1: this.initialDraftReport1[9]['one'],
              principle2: this.initialDraftReport1[9]['two'],
              principle3: this.initialDraftReport1[9]['three'],
              principle4: this.initialDraftReport1[9]['four'],
              principle5: this.initialDraftReport1[9]['five'],
              principle6: this.initialDraftReport1[9]['six'],
              principle7: this.initialDraftReport1[9]['seven'],
              principle8: this.initialDraftReport1[9]['eight'],
              principle9: this.initialDraftReport1[9]['nine'],
              principle10: this.initialDraftReport1[9]['ten'],
              principle11: this.initialDraftReport1[9]['eleven'],
              principle12: this.initialDraftReport1[9]['twelve'],
              principle31: this.initialDraftReport1[9]['thirteen'],
              principle32: this.initialDraftReport1[9]['fourteen'],
              principle41: this.initialDraftReport1[9]['fifteen'],
                principle42: this.initialDraftReport1[9]['sixteen'],
                principle51: this.initialDraftReport1[9]['seventeen'],
                principle52: this.initialDraftReport1[9]['eighteen'],
                principle53: this.initialDraftReport1[9]['nineteen'],
                principle54: this.initialDraftReport1[9]['twenty'],
                principle55: this.initialDraftReport1[9]['twentyone'],
                principle56: this.initialDraftReport1[9]['twentytwo'],
                principle57: this.initialDraftReport1[9]['twentythree'],
                principle58: this.initialDraftReport1[9]['twentyfour'],
                principle61: this.initialDraftReport1[9]['twentyfive'],
                principle62: this.initialDraftReport1[9]['twentysix'],
                principle63: this.initialDraftReport1[9]['twentyseven'],
                principle64: this.initialDraftReport1[9]['twentyeight'],
                principle65: this.initialDraftReport1[9]['twentynine'],
                principle66: this.initialDraftReport1[9]['thirty'],
                principle67: this.initialDraftReport1[9]['thirtyone'],
                principle68: this.initialDraftReport1[9]['thirtytwo'],
                principle71: this.initialDraftReport1[9]['thirtythree'],
            });
              this.lookupdtl=JSON.parse(this.initialDraftReport1[9]['Table1']);
             this.lookupdtl1=JSON.parse(this.initialDraftReport1[9]['Table2']);
            // var draft={value:this.initialDraftReport1[2]['ten']}
            // this.OnChangeType(draft)
            // var draft1={value:this.initialDraftReport1[2]['eleven']}
            // this.OnChangeType1(draft1)
          }
        });
    }

    addFieldValue() {
        this.newAttribute = {
            Subject: '',
            Principlelist: '',
            Regulatory: '',
            Amount: '',
            Case: '',
            YesNo: '',
        };
        this.lookupdtl.push(this.newAttribute);
    }

    deleteQ1(i) {
        this.lookupdtl.splice(i, 1);
    }
    
    addFieldValue1() {
        this.newAttribute1 = {
            Subject1: '',
            Principlelist1: '',
            Regulatory1: '',
            Amount1: '',
            Case1: '',
            YesNo1: '',
        };
        this.lookupdtl1.push(this.newAttribute1);
    }
    OnChangeType(i, value) {
        console.log(value);
        
        this.lookupdtl[i]['Subject'] = value.value;
        }
        OnChangeType1(i,event) {
            const selectedValue = event.value;
            console.log(selectedValue);
            
            if (selectedValue === 'NIL') {
              this.isNILSelected[i] = true;
            } else {
              this.isNILSelected[i] = false;
            }
           
             this.lookupdtl[i].Principlelist = event.value;
             console.log(event.value);
             
            }      
    OnChangeType2(i, value) {
        console.log(value);        
        this.lookupdtl[i]['YesNo'] = value.value;
        }      
        OnChangeType3(i, value) {
            console.log(value);
            
            this.lookupdtl1[i]['Subject1'] = value.value;
            }
            OnChangeType4(i, event) {
                const selectedValue = event.value;
                console.log(selectedValue);
                
                if (selectedValue === 'NIL') {
                  this.isNILSelected2[i] = true;
                } else {
                  this.isNILSelected2[i] = false;
                }
                this.lookupdtl1[i]['Principlelist1'] = event.value;
                console.log(event.value);
                }     
        OnChangeType5(i, value) {
            console.log(value);        
            this.lookupdtl1[i]['YesNo1'] = value.value;
            }      
        Turnoverper1(i) {

            console.log(
                (<HTMLInputElement>(
                    document.getElementById('Regulatory' + i.toString())
                )).value
            );
            this.lookupdtl[i]['Regulatory'] = (<HTMLInputElement>(
                document.getElementById('Regulatory' + i.toString())
            )).value;
          }
          Turnoverper2(i) {

            console.log(
                (<HTMLInputElement>(
                    document.getElementById('Amount' + i.toString())
                )).value
            );
            this.lookupdtl[i]['Amount'] = (<HTMLInputElement>(
                document.getElementById('Amount' + i.toString())
            )).value;
          }
          Turnoverper3(i) {

            console.log(
                (<HTMLInputElement>(
                    document.getElementById('Case' + i.toString())
                )).value
            );
            this.lookupdtl[i]['Case'] = (<HTMLInputElement>(
                document.getElementById('Case' + i.toString())
            )).value;
          }
            Turnoverper4(i) {

            console.log(
                (<HTMLInputElement>(
                    document.getElementById('Regulatory1' + i.toString())
                )).value
            );
            this.lookupdtl1[i]['Regulatory1'] = (<HTMLInputElement>(
                document.getElementById('Regulatory1' + i.toString())
            )).value;
          }
          Turnoverper5(i) {

            console.log(
                (<HTMLInputElement>(
                    document.getElementById('Amount1' + i.toString())
                )).value
            );
            this.lookupdtl1[i]['Amount1'] = (<HTMLInputElement>(
                document.getElementById('Amount1' + i.toString())
            )).value;
          }
          Turnoverper6(i) {

            console.log(
                (<HTMLInputElement>(
                    document.getElementById('Case1' + i.toString())
                )).value
            );
            this.lookupdtl1[i]['Case1'] = (<HTMLInputElement>(
                document.getElementById('Case1' + i.toString())
            )).value;
          }
    deleteQ2(i) {
        this.lookupdtl1.splice(i, 1);
    }

    principle41(value) {
        console.log(value);
        if (value.value == 'Yes') {
            this.principle41explainyesclicked = true;
        } else {
            this.principle41explainyesclicked = false;
        }
    }
    onSave() {
        var one = this.principalform.get('principle1').value;
        var two = this.principalform.get('principle2').value;
        var three = this.principalform.get('principle3').value;
        var four = this.principalform.get('principle4').value;
        var five = this.principalform.get('principle5').value;
        var six = this.principalform.get('principle6').value;
        var seven = this.principalform.get('principle7').value;
        var eight = this.principalform.get('principle8').value;
        var nine = this.principalform.get('principle9').value;
        var ten = this.principalform.get('principle10').value;
        var eleven = this.principalform.get('principle11').value;
        var twelve = this.principalform.get('principle12').value;
        var thirteen = this.principalform.get('principle31').value;
        var fourteen = this.principalform.get('principle32').value;
        var fifteen = this.principalform.get('principle41').value;
        var sixteen = this.principalform.get('principle42').value;

        var seventeen = this.principalform.get('principle51').value;
        var eighteen = this.principalform.get('principle52').value;
        var nineteen = this.principalform.get('principle53').value;
        var twenty = this.principalform.get('principle54').value;
        var twentyone = this.principalform.get('principle55').value;
        var twentytwo = this.principalform.get('principle56').value;
        var twentythree = this.principalform.get('principle57').value;
        var twentyfour = this.principalform.get('principle58').value;

        var twentyfive = this.principalform.get('principle61').value;
        var twentysix = this.principalform.get('principle62').value;
        var twentyseven = this.principalform.get('principle63').value;
        var twentyeight = this.principalform.get('principle64').value;
        var twentynine = this.principalform.get('principle65').value;
        var thirty = this.principalform.get('principle66').value;
        var thirtyone = this.principalform.get('principle67').value;
        var thirtytwo = this.principalform.get('principle68').value;

        var thirtythree = this.principalform.get('principle71').value;
        
        this.initialDraftReport1[9] = {
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
            eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen,twenty,twentyone,twentytwo,
            twentythree,twentyfour,twentyfive,twentysix,twentyseven,twentyeight,twentynine,thirty,thirtyone,thirtytwo,thirtythree,
            Table1: JSON.stringify(this.lookupdtl),
            Table2: JSON.stringify(this.lookupdtl1)
        };
        console.log(this.initialDraftReport1);
        const currentInitialDraftReport = this.initialDraftReport1;
        this.ss.liquid[9] = currentInitialDraftReport[9];

        this.ss
            .GetBRSR_ReportGenerationByReportId(this.reportid)
            .subscribe((data) => {
                const reportdata = data[0];
                var init = JSON.parse(reportdata.InitialDraftReport);
                if (init != null) {
                    init[9] = this.ss.liquid[9];
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
                    init[9] = this.ss.liquid[9];
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
