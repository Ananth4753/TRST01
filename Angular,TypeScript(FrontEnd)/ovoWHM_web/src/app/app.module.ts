import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { FuseModule } from '@fuse';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { FuseConfigModule } from '@fuse/services/config';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { appConfig } from 'app/core/config/app.config';
import { CoreModule } from 'app/core/core.module';
import { LayoutModule } from 'app/layout/layout.module';
import { mockApiServices } from 'app/mock-api';
import { MarkdownModule } from 'ngx-markdown';
import { MatSliderModule} from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {HashLocationStrategy,LocationStrategy} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent
        
        
        
        
         ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSliderModule,
        ShareIconsModule,
        MatButtonModule,
        ShareButtonsModule,
        MatIconModule,
        MatCardModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,
        NgxMaterialTimepickerModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({}),
          FontAwesomeModule
    ],
    providers:[{provide:LocationStrategy,useClass:HashLocationStrategy}],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
