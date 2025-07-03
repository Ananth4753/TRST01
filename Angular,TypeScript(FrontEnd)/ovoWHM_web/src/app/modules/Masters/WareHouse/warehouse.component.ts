import { Component, OnInit,ChangeDetectionStrategy,ViewChild,ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup,FormControl} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';
import { debounceTime,distinctUntilChanged,map,Observable,Subject,takeUntil } from 'rxjs';
import { AuthService } from 'app/core/auth/auth.service';
import { Router } from '@angular/router';
import { WarehouseService } from './warehouse.service';
import { WarehousedetailsComponent } from './warehousedetails/warehousedetails.component';
import { UseraccessRightsService } from 'app/modules/services/useraccessRights.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
  encapsulation: ViewEncapsulation.None, 
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: fuseAnimations

})
export class WarehouseComponent implements OnInit {

  pageSize: number = TABLE_PAGINATION_SIZE;
  isLoading: boolean = false;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  warehouse$: Observable<any[]>;
  searchInputControl: FormControl = new FormControl();
  uomForm: FormGroup;
  UserAccessRights;
  columnsToDisplay: string[] = ['Edit', 'Name','ContactName','ContactNo','Address','IsActive', 'UpdatedDate'];
  constructor(private  WarehouseService : WarehouseService  ,private _matDialog:MatDialog,private authservice:AuthService,private route:Router,private Useraccess:UseraccessRightsService) { }
  warehouseDataSource = new MatTableDataSource<any>();

  ngOnInit() {

    this.warehouse$ = this.WarehouseService.warehouse$ ;   
    this.refresh(); 
  

   this.searchInputControl.valueChanges

 .pipe(

     takeUntil(this._unsubscribeAll),

     debounceTime(300),

     distinctUntilChanged(),

     map((query) => {

         this.warehouseDataSource.filter = query.trim().toLowerCase();

     })

 ).subscribe();
  }

  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
      if (this.warehouseDataSource) {
          this.warehouseDataSource.paginator = value;
      }
  }

  @ViewChild(MatSort, { static: false })
  set sort(value: MatSort) {
      if (this.warehouseDataSource) {
          this.warehouseDataSource.sort = value;
      }
  }

  refresh(): void {    
    this.WarehouseService.getwarehousedetails().subscribe((data) => {
      
      this.warehouseDataSource.data = data;
      console.log(data);
    });   

}
  createwarehouse(): void {
    this.onEditWarehouse(null);
      }

onEditWarehouse(warehouseId: number): void {
    // Open the dialog
    const dialogRef = this._matDialog.open(WarehousedetailsComponent, {
        autoFocus: false,
        data     : { warehouseId }
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
