import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brsr_templateoneComponent } from '../brsr_templateone/brsr_templateone.component';
import { Brsr_templatetwoComponent } from '../brsr_templatetwo/brsr_templatetwo.component';
import { Brsr_templatethreeComponent } from '../brsr_templatethree/brsr_templatethree.component';
import { Brsr_templatefourComponent } from '../brsr_templatefour/brsr_templatefour.component';
import { Brsr_templatefiveComponent } from '../brsr_templatefive/brsr_templatefive.component';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { Brsr_imagereportService } from '../brsr_imagereport/brsr_imagereport.service';
import { CreatereportforbrsrService } from '../createreportforbrsr/createreportforbrsr.service';
import { SelectbrsrService } from '../selectbrsr/selectbrsr.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportgenerationService } from 'app/services/reportgeneration.service';

@Component({
  selector: 'app-brsr_sectemplate',
  templateUrl: './brsr_sectemplate.component.html',
  styleUrls: ['./brsr_sectemplate.component.scss']
})
export class Brsr_sectemplateComponent implements OnInit {
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
      private is: Brsr_imagereportService,
      private fb: FormBuilder,
      private sis: SelectbrsrService,
      private crs: CreatereportforbrsrService,
      private st: ReportgenerationService
  ) {}

  ngOnInit() {
      this.reportid = this.aa.snapshot.paramMap.get('reportId');
      this.us.getBRSRReportDetailsByReportId(this.reportid).subscribe((res) => {
          //console.log(res);
          this.reportname = res[0].ReportName;
          this.reportstartdate = res[0].StartDate;
          this.reportenddate = res[0].EndDate;
      });
      (this.dynamicComponent = Brsr_templateoneComponent),
          (this.dynamicComponent1 = Brsr_templatetwoComponent),
          (this.dynamicComponent2 = Brsr_templatethreeComponent);
      this.dynamicComponent3 = Brsr_templatefourComponent;
      this.dynamicComponent4 = Brsr_templatefiveComponent;
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
      this.Stage = '/brsr_imagereport';
      var obj = {
          ReportId: this.reportid,
          Stage: this.Stage,
      };
      this.st.updateBRSRStage(obj).subscribe((data) => {
          this.router.navigate([`${this.Stage}/${this.reportid}`]);
      });
      //this.router.navigate(['/imagereport', this.reportid]);
  }
  next() {
      this.is
          .getBRSRFinalReportDetailsByReportId(this.reportid)
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

              this.is.createBRSRFinalReport(selectedboxes).subscribe((data) => {
                  console.log(data);
              });
          }); // this.router.navigate(['/secdesign', this.reportid]);
      this.Stage = '/brsr_secdesign';
      console.log(this.Stage);

      var obj = {
          ReportId: this.reportid,
          Stage: this.Stage,
      };
      this.st.updateBRSRStage(obj).subscribe((data) => {
          this.router.navigate([`${this.Stage}/${this.reportid}`]);
      });
  }
}
