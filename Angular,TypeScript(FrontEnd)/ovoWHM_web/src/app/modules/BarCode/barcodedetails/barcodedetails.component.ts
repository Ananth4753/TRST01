import { Component,Inject, OnInit ,ViewChild, ViewEncapsulation,HostListener} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
import { BarcodeService } from '../barcode.service';
import * as PDF417 from 'pdf417-generator';




@Component({
  selector: 'app-barcodedetails',
  templateUrl: './barcodedetails.component.html',
  styleUrls: ['./barcodedetails.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BarcodedetailsComponent implements OnInit {

  barcodeForm: FormGroup;
  barcodedetails: any;
  title:string;
 text :string;
  testObj : JSON;
  BarCode: any;

// const myJSON = JSON.stringify(this.obj);
// code =
// `HRVHUB30
// HRK
// 000000000012355
// PETAR KORETIĆ
// PREVOJ DD
// 10000 Zagreb
// FIRMA J.D.O.O
// PREVOJ DD
// 10000 ZAGREB
// HR5041240000000000
// HR01
// 7336-68949637625-00001
// COST
// Uplata za 1. mjesec`

    
    constructor(private _fbb:FormBuilder,
       private auth:AuthService,
       private _barcode:BarcodeService,
       private matDialogRef: MatDialogRef<BarcodedetailsComponent>,
       @Inject(MAT_DIALOG_DATA) private _dataid: {Id:number}) { this.title = this._dataid.Id ? 'Update BarCode details' : 'Create BarCode details' }
  
    ngOnInit(): void {
      this.barcodeForm = this._fbb.group({
        Id:[],
        // BatchId:[,Validators.required],
        FlockName:['',Validators.required],
        WeightRange:['',Validators.required],
        FarmLocation:['',Validators.required],
        DateYear:['',Validators.required],
        NoOfPackets:[,Validators.required],
        NoOfQuantity:[,Validators.required],
        Url:['',Validators.required],
        IsActive:[true],
        CreatedByUserId:[],
        CreatedDate: [new Date()],
        UpdatedByUserId:[],
        UpdatedDate:[new Date()]
      });}
  
  
    onSave(){
      {
        const BarCode = this.barcodeForm.value;
        console.log(BarCode);
        
        if(BarCode.Id === null) {
          BarCode.CreatedDate = new Date();
          BarCode.CreatedByUserId = this.auth.user.id;
        }
      BarCode.UpdatedDate = new Date();
      BarCode.UpdatedByUserId = this.auth.user.id;
      this._barcode.createBarcode(BarCode).subscribe((result) => {
        this.barcodedetails = result;
        this.matDialogRef.close(true);
        
        
  });
    }

}

onClose(){
  this.matDialogRef.close(false);
}

// runThis(){
// // this.testObj = {name : "John", age: "30", city: "New York"};
// this.text = JSON.stringify(this.BarCode);
// console.log(this.text); 

// }

}
