import { Component, OnInit,Inject,ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WarehouseService } from '../../WareHouse/warehouse.service';
import { LocationService } from '../warehouselocation/location.service';
import { AuthService } from 'app/core/auth/auth.service';


@Component({
  selector: 'app-locationdetail',
  templateUrl: './locationdetail.component.html',
  styleUrls: ['./locationdetail.component.scss']
})
export class LocationdetailComponent implements OnInit {

  warehouseLocationForm:FormGroup; 
  title: string;
  warehousedata
  constructor( private _fb:FormBuilder,
    private wh:WarehouseService,
    private warehouse :LocationService,
    private auth:AuthService,
   @Inject(MAT_DIALOG_DATA)
  private _data: {warehouseId: number },  
  private matDialogRef: MatDialogRef<LocationdetailComponent>,) {
    console.log(this._data.warehouseId);
    this.title = this._data.warehouseId? 'Update warehouse Location Details' : 'Create warehouse Location Details';
    
   }

  ngOnInit(): void {
    if(this.auth.user.WareHouseId==!null){
      this.wh.getwarehousedetailsById(this.auth.user.WareHouseId).subscribe(res=>{
        this.warehousedata = res;
        })
    }
    else{
      this.wh.getwarehousedetailsById(null).subscribe(res=>{
        this.warehousedata = res;
        })
    }
this.wh.getwarehousedetailsById(this.auth.user.WareHouseId).subscribe(res=>{
this.warehousedata = res;
})
    this.warehouseLocationForm = this._fb.group({
      Id:[],
      WareHouseId: ['',Validators.required],
      PinCode:[,Validators.required],
      IsActive: [true],
      CreatedDate: [new Date()],
      CreatedByUserId:[this.auth.user.id] ,
      UpdatedDate: [new Date()],
      UpdatedByUserId: [this.auth.user.id]
     })
     if(this._data.warehouseId) {     
          
    this.warehouse.getwarehouselocationdetailsById(this._data.warehouseId).subscribe((data) => {
         const warehouse = data[0]; 
        console.log(data);
        this.warehouseLocationForm.get('Id').setValue(warehouse.Id);
         this.warehouseLocationForm.get('PinCode').setValue(warehouse.PinCode);
         this.warehouseLocationForm.get('WareHouseId').setValue(warehouse.WareHouseId);
         this.warehouseLocationForm.get('IsActive').setValue(warehouse.IsActive);
        
     });     
     
 }
  }

  onCancel(){
    this.matDialogRef.close(false);
  }
  onSave(){
    {
      const Warehouse:any  = this.warehouseLocationForm.value;
      if(Warehouse.Id === null) {
        Warehouse.CreatedDate = new Date();
        Warehouse.CreatedByUserId = this.auth.user.id;
    }
    Warehouse.UpdatedDate = new Date();
    Warehouse.UpdatedByUserId = this.auth.user.id;
    this.warehouse.createwarehouseLocation(Warehouse).subscribe((result) => {
        this.matDialogRef.close(true);    
    });
   }
  }
  onClose(){
    this.matDialogRef.close(false);
  }
}
