import { Component, OnInit,OnDestroy, ViewChild, ViewEncapsulation ,ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {  Router } from '@angular/router';
import { PackagingdetailsComponent } from './packagingdetails/packagingdetails.component';
import { AuthService } from 'app/core/auth/auth.service';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, takeUntil } from 'rxjs';
import { PackagingmaterialService } from './packagingmaterial.service';
import { packagingmaterialdetails } from './packagingmaterial.type';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';
import * as XLSX from 'xlsx';
import { UseraccessRightsService } from 'app/modules/services/useraccessRights.service';

@Component({
  selector: 'app-packagingmaterial',
  templateUrl: './packagingmaterial.component.html',      
  styleUrls: ['./packagingmaterial.component.scss'],
  encapsulation: ViewEncapsulation.None, 
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: fuseAnimations 
})
export class PackagingmaterialComponent implements OnInit {
  selectedflockItem: packagingmaterialdetails | null = null;
  pageSize: number = TABLE_PAGINATION_SIZE;

  isLoading: boolean = false;
  searchInputControl: FormControl = new FormControl();
  UserAccessRights;
  columnsToDisplay: string[] = ['Edit','Name','Type','IsActive','Units','UpdatedDate'];
  PackingdataSource = new MatTableDataSource<packagingmaterialdetails>();
  PackingItems$: Observable<packagingmaterialdetails[]>;


  private _unsubscribeAll: Subject<any> = new Subject<any>();
    

  constructor(private _matDialog: MatDialog, private _PackagingmaterialService:PackagingmaterialService,private ref: ChangeDetectorRef,private authservice:AuthService,private route:Router,private Useraccess:UseraccessRightsService) { }
  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
      if (this.PackingdataSource) {
          this.PackingdataSource.paginator = value;
      }
  }

  @ViewChild(MatSort, { static: false })
  set sort(value: MatSort) {
      if (this.PackingdataSource) {
          this.PackingdataSource.sort = value;
      }
  }
  ngOnInit(): void {
    this.PackingItems$ = this._PackagingmaterialService._PackageItems$
    
    this.refresh();

        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges.pipe(
          takeUntil(this._unsubscribeAll),
          debounceTime(300),
          distinctUntilChanged(),
          map((query) => {
              this.PackingdataSource.filter = query.trim().toLowerCase();
          })
      ).subscribe();
  }

refresh(): void {
this._PackagingmaterialService.getPackageDetails().subscribe((data) => {
    this.PackingdataSource.data = data;

   
});
}

ExportTOExcel() {
        
 
  this._PackagingmaterialService.getPackageDetails().subscribe((data)=>{
      console.log(data);
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data)
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  XLSX.writeFile(wb, 'Product_BarCode.xlsx');
  })
}
createpacking():void{
    
  this.onEditpackage(null);

};
onEditpackage(Id:number): void {
  // Open the dialog
  const dialogRef = this._matDialog.open(PackagingdetailsComponent, {
      autoFocus: false,
      data : { Id }
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
