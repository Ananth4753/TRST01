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
    selector: 'app-principal9a',
    templateUrl: './principal9a.component.html',
    styleUrls: ['./principal9a.component.css'],
})
export class Principal9aComponent implements OnInit {
    principalform: FormGroup;
    @Input() princi9e: any;
    YesorNo: any;
    ifyesChangelast5: boolean = false;
    initialDraftReport1: any = {};
    reportid: any;
    orgId:any;
    
    constructor(
        private fb: FormBuilder,
        private is: ImportdisService,
        private ss: SelectbrsrService,
        private aa: ActivatedRoute,
        private cs: CreatereportforbrsrService,
        public AuthService:AuthService,public dialog: MatDialog,
    ) {}

    ngOnInit() {
        this.orgId=this.AuthService.user.orgId
        this.reportid = this.aa.snapshot.paramMap.get('reportId');
        this.is.getLookupDetailsByHdrId(2).subscribe((Data) => {
            this.YesorNo = Data;
        });

        this.principalform = this.fb.group({
            last1: [''],

            last2in1: [''],
            last2in2: [''],
            last2in3: [''],

            last3in1: [''],
            last3in2: [''],
            last3in3: [''],
            last3in4: [''],
            last3in5: [''],
            last3in6: [''],
            last3in7: [''],
            last3in8: [''],
            last3in9: [''],
            last3in10: [''],
            last3in11: [''],
            last3in12: [''],
            last3in13: [''],
            last3in14: [''],
            last3in15: [''],
            last3in16: [''],
            last3in17: [''],
            last3in18: [''],
            last3in19: [''],
            last3in20: [''],
            last3in21: [''],
            last3in22: [''],
            last3in23: [''],
            last3in24: [''],
            last3in25: [''],
            last3in26: [''],
            last3in27: [''],
            last3in28: [''],
            last3in29: [''],
            last3in30: [''],
            last3in31: [''],
            last3in32: [''],
            last3in33: [''],
            last3in34: [''],
            last3in35: [''],
            last3in36: [''],
            last3in37: [''],
            last3in38: [''],
            last3in39: [''],
            last3in40: [''],
            last3in41: [''],
            last3in42: [''],

            last4in1: [''],
            last4in2: [''],
            last4in3: [''],
            last4in4: [''],
            last4in5: [''],

            last5: [''],
            ifyeslast5: [''],

            last6: [''],
        });
        this.ss
            .GetBRSR_ReportGenerationByReportId(this.reportid)
            .subscribe((data) => {
                const reportdata = data[0];
                if (reportdata && reportdata.InitialDraftReport) {
                    this.initialDraftReport1 = JSON.parse(
                        reportdata.InitialDraftReport
                    );
                    this.principalform.patchValue(this.initialDraftReport1);
                    this.principalform.patchValue({
                      last1: this.initialDraftReport1[25]['xfac'],
                      last2in1: this.initialDraftReport1[25]['one'],
                        last2in2: this.initialDraftReport1[25]['two'],
                        last2in3: this.initialDraftReport1[25]['three'],
                        last3in1: this.initialDraftReport1[25]['four'],
                        last3in2: this.initialDraftReport1[25]['five'],
                        last3in3: this.initialDraftReport1[25]['six'],
                        last3in4: this.initialDraftReport1[25]['seven'],
                        last3in5: this.initialDraftReport1[25]['eight'],
                        last3in6: this.initialDraftReport1[25]['nine'],
                        last3in7: this.initialDraftReport1[25]['ten'],
                        last3in8: this.initialDraftReport1[25]['eleven'],
                        last3in9: this.initialDraftReport1[25]['twelve'],
                        last3in10: this.initialDraftReport1[25]['thirteen'],
                        last3in11: this.initialDraftReport1[25]['fourteen'],
                        last3in12: this.initialDraftReport1[25]['fifteen'],
                        last3in13: this.initialDraftReport1[25]['sixteen'],
                        last3in14: this.initialDraftReport1[25]['seventeen'],
                        last3in15: this.initialDraftReport1[25]['eighteen'],
                        last3in16: this.initialDraftReport1[25]['nineteen'],
                        last3in17: this.initialDraftReport1[25]['twenty'],
                        last3in18: this.initialDraftReport1[25]['twentyOne'],
                        last3in19: this.initialDraftReport1[25]['twentyTwo'],
                        last3in20: this.initialDraftReport1[25]['twentyThree'],
                        last3in21: this.initialDraftReport1[25]['twentyFour'],
                        last3in22: this.initialDraftReport1[25]['twentyFive'],
                        last3in23: this.initialDraftReport1[25]['twentySix'],
                        last3in24: this.initialDraftReport1[25]['twentySeven'],
                        last3in25: this.initialDraftReport1[25]['twentyEight'],
                        last3in26: this.initialDraftReport1[25]['twentyNine'],
                        last3in27: this.initialDraftReport1[25]['thirty'],
                        last3in28: this.initialDraftReport1[25]['thirtyOne'],
                        last3in29: this.initialDraftReport1[25]['thirtyTwo'],
                        last3in30: this.initialDraftReport1[25]['thirtyThree'],
                        last3in31: this.initialDraftReport1[25]['thirtyFour'],
                        last3in32: this.initialDraftReport1[25]['thirtyFive'],
                        last3in33: this.initialDraftReport1[25]['thirtySix'],
                        last3in34: this.initialDraftReport1[25]['thirtySeven'],
                        last3in35: this.initialDraftReport1[25]['thirtyEight'],
                        last3in36: this.initialDraftReport1[25]['thirtyNine'],
                        last3in37: this.initialDraftReport1[25]['forty'],
                        last3in38: this.initialDraftReport1[25]['fortyOne'],
                        last3in39: this.initialDraftReport1[25]['fortyTwo'],
                        last3in40: this.initialDraftReport1[25]['fortyThree'],
                        last3in41: this.initialDraftReport1[25]['fortyFour'],
                        last3in42: this.initialDraftReport1[25]['fortyFive'],
                        last4in1: this.initialDraftReport1[25]['fortySix'],
                        last4in2: this.initialDraftReport1[25]['fortySeven'],
                        last4in3: this.initialDraftReport1[25]['fortyEight'],
                        last4in4: this.initialDraftReport1[25]['fortyNine'],
                        last4in5: this.initialDraftReport1[25]['fifty'],
                        last5: this.initialDraftReport1[25]['fiftyone'],
                        ifyeslast5: this.initialDraftReport1[25]['fiftytwo'],
                        last6: this.initialDraftReport1[25]['fiftythree'],
                    });
                     this.ifyesChangelast5=this.principalform.get('ifyeslast5').value;
                }
            });
    }

    Changelast5(value) {
        if (value.value == 'Yes') {
            this.ifyesChangelast5 = true;
        } else {
            this.ifyesChangelast5 = false;
        }
    }
    onSave() {
      var xfac = this.principalform.get('last1').value;
      var one = this.principalform.get('last2in1').value;
        var two = this.principalform.get('last2in2').value;
        var three = this.principalform.get('last2in3').value;
        var four = this.principalform.get('last3in1').value;
        var five = this.principalform.get('last3in2').value;
        var six = this.principalform.get('last3in3').value;
        var seven = this.principalform.get('last3in4').value;
        var eight = this.principalform.get('last3in5').value;
        var nine = this.principalform.get('last3in6').value;
        var ten = this.principalform.get('last3in7').value;
        var eleven = this.principalform.get('last3in8').value;
        var twelve = this.principalform.get('last3in9').value;
        var thirteen = this.principalform.get('last3in10').value;
        var fourteen = this.principalform.get('last3in11').value;
        var fifteen = this.principalform.get('last3in12').value;
        var sixteen = this.principalform.get('last3in13').value;
        var seventeen = this.principalform.get('last3in14').value;
        var eighteen = this.principalform.get('last3in15').value;
        var nineteen = this.principalform.get('last3in16').value;
        var twenty = this.principalform.get('last3in17').value;
        var twentyOne = this.principalform.get('last3in18').value;
        var twentyTwo = this.principalform.get('last3in19').value;
        var twentyThree = this.principalform.get('last3in20').value;
        var twentyFour = this.principalform.get('last3in21').value;
        var twentyFive = this.principalform.get('last3in22').value;
        var twentySix = this.principalform.get('last3in23').value;
        var twentySeven = this.principalform.get('last3in24').value;
        var twentyEight = this.principalform.get('last3in25').value;
        var twentyNine = this.principalform.get('last3in26').value;
        var thirty = this.principalform.get('last3in27').value;
        var thirtyOne = this.principalform.get('last3in28').value;
        var thirtyTwo = this.principalform.get('last3in29').value;
        var thirtyThree = this.principalform.get('last3in30').value;
        var thirtyFour = this.principalform.get('last3in31').value;
        var thirtyFive = this.principalform.get('last3in32').value;
        var thirtySix = this.principalform.get('last3in33').value;
        var thirtySeven = this.principalform.get('last3in34').value;
        var thirtyEight = this.principalform.get('last3in35').value;
        var thirtyNine = this.principalform.get('last3in36').value;
        var forty = this.principalform.get('last3in37').value;
        var fortyOne = this.principalform.get('last3in38').value;
        var fortyTwo = this.principalform.get('last3in39').value;
        var fortyThree = this.principalform.get('last3in40').value;
        var fortyFour = this.principalform.get('last3in41').value;
        var fortyFive = this.principalform.get('last3in42').value;
        var fortySix = this.principalform.get('last4in1').value;
        var fortySeven = this.principalform.get('last4in2').value;
        var fortyEight = this.principalform.get('last4in3').value;
        var fortyNine = this.principalform.get('last4in4').value;
        var fifty = this.principalform.get('last4in5').value;
        var fiftyone = this.principalform.get('last5').value;
        var fiftytwo = this.principalform.get('ifyeslast5').value;
        var fiftythree = this.principalform.get('last6').value;

        this.initialDraftReport1[25] = {
          xfac, one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten,
            eleven,
            twelve,
            thirteen,
            fourteen,
            fifteen,
            sixteen,
            seventeen,
            eighteen,
            nineteen,
            twenty,
            twentyOne,
            twentyTwo,
            twentyThree,
            twentyFour,
            twentyFive,
            twentySix,
            twentySeven,
            twentyEight,
            twentyNine,
            thirty,
            thirtyOne,
            thirtyTwo,
            thirtyThree,
            thirtyFour,
            thirtyFive,
            thirtySix,
            thirtySeven,
            thirtyEight,
            thirtyNine,
            forty,
            fortyOne,
            fortyTwo,
            fortyThree,
            fortyFour,
            fortyFive,
            fortySix,
            fortySeven,
            fortyEight,
            fortyNine,
            fifty,
            fiftyone,
            fiftytwo,
            fiftythree,
        };

        console.log(this.initialDraftReport1);
        const currentInitialDraftReport = this.initialDraftReport1;
        this.ss.liquid[25] = currentInitialDraftReport[25];

        this.ss
            .GetBRSR_ReportGenerationByReportId(this.reportid)
            .subscribe((data) => {
                const reportdata = data[0];
                var init = JSON.parse(reportdata.InitialDraftReport);
                if (init != null) {
                    init[25] = this.ss.liquid[25];
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
                    init[25] = this.ss.liquid[25];
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
