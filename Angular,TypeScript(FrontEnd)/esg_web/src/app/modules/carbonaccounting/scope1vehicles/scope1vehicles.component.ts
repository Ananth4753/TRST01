import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fuseAnimations } from '@fuse/animations';
import { MatTableDataSource } from '@angular/material/table';
import { Scope1vehicledetailsComponent } from './scope1vehicledetails/scope1vehicledetails.component';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, takeUntil } from 'rxjs';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';
import { StationaryService } from '../stationary.service';

@Component({
  selector: 'app-scope1vehicles',
  templateUrl: './scope1vehicles.component.html',
  styleUrls: ['./scope1vehicles.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: fuseAnimations
})
export class Scope1vehiclesComponent implements OnInit {
  pageSize: number = TABLE_PAGINATION_SIZE;
  selectedStationItem: any | null = null;
  searchInputControl: FormControl = new FormControl();
  companyvehiclesobs$: Observable<any[]>;
  isLoading: boolean = false;
  columnsToDisplay: string[] = ['Vehicle','Type','Fuel','EmissionFactor','Distance','tCO2e','IsAcive','UpdatedDate'];

  CompanyVehicledataSource = new MatTableDataSource<any>();
  
  
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _matDialog: MatDialog,private stserve:StationaryService) { }
  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
      if (this.CompanyVehicledataSource) {
          this.CompanyVehicledataSource.paginator = value;
      }
  }

  @ViewChild(MatSort, { static: false })
  set sort(value: MatSort) {
      if (this.CompanyVehicledataSource) {
          this.CompanyVehicledataSource.sort = value;
      }
    }
    ngOnInit() {

      this.companyvehiclesobs$ = this.stserve.companyvehiclesobs$;
      console.log( this.companyvehiclesobs$);
      
      this.refresh();
  
     this.stserve.GetCA_Scope1CompanyVehicleDetails().subscribe((data) => {
  
      this.CompanyVehicledataSource.data= data;
      console.log( this.CompanyVehicledataSource.data);
      
   
  });
  
  
      // Subscribe to search input field value changes
      this.searchInputControl.valueChanges
          .pipe(
              takeUntil(this._unsubscribeAll),
              debounceTime(300),
              distinctUntilChanged(),
              map((query) => {
                  this.CompanyVehicledataSource.filter = query.trim().toLowerCase();
              })
          ).subscribe();
  
    }
  
    refresh(): void {
      this.stserve.GetCA_Scope1CompanyVehicleDetails().subscribe((data) => {
  
          this.CompanyVehicledataSource.data= data;
          console.log(data);
          
       
      });
  }
  
  createCompanyvehicle(): void {
    this.onEditStationary(null);
  }
  
  onEditStationary(Id:number): void {
    // Open the dialog
    const dialogRef = this._matDialog.open(Scope1vehicledetailsComponent, {
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
  
  