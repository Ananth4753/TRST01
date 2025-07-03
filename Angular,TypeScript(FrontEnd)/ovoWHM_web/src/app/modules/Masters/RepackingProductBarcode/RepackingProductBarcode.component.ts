import { Component, OnInit,OnDestroy, ViewChild, ViewEncapsulation ,ChangeDetectionStrategy, ChangeDetectorRef,  ElementRef, } from '@angular/core';
import { Router } from '@angular/router';
import { RepackigProductDetailsComponent } from './repackigProductDetails/repackigProductDetails.component';
import { AuthService } from 'app/core/auth/auth.service';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
import  Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { FormGroup,Validators,FormControl,FormBuilder } from '@angular/forms';
import { WarehouseService } from '../WareHouse/warehouse.service';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, takeUntil } from 'rxjs';
import { ProductviewService } from '../productview/productview.service';
import { productviewdetails } from '../productview/productview.type';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';
import { RepackingViewComponent } from './RepackingView/RepackingView.component';
import * as PDF417 from 'pdf417-generator';
import { Moment } from 'moment';
import {
  BsDatepickerConfig,
  BsDatepickerModule,
} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-RepackingProductBarcode',
  templateUrl: './RepackingProductBarcode.component.html',
  styleUrls: ['./RepackingProductBarcode.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: fuseAnimations
})
export class RepackingProductBarcodeComponent implements OnInit {
  @ViewChild('TABLE') table: ElementRef;
  selectedproductbarcodeItem: productviewdetails | null = null;
  pageSize: number = TABLE_PAGINATION_SIZE;
  date: any;
  isLoading: boolean = false;
  barcodescreen:boolean =false;
  barcodescreen3:boolean=false;
  barcodescreen0;boolean=false;
  productcodeId;
  WareHouseData;
  DropDownShow:Boolean
  filterForm: FormGroup;
  searchInputControl: FormControl = new FormControl();
  UserAccessRights;
  columnsToDisplay: string[] = ['WareHouse','BatchId','FlockName','Stackname','Product','Skuname','UOM','PackedDate','EggLayDate','ExpireDate1','Expiredate','NoOfQuantity','EggQuantity','URL','Delete'];
  productbarcodedataSource = new MatTableDataSource<any>();
  productbarcodeItem$: Observable<productviewdetails[]>;


  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _datepipe:DatePipe ,private fb_: FormBuilder,private WarehouseService:WarehouseService  ,private route:Router,private _matDialog: MatDialog, private _Productviewservice:ProductviewService,private ref: ChangeDetectorRef,private authservice:AuthService) {

   
   }
  code1 =

  `this.productcodeId[0].Url`
  
  code2=`this.productcodeId[0].Url`
  code3=`this.productcodeId[0].Url`
  c1 =

  `this.productcodeId[0].Url`
  
  c2=`this.productcodeId[0].Url`
  ngOnInit(): void {
    this.filterForm = this.fb_.group({
     
      WareHouseId:[]});
//     this.WarehouseService.getwarehousedetails().subscribe(res=>{
// this.WareHouseData = res;
//     })

    this.WarehouseService.getwarehousedetailsById(this.authservice.user.warehouseid).subscribe(res=>{
      this.WareHouseData = res;
      if(this.WareHouseData.length===1){
        this.DropDownShow = false;
      }else {
        this.DropDownShow = true; 
      }
          })
    this.productbarcodeItem$ = this._Productviewservice.productbarcodeItem$;
    console.log(
        this.productbarcodeItem$);
    
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

      this._Productviewservice.GetProductBarcodedetailsByWareHouseIdForRepackling(this.authservice.user.warehouseid).subscribe(data =>{
        this.productbarcodedataSource.data=data;
        console.log(this.productbarcodedataSource.data);
        
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
    this._Productviewservice.GetProductBarcodedetailsByWareHouseIdForRepackling(this.authservice.user.warehouseid).subscribe(data =>{
      this.productbarcodedataSource.data=data;
      console.log(this.productbarcodedataSource.data);
      
    })
  }

  WareHouse = null;
onWriterChange(ob){
this.WareHouse =  ob.value;
  let selectedBook = ob.value;
  console.log(ob);

  this._Productviewservice.GetProductBarcodedetailsByWareHouseIdForRepackling(selectedBook).subscribe(data=>{
    this.productbarcodedataSource.data=data;
  })

  
}
createproductBarcode():void{
      
    this.onEditbarcode(null);

};
DeleteBarcode(Id:number,WareHouseId:number,BatchId:string,Qty:Number){
console.log(Id);
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
this._Productviewservice.SetIsActiveForProductBarcode(Array).subscribe(res=>{
this.refresh();

console.log(res)

})
    
    Swal.fire('Deleted!', '', 'success')
  } else if (result.isDenied) {

    // Swal.fire('Barcode Is  not Deleted', '', 'info')
  }
})

}
onEditbarcode(batchId:number): void {
    // Open the dialog
    const dialogRef = this._matDialog.open(RepackigProductDetailsComponent, {
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
    this.route.navigate(['/repackingproducts'])

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
  
     this.route.navigate(["/repackingproducts"]);
  }

printPage() {

    window.print();

  }

toggleStatus3(Id) {

    this._Productviewservice.getproductBarcodeById(Id).subscribe((data) =>{
        this.productcodeId=data;
        console.log(data[0]);
        
   
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

  toggleStatus2(Id) {

    this._Productviewservice.getproductBarcodeById(Id).subscribe((data) =>{
        this.productcodeId=data;
        console.log(data[0]);
        
   
        var canvas = document.getElementById("bar1")
        PDF417.draw(  this.productcodeId[0].Url, canvas)
        console.log(this.c1);
        var canvas = document.getElementById("bar2")
        PDF417.draw(this.productcodeId[0].Url, canvas)
        console.log(this.c2);
   
    });
 
    
    
    this.barcodescreen = true;
    this.barcodescreen0=true;
    this.barcodescreen3= false;
  }

ngOnDestroy(): void {
  // Unsubscribe from all subscriptions
  this._unsubscribeAll.next(null);
  this._unsubscribeAll.complete();
}

}
