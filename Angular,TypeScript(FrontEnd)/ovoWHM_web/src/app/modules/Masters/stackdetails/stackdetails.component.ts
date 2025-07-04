import { Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';
import { WarehouseService } from '../WareHouse/warehouse.service';
import { StackbarcodeService } from '../StackBarcode/stackbarcode.service';
import { StackdetailsService } from './stackdetails.service';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-stackdetails',
  templateUrl: './stackdetails.component.html',
  styleUrls: ['./stackdetails.component.scss']
})
export class StackdetailsComponent implements OnInit {
  isLoading:boolean = true;
  ShowDetails:boolean = false;
  WareHouseData;
  ShowMsg:boolean = false;
  ShowDropdown:boolean;
  StackData;
  isClicked :Boolean= false;
  ProductData;
  stackdetails;
  selectedWarehouse:any;
  constructor(private route:Router,private ws:WarehouseService,private sb:StackbarcodeService,private ss:StackdetailsService,private AuthService :AuthService) { }
  
  ngOnInit(): void {
  this.ws.getwarehousedetailsById(this.AuthService.user.warehouseid).subscribe(res=>{
  this.WareHouseData = res;
  if(this.WareHouseData.length===1){
  this.onSelect(this.AuthService.user.warehouseid);

 this. selectedWarehouse =this.AuthService.user.warehouseid
  this.sb.GetstackDtlByWareHouseId(this.AuthService.user.warehouseid).subscribe(re=>{
    this.StackData = re;

    
 })


  this.ShowDropdown = false;
   }else{
  this.ShowDropdown = true;
  this. selectedWarehouse =0
}

})
 
  }

  NoStacks:boolean = false;
  onSelect(e){

    this.sb.GetstackDtlByWareHouseId(e).subscribe(re=>{
       this.StackData = re; 

  
    if(this.StackData.length===0){
      this.NoStacks= true;
    }else {
      this.NoStacks= false;
    }
     
    })
    this.ShowDetails=false;
    
  }

  onSelectStack(e){
   this.ShowProducts(e)

  }

  ShowProducts(StackId){
    this.ShowDetails=true;
    this.ss.getproductleveldetailsByStackId(StackId).subscribe((re: any) => {
      this.stackdetails = re;
      console.log(re);
    
      this.stackdetails.forEach((data: any) => {
        if (data.DaysToExpire < 0) {
          this.Red = true;
          this.Pink = false;
          this.White = false;
        } else if (data.DaysToExpire < 18) {
          this.Pink = true;
          this.Red = false;
          this.White = false;
        } else {
          this.White = true;
          this.Red = false;
          this.Pink = false;
        }
      });
    });
  
 
    // if(
    //   document.getElementById('btn'+StackId).style.backgroundColor == 'rgb(252, 183, 19)')
    //       {
    //         document.getElementById('btn'+StackId).style.backgroundColor = 'rgb(253, 216, 129)'; 
    //         document.getElementById('btn'+StackId).style.borderColor = 'rgb(253, 216, 129)'; 
    //       }
    //       else
    //       {
    //         document.getElementById('btn'+StackId).style.backgroundColor = 'rgb(252, 183, 19)'; 
   
    //       }
// this.StackData.map(m=>{
//   if(m.Id===StackId){
//     document.getElementById('btn'+m.Id).style.backgroundColor = 'rgb(252, 183, 19)'; 
//   }
//   else {
//     document.getElementById('btn'+m.Id).style.backgroundColor = 'rgb(253, 216, 129)';  
//   }

  
// })


  }

Red:boolean = false;
Pink:boolean = false;
White:boolean = false;



 
}
