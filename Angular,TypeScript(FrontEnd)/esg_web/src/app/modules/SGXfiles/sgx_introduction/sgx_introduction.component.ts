import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { Sgx_imagereportService } from '../sgx_imagereport/sgx_imagereport.service';
import * as Grammarly from '@grammarly/editor-sdk';
import { ReportgenerationService } from 'app/services/reportgeneration.service';

@Component({
  selector: 'app-sgx_introduction',
  templateUrl: './sgx_introduction.component.html',
  styleUrls: ['./sgx_introduction.component.scss']
})
export class Sgx_introductionComponent implements OnInit {
  reportid: any;
  reportname: any;
  reportstartdate: any;
  reportenddate: any;
  reso: any;
  Stage: any;
  Introform: FormGroup;
  introinfo: any;
  messageinfo: any;
  aboutinfo: any;
  keyhigh: any;
  vision: any;
  constructor(
      private route: ActivatedRoute,
      private aa: ActivatedRoute,
      private us: UpdatereportService,
      private router: Router,
      private fb: FormBuilder,
      private is: Sgx_imagereportService,
      private st: ReportgenerationService
  ) {}

  ngOnInit() {
      async function initializeGrammarly() {
          try {
              await Grammarly.init('client_Es7CWDPreL6MsVEx1EvCir');
              console.log('Grammarly initialized successfully.');
              // You can proceed with using Grammarly services here
          } catch (error) {
              console.error('Error initializing Grammarly:', error);
          }
      }
      initializeGrammarly();
      this.Introform = this.fb.group({
          Introduction: ['', Validators.required],
          Messagefromceo: [''],
          aboutthisreport: [''],
          keyhighlights: [''],
          vision: [''],
      });
      this.reportid = this.aa.snapshot.paramMap.get('reportId');
      this.us.getSGXReportDetailsByReportId(this.reportid).subscribe((res) => {
          //console.log(res);
          this.reportname = res[0].ReportName;
          this.reportstartdate = res[0].StartDate;
          this.reportenddate = res[0].EndDate;
      });
      this.is
          .getSGXFinalReportDetailsByReportId(this.reportid)
          .subscribe((Data) => {
              console.log(Data[0]['Introduction']);
              this.introinfo = Data[0]['Introduction'];
              this.messageinfo = Data[0]['Messagefromceo'];
              this.aboutinfo = Data[0]['aboutthisreport'];
              this.keyhigh = Data[0]['keyhighlights'];
              this.vision = Data[0]['vision'];
              this.Introform.patchValue({
                Introduction: this.introinfo,
                Messagefromceo: this.messageinfo,
                aboutthisreport: this.aboutinfo,
                keyhighlights: this.keyhigh,
                vision: this.vision
            });
          });
  }
  next() {
      this.is
          .getSGXFinalReportDetailsByReportId(this.reportid)
          .subscribe((data) => {
              const reportdata = data[0];
              console.log(reportdata);
              const selectedboxes: any = {
                  Id: reportdata.Id,
                  ReportId: this.reportid,
                  ReportName: reportdata.ReportName,
                  StartDate: reportdata.StartDate,
                  EndDate: reportdata.EndDate,
                  CoverPageImage: reportdata.CoverPageImage,
                  CoverPageLayout: reportdata.CoverPageLayout,
                  DesignTemplate: reportdata.DesignTemplate,
                  Logo: reportdata.Logo,
                  Introduction: this.Introform.get('Introduction').value,
                  Messagefromceo: this.Introform.get('Messagefromceo').value,
                  aboutthisreport:
                      this.Introform.get('aboutthisreport').value,
                  keyhighlights: this.Introform.get('keyhighlights').value,
                  vision: this.Introform.get('vision').value,
                  IsActive: reportdata.IsActive,
                  FinalDraftGuidance:reportdata.FinalDraftGuidance,
                  Settings: 0,
                  UpdatedByUserId: reportdata.UpdatedByUserId,
                  UpdatedDate: reportdata.UpdatedDate,
                  CreatedByUserId: reportdata.CreatedByUserId,
                  CreatedDate: reportdata.CreatedDate,
                  Reportpicbase: reportdata.Reportpicbase,
              };
              console.log(selectedboxes);

              this.is.createSGXFinalReport(selectedboxes).subscribe((data) => {
                  console.log(data);
              });
          });
      this.Stage = '/sgx_settingcomp';
      var obj = {
          ReportId: this.reportid,
          Stage: this.Stage,
      };
      this.st.updateSGXStage(obj).subscribe((data) => {
          this.router.navigate([`${this.Stage}/${this.reportid}`]);
      });
  }
  back() {
      this.Stage = '/sgx_uploadlogo';
      var obj = {
          ReportId: this.reportid,
          Stage: this.Stage,
      };
      this.st.updateSGXStage(obj).subscribe((data) => {
          this.router.navigate([`${this.Stage}/${this.reportid}`]);
      });
      // this.router.navigate([`/sectemplate`,this.reportid]);
  }
  design() {
      this.Stage = '/sgx_secdesign';
      var obj = {
          ReportId: this.reportid,
          Stage: this.Stage,
      };
      this.st.updateSGXStage(obj).subscribe((data) => {
          this.router.navigate([`${this.Stage}/${this.reportid}`]);
      });
  }
  layout() {
      this.Stage = '/sgx_sectemplate';
      var obj = {
          ReportId: this.reportid,
          Stage: this.Stage,
      };
      this.st.updateSGXStage(obj).subscribe((data) => {
          this.router.navigate([`${this.Stage}/${this.reportid}`]);
      });
  }
  cover() {
      this.Stage = '/sgx_imagereport';
      var obj = {
          ReportId: this.reportid,
          Stage: this.Stage,
      };
      this.st.updateSGXStage(obj).subscribe((data) => {
          this.router.navigate([`${this.Stage}/${this.reportid}`]);
      });
  }
}
