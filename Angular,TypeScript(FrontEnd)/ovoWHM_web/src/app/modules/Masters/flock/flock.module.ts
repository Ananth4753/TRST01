import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlockComponent } from './flock.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import {RouterModule,Route } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FlockdetailsComponent } from './flockdetails/flockdetails.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


const FlockRoutes: Route[] = [
  {
      path     : '',
      component: FlockComponent
  }
];

@NgModule({
  declarations: [
    FlockComponent,FlockdetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FlockRoutes),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    FuseCardModule,
    FuseAlertModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatMomentDateModule,
    MatSortModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule
  ]
})
export class FlockModule { }
