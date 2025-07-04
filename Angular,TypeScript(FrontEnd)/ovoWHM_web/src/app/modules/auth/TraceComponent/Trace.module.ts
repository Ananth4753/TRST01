import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { TraceComponent } from './Trace.component';
import { RouterModule } from '@angular/router';
import { TraceInRoutes } from './trace.routing';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
@NgModule({
  imports: [
    SharedModule,CarouselModule,ShareIconsModule,ShareButtonsModule,
    RouterModule.forChild(TraceInRoutes),
  ],
  declarations: [TraceComponent],

})
export class TraceModule { 

}
