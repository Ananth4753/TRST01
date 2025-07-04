import { CommonModule } from '@angular/common';
import { Sgx_introductionComponent } from './sgx_introduction.component';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
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
import {MatTabsModule} from '@angular/material/tabs';


const IntroductionRoutes: Route[] = [
  {
      path     : '',
      component: Sgx_introductionComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(IntroductionRoutes),
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
    SharedModule,
    MatTabsModule
  ],
  declarations: [Sgx_introductionComponent]
})
export class Sgx_introductionModule { }
