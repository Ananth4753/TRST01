import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatereportforbrsrComponent } from './createreportforbrsr.component';
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
import { DatePipe } from '@angular/common';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatNativeDateModule } from '@angular/material/core';

const createreportforbrsrRoutes: Route[] = [
  {
      path     : '',
      component: CreatereportforbrsrComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
    RouterModule.forChild(createreportforbrsrRoutes),
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
  declarations: [CreatereportforbrsrComponent]
})
export class CreatereportforbrsrModule { }
