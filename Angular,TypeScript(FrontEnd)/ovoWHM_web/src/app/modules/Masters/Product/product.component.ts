import { Component, OnInit,OnDestroy, ViewChild, ViewEncapsulation ,ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from './product.service';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, takeUntil } from 'rxjs';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { productdetails,productitems } from './product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: fuseAnimations
})
export class ProductComponent implements OnInit {

  selectedProductItem: productitems | null = null;
  productItems$: Observable<productdetails[]>;
  isLoading: boolean = false;
  searchInputControl: FormControl = new FormControl();

  columnsToDisplay: string[] = ['Edit','Classification','CategoryId','Name', 'Description', 'BrandId', 'ProductCode','IsActive', 'UpdatedDate'];

  ProductdataSource = new MatTableDataSource<productdetails>();

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _productservice:ProductService, private _matDialog: MatDialog) { }

  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
      if (this.ProductdataSource) {
          this.ProductdataSource.paginator = value;
      }
  }

  @ViewChild(MatSort, { static: false })
  set sort(value: MatSort) {
      if (this.ProductdataSource) {
          this.ProductdataSource.sort = value;
      }
  }
  ngOnInit() {
    this.productItems$ = this._productservice.productItems$;
console.log( this.productItems$);

    this.refresh();

    // Subscribe to search input field value changes
    this.searchInputControl.valueChanges.pipe(
            takeUntil(this._unsubscribeAll),
            debounceTime(300),
            distinctUntilChanged(),
            map((query) => {
                this.ProductdataSource.filter = query.trim().toLowerCase();
            })
        ).subscribe();
  }

  refresh(): void {
    this._productservice.getProductDetails().subscribe((data) => {
        this.ProductdataSource.data = data;
        console.log(data);
    });
}
createProduct(): void {
  this.onEditProduct(null);
}

onEditProduct(Id:number): void {
  // Open the dialog
  const dialogRef = this._matDialog.open(ProductdetailComponent, {
      autoFocus: false,
      data : { Id },  disableClose: true
  });

  dialogRef.afterClosed()
      .subscribe((result) => {
          if(result) {
              this.refresh();
              
          }
      });
}
ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

}
