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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { StackbarcodeComponent } from './stackbarcode.component';
import { BarcodedetailsComponent } from './barcodedetails/barcodedetails.component';
import { StackviewbarcodeComponent } from './stackviewbarcode/stackviewbarcode.component';

const StackBarcodeRoutes: Route[] = [
  {
      path     : '',
      component: StackbarcodeComponent
  },
  
]



@NgModule({
  declarations: [
    StackbarcodeComponent,
    BarcodedetailsComponent,
    StackviewbarcodeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(StackBarcodeRoutes),
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
    SharedModule
  ]
})
export class StackbarcodeModule { }
