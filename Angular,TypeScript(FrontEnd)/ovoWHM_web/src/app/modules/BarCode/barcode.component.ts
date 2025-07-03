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
import { BarcodeService } from './barcode.service';
import { BarcodedetailsComponent } from './barcodedetails/barcodedetails.component';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss'],
  encapsulation: ViewEncapsulation.None, 
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: fuseAnimations
})
export class BarcodeComponent implements OnInit {

  pageSize: number = TABLE_PAGINATION_SIZE;
  isLoading: boolean = false;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  Barcode$: Observable<any[]>;
  searchInputControl: FormControl = new FormControl();
  
  
  columnsToDisplay: string[] = ['batchId','flockname','weightrange','farmlocation','dateyear','noofpackets','noofquantity','Url','IsActive', 'UpdatedDate'];
  constructor(  private _matDialog:MatDialog,private authservice:AuthService,private route:Router , private _barcode:BarcodeService) { }
  BarcodeDataSource = new MatTableDataSource<any>();

  ngOnInit(): void {

    this.Barcode$ = this._barcode.Barcode$ ;   
    this.refresh(); 
  
   this._barcode.getBarcodedetails().subscribe(data=>{
  
   })
   this.searchInputControl.valueChanges

 .pipe(

     takeUntil(this._unsubscribeAll),

     debounceTime(300),

     distinctUntilChanged(),

     map((query) => {

         this.BarcodeDataSource.filter = query.trim().toLowerCase();

     })

 ).subscribe();
  }

  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
      if (this.BarcodeDataSource) {
          this.BarcodeDataSource.paginator = value;
      }
  }

  @ViewChild(MatSort, { static: false })
  set sort(value: MatSort) {
      if (this.BarcodeDataSource) {
          this.BarcodeDataSource.sort = value;
      }
  }


  refresh(): void {    
    this._barcode.getBarcodedetails().subscribe((result) => {
      
      this.BarcodeDataSource.data = result;
      console.log(result);
    });   

}
  createbarcode(): void {
    this.onEditbarcode(null);
      }

      onEditbarcode(barcodeId: number): void {
    // Open the dialog
    const dialogRef = this._matDialog.open(BarcodedetailsComponent, {
        autoFocus: false,
        data     : { barcodeId }
    });
  
    dialogRef.afterClosed()
    .subscribe((result) => {
        if(result) {
            this.refresh();
        }
    }); 
} 
}
