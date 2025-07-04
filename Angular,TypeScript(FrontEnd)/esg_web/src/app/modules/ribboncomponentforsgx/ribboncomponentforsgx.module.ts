import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RibboncomponentforsgxComponent } from './ribboncomponentforsgx.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Route,RouterModule } from '@angular/router';

import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from 'app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';

const ribbonRoute: Route[] = [
  {
      path     : '',
      component: RibboncomponentforsgxComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ribbonRoute),
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatMenuModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  declarations: [RibboncomponentforsgxComponent]
})
export class RibboncomponentforsgxModule { }
