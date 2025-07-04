import { Component, OnInit,OnDestroy, ViewChild, ViewEncapsulation ,ChangeDetectionStrategy, ChangeDetectorRef,  ElementRef, } from '@angular/core';
import { Router } from '@angular/router';
import { ProductviewdetailsComponent } from './productviewdetails/productviewdetails.component';
import { AuthService } from 'app/core/auth/auth.service';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { FormGroup,Validators,FormControl,FormBuilder } from '@angular/forms';
import { WarehouseService } from '../WareHouse/warehouse.service';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, takeUntil } from 'rxjs';
import { ProductviewService } from './productview.service';
import { productviewdetails } from './productview.type';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';
import { ProductbarcodeviewComponent } from './productbarcodeview/productbarcodeview.component';
import * as PDF417 from 'pdf417-generator';
import { Moment } from 'moment';
@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: fuseAnimations
})
export class ProductviewComponent implements OnInit {
  @ViewChild('TABLE') table: ElementRef;
  selectedproductbarcodeItem: productviewdetails | null = null;
  pageSize: number = TABLE_PAGINATION_SIZE;
   DropDownShow:boolean;
  isLoading: boolean = false;
  barcodescreen:boolean =false;
  barcodescreen3:boolean=false;
  barcodescreen0;boolean=false;
  productcodeId;
  WareHouseData;
  ShowDtl:boolean;
  filterForm: FormGroup;
  searchInputControl: FormControl = new FormControl();
  UserAccessRights;
  columnsToDisplay: string[] = ['WareHouse','BatchId','FlockName','Stackname','Product','Skuname','UOM','PackedDate','EggLayDate','ExpireDate','ToExpireNoOfDays','NoOfQuantity','EggQuantity','URL','Delete'];
  columnsToDisplay1: string[] = ['WareHouse','BatchId','FlockName','Stackname','Product','Skuname','UOM','PackedDate','EggLayDate','ExpireDate','ToExpireNoOfDays','NoOfQuantity','EggQuantity','URL'];
  productbarcodedataSource = new MatTableDataSource<any>();
  productbarcodeItems$: Observable<productviewdetails[]>;


  private _unsubscribeAll: Subject<any> = new Subject<any>();
  

  constructor(     private fb_: FormBuilder,private WarehouseService:WarehouseService  ,private route:Router,private _matDialog: MatDialog, private _Productviewservice:ProductviewService,private ref: ChangeDetectorRef,private authservice:AuthService) { }
  c1 =

  `this.productcodeId[0].Url`
  
  c2=`this.productcodeId[0].Url`
  code1 =

  `this.productcodeId[0].Url`
  
  code2=`this.productcodeId[0].Url`
  code3=`this.productcodeId[0].Url`


  ngOnInit(): void {
    this.filterForm = this.fb_.group({
     
      WareHouseId:[]});
    this.WarehouseService.getwarehousedetailsById(this.authservice.user.warehouseid).subscribe(res=>{
this.WareHouseData = res;
if(this.WareHouseData.length===1){
  this.DropDownShow = false;
}else {
  this.DropDownShow = true; 
}
    })
    this.productbarcodeItems$ = this._Productviewservice.productbarcodeItems$;
    console.log(
        this.productbarcodeItems$);
    
    this.refresh();

        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges.pipe(
          takeUntil(this._unsubscribeAll),
          debounceTime(300),
          distinctUntilChanged(),
          map((query) => {
              this.productbarcodedataSource.filter = query.trim().toLowerCase();
          })
      ).subscribe();

      this._Productviewservice.GetProductBarcodedetailsByWareHouseId(this.authservice.user.warehouseid).subscribe(data =>{
        this.productbarcodedataSource.data=data;
        console.log(this.productbarcodedataSource.data);
        
      })
  }

  ExportTOExcel() {
        
 
  this._Productviewservice.GetProductBarcodedetailsByWareHouseId(this.WareHouse).subscribe((data)=>{
      console.log(data);
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data)
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  XLSX.writeFile(wb, 'Product_BarCode.xlsx');
  })
}
  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    if (this.productbarcodedataSource) {
        this.productbarcodedataSource.paginator = value;
    }
}
@ViewChild(MatSort, { static: false })
set sort(value: MatSort) {
    if (this.productbarcodedataSource) {
        this.productbarcodedataSource.sort = value;
    }
}
refresh(): void {
  this._Productviewservice.GetProductBarcodedetailsByWareHouseId(this.authservice.user.warehouseid).subscribe(data =>{
    this.productbarcodedataSource.data=data;
    console.log(this.productbarcodedataSource.data);
    
  })
}
WareHouse = null;
onWriterChange(ob){
this.WareHouse =  ob.value;
  let selectedBook = ob.value;
  console.log(ob);

  this._Productviewservice.GetProductBarcodedetailsByWareHouseId(selectedBook).subscribe(data=>{
    this.productbarcodedataSource.data=data;
  })

  
}
createproductBarcode():void{
      
    this.onEditbarcode(null);

};
DeleteBarcode(Id:number,WareHouseId:number,BatchId:string,Qty:number){
console.log(Id,WareHouseId,BatchId)
Swal.fire({
  title: 'Do you want to delete ?',
  showDenyButton: false,
  showCancelButton: true,
  confirmButtonText: 'Yes',
  // denyButtonText: `No`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {

   const  Array = {Id:Id,
                   WareHouseId:WareHouseId,
                    BatchId:BatchId,
                    Stock:Qty}

                    console.log(Array)
this._Productviewservice.SetIsActiveForProductBarcode(Array).subscribe(res=>{
  console.log(Array)
  this.refresh();



})


    
    Swal.fire('Deleted!', '', 'success')
  } else if (result.isDenied) {

    // Swal.fire('Barcode Is  not Deleted', '', 'info')
  }
})

}
onEditbarcode(batchId:number): void {
    // Open the dialog
    const dialogRef = this._matDialog.open(ProductviewdetailsComponent, {
        autoFocus: false,
        data : { batchId }
    });
dialogRef.afterClosed()
    .subscribe((result) => {
        if(result) {
            this.refresh();
        }
    });
}
onEditbarcode1(batchId:number): void {
    this.route.navigate(['/barcodeview'])

}

// Showbarcode(Url:any){
//     const dialogRef = this._matDialog.open(ProductbarcodeviewComponent ,{
//         autoFocus: false,
//         data : { Url},  disableClose: true
//     });
  
//     dialogRef.afterClosed()
//         .subscribe((result) => {
//             if(result) {
//                 this.refresh();
                
//             }
//         }); 

// }

refreshes() {
  
     this.route.navigate(["/productview"]);
  }

printPage() {

    window.print();

  }
barcodeId;
toggleStatus(Id) {
  this.barcodeId=Id;
  console.log(this.barcodeId)
    this._Productviewservice.getproductBarcodeById(Id).subscribe((data) =>{
        this.productcodeId=data;
        console.log(data[0]);
        var canvas = document.getElementById("bar1")
        PDF417.draw(  this.productcodeId[0].Url, canvas)
        console.log(this.c1);
        var canvas = document.getElementById("bar2")
        PDF417.draw(this.productcodeId[0].Url, canvas)
        console.log(this.c2);
   
        // var canvas = document.getElementById("barcode")
        // PDF417.draw(  this.productcodeId[0].Url, canvas)
        // console.log(this.code1);
        // var canvas = document.getElementById("barcode2")
        // PDF417.draw(this.productcodeId[0].Url, canvas)
        // console.log(this.code2);
        // var canvas = document.getElementById("barcode3")
        // PDF417.draw(this.productcodeId[0].Url, canvas)
        // console.log(this.code3);
    });
 
    
    this.barcodescreen = true;
    this.barcodescreen0=true;
    this.barcodescreen3= false;
  }
  
  toggleStatus2(Id) {
   console.log(this.barcodeId)
        this._Productviewservice.getproductBarcodeById(Id).subscribe((data) =>{
            this.productcodeId=data;
            console.log(data[0]);
            // var canvas = document.getElementById("bar1")
            // PDF417.draw(  this.productcodeId[0].Url, canvas)
            // console.log(this.c1);
            // var canvas = document.getElementById("bar2")
            // PDF417.draw(this.productcodeId[0].Url, canvas)
            // console.log(this.c2);

             var canvas = document.getElementById("barcode")
        PDF417.draw(  this.productcodeId[0].Url, canvas)
        console.log(this.code1);
        var canvas = document.getElementById("barcode2")
        PDF417.draw(this.productcodeId[0].Url, canvas)
        console.log(this.code2);
        var canvas = document.getElementById("barcode3")
        PDF417.draw(this.productcodeId[0].Url, canvas)
        console.log(this.code3);
         
        });
     
        
  this.barcodescreen3 = true;
         this.barcodescreen0=true;
         this.barcodescreen =false;
       

      }
ngOnDestroy(): void {
  // Unsubscribe from all subscriptions
  this._unsubscribeAll.next(null);
  this._unsubscribeAll.complete();
}

}

