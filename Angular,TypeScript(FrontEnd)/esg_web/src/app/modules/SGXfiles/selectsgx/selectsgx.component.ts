import { Component, OnInit,Input } from '@angular/core';
import { SelectsgxService } from './selectsgx.service';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';
import { AuthService } from 'app/core/auth/auth.service';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
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
import { CreatereportforsgxService } from '../createreportforsgx/createreportforsgx.service';

@Component({
  selector: 'app-selectsgx',
  templateUrl: './selectsgx.component.html',
  styleUrls: ['./selectsgx.component.scss']
})
export class SelectsgxComponent implements OnInit {
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
  envi4:boolean=false;
  envi1:boolean=false;
  envi2:boolean=false;
  envi3:boolean=false;
  envi7:boolean=false;
  envi5:boolean=false;
  envi6:boolean=false;
  soc2:boolean=false;
  soc1:boolean=false;
  finalobj: any = {};
  soc3:boolean=false;
  soc4:boolean=false;
  soc5:boolean=false;
  soc6:boolean=false;
  soc7:boolean=false;
  soc8:boolean=false;
  soc9:boolean=false;
  soc10:boolean=false;
  soc11:boolean=false;
  soc12:boolean=false;
  gov1:boolean=false;
  gov2:boolean=false;
  gov3:boolean=false;
  gov4:boolean=false;
  gov5:boolean=false;
  gov6:boolean=false;
  gov7:boolean=false;
  gov8:boolean=false;
  gov9:boolean=false;
  listtofarrayvalues:any;
  selectform:FormGroup
codeval: any;
guidance: any;
description: any;
constructor(
  private service: AppService,
  private ss: SelectsgxService,
  private cs: CreatereportforsgxService,
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
    this.treeviewitem=this.service.getTreeViewData2(this.reportid);

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
    this.Stage = '/sgx_imagereport'
   var obj = {
     "ReportId" : this.reportid,
     "Stage":this.Stage
   }
    this.st.updateSGXStage(obj).subscribe((data1)=>{
      this.router.navigate([`${this.Stage}/${this.reportid}`]);
    })
 // this.router.navigate([`/in-progress`]);
}

back() {
  this.Stage = '/createreportforsgx'
  var obj = {
    "ReportId" : this.reportid,
    "Stage":this.Stage
  }
   this.st.updateSGXStage(obj).subscribe((data1)=>{
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
if (data[0]['TemplateSubMenuName']=='SGX 101 - 1 Absolute emissions'){
  this.envi1=true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.envi1=false;
}
 if (data[0]['TemplateSubMenuName']=='SGX 101 - 2 Emission intensities'){
   this.envi2  = true;
   this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
 }
 else {
   this.envi2 = false;
 }
 if (data[0]['TemplateSubMenuName']=='SGX 102 - 1 Total energy consumption'){
  this.envi3  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.envi3 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 102 - 2 Energy consumption intensity'){
  this.envi4  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.envi4 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 103 - 1 Total water consumption'){
  this.envi5  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.envi5 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 103 - 2 Water consumption intensity'){
  this.envi6  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.envi6 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 104 - 1 Total waste generated'){
  this.envi7  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.envi7 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 201 - 1 Percentage of current employees by gender'){
  this.soc1  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.soc1 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 201 - 2 New hires and turnover by gender'){
  this.soc2  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.soc2 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 202 - 1 Current employees by age groups'){
  this.soc3  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.soc3 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 202 - 2 New hires and turnover by age groups'){
  this.soc4  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.soc4 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 203 - 1 Total turnover' ){
  this.soc5  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.soc5 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 203 - 2 Total number of employees'){
  this.soc6  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.soc6 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 204 - 1 Average training hours per employee'){
  this.soc7  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.soc7 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 204 - 2 Average training hours per employee by gender'){
  this.soc8  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.soc8 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 205 - 1 Fatalities'){
  this.soc9  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.soc9 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 205 - 2 High-consequence injuries'){
  this.soc10  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.soc10 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 205 - 3 Recordable injuries'){
  this.soc11  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.soc11 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 205 - 4 Recordable work-related ill health cases'){
  this.soc12  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.soc12 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 301 - 1 Board Independence'){
  this.gov1  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.gov1 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 301 - 2 Women on the board'){
  this.gov2  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.gov2 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 302 - 1 Women in the management team'){
  this.gov3  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.gov3 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 303 - 1 Anti-Corruption Disclosures'){
  this.gov4  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.gov4 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 303 - 2 Anti-corruption training for employees'){
  this.gov5  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.gov5 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 304 - 1 List of relevant certifications'){
  this.gov6  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.gov6 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 305 - 1 Board Independence'){
  this.gov7 = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.gov7 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 305 - 1 Alignment with frameworks and disclosure practices'){
  this.gov8  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.gov8 = false;
}
if (data[0]['TemplateSubMenuName']=='SGX 306 - 1 Assurance of sustainability report'){
  this.gov9  = true;
  this.ss.GetSGXGuidance(TemplateSubMenuName).subscribe((Data)=>{
    this.guidance=Data[0]['Guidance'];
    this.description=Data[0]['Description'];
  })
}
else {
  this.gov9 = false;
}
})
this.templateitemdata=true;
}
}



