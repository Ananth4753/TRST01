import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyreportsComponent } from './myreports.component';
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
import { Route,RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { UploadlogoComponent } from '../uploadlogo/uploadlogo.component';

const MyreportsComponentRoutes: Route[] = [
  {
      path     : '',
      component: MyreportsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MyreportsComponentRoutes),
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
  ],
  declarations: [MyreportsComponent]
})
export class MyreportsModule { }
