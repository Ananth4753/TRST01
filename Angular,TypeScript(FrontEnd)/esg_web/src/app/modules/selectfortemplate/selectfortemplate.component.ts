import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { AuthService } from 'app/core/auth/auth.service';
import { UpdatereportService } from '../updatereport/updatereport.service';
import { CreatereportService } from '../createreport/createreport.service';
import { SelectdisService } from '../selectdis/selectdis.service';
import { SelectfortemplateService } from './selectfortemplate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'app/app.service';
import { TreeviewItem, TreeviewConfig,TreeviewComponent }  from '../../../../projects/ngx-treeview/src/public-api';
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

@Component({
  selector: 'app-selectfortemplate',
  templateUrl: './selectfortemplate.component.html',
  styleUrls: ['./selectfortemplate.component.scss']
})
export class SelectfortemplateComponent implements OnInit {
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

   selectedTemplateMenuIds = [];
   guffy=[];
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
  templateid: any;
  templatename: any;
  alpha:any
  beta:any;
  leng:any;
  gamma:any;
  reportcheck:any;
  reportstartdate: any;
  reportenddate: any;
  selectform:FormGroup
  constructor(
    private service: AppService,
        private ss: SelectdisService,
        private cs: CreatereportService,
        private us: UpdatereportService,
        private router: Router,
        private ds: DashboardService,
        private AuthService: AuthService,
        private fb: FormBuilder,
        private aa: ActivatedRoute,
        private st :SelectfortemplateService
  ) { }

  ngOnInit() {
    this.templateid = this.aa.snapshot.paramMap.get('tId');
    this.items=this.service.getData(this.templateid);
    console.log(this.templateid);
    
    this.selectform = this.fb.group({
        check: ['',Validators.required],
      });
    this.st.geTemplateIdDetailsById(this.templateid).subscribe((res) => {
        console.log(res);
        this.templatename = res[0].TemplateName;
    });

    this.ss.getTemplateMenuDetails().subscribe((Data) => {
        this.templatemenu = Data;
        this.getdatabyId(this.templatemenu[0].Id);
    });
    this.ss.getTemplateSubMenuDetails().subscribe((data) => {
        this.templatedata = data;
    });
    this.ss.getTemplateSubMenuItemDetails().subscribe((data) => {});
    this.ss.getReportTemplateMenuIdDetails().subscribe((data)=>{
        this.reportcheck=data[0]['Status'];
    });  
    this.ss.getReportTemplateMenuIdDetailsById(this.templateid).subscribe((data)=>{
       
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

selectedSubTemplateId(value) {
    this.msg=this.Save();
    console.log(this.msg);
this.savefornow();
}
savefornow(){
this.ss
        .updatereportstatus({ ReportId: this.templateid })
        .subscribe((data) => {});
}
validate(){

   // this.router.navigate(['/importdis', this.templateid]);

}

validate1(){
    
    this.ss.getReportTemplateMenuIdDetailsById(this.templateid).subscribe((data)=>{
    
        this.reportcheck=data[0]['Status'];
        console.log(this.reportcheck);
      //  this.validate();
        
    });
    
  
}
getdatabyId(Id: number) {
 
}
SaveAndNext(){
    this.Save();
 this.router.navigate(['/designtemplate']);
}
back() {
   // this.router.navigate(['/createreport']);
}
Save(){
    console.log(this.templateid)
    this.msg1=this.onselectchange(this.arre);
    for (var i=0;i<this.msg1.length;i++)
    {var a=this.msg1[i].split(':')
    console.log(a[1]);
    var b = (parseInt(a[1]))
   this.guffy.push(b)
}  console.log(this.guffy);
for (var i=0;i<this.guffy.length;i++){
  
  
        var obj = {
            Id: null,
            ReportId: this.templateid,
            UserId: this.AuthService.user.id,
           TemplateMenuId: this.guffy[i],
            IsActive: 1,
            CreatedByUserId: this.AuthService.user.id,
            CreatedDate: new Date(),
            UpdatedByUserId: this.AuthService.user.id,
            UpdatedDate: new Date(),
            Checked: 1,
            Status: 0,
        };

        this.st.pushselected(obj).subscribe((data) => {
            console.log(data);
            
        });
    }
    console.log(this.guffy);
    this.validate1();
    return this.msg1
}
}
