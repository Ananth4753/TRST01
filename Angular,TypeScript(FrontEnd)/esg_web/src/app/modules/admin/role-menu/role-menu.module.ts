import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Route, RouterModule } from '@angular/router';
import { RoleMenuComponent } from 'app/modules/admin/role-menu/role-menu.component';
import { SharedModule } from 'app/shared/shared.module';
import { RoleMenuService } from './role-menu.service';
import { RoleMenuStatusComponent } from './status/role-menu-status.component';

const roleMenuRoutes: Route[] = [
    {
        path     : '',
        component: RoleMenuComponent
    }
];

@NgModule({
    declarations: [
        RoleMenuComponent,
        RoleMenuStatusComponent
    ],
    imports     : [
        RouterModule.forChild(roleMenuRoutes),
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatSortModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatPaginatorModule,
        MatDialogModule,
        SharedModule
    ],
    providers   : [
        RoleMenuService
    ]
})
export class RoleMenuModule
{
}
