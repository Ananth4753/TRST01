import { Component, OnInit,Inject,ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder,Validators,ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
import { WarehouseService } from '../warehouse.service';
import { LocationService } from '../../WarehouseLocation/warehouselocation/location.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-warehousedetails',
  templateUrl: './warehousedetails.component.html',
  styleUrls: ['./warehousedetails.component.scss']
})
export class WarehousedetailsComponent implements OnInit {

  warehouseForm:FormGroup; 
  title: string;
  warehousedetails: any[];
  route: any;
  constructor( private _fb:FormBuilder,
    private warehouse :WarehouseService,
    private auth:AuthService,
   @Inject(MAT_DIALOG_DATA)
  private _data: {warehouseId: number },  
  private matDialogRef: MatDialogRef<WarehousedetailsComponent>,private warehouseloc :LocationService,) {
    console.log(this._data.warehouseId);
    this.title = this._data.warehouseId? 'Update warehouse Details' : 'Create warehouse Details';
    this.lookupdtl = [];
    if(this._data.warehouseId == null){
      this.editit = false;
    }
    else{
      this.warehouse.GetwarehouseservicelocationByWareHouseId(this._data.warehouseId).subscribe((data:any)=>{
        this.lookupdtl = data;
      
        if(data.length > 0)
        {
          this.editit = true;
        }
        
      })
    }
  
   }

  ngOnInit() {

    this.warehouse.getwarehousedetails().subscribe((data) => {
      this.warehousedetails = data;
   
      
    })

    this.warehouseForm = this._fb.group({
      Id:[null],
      ContactName: ['',[Validators.required,Validators.pattern("[a-zA-Z]*")]],
      ContactNo:[,[Validators.required,Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Address:[],
      Name: ['',[Validators.required]],
      IsActive: [true],
      CreatedDate: [new Date()],
      CreatedByUserId:[this.auth.user.id] ,
      UpdatedDate: [new Date()],
      UpdatedByUserId: [this.auth.user.id]
     })
     if(this._data.warehouseId) {     
          
    this.warehouse.getwarehousedetailsById(this._data.warehouseId).subscribe((data) => {
         const warehouse = data[0]; 
         this.warehouseForm.get('ContactName').setValue(warehouse.ContactName);
         this.warehouseForm.get('ContactNo').setValue(warehouse.ContactNo);
         this.warehouseForm.get('Address').setValue(warehouse.Address);
         this.warehouseForm.get('Name').setValue(warehouse.Name);
         this.warehouseForm.get('Id').setValue(warehouse.Id);
         this.warehouseForm.get('IsActive').setValue(warehouse.IsActive);
     });     
     
 }
  }
  onCancel(){
    this.matDialogRef.close(false);
  }
  hdrid: any;
  onSave(){
    {
      const Warehouse:any  = this.warehouseForm.value;
      if(Warehouse.Id === null) {
        Warehouse.CreatedDate = new Date();
        Warehouse.CreatedByUserId = this.auth.user.id;
       
              }
        
    
    else{
    Warehouse.UpdatedDate = new Date();
    Warehouse.UpdatedByUserId = this.auth.user.id;
   

    }
    this.warehouse.createwarehouse(Warehouse).subscribe((result) => {
      this.hdrid = result;
      console.log( this.hdrid )
      var Data = result['message']
      Swal.fire({
        title:Data ,
           confirmButtonColor: '#FCB713',
           icon: "success",
       
       });

    this.matDialogRef.close(true);
      this.submitpincodes()
        this.matDialogRef.close(true);    
    });
   }
  }
  onClose(){
    this.matDialogRef.close(false);
  }

  submitpincodes(){
    for (var i = 0; i < this.lookupdtl.length; i++) {
      console.log(this.lookupdtl );
      
      if (this.lookupdtl[i].Id == undefined || this.lookupdtl[i].Id == null || this.lookupdtl[i].Id == '') {
     
        var intialPostData = {
          Id: null,
          WareHouseId: this.hdrid.Id,
          PinCode: (<HTMLInputElement>document.getElementById("PinCode" + i.toString())).value,
          IsActive: true,
          CreatedDate: new Date(),
          CreatedByUserId: this.auth.user.id,
          UpdatedDate: new Date(),
          UpdatedByUserId:this.auth.user.id,
        }
        console.log(intialPostData);
        
        this.warehouseloc.createwarehouseLocation(intialPostData).subscribe((res) => {
          this.matDialogRef.close(true); 
        });
      }
      else{
        var updatePostData = {
          Id: this.lookupdtl[i].Id,
          WareHouseId:this.hdrid.Id,
          PinCode: (<HTMLInputElement>document.getElementById("PinCode" + i.toString())).value,
          IsActive: true,
          CreatedDate: new Date(),
          CreatedByUserId: this.auth.user.id,
          UpdatedDate: new Date(),
          UpdatedByUserId:this.auth.user.id
        }
        console.log(updatePostData);
      this.warehouseloc.createwarehouseLocation(updatePostData).subscribe((res) => {
        this.matDialogRef.close(true); 
      });
    }

    }

  }

  lookupdtl: any;
  editit: boolean = false;
  newAttribute: any = {};
  addFieldValue(){
    this.editit = true;
    this.lookupdtl.push(this.newAttribute)
    this.newAttribute = {};
  }

  get w(){
    return this.warehouseForm.controls;
  }
}
