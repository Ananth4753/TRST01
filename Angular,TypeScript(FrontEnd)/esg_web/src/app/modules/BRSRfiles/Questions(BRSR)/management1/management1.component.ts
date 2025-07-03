import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { CreatereportforbrsrService } from '../../createreportforbrsr/createreportforbrsr.service';
import { ActivatedRoute } from '@angular/router';
import { SelectbrsrService } from '../../selectbrsr/selectbrsr.service';
import { UploadevidenceforbrsrComponent } from '../uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector: 'app-management1',
    templateUrl: './management1.component.html',
    styleUrls: ['./management1.component.css'],
})
export class Management1Component implements OnInit {
    @Input() pamp: any;
    managementform: FormGroup;
    foods: any;
    val1:any;
    val11:any;
    val2:any;
    fmlife:any;
    reportid:any;
    selectedValue:any;
    initialDraftReport1: any = {};
    orgId:any;
  

    constructor(private fb: FormBuilder,private cs:CreatereportforbrsrService,public AuthService:AuthService,public dialog: MatDialog,private aa: ActivatedRoute,private ss: SelectbrsrService,private is:ImportdisService) {}

    ngOnInit() {
      this.orgId=this.AuthService.user.orgId
        this.reportid = this.aa.snapshot.paramMap.get('reportId');

        this.is.getLookupDetailsByHdrId(37).subscribe((Data) => {
            this.foods = Data;
          });
        this.managementform = this.fb.group({
            one: [''],
            two: [''],
            three: [''],
            four: [''],
            five: [''],
            six: [''],
            seven: [''],
            eight: [''],
            nine: [''],
            ten: [''],
            eleven: [''],
            twelve: [''],
            thirteen: [''],
            fourteen: [''],
            fifteen: [''],
            sixteen: [''],
            seventeen: [''],
            eighteen: [''],
            nineteen: [''],
            twenty: [''],
            twentyone: [''],
            twentytwo: [''],
            twentythree: [''],
            twentyfour: [''],
            twentyfive: [''],
            twentysix: [''],
            twentyseven: [''],
            twentyeight: [''],
            twentynine: [''],
            thirty: [''],
            thirtyone: [''],
            thirtytwo: [''],
            thirtythree: [''],
            thirtyfour: [''],
            thirtyfive: [''],
            thirtysix: [''],
            qual1: [''],
            qual2: [''],
            qual3: [''],
            link1: [''],
            link2: [''],
            link3: [''],
            link4: [''],
            link5: [''],
            link6: [''],
            link7: [''],
            link8: [''],
            link9: [''],
        });

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
              this.managementform.patchValue(this.initialDraftReport1);
              this.managementform.patchValue({
               
    one: this.initialDraftReport1[7]['PolicyQuestion1'],
    two: this.initialDraftReport1[7]['PolicyQuestion2'],
    three: this.initialDraftReport1[7]['PolicyQuestion3'],
    four: this.initialDraftReport1[7]['PolicyQuestion4'],
    five: this.initialDraftReport1[7]['PolicyQuestion5'],
    six: this.initialDraftReport1[7]['PolicyQuestion6'],
    seven: this.initialDraftReport1[7]['PolicyQuestion7'],
    eight: this.initialDraftReport1[7]['PolicyQuestion8'],
    nine: this.initialDraftReport1[7]['PolicyQuestion9'],
    ten: this.initialDraftReport1[7]['PolicyQuestion10'],
    eleven: this.initialDraftReport1[7]['PolicyQuestion11'],
    twelve: this.initialDraftReport1[7]['PolicyQuestion12'],
    thirteen: this.initialDraftReport1[7]['PolicyQuestion13'],
    fourteen: this.initialDraftReport1[7]['PolicyQuestion14'],
    fifteen: this.initialDraftReport1[7]['PolicyQuestion15'],
    sixteen: this.initialDraftReport1[7]['PolicyQuestion16'],
    seventeen: this.initialDraftReport1[7]['PolicyQuestion17'],
    eighteen: this.initialDraftReport1[7]['PolicyQuestion18'],
    nineteen: this.initialDraftReport1[7]['PolicyQuestion19'],
    twenty: this.initialDraftReport1[7]['PolicyQuestion20'],
    twentyone: this.initialDraftReport1[7]['PolicyQuestion21'],
    twentytwo: this.initialDraftReport1[7]['PolicyQuestion22'],
    twentythree: this.initialDraftReport1[7]['PolicyQuestion23'],
    twentyfour: this.initialDraftReport1[7]['PolicyQuestion24'],
    twentyfive: this.initialDraftReport1[7]['PolicyQuestion25'],
    twentysix: this.initialDraftReport1[7]['PolicyQuestion26'],
    twentyseven: this.initialDraftReport1[7]['PolicyQuestion27'],
    twentyeight: this.initialDraftReport1[7]['PolicyQuestion28'],
    twentynine: this.initialDraftReport1[7]['PolicyQuestion29'],
    thirty: this.initialDraftReport1[7]['PolicyQuestion30'],
    thirtyone: this.initialDraftReport1[7]['PolicyQuestion31'],
    thirtytwo: this.initialDraftReport1[7]['PolicyQuestion32'],
    thirtythree: this.initialDraftReport1[7]['PolicyQuestion33'],
    thirtyfour: this.initialDraftReport1[7]['PolicyQuestion34'],
    thirtyfive: this.initialDraftReport1[7]['PolicyQuestion35'],
    thirtysix: this.initialDraftReport1[7]['PolicyQuestion36'],
    qual1: this.initialDraftReport1[7]['PolicyQuestion37'],
    qual2: this.initialDraftReport1[7]['PolicyQuestion38'],
    qual3: this.initialDraftReport1[7]['PolicyQuestion39'],
    link1: this.initialDraftReport1[7]['PolicyQuestion40'],
    link2: this.initialDraftReport1[7]['PolicyQuestion41'],
    link3: this.initialDraftReport1[7]['PolicyQuestion42'],
    link4: this.initialDraftReport1[7]['PolicyQuestion43'],
    link5: this.initialDraftReport1[7]['PolicyQuestion44'],
    link6: this.initialDraftReport1[7]['PolicyQuestion45'],
    link7: this.initialDraftReport1[7]['PolicyQuestion46'],
    link8: this.initialDraftReport1[7]['PolicyQuestion47'],
    link9: this.initialDraftReport1[7]['PolicyQuestion48']
              });
          
            }
          });
    }

    onSave() {
    var PolicyQuestion1 = this.managementform.get('one').value;
    var  PolicyQuestion2 = this.managementform.get('two').value;
    var  PolicyQuestion3 = this.managementform.get('three').value;
    var  PolicyQuestion4 = this.managementform.get('four').value;
    var  PolicyQuestion5 = this.managementform.get('five').value;
    var  PolicyQuestion6 = this.managementform.get('six').value;
    var  PolicyQuestion7 = this.managementform.get('seven').value;
    var  PolicyQuestion8 = this.managementform.get('eight').value;
    var  PolicyQuestion9 = this.managementform.get('nine').value;
    var PolicyQuestion10 = this.managementform.get('ten').value;
    var PolicyQuestion11 = this.managementform.get('eleven').value;
    var PolicyQuestion12 = this.managementform.get('twelve').value;
    var PolicyQuestion13 = this.managementform.get('thirteen').value;
    var PolicyQuestion14 = this.managementform.get('fourteen').value;
    var PolicyQuestion15 = this.managementform.get('fifteen').value;
    var PolicyQuestion16 = this.managementform.get('sixteen').value;
    var PolicyQuestion17 = this.managementform.get('seventeen').value;
    var PolicyQuestion18 = this.managementform.get('eighteen').value;
    var PolicyQuestion19 = this.managementform.get('nineteen').value;
    var PolicyQuestion20 = this.managementform.get('twenty').value;
    var PolicyQuestion21 = this.managementform.get('twentyone').value;
    var PolicyQuestion22 = this.managementform.get('twentytwo').value;
    var PolicyQuestion23 = this.managementform.get('twentythree').value;
    var PolicyQuestion24 = this.managementform.get('twentyfour').value;
    var PolicyQuestion25 = this.managementform.get('twentyfive').value;
    var PolicyQuestion26 = this.managementform.get('twentysix').value;
    var PolicyQuestion27 = this.managementform.get('twentyseven').value;
    var PolicyQuestion28 = this.managementform.get('twentyeight').value;
    var  PolicyQuestion29 = this.managementform.get('twentynine').value;
    var  PolicyQuestion30 = this.managementform.get('thirty').value;
    var  PolicyQuestion31 = this.managementform.get('thirtyone').value;
    var  PolicyQuestion32 = this.managementform.get('thirtytwo').value;
    var  PolicyQuestion33 = this.managementform.get('thirtythree').value;
    var  PolicyQuestion34 = this.managementform.get('thirtyfour').value;
    var  PolicyQuestion35= this.managementform.get('thirtyfive').value;
    var  PolicyQuestion36= this.managementform.get('thirtysix').value;
    var  PolicyQuestion37= this.managementform.get('qual1').value;
    var PolicyQuestion38= this.managementform.get('qual2').value;
    var PolicyQuestion39 = this.managementform.get('qual3').value;
    var PolicyQuestion40 = this.managementform.get('link1').value;
    var PolicyQuestion41 = this.managementform.get('link2').value;
    var PolicyQuestion42 = this.managementform.get('link3').value;
    var PolicyQuestion43 = this.managementform.get('link4').value;
    var PolicyQuestion44 = this.managementform.get('link5').value;
    var PolicyQuestion45 = this.managementform.get('link6').value;
    var PolicyQuestion46 = this.managementform.get('link7').value;
    var PolicyQuestion47 = this.managementform.get('link8').value;
    var PolicyQuestion48 = this.managementform.get('link9').value;
  
        
        this.initialDraftReport1[7] = {PolicyQuestion1,PolicyQuestion2,PolicyQuestion3,PolicyQuestion4,PolicyQuestion5,PolicyQuestion6,PolicyQuestion7,PolicyQuestion8,PolicyQuestion9,PolicyQuestion10,PolicyQuestion11,PolicyQuestion12,PolicyQuestion13,PolicyQuestion14,PolicyQuestion15,PolicyQuestion16,PolicyQuestion17,PolicyQuestion18,PolicyQuestion19,PolicyQuestion20,PolicyQuestion21,PolicyQuestion22,PolicyQuestion23,PolicyQuestion24,
          PolicyQuestion25,PolicyQuestion26,PolicyQuestion27,PolicyQuestion28,PolicyQuestion29,PolicyQuestion30,PolicyQuestion31,PolicyQuestion32,PolicyQuestion33,PolicyQuestion34,PolicyQuestion35,PolicyQuestion36,PolicyQuestion37,PolicyQuestion38,PolicyQuestion39,PolicyQuestion40,PolicyQuestion41,PolicyQuestion42,PolicyQuestion43,PolicyQuestion44,PolicyQuestion45,PolicyQuestion46,PolicyQuestion47,PolicyQuestion48
        }
        console.log(this.initialDraftReport1);
        const currentInitialDraftReport = this.initialDraftReport1;
        this.ss.liquid[7]=currentInitialDraftReport[7];
        console.log(currentInitialDraftReport);
        console.log(this.ss.liquid[7])
        console.log(this.ss.liquid);
      
        this.ss.GetBRSR_ReportGenerationByReportId(this.reportid).subscribe((data) => {
          const reportdata = data[0];
          console.log(JSON.parse(reportdata.InitialDraftReport));
          console.log(this.ss.liquid[7])
         var init=JSON.parse(reportdata.InitialDraftReport);
         if(init!=null){
         init[7]=this.ss.liquid[7]
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
         init[7]=this.ss.liquid[7]
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
