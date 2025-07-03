import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductviewComponent } from './productview.component';
import { RouterModule,Route } from '@angular/router';
import { ProductviewdetailsComponent } from './productviewdetails/productviewdetails.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DatePipe } from '@angular/common';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ProductbarcodeviewComponent } from './productbarcodeview/productbarcodeview.component';
const ProductviewRoutes: Route[] = [
  {
      path     : '',    
      component: ProductviewComponent
  }
];
@NgModule({
  declarations: [
    ProductviewComponent,
    ProductviewdetailsComponent,
    ProductbarcodeviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProductviewRoutes),
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
    MatDatepickerModule,
    MatNativeDateModule ,
    MatMomentDateModule,
    MatSortModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule

  ],
  providers:[DatePipe]
})
export class ProductviewModule { }
