import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carbonscope1steamheatComponent } from './carbonscope1steamheat.component';
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
import {MatDatepickerModule} from'@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatNativeDateModule } from '@angular/material/core';



const carbonscope1heatRoutes: Route[] = [
  {
      path     : '',
      component: Carbonscope1steamheatComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
    RouterModule.forChild(carbonscope1heatRoutes),
    MatFormFieldModule,
    MatNativeDateModule,
    MatMomentDateModule,
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
  declarations: [Carbonscope1steamheatComponent]
})
export class Carbonscope1steamheatModule { }
