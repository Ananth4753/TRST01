
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fuseAnimations } from '@fuse/animations';
import { MatTableDataSource } from '@angular/material/table';
import { SkudetailComponent } from './skudetail/skudetail.component';
import { SkuService } from './sku.service';
import {SKUItem,SKUDetail} from '././sku.type';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, takeUntil } from 'rxjs';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';


@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: fuseAnimations
})
export class SkuComponent implements OnInit {

  pageSize: number = TABLE_PAGINATION_SIZE;
  selectedSKUItem: SKUDetail | null = null;
  searchInputControl: FormControl = new FormControl();
  SKUItems$: Observable<SKUDetail[]>;
  isLoading: boolean = false;
  columnsToDisplay: string[] = ['Edit','code','Name','UOM', 'Qty', 'ProductId',  'IsAcive','UpdatedDate'];

              SKUDataSource = new MatTableDataSource<SKUDetail>();

    private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _matDialog: MatDialog,private _skuservice:SkuService) { }

  @ViewChild(MatPaginator, { static: false })
    set paginator(value: MatPaginator) {
        if (this.SKUDataSource) {
            this.SKUDataSource.paginator = value;
        }
    }

    @ViewChild(MatSort, { static: false })
    set sort(value: MatSort) {
        if (this.SKUDataSource) {
            this.SKUDataSource.sort = value;
        }
    }

  ngOnInit(): void {

    this.SKUItems$ = this._skuservice.skuItems$;

    console.log( this.SKUItems$);
    
    this.refresh();

    // Subscribe to search input field value changes
    this.searchInputControl.valueChanges
        .pipe(
            takeUntil(this._unsubscribeAll),
            debounceTime(300),
            distinctUntilChanged(),
            map((query) => {
                this.SKUDataSource.filter = query.trim().toLowerCase();
            })
        ).subscribe();
  }

  refresh(): void {
    this._skuservice.getSKUDetails().subscribe((data) => {

        this.SKUDataSource.data= data;
        console.log(data);
        
     
    });
}

createSKU(): void {
  this.onEditSKU(null);
}

onEditSKU(Id:number): void {
  // Open the dialog
  const dialogRef = this._matDialog.open(SkudetailComponent, {
      autoFocus: false,
      data     : { Id }
  });

  dialogRef.afterClosed()
      .subscribe((result) => {
       
          if(result) {
              this.refresh();
              console.log(result);
          }
      });
}

ngOnDestroy(): void {
  // Unsubscribe from all subscriptions
  this._unsubscribeAll.next(null);
  this._unsubscribeAll.complete();
}

}
