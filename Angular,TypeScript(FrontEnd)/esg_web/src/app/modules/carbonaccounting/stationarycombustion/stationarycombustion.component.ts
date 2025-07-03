import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fuseAnimations } from '@fuse/animations';
import { MatTableDataSource } from '@angular/material/table';
import { StationarycombustiondetailsComponent } from './stationarycombustiondetails/stationarycombustiondetails.component';
import { Stationarycombustiondetail,Stationarycombustiondetails } from './stationarycombustiondetails/combustion.type';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, takeUntil } from 'rxjs';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';
import { StationaryService } from '../stationary.service';

@Component({
  selector: 'app-stationarycombustion',
  templateUrl: './stationarycombustion.component.html',
  styleUrls: ['./stationarycombustion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: fuseAnimations
})

export class StationarycombustionComponent implements OnInit {
  pageSize: number = TABLE_PAGINATION_SIZE;
  selectedStationItem: Stationarycombustiondetail | null = null;
  searchInputControl: FormControl = new FormControl();
  stationarycombustion$: Observable<Stationarycombustiondetail[]>;
  isLoading: boolean = false;
  columnsToDisplay: string[] = ['FuelType','Noofunits','Units','GWPFactor','MetricCO2e','IsAcive','UpdatedDate'];

  stationarycombSource = new MatTableDataSource<Stationarycombustiondetail>();
  
  
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _matDialog: MatDialog,private stserve:StationaryService) { }
  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
      if (this.stationarycombSource) {
          this.stationarycombSource.paginator = value;
      }
  }

  @ViewChild(MatSort, { static: false })
  set sort(value: MatSort) {
      if (this.stationarycombSource) {
          this.stationarycombSource.sort = value;
      }
    }
  ngOnInit() {

    this.stationarycombustion$ = this.stserve.stationarycombustion$;
    console.log( this.stationarycombustion$);
    
    this.refresh();

   this.stserve.GetCA_Scope1CompanyFacilitiesDetails().subscribe((data) => {

    this.stationarycombSource.data= data;
    console.log( this.stationarycombSource.data);
    
 
});


    // Subscribe to search input field value changes
    this.searchInputControl.valueChanges
        .pipe(
            takeUntil(this._unsubscribeAll),
            debounceTime(300),
            distinctUntilChanged(),
            map((query) => {
                this.stationarycombSource.filter = query.trim().toLowerCase();
            })
        ).subscribe();

  }

  refresh(): void {
    this.stserve.GetCA_Scope1CompanyFacilitiesDetails().subscribe((data) => {

        this.stationarycombSource.data= data;
        console.log(data);
        
     
    });
}

createStationary(): void {
  this.onEditStationary(null);
}

onEditStationary(Id:number): void {
  // Open the dialog
  const dialogRef = this._matDialog.open(StationarycombustiondetailsComponent, {
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

