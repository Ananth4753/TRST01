import { Component, OnInit,ViewChild, ViewEncapsulation,HostListener, Inject, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
import { StackbarcodeService } from '../../StackBarcode/stackbarcode.service';
import { ProductviewService } from '../productview.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { Observable } from "rxjs";
import { SkuService } from '../../Sku/sku.service';
import { WarehouseService } from '../../WareHouse/warehouse.service';
import { map, startWith } from "rxjs/operators";


@Component({
  selector: 'app-productviewdetails',
  templateUrl: './productviewdetails.component.html',
  styleUrls: ['./productviewdetails.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ProductviewdetailsComponent implements OnInit {
  BarcodeForm : FormGroup;
  selected;
  orgname1='';
  filterdOptions = [];
  customerFilter: Observable<any>;
  custom = new FormControl();
  customerList ;
  maxDate
  searchInputControl: FormControl = new FormControl();
  barcode: number;
  selectedUser: any;
  flockdetails: any;
  skudetails: any;
  productdetails: any;
  Warehousedetails: any;
  stackdetails: any;
  IsRepacking:boolean = true;
  // import("c:/Users/Naidu CH/Desktop/Ovo_WHS/ovoWHM_web/src/app/modules/Masters/StackBarcode/stack.type").Stackdetails[];

  constructor(private route:Router, 
    private _formBuilder: FormBuilder,
    private productviewservice:ProductviewService,
    private auth:AuthService,
    private _datepipe:DatePipe,
    private WarehouseService:WarehouseService,
private _stackservice :StackbarcodeService,
private SkuService:SkuService,
    // public navCtrl: NavController,
    @Inject(MAT_DIALOG_DATA)
    

    private _data: {
      BarcodeId: any;
},  
  
    private matDialogRef: MatDialogRef<ProductviewdetailsComponent>,) { }
    SkuArr;
  ngOnInit(): void {

    const ToadayDate = new Date()
    ToadayDate.setDate(ToadayDate.getDate());
    const Date1 = this._datepipe.transform(ToadayDate, 'yyyy-MM-dd');
    this.maxDate = Date1;
this.SkuService.getSKUDetails().subscribe(res=>{
this.SkuArr  = res;
})
  
    // this.customerFilter = this.custom.valueChanges.pipe(
    //   startWith(""),
    //   map(value => 
    
    //      this._filter(value)
       
         
    
    //   )
    // ); 

    this.productviewservice.GetProductBarcodedetailsByWareHouseId(this.auth.user.warehouseid).subscribe(data =>{
    this.customerList = data;
      
    })
    this.productviewservice.getflockDetails().subscribe(data=>{

      this.flockdetails=data;
  
   
  
     
  
  } );
  this._stackservice.getStackDetails().subscribe(res =>{
    this.stackdetails=res;
  })
  
    this.productviewservice.getskuDetails().subscribe(data=>{
  
      this.skudetails=data;
  
  
  
     
  
  })
  
  this.productviewservice.getproductDetails().subscribe(data=>{
  
    this.productdetails=data;
  
    
  
  
  
  })
  
  this.WarehouseService.getwarehousedetailsById(this.auth.user.warehouseid).subscribe(data=>{
    this.Warehousedetails=data;
    console.log(data);
    
  })
  
  this.productviewservice.getwarehouseDetails().subscribe(data=>{
  
   
  
 
  
   
  
  })
    
    this.BarcodeForm = this._formBuilder.group({
      BatchId  : ['0'],
      FlockId  : ['', Validators.required],
      StackId  : ['', Validators.required],
      ProductId  : ['', Validators.required],
      SkuId  : ['', Validators.required],
      PackedDate  : ['', Validators.required],
    //  Url : ['https://ovotrace.trst01.in/0265DF46-739A-45EF-845D-E8686FEBF726', Validators.required],
      WareHouseId : ['', Validators.required],
      NoOfQuantity : ['', [Validators.required]],
      IsRepacking:[0],
      RePackingBatchId:[''],
      RePackingQty:[],
      RePackingSKUId:[],
      EggLayDate:[],
      EggQuantity:[],
      ToExpireNoOfDays:['', [Validators.required]],
      IsActive: [true],
     CreatedDate: [new Date()],
     CreatedByUserId:[this.auth.user.id] ,
     UpdatedDate: [new Date()],
    UpdatedByUserId: [this.auth.user.id]

      
  });

  const FromDate = new Date()
  FromDate.setDate(FromDate.getDate());
  const FromDate1 = this._datepipe.transform(FromDate, 'yyyy-MM-dd');
  this.BarcodeForm.get('PackedDate').setValue(FromDate1);
  
  if(this._data.BarcodeId) {
    this.productviewservice.getproductBarcodeDetailsById(this._data.BarcodeId).subscribe((Data) => {
      const Barcodedetail = Data[0];
      this.BarcodeForm.get('Id').setValue(Barcodedetail['Id']);
      this.BarcodeForm.get('BatchId').setValue(Barcodedetail['BatchId']);
      this.BarcodeForm.get('FlockId').setValue(Barcodedetail['FlockId']);
      this.BarcodeForm.get('StackId').setValue(Barcodedetail['StackId']);
      this.BarcodeForm.get('ProductId').setValue(Barcodedetail['ProductId']);
      this.BarcodeForm.get('SkuId').setValue(Barcodedetail['SkuId']);
      this.BarcodeForm.get('DateYear').setValue(Barcodedetail['DateYear']);
      this.BarcodeForm.get('WarehouseId').setValue(Barcodedetail['WarehouseId']);
      this.BarcodeForm.get('NoOfQuantity').setValue(Barcodedetail['NoOfQuantity']);
      //this.BarcodeForm.get('Url').setValue(Barcodedetail['Url']);
      this.BarcodeForm.get('CreatedByUserId').setValue(Barcodedetail['CreatedByUserId']);
      this.BarcodeForm.get('CreatedDate').setValue(Barcodedetail['CreatedDate']);
      this.BarcodeForm.get('UpdatedByUserId').setValue(Barcodedetail['UpdatedByUserId']);
      this.BarcodeForm.get('UpdatedDate').setValue(Barcodedetail['UpdatedDate']);
  });
  }

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
  // private _filter(value: string): any {
   
  //   const filterValue = value;

  //   return this.customerList.filter(customer => {
  
  //     return customer.BatchId.indexOf(filterValue) === 0;
  //   });
  // }
StackData;
SKUId=null;
onBatchChange(e){

// this.productviewservice.getproductBarcodeByBatchId(e).subscribe(res=>{
//   console.log(res);
//   const Data = res[0];
//   this.BarcodeForm.get('RePackingSKUId').setValue(Data['SKU']);

//   const recentdata1 = this.SkuArr.filter(e=>e.Name == Data['SKU']) ;

// console.log(recentdata1);

//   this.SKUId = recentdata1[0].Id;
//   console.log(this.SKUId);
  
// })

}
  OnWarehouseChange(event){
    const whId = event.value ;
  
    this._stackservice.GetstackDtlByWareHouseId(whId).subscribe(data=>{
    this.StackData = data;
   })
    

  }
  SkuQty = 0;
  OnProductChange(Event){
const ProductId = Event.value;
this.SkuService.getSKUByProductId(ProductId).subscribe(res=>{
const Data = res[0];
this.SkuQty = Data['Qty'];

this.BarcodeForm.get('SkuId').setValue(Data['Id'])
})
  }
  selectPartialCheckbox(){


   if(this.BarcodeForm.get('IsRepacking').value == true){
this.IsRepacking = true;


   }
   else{
this.IsRepacking = false;

   }

  }
  onSave(){
   

    {
      // const Barcodedata  = this.BarcodeForm.value;

    



const Barcodedata = {
  Id:null,
  "BatchId" :this.BarcodeForm.get('BatchId').value,
  "FlockId":this.BarcodeForm.get('FlockId').value,
  "StackId":this.BarcodeForm.get('StackId').value,
  "ProductId":this.BarcodeForm.get('ProductId').value,
  "WareHouseId":this.BarcodeForm.get('WareHouseId').value,
  "SkuId":this.BarcodeForm.get('SkuId').value,
  "PackedDate":this.BarcodeForm.get('PackedDate').value,
"NoOfQuantity":this.BarcodeForm.get('NoOfQuantity').value,
"EggQuantity":(this.BarcodeForm.get('NoOfQuantity').value) * this.SkuQty ,
"IsRepacking":this.BarcodeForm.get('IsRepacking').value,
"RePackingBatchId":this.BarcodeForm.get('RePackingBatchId').value,
"RePackingQty":this.BarcodeForm.get('RePackingQty').value,
"RePackingSKUId":this.SKUId,
"ToExpireNoOfDays":this.BarcodeForm.get('ToExpireNoOfDays').value,
"EggLayDate":this.BarcodeForm.get('EggLayDate').value,
"IsActive":this.BarcodeForm.get('IsActive').value,
"CreatedDate":this.BarcodeForm.get('CreatedDate').value,
"CreatedByUserId":this.BarcodeForm.get('CreatedByUserId').value,
"UpdatedDate":this.BarcodeForm.get('UpdatedDate').value,
"UpdatedByUserId":this.BarcodeForm.get('UpdatedByUserId').value
}

  
      if(Barcodedata.Id === null) {
  
        Barcodedata.CreatedDate = new Date();
  
        Barcodedata.CreatedByUserId = this.auth.user.id;
        
      }
  else{
          Barcodedata.UpdatedDate = new Date();
          Barcodedata.UpdatedByUserId = this.auth.user.id;
    
    }
      
  
    this.productviewservice.createproductBarcode(Barcodedata).subscribe((result) => {
    this.matDialogRef.close(true); 
        var Data = result['message']
        Swal.fire({
          title:Data ,
             confirmButtonColor: '#FCB713',
             icon: "success"});
         this.matDialogRef.close(true);
  
      },(err)=>{
console.log(err);

      Swal.fire({
        title:"BatchId alredy exist , try with another" ,
           confirmButtonColor: '#FCB713',
           icon: "warning",
       
       });
       
    });
    }

    
    
  }
  
  get pb(){
    return this.BarcodeForm.controls;
  }
    
    
    onCancel(){
      this.matDialogRef.close(false);
    }
    onClose(){
      this.matDialogRef.close(false);
    }
  
  
  

}
