import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/admin/dashboard'
    {path: '', pathMatch : 'full', redirectTo: 'dashboard'},

    // Redirect signed in user to the '/admin/dashboard'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboard'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'createpass/:regId', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'faq', loadChildren: () => import('app/modules/auth/faq/faq.module').then(m => m.AuthFaqModule)},
            {path: 'blogs', loadChildren: () => import('app/modules/auth/blogs/blogs.module').then(m => m.AuthBlogsModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Application routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            //BRSR
            {path: 'createreportforbrsr', loadChildren: () => import('app/modules/BRSRfiles/createreportforbrsr/createreportforbrsr.module').then(m => m.CreatereportforbrsrModule)},
            {path: 'brsr', loadChildren: () => import('app/modules/BRSRfiles//brsr/brsr.module').then(m => m.BrsrModule)},
            {path: 'selectbrsr/:reportId', loadChildren: () => import('app/modules/BRSRfiles/selectbrsr/selectbrsr.module').then(m => m.SelectbrsrModule)},
            {path: 'brsr_imagereport/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_imagereport/brsr_imagereport.module').then(m => m.Brsr_imagereportModule)},
            {path: 'brsr_sectemplate/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_sectemplate/brsr_sectemplate.module').then(m => m.Brsr_sectemplateModule)},
            {path: 'brsr_secdesign/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_secdesign/brsr_secdesign.module').then(m => m.Brsr_secdesignModule)},
            {path: 'brsr_templateone/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_templateone/brsr_templateone.module').then(m => m.Brsr_templateoneModule)},
            {path: 'brsr_templatethree/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_templatethree/brsr_templatethree.module').then(m => m.Brsr_templatethreeModule)},
            {path: 'brsr_templatetwo/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_templatetwo/brsr_templatetwo.module').then(m => m.Brsr_templatetwoModule)},
            {path: 'brsr_templatefour/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_templatefour/brsr_templatefour.module').then(m => m.Brsr_templatefourModule)},
            {path: 'brsr_templatefive/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_templatefive/brsr_templatefive.module').then(m => m.Brsr_templatefiveModule)},
            {path: 'brsr_desone/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_desone/brsr_desone.module').then(m => m.Brsr_desoneModule)},
            {path: 'brsr_destwo/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_destwo/brsr_destwo.module').then(m => m.Brsr_destwoModule)},
            {path: 'brsr_desthree/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_desthree/brsr_desthree.module').then(m => m.Brsr_desthreeModule)},
            {path: 'brsr_desfour/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_desfour/brsr_desfour.module').then(m => m.Brsr_desfourModule)},
            {path: 'brsr_desfive/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_desfive/brsr_desfive.module').then(m => m.Brsr_desfiveModule)},
            {path: 'brsr_uploadlogo/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_uploadlogo/brsr_uploadlogo.module').then(m => m.Brsr_uploadlogoModule)},
            {path: 'brsr_introduction/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_introduction/brsr_introduction.module').then(m => m.Brsr_introductionModule)},
            {path: 'brsr_settingcomp/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_settingcomp/brsr_settingcomp.module').then(m => m.Brsr_settingcompModule)},
            {path: 'brsr_introreport/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_introreport/brsr_introreport.module').then(m => m.Brsr_introreportModule)},
            {path: 'brsr_dynamicreport/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_dynamicreport/brsr_dynamicreport.module').then(m => m.Brsr_dynamicreportModule)},
            {path: 'brsr_previewreport/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_previewreport/brsr_previewreport.module').then(m => m.Brsr_previewreportModule)},
            {path: 'brsr_generaldisclosure/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_generaldisclosure/brsr_generaldisclosure.module').then(m => m.Brsr_generaldisclosureModule)},
            {path: 'brsr_management/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_management/brsr_management.module').then(m => m.Brsr_managementModule)},
            {path: 'brsr_principalsreport/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_principalsreport/brsr_principalsreport.module').then(m => m.Brsr_principalsreportModule)},
            {path: 'brsr_validate/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_validate/brsr_validate.module').then(m => m.Brsr_validateModule)},
            {path: 'brsr_generatereport/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_generatereport/brsr_generatereport.module').then(m => m.Brsr_generatereportModule)},
            {path: 'brsr_validatingreportscreen/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_validatingreportscreen/brsr_validatingreportscreen.module').then(m => m.Brsr_validatingreportscreenModule)},
            {path: 'brsr_remarksgeneral/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_remarksgeneral/brsr_remarksgeneral.module').then(m => m.Brsr_remarksgeneralModule)},
            {path: 'brsr_remarksmanagement/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr_remarksmanagement/brsr_remarksmanagement.module').then(m => m.Brsr_remarksmanagementModule)},
            {path: 'brsr-remarksprincipal/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr-remarksprincipal/brsr-remarksprincipal.module').then(m => m.BrsrRemarksprincipalModule)},
            {path: 'brsr-signingoff/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr-signingoff/brsr-signingoff.module').then(m => m.BrsrSigningoffModule)},
            {path: 'brsr-signoffreport/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr-signoffreport/brsr-signoffreport.module').then(m => m.BrsrSignoffreportModule)},
            {path: 'brsr_remarkspregen/:reportId',loadChildren: () => import('app/modules/BRSRfiles/brsr_remarkspregen/brsr_remarkspregen.module').then(m=>m.Brsr_remarkspregenModule)},
            {path: 'brsr_remarkspremang/:reportId',loadChildren:()=> import('app/modules/BRSRfiles/brsr_remarkspremang/brsr_remarkspremang.module').then(m=>m.Brsr_remarkspremangModule)},
            {path: 'brsr_remarkspreprinci/:reportId',loadChildren:()=>import('app/modules/BRSRfiles/brsr_remarkspreprinci/brsr_remarkspreprinci.module').then(m=>m.Brsr_remarkspreprinciModule)},
            {path: 'brsr_previewremarksscreen/:reportId',loadChildren:()=>import('app/modules/BRSRfiles/brsr_previewremarksscreen/brsr_previewremarksscreen.module').then(m=>m.Brsr_previewremarksscreenModule)},
            {path: 'brsr_remarkspregen/:reportId',loadChildren: () => import('app/modules/BRSRfiles/brsr_remarkspregen/brsr_remarkspregen.module').then(m=>m.Brsr_remarkspregenModule)},
            {path: 'brsr_remarkspremang/:reportId',loadChildren:()=> import('app/modules/BRSRfiles/brsr_remarkspremang/brsr_remarkspremang.module').then(m=>m.Brsr_remarkspremangModule)},
            {path: 'brsr_remarkspreprinci/:reportId',loadChildren:()=>import('app/modules/BRSRfiles/brsr_remarkspreprinci/brsr_remarkspreprinci.module').then(m=>m.Brsr_remarkspreprinciModule)},
            {path: 'brsr_previewremarksscreen/:reportId',loadChildren:()=>import('app/modules/BRSRfiles/brsr_previewremarksscreen/brsr_previewremarksscreen.module').then(m=>m.Brsr_previewremarksscreenModule)},
            {path: 'brsr_signingoff/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr-signingoff/brsr-signingoff.module').then(m => m.BrsrSigningoffModule)},
            {path: 'brsr_signoffreport/:reportId', loadChildren: () => import('app/modules/BRSRfiles/brsr-signoffreport/brsr-signoffreport.module').then(m => m.BrsrSignoffreportModule)},
          
 //SGX
            {path: 'sgx', loadChildren: () => import('app/modules/SGXfiles//sgx/sgx.module').then(m => m.SgxModule)},
            {path: 'createreportforsgx', loadChildren: () => import('app/modules/SGXfiles//createreportforsgx/createreportforsgx.module').then(m => m.CreatereportforsgxModule)},
            {path: 'selectsgx/:reportId', loadChildren: () => import('app/modules/SGXfiles/selectsgx/selectsgx.module').then(m => m.SelectsgxModule)},
            {path: 'sgx_sectemplate/:reportId', loadChildren: () => import ('app/modules/SGXfiles/sgx_sectemplate/sgx_sectemplate.module').then(m => m.Sgx_sectemplateModule)},
            {path: 'sgx_previewreport/:reportId', loadChildren: () => import ('app/modules/SGXfiles/sgx_previewreport/sgx_previewreport.module').then(m => m.Sgx_previewreportModule)},
            {path: 'sgx_imagereport/:reportId', loadChildren: () => import ('app/modules/SGXfiles/sgx_imagereport/sgx_imagereport.module').then(m => m.Sgx_imagereportModule)},
            {path: 'sgx_desone/:reportId', loadChildren: () => import ('app/modules/SGXfiles/sgx_desone/sgx_desone.module').then(m => m.Sgx_desoneModule)},
            {path: 'sgx_destwo/:reportId', loadChildren: () => import ('app/modules/SGXfiles/sgx_destwo/sgx_destwo.module').then(m => m.Sgx_destwoModule)},
            {path: 'sgx_desthree/:reportId', loadChildren: () => import ('app/modules/SGXfiles/sgx_desthree/sgx_desthree.module').then(m => m.Sgx_desthreeModule)},
            {path: 'sgx_desfour/:repotId', loadChildren: () => import('app/modules/SGXfiles/sgx_desfour/sgx_desfour.module').then(m => m.Sgx_desfourModule)},
            {path: 'sgx_desfive/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_desfive/sgx_desfive.module').then(m => m.Sgx_desfiveModule)},
            {path: 'sgx_secdesign/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_secdesign/sgx_secdesign.module').then(m => m.Sgx_secdesignModule)},
            {path: 'sgx_templateone/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_templateone/sgx_templateone.module').then(m =>m.Sgx_templateoneModule)},
            {path: 'sgx_templatetwo/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_templatetwo/sgx_templatetwo.module').then(m =>m.Sgx_templatetwoModule)},
            {path: 'sgx_templatethree/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_templatethree/sgx_templatethree.module').then(m =>m.Sgx_templatethreeModule)},
            {path: 'sgx_templatefour/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_templatefour/sgx_templatefour.module').then(m =>m.Sgx_templatefourModule)},
            {path: 'sgx_templatefive/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_templatefive/sgx_templatefive.module').then(m =>m.Sgx_templatefiveModule)},
            {path: 'sgx_uploadlogo/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_uploadlogo/sgx_uploadlogo.module').then(m => m.Sgx_uploadlogoModule)},
            {path: 'sgx_introduction/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_introduction/sgx_introduction.module').then(m => m.Sgx_introductionModule)},
            {path: 'sgx_settingcomp/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_settingcomp/sgx_settingcomp.module').then(m => m.Sgx_settingcompModule)},
            {path: 'sgx_introreport/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_introreport/sgx_introreport.module').then(m => m.Sgx_introreportModule)},
            {path: 'sgx_dynamicreport/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_dynamicreport/sgx_dynamicreport.module').then(m => m.Sgx_dynamicreportModule)},
            {path: 'sgx_generaldisclosure/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_generaldisclosure/sgx_generaldisclosure.module').then(m => m.Sgx_generaldisclosureModule)},
            {path: 'sgx_socialdisclosure/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_socialdisclosure/sgx_socialdisclosure.module').then(m => m.Sgx_socialdisclosureModule)},
            {path: 'sgx_governancediaclosure/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_governancedisclosure/sgx_governancedisclosure.module').then(m => m.Sgx_governancedisclosureModule)},
            {path: 'sgx_validate/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_validate/sgx_validate.module').then(m => m.Sgx_validateModule)},
            {path: 'sgx_generatereport/:reportId', loadChildren: () => import('app/modules/SGXfiles/sgx_generatereport/sgx_generatereport.module').then(m => m.Sgx_generatereportModule)},
            {path: 'sgx_remarksgovernance/:reportId',loadChildren: () => import('app/modules/SGXfiles/sgx_remarksgovernance/sgx_remarksgovernance.module').then(m=>m.Sgx_remarksgovernanceModule)},
            {path: 'sgx_remarkssocial/:reportId',loadChildren: () => import('app/modules/SGXfiles/sgx_remarkssocial/sgx_remarkssocial.module').then(m=>m.Sgx_remarkssocialModule)},
            {path: 'sgx_validatingreportscreen/:reportId',loadChildren: () => import('app/modules/SGXfiles/sgx_validatingreportscreen/sgx_validatingreportscreen.module').then(m=>m.Sgx_validatingreportscreenModule)},
            {path: 'sgx_remarkspreview/:reportId',loadChildren: () => import('app/modules/SGXfiles/sgx_remarkspreview/sgx_remarkspreview.module').then(m=>m.Sgx_remarkspreviewModule)},
            {path: 'sgx_remarkspregover/:reportId',loadChildren: () => import('app/modules/SGXfiles/sgx_remarkspregover/sgx_remarkspregover.module').then(m=>m.Sgx_remarkspregoverModule)},
            {path: 'sgx_remarkspresocial/:reportId',loadChildren: () => import('app/modules/SGXfiles/sgx_remarkspresocial/sgx_remarkspresocial.module').then(m=>m.Sgx_remarkspresocialModule)},
            {path: 'sgx_remarkspreenviro/:reportId',loadChildren: () =>import('app/modules/SGXfiles/sgx_remarkspreenviro/sgx_remarkspreenviro.module').then(m=>m.Sgx_remarkspreenviroModule)},
            {path: 'sgx_remarksenvironment/:reportId',loadChildren: () => import('app/modules/SGXfiles/sgx_remarksenvironment/sgx_remarksenvironment.module').then(m=>m.Sgx_remarksenvironmentModule)},
            {path: 'sgx_signingoff/:reportId',loadChildren: () => import('app/modules/SGXfiles/sgx_signingoff/sgx_signingoff.module').then(m=>m.Sgx_signingoffModule)},
            {path: 'sgx_signoffreport/:reportId',loadChildren: () => import('app/modules/SGXfiles/sgx_signoffreport/sgx_signoffreport.module').then(m=>m.Sgx_signoffreportModule)},
            {path: 'sgx_preremarksscreen/:reportId',loadChildren:() => import ('app/modules/SGXfiles/sgx_preremarksscreen/sgx_preremarksscreen.module').then(m => m.Sgx_preremarksscreenModule)},
            //GRI
            {path: 'dashboard', loadChildren: () => import('app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
            {path: 'framework', loadChildren: () => import('app/modules/framework/framework.module').then(m => m.FrameworkModule)},
            {path: 'gri', loadChildren: () => import('app/modules/gri/gri.module').then(m => m.GriModule)},
            {path: 'ribbon', loadChildren: () => import('app/modules/ribbon/ribbon.module').then(m => m.RibbonModule)},
            {path: 'createtemplate', loadChildren: () => import('app/modules/createtemplate/createtemplate.module').then(m => m.CreatetemplateModule)},
            {path: 'createreport', loadChildren: () => import('app/modules/createreport/createreport.module').then(m => m.CreatereportModule)},
            {path: 'createreportfromtemplate/:reportId', loadChildren: () => import('app/modules/createreportfromtemplate/createreportfromtemplate.module').then(m => m.CreatereportfromtemplateModule)},
            {path: 'updatereport/:reportId', loadChildren: () => import('app/modules/updatereport/updatereport.module').then(m => m.UpdatereportModule)},
            {path: 'importdis/:reportId', loadChildren: () => import('app/modules/importdis/importdis.module').then(m => m.ImportdisModule)},
            {path: 'selectdis/:reportId', loadChildren: () => import('app/modules/selectdis/selectdis.module').then(m => m.SelectdisModule)},
            {path: 'imagereport/:reportId', loadChildren: () => import('app/modules/imagereport/imagereport.module').then(m => m.ImagereportModule)},
            {path: 'sectemplate/:reportId', loadChildren: () => import('app/modules/sectemplate/sectemplate.module').then(m => m.SectemplateModule)},
            {path: 'templateone/:reportId', loadChildren: () => import('app/modules/templateone/templateone.module').then(m => m.TemplateoneModule)},
            {path: 'templatetwo/:reportId', loadChildren: () => import('app/modules/templatetwo/templatetwo.module').then(m => m.TemplatetwoModule)},
            {path: 'templatethree/:reportId', loadChildren: () => import('app/modules/templatethree/templatethree.module').then(m => m.TemplatethreeModule)},
            {path: 'templatefour/:reportId', loadChildren: () => import('app/modules/templatefour/templatefour.module').then(m => m.TemplatefourModule)},
            {path: 'templatefive/:reportId', loadChildren: () => import('app/modules/templatefive/templatefive.module').then(m => m.TemplatefiveModule)},
            {path: 'secdesign/:reportId', loadChildren: () => import('app/modules/secdesign/secdesign.module').then(m => m.SecdesignModule)},
            {path: 'desone/:reportId', loadChildren: () => import('app/modules/desone/desone.module').then(m => m.DesoneModule)},
            {path: 'destwo/:reportId', loadChildren: () => import('app/modules/destwo/destwo.module').then(m => m.DestwoModule)},
            {path: 'des3/:reportId', loadChildren: () => import('app/modules/des3/des3.module').then(m => m.Des3Module)},
            {path: 'desfour/:reportId', loadChildren: () => import('app/modules/desfour/desfour.module').then(m => m.DesfourModule)},
            {path: 'desfive/:reportId', loadChildren: () => import('app/modules/desfive/desfive.module').then(m => m.DesfiveModule)},
            {path: 'uploadlogo/:reportId', loadChildren: () => import('app/modules/uploadlogo/uploadlogo.module').then(m => m.UploadlogoModule)},
            {path: 'tableofcontents/:reportId', loadChildren: () => import('app/modules/tableofcontents/tableofcontents.module').then(m => m.TableofcontentsModule)},
            {path: 'introduction/:reportId', loadChildren: () => import('app/modules/introduction/introduction.module').then(m => m.IntroductionModule)},
            {path: 'settingcomp/:reportId', loadChildren: () => import('app/modules/settingcomp/settingcomp.module').then(m => m.settingsModule)},
            {path: 'previewreport/:reportId', loadChildren: () => import('app/modules/previewreport/previewreport.module').then(m => m.PreviewreportModule)},
            {path: 'dynamicreport/:reportId', loadChildren: () => import('app/modules/dynamicreport/dynamicreport.module').then(m => m.DynamicreportModule)},
            {path: 'introreport/:reportId', loadChildren: () => import('app/modules/introreport/introreport.module').then(m => m.IntroreportModule)},
            {path: 'dynamiccontent/:reportId', loadChildren: () => import('app/modules/dynamiccontent/dynamiccontent.module').then(m => m.DynamiccontentModule)},
            {path: 'grigeneraldisclosure/:reportId', loadChildren: () => import('app/modules/grigeneraldisclosure/grigeneraldisclosure.module').then(m => m.GrigeneraldisclosureModule)},
            {path: 'remarksdisplay/:reportId', loadChildren: () => import('app/modules/remarksdisplay/remarksdisplay.module').then(m => m.RemarksdisplayModule)},
            {path: 'remarksgeneral/:reportId', loadChildren: () => import('app/modules/remarksgeneral/remarksgeneral.module').then(m => m.RemarksgeneralModule)},
            {path: 'remarksmateriality/:reportId', loadChildren: () => import('app/modules/remarksmateriality/remarksmateriality.module').then(m => m.RemarksmaterialityModule)},
            {path: 'remarksenvironment/:reportId', loadChildren: () => import('app/modules/remarksenvironment/remarksenvironment.module').then(m => m.RemarksenvironmentModule)},
            {path: 'remarkseconomic/:reportId', loadChildren: () => import('app/modules/remarkseconomic/remarkseconomic.module').then(m => m.RemarkseconomicModule)},
            {path: 'remarkssocial/:reportId', loadChildren: () => import('app/modules/remarkssocial/remarkssocial.module').then(m => m.RemarkssocialModule)},
            {path: 'remarkspregeneral/:reportId', loadChildren: () => import('app/modules/remarkspregeneral/remarkspregeneral.module').then(m => m.RemarkspregeneralModule)},
            {path: 'remarkspremateriality/:reportId', loadChildren: () => import('app/modules/remarkspremateriality/remarkspremateriality.module').then(m => m.RemarksprematerialityModule)},
            {path: 'remarkspreeconomic/:reportId', loadChildren: () => import('app/modules/remarkspreeconomic/remarkspreeconomic.module').then(m => m.RemarkspreeconomicModule)},
            {path: 'remarkspreenvironment/:reportId', loadChildren: () => import('app/modules/remarkspreenvironment/remarkspreenvironment.module').then(m => m.RemarkspreenvironmentModule)},
            {path: 'remarkspresocial/:reportId', loadChildren: () => import('app/modules/remarkspresocial/remarkspresocial.module').then(m => m.RemarkspresocialModule)},
            {path: 'preremarksscreen/:reportId', loadChildren: () => import('app/modules/preremarksscreen/preremarksscreen.module').then(m => m.PreremarksscreenModule)},
            {path: 'grimateriality/:reportId', loadChildren: () => import('app/modules/grimateriality/grimateriality.module').then(m => m.GrimaterialityModule)},
            {path: 'grieconomic/:reportId', loadChildren: () => import('app/modules/grieconomic/grieconomic.module').then(m => m.GrieconomicModule)},
            {path: 'grienvironment/:reportId', loadChildren: () => import('app/modules/grienvironment/grienvironment.module').then(m => m.GrienvironmentModule)},
            {path: 'grisocial/:reportId', loadChildren: () => import('app/modules/grisocial/grisocial.module').then(m => m.GrisocialModule)},
            {path:'validate/:reportId',loadChildren:()=>import('app/modules/validate/validate.module').then(m=>m.ValidateModule)},
            {path:'signoffreport/:reportId',loadChildren:()=>import('app/modules/signoffreport/signoffreport.module').then(m=>m.SignoffreportModule)},
            {path:'signingoff/:reportId',loadChildren:()=>import('app/modules/signingoff/signingoff.module').then(m=>m.SigningoffModule)},
            {path:'validatingreportscreen/:reportId',loadChildren:()=>import('app/modules/validatingreportscreen/validatingreportscreen.module').then(m=>m.ValidatingreportscreenModule)},
            {path:'generate/:reportId',loadChildren:()=>import('app/modules/generatereport/generatereport.module').then(m=>m.GeneratereportModule)},
            {path:'indexcontent/:reportId',loadChildren:()=>import('app/modules/indexcontent/indexcontent.module').then(m=>m.IndexcontentModule)},
            {path:'profile',loadChildren:()=>import('app/modules/profile/profile.module').then(m=>m.ProfileModule)},
            {path:'stationarycombustion',loadChildren:()=>import('app/modules/carbonaccounting/stationarycombustion/stationarycombustion.module').then(m=>m.StationarycombustionModule)},
            {path:'carbonscope1cooling',loadChildren:()=>import('app/modules/carbonaccounting/carbonscope1cooling/carbonscope1cooling.module').then(m=>m.Carbonscope1coolingModule)},
            {path:'scope1vehicles',loadChildren:()=>import ('app/modules/carbonaccounting/scope1vehicles/scope1vehicles.module').then(m=>m.Scope1vehiclesModule)},
            {path:'carbonscope1steamheat',loadChildren:()=>import('app/modules/carbonaccounting/carbonscope1steamheat/carbonscope1steamheat.module').then(m=>m.Carbonscope1steamheatModule)},
            {path:'carbonscope1elec',loadChildren:()=>import('app/modules/carbonaccounting/carbonscope1elec/carbonscope1elec.module').then(m=>m.Carbonscope1elecModule)},
            {path:'carbondashboard',loadChildren:()=>import('app/modules/carbonaccounting/carbondashboard/carbondashboard.module').then(m=>m.CarbondashboardModule)},
            {path:'respas',loadChildren:()=>import('app/modules/respas/respas.module').then(m=>m.RespasModule)},
            {path: 'uploadedevidences/:reportId', loadChildren: () => import('app/modules/uploadedevidences/uploadedevidences.module').then(m => m.UploadedevidencesModule)},
            {path: 'myreports', loadChildren: () => import('app/modules/myreports/myreports.module').then(m => m.MyreportsModule)},
            {path: 'reportcollab', loadChildren: () => import('app/modules/reportcollaborators/reportcollaborators.module').then(m => m.ReportcollaboratorsModule)},
            {path: 'published', loadChildren: () => import('app/modules/published/published.module').then(m => m.PublishedModule)},
            {path: 'designtemplate', loadChildren: () => import('app/modules/designtemplate/designtemplate.module').then(m => m.DesigntemplateModule)},
           {path: 'frameworkfortemplate', loadChildren: () => import('app/modules/frameworkfortemplate/frameworkfortemplate.module').then(m => m.FrameworkfortemplateModule)},
           {path: 'grifortemplate', loadChildren: () => import('app/modules/grifortemplate/grifortemplate.module').then(m => m.GrifortemplateModule)},
            {path: 'selectfortemplate/:tId', loadChildren: () => import('app/modules/selectfortemplate/selectfortemplate.module').then(m => m.SelectfortemplateModule)},
            {path: 'imagefortemplate/:tId', loadChildren: () => import('app/modules/imagefortemplate/imagefortemplate.module').then(m => m.ImagefortemplateModule)},
            {path: 'universalmateriality', loadChildren: () => import('app/modules/universalmateriality/universalmateriality.module').then(m => m.UniversalmaterialityModule)},
           {path: 'esgbooklibrary', loadChildren: () => import('app/modules/esgbooklibrary/esgbooklibrary.module').then(m => m.EsgbooklibraryModule)},
           {path: 'in-progress', loadChildren: () => import('app/modules/in-progress/in-progress.module').then(m => m.InProgressModule)},

            {path: 'admin', children: [
                {path: 'menu', loadChildren: () => import('app/modules/admin/menu/menu.module').then(m => m.MenuModule)},
                {path: 'role', loadChildren: () => import('app/modules/admin/role/role.module').then(m => m.RoleModule)},
                {path: 'rolemenu', loadChildren: () => import('app/modules/admin/role-menu/role-menu.module').then(m => m.RoleMenuModule)},
                {path: 'users', loadChildren: () => import('app/modules/admin/user/user.module').then(m => m.UserModule)},
            ]},

            {path: 'example', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)},
            {path: '**', component:PagenotfoundComponent},
        ]
    }
];
