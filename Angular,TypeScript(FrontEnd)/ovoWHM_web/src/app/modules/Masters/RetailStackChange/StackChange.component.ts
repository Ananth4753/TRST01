import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { WarehouseService } from '../WareHouse/warehouse.service';
import Swal from 'sweetalert2';
import { StackbarcodeService } from '../StackBarcode/stackbarcode.service';
import { ProductviewService } from '../productview/productview.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators , NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-StackChange',
  templateUrl: './StackChange.component.html',
  styleUrls: ['./StackChange.component.scss']
})
export class StackChangeComponent implements OnInit {
  StackForm : FormGroup;
  customerList ;
  filterdOptions = [];
  selectedUser: any;
  Warehousedetails;
  StackDeatails;
  constructor( private _formBuilder: FormBuilder,
    private productviewservice:ProductviewService,
    private auth:AuthService,
    private SBS:StackbarcodeService,
    private WarehouseService:WarehouseService,) { }

  ngOnInit() {
    this.StackForm = this._formBuilder.group({
      BatchId  : [],
      Qty  : ['', Validators.required],
     CurrentStack :[, Validators.required],
     NewStack :[, Validators.required],
     WareHouseId:[, Validators.required]

      
  });

    this.productviewservice.GetProductBarcodedetailsByWareHouseId(this.auth.user.warehouseid).subscribe(data =>{
      this.customerList = data;
        
      })
      this.WarehouseService.getwarehousedetailsById(this.auth.user.warehouseid).subscribe(res=>{
        this.Warehousedetails = res;
        console.log(this.Warehousedetails[0].Id)
        if(this.Warehousedetails.length===1){
          this.StackForm.get('WareHouseId').setValue(this.Warehousedetails[0].Id)
        }
      })
   
      this.SBS.GetstackDtlByWareHouseId(this.auth.user.warehouseid).subscribe(res=>{
this.StackDeatails = res;
console.log(res)
      })
  }
  filterUsers() {
    this.filterdOptions = this.customerList.filter(
      item => item.BatchId.toLowerCase().includes(this.selectedUser.toLowerCase())
    );
    
  }


  
  private _filterStates(value: string) {
    const filterValue = value.toLowerCase();

    return this.customerList.filter(state => state.BatchId.toLowerCase().includes(filterValue));
  }
  getTitle(bookId: any) {
       
      
        
    return this.filterdOptions.find(book => book.BatchId === bookId).BatchId;

  }

  OnWarehouseChange(e){
    const WHId= e.value;
    console.log(WHId)
    this.productviewservice.GetProductBarcodedetailsByWareHouseId(WHId).subscribe(data =>{
      this.customerList = data;
        
      })

  }

  onBatchChange(e){


    this.productviewservice.getproductBarcodeByBatchId(e,this.auth.user.warehouseid).subscribe(res=>{
    console.log(res)

    const Data = res[0];

    this.StackForm.get('Qty').setValue(Data[0].NoOfQuantity)
    this.StackForm.get('CurrentStack').setValue(Data[0].StackId)
     
     
     
    
   
  
     
     
    
      
    })
    
    }
    onSave(){
     const obj = {
      "StackId":this.StackForm.get('NewStack').value,
      "BatchId":this.StackForm.get('BatchId').value,
      "WareHouseId":this.StackForm.get('WareHouseId').value
  }
this.SBS.InhouseStackChange(obj).subscribe(res=>{
console.log(res)
const data= res.message
Swal.fire({
  title:data ,
     confirmButtonColor: '#FCB713',
     icon: "success",
 
 });

})

    }
  
}
