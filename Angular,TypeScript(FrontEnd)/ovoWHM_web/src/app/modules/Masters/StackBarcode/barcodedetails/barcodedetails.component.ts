import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Stackdetails,Stackitems } from '../stack.type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
import { StackbarcodeService } from '../stackbarcode.service';
import { WarehouseService } from '../../WareHouse/warehouse.service';
import { Router } from '@angular/router';
import moment from 'moment';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-barcodedetails',
  templateUrl: './barcodedetails.component.html',
  styleUrls: ['./barcodedetails.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BarcodedetailsComponent implements OnInit {
  StackForm: FormGroup;
  title: string;
  stackitem: Stackdetails;
  batchCode: any;
Whlist:any[];
  route: any;
  constructor(private fb: FormBuilder,private authService :AuthService,
    @Inject(MAT_DIALOG_DATA) private _data: { Id: number },private matdiaref:MatDialogRef<BarcodedetailsComponent>,private _stackserve:StackbarcodeService,  private warehouse :WarehouseService,private _Rot:Router) { 
    this.title = this._data.Id ? 'Update Stack' : 'Stack ';
    this.batchCode = moment().format('YYYYMMDDHHmmss');
    console.log(this.batchCode);
    
  }
  
  ngOnInit(): void {
    this.warehouse.getwarehousedetails().subscribe((data) =>{
    this.Whlist = data;
      console.log(data)
    });


    this.StackForm = this.fb.group({
      Id:[], 
      WareHouseId: [],
      Printcode:this.batchCode,
      Name: ['',[Validators.required]],
      Area: ['', [Validators.required]],
      Location: ['',Validators.required],
      // URL: ['',Validators.required],
      IsActive: [true],
      CreatedDate: [new Date()],
      CreatedByUserId: [this.authService.user.id],
      UpdatedDate: [new Date()],
      UpdateByUserId: [this.authService.user.id],

    })
    if(this._data.Id) {
      this._stackserve.getstackdetailsdetailsById(this._data.Id).subscribe((stackitem) => {
       
       this.stackitem = stackitem[0];
       console.log(this.stackitem);
       
        this.StackForm.get('Id').setValue(this.stackitem['Id']);
        this.StackForm.get('WareHouseId').setValue(this.stackitem['WareHouseId']);
        this.StackForm.get('Name').setValue(this.stackitem['Name']);
        this.StackForm.get('Area').setValue(this.stackitem['Area']);
        this.StackForm.get('IsActive').setValue(this.stackitem['IsActive']);
        this.StackForm.get('Location').setValue(this.stackitem['Location']);
        // this.StackForm.get('URL').setValue(this.stackitem['URL']);
       
    });
  
    }
  }

  get s(){
    return this.StackForm.controls;
  }

  onClose(): void
  {
      // Close the dialog
      this.matdiaref.close(false);
  }
  
  /**
   * Save the message as a draft
   */
  onCancel(): void
  {
      // Close the dialog
      this.matdiaref.close(false);
  }

  onSave(): void
{

  const StackData: Stackdetails = this.StackForm.value;
  console.log(StackData);
  

    if (this.StackForm.get('Id').value === null) {
        this.StackForm.get('CreatedDate').setValue(new Date());
        this.StackForm.get('CreatedByUserId').setValue(this.authService.user.id);
        
      }
      else{
      this.StackForm.get('UpdatedDate').setValue(new Date());
      this.StackForm.get('UpdateByUserId').setValue(this.authService.user.id);
console.log(StackData);

      }

    this._stackserve.createStack(StackData).subscribe((result) => {
      this.warehouse.getwarehousedetails().subscribe((data) =>{
        this.Whlist = data;
          console.log(data)
        });
      var Data = result['message']
          Swal.fire({
            title:Data ,
               confirmButtonColor: '#FCB713',
               icon: "success",
           
           });
           this.warehouse.getwarehousedetails().subscribe((data) =>{
            this.Whlist = data;
              console.log(data)
            });
        this.matdiaref.close(true);
    });

}



}
