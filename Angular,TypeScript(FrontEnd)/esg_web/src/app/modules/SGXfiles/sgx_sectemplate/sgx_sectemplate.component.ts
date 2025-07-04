import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sgx_templateoneComponent } from '../sgx_templateone/sgx_templateone.component';
import { Sgx_templatetwoComponent } from '../sgx_templatetwo/sgx_templatetwo.component';
import { Sgx_templatethreeComponent } from '../sgx_templatethree/sgx_templatethree.component';
import { Sgx_templatefourComponent } from '../sgx_templatefour/sgx_templatefour.component';
import { Sgx_templatefiveComponent } from '../sgx_templatefive/sgx_templatefive.component';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { Sgx_imagereportService } from '../sgx_imagereport/sgx_imagereport.service';
import { CreatereportforsgxService } from '../createreportforsgx/createreportforsgx.service';
import { SelectsgxService } from '../selectsgx/selectsgx.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportgenerationService } from 'app/services/reportgeneration.service';


@Component({
  selector: 'app-sgx_sectemplate',
  templateUrl: './sgx_sectemplate.component.html',
  styleUrls: ['./sgx_sectemplate.component.scss']
})
export class Sgx_sectemplateComponent implements OnInit {
  reportid: any;
  reportname: any;
  reportstartdate: any;
  reportenddate: any;
  color: any;
  Stage: any;
  dynamicComponent: any;
  dynamicComponent1: any;
  dynamicComponent2: any;
  dynamicComponent3: any;
  dynamicComponent4: any;
  Reportpicform: FormGroup;
  fragment: string;
  selectedimage: any;
  imageUrl: any;
  assignnuo: any;
  one = '1';
  two = '2';
  three = '3';
  four = '4';
  five = '5';
  constructor(
      private route: ActivatedRoute,
      private aa: ActivatedRoute,
      private us: UpdatereportService,
      private router: Router,
      private is: Sgx_imagereportService,
      private fb: FormBuilder,
      private sis: SelectsgxService,
      private crs: CreatereportforsgxService,
      private st: ReportgenerationService
  ) {}

  ngOnInit() {
      this.reportid = this.aa.snapshot.paramMap.get('reportId');
      this.us.getSGXReportDetailsByReportId(this.reportid).subscribe((res) => {
          //console.log(res);
          this.reportname = res[0].ReportName;
          this.reportstartdate = res[0].StartDate;
          this.reportenddate = res[0].EndDate;
      });
      (this.dynamicComponent = Sgx_templateoneComponent),
          (this.dynamicComponent1 = Sgx_templatetwoComponent),
          (this.dynamicComponent2 = Sgx_templatethreeComponent);
      this.dynamicComponent3 = Sgx_templatefourComponent;
      this.dynamicComponent4 = Sgx_templatefiveComponent;
      this.Reportpicform = this.fb.group({
          Picture: ['', Validators.required],
      });
   this.imageUrl=this.one;
  }

  updatecolor(event) {
      document.documentElement.style.setProperty('--wbColor', '#1c75bc');
      document.documentElement.style.setProperty('--wbColor1', 'white');
      document.documentElement.style.setProperty('--wbColor2', 'white');
      document.documentElement.style.setProperty('--wbColor3', 'white');
      document.documentElement.style.setProperty('--wbColor4', 'white');
      event = this.one;
      this.imageUrl = event;
      console.log(event);
  }
  updatecolor1(event) {
      document.documentElement.style.setProperty('--wbColor', 'white');
      document.documentElement.style.setProperty('--wbColor1', '#1c75bc');
      document.documentElement.style.setProperty('--wbColor2', 'white');
      document.documentElement.style.setProperty('--wbColor3', 'white');
      document.documentElement.style.setProperty('--wbColor4', 'white');
      event = this.two;
      this.imageUrl = event;
      console.log(event);
  }
  updatecolor2(event) {
      document.documentElement.style.setProperty('--wbColor', 'white');
      document.documentElement.style.setProperty('--wbColor1', 'white');
      document.documentElement.style.setProperty('--wbColor2', '#1c75bc');
      document.documentElement.style.setProperty('--wbColor3', 'white');
      document.documentElement.style.setProperty('--wbColor4', 'white');
      event = this.three;
      this.imageUrl = event;
      console.log(event);
  }
  updatecolor3(event) {
      document.documentElement.style.setProperty('--wbColor', 'white');
      document.documentElement.style.setProperty('--wbColor1', 'white');
      document.documentElement.style.setProperty('--wbColor2', 'white');
      document.documentElement.style.setProperty('--wbColor3', '#1c75bc');
      document.documentElement.style.setProperty('--wbColor4', 'white');
      event = this.four;
      this.imageUrl = event;
      console.log(event);
  }
  updatecolor4(event) {
      document.documentElement.style.setProperty('--wbColor', 'white');
      document.documentElement.style.setProperty('--wbColor1', 'white');
      document.documentElement.style.setProperty('--wbColor2', 'white');
      document.documentElement.style.setProperty('--wbColor3', 'white');
      document.documentElement.style.setProperty('--wbColor4', '#1c75bc');
      event = this.five;
      this.imageUrl = event;
      console.log(event);
  }
  back() {
      this.Stage = '/sgx_imagereport';
      var obj = {
          ReportId: this.reportid,
          Stage: this.Stage,
      };
      this.st.updateSGXStage(obj).subscribe((data) => {
          this.router.navigate([`${this.Stage}/${this.reportid}`]);
      });
      //this.router.navigate(['/imagereport', this.reportid]);
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
                  CoverPageLayout: this.imageUrl,
                  DesignTemplate: reportdata.DesignTemplate,
                  IsActive: reportdata.IsActive,
                  Introduction: reportdata.Introduction,
                  Messagefromceo: reportdata.Messagefromceo,
                  aboutthisreport: reportdata.aboutthisreport,
                  keyhighlights: reportdata.keyhighlights,
                  vision: reportdata.vision,
                  Logo: reportdata.Logo,
                  FinalDraftGuidance:JSON.parse(reportdata.FinalDraftGuidance),
                  IsValidate: reportdata.IsValidate,
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
          }); // this.router.navigate(['/secdesign', this.reportid]);
      this.Stage = '/sgx_secdesign';
      console.log(this.Stage);

      var obj = {
          ReportId: this.reportid,
          Stage: this.Stage,
      };
      this.st.updateSGXStage(obj).subscribe((data) => {
          this.router.navigate([`${this.Stage}/${this.reportid}`]);
      });
  }
}
