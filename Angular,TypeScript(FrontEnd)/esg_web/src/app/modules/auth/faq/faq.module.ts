import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { AuthFaqComponent } from './faq.component';
import {authFaqRoutes} from 'app/modules/auth/faq/faq.routing';
import { NgParticlesModule } from 'ng-particles';

@NgModule({
  declarations: [
    AuthFaqComponent
  ],
  imports     : [
      RouterModule.forChild(authFaqRoutes),
      MatButtonModule,
      MatCheckboxModule,
      MatFormFieldModule,
      NgParticlesModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
      FuseCardModule,
      FuseAlertModule,
      SharedModule
  ]
})
export class AuthFaqModule
{
}
