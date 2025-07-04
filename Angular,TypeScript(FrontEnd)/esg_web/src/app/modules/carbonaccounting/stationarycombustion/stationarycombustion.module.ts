import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationarycombustionComponent } from './stationarycombustion.component';
import { StationarycombustiondetailsComponent } from './stationarycombustiondetails/stationarycombustiondetails.component';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

const stationaryRoutes: Route[] = [
  {
      path     : '',
      component: StationarycombustionComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forChild(stationaryRoutes),
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatMenuModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  declarations: [StationarycombustionComponent,
    StationarycombustiondetailsComponent]
})
export class StationarycombustionModule { }
