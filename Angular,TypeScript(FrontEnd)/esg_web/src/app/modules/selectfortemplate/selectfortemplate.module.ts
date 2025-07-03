import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectfortemplateComponent } from './selectfortemplate.component';
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
import { TreeviewModule } from '../../../../projects/ngx-treeview/src/public-api';
import { I18n } from 'app/i18n';
import { AppComponent } from 'app/app.component';

const selectdisdisRoutes: Route[] = [
  {
      path     : '',
      component: SelectfortemplateComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    TreeviewModule.forRoot(),
    RouterModule.forChild(selectdisdisRoutes),
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
  providers:[I18n],
  bootstrap:[AppComponent],
  declarations: [SelectfortemplateComponent]
})
export class SelectfortemplateModule { }
