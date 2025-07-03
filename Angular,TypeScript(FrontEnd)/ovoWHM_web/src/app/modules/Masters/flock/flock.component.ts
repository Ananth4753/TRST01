
import { Component, OnInit,OnDestroy, ViewChild, ViewEncapsulation ,ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {  Router } from '@angular/router';
import { FlockdetailsComponent } from './flockdetails/flockdetails.component';
import { AuthService } from 'app/core/auth/auth.service';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, takeUntil } from 'rxjs';
import { FlockService } from './flock.service';
import { flockdetails,flockitems } from './flock.type';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';

@Component({
  selector: 'app-flock',
  templateUrl: './flock.component.html',
  styleUrls: ['./flock.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: fuseAnimations
})
export class FlockComponent implements OnInit {
  selectedflockItem: flockitems | null = null;
  pageSize: number = TABLE_PAGINATION_SIZE;

  isLoading: boolean = false;
  searchInputControl: FormControl = new FormControl();
  UserAccessRights;
  columnsToDisplay: string[] = ['Edit','Name','Area','IsActive','Location','UpdatedDate'];
  flockdataSource = new MatTableDataSource<flockdetails>();
  flockitems$: Observable<flockdetails[]>;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _matDialog: MatDialog, private _flockservice:FlockService,private ref: ChangeDetectorRef,private authservice:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.flockitems$ = this._flockservice.flockitems$;
    console.log(this.flockitems$ );
    
    this.refresh();

        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges.pipe(
          takeUntil(this._unsubscribeAll),
          debounceTime(300),
          distinctUntilChanged(),
          map((query) => {
              this.flockdataSource.filter = query.trim().toLowerCase();
          })
      ).subscribe();
  }
  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    if (this.flockdataSource) {
        this.flockdataSource.paginator = value;
    }
}
@ViewChild(MatSort, { static: false })
set sort(value: MatSort) {
    if (this.flockdataSource) {
        this.flockdataSource.sort = value;
    }
}
  refresh(): void {
    this._flockservice.getflockDetails().subscribe((data) => {
        this.flockdataSource.data = data;
        console.log(data);
    });
}
createflock():void{
      
    this.onEditproductbarcode(null);

};
onEditproductbarcode(flockId:number): void {
    // Open the dialog
    const dialogRef = this._matDialog.open(FlockdetailsComponent, {
        autoFocus: false,
        data : { flockId }
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
