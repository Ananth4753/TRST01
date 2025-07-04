import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectsgxComponent } from './selectsgx.component';
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
import { RibboncomponentforsgxComponent } from 'app/modules/ribboncomponentforsgx/ribboncomponentforsgx.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { Envi101aComponent } from '../Questions(SGX)/envi101a/envi101a.component';
import { Envi101bComponent } from '../Questions(SGX)/envi101b/envi101b.component';
import { Envi102aComponent } from '../Questions(SGX)/envi102a/envi102a.component';
import { Envi102bComponent } from '../Questions(SGX)/envi102b/envi102b.component';
import { Envi103aComponent } from '../Questions(SGX)/envi103a/envi103a.component';
import { Envi103bComponent } from '../Questions(SGX)/envi103b/envi103b.component';
import { Envi104aComponent } from '../Questions(SGX)/envi104a/envi104a.component';
import { Social201aComponent } from '../Questions(SGX)/social201a/social201a.component';
import { Social201bComponent } from '../Questions(SGX)/social201b/social201b.component';
import { Social202aComponent } from '../Questions(SGX)/social202a/social202a.component';
import { Social202bComponent } from '../Questions(SGX)/social202b/social202b.component';
import { Social203aComponent } from '../Questions(SGX)/social203a/social203a.component';
import { Social203bComponent } from '../Questions(SGX)/social203b/social203b.component';
import { Social204aComponent } from '../Questions(SGX)/social204a/social204a.component';
import { Social204bComponent } from '../Questions(SGX)/social204b/social204b.component';
import { Social205aComponent } from '../Questions(SGX)/social205a/social205a.component';
import { Social205bComponent } from '../Questions(SGX)/social205b/social205b.component';
import { Social205cComponent } from '../Questions(SGX)/social205c/social205c.component';
import { Social205dComponent } from '../Questions(SGX)/social205d/social205d.component';
import { Governance301aComponent } from '../Questions(SGX)/governance301a/governance301a.component';
import { Governance301bComponent } from '../Questions(SGX)/governance301b/governance301b.component';
import { Governance302aComponent } from '../Questions(SGX)/governance302a/governance302a.component';
import { Governance303aComponent } from '../Questions(SGX)/governance303a/governance303a.component';
import { Governance303bComponent } from '../Questions(SGX)/governance303b/governance303b.component';
import { Governance304aComponent } from '../Questions(SGX)/governance304a/governance304a.component';
import { Governance305aComponent } from '../Questions(SGX)/governance305a/governance305a.component';
import { Governance306aComponent } from '../Questions(SGX)/governance306a/governance306a.component';
import { UploadevidenceforsgxComponent } from '../Questions(SGX)/uploadevidenceforsgx/uploadevidenceforsgx.component';
import { PercentageDirective } from '../Questions(SGX)/directives/percentage.directive';
import { NumberCommaDirective } from '../Questions(SGX)/directives/number-comma.directive';

const selectsgxRoutes: Route[] = [
  {
      path     : '',
      component: SelectsgxComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    TreeviewModule.forRoot(),
    RouterModule.forChild(selectsgxRoutes),
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
    MatDatepickerModule,
  ],providers :[ DatePipe],
  declarations: [RibboncomponentforsgxComponent,SelectsgxComponent,Envi101aComponent,Envi101bComponent,Envi102aComponent,Envi102bComponent,Envi103aComponent,Envi103bComponent,Envi104aComponent,
    Governance301bComponent,Governance301aComponent,Governance303aComponent,Governance302aComponent,Governance303bComponent,Governance304aComponent,Governance305aComponent,
  Governance306aComponent,Social201aComponent,Social201bComponent,Social202aComponent,Social202bComponent,Social203aComponent,Social203bComponent,
Social204aComponent,Social204bComponent,Social205aComponent,Social205bComponent,Social205cComponent,Social205dComponent,UploadevidenceforsgxComponent,PercentageDirective,NumberCommaDirective]
})
export class SelectsgxModule { }
