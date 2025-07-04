import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
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
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { CommonModule } from '@angular/common';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from 'app/shared/shared.module';
import { DatePipe } from '@angular/common';
import { MatDatepickerModule} from'@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatNativeDateModule } from '@angular/material/core';
import { AutoSearchPipe } from './AutoSearch.pipe';


const dashboardRoutes: Route[] = [
    {
        path     : '',
        component: DashboardComponent
    },
    
];

@NgModule({
    declarations: [	
        DashboardComponent,
      AutoSearchPipe
   ],
    exports: [
        MatDatepickerModule , 
      
       ],
    imports     : [

        MatDatepickerModule,MatMomentDateModule,MatNativeDateModule,CommonModule,
        RouterModule.forChild(dashboardRoutes),  MatFormFieldModule,
        MatIconModule,
        MatTabsModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        AutocompleteLibModule,
        MatAutocompleteModule,
        MatSortModule,
        NgApexchartsModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatPaginatorModule,
        MatDialogModule,
        SharedModule
    ],
    providers:[DatePipe]
})
export class DashboardModule
{
}
