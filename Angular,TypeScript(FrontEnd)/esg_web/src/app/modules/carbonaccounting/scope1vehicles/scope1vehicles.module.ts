import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scope1vehiclesComponent } from './scope1vehicles.component';
import { Scope1vehicledetailsComponent } from './scope1vehicledetails/scope1vehicledetails.component';
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


const scope1vehiRoutes: Route[] = [
  {
      path     : '',
      component: Scope1vehiclesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forChild(scope1vehiRoutes),
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
  declarations: [Scope1vehiclesComponent,Scope1vehicledetailsComponent]
})
export class Scope1vehiclesModule { }
