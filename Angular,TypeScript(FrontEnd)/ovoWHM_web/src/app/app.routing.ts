import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

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
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m =>m.AuthSignInModule)},
            {path: 'trace/:WarehouseId/:UniqueId', loadChildren: () => import('app/modules/auth/TraceComponent/Trace.module').then(m =>m.TraceModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
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
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)},

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
        children  : [
        {path: 'dashboard', 
        
        loadChildren: () => import('app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
     },
     {path: 'daywisereports', 
        
        loadChildren: () => import('app/modules/dashboard/DaywiseReport/daywisereport.module').then(m => m.DaywisereportModule)
     },
     {path: 'salesorders', 
        
     loadChildren: () => import('app/modules/dashboard/SalesOrderCustomers/SalesOrders.module').then(m => m.SalesOrdersModule)
  },
        {path: 'admin', children: [
                {path: 'menu', loadChildren: () => import('app/modules/admin/menu/menu.module').then(m => m.MenuModule)},
                {path: 'role', loadChildren: () => import('app/modules/admin/role/role.module').then(m => m.RoleModule)},
                {path: 'rolemenu', loadChildren: () => import('app/modules/admin/role-menu/role-menu.module').then(m => m.RoleMenuModule)},
                {path: 'users', loadChildren: () => import('app/modules/admin/user/user.module').then(m => m.UserModule)},
            ]},

            {path : 'Masters', children: [
                     {path: 'warehouse', loadChildren:() => import('app/modules/Masters/WareHouse/warehouse.module').then(m => m.WarehouseModule)},
                     {path: 'product', loadChildren :() => import('app/modules/Masters/Product/product.module').then(m => m.ProductModule)},
                     {path: 'flock', loadChildren: () => import('app/modules/Masters/flock/flock.module').then(m => m.FlockModule)},
                     {path: 'lookup', loadChildren: () => import('app/modules/Masters/lookup/lookup.module').then(m => m.LookupModule)},
                     {path : 'Sku', loadChildren:() => import('app/modules/Masters/Sku/sku.module').then(m => m.SkuModule)},
                     {path:'packagingmaterial', loadChildren:() => import('app/modules/Masters/packagingmaterial/packagingmaterial.module').then(m => m.PackagingmaterialModule)},
                     {path : 'stackdetails', loadChildren:() => import('app/modules/Masters/stackdetails/stackdetails.module').then(m => m.StackdetailsModule)},

            ]},{path:'Stackbarcode', loadChildren :() => import('app/modules/Masters/StackBarcode/stackbarcode.module').then(m =>m.StackbarcodeModule)},
               {path: 'productview', loadChildren: () => import('app/modules/Masters/productview/productview.module').then(m => m.ProductviewModule) },
               {path: 'repackingproducts', loadChildren: () => import('app/modules/Masters/RepackingProductBarcode/RepackingProductBarcode.module').then(m => m.RepackingProductBarcodeModule) },
               {path: 'packingslip', loadChildren: () =>import('app/modules/Masters/packingslip/packingslip.module').then(m => m.PackingslipModule)},
               {path: 'inhousestackchange', loadChildren: () =>import('app/modules/Masters/RetailStackChange/StackChange.module').then(m => m.StackChangeModule)},
               {path:'trackingpackingslip', loadChildren:() => import('app/modules/Masters/packingslip/trackingpackingslip/trackingpackingslip.module').then(m => m.TrackingpackingslipModule)},
               {path:'packingslipsearch', loadChildren:() => import('app/modules/Masters/packingslip/packingslipsearch/packingslipsearch.module').then(m => m.PackingslipsearchModule)},
               {path:'barcode', loadChildren:() => import('app/modules/BarCode/barcode.module').then(m => m.BarcodeModule)},
               {path:'packingmaterialstock', loadChildren:() => import('app/modules/PackingMaterialStock/stockmaterial.module').then(m => m.StockmaterialModule)},

            {path:'receivedpackingslips', loadChildren:() => import('app/modules/Masters/ReceivingPackingSlips/ReceivedPackingSlips.module').then(m => m.ReceivedPackingSlipsModule)},
            {path: 'example', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)},
            
        ]
    }
];
