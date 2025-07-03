import { Component, OnInit } from '@angular/core';
import { SelectdisService } from './selectdis.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { AuthService } from 'app/core/auth/auth.service';
import { UpdatereportService } from '../updatereport/updatereport.service';
import { CreatereportService } from '../createreport/createreport.service';
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
import { GlobalvariableService } from '../services/globalvariable.service';
import {ReportgenerationService} from 'app/services/reportgeneration.service';
@Component({
    selector: 'app-selectdis',
    templateUrl: './selectdis.component.html',
    styleUrls: ['./selectdis.component.scss'],
})
export class SelectdisComponent implements OnInit {
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
        private gs:GlobalvariableService,
        private st: ReportgenerationService,
    ) {}

    treeviewitem = [];
    ngOnInit() {
        this.treeviewitem = [];
        this.reportid = this.aa.snapshot.paramMap.get('reportId');
        this.treeviewitem=this.service.getTreeViewData(this.reportid);
    
        this.selectform = this.fb.group({
            check: ['',Validators.required],
          });
        this.reportid = this.aa.snapshot.paramMap.get('reportId');
        this.cs.getReportGenerationByReportId(this.reportid).subscribe((res) => {
            console.log(res);

            this.reportname = res[0].ReportName;
            this.reportstartdate = res[0].StartDate;
            this.reportenddate = res[0].EndDate;
        });

        this.ss.getTemplateMenuDetails().subscribe((Data) => {
            this.templatemenu = Data;
            this.getdatabyId(this.templatemenu[0].Id);
        });
        this.ss.getTemplateSubMenuDetails().subscribe((data) => {
            this.templatedata = data;
            console.log(data);
            
        });
        this.ss.getTemplateSubMenuItemDetails().subscribe((data) => {});
        this.ss.getReportTemplateMenuIdDetails().subscribe((data)=>{
            
            this.reportcheck=data[0]['Status'];
            console.log(this.reportcheck);
            console.log(data[0]);
        });  
        this.ss.getReportTemplateMenuIdDetailsById(this.reportid).subscribe((data)=>{
            console.log(data);
            
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
            .updatereportstatus({ ReportId: this.reportid })
            .subscribe((data) => {});
}
  validate(){
    this.Stage = '/importdis'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateStage(obj).subscribe((data=>{
        this.router.navigate(['/importdis', this.reportid]);
    }))
   
    
    
  }
    
    validate1(){
        
        this.ss.getReportTemplateMenuIdDetailsById(this.reportid).subscribe((data)=>{
        
            this.reportcheck=data[0]['Status'];
            console.log(this.reportcheck);
            this.validate();
            
        });
        
      
    }
    getdatabyId(Id: number) {
    }
    SaveAndNext(){//this is actually save next button
        this.Save();
    }
    back() {
        this.router.navigate(['/createreport']);
    }
    Save(){
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
                ReportId: this.reportid,
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

            this.ss.pushselected(obj).subscribe((data) => {
                console.log(data);
                
            });
         
        }
        console.log(this.guffy);
        this.validate1();
        return this.msg1
    }
}


