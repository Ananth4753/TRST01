import { Component, OnInit,Inject,ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


import { AuthService } from 'app/core/auth/auth.service';
import { PackagingmaterialService } from 'app/modules/Masters/packagingmaterial/packagingmaterial.service';
import { WarehouseService } from 'app/modules/Masters/WareHouse/warehouse.service';
import { PackingslipService } from 'app/modules/Masters/packingslip/packingslip.service';
import { LookupService } from 'app/modules/Masters/Lookup/lookup.service';
import Swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: 'app-stockmaterial',

  templateUrl: './stockmaterial.component.html',
  styleUrls: ['./stockmaterial.component.css']
})
export class StockmaterialComponent implements OnInit {

  PackingForm : FormGroup;
  searchInputControl: FormControl = new FormControl();
  warehousedetails:any;
  HDRdetails:any;
  displayproductlist
  warehousename: any[];
  Show:boolean=false;
  Pk;
  Ware;
Packingmaterial;
  constructor( private route:Router, 
    private _formBuilder: FormBuilder,private _LookupService : LookupService,
  
    private auth:AuthService,private PackagingmaterialService:PackagingmaterialService,
    
private warehouse:WarehouseService,
private chRef:ChangeDetectorRef ,
private _PackingslipService:PackingslipService,

    // public navCtrl: NavController,

  
    


    

 
  ) {   }
  lookupdtl;



  onBookChange(event){
    let selectedBook = event.value;

        this.PackagingmaterialService.getPackageDetailsByWarehouseId(selectedBook).subscribe((data) => {
  this.Packingmaterial = data;
console.log(data)
      
     
  });

  }

   ngOnInit(): void {
  //   this.PackagingmaterialService.GetPackingMaterialForDropDown(this.).subscribe((data) => {
  // this.Packingmaterial = data;
      
     
  // });

  this.PackagingmaterialService.getPackageDetails().subscribe(res=>{
    this.Packingmaterial = res;
    console.log(res);
    
  })

this.warehouse.getwarehousedetailsById(this.auth.user.warehouseid).subscribe(res=>{
  this.warehousedetails = res
})

this.PackagingmaterialService.getPackageDetailsByWarehouseId(this.auth.user.warehouseid).subscribe(res=>{
  this.displayproductlist = res;
  console.log(res);
  
})
    this._LookupService.getLookupDtlDetailsByHdrCode('UOM').subscribe(data =>{
      this.lookupdtl=data;
    })
  
      

 


    this.PackingForm = this._formBuilder.group({ 
      Id:[],
      Name : [],
      PackingMaterialId:['',Validators.required],
      AvailableStock : ['',Validators.required],
 
      IsAcive: [true],
     CreatedDate: [new Date()],
     CreatedByUserId:[this.auth.user.id] ,
     UpdatedDate: [new Date()],
     UpdateByUserId: [this.auth.user.id],
     WareHouseId:['',Validators.required]
      
  });

}

OnChangeProductName(E){

}

onSave(){

  this.PackagingmaterialService.CheckPackingStockAvailability(this.PackingForm.get('PackingMaterialId').value,this.PackingForm.get('WareHouseId').value).subscribe((data:any)=>{
console.log(data);

    if(data.length>0){
    
    const obj={
      'Id':data[0]['Id'],
      'WareHouseId':this.PackingForm.get('WareHouseId').value,
      'PackingMaterialId':this.PackingForm.get('PackingMaterialId').value,
      'Name':null,
      'AvailableStock':this.PackingForm.get('AvailableStock').value,
      'IsAcive':1,
      'CreatedByUserId':this.auth.user.id,
      'CreatedDate':new Date(),
      'UpdateByUserId':this.auth.user.id,
      'UpdatedDate':new Date()
    }

    
    
    this.PackagingmaterialService.createPackageStock(obj).subscribe((data1)=>{
     
      this.PackingForm.get('AvailableStock').setValue('');
    //   this.PackagingmaterialService.CheckPackingStockAvailability(this.PackingForm.get('PackingMaterialId').value,this.PackingForm.get('WareHouseId').value).subscribe((result)=>{
    //     // this.displayproductlist=result;
    //   $("#datatable").DataTable().clear();
    //   $("#datatable").DataTable().destroy();
    //   this.chRef.detectChanges();
    //   // this._u.dataTables("Crop");
    //  })
     this.PackagingmaterialService.getPackageDetailsByWarehouseId(this.auth.user.warehouseid).subscribe(res=>{
      this.displayproductlist = res;
      console.log(res);  
      $("#datatable").DataTable().clear();
      $("#datatable").DataTable().destroy();
      this.chRef.detectChanges();
      
    })
   
    })
    
    }
    else{
      const obj={
        'Id':null,
        'WareHouseId':this.PackingForm.get('WareHouseId').value,
       'Name':null,
        'PackingMaterialId':this.PackingForm.get('PackingMaterialId').value,
        'AvailableStock':this.PackingForm.get('AvailableStock').value,
        'IsAcive':1,
        'CreatedByUserId':this.auth.user.id,
        'CreatedDate':new Date(),
        'UpdateByUserId':this.auth.user.id,
        'UpdatedDate':new Date()
      }
      console.log(obj);
      
      this.PackagingmaterialService.createPackageStock(obj).subscribe((data1)=>{
        this.PackagingmaterialService.getPackageDetailsByWarehouseId(this.auth.user.warehouseid).subscribe(res=>{
          this.displayproductlist = res;
          console.log(res);  
          $("#datatable").DataTable().clear();
          $("#datatable").DataTable().destroy();
          this.chRef.detectChanges();
          
        })
    
        this.PackingForm.get('AvailableStock').setValue('');
        // this.PackagingmaterialService.getCheckProdAvailByProdId(this.PackingForm.get('ProductId').value).subscribe((data:any)=>{
        //   console.log(data);
        //   this._service.getCheckProductDtlBywarehouseproduct(this.PackingForm.get('ProductId').value,this.AuthService.user.warehouseid).subscribe((result)=>{
        //     this.displayproductlist=result;
        //    $("#datatable").DataTable().clear();
        //    $("#datatable").DataTable().destroy();
        //   this.chRef.detectChanges();
        //   this._u.dataTables("Crop");
        //  })
        // });
      })
      
    }
    })



 
}
 
 
 
}
