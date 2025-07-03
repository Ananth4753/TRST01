import { Component, OnInit,Input } from '@angular/core';
import { SelectbrsrService } from './selectbrsr.service';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';
import { AuthService } from 'app/core/auth/auth.service';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { CreatereportforbrsrService } from '../createreportforbrsr/createreportforbrsr.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'app/app.service';
import { TreeviewItem,TreeviewConfig,TreeviewComponent } from '../../../../../projects/ngx-treeview/src/public-api';
import {
    FormControl,
    FormGroup,
    Validators,
    FormBuilder,
    FormArray,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { values } from 'lodash';
import { yearsPerPage } from '@angular/material/datepicker';
import { toTypeScript } from '@angular/compiler';
import { GlobalvariableService } from 'app/modules/services/globalvariable.service';
import {ReportgenerationService} from 'app/services/reportgeneration.service';

@Component({
  selector: 'app-selectbrsr',
  templateUrl: './selectbrsr.component.html',
  styleUrls: ['./selectbrsr.component.scss']
})
export class SelectbrsrComponent implements OnInit {
  items: TreeviewItem[];
    values: number[];
    config = TreeviewConfig.create({
      hasAllCheckBox: true,
      hasFilter: true,
      hasCollapseExpand: true,
      decoupleChildFromParent: false,
      maxHeight: 400
    });
    morningSlotArr: any = [];
   
    cardMorningicon: string = 'fa fa-plus';
    cardMorning: boolean = false;
    loading = true;
  gdform:FormGroup;
     selectedTemplateMenuIds = [];
     guffy=[];
     hovereach: any;
    templatemenu: any;
    templatemenubyId: any;
    templatedata: any;
    templateitemdata: any;
    templatesubmenuitemdata: any;
    checkboxes: any[];
    displaydata: boolean = false;
    name: string;
    msg:any;
    msg1:any;
    arre:any;
    selectdisform: FormGroup;
    managementform:FormGroup;
    reportid: any;
    reportname: any;
    alpha:any
    beta:any;
    leng:any;
    gamma:any;
    reportcheck:any;
    reportstartdate: any;
    reportenddate: any;
    Stage:any;
    entity:boolean=false;
    org:boolean=false;
    ope:boolean=false;
    emp:boolean=false;
    tadc:boolean=false;
    csrd:boolean=false;
    glao:boolean=false;
    holdingandall:boolean=false;
    pamp:boolean=false;
    finalobj: any = {};
    princi1e:boolean=false;
    princi1l:boolean=false;
    princi2e:boolean=false;
    princi2l:boolean=false;
    princi3e:boolean=false;
    princi3l:boolean=false;
    princi4e:boolean=false;
    princi4l:boolean=false;
    princi5e:boolean=false;
    princi5l:boolean=false;
    princi6e:boolean=false;
    princi6l:boolean=false;
    princi7e:boolean=false;
    princi7l:boolean=false;
    princi8e:boolean=false;
    princi8l:boolean=false;
    princi9e:boolean=false;
    princi9l:boolean=false;
    selectform:FormGroup
  codeval: any;
  listofarrayvalues: any;
  constructor(
    private service: AppService,
    private ss: SelectbrsrService,
    private cs: CreatereportforbrsrService,
    private us: UpdatereportService,
    private router: Router,
    private ds: DashboardService,
    private AuthService: AuthService,
    private fb: FormBuilder,
    private aa: ActivatedRoute,
    private gs:GlobalvariableService,
    private st: ReportgenerationService,
  ) { }
  treeviewitem = [];

  ngOnInit() {
    this.gdform = this.fb.group({
      detailsofen1: [''],
      detailsofen2: [''],
      detailsofen3:[],
      detailsofen4: [],
      detailsofen5: [],
      detailsofen6: [''],
      detailsofen7: [''],
      detailsofen8:[],
      detailsofen9: [],
      detailsofen10: [],
      detailsofen11: [''],
      detailsofen12: [''],
      detailsofen13:[],
      prodserv1:[],
      prodserv2:[],
      ope1:[],
      ope2:[],
      emp1:[],
      emp2:[],
      emp3:[],
      emp4:[],
      hold1:[],
      csrd1:[],
      csrd2:[],
      csrd3:[],
      tadc1:[],
      tadc2:[],
    })
    this.managementform = this.fb.group({
      policyandman1: [''],
      policyandman2: [''],
      policyandman3: [''],
      policyandman4: [''],
      policyandman5: [''],
      policyandman6: [''],
     })
      this.treeviewitem = [];
      this.reportid = this.aa.snapshot.paramMap.get('reportId');
      this.treeviewitem=this.service.getTreeViewData1(this.reportid);
  
      this.selectform = this.fb.group({
          check: ['',Validators.required],
        });
      this.reportid = this.aa.snapshot.paramMap.get('reportId');
      this.cs.getReportGenerationByReportId(this.reportid).subscribe((res) => {
          this.reportname = res[0].ReportName;
          this.reportstartdate = res[0].StartDate;
          this.reportenddate = res[0].EndDate;
      });

   
      this.ss.getTemplateSubMenuDetails().subscribe((data) => {
          this.templatedata = data;
      });
     
  }
  onFilterChange(value:string):void{
      console.log('filter:',value);
      
  }
  onselectchange(value:string){
      console.log(value);
      this.arre=value
      return this.arre
  }
  hoverfunc(event) {
    this.hovereach = event.target.innerText;
}
  SaveAndNext(){
      this.Stage = '/brsr_imagereport'
     var obj = {
       "ReportId" : this.reportid,
       "Stage":this.Stage
     }
      this.st.updateBRSRStage(obj).subscribe((data1)=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
      })
    //this.router.navigate([`/in-progress`]);
  }
  back() {
    this.Stage = '/createreportforbrsr'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
     this.st.updateBRSRStage(obj).subscribe((data1)=>{
       this.router.navigate([`${this.Stage}`]);
     })
  }
  Test(item)
  {
    this.codeval=item.target.innerText
    this.showguidance(this.codeval)
  }
  showguidance(TemplateSubMenuName){
 this.ss.getDescriptionByScreenName(TemplateSubMenuName).subscribe((data)=>{
  if (data[0]['TemplateSubMenuName']=='Details of the listed entity'){
    this.org=true;
  }
  else {
    this.org=false;
  }
   if (data[0]['TemplateSubMenuName']=='Products or services'){
     this.entity  = true;
   }
   else {
     this.entity = false;
   }
   if (data[0]['TemplateSubMenuName']=='Operations'){
    this.ope  = true;
  }
  else {
    this.ope = false;
  }
  if (data[0]['TemplateSubMenuName']=='Employees'){
    this.emp  = true;
  }
  else {
    this.emp = false;
  }
  if (data[0]['TemplateSubMenuName']=='Holding, Subsidiary and Associate Companies (including joint ventures)'){
    this.holdingandall  = true;
  }
  else {
    this.holdingandall = false;
  }
  if (data[0]['TemplateSubMenuName']=='CSR Details'){
    this.csrd  = true;
  }
  else {
    this.csrd = false;
  }
  if (data[0]['TemplateSubMenuName']=='Transparency and Disclosures Compliances'){
    this.tadc  = true;
  }
  else {
    this.tadc = false;
  }
  if (data[0]['TemplateSubMenuName']=='Policy and management processes'){
    this.pamp  = true;
  }
  else {
    this.pamp = false;
  }
  if (data[0]['TemplateSubMenuName']=='Governance, leadership and oversight'){
    this.glao  = true;
  }
  else {
    this.glao = false;
  }
  if (data[0]['TemplateSubMenuName']=='P1 Essential Indicators'){
    this.princi1e  = true;
  }
  else {
    this.princi1e = false;
  }
  if (data[0]['TemplateSubMenuName']=='P1 Leadership Indicators'){
    this.princi1l  = true;
  }
  else {
    this.princi1l = false;
  }
  if (data[0]['TemplateSubMenuName']=='P2 Essential Indicators' ){
    this.princi2e  = true;
  }
  else {
    this.princi2e = false;
  }
  if (data[0]['TemplateSubMenuName']=='P2 Leadership Indicators'){
    this.princi2l  = true;
  }
  else {
    this.princi2l = false;
  }
  if (data[0]['TemplateSubMenuName']=='P3 Essential Indicators'){
    this.princi3e  = true;
  }
  else {
    this.princi3e = false;
  }
  if (data[0]['TemplateSubMenuName']=='P3 Leadership Indicators'){
    this.princi3l  = true;
  }
  else {
    this.princi3l = false;
  }
  if (data[0]['TemplateSubMenuName']=='P4 Essential Indicators'){
    this.princi4e  = true;
  }
  else {
    this.princi4e = false;
  }
  if (data[0]['TemplateSubMenuName']=='P4 Leadership Indicators'){
    this.princi4l  = true;
  }
  else {
    this.princi4l = false;
  }
  if (data[0]['TemplateSubMenuName']=='P5 Essential Indicators'){
    this.princi5e  = true;
  }
  else {
    this.princi5e = false;
  }
  if (data[0]['TemplateSubMenuName']=='P5 Leadership Indicators'){
    this.princi5l  = true;
  }
  else {
    this.princi5l = false;
  }
  if (data[0]['TemplateSubMenuName']=='P6 Essential Indicators'){
    this.princi6e  = true;
  }
  else {
    this.princi6e = false;
  }
  if (data[0]['TemplateSubMenuName']=='P6 Leadership Indicators'){
    this.princi6l  = true;
  }
  else {
    this.princi6l = false;
  }
  if (data[0]['TemplateSubMenuName']=='P7 Essential Indicators'){
    this.princi7e  = true;
  }
  else {
    this.princi7e = false;
  }
  if (data[0]['TemplateSubMenuName']=='P7 Leadership Indicators'){
    this.princi7l  = true;
  }
  else {
    this.princi7l = false;
  }
  if (data[0]['TemplateSubMenuName']=='P8 Essential Indicators'){
    this.princi8e  = true;
  }
  else {
    this.princi8e = false;
  }
  if (data[0]['TemplateSubMenuName']=='P8 Leadership Indicators'){
    this.princi8l  = true;
  }
  else {
    this.princi8l = false;
  }
  if (data[0]['TemplateSubMenuName']=='P9 Essential Indicators'){
    this.princi9e = true;
  }
  else {
    this.princi9e = false;
  }
  if (data[0]['TemplateSubMenuName']=='P9 Leadership Indicators'){
    this.princi9l  = true;
  }
  else {
    this.princi9l = false;
  }
 })
 this.templateitemdata=true;
  }
}


