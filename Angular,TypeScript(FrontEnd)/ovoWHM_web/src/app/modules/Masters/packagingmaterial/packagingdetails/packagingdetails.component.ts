
import { Component, OnInit,ViewChild, ViewEncapsulation,HostListener, Inject, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PackagingmaterialService } from '../packagingmaterial.service';
import { AuthService } from 'app/core/auth/auth.service';
import { WarehouseService } from 'app/modules/Masters/WareHouse/warehouse.service';
import { PackingslipService } from 'app/modules/Masters/packingslip/packingslip.service';
import { LookupService } from 'app/modules/Masters/Lookup/lookup.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-packagingdetails',
  templateUrl: './packagingdetails.component.html',
  styleUrls: ['./packagingdetails.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class PackagingdetailsComponent implements OnInit {
  PackingForm : FormGroup;
  searchInputControl: FormControl = new FormControl();
  warehousedetails:any;
  HDRdetails:any;
  warehousename: any[];


  constructor( private route:Router, 
    private _formBuilder: FormBuilder,private _LookupService : LookupService,
    private flockservice:PackagingmaterialService,
    private auth:AuthService,
    private matDialogRef: MatDialogRef<PackagingdetailsComponent>,
private warehouse:WarehouseService,
private _PackingslipService:PackingslipService,

    // public navCtrl: NavController,
    @Inject(MAT_DIALOG_DATA)
  
    

    private _data: {
      Id: any;
    }
    

 
  ) { }
  lookupdtl;
   ngOnInit(): void {

    this._LookupService.getLookupDtlDetailsByHdrCode('UOM').subscribe(data =>{
      this.lookupdtl=data;
    })
    this.warehouse.getwarehousedetails().subscribe((data) =>{
      this.warehousedetails = data;
        console.log(data)
      });
      
this.flockservice.getPackageDetails().subscribe(data=>{
  this.HDRdetails=data;
console.log(data);

});
 


    this.PackingForm = this._formBuilder.group({ 
      Id:[],
      Name : ['', [Validators.required]],
      Type  : ['', Validators.required],
    
      UOMId : [, Validators.required],
      IsAcive: [true],
     CreatedDate: [new Date()],
     CreatedByUserId:[this.auth.user.id] ,
     UpdatedDate: [new Date()],
     UpdateByUserId: [this.auth.user.id],
    
      
  });
  if(this._data.Id) {
    this.flockservice.getPackageDetailsById(this._data.Id).subscribe((Data) => {
      const Packingdetail = Data[0];
      console.log(Data);
    
      this.PackingForm.get('Id').setValue(Packingdetail['Id']);
      this.PackingForm.get('Name').setValue(Packingdetail['Name']);
      this.PackingForm.get('Type').setValue(Packingdetail['Type']);

      this.PackingForm.get('UOMId').setValue(Packingdetail['UOMId']);
      this.PackingForm.get('IsAcive').setValue(Packingdetail['IsAcive']);
      this.PackingForm.get('CreatedByUserId').setValue(Packingdetail['CreatedByUserId']);
      this.PackingForm.get('CreatedDate').setValue(Packingdetail['CreatedDate']);
      this.PackingForm.get('UpdateByUserId').setValue(Packingdetail['UpdateByUserId']);
      this.PackingForm.get('UpdatedDate').setValue(Packingdetail['UpdatedDate']);

  });
  }
}

onSave(){
  console.log(this.PackingForm.value);
  {
    const packingdata  = this.PackingForm.value;

    if(packingdata.Id === null) {

      packingdata.CreatedDate = new Date();

      packingdata.CreatedByUserId = this.auth.user.id;
  
     
    }
    else{
    packingdata.UpdatedDate = new Date();

    packingdata.UpdateByUserId = this.auth.user.id;

    

  
    }
    
  this.flockservice.createPackage(packingdata).subscribe((result) => {
    console.log(result);
    
    var Data = result['message']
      
      Swal.fire({
        title:Data ,
           confirmButtonColor: '#FCB713',
           icon: "success",
       
       });
       this.matDialogRef.close(true);
  });
}
  
  
}
 
  onCancel(){
    this.matDialogRef.close(false);
  }
  onClose(){
    this.matDialogRef.close(false);
  }

}
