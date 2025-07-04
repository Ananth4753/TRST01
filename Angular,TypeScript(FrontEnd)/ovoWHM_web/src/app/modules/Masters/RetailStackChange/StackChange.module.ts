import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackChangeComponent } from './StackChange.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {RouterModule,Route } from '@angular/router';
const PackingslipRoutes: Route[] = [
  {
      path     : '',
      component: StackChangeComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(PackingslipRoutes),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    FuseCardModule,
    FuseAlertModule,
    SharedModule,
    MatAutocompleteModule,
    MatSortModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule

  ],
  declarations: [StackChangeComponent]
})
export class StackChangeModule { }
