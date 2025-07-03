import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { AuthService } from 'app/core/auth/auth.service';
import { WarehouseService } from 'app/modules/Masters/WareHouse/warehouse.service';
import * as  jQuery from 'jquery';
import { FormGroup,Validators,FormControl,FormBuilder } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-SalesOrders',
  templateUrl: './SalesOrders.component.html',
  styleUrls: ['./SalesOrders.component.css']
})
export class SalesOrdersComponent implements OnInit {

  constructor( private fb_: FormBuilder,private DS:DashboardService,private AS:AuthService,private WS:WarehouseService) { }
SalesOrder;
filterForm: FormGroup;
WareHouseData;
Showall:Boolean;
  ngOnInit() {
    this.filterForm = this.fb_.group({
    
      WareHouseId:[]});

      this.filterForm.get("WareHouseId").setValue(this.AS.user.warehouseid)
    this.DS.GetSalesOrdersByWarehouse(this.AS.user.warehouseid).subscribe(res=>{
this.SalesOrder = res;
$(document).ready(function(){$("#datatable").DataTable();});
    })
    this.WS.getwarehousedetailsById(this.AS.user.warehouseid).subscribe(res=>{
this.WareHouseData = res;
if(this.WareHouseData.length ===1){
  this.Showall = true;
}
    })
  }
  OnWarehouseChange(event){
    const whId = event.value ;
    this.DS.GetSalesOrdersByWarehouse(whId).subscribe(res=>{
      this.SalesOrder = res;
      $(document).ready(function(){$("#datatable").DataTable();});
          }) 

  }
}
