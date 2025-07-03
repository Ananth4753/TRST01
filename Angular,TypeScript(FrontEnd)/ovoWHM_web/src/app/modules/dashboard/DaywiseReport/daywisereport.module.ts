import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaywiseReportComponent } from './DaywiseReport.component';

import { Route, RouterModule } from '@angular/router';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { NgApexchartsModule } from "ng-apexcharts";
import { MatTableModule } from '@angular/material/table';
// import { NgSelectModule } from '@ng-select/ng-select';

// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from 'app/shared/shared.module';
import { DatePipe } from '@angular/common';
import { MatDatepickerModule} from'@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatNativeDateModule } from '@angular/material/core';

const dashboardRoutes: Route[] = [
  {
      path     : '',
      component: DaywiseReportComponent
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,MatMomentDateModule,MatNativeDateModule,CommonModule,
    RouterModule.forChild(dashboardRoutes),  MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatAutocompleteModule,
    MatSortModule,
    NgApexchartsModule,
    MatSlideToggleModule,
    MatSelectModule,
    AutocompleteLibModule,
    MatPaginatorModule,
    MatDialogModule,
    SharedModule 
  ],
  declarations: [DaywiseReportComponent],
  exports: [
    MatDatepickerModule , 
  
   ],
   
    providers:[DatePipe]
})
export class DaywisereportModule { }
