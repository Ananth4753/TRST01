import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackingslipService } from '../packingslip.service';
import { AuthService } from 'app/core/auth/auth.service';
import * as  jQuery from 'jquery';
declare var $: any;
@Component({
  selector: 'app-packingslipsearch',
  templateUrl: './packingslipsearch.component.html',
  styleUrls: ['./packingslipsearch.component.scss']
})
export class PackingslipsearchComponent implements OnInit {
  addedit:boolean = false;
  constructor(private route:Router,private Ps:PackingslipService,private AuthService:AuthService) { }
ProductStackData;
searchText;
searchString = '';
  ngOnInit(): void {
    this.Ps.GetPackingSlipHDRdetailsByWareHouseId(this.AuthService.user.warehouseid).subscribe(data=>{
  
      this.ProductStackData=data;

      $(document).ready(function() {      $("#datatable").DataTable();    });
    
      console.log(data);
     });
  
  }
  packslipdetaisbyuserid;
  PackingSlipStatus;
Status1:boolean=false;
Status2:boolean=false;
GetProductStackByPackigSlip(PackingId,Status){
  if(Status === 'Opened'){
this.Status1 = true;
this.Status2 = false;
  }
  else{
this.PackingSlipStatus = Status;
this.Status2 = true;
this.Status1=false;
  }
  this.Ps.getPackingSlipHdrDetailsById(PackingId).subscribe(res=>{

  })
  this.Ps.ProductLevelStockDetailsByPackingSlipHDRId(PackingId).subscribe(data=>{

this.packslipdetaisbyuserid = data;
console.log(data)
  })
  this.addedit = true;
}

}
