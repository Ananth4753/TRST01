import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';
import { PackingslipService } from '../packingslip.service';
import { PackingSlipDetails } from '../packingslip.type';
import {Sort} from '@angular/material/sort';
import * as  jQuery from 'jquery';

declare var $: any;

@Component({
  selector: 'app-trackingpackingslip',
  templateUrl: './trackingpackingslip.component.html',
  styleUrls: ['./trackingpackingslip.component.scss']
})
export class TrackingpackingslipComponent implements OnInit {
  addedit: boolean;
  LookupMasterForm: FormGroup;
  LookupMsterList: any[];
  lookupdtl: any;
  searchString='';
  spdd:boolean = true;
  newattribute:any={};
  hdrid: any;
  access: object = {};
  Edit:boolean = false;
  editit: boolean = false;
  editlookuphdr: any[];
  pageSize: number = TABLE_PAGINATION_SIZE;
  searchInputControl: FormControl = new FormControl();
  isLoading: boolean = false;
  status:any;
  Warehousedetails:any;

  constructor(private _route:Router,private authService:AuthService,private _formBuilder:FormBuilder,private packingslipservice:PackingslipService,private chRef:ChangeDetectorRef) {
    this.addedit = false;
    this.lookupdtl = [];
   }

  ngOnInit(): void {
    console.log(this.authService.user);
    
    this.LookupMasterForm = this._formBuilder.group({
      Id: [],
      Code: ['', Validators.required],
      WareHouseId:[],
      InTransit: [true],
      IsInHouseTransfer: [true],
      LossInTransit: [true],
      GRNConfirmation: [true],
      DaysInTransit: [, Validators.required],
      IsActive: [true],
      Status:[],
      Type:[],
      CreatedDate: [new Date()],
      CreatedByUserId: [this.authService.user.id],
      UpdatedDate: [new Date()],
      UpdatedByUserId: [this.authService.user.id]
  });
  
  this.packingslipservice.getwarehouseDetails().subscribe(data=>{
    this.Warehousedetails=data;  
  })

  this.packingslipservice.getwarehousedetailsById(this.authService.user.warehouseid).subscribe(data=>{
  this.Warehousedetails=data;
   })

   this.packingslipservice.GetLookupDtldetailsByCode('Packing Slip Status').subscribe(data=>{
    this.status=data;
   })
   this.getLookupMasterDetail();

   this.packingslipservice.getwarehousedetailsById(this.authService.user.warehouseid).subscribe(data=>{
   
     this.Warehousedetails=data;
   
     console.log(data);
    })
  }
  packslipdetaisbyuserid
  getLookupMasterDetail(){
    this.packingslipservice.GetPackingSlipHDRdetailsByWareHouseId(this.authService.user.warehouseid).subscribe(res=>{
    this.packslipdetaisbyuserid = res;
    $(document).ready(function() {      $("#datatable").DataTable();    });
    console.log(res);
  
     })
  }
  packingId;
  detailsHdrid
  GetPackingSlipDetails(Id){
this.packingId = Id ;
    this.packingslipservice.getPackingSlipHdrDetailsById(Id)
      .subscribe(
        async (res) => {
          this.editlookuphdr = res[0];
          console.log(res);
//           // this.LookupMasterForm.setValue(res[0]);


this.LookupMasterForm.get('WareHouseId').setValue(this.editlookuphdr['WareHouseId'])
this.LookupMasterForm.get('Code').setValue(this.editlookuphdr['Code'])
this.LookupMasterForm.get('DaysInTransit').setValue(this.editlookuphdr['DaysInTransit'])
this.LookupMasterForm.get('Status').setValue(this.editlookuphdr['Status'])

//          
          
        })

        this.packingslipservice.getPackingSlipDetailsByHdrId(Id).subscribe(data=>{         
           console.log(data);
          this.detailsHdrid = data})
  }
  DamageData;
  getLookupMstbyId(Id){ 
   this.Edit = false;
    this.addedit = true;

    this.LookupDetails(Id);
  }
  OnRoleChange(event){
    console.log(event);
        
    if (event.value==21){
    this.spdd=false;
    }
    else{
        this.spdd=true;
    } 
  }
  GetLeakageQtyByPSId(PsId){
this.packingslipservice.GetInhouseDtlByPSId(PsId).subscribe(res=>{
  console.log(res)
  this.DamageData = res;
})
  }
LookupDetails(Id){
  this.editit = true;
  // this.tptid=Id; 
  this.packingslipservice.getPackingSlipDetailsByHdrId(Id).subscribe(
    (data) => {
      this.lookupdtl = data;
    console.log(this.lookupdtl)
      // this.chRef.detectChanges();
    })
}
sortedData


  onCreate(){
 const wId =   this.LookupMasterForm.get('WareHouseId').value
   const St=  this.LookupMasterForm.get('Status').value
   const Daysintransit=  this.LookupMasterForm.get('DaysInTransit').value

 const Id  = this.packingId;

 console.log(wId,St,Id);
 
this.packingslipservice.PackingSlipStatusUpdate(Id,wId,St,Daysintransit).subscribe(res=>{
this.addedit=false
console.log(res);

this. getLookupMasterDetail();
})

  }
  onCancel(){
    this.LookupMasterForm.reset();
    this.Edit = false;
    this.lookupdtl = [];
    this.editit = false;
  }
 
   refresh() {
    this.Edit = false;
    this.packingslipservice.getPackingSlipDtl().subscribe((data) => {

      console.log(data);
     
  });
  }

  // selectrow() {
  //     this._route.navigate(["/trackingpackingslip"]);
  //     this.getLookupMasterDetail();
  // }
}

