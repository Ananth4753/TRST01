import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesOrdersComponent } from './SalesOrders.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Route, RouterModule } from '@angular/router';
const dashboardRoutes: Route[] = [
  {
      path     : '',
      component: SalesOrdersComponent
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule,
    MatSelectModule


  
  ],
  declarations: [SalesOrdersComponent]
})
export class SalesOrdersModule { }
