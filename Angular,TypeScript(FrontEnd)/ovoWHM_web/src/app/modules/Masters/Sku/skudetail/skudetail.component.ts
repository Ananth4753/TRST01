import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProductService } from '../../Product/product.service';
import { SkuService } from '../sku.service';
import { SKUDetail} from '../sku.type';
import { LookupService } from '../../Lookup/lookup.service';
import { PackagingmaterialService } from '../../packagingmaterial/packagingmaterial.service';
import { AuthService } from 'app/core/auth/auth.service';

import Swal from 'sweetalert2';



@Component({
  selector: 'app-skudetail',
  templateUrl: './skudetail.component.html',
  styleUrls: ['./skudetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkudetailComponent implements OnInit {
  title: string;
  SKUItem: SKUDetail;
  SKUItems: SKUDetail[];
  ProductdataSource;
  productdata;
  searchString:'';
  UOMData;
  show:boolean = false;
  selectedPacking:any;
  editit:boolean = false;
  SKUForm: FormGroup;
  warehousestockdata: Object;
  material: SKUDetail[];
  route: any;
  constructor(  private pm:PackagingmaterialService, public matDialogRef: MatDialogRef<SkudetailComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: { Id: number }, private _formBuilder: FormBuilder,private _LookupService:LookupService,private _skuservice:SkuService,private authService:AuthService,private _productservice:ProductService ) {
      this.title = this._data.Id ? ' Update SKU ' : 'Create SKU';


  
     }
packingmaterials;
  ngOnInit() {
    this._skuservice.getSKUPackingmaterialBySKUId(this._data.Id).subscribe((data:any)=>{
      this.lookupdtl = data;
 
    
      if(data.length > 0)
      {
        this.editit = true;
      }
      
    })
    this._skuservice.getWarehouseStockDetails(this.authService.user.warehouseid).subscribe((data) =>{
      this.warehousestockdata=data;
    });
   
  this._productservice.getProductDetails().subscribe((data) =>{
this.productdata=data;
console.log(data);
  });

this._LookupService.getLookupDtlDetailsByHdrCode('UOM').subscribe(data =>{
  this.UOMData=data;
})

// this._skuservice.getSKUById('PackingMaterialId').subscribe(data =>{
//   this.material=data;
// })

      this._skuservice.getSKUDetails().subscribe((data) => {
        this.SKUItems = data;
        console.log(data);
    });
    this.pm.getPackageDetails().subscribe((data) => {
    
    this.packingmaterials = data;
    this.selectedPacking = data;
  });

    this.SKUForm = this._formBuilder.group({
      Id: [],
      code: ['', Validators.required],
      Name: ['', [Validators.required]],
      UOM:[,Validators.required],
      Qty: [],
      ProductId: [],
      IsAcive: [true],
      CreatedDate: [new Date()],
      CreatedByUserId: [this.authService.user.id],
      UpdatedDate: [new Date()],
      UpdateByUserId: [this.authService.user.id]
  });
  if(this._data.Id) {
    this._skuservice.getSKUById(this._data.Id).subscribe((SKUItem) => {
        this.SKUItem = SKUItem[0];
        console.log( this.SKUItem);
        
        //this.SKUForm.setValue(this.skuItem);
        this.SKUForm.get('Id').setValue(this.SKUItem['Id']);
        this.SKUForm.get('code').setValue(this.SKUItem['code']);
        this.SKUForm.get('Name').setValue(this.SKUItem['Name']);
        this.SKUForm.get('UOM').setValue(this.SKUItem['UOM']);
        this.SKUForm.get('Qty').setValue(this.SKUItem['Qty']);
        this.SKUForm.get('ProductId').setValue(this.SKUItem['ProductId']);
       
        this.SKUForm.get('IsAcive').setValue(this.SKUItem['IsAcive']);
        
 });
}
  
  }

  onProductId(event,i){
console.log(event,i);
(<HTMLInputElement>document.getElementById("Quantity" + i.toString())).value = '1';
  }

  

  get f(){
    return this.SKUForm.controls;
  }

  
  onClose(): void
  {
      // Close the dialog
      this.matDialogRef.close(false);
  }
  
  /**
   * Save the message as a draft
   */
  onCancel(): void
  {
      // Close the dialog
      this.matDialogRef.close(false);
  }
 

  newAttribute: any = {};
  lookupdtl:any=[];
  addFieldValue(){
    this.editit = true;
    this.lookupdtl.push(this.newAttribute)
    this.newAttribute = {};

    
    
  }
  currentValue:string="";
  optionselected(option:string){
    console.log(option);
    this.currentValue = option;
   
  } 
  handleFocusIn(){
    this.show=true;
    console.log("status show"+this.show);
  }
  onSave(): void
  {

    const SKU: SKUDetail = this.SKUForm.value;
      if (this.SKUForm.get('Id').value === null) {
          this.SKUForm.get('CreatedDate').setValue(new Date());
          this.SKUForm.get('CreatedByUserId').setValue(this.authService.user.id);
         
        }
        else{
        this.SKUForm.get('UpdatedDate').setValue(new Date());
        this.SKUForm.get('UpdateByUserId').setValue(this.authService.user.id);
        
        }
       
       console.log(SKU);
      this._skuservice.createSKU(SKU).subscribe((result) => {
          console.log(result);

          this.hdrid = result;
          this.submitSKUPacking()
          var Data = result['message']
          Swal.fire({
            title:Data ,
               confirmButtonColor: '#FCB713',
               icon: "success",
           
           });
           this.matDialogRef.close(true);
      });
  }
  hdrid: any;
  UpdateSkuPacking(Id:number){
    this._skuservice.UpdateSKUPackingMaterial(Id).subscribe(res=>{
      this._skuservice.getSKUPackingmaterialBySKUId(this._data.Id).subscribe((data:any)=>{
        this.lookupdtl = data;
   
      
        if(data.length > 0)
        {
          this.editit = true;
        }
        
      })

    })

    
  }
  
  submitSKUPacking(){
    for (var i = 0; i < this.lookupdtl.length; i++) {
      console.log(this.lookupdtl );
      
      if (this.lookupdtl[i].Id == undefined || this.lookupdtl[i].Id == null || this.lookupdtl[i].Id == '') {
     
        var intialPostData = {
          Id: null,
          SKUId: this.hdrid.Id,
          PackingMaterialName: (<HTMLInputElement>document.getElementById("Name" + i.toString())).value,
          Qty: (<HTMLInputElement>document.getElementById("Quantity" + i.toString())).value,
          IsActive: true,
          CreatedDate: new Date(),
          CreatedByUserId: this.authService.user.id,
          UpdatedDate: new Date(),
          UpdatedByUserId:this.authService.user.id
          
        }
        console.log(intialPostData);
        
        this._skuservice.createSKUPacking(intialPostData).subscribe((res) => {
          this.matDialogRef.close(true); 
        });
      }
      else{
        var updatePostData = {
          Id: this.lookupdtl[i].Id,
          SKUId: this.lookupdtl[i].SKUId,
          Qty: (<HTMLInputElement>document.getElementById("Quantity" + i.toString())).value,
          PackingMaterialName: (<HTMLInputElement>document.getElementById("Name" + i.toString())).value,
          IsActive: true,
          CreatedDate: new Date(),
          CreatedByUserId: this.authService.user.id,
          UpdatedDate: new Date(),
          UpdatedByUserId:this.authService.user.id
        }
     
        this._skuservice.createSKUPacking(updatePostData).subscribe((res) => {
          this.matDialogRef.close(true); 
        })
    }

    }

  }
}
