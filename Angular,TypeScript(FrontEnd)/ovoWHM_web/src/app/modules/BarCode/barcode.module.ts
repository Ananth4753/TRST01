import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { BarcodeComponent } from './barcode.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BarcodedetailsComponent } from './barcodedetails/barcodedetails.component';


const barcodeRoutes: Route[] = [
  {
      path     : '',
      component: BarcodeComponent
  }
];

@NgModule({
  declarations: [BarcodeComponent, BarcodedetailsComponent],
  imports: [
    RouterModule.forChild(barcodeRoutes),
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMomentDateModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatMenuModule,
    MatPaginatorModule,
    MatDialogModule,
    SharedModule,
    MatDatepickerModule
  ]
  
})
export class BarcodeModule { }
