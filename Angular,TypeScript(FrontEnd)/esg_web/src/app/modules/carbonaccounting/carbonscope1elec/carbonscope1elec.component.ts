import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { ChangeDetectionStrategy, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, takeUntil } from 'rxjs';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';
import { StationaryService } from '../stationary.service';
import { StationarycombustiondetailsComponent } from '../stationarycombustion/stationarycombustiondetails/stationarycombustiondetails.component';
import { Stationarycombustiondetails,Stationarycombustiondetail } from '../stationarycombustion/stationarycombustiondetails/combustion.type';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fuseAnimations } from '@fuse/animations';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'app/core/auth/auth.service';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
@Component({
  selector: 'app-carbonscope1elec',
  templateUrl: './carbonscope1elec.component.html',
  styleUrls: ['./carbonscope1elec.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: fuseAnimations
})
export class Carbonscope1elecComponent implements OnInit {
  pageSize: number = TABLE_PAGINATION_SIZE;
  selectedStationItem: Stationarycombustiondetail | null = null;
  searchInputControl: FormControl = new FormControl();
  stationarycombustion$: Observable<Stationarycombustiondetail[]>;
  isLoading: boolean = false;
  columnsToDisplay: string[] = ['FuelType','Noofunits','Units','GWPFactor','MetricCO2e','IsAcive','UpdatedDate'];

  stationarycombSource = new MatTableDataSource<Stationarycombustiondetail>();
 
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(private router:Router,private route: ActivatedRoute,
    private fb: FormBuilder,private as:AuthService,private _matDialog: MatDialog,private stserve:StationaryService) { }
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
