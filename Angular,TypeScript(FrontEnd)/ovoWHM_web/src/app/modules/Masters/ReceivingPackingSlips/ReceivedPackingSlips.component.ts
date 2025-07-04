import { Component, OnInit } from '@angular/core';
import { PackingslipService } from '../packingslip/packingslip.service';
import { WarehouseService } from '../WareHouse/warehouse.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { AuthService } from 'app/core/auth/auth.service';
import * as  jQuery from 'jquery';
import { DatePipe } from '@angular/common';

declare var $: any;
@Component({
  selector: 'app-ReceivedPackingSlips',
  templateUrl: './ReceivedPackingSlips.component.html',
  styleUrls: ['./ReceivedPackingSlips.component.scss']
})
export class ReceivedPackingSlipsComponent implements OnInit {
constructor(private DatePipe :DatePipe, private Ps:PackingslipService,private wh:WarehouseService,private _formBuilder:FormBuilder,private authService:AuthService,) { }
ReceivedPackingSlip;
addedit: boolean;
status;
Statusdel=[{Status:"In-Transit",Id:7},{Status:"Delivered",Id:21}]
Showdropdown:boolean;
lookupdtl: any
ReceivedPackingSlip1
LookupMasterForm: FormGroup;
PackingForm : FormGroup;
WareHouseData;

ngOnInit() {
this.PackingForm = this._formBuilder.group({ 
WareHouseId:['',Validators.required],
Status : ['',Validators.required],
});
 this.LookupMasterForm = this._formBuilder.group({
      Id: [],
      Code: ['', Validators.required],
      WareHouseId:[],
      InTransit: [true],
      IsInHouseTransfer: [true],
      LossInTransit: [false],
      DeliveryDate :[],
      GRNConfirmation: [false],
      DaysInTransit: [, Validators.required],
      IsActive: [true],
      Status:[],
      Type:[],
      DeliveryWarehouseId:[],
      CreatedDate: [new Date()],
      CreatedByUserId: [this.authService.user.id],
      UpdatedDate: [new Date()],
      UpdatedByUserId: [this.authService.user.id]
  });
    this.addedit = false;
    this.wh.getwarehousedetailsById(this.authService.user.warehouseid).subscribe(res=>{
    this.WareHouseData = res;
    if(this.WareHouseData.length===1){
    this.Showdropdown = false;
    this.PackingForm.get('WareHouseId').setValue(this.authService.user.warehouseid)
    this.PackingForm.get('Status').setValue('null')
      }
      else{
     this.Showdropdown =true;
     this.PackingForm.get('WareHouseId').setValue('null')
     this.PackingForm.get('Status').setValue('null')
      }
      
      })
      this.Ps.GetLookupDtldetailsByCode('Packing Slip Status').subscribe(data=>{
      this.status=data;
       })
      this.Ps.GetPackingSlipHDRdetailsByDeliveryWareHouseId(this.authService.user.warehouseid).subscribe(res=>{
      this.ReceivedPackingSlip = res;
      console.log(res)

      $(document).ready(function(){$("#datatable").DataTable();});
    })
  }


  onSave(){
    console.log(this.PackingForm.value)
    const wareId = this.PackingForm.value.WareHouseId
    const Stat = this.PackingForm.value.Status
    this.Ps.GetPackingSlipHDRdetailsByDeliveryWareHouseIdStaus(wareId,Stat).subscribe(res=>{
      this.ReceivedPackingSlip = res
    })

  }
  editlookuphdr;
  detailsHdrid
  StatusData
  onSelect(e){
    console.log(e);
    this.Ps.GetPackingSlipHDRdetailsByDeliveryWareHouseId(e).subscribe(res=>{
      this.ReceivedPackingSlip = res;
      $(document).ready(function(){$("#datatable").DataTable();});
     })
  }
  GetPackingSlipDetails(Id){
   this.addedit = true;
        this.Ps.getPackingSlipHdrDetailsById(Id)
          .subscribe(
            async (res) => {
              console.log(res)
    this.editlookuphdr = res[0];
    this.StatusData = this.editlookuphdr['Status']
    this.LookupMasterForm.get('WareHouseId').setValue(this.editlookuphdr['WareHouseId'])
    this.LookupMasterForm.get('Id').setValue(this.editlookuphdr['Id'])
    this.LookupMasterForm.get('DeliveryWarehouseId').setValue(this.editlookuphdr['DeliveryWarehouseId'])
    this.LookupMasterForm.get('Code').setValue(this.editlookuphdr['Code'])
    this.LookupMasterForm.get('DaysInTransit').setValue(this.editlookuphdr['DaysInTransit'])
    this.LookupMasterForm.get('Status').setValue(this.editlookuphdr['Status'])

    this.LookupMasterForm.get('Type').setValue(this.editlookuphdr['Type'])
    const Date1 = this.DatePipe.transform(this.editlookuphdr['DeliveryDate'],'yyyy-MM-dd');
    this.LookupMasterForm.get('DeliveryDate').setValue(Date1)
    this.LookupMasterForm.get('GRNConfirmation').setValue(this.editlookuphdr['GRNConfirmation'])
    this.LookupMasterForm.get('LossInTransit').setValue(this.editlookuphdr['LossInTransit'])
    this.LookupMasterForm.get('CreatedByUserId').setValue(this.editlookuphdr['CreatedByUserId'])
    this.LookupMasterForm.get('CreatedDate').setValue(this.editlookuphdr['CreatedDate'])
             
  })
    this.Ps.getPackingSlipDetailsByHdrId(Id).subscribe(data=>{
    this.detailsHdrid = data
    this.lookupdtl = data;

    console.log( this.lookupdtl)
     $(document).ready(function(){$("#datatable2").DataTable();});
            })
      }
      hdrid
      onCreate(){
      const lookuphedaerdata: any = this.LookupMasterForm.value;
      if (lookuphedaerdata.Id === null) {
          lookuphedaerdata.CreatedDate = new Date();
          lookuphedaerdata.CreatedByUserId = this.authService.user.id;}
      lookuphedaerdata.UpdatedDate = new Date();
      lookuphedaerdata.UpdatedByUserId = this.authService.user.id;
      this.Ps.createPackingSlipHdr(lookuphedaerdata).subscribe((result) => {
      this.hdrid = result;
      this.submitlookupdetails();
      this.Ps.GetPackingSlipHDRdetailsByDeliveryWareHouseId(this.authService.user.warehouseid).subscribe(res=>{
      this.ReceivedPackingSlip = res;
      console.log(res)
        $(document).ready(function(){$("#datatable").DataTable();});
         })
         this.addedit = false; });
        }
      submitlookupdetails(){
        for (var i = 0; i < this.lookupdtl.length; i++) {
         var updatePostData = {
              Id: this.lookupdtl[i].Id,
              PackingSlipHDRId:this.lookupdtl[i].PackingSlipHDRId,
              ProductId:this.lookupdtl[i].ProductId,
              SkuId:this.lookupdtl[i].SkuId,
              Quantity:this.lookupdtl[i].Quantity ,
              BatchId:this.lookupdtl[i].BatchId ,
              LeakageQty:(<HTMLInputElement>document.getElementById("Leakage" + i.toString())).value,
              DamageQty:(<HTMLInputElement>document.getElementById("Damage" + i.toString())).value,
              DtlStatus:null,
              LossDescription:null,
              IsActive: true,
              CreatedDate: new Date(),
              CreatedByUserId: this.authService.user.id,
              UpdatedDate: new Date(),
              UpdatedByUserId: this.authService.user.id,
            }
            this.Ps.createPackingSlipDtl(updatePostData).subscribe((res) => {
            var Data = res['message']
            this.Ps.GetPackingSlipHDRdetailsByDeliveryWareHouseId(this.authService.user.warehouseid).subscribe(res=>{
              this.ReceivedPackingSlip = res;
              $(document).ready(function(){$("#datatable").DataTable();});
            
              
                  })});
                }
      }
}
