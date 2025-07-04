import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportdisComponent } from './importdis.component';
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
import { PopupComponent } from './popup/popup.component';
import { ImportdisService } from './importdis.service';
import { PercentageDirective } from './percentage.directive';
import { TreeviewModule } from '../../../../projects/ngx-treeview/src/public-api';
import { I18n } from 'app/i18n';
import { CalcComponent } from './calc/calc.component';
import { UploadimgComponent } from './uploadimg/uploadimg.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { GhemissionsComponent } from './ghemissions/ghemissions.component';
import { ElectriccalcComponent } from './electriccalc/electriccalc.component';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { NumberCommaDirective } from './number-comma.directive';
import { Scope3calculatorsComponent } from './scope3calculators/scope3calculators.component';
import { Scope3avgComponent } from './scope3avg/scope3avg.component';
import { Scope3hotelComponent } from './scope3hotel/scope3hotel.component';
import { Scope3category4Component } from './scope3category4/scope3category4.component';
import { Scope3category5Component } from './scope3category5/scope3category5.component';
import { Scope3category3Component } from './scope3category3/scope3category3.component';
import { Scope3category7Component } from './scope3category7/scope3category7.component';
import { Scope3category813Component } from './scope3category813/scope3category813.component';
import { Scope3category10Component } from './scope3category10/scope3category10.component';
import { Scope3category11Component } from './scope3category11/scope3category11.component';
import { Scope3category14Component } from './scope3category14/scope3category14.component';
import { Scope3category15Component } from './scope3category15/scope3category15.component';
import { Scope8insidecalcComponent } from './scope8insidecalc/scope8insidecalc.component';
import { Scope2renewComponent } from './scope2renew/scope2renew.component';
import { SafePipe } from './uploadimg/safe.pipe';
const importdisRoutes: Route[] = [
  {
      path     : '',
      component: ImportdisComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    CurrencyMaskModule,
    TreeviewModule.forRoot(),
    MatAutocompleteModule,
    RouterModule.forChild(importdisRoutes),
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
    SharedModule ,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  
 providers:[ImportdisService,I18n],
  declarations: [ImportdisComponent,
    Scope3calculatorsComponent,Scope3category15Component,Scope8insidecalcComponent,SafePipe,Scope2renewComponent,
    Scope3category4Component,Scope3category14Component,Scope3category11Component,Scope3category10Component,Scope3category813Component,Scope3category7Component,Scope3category3Component,Scope3category5Component,Scope3hotelComponent,Scope3avgComponent,PopupComponent,NumberCommaDirective,PercentageDirective,CalcComponent,UploadimgComponent,GhemissionsComponent,ElectriccalcComponent]
})
export class ImportdisModule { }
