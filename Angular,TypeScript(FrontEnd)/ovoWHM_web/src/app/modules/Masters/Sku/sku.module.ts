import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkuComponent } from './sku.component';

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
import { SharedModule } from 'app/shared/shared.module';
import { SkudetailComponent } from './skudetail/skudetail.component';
import { SkuService } from './sku.service';

const skuRoutes: Route[] = [
  {
      path     : '',
      component: SkuComponent
  }
];

@NgModule({
  declarations: [
    SkuComponent,
    SkudetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(skuRoutes),
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
  ],providers : [
   SkuService 
]
})
export class SkuModule { }
