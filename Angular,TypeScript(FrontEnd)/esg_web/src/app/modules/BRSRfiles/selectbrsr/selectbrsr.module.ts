import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectbrsrComponent } from './selectbrsr.component';
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
import { TreeviewModule } from '../../../../../projects/ngx-treeview/src/public-api';
import { I18n } from 'app/i18n';
import { AppComponent } from 'app/app.component';
import { RibbonComponent } from 'app/modules/ribbon/ribbon.component';
import { Gd7Component } from '../Questions(BRSR)/gd7/gd7.component';
import { Gd6Component } from '../Questions(BRSR)/gd6/gd6.component';
import { Gd5Component } from '../Questions(BRSR)/gd5/gd5.component';
import { Gd4Component } from '../Questions(BRSR)/gd4/gd4.component';
import { Gd3Component } from '../Questions(BRSR)/gd3/gd3.component';
import { Gd2Component } from '../Questions(BRSR)/gd2/gd2.component';
import { Gd1Component } from '../Questions(BRSR)/gd1/gd1.component';
import { Management1Component } from '../Questions(BRSR)/management1/management1.component';
import { Management2Component } from '../Questions(BRSR)/management2/management2.component';
import { Principal1aComponent } from '../Questions(BRSR)/principal1a/principal1a.component';
import { Principal1bComponent } from '../Questions(BRSR)/principal1b/principal1b.component';
import { Principal2aComponent } from '../Questions(BRSR)/principal2a/principal2a.component';
import { Principal3aComponent } from '../Questions(BRSR)/principal3a/principal3a.component';
import { Principal2bComponent } from '../Questions(BRSR)/principal2b/principal2b.component';
import { Principal3bComponent } from '../Questions(BRSR)/principal3b/principal3b.component';
import { Principal4aComponent } from '../Questions(BRSR)/principal4a/principal4a.component';
import { Principal4bComponent } from '../Questions(BRSR)/principal4b/principal4b.component';
import { Principal5aComponent } from '../Questions(BRSR)/principal5a/principal5a.component';
import { Principal5bComponent } from '../Questions(BRSR)/principal5b/principal5b.component';
import { Principal6aComponent } from '../Questions(BRSR)/principal6a/principal6a.component';
import { Principal6bComponent } from '../Questions(BRSR)/principal6b/principal6b.component';
import { Principal7aComponent } from '../Questions(BRSR)/principal7a/principal7a.component';
import { Principal7bComponent } from '../Questions(BRSR)/principal7b/principal7b.component';
import { Principal8aComponent } from '../Questions(BRSR)/principal8a/principal8a.component';
import { Principal8bComponent } from '../Questions(BRSR)/principal8b/principal8b.component';
import { Principal9aComponent } from '../Questions(BRSR)/principal9a/principal9a.component';
import { Principal9bComponent } from '../Questions(BRSR)/principal9b/principal9b.component';
import { CalforprefComponent } from '../Questions(BRSR)/principal3a/calforpref/calforpref.component';
import { CalcforpemplComponent } from '../Questions(BRSR)/principal3a/calcforpempl/calcforpempl.component';
import { ReturnratecalcComponent } from '../Questions(BRSR)/principal3a/returnratecalc/returnratecalc.component';
import { RetentionratecalcComponent } from '../Questions(BRSR)/principal3a/retentionratecalc/retentionratecalc.component';
import { UploadevidenceforbrsrComponent } from '../Questions(BRSR)/uploadevidenceforbrsr/uploadevidenceforbrsr.component';
import { AlphanumericDirective } from '../Questions(BRSR)/gd1/alphanumeric.directive';
import { EmailDirective } from '../Questions(BRSR)/gd1/email.directive';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NumcomDirective } from '../Questions(BRSR)/gd1/numcom.directive';
import { PercentageDirective } from '../Questions(BRSR)/gd4/percentage.directive';
import { DatePipe } from '@angular/common';
import { IndiansystemDirective } from '../Questions(BRSR)/gd1/indiansystem.directive';
import { CalforworkerfComponent } from '../Questions(BRSR)/principal3a/calforworkerf/calforworkerf.component';
import { CalforworkermComponent } from '../Questions(BRSR)/principal3a/calforworkerm/calforworkerm.component';

const selectbrsrRoutes: Route[] = [
  {
      path     : '',
      component: SelectbrsrComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    TreeviewModule.forRoot(),
    RouterModule.forChild(selectbrsrRoutes),
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
    MatNativeDateModule,
    MatDatepickerModule
  ],providers :[ DatePipe],
  declarations: [SelectbrsrComponent,RibbonComponent,
    Gd7Component,Gd6Component,Gd5Component,Gd4Component,Gd3Component,Gd2Component,Gd1Component,Management1Component,Management2Component,Principal1aComponent,
  Principal1bComponent,Principal2aComponent,Principal3aComponent,Principal2bComponent,Principal3bComponent,Principal4aComponent,Principal4bComponent,
Principal5aComponent,Principal5bComponent,Principal6aComponent,Principal6bComponent,Principal7aComponent,Principal7bComponent,Principal8aComponent,ReturnratecalcComponent,RetentionratecalcComponent,
Principal8bComponent,CalforprefComponent,CalforworkerfComponent,UploadevidenceforbrsrComponent,CalforworkermComponent,Principal9aComponent,Principal9bComponent,AlphanumericDirective,EmailDirective,NumcomDirective,PercentageDirective,IndiansystemDirective,CalcforpemplComponent],
})
export class SelectbrsrModule { }
