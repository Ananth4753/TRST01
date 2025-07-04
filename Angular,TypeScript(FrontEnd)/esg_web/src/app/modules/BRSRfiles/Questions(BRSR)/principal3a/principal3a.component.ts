import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { ReturnratecalcComponent } from './returnratecalc/returnratecalc.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RetentionratecalcComponent } from './retentionratecalc/retentionratecalc.component';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';

import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector: 'app-principal3a',
    templateUrl: './principal3a.component.html',
    styleUrls: ['./principal3a.component.css'],
})
export class Principal3aComponent implements OnInit {
    principalform: FormGroup;
    @Input() princi3e: any;
    dropinput4: any;
    dropinput1: any;
    dropinput2: any;
    dropinput3: any;
    dropinput5: any;
    filteredList: any;
    storedchan: any;
    inputthreea9a1: any;
    inputthreea9a2: any;
    resultthreea9a3: any;

    inputthreea9b1: any;
    inputthreea9b2: any;
    resultthreea9b3: any;
    totalinputthreea9a1: any;
    totalinputthreea9a2: any;
    inputthreea9a4: any;
    inputthreea9a5: any;
    resultthreea9a6: any;
    inputthreea9b4: any;
    inputthreea9b5: any;
    resultthreea9b6: any;
    totalinputthreea9a4: any;
    totalinputthreea9a5: any;
    totalinputthreea9c3: any;
    totalinputthreea9c6: any;
    threea10aexplainyesclicked: boolean = false;
    threea10cexplainyesclicked: boolean = false;
    threea10dexplainyesclicked: boolean = false;
    dropinput6: any;
    dropinput7: any;
    currentYear: number;
    PreviousYear: number;
    NextYear: number;
    YesorNo: any;
    //workers
    inputthreea9d1: any;
    inputthreea9d2: any;
    resultthreea9d3: any;
    lookupdtl: any;
    reportid:any;
    inputthreea9d4: any;
    inputthreea9d5: any;
    resultthreea9d6: any;
    newAttribute: { eight: string; eightytwo: string; eightythree: string; eightyfive: string;eightysix: string;Type: string ;Type2: string };
    inputthreea9e1: any;
    inputthreea9e2: any;
    resultthreea9e3: any;

    inputthreea9e4: any;
    inputthreea9e5: any;
    resultthreea9e6: any;

    totalinputthreea9d1: any;
    totalinputthreea9d2: any;
    initialDraftReport1: any = {};
    totalinputthreea9d4: any;
    totalinputthreea9d5: any;
    totalinputthreea9f3: any;
    totalinputthreea9f6: any;
    orgId:any;
    constructor(
        private fb: FormBuilder,
        private is: ImportdisService,
        private sbrs:SelectbrsrService,
        public dialog: MatDialog,
        private aa:ActivatedRoute,
        private cs:CreatereportforbrsrService,
        public AuthService:AuthService,
    ) {
        this.lookupdtl = [];
    }

    ngOnInit() {
        this.orgId=this.AuthService.user.orgId
        this.reportid = this.aa.snapshot.paramMap.get('reportId');
        const Today = new Date();
        this.currentYear = Today.getFullYear();
        this.PreviousYear = this.currentYear - 1;
        this.NextYear = this.currentYear + 1;
        this.addFieldValue();
        this.is.getLookupDetailsByHdrId(37).subscribe((Data) => {
            this.YesorNo = Data;
        });

        this.principalform = this.fb.group({
          work1:[''],
          work2:[''],
          work3:[''],
          work4:[''],
          work5:[''],
          work6:[''],
          work7:[''],
          work8:[''],
          work9:[''],
          work10:[''],
          work11:[''],
          work12:[''],
          mam1:[''],
          mam2:[''],
          mam3:[''],
          mam4:[''],
          mam5:[''],
          mam6:[''],
          mam7:[''],
          mam8:[''],
          mam9:[''],
          mam10:[''],
          mam11:[''],
          mam12:[''],
            threea1: [''],
            threea2: [''],
            threea3: [''],
            sixtysix2121: [''],
            threea4: [''],
            sixtysix212: [''],
            threea5: [''],
            threea6: [''],
            threea7: [''],
            threea8: [''],
            threea9: [''],
            threea10: [''],
            threea11: [''],
            threea12: [''],
            threea13: [''],
            threea14: [''],
            threea15: [''],
            threea16: [''],
            glao4: [''],
            glao4a: [''],
            glao4b: [''],
            glao4c: [''],
            glao4d: [''],
            glao4e: [''],
            glao4f: [''],
            glao41: [''],
            glao41yes: [''],
            glao42: [''],
            glao42yes: [''],
            glao43: [''],
            glao43yes: [''],
            glao44: [''],
            glao44yes: [''],
            threea9a1: [''],
            threea9a2: [''],
            threea9a3: [''],
            threea9a4: [''],
            threea9a5: [''],
            threea9a6: [''],

            threea9b1: [''],
            threea9b2: [''],
            threea9b3: [''],
            threea9b4: [''],
            threea9b5: [''],
            threea9b6: [''],

            threea9c1: [''],
            threea9c2: [''],
            threea9c3: [''],
            threea9c4: [''],
            threea9c5: [''],
            threea9c6: [''],

            threea9d1: [''],
            threea9d2: [''],
            threea9d3: [''],
            threea9d4: [''],
            threea9d5: [''],
            threea9d6: [''],

            threea9e1: [''],
            threea9e2: [''],
            threea9e3: [''],
            threea9e4: [''],
            threea9e5: [''],
            threea9e6: [''],

            threea9f1: [''],
            threea9f2: [''],
            threea9f3: [''],
            threea9f4: [''],
            threea9f5: [''],
            threea9f6: [''],

            threea10a: [''],
            threea10ayes: [''],

            threea10b: [''],

            threea10c: [''],
            threea10dyes: [''],

            threea10d: [''],
            threea10cyes: [''],

            threea11a: [''],
            threea11b: [''],
            threea11c: [''],
            threea11d: [''],
            threea11e: [''],
            threea11f: [''],
            threea11g: [''],
            threea11h: [''],
            threea11i: [''],
            threea11j: [''],
            threea11k: [''],
            threea11l: [''],
            threea11m: [''],
            threea11n: [''],
            threea11o: [''],
            threea11p: [''],

            threea13a: [''],
            threea13b: [''],
            threea13c: [''],
            threea13d: [''],
            threea13e: [''],
            threea13f: [''],
            threea13g: [''],
            threea13h: [''],
            threea13i: [''],
            threea13j: [''],
            threea13k: [''],
            threea13l: [''],

            threea14a: [''],
            threea14b: [''],
            ope1:[],
            ope2:[],
            ope3:[],
            ope4:[],
            ope5:[],
            ope6:[],
            ope7:[],
            ope8:[],
            ope9:[],
            ope10:[],
            ope11:[],
            ope12:[],
            ope13:[],
            ope14:[],
            ope15:[],
            ope16:[],
            ope17:[],
            ope18:[],
            ope19:[],
            ope20:[],
            ope21:[],
            ope22:[],
            ope23:[],
            ope24:[],
            ope25:[],
            ope26:[],
            ope27:[],
            ope28:[],
            ope29:[],
            ope30:[],
            ope31:[],
            ope32:[],
            ope33:[],
            ope34:[],
            ope35:[],
            ope36:[],
            ope37:[],
            ope38:[],
            ope39:[],
            ope40:[],
            ope41:[],
            ope42:[],
            ope43:[],
            ope44:[],
            ope45:[],
            ope46:[],
            ope47:[],
            ope48:[],
            ope49:[],
            ope50:[],
            ope51:[],
            ope52:[],
            ope53:[],
            ope54:[],
            ope55:[],
            ope56:[],
            ope57:[],
            ope58:[],
            ope59:[],
            ope60:[],
            ope61:[],
            ope62:[],
            ope63:[],
            ope64:[],
            ope65:[],
            ope66:[],
            ffope1:[],
            ffope2:[],
            ffope3:[],
            ffope4:[],
            ffope5:[],
            ffope6:[],
            ffope7:[],
            ffope8:[],
            ffope9:[],
            ffope10:[],
            ffope11:[],
            ffope12:[],
            ffope13:[],
            ffope14:[],
            ffope15:[],
            ffope16:[],
            ffope17:[],
            ffope18:[],
            ffope19:[],
            ffope20:[],
            ffope21:[],
            ffope22:[],
            ffope23:[],
            ffope24:[],
            ffope25:[],
            ffope26:[],
            ffope27:[],
            ffope28:[],
            ffope29:[],
            ffope30:[],
            ffope31:[],
            ffope32:[],
            ffope33:[],
            ffope34:[],
            ffope35:[],
            ffope36:[],
            ffope37:[],
            ffope38:[],
            ffope39:[],
            ffope40:[],
            ffope41:[],
            ffope42:[],
            ffope43:[],
            ffope44:[],
            ffope45:[],
            ffope46:[],
            ffope47:[],
            ffope48:[],
            ffope49:[],
            ffope50:[],
            ffope51:[],
            ffope52:[],
            ffope53:[],
            ffope54:[],
            ffope55:[],
            ffope56:[],
            ffope57:[],
            ffope58:[],
            ffope59:[],
            ffope60:[],
            ffope61:[],
            ffope62:[],
            ffope63:[],
            ffope64:[],
            ffope65:[],
            ffope66:[],
            one1:[''],
            two2:[''],
            three3:[''],
            four4:[''],
            five5:[''],
            six6:[''],
            seven7:[''],
            eight8:[''],
            nine9:[''],
            ten10:[''],
            eleven11:[''],
            twelve12:[''],
            thirteen13:[''],
            fourteen14:[''],
            fifteen15:[''],
            sixteen16:[''],
            seventeen17:[''],
            eighteen18:[''],
            nineteen19:[''],
            twenty20:[''],
            twentyone21:[''],
            twentytwo22:[''],
            twentythree23:[''],
            twentyfour24:[''],
            twentyfive25:[''],
            twentysix26:[''],
            twentyseven27:[''],
            twentyeight28:[''],
            twentynine29:[''],
            thirty30:[''],
            thirtyone31:[''],
            thirtytwo32:[''],
            thirtythree33:[''],
            thirtyfour34:[''],
            thirtyfive35:[''],
            thirtysix36:[''],
            oneness:[''],
            twoness:[''],
            threeness:[''],
            fourness:[''],
            fiveness:[''],
            sixness:[''],
            eightness:[''],
            nineness:[''],
            tenness:[''],
            elevenness:[''],
            twelveness:[''],
            thirteenness:[''],
            fourteenness:[''],
            fifteenness:[''],
            sixteenness:[''],
            seventeenness:[''],
            eighteenness:[''],
            nineteenness:[''],
            twentyness:[''],
            twentyoneness:[''],
            twentytwoness:[''],
            twentythreeness:[''],
            twentyfourness:[''],
            twentyfiveness:[''],
            twentysixness:[''],
            twentysevenness:[''],
            twentyeightness:[''],
            twentynineness:[''],
            thirtyness:[''],
            thirtyoneness:[''],
            thirtytwoness:[''],
            thirtythreeness:[''],
            thirtyfourness:[''],
            thirtyfiveness:[''],
            thirtysixness:[''],
            thirtysevenness:[''],
            thirtyeightness:[''],
            thirtynineness:[''],
            fourtyness:[''],
            fourtyoneness:[''],
            fourtytwoness:[''],
            fourtythreeness:[''],
            fourtyfourness:[''],
            fourtyfiveness:[''],
            fourtysixness:[''],
            fourtysevenness:[''],
            fourtyeightness:[''],
            fourtynineness:[''],
            fiftyness:[''],
            fiftyoneness:[''],
            fiftytwoness:[''],
            fiftythreeness:[''],
            fiftyfourness:[''],
            fiftyfiveness:[''],
            fiftysixness:[''],
            fiftysevenness:[''],
            fiftyeightness:[''],
            fiftynineness:[''],
            sixtyness:[''],
            sixtyoneness:[''],
            
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
              this.lookupdtl=JSON.parse(this.initialDraftReport1[13]['Table1']);
              this.principalform.patchValue(this.initialDraftReport1);
              this.principalform.patchValue({
                ope1: this.initialDraftReport1[13]['one'],
                ope2: this.initialDraftReport1[13]['two'],
                ope3: this.initialDraftReport1[13]['three'],
                ope4: this.initialDraftReport1[13]['four'],
                ope5: this.initialDraftReport1[13]['five'],
                ope6: this.initialDraftReport1[13]['six'],
                ope7: this.initialDraftReport1[13]['seven'],
                ope8: this.initialDraftReport1[13]['eight'],
                ope9: this.initialDraftReport1[13]['nine'],
                ope10: this.initialDraftReport1[13]['ten'],
                ope11: this.initialDraftReport1[13]['eleven'],
                ope12: this.initialDraftReport1[13]['twelve'],
                ope13: this.initialDraftReport1[13]['thirteen'],
                ope14: this.initialDraftReport1[13]['fourteen'],
                ope15: this.initialDraftReport1[13]['fifteen'],
                ope16: this.initialDraftReport1[13]['sixteen'],
                ope17: this.initialDraftReport1[13]['seventeen'],
                ope18: this.initialDraftReport1[13]['eighteen'],
                ope19: this.initialDraftReport1[13]['nineteen'],
                ope20: this.initialDraftReport1[13]['twenty'],
                ope21: this.initialDraftReport1[13]['twentyone'],
                ope22: this.initialDraftReport1[13]['twentytwo'],
                ope23: this.initialDraftReport1[13]['twentythree'],
                ope24: this.initialDraftReport1[13]['twentyfour'],
                ope25: this.initialDraftReport1[13]['twentyfive'],
                ope26: this.initialDraftReport1[13]['twentysix'],
                ope27: this.initialDraftReport1[13]['twentyseven'],
                ope28: this.initialDraftReport1[13]['twentyeight'],
                ope29: this.initialDraftReport1[13]['twentynine'],
                ope30: this.initialDraftReport1[13]['thirty'],
                ope31: this.initialDraftReport1[13]['thirtyone'],
                ope32: this.initialDraftReport1[13]['thirtytwo'],
                ope33: this.initialDraftReport1[13]['thirtythree'],
                ope34: this.initialDraftReport1[13]['thirtyfour'],
                ope35: this.initialDraftReport1[13]['thirtyfive'],
                ope36: this.initialDraftReport1[13]['thirtysix'],
                ope37: this.initialDraftReport1[13]['thirtyseven'],
                ope38: this.initialDraftReport1[13]['thirtyeight'],
                ope39: this.initialDraftReport1[13]['thirtynine'],
                ope40: this.initialDraftReport1[13]['fourty'],
                ope41: this.initialDraftReport1[13]['fourtyone'],
                ope42: this.initialDraftReport1[13]['fourtytwo'],
                ope43: this.initialDraftReport1[13]['fourtythree'],
                ope44: this.initialDraftReport1[13]['fourtyfour'],
                ope45: this.initialDraftReport1[13]['fourtyfive'],
                ope46: this.initialDraftReport1[13]['fourtysix'],
                ope47: this.initialDraftReport1[13]['fourtyseven'],
                ope48: this.initialDraftReport1[13]['fourtyeight'],
                ope49: this.initialDraftReport1[13]['fourtynine'],
                ope50: this.initialDraftReport1[13]['fifty'],
                ope51: this.initialDraftReport1[13]['fiftyone'],
                ope52: this.initialDraftReport1[13]['fiftytwo'],
                ope53: this.initialDraftReport1[13]['fiftythree'],
                ope54: this.initialDraftReport1[13]['fiftyfour'],
                ope55: this.initialDraftReport1[13]['fiftyfive'],
                ope56: this.initialDraftReport1[13]['fiftysix'],
                ope57: this.initialDraftReport1[13]['fiftyseven'],
                ope58: this.initialDraftReport1[13]['fiftyeight'],
                ope59: this.initialDraftReport1[13]['fiftynine'],
                ope60: this.initialDraftReport1[13]['sixty'],
                ope61: this.initialDraftReport1[13]['sixtyone'],
                ope62: this.initialDraftReport1[13]['sixtytwo'],
                ope63: this.initialDraftReport1[13]['sixtythree'],
                ope64: this.initialDraftReport1[13]['sixtyfour'],
                ope65: this.initialDraftReport1[13]['sixtyfive'],
                ope66: this.initialDraftReport1[13]['sixtysix'],
                ffope1: this.initialDraftReport1[13]['ffone'],
                ffope2: this.initialDraftReport1[13]['fftwo'],
                ffope3: this.initialDraftReport1[13]['ffthree'],
                ffope4: this.initialDraftReport1[13]['fffour'],
                ffope5: this.initialDraftReport1[13]['fffive'],
                ffope6: this.initialDraftReport1[13]['ffsix'],
                ffope7: this.initialDraftReport1[13]['ffseven'],
                ffope8: this.initialDraftReport1[13]['ffeight'],
                ffope9: this.initialDraftReport1[13]['ffnine'],
                ffope10: this.initialDraftReport1[13]['fften'],
                ffope11: this.initialDraftReport1[13]['ffeleven'],
                ffope12: this.initialDraftReport1[13]['fftwelve'],
                ffope13: this.initialDraftReport1[13]['ffthirteen'],
                ffope14: this.initialDraftReport1[13]['fffourteen'],
                ffope15: this.initialDraftReport1[13]['fffifteen'],
                ffope16: this.initialDraftReport1[13]['ffsixteen'],
                ffope17: this.initialDraftReport1[13]['ffseventeen'],
                ffope18: this.initialDraftReport1[13]['ffeighteen'],
                ffope19: this.initialDraftReport1[13]['ffnineteen'],
                ffope20: this.initialDraftReport1[13]['fftwenty'],
                ffope21: this.initialDraftReport1[13]['fftwentyone'],
                ffope22: this.initialDraftReport1[13]['fftwentytwo'],
                ffope23: this.initialDraftReport1[13]['fftwentythree'],
                ffope24: this.initialDraftReport1[13]['fftwentyfour'],
                ffope25: this.initialDraftReport1[13]['fftwentyfive'],
                ffope26: this.initialDraftReport1[13]['fftwentysix'],
                ffope27: this.initialDraftReport1[13]['fftwentyseven'],
                ffope28: this.initialDraftReport1[13]['fftwentyeight'],
                ffope29: this.initialDraftReport1[13]['fftwentynine'],
                ffope30: this.initialDraftReport1[13]['ffthirty'],
                ffope31: this.initialDraftReport1[13]['ffthirtyone'],
                ffope32: this.initialDraftReport1[13]['ffthirtytwo'],
                ffope33: this.initialDraftReport1[13]['ffthirtythree'],
                ffope34: this.initialDraftReport1[13]['ffthirtyfour'],
                ffope35: this.initialDraftReport1[13]['ffthirtyfive'],
                ffope36: this.initialDraftReport1[13]['ffthirtysix'],
                ffope37: this.initialDraftReport1[13]['ffthirtyseven'],
                ffope38: this.initialDraftReport1[13]['ffthirtyeight'],
                ffope39: this.initialDraftReport1[13]['ffthirtynine'],
                ffope40: this.initialDraftReport1[13]['fffourty'],
                ffope41: this.initialDraftReport1[13]['fffourtyone'],
                ffope42: this.initialDraftReport1[13]['fffourtytwo'],
                ffope43: this.initialDraftReport1[13]['fffourtythree'],
                ffope44: this.initialDraftReport1[13]['fffourtyfour'],
                ffope45: this.initialDraftReport1[13]['fffourtyfive'],
                ffope46: this.initialDraftReport1[13]['fffourtysix'],
                ffope47: this.initialDraftReport1[13]['fffourtyseven'],
                ffope48: this.initialDraftReport1[13]['fffourtyeight'],
                ffope49: this.initialDraftReport1[13]['fffourtynine'],
                ffope50: this.initialDraftReport1[13]['fffifty'],
                ffope51: this.initialDraftReport1[13]['fffiftyone'],
                ffope52: this.initialDraftReport1[13]['fffiftytwo'],
                ffope53: this.initialDraftReport1[13]['fffiftythree'],
                ffope54: this.initialDraftReport1[13]['fffiftyfour'],
                ffope55: this.initialDraftReport1[13]['fffiftyfive'],
                ffope56: this.initialDraftReport1[13]['fffiftysix'],
                ffope57: this.initialDraftReport1[13]['fffiftyseven'],
                ffope58: this.initialDraftReport1[13]['fffiftyeight'],
                ffope59: this.initialDraftReport1[13]['fffiftynine'],
                ffope60: this.initialDraftReport1[13]['ffsixty'],
                ffope61: this.initialDraftReport1[13]['ffsixtyone'],
                ffope62: this.initialDraftReport1[13]['ffsixtytwo'],
                ffope63: this.initialDraftReport1[13]['ffsixtythree'],
                ffope64: this.initialDraftReport1[13]['ffsixtyfour'],
                ffope65: this.initialDraftReport1[13]['ffsixtyfive'],
                ffope66: this.initialDraftReport1[13]['ffsixtysix'],
                mam1:this.initialDraftReport1[13]['mam1'],
                mam2:this.initialDraftReport1[13]['mam2'],
                glao4a:this.initialDraftReport1[13]['mam3'],
                mam3:this.initialDraftReport1[13]['mam4'],
                mam4:this.initialDraftReport1[13]['mam5'],
                glao4b:this.initialDraftReport1[13]['mam6'],
                mam5:this.initialDraftReport1[13]['mam7'],
                mam6:this.initialDraftReport1[13]['mam8'],
                glao4c:this.initialDraftReport1[13]['mam9'],
                mam7:this.initialDraftReport1[13]['mam10'],
                mam8:this.initialDraftReport1[13]['mam11'],
                glao4d:this.initialDraftReport1[13]['mam12'],
                mam9:this.initialDraftReport1[13]['mam13'],
                mam10:this.initialDraftReport1[13]['mam14'],
                glao4e:this.initialDraftReport1[13]['mam15'],
                mam11:this.initialDraftReport1[13]['mam16'],
                mam12:this.initialDraftReport1[13]['mam17'],
                glao4f:this.initialDraftReport1[13]['mam18'],

                threea3: this.initialDraftReport1[13]['threeans'],
                sixtysix2121: this.initialDraftReport1[13]['threeans1'],

                threea4: this.initialDraftReport1[13]['fourans'],
                sixtysix212: this.initialDraftReport1[13]['fourans1'],

                work1 : this.initialDraftReport1[13]['five1'],
                work2 : this.initialDraftReport1[13]['five2'],
                work3 : this.initialDraftReport1[13]['five3'],
                work4 : this.initialDraftReport1[13]['five4'],
                work5 : this.initialDraftReport1[13]['five5'],
                work6 : this.initialDraftReport1[13]['five6'],
                work7 : this.initialDraftReport1[13]['five7'],
                work8 : this.initialDraftReport1[13]['five8'],
                work9 : this.initialDraftReport1[13]['five9'],
                work10 : this.initialDraftReport1[13]['five10'],
                work11 : this.initialDraftReport1[13]['five11'],
                work12 : this.initialDraftReport1[13]['five12'],

                one1: this.initialDraftReport1[13]['seven1'],
                two2: this.initialDraftReport1[13]['seven'],
                three3: this.initialDraftReport1[13]['seven3'],
                four4: this.initialDraftReport1[13]['seven4'],
                five5: this.initialDraftReport1[13]['seven5'],
                six6: this.initialDraftReport1[13]['seven6'],
                seven7: this.initialDraftReport1[13]['seven7'],
                eight8: this.initialDraftReport1[13]['seven8'],
                nine9: this.initialDraftReport1[13]['seven9'],
                ten10: this.initialDraftReport1[13]['seven10'],
                eleven11: this.initialDraftReport1[13]['seven11'],
                twelve12: this.initialDraftReport1[13]['seven12'],
                thirteen13: this.initialDraftReport1[13]['seven13'],
                fourteen14: this.initialDraftReport1[13]['seven14'],
                fifteen15: this.initialDraftReport1[13]['seven15'],
                sixteen16: this.initialDraftReport1[13]['seven16'],
                seventeen17: this.initialDraftReport1[13]['seven17'],
                eighteen18: this.initialDraftReport1[13]['seven18'],
                nineteen19: this.initialDraftReport1[13]['seven19'],
                twenty20: this.initialDraftReport1[13]['seven20'],
                twentyone21: this.initialDraftReport1[13]['seven21'],
                twentytwo22: this.initialDraftReport1[13]['seven22'],
                twentythree23: this.initialDraftReport1[13]['seven23'],
                twentyfour24: this.initialDraftReport1[13]['seven24'],
                twentyfive25: this.initialDraftReport1[13]['seven25'],
                twentysix26: this.initialDraftReport1[13]['seven26'],
                twentyseven27: this.initialDraftReport1[13]['seven27'],
                twentyeight28: this.initialDraftReport1[13]['seven28'],
                twentynine29: this.initialDraftReport1[13]['seven29'],
                thirty30: this.initialDraftReport1[13]['seven30'],
                thirtyone31: this.initialDraftReport1[13]['seven31'],
                thirtytwo32: this.initialDraftReport1[13]['seven32'],
                thirtythree33: this.initialDraftReport1[13]['seven33'],
                thirtyfour34: this.initialDraftReport1[13]['seven34'],
                thirtyfive35: this.initialDraftReport1[13]['seven35'],
                thirtysix36: this.initialDraftReport1[13]['seven36'],

                oneness : this.initialDraftReport1[13]['eight1'],
                twoness : this.initialDraftReport1[13]['eight2'],
                threeness : this.initialDraftReport1[13]['eight3'],
                fourness : this.initialDraftReport1[13]['eight4'],
                fiveness : this.initialDraftReport1[13]['eight5'],
                sixness : this.initialDraftReport1[13]['eight6'],
                eightness : this.initialDraftReport1[13]['eight7'],
                nineness : this.initialDraftReport1[13]['eight8'],
                tenness : this.initialDraftReport1[13]['eight9'],
                elevenness : this.initialDraftReport1[13]['eight10'],
                twelveness : this.initialDraftReport1[13]['eight11'],
                thirteenness : this.initialDraftReport1[13]['eight12'],
                fourteenness : this.initialDraftReport1[13]['eight13'],
                fifteenness : this.initialDraftReport1[13]['eight14'],
                sixteenness : this.initialDraftReport1[13]['eight15'],
                seventeenness : this.initialDraftReport1[13]['eight16'],
                eighteenness : this.initialDraftReport1[13]['eight17'],
                nineteenness : this.initialDraftReport1[13]['eight18'],
                twentyness : this.initialDraftReport1[13]['eight19'],
                twentyoneness : this.initialDraftReport1[13]['eight20'],
                twentytwoness : this.initialDraftReport1[13]['eight21'],
                twentythreeness : this.initialDraftReport1[13]['eight22'],
                twentyfourness : this.initialDraftReport1[13]['eight23'],
                twentyfiveness : this.initialDraftReport1[13]['eight24'],
                twentysixness : this.initialDraftReport1[13]['eight25'],
                twentysevenness : this.initialDraftReport1[13]['eight26'],
                twentyeightness : this.initialDraftReport1[13]['eight27'],
                twentynineness : this.initialDraftReport1[13]['eight28'],
                thirtyness : this.initialDraftReport1[13]['eight29'],
                thirtyoneness : this.initialDraftReport1[13]['eight30'],
                thirtytwoness : this.initialDraftReport1[13]['eight31'],
                thirtythreeness : this.initialDraftReport1[13]['eight32'],
                thirtyfourness : this.initialDraftReport1[13]['eight33'],
                thirtyfiveness : this.initialDraftReport1[13]['eight34'],
                thirtysixness : this.initialDraftReport1[13]['eight35'],
                thirtysevenness : this.initialDraftReport1[13]['eight36'],
                thirtyeightness : this.initialDraftReport1[13]['eight37'],
                thirtynineness : this.initialDraftReport1[13]['eight38'],
                fourtyness : this.initialDraftReport1[13]['eight39'],
                fourtyoneness : this.initialDraftReport1[13]['eight40'],
                fourtytwoness : this.initialDraftReport1[13]['eight41'],
                fourtythreeness : this.initialDraftReport1[13]['eight42'],
                fourtyfourness : this.initialDraftReport1[13]['eight43'],
                fourtyfiveness : this.initialDraftReport1[13]['eight44'],
                fourtysixness : this.initialDraftReport1[13]['eight45'],
                fourtysevenness : this.initialDraftReport1[13]['eight46'],
                fourtyeightness : this.initialDraftReport1[13]['eight47'],
                fourtynineness : this.initialDraftReport1[13]['eight48'],
                fiftyness : this.initialDraftReport1[13]['eight49'],
                fiftyoneness : this.initialDraftReport1[13]['eight50'],
                fiftytwoness : this.initialDraftReport1[13]['eight51'],
                fiftythreeness : this.initialDraftReport1[13]['eight52'],
                fiftyfourness : this.initialDraftReport1[13]['eight53'],
                fiftyfiveness : this.initialDraftReport1[13]['eight54'],
                fiftysixness : this.initialDraftReport1[13]['eight55'],
                fiftysevenness : this.initialDraftReport1[13]['eight56'],
                fiftyeightness : this.initialDraftReport1[13]['eight57'],
                fiftynineness : this.initialDraftReport1[13]['eight58'],
                sixtyness : this.initialDraftReport1[13]['eight59'],
                sixtyoneness : this.initialDraftReport1[13]['eight60'],

                threea9a1 : this.initialDraftReport1[13]['nine1'],
                threea9a2 : this.initialDraftReport1[13]['nine2'],
                threea9a3 : this.initialDraftReport1[13]['nine3'],
                threea9a4 : this.initialDraftReport1[13]['nine4'],
                threea9a5 : this.initialDraftReport1[13]['nine5'],
                threea9a6 : this.initialDraftReport1[13]['nine6'],
                threea9b1 : this.initialDraftReport1[13]['nine7'],
                threea9b2 : this.initialDraftReport1[13]['nine8'],
                threea9b3 : this.initialDraftReport1[13]['nine9'],
                threea9b4 : this.initialDraftReport1[13]['nine10'],
                threea9b5 : this.initialDraftReport1[13]['nine11'],
                threea9b6 : this.initialDraftReport1[13]['nine12'],
                threea9c1 : this.initialDraftReport1[13]['nine13'],
                threea9c2 : this.initialDraftReport1[13]['nine14'],
                threea9c3 : this.initialDraftReport1[13]['nine15'],
                threea9c4 : this.initialDraftReport1[13]['nine16'],
                threea9c5 : this.initialDraftReport1[13]['nine17'],
                threea9c6 : this.initialDraftReport1[13]['nine18'],
                threea9d1 : this.initialDraftReport1[13]['nine19'],
                threea9d2 : this.initialDraftReport1[13]['nine20'],
                threea9d3 : this.initialDraftReport1[13]['nine21'],
                threea9d4 : this.initialDraftReport1[13]['nine22'],
                threea9d5 : this.initialDraftReport1[13]['nine23'],
                threea9d6 : this.initialDraftReport1[13]['nine24'],
                threea9e1 : this.initialDraftReport1[13]['nine25'],
                threea9e2 : this.initialDraftReport1[13]['nine26'],
                threea9e3 : this.initialDraftReport1[13]['nine27'],
                threea9e4 : this.initialDraftReport1[13]['nine28'],
                threea9e5 : this.initialDraftReport1[13]['nine29'],
                threea9e6 : this.initialDraftReport1[13]['nine30'],
                threea9f1 : this.initialDraftReport1[13]['nine31'],
                threea9f2 : this.initialDraftReport1[13]['nine32'],
                threea9f3 : this.initialDraftReport1[13]['nine33'],
                threea9f4 : this.initialDraftReport1[13]['nine34'],
                threea9f5 : this.initialDraftReport1[13]['nine35'],
                threea9f6 : this.initialDraftReport1[13]['nine36'],

                threea10a : this.initialDraftReport1[13]['ten1'],
                threea10ayes : this.initialDraftReport1[13]['ten2'],
                threea10b : this.initialDraftReport1[13]['ten3'],
                threea10c : this.initialDraftReport1[13]['ten4'],
                threea10cyes : this.initialDraftReport1[13]['ten5'],
                threea10d : this.initialDraftReport1[13]['ten6'],
                threea10dyes : this.initialDraftReport1[13]['ten7'],

                threea11a : this.initialDraftReport1[13]['eleven1'],
                threea11b : this.initialDraftReport1[13]['eleven2'],
                threea11c : this.initialDraftReport1[13]['eleven3'],
                threea11d : this.initialDraftReport1[13]['eleven4'],
                threea11e : this.initialDraftReport1[13]['eleven5'],
                threea11f : this.initialDraftReport1[13]['eleven6'],
                threea11g : this.initialDraftReport1[13]['eleven7'],
                threea11h : this.initialDraftReport1[13]['eleven8'],
                threea11i : this.initialDraftReport1[13]['eleven9'],
                threea11j : this.initialDraftReport1[13]['eleven10'],
                threea11k : this.initialDraftReport1[13]['eleven11'],
                threea11l : this.initialDraftReport1[13]['eleven12'],
                threea11m : this.initialDraftReport1[13]['eleven13'],
                threea11n : this.initialDraftReport1[13]['eleven14'],
                threea11o : this.initialDraftReport1[13]['eleven15'],
                threea11p : this.initialDraftReport1[13]['eleven16'],

                threea13 : this.initialDraftReport1[13]['twelve1'],

                threea13a : this.initialDraftReport1[13]['thirteen1'],
                threea13b : this.initialDraftReport1[13]['thirteen2'],
                threea13c : this.initialDraftReport1[13]['thirteen3'],
                threea13d : this.initialDraftReport1[13]['thirteen4'],
                threea13e : this.initialDraftReport1[13]['thirteen5'],
                threea13f : this.initialDraftReport1[13]['thirteen6'],
                threea13g : this.initialDraftReport1[13]['thirteen7'],
                threea13h : this.initialDraftReport1[13]['thirteen8'],
                threea13i : this.initialDraftReport1[13]['thirteen9'],
                threea13j : this.initialDraftReport1[13]['thirteen10'],
                threea13k : this.initialDraftReport1[13]['thirteen11'],
                threea13l : this.initialDraftReport1[13]['thirteen12'],

                threea14a : this.initialDraftReport1[13]['fourteen1'],
                threea14b : this.initialDraftReport1[13]['fourteen2'],

                threea15 : this.initialDraftReport1[13]['fifteen1'],

                glao41: this.initialDraftReport1[13]['six1'],
                glao41yes : this.initialDraftReport1[13]['six2'],
                glao42: this.initialDraftReport1[13]['six3'],
                glao42yes : this.initialDraftReport1[13]['six4'],
                glao43: this.initialDraftReport1[13]['six5'],
                glao43yes : this.initialDraftReport1[13]['six6'],
                glao44: this.initialDraftReport1[13]['six7'],
                glao44yes : this.initialDraftReport1[13]['six8'],
                


                // ope12: this.initialDraftReport1[13]['twelve'],
                // puta3: this.initialDraftReport1[2]['ten'],
                // puta4: this.initialDraftReport1[2]['eleven'],
               
              });
          
            }
          });
        //Employees
        this.principalform
            .get('threea9a1')
            .valueChanges.subscribe(() => this.calculateResultthreea9a1());
        this.principalform
            .get('threea9a2')
            .valueChanges.subscribe(() => this.calculateResultthreea9a1());

        this.principalform
            .get('threea9a4')
            .valueChanges.subscribe(() => this.calculateResultthreea9a4());
        this.principalform
            .get('threea9a5')
            .valueChanges.subscribe(() => this.calculateResultthreea9a4());

        this.principalform
            .get('threea9b1')
            .valueChanges.subscribe(() => this.calculateResultthreea9b1());
        this.principalform
            .get('threea9b2')
            .valueChanges.subscribe(() => this.calculateResultthreea9b1());

        this.principalform
            .get('threea9b4')
            .valueChanges.subscribe(() => this.calculateResultthreea9b4());
        this.principalform
            .get('threea9b5')
            .valueChanges.subscribe(() => this.calculateResultthreea9b4());

        this.principalform
            .get('threea9c1')
            .valueChanges.subscribe(() => this.TotalSumthreea9c1());
        this.principalform
            .get('threea9c2')
            .valueChanges.subscribe(() => this.TotalSumthreea9c2());
        this.principalform
            .get('threea9c3')
            .valueChanges.subscribe(() => this.TotalSumthreea9c3());
        this.principalform
            .get('threea9c4')
            .valueChanges.subscribe(() => this.TotalSumthreea9c4());
        this.principalform
            .get('threea9c5')
            .valueChanges.subscribe(() => this.TotalSumthreea9c5());
        this.principalform
            .get('threea9c6')
            .valueChanges.subscribe(() => this.TotalSumthreea9c6());
        //Workers
        this.principalform
            .get('threea9d1')
            .valueChanges.subscribe(() => this.calculateResultthreea9d1());
        this.principalform
            .get('threea9d2')
            .valueChanges.subscribe(() => this.calculateResultthreea9d1());

        this.principalform
            .get('threea9d4')
            .valueChanges.subscribe(() => this.calculateResultthreea9d4());
        this.principalform
            .get('threea9d5')
            .valueChanges.subscribe(() => this.calculateResultthreea9d4());

        this.principalform
            .get('threea9e1')
            .valueChanges.subscribe(() => this.calculateResultthreea9e1());
        this.principalform
            .get('threea9e2')
            .valueChanges.subscribe(() => this.calculateResultthreea9e1());

        this.principalform
            .get('threea9e4')
            .valueChanges.subscribe(() => this.calculateResultthreea9e4());
        this.principalform
            .get('threea9e5')
            .valueChanges.subscribe(() => this.calculateResultthreea9e4());

        this.principalform
            .get('threea9f1')
            .valueChanges.subscribe(() => this.TotalSumthreea9f1());
        this.principalform
            .get('threea9f2')
            .valueChanges.subscribe(() => this.TotalSumthreea9f2());
        this.principalform
            .get('threea9f3')
            .valueChanges.subscribe(() => this.TotalSumthreea9f3());
        this.principalform
            .get('threea9f4')
            .valueChanges.subscribe(() => this.TotalSumthreea9f4());
        this.principalform
            .get('threea9f5')
            .valueChanges.subscribe(() => this.TotalSumthreea9f5());
        this.principalform
            .get('threea9f6')
            .valueChanges.subscribe(() => this.TotalSumthreea9f6());
        this.is.getLookupDetailsByHdrId(2).subscribe((Data) => {
            this.storedchan = Data;
            this.filteredList = this.storedchan.slice();
        });
        this.dropinput1 = 'No';
        this.dropinput2 = 'No';
        this.dropinput3 = 'No';
        this.dropinput5 = 'No';
    }
    addFieldValue() {
        this.newAttribute = {
            eight: '',
            Type:'',
            eightytwo: '',
            eightythree: '',
            eightyfive: '',
            eightysix: '',
            Type2:'',
        };
        this.lookupdtl.push(this.newAttribute);
        // this.reltypeother = '';
        console.log(this.lookupdtl);
    }
    onSave() {
        var one=this.principalform.get('ope1').value
        var two = this.principalform.get('ope2').value;
        var three = (document.getElementById('three') as HTMLInputElement).value;
        var four = this.principalform.get('ope4').value;
        var five = (document.getElementById('five') as HTMLInputElement).value;
        var  six = this.principalform.get('ope6').value;
        var seven = (document.getElementById('seven') as HTMLInputElement).value;
        var eight = this.principalform.get('ope8').value;
        var nine = (document.getElementById('nine') as HTMLInputElement).value;
        var ten = this.principalform.get('ope10').value;
        var eleven = (document.getElementById('eleven') as HTMLInputElement).value;
        var twelve=this.principalform.get('ope12').value
        var thirteen = this.principalform.get('ope13').value;
        var fourteen = (document.getElementById('fourteen') as HTMLInputElement).value;
        var fifteen = this.principalform.get('ope15').value;
        var sixteen = (document.getElementById('sixteen') as HTMLInputElement).value;
        var  seventeen = this.principalform.get('ope17').value;
        var eighteen = (document.getElementById('eighteen') as HTMLInputElement).value;
        var nineteen = this.principalform.get('ope19').value;
        var twenty = (document.getElementById('twenty') as HTMLInputElement).value;
        var twentyone = this.principalform.get('ope21').value;
        var twentytwo = (document.getElementById('twentytwo') as HTMLInputElement).value;
        var twentythree= (document.getElementById('twentythree') as HTMLInputElement).value;
        var twentyfour =  (document.getElementById('twentyfour') as HTMLInputElement).value;
        var twentyfive = (document.getElementById('twentyfive') as HTMLInputElement).value;
        var twentysix =  (document.getElementById('twentysix') as HTMLInputElement).value;
        var twentyseven = (document.getElementById('twentyseven') as HTMLInputElement).value;
        var  twentyeight =  (document.getElementById('twentyeight') as HTMLInputElement).value;
        var twentynine = (document.getElementById('twentynine') as HTMLInputElement).value;
        var thirty =  (document.getElementById('thirty') as HTMLInputElement).value;
        var thirtyone = (document.getElementById('thirtyone') as HTMLInputElement).value;
        var thirtytwo =  (document.getElementById('thirtytwo') as HTMLInputElement).value;
        var thirtythree = (document.getElementById('thirtythree') as HTMLInputElement).value;
/////////////////////////////////
        var thirtyfour=this.principalform.get('ope34').value
        var thirtyfive = this.principalform.get('ope35').value;
        var thirtysix = (document.getElementById('thirtysix') as HTMLInputElement).value;
        var thirtyseven = this.principalform.get('ope37').value;
        var thirtyeight = (document.getElementById('thirtyeight') as HTMLInputElement).value;
        var  thirtynine = this.principalform.get('ope39').value;
        var fourty = (document.getElementById('fourty') as HTMLInputElement).value;
        var fourtyone = this.principalform.get('ope41').value;
        var fourtytwo = (document.getElementById('fourtytwo') as HTMLInputElement).value;
        var fourtythree = this.principalform.get('ope43').value;
        var fourtyfour = (document.getElementById('fourtyfour') as HTMLInputElement).value;
        var fourtyfive=this.principalform.get('ope45').value
        var fourtysix = this.principalform.get('ope46').value;
        var fourtyseven = (document.getElementById('fourtyseven') as HTMLInputElement).value;
        var fourtyeight = this.principalform.get('ope48').value;
        var fourtynine = (document.getElementById('fourtynine') as HTMLInputElement).value;
        var  fifty = this.principalform.get('ope50').value;
        var fiftyone = (document.getElementById('fiftyone') as HTMLInputElement).value;
        var fiftytwo = this.principalform.get('ope52').value;
        var fiftythree = (document.getElementById('fiftythree') as HTMLInputElement).value;
        var fiftyfour = this.principalform.get('ope54').value;
        var fiftyfive = (document.getElementById('fiftyfive') as HTMLInputElement).value;
        var fiftysix= (document.getElementById('fiftysix') as HTMLInputElement).value;
        var fiftyseven =  (document.getElementById('fiftyseven') as HTMLInputElement).value;
        var fiftyeight = (document.getElementById('fiftyeight') as HTMLInputElement).value;
        var fiftynine =  (document.getElementById('fiftynine') as HTMLInputElement).value;
        var sixty = (document.getElementById('sixty') as HTMLInputElement).value;
        var  sixtyone =  (document.getElementById('sixtyone') as HTMLInputElement).value;
        var sixtytwo = (document.getElementById('sixtytwo') as HTMLInputElement).value;
        var sixtythree =  (document.getElementById('sixtythree') as HTMLInputElement).value;
        var sixtyfour = (document.getElementById('sixtyfour') as HTMLInputElement).value;
        var sixtyfive =  (document.getElementById('sixtyfive') as HTMLInputElement).value;
        var sixtysix = (document.getElementById('sixtysix') as HTMLInputElement).value;
//////////////////////////////////////
        var ffone=this.principalform.get('ffope1').value
        var fftwo = this.principalform.get('ffope2').value;
        var ffthree = (document.getElementById('ffthree') as HTMLInputElement).value;
        var fffour = this.principalform.get('ffope4').value;
        var fffive = (document.getElementById('fffive') as HTMLInputElement).value;
        var ffsix = this.principalform.get('ffope6').value;
        var ffseven = (document.getElementById('ffseven') as HTMLInputElement).value;
        var ffeight = this.principalform.get('ffope8').value;
        var ffnine = (document.getElementById('ffnine') as HTMLInputElement).value;
        var fften = this.principalform.get('ffope10').value;
        var ffeleven = (document.getElementById('ffeleven') as HTMLInputElement).value;
        var fftwelve=this.principalform.get('ffope12').value
        var ffthirteen = this.principalform.get('ffope13').value;
        var fffourteen = (document.getElementById('fffourteen') as HTMLInputElement).value;
        var fffifteen = this.principalform.get('ffope15').value;
        var ffsixteen = (document.getElementById('ffsixteen') as HTMLInputElement).value;
        var ffseventeen = this.principalform.get('ffope17').value;
        var ffeighteen = (document.getElementById('ffeighteen') as HTMLInputElement).value;
        var ffnineteen = this.principalform.get('ffope19').value;
        var fftwenty = (document.getElementById('fftwenty') as HTMLInputElement).value;
        var fftwentyone = this.principalform.get('ffope21').value;
        var fftwentytwo = (document.getElementById('fftwentytwo') as HTMLInputElement).value;
        var fftwentythree= (document.getElementById('fftwentythree') as HTMLInputElement).value;
        var fftwentyfour =  (document.getElementById('fftwentyfour') as HTMLInputElement).value;
        var fftwentyfive = (document.getElementById('fftwentyfive') as HTMLInputElement).value;
        var fftwentysix =  (document.getElementById('fftwentysix') as HTMLInputElement).value;
        var fftwentyseven = (document.getElementById('fftwentyseven') as HTMLInputElement).value;
        var fftwentyeight =  (document.getElementById('fftwentyeight') as HTMLInputElement).value;
        var fftwentynine = (document.getElementById('fftwentynine') as HTMLInputElement).value;
        var ffthirty =  (document.getElementById('ffthirty') as HTMLInputElement).value;
        var ffthirtyone = (document.getElementById('ffthirtyone') as HTMLInputElement).value;
        var ffthirtytwo =  (document.getElementById('ffthirtytwo') as HTMLInputElement).value;
        var ffthirtythree = (document.getElementById('ffthirtythree') as HTMLInputElement).value;
/////////////////////////////////
        var ffthirtyfour=this.principalform.get('ffope34').value
        var ffthirtyfive = this.principalform.get('ffope35').value;
        var ffthirtysix = (document.getElementById('ffthirtysix') as HTMLInputElement).value;
        var ffthirtyseven = this.principalform.get('ffope37').value;
        var ffthirtyeight = (document.getElementById('ffthirtyeight') as HTMLInputElement).value;
        var ffthirtynine = this.principalform.get('ffope39').value;
        var fffourty = (document.getElementById('fffourty') as HTMLInputElement).value;
        var fffourtyone = this.principalform.get('ffope41').value;
        var fffourtytwo = (document.getElementById('fffourtytwo') as HTMLInputElement).value;
        var fffourtythree = this.principalform.get('ffope43').value;
        var fffourtyfour = (document.getElementById('fffourtyfour') as HTMLInputElement).value;
        var fffourtyfive=this.principalform.get('ffope45').value
        var fffourtysix = this.principalform.get('ffope46').value;
        var fffourtyseven = (document.getElementById('fffourtyseven') as HTMLInputElement).value;
        var fffourtyeight = this.principalform.get('ffope48').value;
        var fffourtynine = (document.getElementById('fffourtynine') as HTMLInputElement).value;
        var fffifty = this.principalform.get('ffope50').value;
        var fffiftyone = (document.getElementById('fffiftyone') as HTMLInputElement).value;
        var fffiftytwo = this.principalform.get('ffope52').value;
        var fffiftythree = (document.getElementById('fffiftythree') as HTMLInputElement).value;
        var fffiftyfour = this.principalform.get('ffope54').value;
        var fffiftyfive = (document.getElementById('fffiftyfive') as HTMLInputElement).value;
        var fffiftysix= (document.getElementById('fffiftysix') as HTMLInputElement).value;
        var fffiftyseven =  (document.getElementById('fffiftyseven') as HTMLInputElement).value;
        var fffiftyeight = (document.getElementById('fffiftyeight') as HTMLInputElement).value;
        var fffiftynine =  (document.getElementById('fffiftynine') as HTMLInputElement).value;
        var ffsixty = (document.getElementById('ffsixty') as HTMLInputElement).value;
        var ffsixtyone =  (document.getElementById('ffsixtyone') as HTMLInputElement).value;
        var ffsixtytwo = (document.getElementById('ffsixtytwo') as HTMLInputElement).value;
        var ffsixtythree =  (document.getElementById('ffsixtythree') as HTMLInputElement).value;
        var ffsixtyfour = (document.getElementById('ffsixtyfour') as HTMLInputElement).value;
        var ffsixtyfive =  (document.getElementById('ffsixtyfive') as HTMLInputElement).value;
        var ffsixtysix = (document.getElementById('ffsixtysix') as HTMLInputElement).value;
        var mam1=this.principalform.get('mam1').value
        var mam2=this.principalform.get('mam2').value
        var mam3=this.principalform.get('glao4a').value
        var mam4=this.principalform.get('mam3').value
        var mam5=this.principalform.get('mam4').value
        var mam6=this.principalform.get('glao4b').value
        var mam7=this.principalform.get('mam5').value
        var mam8=this.principalform.get('mam6').value
        var mam9=this.principalform.get('glao4c').value
        var mam10=this.principalform.get('mam7').value
        var mam11=this.principalform.get('mam8').value
        var mam12=this.principalform.get('glao4d').value
        var mam13=this.principalform.get('mam9').value
        var mam14=this.principalform.get('mam10').value
        var mam15=this.principalform.get('glao4e').value
        var mam16=this.principalform.get('mam11').value
        var mam17=this.principalform.get('mam12').value
        var mam18=this.principalform.get('glao4f').value
        var threeans = this.principalform.get('threea3').value
        var threeans1 = this.principalform.get('sixtysix2121').value
        var fourans = this.principalform.get('threea4').value
        var fourans1 = this.principalform.get('sixtysix212').value
        var five1 = this.principalform.get('work1').value
        var five2 = this.principalform.get('work2').value
        var five3 = this.principalform.get('work3').value
        var five4 = this.principalform.get('work4').value
        var five5 = this.principalform.get('work5').value
        var five6 = this.principalform.get('work6').value
        var five7 = this.principalform.get('work7').value
        var five8 = this.principalform.get('work8').value
        var five9 = this.principalform.get('work9').value
        var five10 = this.principalform.get('work10').value
        var five11 = this.principalform.get('work11').value
        var five12 = this.principalform.get('work12').value



        var seven1 = this.principalform.get('one1').value;
        var seven2=this.principalform.get('two2').value;
        var seven3=(document.getElementById('3three') as HTMLInputElement).value;
        var seven4=this.principalform.get('four4').value;
        var seven5=this.principalform.get('five5').value;
        var seven6=(document.getElementById('6six') as HTMLInputElement).value;
        var seven7=this.principalform.get('seven7').value;
        var seven8=this.principalform.get('eight8').value;
        var seven9=(document.getElementById('9nine') as HTMLInputElement).value;
        var seven10=this.principalform.get('ten10').value;
        var seven11=this.principalform.get('eleven11').value;
        var seven12=(document.getElementById('12twelve') as HTMLInputElement).value;
        var seven13=(document.getElementById('13thirteen') as HTMLInputElement).value;
        var seven14=(document.getElementById('14fourteen') as HTMLInputElement).value;
        var seven15=(document.getElementById('15fifteen') as HTMLInputElement).value;
        var seven16=(document.getElementById('16sixteen') as HTMLInputElement).value;
        var seven17=(document.getElementById('17seventeen') as HTMLInputElement).value;
        var seven18=(document.getElementById('18eighteen') as HTMLInputElement).value;
        var seven19=this.principalform.get('nineteen19').value;
        var seven20=this.principalform.get('twenty20').value;
        var seven21=(document.getElementById('21twentyone') as HTMLInputElement).value;
        var seven22=this.principalform.get('twentytwo22').value;
        var seven23=this.principalform.get('twentythree23').value;
        var seven24=(document.getElementById('24twentyfour') as HTMLInputElement).value;
        var seven25=this.principalform.get('twentyfive25').value;
        var seven26=this.principalform.get('twentysix26').value;
        var seven27=(document.getElementById('27twentyseven') as HTMLInputElement).value;
        var seven28=this.principalform.get('twentyeight28').value;
        var seven29=this.principalform.get('twentynine29').value;
        var seven30=(document.getElementById('30thirty') as HTMLInputElement).value;
        var seven31=(document.getElementById('31thirtyone') as HTMLInputElement).value;
        var seven32=(document.getElementById('32thirtytwo') as HTMLInputElement).value;
        var seven33=(document.getElementById('33thirtythree') as HTMLInputElement).value;
        var seven34=(document.getElementById('34thirtyfour') as HTMLInputElement).value;
        var seven35=(document.getElementById('35thirtyfive') as HTMLInputElement).value;
        var seven36=(document.getElementById('36thirtysix') as HTMLInputElement).value;

        var eight1 = this.principalform.get('oneness').value;
        var eight2=this.principalform.get('twoness').value;
        var eight3=(document.getElementById('threeness') as HTMLInputElement).value;
        var eight4=this.principalform.get('fourness').value;
        var eight5=(document.getElementById('fiveness') as HTMLInputElement).value;
        var eight6=this.principalform.get('sixness').value;
        var eight7=this.principalform.get('eightness').value;
        var eight8=(document.getElementById('nineness') as HTMLInputElement).value;
        var eight9=this.principalform.get('tenness').value;
        var eight10=(document.getElementById('elevenness') as HTMLInputElement).value;
        var eight11=this.principalform.get('twelveness').value;
        var eight12=this.principalform.get('thirteenness').value;
        var eight13=(document.getElementById('fourteenness') as HTMLInputElement).value;
        var eight14=this.principalform.get('fifteenness').value;
        var eight15=(document.getElementById('sixteenness') as HTMLInputElement).value;
        var eight16=this.principalform.get('seventeenness').value;
        var eight17=this.principalform.get('eighteenness').value;
        var eight18=(document.getElementById('nineteenness') as HTMLInputElement).value;
        var eight19=this.principalform.get('twentyness').value;
        var eight20=(document.getElementById('twentyoneness') as HTMLInputElement).value;
        var eight21=(document.getElementById('twentytwoness') as HTMLInputElement).value;
        var eight22=(document.getElementById('twentythreeness') as HTMLInputElement).value;
        var eight23=(document.getElementById('twentyfourness') as HTMLInputElement).value;
        var eight24=(document.getElementById('twentyfiveness') as HTMLInputElement).value;
        var eight25=(document.getElementById('twentysixness') as HTMLInputElement).value;
        var eight26=(document.getElementById('twentysevenness') as HTMLInputElement).value;
        var eight27=(document.getElementById('twentyeightness') as HTMLInputElement).value;
        var eight28=(document.getElementById('twentynineness') as HTMLInputElement).value;
        var eight29=(document.getElementById('thirtyness') as HTMLInputElement).value;
        var eight30=(document.getElementById('thirtyoneness') as HTMLInputElement).value;
        var eight31=this.principalform.get('thirtytwoness').value;
        var eight32=this.principalform.get('thirtythreeness').value;
        var eight33=(document.getElementById('thirtyfourness') as HTMLInputElement).value;
        var eight34=this.principalform.get('thirtyfiveness').value;
        var eight35=(document.getElementById('thirtysixness') as HTMLInputElement).value;
        var eight36=this.principalform.get('thirtysevenness').value;
        var eight37=this.principalform.get('thirtyeightness').value;
        var eight38=(document.getElementById('thirtynineness') as HTMLInputElement).value;
        var eight39=this.principalform.get('fourtyness').value;
        var eight40=(document.getElementById('fourtyoneness') as HTMLInputElement).value;
        var eight41=this.principalform.get('thirtytwoness').value;
        var eight42=this.principalform.get('thirtythreeness').value;
        var eight43=(document.getElementById('thirtyfourness') as HTMLInputElement).value;
        var eight44=this.principalform.get('thirtyfiveness').value;
        var eight45=(document.getElementById('thirtysixness') as HTMLInputElement).value;
        var eight46=this.principalform.get('thirtysevenness').value;
        var eight47=this.principalform.get('thirtyeightness').value;
        var eight48=(document.getElementById('thirtynineness') as HTMLInputElement).value;
        var eight49=this.principalform.get('fourtyness').value;
        var eight50=(document.getElementById('fourtyoneness') as HTMLInputElement).value;
        var eight51=(document.getElementById('fourtytwoness') as HTMLInputElement).value;
        var eight52=(document.getElementById('fourtythreeness') as HTMLInputElement).value;
        var eight53=(document.getElementById('fourtyfourness') as HTMLInputElement).value;
        var eight54=(document.getElementById('fourtyfiveness') as HTMLInputElement).value;
        var eight55=(document.getElementById('fourtysixness') as HTMLInputElement).value;
        var eight56=(document.getElementById('fourtysevenness') as HTMLInputElement).value;
        var eight57=(document.getElementById('fourtyeightness') as HTMLInputElement).value;
        var eight58=(document.getElementById('fourtynineness') as HTMLInputElement).value;
        var eight59=(document.getElementById('fiftyness') as HTMLInputElement).value;
        var eight60=(document.getElementById('fiftyoneness') as HTMLInputElement).value;
        
        var nine1=this.principalform.get('threea9a1').value;
        var nine2=this.principalform.get('threea9a2').value;
        var nine3=this.principalform.get('threea9a3').value;
        var nine4=this.principalform.get('threea9a4').value;
        var nine5=this.principalform.get('threea9a5').value;
        var nine6=this.principalform.get('threea9a6').value;
        var nine7=this.principalform.get('threea9b1').value;
        var nine8=this.principalform.get('threea9b2').value;
        var nine9=this.principalform.get('threea9b3').value;
        var nine10=this.principalform.get('threea9b4').value;
        var nine11=this.principalform.get('threea9b5').value;
        var nine12=this.principalform.get('threea9b6').value;
        var nine13=this.principalform.get('threea9c1').value;
        var nine14=this.principalform.get('threea9c2').value;
        var nine15=this.principalform.get('threea9c3').value;
        var nine16=this.principalform.get('threea9c4').value;
        var nine17=this.principalform.get('threea9c5').value;
        var nine18=this.principalform.get('threea9c6').value;
        var nine19=this.principalform.get('threea9d1').value;
        var nine20=this.principalform.get('threea9d2').value;
        var nine21=this.principalform.get('threea9d3').value;
        var nine22=this.principalform.get('threea9d4').value;
        var nine23=this.principalform.get('threea9d5').value;
        var nine24=this.principalform.get('threea9d6').value;
        var nine25=this.principalform.get('threea9e1').value;
        var nine26=this.principalform.get('threea9e2').value;
        var nine27=this.principalform.get('threea9e3').value;
        var nine28=this.principalform.get('threea9e4').value;
        var nine29=this.principalform.get('threea9e5').value;
        var nine30=this.principalform.get('threea9e6').value;
        var nine31=this.principalform.get('threea9f1').value;
        var nine32=this.principalform.get('threea9f2').value;
        var nine33=this.principalform.get('threea9f3').value;
        var nine34=this.principalform.get('threea9f4').value;
        var nine35=this.principalform.get('threea9f5').value;
        var nine36=this.principalform.get('threea9f6').value;

        var ten1 = this.principalform.get('threea10a').value;
        var ten2 = this.principalform.get('threea10ayes').value;
        var ten3 = this.principalform.get('threea10b').value;
        var ten4 = this.principalform.get('threea10c').value;
        var ten5 = this.principalform.get('threea10cyes').value;
        var ten6 = this.principalform.get('threea10d').value;
        var ten7 = this.principalform.get('threea10dyes').value;

        var eleven1 = this.principalform.get('threea11a').value;
        var eleven2 = this.principalform.get('threea11b').value;
        var eleven3 = this.principalform.get('threea11c').value;
        var eleven4 = this.principalform.get('threea11d').value;
        var eleven5 = this.principalform.get('threea11e').value;
        var eleven6 = this.principalform.get('threea11f').value;
        var eleven7 = this.principalform.get('threea11g').value;
        var eleven8 = this.principalform.get('threea11h').value;
        var eleven9 = this.principalform.get('threea11i').value;
        var eleven10 = this.principalform.get('threea11j').value;
        var eleven11 = this.principalform.get('threea11k').value;
        var eleven12 = this.principalform.get('threea11l').value;
        var eleven13 = this.principalform.get('threea11m').value;
        var eleven14 = this.principalform.get('threea11n').value;
        var eleven15 = this.principalform.get('threea11o').value;
        var eleven16 = this.principalform.get('threea11p').value;

        var twelve1 = this.principalform.get('threea13').value;

        var thirteen1 = this.principalform.get('threea13a').value;
        var thirteen2 = this.principalform.get('threea13b').value;
        var thirteen3 = this.principalform.get('threea13c').value;
        var thirteen4 = this.principalform.get('threea13d').value;
        var thirteen5 = this.principalform.get('threea13e').value;
        var thirteen6 = this.principalform.get('threea13f').value;
        var thirteen7 = this.principalform.get('threea13g').value;
        var thirteen8 = this.principalform.get('threea13h').value;
        var thirteen9 = this.principalform.get('threea13i').value;
        var thirteen10 = this.principalform.get('threea13j').value;
        var thirteen11 = this.principalform.get('threea13k').value;
        var thirteen12 = this.principalform.get('threea13l').value;

        var fourteen1 = this.principalform.get('threea14a').value;
        var fourteen2 = this.principalform.get('threea14b').value;

        var fifteen1 = this.principalform.get('threea15').value;

        var six1 = this.principalform.get('glao41').value;
        var six2 = (document.getElementById('sixtysix2') as HTMLInputElement).value;
        var six3 = this.principalform.get('glao42').value;
        var six4 = (document.getElementById('seventytwo2') as HTMLInputElement).value;
        var six5 = this.principalform.get('glao43').value;
        var six6 = (document.getElementById('seventysix2') as HTMLInputElement).value;
        var six7 = this.principalform.get('glao44').value;
        var six8 = (document.getElementById('seventysix3') as HTMLInputElement).value;

        
        this.initialDraftReport1[13] = {one,two,three,threeans,threeans1,fourans,fourans1,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen,twenty,twentyone,twentytwo,
            twentythree,twentyfour,twentyfive,twentysix,twentyseven,twentyeight,twentynine,thirty,thirtyone,thirtytwo,thirtythree,thirtyfour,thirtyfive,thirtysix,thirtyseven,thirtyeight,thirtynine,fourty,
            fourtyone,fourtytwo,fourtythree,fourtyfour,fourtyfive,fourtysix,fourtyseven,fourtyeight,fourtynine,fifty,fiftyone,fiftytwo,fiftythree,fiftyfour,fiftyfive,fiftysix,
            fiftyseven,fiftyeight,fiftynine,sixty,sixtyone,sixtytwo,sixtythree,sixtyfour,sixtyfive,sixtysix,ffone,fftwo,ffthree,fffour,fffive,ffsix,ffseven,ffeight,ffnine,fften,ffeleven,fftwelve,ffthirteen,fffourteen,fffifteen,ffsixteen,ffseventeen,ffeighteen,ffnineteen,fftwenty,fftwentyone,fftwentytwo,
            fftwentythree,fftwentyfour,fftwentyfive,fftwentysix,fftwentyseven,fftwentyeight,fftwentynine,ffthirty,ffthirtyone,ffthirtytwo,ffthirtythree,ffthirtyfour,ffthirtyfive,ffthirtysix,ffthirtyseven,ffthirtyeight,ffthirtynine,fffourty,
            fffourtyone,fffourtytwo,fffourtythree,fffourtyfour,fffourtyfive,fffourtysix,fffourtyseven,fffourtyeight,fffourtynine,fffifty,fffiftyone,fffiftytwo,fffiftythree,fffiftyfour,fffiftyfive,fffiftysix,
            fffiftyseven,fffiftyeight,fffiftynine,ffsixty,ffsixtyone,ffsixtytwo,ffsixtythree,ffsixtyfour,ffsixtyfive,ffsixtysix,mam1,mam2,mam3,mam4,mam5,mam6,mam7,mam8,mam9,mam10,mam11,mam12,mam13,mam14,mam15,mam16,mam17,mam18,Table1: JSON.stringify(this.lookupdtl),
            five1,five2,five3,five4,five5,five6,five7,five8,five9,five10,five11,five12,
            seven1,seven2,seven3,seven4,seven5,seven6,seven7,seven8,seven9,seven10,seven11,seven12,seven13,seven14,seven15,seven16,seven17,
            seven18,seven19,seven20,seven21,seven22,seven23,seven24,seven25,seven26,seven27,seven28,seven29,seven30,seven31,seven32,seven33,seven34,seven35,seven36,
            eight1, eight2, eight3, eight4, eight5, eight6, eight7, eight8, eight9, eight10, eight11,eight12,eight13,eight14,eight15,eight16,eight17,eight18,eight19,eight20,
            eight21,eight22,eight23,eight24,eight25,eight26,eight27,eight28,eight29,eight30,eight31,eight32,eight33,eight34,eight35,eight36,eight37,eight38,eight39,eight40,
            eight41,eight42,eight43,eight44,eight45,eight46,eight47,eight48,eight49,eight50,eight51,eight52,eight53,eight54,eight55,eight56,eight57,eight58,eight59,eight60,
            nine1,nine2,nine3,nine4,nine5,nine6,nine7,nine8,nine9,nine10,nine11,nine12,nine13,nine14,nine15,nine16,nine17,nine18,
            nine19,nine20,nine21,nine22,nine23,nine24,nine25,nine26,nine27,nine28,nine29,nine30,nine31,nine32,nine33,nine34,nine35,nine36,
            ten1,ten2,ten3,ten4,ten5,ten6,ten7,twelve1,fourteen1,fourteen2,fifteen1,six1,six2,six3,six4,six5,six6,six7,six8,
            eleven1,eleven2,eleven3,eleven4,eleven5,eleven6,eleven7,eleven8,eleven9,eleven10,eleven11,eleven12,eleven13,eleven14,eleven15,eleven16,
            thirteen1,thirteen2,thirteen3,thirteen4,thirteen5,thirteen6,thirteen7,thirteen8,thirteen9,thirteen10,thirteen11,thirteen12,
        }
        console.log(this.initialDraftReport1);
        const currentInitialDraftReport = this.initialDraftReport1;
        this.sbrs.liquid[13]=currentInitialDraftReport[13];
        console.log(currentInitialDraftReport);
        console.log(this.sbrs.liquid[13])
        console.log(this.sbrs.liquid);
      
        this.sbrs.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
          const reportdata = data[0];
          console.log(JSON.parse(reportdata.InitialDraftReport));
          console.log(this.sbrs.liquid[13])
         var init=JSON.parse(reportdata.InitialDraftReport);
         if(init!=null){
         init[13]=this.sbrs.liquid[13]
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
         init[13]=this.sbrs.liquid[13]
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
    changeAssessments(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('eight' + i.toString())
            )).value
        );
        this.lookupdtl[i]['eight'] = (<HTMLInputElement>(
            document.getElementById('eight' + i.toString())
        )).value;
      }
      changeAssessments1(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('eightytwo' + i.toString())
            )).value
        );
        this.lookupdtl[i]['eightytwo'] = (<HTMLInputElement>(
            document.getElementById('eightytwo' + i.toString())
        )).value;
      }
      changeAssessments2(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('eightythree' + i.toString())
            )).value
        );
        this.lookupdtl[i]['eightythree'] = (<HTMLInputElement>(
            document.getElementById('eightythree' + i.toString())
        )).value;
      }
      changeAssessments3(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('eightyfive' + i.toString())
            )).value
        );
        this.lookupdtl[i]['eightyfive'] = (<HTMLInputElement>(
            document.getElementById('eightyfive' + i.toString())
        )).value;
      }
      changeAssessments4(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('eightysix' + i.toString())
            )).value
        );
        this.lookupdtl[i]['eightysix'] = (<HTMLInputElement>(
            document.getElementById('eightysix' + i.toString())
        )).value;
      }
    deleteQ102a(i) {
      this.lookupdtl.splice(i, 1);
    }
    qu1(event: any) {
        const firstval = (document.getElementById('one') as HTMLInputElement)
            .value;
        const secondval = (document.getElementById('two') as HTMLInputElement)
            .value;
        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
       // const result = ((saver1 / saver) * 100).toFixed(0);
       var result;
       if (saver!=0 && saver1!=0){
        result = ((saver1 / saver) * 100).toFixed(0);
       console.log(result);
       }
       else{
           result = 0;
       }
        // const subt=saver-saver1
        // const roundedResult1 = subt.toFixed(0); // Rounds the result to 2 decimal places
        // const roundedResult = result.toFixed(0); // Rounds the result to 2 decimal places

        const thirdInput = document.getElementById('three') as HTMLInputElement;
        thirdInput.value = result.toString();
        // const thirdInput1 = document.getElementById('sixtynine') as HTMLInputElement;
        const fourthval = (document.getElementById('four') as HTMLInputElement)
            .value;
        var saver2 = parseFloat(fourthval.replace(/\,/g, ''));
       // const result1 = ((saver2 / saver) * 100).toFixed(0);
       var result1;
       if (saver!=0 && saver2!=0){
        result1 = ((saver2 / saver) * 100).toFixed(0);
       console.log(result1);
       }
       else{
           result1 = 0;
       }
        const thirdInput12 = document.getElementById(
            'five'
        ) as HTMLInputElement;
        thirdInput12.value = result1.toString();

        const fourthval2 = (document.getElementById('six') as HTMLInputElement)
            .value;
        var saver21 = parseFloat(fourthval2.replace(/\,/g, ''));
        //const result11 = ((saver21 / saver) * 100).toFixed(0);
        var result11;
        if (saver!=0 && saver21!=0){
         result11 = ((saver21 / saver) * 100).toFixed(0);
        console.log(result11);
        }
        else{
            result11 = 0;
        }
        const thirdInput122 = document.getElementById(
            'seven'
        ) as HTMLInputElement;
        thirdInput122.value = result11.toString();

        const fiveval = (document.getElementById('eight') as HTMLInputElement)
            .value;
        var savers1 = parseFloat(fiveval.replace(/\,/g, ''));
        //const results1 = ((savers1 / saver) * 100).toFixed(0);
        var results1;
        if (saver!=0 && savers1!=0){
         results1 = ((savers1 / saver) * 100).toFixed(0);
        console.log(results1);
        }
        else{
            results1 = 0;
        }
        const thirdyolo1 = document.getElementById('nine') as HTMLInputElement;
        thirdyolo1.value = results1.toString();

        const fiveval1 = (document.getElementById('ten') as HTMLInputElement)
            .value;
        var savers2 = parseFloat(fiveval1.replace(/\,/g, ''));
       // const results2 = ((savers2 / saver) * 100).toFixed(0);
       var results2;
       if (saver!=0 && savers2!=0){
        results2 = ((savers2 / saver) * 100).toFixed(0);
       console.log(results2);
       }
       else{
           results2 = 0;
       }
        const thirdyolo2 = document.getElementById(
            'eleven'
        ) as HTMLInputElement;
        thirdyolo2.value = results2.toString();
    }
    qu11(event: any) {
        const firstval = (document.getElementById('twelve') as HTMLInputElement)
            .value;
        const secondval = (
            document.getElementById('thirteen') as HTMLInputElement
        ).value;
        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
       // const result = ((saver1 / saver) * 100).toFixed(0);
       var result;
       if (saver!=0 && saver1!=0){
        result = ((saver1 / saver) * 100).toFixed(0);
       console.log(result);
       }
       else{
           result = 0;
       }
        // const subt=saver-saver1
        // const roundedResult1 = subt.toFixed(0); // Rounds the result to 2 decimal places
        // const roundedResult = result.toFixed(0); // Rounds the result to 2 decimal places

        const thirdInput = document.getElementById(
            'fourteen'
        ) as HTMLInputElement;
        thirdInput.value = result.toString();
        // const thirdInput1 = document.getElementById('sixtynine') as HTMLInputElement;
        const fourthval = (
            document.getElementById('fifteen') as HTMLInputElement
        ).value;
        var saver2 = parseFloat(fourthval.replace(/\,/g, ''));
       // const result1 = ((saver2 / saver) * 100).toFixed(0);
       var result1;
       if (saver!=0 && saver2!=0){
        result1 = ((saver2 / saver) * 100).toFixed(0);
       console.log(result1);
       }
       else{
           result1 = 0;
       }
        const thirdInput12 = document.getElementById(
            'sixteen'
        ) as HTMLInputElement;
        thirdInput12.value = result1.toString();

        const fourthval2 = (
            document.getElementById('seventeen') as HTMLInputElement
        ).value;
        var saver21 = parseFloat(fourthval2.replace(/\,/g, ''));
        //const result11 = ((saver21 / saver) * 100).toFixed(0);
        var result11;
        if (saver!=0 && saver21!=0){
         result11 = ((saver21 / saver) * 100).toFixed(0);
        console.log(result11);
        }
        else{
            result11 = 0;
        }
        const thirdInput122 = document.getElementById(
            'eighteen'
        ) as HTMLInputElement;
        thirdInput122.value = result11.toString();

        const fiveval = (
            document.getElementById('nineteen') as HTMLInputElement
        ).value;
        var savers1 = parseFloat(fiveval.replace(/\,/g, ''));
        //const results1 = ((savers1 / saver) * 100).toFixed(0);
        var results1;
        if (saver!=0 && savers1!=0){
         results1 = ((savers1 / saver) * 100).toFixed(0);
        console.log(results1);
        }
        else{
            results1 = 0;
        }
        const thirdyolo1 = document.getElementById(
            'twenty'
        ) as HTMLInputElement;
        thirdyolo1.value = results1.toString();

        const fiveval1 = (
            document.getElementById('twentyone') as HTMLInputElement
        ).value;
        var savers2 = parseFloat(fiveval1.replace(/\,/g, ''));
        //const results2 = ((savers2 / saver) * 100).toFixed(0);
        var results2;
        if (saver!=0 && savers2!=0){
         results2 = ((savers2 / saver) * 100).toFixed(0);
        console.log(results2);
        }
        else{
            results2 = 0;
        }
        const thirdyolo2 = document.getElementById(
            'twentytwo'
        ) as HTMLInputElement;
        thirdyolo2.value = results2.toString();
    }
    qu111(event: any) {
        const firstval = (document.getElementById('one') as HTMLInputElement)
            .value;
        const secondval = (
            document.getElementById('twelve') as HTMLInputElement
        ).value;
        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        const res = saver1 + saver;
        const result = res.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'twentythree'
        ) as HTMLInputElement;
        thirdInput.value = result.toString();

        const fourthval = (document.getElementById('two') as HTMLInputElement)
            .value;
        const fourthvall = (
            document.getElementById('thirteen') as HTMLInputElement
        ).value;
        var saver2 = parseFloat(fourthval.replace(/\,/g, ''));
        var saver22 = parseFloat(fourthvall.replace(/\,/g, ''));
        const result1 = saver2 + saver22;
        const result2 = result1.toLocaleString('en-IN');
        const thirdInput12 = document.getElementById(
            'twentyfour'
        ) as HTMLInputElement;
        thirdInput12.value = result2.toString();

        const fourthval2 = (
            document.getElementById('twentythree') as HTMLInputElement
        ).value;
        const fourthvall2 = (
            document.getElementById('twentyfour') as HTMLInputElement
        ).value;
        var saver21 = parseFloat(fourthval2.replace(/\,/g, ''));
        var saver212 = parseFloat(fourthvall2.replace(/\,/g, ''));
       // const result11 = ((saver212/saver21 ) *100).toFixed(0);
       var result11;
       if (saver!=0 && saver212!=0){
        result11 = ((saver212 / saver) * 100).toFixed(0);
       console.log(result11);
       }
       else{
           result11 = 0;
       }
        const thirdInput122 = document.getElementById(
            'twentyfive'
        ) as HTMLInputElement;
        thirdInput122.value = result11.toString();

        const fiveval = (document.getElementById('four') as HTMLInputElement)
            .value;
        const fivevall = (
            document.getElementById('fifteen') as HTMLInputElement
        ).value;
        var savers1 = parseFloat(fiveval.replace(/\,/g, ''));
        var savers12 = parseFloat(fivevall.replace(/\,/g, ''));
        const results1 = savers1 + savers12;
        const results = result1.toLocaleString('en-IN');
        const thirdyolo1 = document.getElementById(
            'twentysix'
        ) as HTMLInputElement;
        thirdyolo1.value = results.toString();

        const fiveval1 = (document.getElementById('twentythree') as HTMLInputElement)
            .value;
        const fiveval121 = (
            document.getElementById('twentysix') as HTMLInputElement
        ).value;
        var savers2 = parseFloat(fiveval1.replace(/\,/g, ''));
        var savers231 = parseFloat(fiveval121.replace(/\,/g, ''));
       // const results2 = ((savers231/savers2 ) *100).toFixed(0);
       var results2;
       if (savers2!=0 && savers231!=0){
        results2 = ((savers231 / savers2) * 100).toFixed(0);
       console.log(results2);
       }
       else{
           results2 = 0;
       }
        const thirdyolo2 = document.getElementById(
            'twentyseven'
        ) as HTMLInputElement;
        thirdyolo2.value = results2.toString();
    }
    qu12(event: any) {
        const sixval = (document.getElementById('six') as HTMLInputElement)
            .value;
        const sixvall = (
            document.getElementById('seventeen') as HTMLInputElement
        ).value;
        var savers10 = parseFloat(sixval.replace(/\,/g, ''));
        var savers120 = parseFloat(sixvall.replace(/\,/g, ''));
        const results11 = savers10 + savers120;
        const results = results11.toLocaleString('en-IN');
        const thirdyolo11 = document.getElementById(
            'twentyeight'
        ) as HTMLInputElement;
        thirdyolo11.value = results.toString();

        const sevenval = (document.getElementById('twentythree') as HTMLInputElement)
            .value;
        const sevenval21 = (
            document.getElementById('twentyeight') as HTMLInputElement
        ).value;
        var savere = parseFloat(sevenval.replace(/\,/g, ''));
        var savere31 = parseFloat(sevenval21.replace(/\,/g, ''));
       // const results232 = ((savere31/savere) *100).toFixed(0);
       var results232;
       if (savere!=0 && savere31!=0){
        results232 = ((savere31 / savere) * 100).toFixed(0);
       console.log(results232);
       }
       else{
           results232 = 0;
       }
        const thirdyolo232 = document.getElementById(
            'twentynine'
        ) as HTMLInputElement;
        thirdyolo232.value = results232.toString();

        const eightval = (document.getElementById('eight') as HTMLInputElement)
            .value;
        const eightval21 = (
            document.getElementById('nineteen') as HTMLInputElement
        ).value;
        var saverrs = parseFloat(eightval.replace(/\,/g, ''));
        var saverrs31 = parseFloat(eightval21.replace(/\,/g, ''));
        const result321 = saverrs + saverrs31;
        const results321 = result321.toLocaleString('en-IN');
        const thirdyolo96 = document.getElementById(
            'thirty'
        ) as HTMLInputElement;
        thirdyolo96.value = results321.toString();

        const nineval = (document.getElementById('twentythree') as HTMLInputElement)
            .value;
        const nineval21 = (
            document.getElementById('thirty') as HTMLInputElement
        ).value;
        var saverrs1 = parseFloat(nineval.replace(/\,/g, ''));
        var saverrs131 = parseFloat(nineval21.replace(/\,/g, ''));
       // const result3211 = ((saverrs131/saverrs1 ) * 100).toFixed(0);
       var result3211;
       if(saverrs1 !=0 && saverrs131 !=0){
        result3211 = ((saverrs131/saverrs1 ) * 100).toFixed(0);
        console.log(result3211);
           }else{
            result3211 = 0;
           }
        const thirdyolo961 = document.getElementById(
            'thirtyone'
        ) as HTMLInputElement;
        thirdyolo961.value = result3211.toString();

        const tenval = (document.getElementById('ten') as HTMLInputElement)
            .value;
        const tenval21 = (
            document.getElementById('twentyone') as HTMLInputElement
        ).value;
        var saverrs2 = parseFloat(tenval.replace(/\,/g, ''));
        var saverrs231 = parseFloat(tenval21.replace(/\,/g, ''));
        const result3212 = saverrs2 + saverrs231;
        const result2 = result3212.toLocaleString('en-IN');
        const thirdyolo962 = document.getElementById(
            'thirtytwo'
        ) as HTMLInputElement;
        thirdyolo962.value = result2.toString();

        const elevenval = (
            document.getElementById('twentythree') as HTMLInputElement
        ).value;
        const elevenval21 = (
            document.getElementById('thirtytwo') as HTMLInputElement
        ).value;
        var saverrs3 = parseFloat(elevenval.replace(/\,/g, ''));
        var saverrs331 = parseFloat(elevenval21.replace(/\,/g, ''));
        //const result3213 = ((saverrs331/saverrs3  ) *100).toFixed(0);
        var result3213;
        if(saverrs3 !=0 && saverrs331 !=0){
            result3213 = ((saverrs331/saverrs3  ) *100).toFixed(0);
        }else{
            result3213 = 0;
        }
        const thirdyolo963 = document.getElementById(
            'thirtythree'
        ) as HTMLInputElement;
        thirdyolo963.value = result3213.toString();
    }

    qu13(event: any) {
        const firstval = (
            document.getElementById('thirtyfour') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('thirtyfive') as HTMLInputElement
        ).value;
        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        //const result = ((saver1 / saver) * 100).toFixed(0);
        var result;
        if(saver !=0 && saver1 !=0){
            result = ((saver1 / saver) * 100).toFixed(0);
            console.log(result);   
        }else{
            result = 0;
        }
        // const subt=saver-saver1
        // const roundedResult1 = subt.toFixed(0); // Rounds the result to 2 decimal places
        // const roundedResult = result.toFixed(0); // Rounds the result to 2 decimal places

        const thirdInput = document.getElementById(
            'thirtysix'
        ) as HTMLInputElement;
        thirdInput.value = result.toString();
        // const thirdInput1 = document.getElementById('sixtynine') as HTMLInputElement;
        const fourthval = (
            document.getElementById('thirtyseven') as HTMLInputElement
        ).value;
        var saver2 = parseFloat(fourthval.replace(/\,/g, ''));
       // const result1 = ((saver2 / saver) * 100).toFixed(0);
       var result1;
       if(saver !=0 && saver2 !=0){
           result1 = ((saver2 / saver) * 100).toFixed(0);
           console.log(result1);   
       }else{
           result1 = 0;
       }
        const thirdInput12 = document.getElementById(
            'thirtyeight'
        ) as HTMLInputElement;
        thirdInput12.value = result1.toString();

        const fourthval2 = (
            document.getElementById('thirtynine') as HTMLInputElement
        ).value;
        var saver21 = parseFloat(fourthval2.replace(/\,/g, ''));
       // const result11 = ((saver21 / saver) * 100).toFixed(0);
       var result11;
       if(saver !=0 && saver21 !=0){
           result11 = ((saver21 / saver) * 100).toFixed(0);
           console.log(result11);   
       }else{
           result11 = 0;
       }
        const thirdInput122 = document.getElementById(
            'fourty'
        ) as HTMLInputElement;
        thirdInput122.value = result11.toString();

        const fiveval = (
            document.getElementById('fourtyone') as HTMLInputElement
        ).value;
        var savers1 = parseFloat(fiveval.replace(/\,/g, ''));
        //const results1 = ((savers1 / saver) * 100).toFixed(0);
        var results1;
        if(saver !=0 && savers1 !=0){
            results1 = ((savers1 / saver) * 100).toFixed(0);
        }else{
            results1 = 0;
        }
        const thirdyolo1 = document.getElementById(
            'fourtytwo'
        ) as HTMLInputElement;
        thirdyolo1.value = results1.toString();

        const fiveval1 = (
            document.getElementById('fourtythree') as HTMLInputElement
        ).value;
        var savers2 = parseFloat(fiveval1.replace(/\,/g, ''));
       // const results2 = ((savers2 / saver) * 100).toFixed(0);
       var results2;
       if(saver !=0 && savers2 !=0){
           results2 = ((savers2 / saver) * 100).toFixed(0);
       }else{
           results2 = 0;
       }
        const thirdyolo2 = document.getElementById(
            'fourtyfour'
        ) as HTMLInputElement;
        thirdyolo2.value = results2.toString();
    }
    qu14(event: any) {
        const firstval = (
            document.getElementById('fourtyfive') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('fourtysix') as HTMLInputElement
        ).value;
        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
       // const result = ((saver1 / saver) * 100).toFixed(0);
       var result;
       if(saver !=0 && saver1 !=0){
           result = ((saver1 / saver) * 100).toFixed(0);
           console.log(result);   
       }else{
           result = 0;
       }
        // const subt=saver-saver1
        // const roundedResult1 = subt.toFixed(0); // Rounds the result to 2 decimal places
        // const roundedResult = result.toFixed(0); // Rounds the result to 2 decimal places

        const thirdInput = document.getElementById(
            'fourtyseven'
        ) as HTMLInputElement;
        thirdInput.value = result.toString();
        // const thirdInput1 = document.getElementById('sixtynine') as HTMLInputElement;
        const fourthval = (
            document.getElementById('fourtyeight') as HTMLInputElement
        ).value;
        var saver2 = parseFloat(fourthval.replace(/\,/g, ''));
       // const result1 = ((saver2 / saver) * 100).toFixed(0);
       var result1;
       if(saver !=0 && saver2 !=0){
           result1 = ((saver2 / saver) * 100).toFixed(0);
           console.log(result1);   
       }else{
           result1 = 0;
       }
       const thirdInput12 = document.getElementById(
            'fourtynine'
        ) as HTMLInputElement;
        thirdInput12.value = result1.toString();

        const fourthval2 = (
            document.getElementById('fifty') as HTMLInputElement
        ).value;
        var saver21 = parseFloat(fourthval2.replace(/\,/g, ''));
      
        //  const result11 = ((saver21 / saver) * 100).toFixed(0);
        var result11;
        if(saver !=0 && saver21 !=0){
            result11 = ((saver21 / saver) * 100).toFixed(0);
            console.log(result11);   
        }else{
            result11 = 0;
        }
        const thirdInput122 = document.getElementById(
            'fiftyone'
        ) as HTMLInputElement;
        thirdInput122.value = result11.toString();

        const fiveval = (
            document.getElementById('fiftytwo') as HTMLInputElement
        ).value;
        var savers1 = parseFloat(fiveval.replace(/\,/g, ''));
       // const results1 = ((savers1 / saver) * 100).toFixed(0);
       var results1;
       if(saver !=0 && savers1 !=0){
           results1 = ((savers1 / saver) * 100).toFixed(0);
       }else{
           results1 = 0;
       }
       const thirdyolo1 = document.getElementById(
            'fiftythree'
        ) as HTMLInputElement;
        thirdyolo1.value = results1.toString();

        const fiveval1 = (
            document.getElementById('fiftyfour') as HTMLInputElement
        ).value;
        var savers2 = parseFloat(fiveval1.replace(/\,/g, ''));
       // const results2 = ((savers2 / saver) * 100).toFixed(0);
       var results2;
       if(saver !=0 && savers2 !=0){
           results2 = ((savers2 / saver) * 100).toFixed(0);
       }else{
           results2 = 0;
       }
       const thirdyolo2 = document.getElementById(
            'fiftyfive'
        ) as HTMLInputElement;
        thirdyolo2.value = results2.toString();
    }
    qu112(event: any) {
        const firstval = (
            document.getElementById('thirtyfour') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('fourtyfive') as HTMLInputElement
        ).value;
        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        const result = saver1 + saver;
        const result2 = result.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'fiftysix'
        ) as HTMLInputElement;
        thirdInput.value = result2.toString();

        const fourthval = (
            document.getElementById('thirtyfive') as HTMLInputElement
        ).value;
        const fourthvall = (
            document.getElementById('fourtysix') as HTMLInputElement
        ).value;
        var saver2 = parseFloat(fourthval.replace(/\,/g, ''));
        var saver22 = parseFloat(fourthvall.replace(/\,/g, ''));
        const result1 = saver2 + saver22;
        const results = result1.toLocaleString('en-IN');
        const thirdInput12 = document.getElementById(
            'fiftyseven'
        ) as HTMLInputElement;
        thirdInput12.value = results.toString();

        const fourthval2 = (
            document.getElementById('fiftysix') as HTMLInputElement
        ).value;
        const fourthvall2 = (
            document.getElementById('fiftyseven') as HTMLInputElement
        ).value;
        var saver21 = parseFloat(fourthval2.replace(/\,/g, ''));
        var saver212 = parseFloat(fourthvall2.replace(/\,/g, ''));
       // const result11 = ((saver212/saver21 ) *100).toFixed(0);
       var result11;
       if(saver21 !=0 && saver212 !=0){
           result11 = ((saver212 / saver21) * 100).toFixed(0);
           console.log(result11);   
       }else{
           result11 = 0;
       }
       const thirdInput122 = document.getElementById(
            'fiftyeight'
        ) as HTMLInputElement;
        thirdInput122.value = result11.toString();

        const fiveval = (
            document.getElementById('thirtyseven') as HTMLInputElement
        ).value;
        const fivevall = (
            document.getElementById('fourtyeight') as HTMLInputElement
        ).value;
        var savers1 = parseFloat(fiveval.replace(/\,/g, ''));
        var savers12 = parseFloat(fivevall.replace(/\,/g, ''));
        const results1 = savers1 + savers12;
        const result12 = results1.toLocaleString('en-IN');
        const thirdyolo1 = document.getElementById(
            'fiftynine'
        ) as HTMLInputElement;
        thirdyolo1.value = result12.toString();

        const fiveval1 = (
            document.getElementById('fiftysix') as HTMLInputElement
        ).value;
        const fiveval121 = (
            document.getElementById('fiftynine') as HTMLInputElement
        ).value;
        var savers2 = parseFloat(fiveval1.replace(/\,/g, ''));
        var savers231 = parseFloat(fiveval121.replace(/\,/g, ''));
     //   const results2 = ((savers231/savers2) *100).toFixed(0);
     var results2;
     if(savers2!=0 && savers231 !=0){
        results2 = ((savers231/savers2) *100).toFixed(0);
     }else{
        results2 = 0;
     }
        const thirdyolo2 = document.getElementById('sixty') as HTMLInputElement;
        thirdyolo2.value = results2.toString();

        const sixval = (
            document.getElementById('thirtynine') as HTMLInputElement
        ).value;
        const sixvall = (document.getElementById('fifty') as HTMLInputElement)
            .value;
        var savers10 = parseFloat(sixval.replace(/\,/g, ''));
        var savers120 = parseFloat(sixvall.replace(/\,/g, ''));
        const results11 = savers10 + savers120;
        const results123 = results11.toLocaleString('en-IN');
        const thirdyolo11 = document.getElementById(
            'sixtyone'
        ) as HTMLInputElement;
        thirdyolo11.value = results123.toString();

        const sevenval = (document.getElementById('fiftysix') as HTMLInputElement)
            .value;
        const sevenval21 = (
            document.getElementById('sixtyone') as HTMLInputElement
        ).value;
        var savere = parseFloat(sevenval.replace(/\,/g, ''));
        var savere31 = parseFloat(sevenval21.replace(/\,/g, ''));
       // const results232 = ((savere31/savere) *100).toFixed(0);
      var results232;
      if(savere31 !=0 && savere!=0){
        results232 = ((savere31/savere) *100).toFixed(0);
      }else{
        results232 = 0;
      }
       const thirdyolo232 = document.getElementById(
            'sixtytwo'
        ) as HTMLInputElement;
        thirdyolo232.value = results232.toString();

        const eightval = (
            document.getElementById('fourtyone') as HTMLInputElement
        ).value;
        const eightval21 = (
            document.getElementById('fiftytwo') as HTMLInputElement
        ).value;
        var saverrs = parseFloat(eightval.replace(/\,/g, ''));
        var saverrs31 = parseFloat(eightval21.replace(/\,/g, ''));
        const result321 = saverrs + saverrs31;
        const result32 = result321.toLocaleString('en-IN');
        const thirdyolo96 = document.getElementById(
            'sixtythree'
        ) as HTMLInputElement;
        thirdyolo96.value = result32.toString();

        const nineval = (
            document.getElementById('fiftysix') as HTMLInputElement
        ).value;
        const nineval21 = (
            document.getElementById('sixtythree') as HTMLInputElement
        ).value;
        var saverrs1 = parseFloat(nineval.replace(/\,/g, ''));
        var saverrs131 = parseFloat(nineval21.replace(/\,/g, ''));
       // const result3211 = ((saverrs131/saverrs1) *100).toFixed(0);
       var result3211;
       if(saverrs1!=0 && saverrs131!=0){
        result3211 = ((saverrs131/saverrs1) *100).toFixed(0);
       }else{
        result3211 = 0;
       }
       const thirdyolo961 = document.getElementById(
            'sixtyfour'
        ) as HTMLInputElement;
        thirdyolo961.value = result3211.toString();

        const tenval = (
            document.getElementById('fourtythree') as HTMLInputElement
        ).value;
        const tenval21 = (
            document.getElementById('fiftyfour') as HTMLInputElement
        ).value;
        var saverrs2 = parseFloat(tenval.replace(/\,/g, ''));
        var saverrs231 = parseFloat(tenval21.replace(/\,/g, ''));
        const result3212 = saverrs2 + saverrs231;
        const result23 = result3212.toLocaleString('en-IN');
        const thirdyolo962 = document.getElementById(
            'sixtyfive'
        ) as HTMLInputElement;
        thirdyolo962.value = result23.toString();

        const elevenval = (
            document.getElementById('fiftysix') as HTMLInputElement
        ).value;
        const elevenval21 = (
            document.getElementById('sixtyfive') as HTMLInputElement
        ).value;
        var saverrs3 = parseFloat(elevenval.replace(/\,/g, ''));
        var saverrs331 = parseFloat(elevenval21.replace(/\,/g, ''));
       // const result3213 = ((saverrs331/saverrs3) *100).toFixed(0);
       var result3213;
       if(saverrs331!=0 && saverrs3!=0){
        result3213 = ((saverrs331/saverrs3) *100).toFixed(0);
       }else{
        result3213 = 0;
       }
        const thirdyolo963 = document.getElementById(
            'sixtysix'
        ) as HTMLInputElement;
        thirdyolo963.value = result3213.toString();
    }

    uw1(event: any) {
        const firstval = (document.getElementById('1one') as HTMLInputElement)
            .value;
        const secondval = (document.getElementById('2two') as HTMLInputElement)
            .value;
        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
       // const result = ((saver1 / saver) * 100).toFixed(0);
       var result;
       if(saver1!=0 && saver!=0){
        result = ((saver1 / saver) * 100).toFixed(0);
       }else{
        result =0;
       }
        const thirdInput = document.getElementById(
            '3three'
        ) as HTMLInputElement;
        thirdInput.value = result.toString();
    }
    uw2(event: any) {
        const fourthval = (document.getElementById('4four') as HTMLInputElement)
            .value;
        const fourthvall = (
            document.getElementById('5five') as HTMLInputElement
        ).value;
        var saver2 = parseFloat(fourthval.replace(/\,/g, ''));
        var saver3 = parseFloat(fourthvall.replace(/\,/g, ''));
        //const result1 = ((saver3 / saver2) * 100).toFixed(0);
        var result1;
        if(saver2!=0 && saver3!=0){
         result1 = ((saver3 / saver2) * 100).toFixed(0);
        }else{
         result1 =0;
        }
        const thirdInput12 = document.getElementById(
            '6six'
        ) as HTMLInputElement;
        thirdInput12.value = result1.toString();
    }
    uw3(event: any) {
        const firstval = (document.getElementById('7seven') as HTMLInputElement)
            .value;
        const secondval = (
            document.getElementById('8eight') as HTMLInputElement
        ).value;
        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
       // const result = ((saver1 / saver) * 100).toFixed(0);
       var result;
       if(saver1!=0 && saver!=0){
        result = ((saver1 / saver) * 100).toFixed(0);
       }else{
        result =0;
       }
        const thirdInput = document.getElementById('9nine') as HTMLInputElement;
        thirdInput.value = result.toString();
    }
    uw4(event: any) {
        const fourthval = (document.getElementById('10ten') as HTMLInputElement)
            .value;
        const fourthvall = (
            document.getElementById('11eleven') as HTMLInputElement
        ).value;
        var saver2 = parseFloat(fourthval.replace(/\,/g, ''));
        var saver3 = parseFloat(fourthvall.replace(/\,/g, ''));
      //  const result1 = ((saver3 / saver2) * 100).toFixed(0);
      var result1;
      if(saver2!=0 && saver3!=0){
       result1 = ((saver3 / saver2) * 100).toFixed(0);
      }else{
       result1 =0;
      }
        const thirdInput12 = document.getElementById(
            '12twelve'
        ) as HTMLInputElement;
        thirdInput12.value = result1.toString();
    }
    uw5(event: any) {
        const firstval = (
            document.getElementById('19nineteen') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('20twenty') as HTMLInputElement
        ).value;
        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
       // const result = ((saver1 / saver) * 100).toFixed(0);
       var result;
       if(saver1!=0 && saver!=0){
        result = ((saver1 / saver) * 100).toFixed(0);
       }else{
        result =0;
       }
        const thirdInput = document.getElementById(
            '21twentyone'
        ) as HTMLInputElement;
        thirdInput.value = result.toString();
    }
    uw6(event: any) {
        const fourthval = (
            document.getElementById('22twentytwo') as HTMLInputElement
        ).value;
        const fourthvall = (
            document.getElementById('23twentythree') as HTMLInputElement
        ).value;
        var saver2 = parseFloat(fourthval.replace(/\,/g, ''));
        var saver3 = parseFloat(fourthvall.replace(/\,/g, ''));
       // const result1 = ((saver3 / saver2) * 100).toFixed(0);
       var result1;
       if(saver2!=0 && saver3!=0){
        result1 = ((saver3 / saver2) * 100).toFixed(0);
       }else{
        result1 =0;
       }
        const thirdInput12 = document.getElementById(
            '24twentyfour'
        ) as HTMLInputElement;
        thirdInput12.value = result1.toString();
    }

    uw7(event: any) {
        const firstval = (
            document.getElementById('25twentyfive') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('26twentysix') as HTMLInputElement
        ).value;
        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
       // const result = ((saver1 / saver) * 100).toFixed(0);
       var result;
       if(saver1!=0 && saver!=0){
        result = ((saver1 / saver) * 100).toFixed(0);
       }else{
        result =0;
       }
        const thirdInput = document.getElementById(
            '27twentyseven'
        ) as HTMLInputElement;
        thirdInput.value = result.toString();
    }
    uw8(event: any) {
        const fourthval = (
            document.getElementById('28twentyeight') as HTMLInputElement
        ).value;
        const fourthvall = (
            document.getElementById('29twentynine') as HTMLInputElement
        ).value;
        var saver2 = parseFloat(fourthval.replace(/\,/g, ''));
        var saver3 = parseFloat(fourthvall.replace(/\,/g, ''));
       // const result1 = ((saver3 / saver2) * 100).toFixed(0);
       var result1;
       if(saver2!=0 && saver3!=0){
        result1 = ((saver3 / saver2) * 100).toFixed(0);
       }else{
        result1 =0;
       }
        const thirdInput12 = document.getElementById(
            '30thirty'
        ) as HTMLInputElement;
        thirdInput12.value = result1.toString();
    }
    alltot(event: any) {
        const fourthval = (document.getElementById('1one') as HTMLInputElement)
            .value;
        const fourthvall = (
            document.getElementById('7seven') as HTMLInputElement
        ).value;
        var saver2 = parseFloat(fourthval.replace(/\,/g, ''));
        var saver3 = parseFloat(fourthvall.replace(/\,/g, ''));
        const result1 = saver3 + saver2;
        const result32 = result1.toLocaleString('en-IN');
        const thirdInput12 = document.getElementById(
            '13thirteen'
        ) as HTMLInputElement;
        thirdInput12.value = result32.toString();

        const firstval = (document.getElementById('2two') as HTMLInputElement)
            .value;
        const secondval = (
            document.getElementById('8eight') as HTMLInputElement
        ).value;
        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        const result = saver1 + saver;
        const result12 = result.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            '14fourteen'
        ) as HTMLInputElement;
        thirdInput.value = result12.toString();

        const firstval1 = (
            document.getElementById('13thirteen') as HTMLInputElement
        ).value;
        const secondval1 = (
            document.getElementById('14fourteen') as HTMLInputElement
        ).value;
        var saver1 = parseFloat(firstval1.replace(/\,/g, ''));
        var saver11 = parseFloat(secondval1.replace(/\,/g, ''));
        //const result11 = ((saver1/saver11 )*100).toFixed(0) ;
var result11;
if(saver1 !=0 && saver11 !=0){
    result11 = ((saver1/saver11 )*100).toFixed(0) ;
}else{
    result11 =0;
}
        const thirdInput1 = document.getElementById(
            '15fifteen'
        ) as HTMLInputElement;
        thirdInput1.value = result11.toString();
    }
    alltot1(event: any) {
        const fourthval = (document.getElementById('4four') as HTMLInputElement)
            .value;
        const fourthvall = (
            document.getElementById('10ten') as HTMLInputElement
        ).value;
        var saver2 = parseFloat(fourthval.replace(/\,/g, ''));
        var saver3 = parseFloat(fourthvall.replace(/\,/g, ''));
        const result1 = saver3 + saver2;
        const result32 = result1.toLocaleString('en-IN');
        const thirdInput12 = document.getElementById(
            '16sixteen'
        ) as HTMLInputElement;
        thirdInput12.value = result32.toString();

        const firstval = (document.getElementById('5five') as HTMLInputElement)
            .value;
        const secondval = (
            document.getElementById('11eleven') as HTMLInputElement
        ).value;
        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        const result = saver1 + saver;
        const result321 = result.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            '17seventeen'
        ) as HTMLInputElement;
        thirdInput.value = result321.toString();

        const firstval1 = (document.getElementById('16sixteen') as HTMLInputElement)
            .value;
        const secondval1 = (
            document.getElementById('17seventeen') as HTMLInputElement
        ).value;
        var saver1 = parseFloat(firstval1.replace(/\,/g, ''));
        var saver11 = parseFloat(secondval1.replace(/\,/g, ''));
      //  const result11 = ((saver11/saver1)*100).toFixed(0);
      var result11;
      if(saver1 !=0 && saver11 !=0){
          result11 = ((saver1/saver11 )*100).toFixed(0) ;
      }else{
          result11 =0;
      }
        const thirdInput1 = document.getElementById(
            '18eighteen'
        ) as HTMLInputElement;
        thirdInput1.value = result11.toString();
    }
    alltot2(event: any) {
        const fourthval = (
            document.getElementById('19nineteen') as HTMLInputElement
        ).value;
        const fourthvall = (
            document.getElementById('25twentyfive') as HTMLInputElement
        ).value;
        var saver2 = parseFloat(fourthval.replace(/\,/g, ''));
        var saver3 = parseFloat(fourthvall.replace(/\,/g, ''));
        const result1 = saver3 + saver2;
        const result32 = result1.toLocaleString('en-IN');
        const thirdInput12 = document.getElementById(
            '31thirtyone'
        ) as HTMLInputElement;
        thirdInput12.value = result32.toString();

        const firstval = (
            document.getElementById('20twenty') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('26twentysix') as HTMLInputElement
        ).value;
        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        const result = saver1 + saver;
        const result321 = result.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            '32thirtytwo'
        ) as HTMLInputElement;
        thirdInput.value = result321.toString();

        const firstval1 = (
            document.getElementById('31thirtyone') as HTMLInputElement
        ).value;
        const secondval1 = (
            document.getElementById('32thirtytwo') as HTMLInputElement
        ).value;
        var saver1 = parseFloat(firstval1.replace(/\,/g, ''));
        var saver11 = parseFloat(secondval1.replace(/\,/g, ''));
       // const result11 = ((saver11 /saver1)*100).toFixed(0);
       var result11;
       if(saver1 !=0 && saver11 !=0){
           result11 = ((saver1/saver11 )*100).toFixed(0) ;
       }else{
           result11 =0;
       }
        const thirdInput1 = document.getElementById(
            '33thirtythree'
        ) as HTMLInputElement;
        thirdInput1.value = result11.toString();
    }
    alltot3(event: any) {
        const fourthval = (
            document.getElementById('22twentytwo') as HTMLInputElement
        ).value;
        const fourthvall = (
            document.getElementById('28twentyeight') as HTMLInputElement
        ).value;
        var saver2 = parseFloat(fourthval.replace(/\,/g, ''));
        var saver3 = parseFloat(fourthvall.replace(/\,/g, ''));
        const result1 = saver3 + saver2;
        const result32 = result1.toLocaleString('en-IN');
        const thirdInput12 = document.getElementById(
            '34thirtyfour'
        ) as HTMLInputElement;
        thirdInput12.value = result32.toString();

        const firstval = (
            document.getElementById('23twentythree') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('29twentynine') as HTMLInputElement
        ).value;
        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        const result = saver1 + saver;
        const result3 = result.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            '35thirtyfive'
        ) as HTMLInputElement;
        thirdInput.value = result3.toString();

        const firstval1 = (
            document.getElementById('34thirtyfour') as HTMLInputElement
        ).value;
        const secondval1 = (
            document.getElementById('35thirtyfive') as HTMLInputElement
        ).value;
        var saver1 = parseFloat(firstval1.replace(/\,/g, ''));
        var saver11 = parseFloat(secondval1.replace(/\,/g, ''));
       // const result11 = ((saver11 /saver1)*100).toFixed(0);
       var result11;
       if(saver1 !=0 && saver11 !=0){
           result11 = ((saver1/saver11 )*100).toFixed(0) ;
       }else{
           result11 =0;
       }
        const thirdInput1 = document.getElementById(
            '36thirtysix'
        ) as HTMLInputElement;
        thirdInput1.value = result11.toString();
    }

    ownershipandlegalfor5(i,value) {
        console.log(value.value);
        this.dropinput4 = value.value;
        this.lookupdtl[i]['Type'] = value.value;
        // this.finalobj['Nature of ownership and Legal Form'] = value.value;
    }
    ownershipandlegalfor51(i,value) {
        console.log(value.value);
        this.dropinput4 = value.value;
        this.lookupdtl[i]['Type2'] = value.value;
        // this.finalobj['Nature of ownership and Legal Form'] = value.value;
    }
    ownershipandlegalfor6(value) {
        console.log(value.value);
        this.dropinput7=value.value;
        // this.finalobj['Nature of ownership and Legal Form'] = value.value;
    }
    ownershipandlegalfor7(value) {
      console.log(value.value);
      this.dropinput6=value.value;
      // this.finalobj['Nature of ownership and Legal Form'] = value.value;
    }
  
    ownershipandlegalfor8(value) {
        console.log(value.value);
        this.dropinput1 = value.value;
    }
    ownershipandlegalfor9(value) {
        console.log(value.value);
        this.dropinput2 = value.value;
    }
    ownershipandlegalfor10(value) {
        console.log(value.value);
        this.dropinput3 = value.value;
    }
    ownershipandlegalfor11(value) {
        console.log(value.value);
        this.dropinput5 = value.value;
    }

    uwwu1(event: any) {
        const firstval = (
            document.getElementById('sixtysix1') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('seventytwo1') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        var saver2 = ((saver + saver1)/2).toFixed(0);
        const result23 = Number(saver2).toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'seventysix1'
        ) as HTMLInputElement;
        console.log(thirdInput.value = result23.toString());
    }
    uwwu2(event: any) {
        const firstval1 = (
            document.getElementById('sixtyseven1') as HTMLInputElement
        ).value;
        const secondval1 = (
            document.getElementById('seventythree1') as HTMLInputElement
        ).value;
        console.log(firstval1, secondval1);
        var saver = parseFloat(firstval1.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval1.replace(/\,/g, ''));
        console.log(saver, saver1);
        var saver2 = ((saver + saver1)/2).toFixed(0);
        const result23 = Number(saver2).toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'seventyseven1'
        ) as HTMLInputElement;
        thirdInput.value = result23.toString();
    }
    uwwu3(event: any) {
        const firstval2 = (
            document.getElementById('sixtyeight1') as HTMLInputElement
        ).value;
        const secondval2 = (
            document.getElementById('seventyfour1') as HTMLInputElement
        ).value;
        console.log(firstval2, secondval2);
        var saver = parseFloat(firstval2.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval2.replace(/\,/g, ''));
        console.log(saver, saver1);
        var saver2 = ((saver + saver1)/2).toFixed(0);
        const result23 = Number(saver2).toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'seventyeight1'
        ) as HTMLInputElement;
        thirdInput.value = result23.toString();
    }
    uwwu4(event: any) {
        const firstval3 = (
            document.getElementById('sixtynine1') as HTMLInputElement
        ).value;
        const secondval3 = (
            document.getElementById('seventyfive1') as HTMLInputElement
        ).value;
        console.log(firstval3, secondval3);
        var saver = parseFloat(firstval3.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval3.replace(/\,/g, ''));
        console.log(saver, saver1);
        var saver2 = ((saver + saver1)/2).toFixed(0);
        const result23 = Number(saver2).toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'seventynine1'
        ) as HTMLInputElement;
        thirdInput.value = result23.toString();
    }
    addreset5(data) {
        const dialogRef = this.dialog.open(ReturnratecalcComponent, {
            autoFocus: false,
            data: "one",
        });
        dialogRef.afterClosed().subscribe((result) => {
          this.principalform.get('work1')
                .setValue(this.sbrs.workratecal1);
            if (result) {
                console.log(result);
            }
        });
    }
    addreset5one(data) {
      const dialogRef = this.dialog.open(ReturnratecalcComponent, {
          autoFocus: false,
          data: "two",
      });
      dialogRef.afterClosed().subscribe((result) => {
        this.principalform.get('work3')
              .setValue(this.sbrs.workratecal1);
          if (result) {
              console.log(result);
          }
      });
   
  }
  total1:any
  total2:any
  total3:any
  total4:any
  addreset5two(data) {
    const dialogRef = this.dialog.open(ReturnratecalcComponent, {
        autoFocus: false,
        data: "three",
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.principalform.get('work5')
            .setValue(this.sbrs.workratecal1);
        if (result) {
            console.log(result);
        }
    }); 
 

}
finalc(){
  var a=this.principalform.get('work1').value
  var b=this.principalform.get('work5').value
  var saver = parseFloat(a.replace(/\,/g, ''));
  var saver1 = parseFloat(b.replace(/\,/g, ''));
  this.total1=(saver+saver1)/2
  this.principalform.get('work9').setValue(this.total1)
  //
  var c=this.principalform.get('work3').value
  var d=this.principalform.get('work7').value
  var saver2 = parseFloat(c.replace(/\,/g, ''));
  var saver3 = parseFloat(d.replace(/\,/g, ''));
  this.total2=((saver2+saver3)/2).toFixed(0)
  this.principalform.get('work11').setValue(this.total2)
  //
  var e=this.principalform.get('work2').value
  var f=this.principalform.get('work6').value
  var saver4 = parseFloat(c.replace(/\,/g, ''));
  var saver5 = parseFloat(d.replace(/\,/g, ''));
  this.total3=((saver4+saver5)/2).toFixed(0)
  this.principalform.get('work10').setValue(this.total3)
  //
  var g=this.principalform.get('work4').value
  var h=this.principalform.get('work8').value
  var saver6 = parseFloat(c.replace(/\,/g, ''));
  var saver7 = parseFloat(d.replace(/\,/g, ''));
  this.total4=((saver6+saver7)/2).toFixed(0)
  this.principalform.get('work12').setValue(this.total4)
}
addreset5three(data) {
  const dialogRef = this.dialog.open(ReturnratecalcComponent, {
      autoFocus: false,
      data: "four",
  });
  dialogRef.afterClosed().subscribe((result) => {
    this.principalform.get('work7')
          .setValue(this.sbrs.workratecal1);
      if (result) {
          console.log(result);
      }
  });
}
    addreset6(data) {
      const dialogRef = this.dialog.open(RetentionratecalcComponent, {
        autoFocus: false,
        data: "four",
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.principalform.get('work2')
            .setValue(this.sbrs.workratecal1);
        if (result) {
            console.log(result);
        }
    });
    }
    addreset6one(data) {
      const dialogRef = this.dialog.open(RetentionratecalcComponent, {
        autoFocus: false,
        data: "four",
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.principalform.get('work4')
            .setValue(this.sbrs.workratecal1);
        if (result) {
            console.log(result);
        }
    });
    }
    addreset6two(data) {
      const dialogRef = this.dialog.open(RetentionratecalcComponent, {
        autoFocus: false,
        data: "four",
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.principalform.get('work6')
            .setValue(this.sbrs.workratecal1);
        if (result) {
            console.log(result);
        }
    });

    }
    addreset6three(data) {
      const dialogRef = this.dialog.open(RetentionratecalcComponent, {
        autoFocus: false,
        data: "four",
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.principalform.get('work8')
            .setValue(this.sbrs.workratecal1);
        if (result) {
            console.log(result);
        }
    });
    }
    addreset() {
        this.dropinput1 = 'No';
    }
    addreset1() {
        this.dropinput2 = 'No';
    }
    addreset2() {
        this.dropinput3 = 'No';
    }
    addreset3() {
        this.dropinput5 = 'No';
    }
    ness1(event: any) {
        const firstval = (
            document.getElementById('oneness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('twoness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
       // var saver2 = ((saver1 / saver) * 100).toFixed(0);
       var saver2;
       if(saver!=0 && saver1 !=0){
        saver2 = ((saver1 / saver) * 100).toFixed(0);
       }else{
        saver2 = 0;
       }
        const thirdInput = document.getElementById(
            'threeness'
        ) as HTMLInputElement;
        thirdInput.value = saver2.toString();
    }
    ness2(event: any) {
        const firstval = (
            document.getElementById('fourness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('oneness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
       // var saver2 =((saver / saver1) * 100).toFixed(0);
       var saver2;
       if(saver!=0 && saver1 !=0){
        saver2 = ((saver1 / saver) * 100).toFixed(0);
       }else{
        saver2 = 0;
       }
        const thirdInput = document.getElementById(
            'fiveness'
        ) as HTMLInputElement;
        thirdInput.value = saver2.toString();
    }
    ness3(event: any) {
        const firstval = (
            document.getElementById('sixness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('eightness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        //var saver2 = ((saver1 / saver) * 100).toFixed(0);
        var saver2;
        if(saver!=0 && saver1 !=0){
         saver2 = ((saver1 / saver) * 100).toFixed(0);
        }else{
         saver2 = 0;
        }
        const thirdInput = document.getElementById(
            'nineness'
        ) as HTMLInputElement;
        thirdInput.value = saver2.toString();
    }
    ness4(event: any) {
        const firstval = (
            document.getElementById('tenness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('sixness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
      //  var saver2 = ((saver / saver1) * 100).toFixed(0);
      var saver2;
      if(saver!=0 && saver1 !=0){
       saver2 = ((saver / saver1) * 100).toFixed(0);
      }else{
       saver2 = 0;
      }
        const thirdInput = document.getElementById(
            'elevenness'
        ) as HTMLInputElement;
        thirdInput.value = saver2.toString();
    }
    ness5(event: any) {
        const firstval = (
            document.getElementById('twelveness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('thirteenness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
       // var saver2 = ((saver1 / saver) * 100).toFixed(0);
       var saver2;
       if(saver!=0 && saver1 !=0){
        saver2 = ((saver1 / saver) * 100).toFixed(0);
       }else{
        saver2 = 0;
       }
        const thirdInput = document.getElementById(
            'fourteenness'
        ) as HTMLInputElement;
        thirdInput.value = saver2.toString();
    }
    ness6(event: any) {
        const firstval = (
            document.getElementById('fifteenness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('twelveness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
       // var saver2 = ((saver / saver1) * 100).toFixed(0);
       var saver2;
       if(saver!=0 && saver1 !=0){
        saver2 = ((saver / saver1) * 100).toFixed(0);
       }else{
        saver2 = 0;
       }
        const thirdInput = document.getElementById(
            'sixteenness'
        ) as HTMLInputElement;
        thirdInput.value = saver2.toString();
    }
    ness7(event: any) {
        const firstval = (
            document.getElementById('seventeenness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('eighteenness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
       // var saver2 = ((saver1 / saver) * 100).toFixed(0);
       var saver2;
       if(saver!=0 && saver1 !=0){
        saver2 = ((saver1 / saver) * 100).toFixed(0);
       }else{
        saver2 = 0;
       }
        const thirdInput = document.getElementById(
            'nineteenness'
        ) as HTMLInputElement;
        thirdInput.value = saver2.toString();
    }
    ness8(event: any) {
        const firstval = (
            document.getElementById('twentyness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('seventeenness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        //var saver2 = ((saver / saver1) * 100).toFixed(0);
        var saver2;
        if(saver!=0 && saver1 !=0){
         saver2 = ((saver / saver1) * 100).toFixed(0);
        }else{
         saver2 = 0;
        }
        const thirdInput = document.getElementById(
            'twentyoneness'
        ) as HTMLInputElement;
        thirdInput.value = saver2.toString();
    }
    ness9(event: any) {
        const firstval = (
            document.getElementById('thirtytwoness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('thirtythreeness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
       // var saver2 = ((saver1 / saver) * 100).toFixed(0);
       var saver2;
       if(saver!=0 && saver1 !=0){
        saver2 = ((saver1 / saver) * 100).toFixed(0);
       }else{
        saver2 = 0;
       }
        const thirdInput = document.getElementById(
            'thirtyfourness'
        ) as HTMLInputElement;
        thirdInput.value = saver2.toString();
    }
    ness10(event: any) {
        const firstval = (
            document.getElementById('thirtyfiveness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('thirtytwoness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
       // var saver2 = ((saver / saver1) * 100).toFixed(0);
       var saver2;
       if(saver!=0 && saver1 !=0){
        saver2 = ((saver / saver1) * 100).toFixed(0);
       }else{
        saver2 = 0;
       }
        const thirdInput = document.getElementById(
            'thirtysixness'
        ) as HTMLInputElement;
        thirdInput.value = saver2.toString();
    }
    ness11(event: any) {
        const firstval = (
            document.getElementById('thirtysevenness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('thirtyeightness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        //var saver2 = ((saver1 / saver) * 100).toFixed(0);
        var saver2;
        if(saver!=0 && saver1 !=0){
         saver2 = ((saver1 / saver) * 100).toFixed(0);
        }else{
         saver2 = 0;
        }
        const thirdInput = document.getElementById(
            'thirtynineness'
        ) as HTMLInputElement;
        thirdInput.value = saver2.toString();
    }
    ness12(event: any) {
        const firstval = (
            document.getElementById('fourtyness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('thirtysevenness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
       // var saver2 = ((saver / saver1) * 100).toFixed(0);
       var saver2;
       if(saver!=0 && saver1 !=0){
        saver2 = ((saver / saver1) * 100).toFixed(0);
       }else{
        saver2 = 0;
       }
        const thirdInput = document.getElementById(
            'fourtyoneness'
        ) as HTMLInputElement;
        thirdInput.value = saver2.toString();
    }
    ness13(event: any) {
        const firstval = (
            document.getElementById('fourtytwoness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('fourtythreeness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        //var saver2 = ((saver1 / saver) * 100).toFixed(0);
        var saver2;
        if(saver!=0 && saver1 !=0){
         saver2 = ((saver1 / saver) * 100).toFixed(0);
        }else{
         saver2 = 0;
        }
        const thirdInput = document.getElementById(
            'fourtyfourness'
        ) as HTMLInputElement;
        thirdInput.value = saver2.toString();
    }
    ness14(event: any) {
        const firstval = (
            document.getElementById('fourtyfiveness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('fourtytwoness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
       // var saver2 = ((saver / saver1) * 100).toFixed(0);
       var saver2;
       if(saver!=0 && saver1 !=0){
        saver2 = ((saver / saver1) * 100).toFixed(0);
       }else{
        saver2 = 0;
       }
        const thirdInput = document.getElementById(
            'fourtysixness'
        ) as HTMLInputElement;
        thirdInput.value = saver2.toString();
    }
    ness15(event: any) {
        const firstval = (
            document.getElementById('fourtysevenness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('fourtyeightness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
       // var saver2 = ((saver1 / saver) * 100).toFixed(0);
       var saver2;
       if(saver!=0 && saver1 !=0){
        saver2 = ((saver1 / saver) * 100).toFixed(0);
       }else{
        saver2 = 0;
       }
        const thirdInput = document.getElementById(
            'fourtynineness'
        ) as HTMLInputElement;
        thirdInput.value = saver2.toString();
    }
    ness16(event: any) {
        const firstval = (
            document.getElementById('fiftyness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('fourtysevenness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
       // var saver2 = ((saver / saver1) * 100).toFixed(0);
       var saver2;
       if(saver!=0 && saver1 !=0){
        saver2 = ((saver / saver1) * 100).toFixed(0);
       }else{
        saver2 = 0;
       }
        const thirdInput = document.getElementById(
            'fiftyoneness'
        ) as HTMLInputElement;
        thirdInput.value = saver2.toString();
    }
    ness17(event: any) {
        const firstval = (
            document.getElementById('oneness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('twelveness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        var saver2 = saver + saver1;
        const result32 = saver2.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'twentytwoness'
        ) as HTMLInputElement;
        thirdInput.value = result32.toString();
    }
    ness18(event: any) {
        const firstval = (
            document.getElementById('twoness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('thirteenness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        var saver2 = saver + saver1;
        const result32 = saver2.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'twentythreeness'
        ) as HTMLInputElement;
        thirdInput.value = result32.toString();

        const firstvall = (
            document.getElementById('twentytwoness') as HTMLInputElement
        ).value;
        const secondvall = (
            document.getElementById('twentythreeness') as HTMLInputElement
        ).value;
        console.log(firstvall, secondvall);

        var saver21 = parseFloat(firstvall.replace(/\,/g, ''));
        var saver211 = parseFloat(secondvall.replace(/\,/g, ''));
        console.log(saver21, saver211);
        //var saver212 = ((saver211/saver21 ) *100).toFixed(0);
        var saver212;
        if(saver21 !=0 && saver211){
            saver212 = ((saver211/saver21 ) *100).toFixed(0);
        }else{
            saver212 = 0;
        }
        const thirdInput1 = document.getElementById(
            'twentyfourness'
        ) as HTMLInputElement;
        thirdInput1.value = saver212.toString();
    }
    ness19(event: any) {
        const firstval = (
            document.getElementById('fourness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('fifteenness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        var saver2 = saver + saver1;
        const result32 = saver2.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'twentyfiveness'
        ) as HTMLInputElement;
        thirdInput.value = result32.toString();

        const firstvall = (
            document.getElementById('twentytwoness') as HTMLInputElement
        ).value;
        const secondvall = (
            document.getElementById('twentyfiveness') as HTMLInputElement
        ).value;
        console.log(firstvall, secondvall);

        var saver21 = parseFloat(firstvall.replace(/\,/g, ''));
        var saver211 = parseFloat(secondvall.replace(/\,/g, ''));
        console.log(saver21, saver211);
       // var saver212 = ((saver211/saver21) *100).toFixed(0);
       var saver212;
       if(saver21 !=0 && saver211){
           saver212 = ((saver211/saver21 ) *100).toFixed(0);
       }else{
           saver212 = 0;
       }
        const thirdInput1 = document.getElementById(
            'twentysixness'
        ) as HTMLInputElement;
        thirdInput1.value = saver212.toString();
    }
    ness20(event: any) {
        const firstval = (
            document.getElementById('sixness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('seventeenness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        var saver2 = saver + saver1;
        const result32 = saver2.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'twentysevenness'
        ) as HTMLInputElement;
        thirdInput.value = result32.toString();
    }
    ness21(event: any) {
        const firstval = (
            document.getElementById('eightness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('eighteenness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        var saver2 = saver + saver1;
        const result32 = saver2.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'twentyeightness'
        ) as HTMLInputElement;
        thirdInput.value = result32.toString();

        const firstvall = (
            document.getElementById('twentysevenness') as HTMLInputElement
        ).value;
        const secondvall = (
            document.getElementById('twentyeightness') as HTMLInputElement
        ).value;
        console.log(firstvall, secondvall);

        var saver21 = parseFloat(firstvall.replace(/\,/g, ''));
        var saver211 = parseFloat(secondvall.replace(/\,/g, ''));
        console.log(saver21, saver211);
        //var saver212 = ((saver211/saver21 ) *100).toFixed(0);
        var saver212;
        if(saver21 !=0 && saver211){
            saver212 = ((saver211/saver21 ) *100).toFixed(0);
        }else{
            saver212 = 0;
        }
        const thirdInput1 = document.getElementById(
            'twentynineness'
        ) as HTMLInputElement;
        thirdInput1.value = saver212.toString();
    }
    ness22(event: any) {
        const firstval = (
            document.getElementById('tenness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('twentyness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        var saver2 = saver + saver1;
        const result32 = saver2.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'thirtyness'
        ) as HTMLInputElement;
        thirdInput.value = result32.toString();

        const firstvall = (
            document.getElementById('twentysevenness') as HTMLInputElement
        ).value;
        const secondvall = (
            document.getElementById('thirtyness') as HTMLInputElement
        ).value;
        console.log(firstvall, secondvall);

        var saver21 = parseFloat(firstvall.replace(/\,/g, ''));
        var saver211 = parseFloat(secondvall.replace(/\,/g, ''));
        console.log(saver21, saver211);
       // var saver212 = ((saver211/saver21) *100).toFixed(0);
       var saver212;
       if(saver21 !=0 && saver211){
           saver212 = ((saver211/saver21 ) *100).toFixed(0);
       }else{
           saver212 = 0;
       }
        const thirdInput1 = document.getElementById(
            'thirtyoneness'
        ) as HTMLInputElement;
        thirdInput1.value = saver212.toString();
    }

    ness23(event: any) {
        const firstval = (
            document.getElementById('thirtytwoness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('fourtytwoness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        var saver2 = saver + saver1;
        const result32 = saver2.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'fiftytwoness'
        ) as HTMLInputElement;
        thirdInput.value = result32.toString();
    }
    ness24(event: any) {
        const firstval = (
            document.getElementById('thirtythreeness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('fourtythreeness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        var saver2 = saver + saver1;
        const result32 = saver2.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'fiftythreeness'
        ) as HTMLInputElement;
        thirdInput.value = result32.toString();

        const firstvall = (
            document.getElementById('fiftytwoness') as HTMLInputElement
        ).value;
        const secondvall = (
            document.getElementById('fiftythreeness') as HTMLInputElement
        ).value;
        console.log(firstvall, secondvall);

        var saver21 = parseFloat(firstvall.replace(/\,/g, ''));
        var saver211 = parseFloat(secondvall.replace(/\,/g, ''));
        console.log(saver21, saver211);
       // var saver212 = ((saver211/saver21 ) *100).toFixed(0);
       var saver212;
       if(saver21 !=0 && saver211){
           saver212 = ((saver211/saver21 ) *100).toFixed(0);
       }else{
           saver212 = 0;
       }
        const thirdInput1 = document.getElementById(
            'fiftyfourness'
        ) as HTMLInputElement;
        thirdInput1.value = saver212.toString();
    }
    ness25(event: any) {
        const firstval = (
            document.getElementById('thirtyfiveness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('fourtyfiveness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        var saver2 = saver + saver1;
        const result32 = saver2.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'fiftyfiveness'
        ) as HTMLInputElement;
        thirdInput.value = result32.toString();

        const firstvall = (
            document.getElementById('fiftytwoness') as HTMLInputElement
        ).value;
        const secondvall = (
            document.getElementById('fiftyfiveness') as HTMLInputElement
        ).value;
        console.log(firstvall, secondvall);

        var saver21 = parseFloat(firstvall.replace(/\,/g, ''));
        var saver211 = parseFloat(secondvall.replace(/\,/g, ''));
        console.log(saver21, saver211);
       // var saver212 = ((saver211/saver21 ) *100).toFixed(0);
       var saver212;
       if(saver21 !=0 && saver211){
           saver212 = ((saver211/saver21 ) *100).toFixed(0);
       }else{
           saver212 = 0;
       }
        const thirdInput1 = document.getElementById(
            'fiftysixness'
        ) as HTMLInputElement;
        thirdInput1.value = saver212.toString();
    }
    ness26(event: any) {
        const firstval = (
            document.getElementById('thirtysevenness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('fourtysevenness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        var saver2 = saver + saver1;
        const result32 = saver2.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'fiftysevenness'
        ) as HTMLInputElement;
        thirdInput.value = result32.toString();
    }
    ness27(event: any) {
        const firstval = (
            document.getElementById('thirtyeightness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('fourtyeightness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        var saver2 = saver + saver1;
        const result32 = saver2.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'fiftyeightness'
        ) as HTMLInputElement;
        thirdInput.value = result32.toString();

        const firstvall = (
            document.getElementById('fiftysevenness') as HTMLInputElement
        ).value;
        const secondvall = (
            document.getElementById('fiftyeightness') as HTMLInputElement
        ).value;
        console.log(firstvall, secondvall);

        var saver21 = parseFloat(firstvall.replace(/\,/g, ''));
        var saver211 = parseFloat(secondvall.replace(/\,/g, ''));
        console.log(saver21, saver211);
        var saver212 = ((saver21 + saver211) / 2).toFixed(0);

        const thirdInput1 = document.getElementById(
            'fiftynineness'
        ) as HTMLInputElement;
        thirdInput1.value = saver212.toString();
    }
    ness28(event: any) {
        const firstval = (
            document.getElementById('fourtyness') as HTMLInputElement
        ).value;
        const secondval = (
            document.getElementById('fiftyness') as HTMLInputElement
        ).value;
        console.log(firstval, secondval);

        var saver = parseFloat(firstval.replace(/\,/g, ''));
        var saver1 = parseFloat(secondval.replace(/\,/g, ''));
        console.log(saver, saver1);
        var saver2 = saver + saver1;
        const result32 = saver2.toLocaleString('en-IN');
        const thirdInput = document.getElementById(
            'sixtyness'
        ) as HTMLInputElement;
        thirdInput.value = result32.toString();

        const firstvall = (
            document.getElementById('fiftysevenness') as HTMLInputElement
        ).value;
        const secondvall = (
            document.getElementById('sixtyness') as HTMLInputElement
        ).value;
        console.log(firstvall, secondvall);

        var saver21 = parseFloat(firstvall.replace(/\,/g, ''));
        var saver211 = parseFloat(secondvall.replace(/\,/g, ''));
        console.log(saver21, saver211);
        var saver212 = ((saver21 + saver211) / 2).toFixed(0);

        const thirdInput1 = document.getElementById(
            'sixtyoneness'
        ) as HTMLInputElement;
        thirdInput1.value = saver212.toString();
    }
    //employees
    calculateResultthreea9a1() {
        this.inputthreea9a1 = this.principalform.get('threea9a1').value || 0;
        this.inputthreea9a2 = this.principalform.get('threea9a2').value || 0;
        this.resultthreea9a3 =
            (this.inputthreea9a2 / this.inputthreea9a1) * 100;
       // const formattedResult = `${this.resultthreea9a3}%`;
var formattedResult;
if(this.inputthreea9a1!=0 && this.inputthreea9a2!=0){
    formattedResult = `${this.resultthreea9a3}%`;
}else{
    formattedResult = 0;
}
        this.principalform.patchValue({ threea9a3: formattedResult });
    }
    calculateResultthreea9a4() {
        this.inputthreea9a4 = this.principalform.get('threea9a4').value || 0;
        this.inputthreea9a5 = this.principalform.get('threea9a5').value || 0;
        this.resultthreea9a6 =
            (this.inputthreea9a5 / this.inputthreea9a4) * 100;
       // const formattedResult = `${this.resultthreea9a6}%`;
       var formattedResult;
       if(this.inputthreea9a4!=0 && this.inputthreea9a5!=0){
        formattedResult = `${this.resultthreea9a6}%`;
    }else{
        formattedResult = 0;
    }
        this.principalform.patchValue({ threea9a6: formattedResult });
    }
    calculateResultthreea9b1() {
        this.inputthreea9b1 = this.principalform.get('threea9b1').value || 0;
        this.inputthreea9b2 = this.principalform.get('threea9b2').value || 0;
        this.resultthreea9b3 =
            (this.inputthreea9b2 / this.inputthreea9b1) * 100;
       // const formattedResult = `${this.resultthreea9b3}%`;
       var formattedResult;
       if(this.inputthreea9b1!=0 && this.inputthreea9b2!=0){
        formattedResult = `${this.resultthreea9b3}%`;
    }else{
        formattedResult = 0;
    }
        this.principalform.patchValue({ threea9b3: formattedResult });
        this.TotalSumthreea9c1();
        this.TotalSumthreea9c2();
        this.TotalSumthreea9c3();
    }
    calculateResultthreea9b4() {
        this.inputthreea9b4 = this.principalform.get('threea9b4').value || 0;
        this.inputthreea9b5 = this.principalform.get('threea9b5').value || 0;
        this.resultthreea9b6 =
            (this.inputthreea9b5 / this.inputthreea9b4) * 100;
       // const formattedResult = `${this.resultthreea9b6}%`;
       var formattedResult;
       if(this.inputthreea9b5!=0 && this.inputthreea9b4!=0){
        formattedResult = `${this.resultthreea9b6}%`;
    }else{
        formattedResult = 0;
    }
        this.principalform.patchValue({ threea9b6: formattedResult });
        this.TotalSumthreea9c4();
        this.TotalSumthreea9c5();
        this.TotalSumthreea9c6();
    }
    TotalSumthreea9c1() {
        this.totalinputthreea9a1 = Number(this.inputthreea9a1) + Number(this.inputthreea9b1);
        const result21 = Number(this.totalinputthreea9a1).toLocaleString('en-IN');
        this.principalform.patchValue({ threea9c1: result21 });
    }
    TotalSumthreea9c2() {
        this.totalinputthreea9a2 = Number(this.inputthreea9a2) + Number(this.inputthreea9b2);
        const result21 = Number(this.totalinputthreea9a2).toLocaleString('en-IN');
        this.principalform.patchValue({ threea9c2: result21 });
    }
    TotalSumthreea9c4() {
        this.totalinputthreea9a4 = Number(this.inputthreea9a4) + Number(this.inputthreea9b4);
        const result21 = Number(this.totalinputthreea9a4).toLocaleString('en-IN');
        this.principalform.patchValue({ threea9c4: result21 });
    }
    TotalSumthreea9c5() {
        this.totalinputthreea9a5 = Number(this.inputthreea9a5) + Number(this.inputthreea9b5);
        const result21 = Number(this.totalinputthreea9a5).toLocaleString('en-IN');
        this.principalform.patchValue({ threea9c5: result21 });
    }
    TotalSumthreea9c3() {
        this.totalinputthreea9c3 = this.resultthreea9a3 + this.resultthreea9b3;
        this.principalform.patchValue({ threea9c3: this.totalinputthreea9c3 });

    }
    TotalSumthreea9c6() {
        this.totalinputthreea9c6 = this.resultthreea9a6 + this.resultthreea9b6;
        this.principalform.patchValue({ threea9c6: this.totalinputthreea9c6 });
    }
    //workers
    calculateResultthreea9d1() {
        this.inputthreea9d1 = this.principalform.get('threea9d1').value || 0;
        this.inputthreea9d2 = this.principalform.get('threea9d2').value || 0;
        this.resultthreea9d3 =
            (this.inputthreea9d2 / this.inputthreea9d1) * 100;
      //  const formattedResult = `${this.resultthreea9d3}%`;
      var formattedResult;
      if(this.inputthreea9d2!=0 && this.inputthreea9d1!=0){
       formattedResult = `${this.resultthreea9d3}%`;
   }else{
       formattedResult = 0;
   }
        this.principalform.patchValue({ threea9d3: formattedResult });
    }
    calculateResultthreea9d4() {
        this.inputthreea9d4 = this.principalform.get('threea9d4').value || 0;
        this.inputthreea9d5 = this.principalform.get('threea9d5').value || 0;
        this.resultthreea9d6 =
            (this.inputthreea9d5 / this.inputthreea9d4) * 100;
       // const formattedResult = `${this.resultthreea9d6}%`;
       var formattedResult;
       if(this.inputthreea9d4!=0 && this.inputthreea9d5!=0){
        formattedResult = `${this.resultthreea9d6}%`;
    }else{
        formattedResult = 0;
    }
        this.principalform.patchValue({ threea9d6: formattedResult });
    }
    calculateResultthreea9e1() {
        this.inputthreea9e1 = this.principalform.get('threea9e1').value || 0;
        this.inputthreea9e2 = this.principalform.get('threea9e2').value || 0;
        this.resultthreea9e3 =
            (this.inputthreea9e2 / this.inputthreea9e1) * 100;
      //  const formattedResult = `${this.resultthreea9e3}%`;
      var formattedResult;
      if(this.inputthreea9e1 !=0 && this.inputthreea9e2 !=0){
        formattedResult = `${this.resultthreea9e3}%`;
      }else{
        formattedResult = 0;
    }
        this.principalform.patchValue({ threea9e3: formattedResult });
        this.TotalSumthreea9f1();
        this.TotalSumthreea9f2();
        this.TotalSumthreea9f3();
    }
    calculateResultthreea9e4() {
        this.inputthreea9e4 = this.principalform.get('threea9e4').value || 0;
        this.inputthreea9e5 = this.principalform.get('threea9e5').value || 0;
        this.resultthreea9e6 =
            (this.inputthreea9e5 / this.inputthreea9e4) * 100;
      //  const formattedResult = `${this.resultthreea9e6}%`;
      var formattedResult;
      if(this.inputthreea9e4 !=0 && this.inputthreea9e5 !=0){
        formattedResult = `${this.resultthreea9e6}%`;
      }else{
        formattedResult = 0;
    }
        this.principalform.patchValue({ threea9e6: formattedResult });
        this.TotalSumthreea9f4();
        this.TotalSumthreea9f5();
        this.TotalSumthreea9f6();
    }

    TotalSumthreea9f1() {
        this.totalinputthreea9d1 = Number(this.inputthreea9d1) + Number(this.inputthreea9e1);
        const result21 = Number(this.totalinputthreea9d1).toLocaleString('en-IN');
        this.principalform.patchValue({ threea9f1: result21 });
    }
    TotalSumthreea9f2() {
        this.totalinputthreea9d2 = Number(this.inputthreea9d2) + Number(this.inputthreea9e2);
        const result21 = Number(this.totalinputthreea9d2).toLocaleString('en-IN');
        this.principalform.patchValue({ threea9f2: result21 });
    }
    TotalSumthreea9f4() {
        this.totalinputthreea9d4 = Number(this.inputthreea9d4) + Number(this.inputthreea9e4);
        const result21 = Number(this.totalinputthreea9d4).toLocaleString('en-IN');
        this.principalform.patchValue({ threea9f4: result21 });
    }
    TotalSumthreea9f5() {
        this.totalinputthreea9d5 = Number(this.inputthreea9d5) + Number(this.inputthreea9e5);
        const result21 = Number(this.totalinputthreea9d5).toLocaleString('en-IN');
        this.principalform.patchValue({ threea9f5: result21 });
    }
    TotalSumthreea9f3() {
        this.totalinputthreea9f3 = this.resultthreea9d3 + this.resultthreea9e3;
        this.principalform.patchValue({ threea9f3: this.totalinputthreea9f3 });
    }
    TotalSumthreea9f6() {
        this.totalinputthreea9f6 = this.resultthreea9d6 + this.resultthreea9e6;
        this.principalform.patchValue({ threea9f6: this.totalinputthreea9f6 });
    }

    Changethreea10a(value) {
        if (value.value == 'Yes') {
            this.threea10aexplainyesclicked = true;
        } else {
            this.threea10aexplainyesclicked = false;
        }
    }

    Changethreea10c(value) {
        if (value.value == 'Yes') {
            this.threea10cexplainyesclicked = true;
        } else {
            this.threea10cexplainyesclicked = false;
        }
    }

    Changethreea10d(value) {
        if (value.value == 'Yes') {
            this.threea10dexplainyesclicked = true;
        } else {
            this.threea10dexplainyesclicked = false;
        }
    }
    
  ffqu1(event: any) {
    const firstval = (document.getElementById('ffone') as HTMLInputElement).value;
    const secondval = (document.getElementById('fftwo') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    var result;
    if (saver!=0 && saver1!=0){
        result = ((saver1 / saver) * 100).toFixed(0);
       console.log(result);
       }
       else{
           result = 0;
       }
   // const result = ((saver1 / saver) * 100).toFixed(0);
    // const subt=saver-saver1
    // const roundedResult1 = subt.toFixed(0); // Rounds the result to 2 decimal places
    // const roundedResult = result.toFixed(0); // Rounds the result to 2 decimal places
    
    const thirdInput = document.getElementById('ffthree') as HTMLInputElement;
    thirdInput.value = result.toString();
    // const thirdInput1 = document.getElementById('ffsixtynine') as HTMLInputElement;
    const fourthval = (document.getElementById('fffour') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    // const result1=((saver2/saver)*100).toFixed(0)
    var result1;
    if (saver!=0 && saver1!=0){
        result1 = ((saver1 / saver) * 100).toFixed(0);
       console.log(result1);
       }
       else{
           result1 = 0;
       }
    const thirdInput12 = document.getElementById('fffive') as HTMLInputElement;
    thirdInput12.value = result1.toString();
    



    const fourthval2 = (document.getElementById('ffsix') as HTMLInputElement).value;
    var saver21= parseFloat(fourthval2.replace(/\,/g, ''));
   // const result11=((saver21/saver)*100).toFixed(0)
   var result11;
   if (saver!=0 && saver1!=0){
       result11 = ((saver1 / saver) * 100).toFixed(0);
      console.log(result11);
      }
      else{
          result11 = 0;
      }
    const thirdInput122 = document.getElementById('ffseven') as HTMLInputElement;
    thirdInput122.value = result11.toString();


    const fiveval = (document.getElementById('ffeight') as HTMLInputElement).value;
    var savers1= parseFloat(fiveval.replace(/\,/g, ''));
   // const results1=((savers1/saver)*100).toFixed(0)
   var results1;
   if (saver!=0 && saver1!=0){
       results1 = ((saver1 / saver) * 100).toFixed(0);
      console.log(results1);
      }
      else{
          results1 = 0;
      }
    const thirdyolo1 = document.getElementById('ffnine') as HTMLInputElement;
    thirdyolo1.value = results1.toString();


    const fiveval1 = (document.getElementById('fften') as HTMLInputElement).value;
    var savers2= parseFloat(fiveval1.replace(/\,/g, ''));
    //const results2=((savers2/saver)*100).toFixed(0)
    var results2;
    if(saver!=0 && savers2!=0){
        results2=((savers2/saver)*100).toFixed(0);
    }else{
        results2 = 0;
    }
    const thirdyolo2 = document.getElementById('ffeleven') as HTMLInputElement;
    thirdyolo2.value = results2.toString();
  }
  ffqu11(event: any) {
    const firstval = (document.getElementById('fftwelve') as HTMLInputElement).value;
    const secondval = (document.getElementById('ffthirteen') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    var result;
    if (saver!=0 && saver1!=0){
        result = ((saver1 / saver) * 100).toFixed(0);
       console.log(result);
       }
       else{
           result = 0;
       }
   // const result = ((saver1 / saver) * 100).toFixed(0);
    // const subt=saver-saver1
    // const roundedResult1 = subt.toFixed(0); // Rounds the result to 2 decimal places
    // const roundedResult = result.toFixed(0); // Rounds the result to 2 decimal places
    
    const thirdInput = document.getElementById('fffourteen') as HTMLInputElement;
    thirdInput.value = result.toString();
    // const thirdInput1 = document.getElementById('ffsixtynine') as HTMLInputElement;
    const fourthval = (document.getElementById('fffifteen') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
   
    var result1;
    if (saver!=0 && saver1!=0){
        result1 = ((saver1 / saver) * 100).toFixed(0);
       console.log(result1);
       }
       else{
           result1 = 0;
       }
   // const result1=((saver2/saver)*100).toFixed(0)
    const thirdInput12 = document.getElementById('ffsixteen') as HTMLInputElement;
    thirdInput12.value = result1.toString();
    



    const fourthval2 = (document.getElementById('ffseventeen') as HTMLInputElement).value;
    var saver21= parseFloat(fourthval2.replace(/\,/g, ''));
    //const result11=((saver21/saver)*100).toFixed(0)
    var result11;
    if (saver!=0 && saver1!=0){
        result11 = ((saver1 / saver) * 100).toFixed(0);
       console.log(result11);
       }
       else{
           result11 = 0;
       }
    const thirdInput122 = document.getElementById('ffeighteen') as HTMLInputElement;
    thirdInput122.value = result11.toString();


    const fiveval = (document.getElementById('ffnineteen') as HTMLInputElement).value;
    var savers1= parseFloat(fiveval.replace(/\,/g, ''));
    //const results1=((savers1/saver)*100).toFixed(0)
    var results1;
    if (saver!=0 && saver1!=0){
        results1 = ((saver1 / saver) * 100).toFixed(0);
       console.log(results1);
       }
       else{
           results1 = 0;
       }
    const thirdyolo1 = document.getElementById('fftwenty') as HTMLInputElement;
    thirdyolo1.value = results1.toString();


    const fiveval1 = (document.getElementById('fftwentyone') as HTMLInputElement).value;
    var savers2= parseFloat(fiveval1.replace(/\,/g, ''));
   // const results2=((savers2/saver)*100).toFixed(0)
   var results2;
   if (saver!=0 && saver1!=0){
       results2 = ((saver1 / saver) * 100).toFixed(0);
      console.log(results2);
      }
      else{
          results2 = 0;
      }
    const thirdyolo2 = document.getElementById('fftwentytwo') as HTMLInputElement;
    thirdyolo2.value = results2.toString();
  }
  ffqu111(event: any) {
    const firstval = (document.getElementById('ffone') as HTMLInputElement).value;
    const secondval = (document.getElementById('fftwelve') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    const result = saver1 + saver;
    const result2 = result.toLocaleString('en-IN');
    const thirdInput = document.getElementById('fftwentythree') as HTMLInputElement;
    console.log(thirdInput.value = result2.toString());


    const fourthval = (document.getElementById('fftwo') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('ffthirteen') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver22= parseFloat(fourthvall.replace(/\,/g, ''));
    const result1=saver2 + saver22;
    const result21 = result1.toLocaleString('en-IN');
    const thirdInput12 = document.getElementById('fftwentyfour') as HTMLInputElement;
    thirdInput12.value = result21.toString();
    



    const fourthval2 = (document.getElementById('fftwentythree') as HTMLInputElement).value;
    const fourthvall2 = (document.getElementById('fftwentyfour') as HTMLInputElement).value;
    var saver21= parseFloat(fourthval2.replace(/\,/g, ''));
    var saver212= parseFloat(fourthvall2.replace(/\,/g, ''));
    //const result11=((saver212/saver21)*100).toFixed(0)
    var result11;
    if (saver!=0 && saver1!=0){
        result11 = ((saver1 / saver) * 100).toFixed(0);
       console.log(result11);
       }
       else{
           result11 = 0;
       }
    const thirdInput122 = document.getElementById('fftwentyfive') as HTMLInputElement;
    thirdInput122.value = result11.toString();


    const fiveval = (document.getElementById('fffour') as HTMLInputElement).value;
    const fivevall = (document.getElementById('fffifteen') as HTMLInputElement).value;
    var savers1= parseFloat(fiveval.replace(/\,/g, ''));
    var savers12= parseFloat(fivevall.replace(/\,/g, ''));
    const results1=savers1+savers12
    const results12 = result1.toLocaleString('en-IN');
    const thirdyolo1 = document.getElementById('fftwentysix') as HTMLInputElement;
    thirdyolo1.value = results12.toString();


    const fiveval1 = (document.getElementById('fftwentythree') as HTMLInputElement).value;
    const fiveval121 = (document.getElementById('fftwentysix') as HTMLInputElement).value;
    var savers2= parseFloat(fiveval1.replace(/\,/g, ''));
    var savers231= parseFloat(fiveval121.replace(/\,/g, ''));
    //const results2=((savers231/savers2)*100).toFixed(0)
    var results2;
    if (saver!=0 && saver1!=0){
        results2 = ((saver1 / saver) * 100).toFixed(0);
       console.log(results2);
       }
       else{
           results2 = 0;
       }
    const thirdyolo2 = document.getElementById('fftwentyseven') as HTMLInputElement;
    thirdyolo2.value = results2.toString();

  


   
  }
  ffqu12(event: any){
    const sixval = (document.getElementById('ffsix') as HTMLInputElement).value;
    const sixvall = (document.getElementById('ffseventeen') as HTMLInputElement).value;
    var savers10= parseFloat(sixval.replace(/\,/g, ''));
    var savers120= parseFloat(sixvall.replace(/\,/g, ''));
    const results11=savers10+savers120
    const results2 = results11.toLocaleString('en-IN');
    const thirdyolo11 = document.getElementById('fftwentyeight') as HTMLInputElement;
    thirdyolo11.value = results2.toString();


    const sevenval = (document.getElementById('fftwentythree') as HTMLInputElement).value;
    const sevenval21 = (document.getElementById('fftwentyeight') as HTMLInputElement).value;
    var savere= parseFloat(sevenval.replace(/\,/g, ''));
    var savere31= parseFloat(sevenval21.replace(/\,/g, ''));
   // const results232=((savere31/savere)*100).toFixed(0)
   var results232;
   if (savere!=0 && savere31!=0){
       results232 = ((savere31 / savere) * 100).toFixed(0);
      console.log(results232);
      }
      else{
          results232 = 0;
      }
    const thirdyolo232 = document.getElementById('fftwentynine') as HTMLInputElement;
    thirdyolo232.value = results232.toString();

    const eightval = (document.getElementById('ffeight') as HTMLInputElement).value;
    const eightval21 = (document.getElementById('ffnineteen') as HTMLInputElement).value;
    var saverrs= parseFloat(eightval.replace(/\,/g, ''));
    var saverrs31= parseFloat(eightval21.replace(/\,/g, ''));
    const result321=saverrs+saverrs31
    const result2 = result321.toLocaleString('en-IN');
    const thirdyolo96 = document.getElementById('ffthirty') as HTMLInputElement;
    thirdyolo96.value = result2.toString();

    
    const nineval = (document.getElementById('fftwentythree') as HTMLInputElement).value;
    const nineval21 = (document.getElementById('ffthirty') as HTMLInputElement).value;
    var saverrs1= parseFloat(nineval.replace(/\,/g, ''));
    var saverrs131= parseFloat(nineval21.replace(/\,/g, ''));
   // const result3211=((saverrs131/saverrs1)*100).toFixed(0);
   var result3211;
   if (saverrs1!=0 && saverrs131!=0){
       result3211 = ((saverrs131 / saverrs1) * 100).toFixed(0);
      console.log(result3211);
      }
      else{
          result3211 = 0;
      }
    const thirdyolo961 = document.getElementById('ffthirtyone') as HTMLInputElement;
    thirdyolo961.value = result3211.toString();


    const tenval = (document.getElementById('fften') as HTMLInputElement).value;
    const tenval21 = (document.getElementById('fftwentyone') as HTMLInputElement).value;
    var saverrs2= parseFloat(tenval.replace(/\,/g, ''));
    var saverrs231= parseFloat(tenval21.replace(/\,/g, ''));
    const result3212=saverrs2+saverrs231
    const result21 = result3212.toLocaleString('en-IN');
    const thirdyolo962 = document.getElementById('ffthirtytwo') as HTMLInputElement;
    thirdyolo962.value = result21.toString();


    const elevenval = (document.getElementById('fftwentythree') as HTMLInputElement).value;
    const elevenval21 = (document.getElementById('ffthirtytwo') as HTMLInputElement).value;
    var saverrs3= parseFloat(elevenval.replace(/\,/g, ''));
    var saverrs331= parseFloat(elevenval21.replace(/\,/g, ''));
   // const result3213=((saverrs331/saverrs3)*100).toFixed(0)
   var result3213;
   if (saverrs3!=0 && saverrs331!=0){
       result3213 = ((saverrs331 / saverrs3) * 100).toFixed(0);
      console.log(result3213);
      }
      else{
          result3213 = 0;
      }
    const thirdyolo963 = document.getElementById('ffthirtythree') as HTMLInputElement;
    thirdyolo963.value = result3213.toString();
  }

  ffqu13(event: any) {
    const firstval = (document.getElementById('ffthirtyfour') as HTMLInputElement).value;
    const secondval = (document.getElementById('ffthirtyfive') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    var result;
   if (saver!=0 && saver1!=0){
       result = ((saver1 / saver) * 100).toFixed(0);
      console.log(result);
      }
      else{
          result = 0;
      }
    // const result = ((saver1 / saver) * 100).toFixed(0);
    // const subt=saver-saver1
    // const roundedResult1 = subt.toFixed(0); // Rounds the result to 2 decimal places
    // const roundedResult = result.toFixed(0); // Rounds the result to 2 decimal places
    
    const thirdInput = document.getElementById('ffthirtysix') as HTMLInputElement;
    thirdInput.value = result.toString();
    // const thirdInput1 = document.getElementById('ffsixtynine') as HTMLInputElement;
    const fourthval = (document.getElementById('ffthirtyseven') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    //const result1=((saver2/saver)*100).toFixed(0)
    var result1;
    if (saver!=0 && saver2!=0){
        result1 = ((saver2 / saver) * 100).toFixed(0);
       console.log(result1);
       }
       else{
           result1 = 0;
       }
    const thirdInput12 = document.getElementById('ffthirtyeight') as HTMLInputElement;
    thirdInput12.value = result1.toString();
    



    const fourthval2 = (document.getElementById('ffthirtynine') as HTMLInputElement).value;
    var saver21= parseFloat(fourthval2.replace(/\,/g, ''));
    //const result11=((saver21/saver)*100).toFixed(0)
    var result11;
    if (saver!=0 && saver21!=0){
        result11 = ((saver21 / saver) * 100).toFixed(0);
       console.log(result11);
       }
       else{
           result11 = 0;
       }
    const thirdInput122 = document.getElementById('fffourty') as HTMLInputElement;
    thirdInput122.value = result11.toString();


    const fiveval = (document.getElementById('fffourtyone') as HTMLInputElement).value;
    var savers1= parseFloat(fiveval.replace(/\,/g, ''));
    //const results1=((savers1/saver)*100).toFixed(0)
    var results1;
    if (saver!=0 && savers1!=0){
        results1 = ((savers1 / saver) * 100).toFixed(0);
       console.log(results1);
       }
       else{
           results1 = 0;
       }
    const thirdyolo1 = document.getElementById('fffourtytwo') as HTMLInputElement;
    thirdyolo1.value = results1.toString();


    const fiveval1 = (document.getElementById('fffourtythree') as HTMLInputElement).value;
    var savers2= parseFloat(fiveval1.replace(/\,/g, ''));
   // const results2=((savers2/saver)*100).toFixed(0)
   var results2;
   if (saver!=0 && savers2!=0){
       results2 = ((savers2 / saver) * 100).toFixed(0);
      console.log(results2);
      }
      else{
          results2 = 0;
      }
    const thirdyolo2 = document.getElementById('fffourtyfour') as HTMLInputElement;
    thirdyolo2.value = results2.toString();
  }
  ffqu14(event: any) {
    const firstval = (document.getElementById('fffourtyfive') as HTMLInputElement).value;
    const secondval = (document.getElementById('fffourtysix') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    var result;
    if (saver!=0 && saver1!=0){
        result= ((saver1 / saver) * 100).toFixed(0);
       console.log(result);
       }
       else{
           result = 0;
       }
   // const result = ((saver1 / saver) * 100).toFixed(0);
    // const subt=saver-saver1
    // const roundedResult1 = subt.toFixed(0); // Rounds the result to 2 decimal places
    // const roundedResult = result.toFixed(0); // Rounds the result to 2 decimal places
    
    const thirdInput = document.getElementById('fffourtyseven') as HTMLInputElement;
    thirdInput.value = result.toString();
    // const thirdInput1 = document.getElementById('ffsixtynine') as HTMLInputElement;
    const fourthval = (document.getElementById('fffourtyeight') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
   // const result1=((saver2/saver)*100).toFixed(0)
   var result1;
   if (saver!=0 && saver2!=0){
       result1 = ((saver2 / saver) * 100).toFixed(0);
      console.log(result1);
      }
      else{
          result1 = 0;
      }
    const thirdInput12 = document.getElementById('fffourtynine') as HTMLInputElement;
    thirdInput12.value = result1.toString();
    



    const fourthval2 = (document.getElementById('fffifty') as HTMLInputElement).value;
    var saver21= parseFloat(fourthval2.replace(/\,/g, ''));
   // const result11=((saver21/saver)*100).toFixed(0)
   var result11;
   if (saver!=0 && saver21!=0){
       result11 = ((saver21 / saver) * 100).toFixed(0);
      console.log(result11);
      }
      else{
          result11 = 0;
      }
    const thirdInput122 = document.getElementById('fffiftyone') as HTMLInputElement;
    thirdInput122.value = result11.toString();


    const fiveval = (document.getElementById('fffiftytwo') as HTMLInputElement).value;
    var savers1= parseFloat(fiveval.replace(/\,/g, ''));
   // const results1=((savers1/saver)*100).toFixed(0)
   var results1;
   if (saver!=0 && savers1!=0){
       results1 = ((savers1 / saver) * 100).toFixed(0);
      console.log(results1);
      }
      else{
          results1 = 0;
      }
    const thirdyolo1 = document.getElementById('fffiftythree') as HTMLInputElement;
    thirdyolo1.value = results1.toString();


    const fiveval1 = (document.getElementById('fffiftyfour') as HTMLInputElement).value;
    var savers2= parseFloat(fiveval1.replace(/\,/g, ''));
    //const results2=((savers2/saver)*100).toFixed(0)
    var results2;
   if (saver!=0 && savers2!=0){
       results2 = ((savers2 / saver) * 100).toFixed(0);
      console.log(results2);
      }
      else{
          results2 = 0;
      }
    const thirdyolo2 = document.getElementById('fffiftyfive') as HTMLInputElement;
    thirdyolo2.value = results2.toString();
  }
  ffqu112(event: any) {
    const firstval = (document.getElementById('ffthirtyfour') as HTMLInputElement).value;
    const secondval = (document.getElementById('fffourtyfive') as HTMLInputElement).value;
    var saver = parseFloat(firstval.replace(/\,/g, ''));
    var saver1 = parseFloat(secondval.replace(/\,/g, ''));
    const result = saver1 + saver;
    const result2 = result.toLocaleString('en-IN');
    const thirdInput = document.getElementById('fffiftysix') as HTMLInputElement;
    thirdInput.value = result2.toString();


    const fourthval = (document.getElementById('ffthirtyfive') as HTMLInputElement).value;
    const fourthvall = (document.getElementById('fffourtysix') as HTMLInputElement).value;
    var saver2= parseFloat(fourthval.replace(/\,/g, ''));
    var saver22= parseFloat(fourthvall.replace(/\,/g, ''));
    const result1=saver2 + saver22;
    const result21 = result1.toLocaleString('en-IN');
    const thirdInput12 = document.getElementById('fffiftyseven') as HTMLInputElement;
    thirdInput12.value = result21.toString();
    



    const fourthval2 = (document.getElementById('fffiftysix') as HTMLInputElement).value;
    const fourthvall2 = (document.getElementById('fffiftyseven') as HTMLInputElement).value;
    var saver21= parseFloat(fourthval2.replace(/\,/g, ''));
    var saver212= parseFloat(fourthvall2.replace(/\,/g, ''));
   // const result11=((saver212/saver21)*100).toFixed(0)
   var result11;
   if (saver21!=0 && saver212!=0){
       result11 = ((saver212 / saver21) * 100).toFixed(0);
      console.log(result11);
      }
      else{
          result11 = 0;
      }
    const thirdInput122 = document.getElementById('fffiftyeight') as HTMLInputElement;
    thirdInput122.value = result11.toString();


    const fiveval = (document.getElementById('ffthirtyseven') as HTMLInputElement).value;
    const fivevall = (document.getElementById('fffourtyeight') as HTMLInputElement).value;
    var savers1= parseFloat(fiveval.replace(/\,/g, ''));
    var savers12= parseFloat(fivevall.replace(/\,/g, ''));
    const results1=savers1+savers12
    const results21 = results1.toLocaleString('en-IN');
    const thirdyolo1 = document.getElementById('fffiftynine') as HTMLInputElement;
    thirdyolo1.value = results21.toString();


    const fiveval1 = (document.getElementById('fffiftysix') as HTMLInputElement).value;
    const fiveval121 = (document.getElementById('fffiftynine') as HTMLInputElement).value;
    var savers2= parseFloat(fiveval1.replace(/\,/g, ''));
    var savers231= parseFloat(fiveval121.replace(/\,/g, ''));
   // const results2=((savers231/savers2)*100).toFixed(0)
   var results2;
   if (savers2!=0 && savers231!=0){
       results2 = ((savers231 / savers2) * 100).toFixed(0);
      console.log(results2);
      }
      else{
          results2 = 0;
      }
    const thirdyolo2 = document.getElementById('ffsixty') as HTMLInputElement;
    thirdyolo2.value = results2.toString();

    const sixval = (document.getElementById('ffthirtynine') as HTMLInputElement).value;
    const sixvall = (document.getElementById('fffifty') as HTMLInputElement).value;
    var savers10= parseFloat(sixval.replace(/\,/g, ''));
    var savers120= parseFloat(sixvall.replace(/\,/g, ''));
    const results11=savers10+savers120
    const results211 = results11.toLocaleString('en-IN');
    const thirdyolo11 = document.getElementById('ffsixtyone') as HTMLInputElement;
    thirdyolo11.value = results211.toString();


    const sevenval = (document.getElementById('fffiftysix') as HTMLInputElement).value;
    const sevenval21 = (document.getElementById('ffsixtyone') as HTMLInputElement).value;
    var savere= parseFloat(sevenval.replace(/\,/g, ''));
    var savere31= parseFloat(sevenval21.replace(/\,/g, ''));
    //const results232=((savere31/savere)*100).toFixed(0)
    var results232;
    if (savere!=0 && savere31!=0){
        results232 = ((savere31 / savere) * 100).toFixed(0);
       console.log(results232);
       }
       else{
           results232 = 0;
       }
    const thirdyolo232 = document.getElementById('ffsixtytwo') as HTMLInputElement;
    thirdyolo232.value = results232.toString();

    const eightval = (document.getElementById('fffourtyone') as HTMLInputElement).value;
    const eightval21 = (document.getElementById('fffiftytwo') as HTMLInputElement).value;
    var saverrs= parseFloat(eightval.replace(/\,/g, ''));
    var saverrs31= parseFloat(eightval21.replace(/\,/g, ''));
    const result321=saverrs+saverrs31
    const results213 = result321.toLocaleString('en-IN');
    const thirdyolo96 = document.getElementById('ffsixtythree') as HTMLInputElement;
    thirdyolo96.value = results213.toString();

    
    const nineval = (document.getElementById('fffiftysix') as HTMLInputElement).value;
    const nineval21 = (document.getElementById('ffsixtythree') as HTMLInputElement).value;
    var saverrs1= parseFloat(nineval.replace(/\,/g, ''));
    var saverrs131= parseFloat(nineval21.replace(/\,/g, ''));
    //const result3211=((saverrs131/saverrs1)*100).toFixed(0);
    var result3211;
    if (saverrs1!=0 && saverrs131!=0){
        result3211 = ((saverrs131 / saverrs1) * 100).toFixed(0);
       console.log(result3211);
       }
       else{
           result3211 = 0;
       }
    const thirdyolo961 = document.getElementById('ffsixtyfour') as HTMLInputElement;
    thirdyolo961.value = result3211.toString();


    const tenval = (document.getElementById('fffourtythree') as HTMLInputElement).value;
    const tenval21 = (document.getElementById('fffiftyfour') as HTMLInputElement).value;
    var saverrs2= parseFloat(tenval.replace(/\,/g, ''));
    var saverrs231= parseFloat(tenval21.replace(/\,/g, ''));
    const result3212=saverrs2+saverrs231
    const results32 = result3212.toLocaleString('en-IN');
    const thirdyolo962 = document.getElementById('ffsixtyfive') as HTMLInputElement;
    thirdyolo962.value = results32.toString();


    const elevenval = (document.getElementById('fffiftysix') as HTMLInputElement).value;
    const elevenval21 = (document.getElementById('ffsixtyfive') as HTMLInputElement).value;
    var saverrs3= parseFloat(elevenval.replace(/\,/g, ''));
    var saverrs331= parseFloat(elevenval21.replace(/\,/g, ''));
    var result3213;
    if (saverrs3!=0 && saverrs331!=0){
        result3213 = ((saverrs331 / saverrs3) * 100).toFixed(0);
       console.log(result3213);
       }
       else{
           result3213 = 0;
       }
    //const result3213=((saverrs331/saverrs3)*100).toFixed(0)
    const thirdyolo963 = document.getElementById('ffsixtysix') as HTMLInputElement;
    thirdyolo963.value = result3213.toString();


   
  }
  openuploadimgcompo(ReportId: any, GuidanceNumber: any, OrgId: any, ques: any) {

    const dialogRef = this.dialog.open(UploadevidenceforbrsrComponent, {
  
      autoFocus: false,
  
      data: { ReportId, GuidanceNumber, OrgId, ques },
  
    });
  
  }
}
