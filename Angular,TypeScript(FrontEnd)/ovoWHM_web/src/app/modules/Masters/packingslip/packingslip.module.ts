import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackingslipComponent } from './packingslip.component';
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
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { PackingslipService } from './packingslip.service';
import { SharedModule } from 'app/shared/shared.module';
import { SearchNamePipe } from './pipes/search-name.pipe';
import { EexceluploadComponent } from './excelupload/excelupload.component';
import { MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DatePipe } from '@angular/common';
const PackingslipRoutes: Route[] = [
  {
      path     : '',
      component: PackingslipComponent
  }
];



@NgModule({
  declarations: [
    PackingslipComponent,
    SearchNamePipe,
    EexceluploadComponent,
    
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PackingslipRoutes),
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatTableModule,
    MatSortModule,
    MatMomentDateModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatMenuModule,
    MatPaginatorModule,
    MatDialogModule,
    SharedModule,

  ],
  providers : [
    PackingslipService, DatePipe
 ]
})
export class PackingslipModule { }
