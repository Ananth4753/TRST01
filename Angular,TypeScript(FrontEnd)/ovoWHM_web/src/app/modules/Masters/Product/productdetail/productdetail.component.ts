
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { productdetails,productitems } from '../product.type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LookupService } from '../../Lookup/lookup.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
//import { CategoryService } from '../../Category/category.service';
import { ProductService } from '../product.service';


import Swal from 'sweetalert2';






@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductdetailComponent implements OnInit {

  ProductForm: FormGroup;
  productDetails:productdetails[];
  productitem:any;
  title: string; 
  lookupDetails:any[];
  productname:any[];
  Brand;
  Category;
  route: any;

  // numberOnly(event): boolean {

  //   const charCode = (event.which) ? event.which : event.keyCode;

  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) {

  //     return false;

  //   }

  //   return true;

  //   }
  

  constructor(private fb: FormBuilder,private authService :AuthService,private ps:ProductService ,private lookupService:LookupService, @Inject(MAT_DIALOG_DATA) private _data: { Id: number },private matdiaref:MatDialogRef<ProductdetailComponent>) {
  this.title = this._data.Id ? 'Update Product' : 'Product ';

   }
   Classification;
  ngOnInit() {

    this.lookupService.getLookupDtl().subscribe((data) => {
      this.lookupDetails = data;   
      console.log(data);
      
  });


  this.lookupService.getLookupDtlDetailsByHdrCode('BrandCode').subscribe(res=>{
this.Brand = res;
    
  })
  this.lookupService.getLookupDtlDetailsByHdrCode('ClassificationCode').subscribe(res=>{
    this.Classification = res;
        
      })
  this.lookupService.getLookupDtlDetailsByHdrCode('Category').subscribe(res=>{
    this.Category = res;
        
      }) 
  this.ps.getProductDetails().subscribe((data) =>{
    this.productname=data;
    console.log(data);
    
  })

  // this.ps.getcategorydetailsByCode('Category Type').subscribe(res =>{
  //   this.category = res;
  //   console.log(res);
    
  // })

    this.ProductForm = this.fb.group({
      Id:[], 
      CategoryId: ['',Validators.required],
      Name: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      BrandId: [],
      ProductCode: [''],
      Qty: [0],
      Classification:[,Validators.required],
      IsActive: [true],
      CreatedDate: [new Date()],
      CreatedByUserId: [this.authService.user.id],
      UpdatedDate: [new Date()],
      UpdatedByUserId: [this.authService.user.id]

  });

  if(this._data.Id) {
   
    this.ps.getProductById(this._data.Id).subscribe((productitem) => {
     
     this.productitem = productitem[0];
     console.log(this.productitem );
     

      this.ProductForm.get('Id').setValue(this.productitem['Id']);
      this.ProductForm.get('CategoryId').setValue(this.productitem['CategoryId']);
      this.ProductForm.get('Name').setValue(this.productitem['Name']);
      this.ProductForm.get('Description').setValue(this.productitem['Description']);
      this.ProductForm.get('BrandId').setValue(this.productitem['BrandId']);
      this.ProductForm.get('Classification').setValue(this.productitem['Classification']);
      this.ProductForm.get('ProductCode').setValue(this.productitem['ProductCode']);
      this.ProductForm.get('Qty').setValue(this.productitem['Qty']);
      this.ProductForm.get('IsActive').setValue(this.productitem['IsActive']);
     
  });

  }
  }

  get p(){
    return this.ProductForm.controls;
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

  const productData: productdetails = this.ProductForm.value;
    if (this.ProductForm.get('Id').value === null) {
        this.ProductForm.get('CreatedDate').setValue(new Date());
        this.ProductForm.get('CreatedByUserId').setValue(this.authService.user.id);
        
      }
      else{
      this.ProductForm.get('UpdatedDate').setValue(new Date());
      this.ProductForm.get('UpdatedByUserId').setValue(this.authService.user.id);
     

      }

      // const product:productdetails = {

      //   Id:this.ProductForm.get('Id').value,
      //   Code:this.ProductForm.get ('Code').value,
      //   ProductName: this.ProductForm.get('ProductName').value,
      //   Category: this.ProductForm.get('Category').value,
      //   IsActive: this.ProductForm.get('IsActive').value,
      //   CreatedDate: this.ProductForm.get('CreatedDate').value,
      //   CreatedByUserId: this.ProductForm.get('CreatedByUserId').value,
      //   UpdatedDate: this.ProductForm.get('UpdatedDate').value,
      //   UpdatedByUserId: this.ProductForm.get('UpdatedByUserId').value,
       
      // };



      
    this.ps.createProduct(productData).subscribe((result) => {
   
    var Data = result['message']
      
    Swal.fire({
      title:Data ,
         confirmButtonColor: '#FCB713',
         icon: "success",
     
     });
     this.matdiaref.close(true);

    
        this.matdiaref.close(true);
    });

}

}
