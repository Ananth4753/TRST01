import { NgModule } from '@angular/core';
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
import { Route, RouterModule } from '@angular/router';
import { MenuComponent } from 'app/modules/admin/menu/menu.component';
import { SharedModule } from 'app/shared/shared.module';
import { RoleComponent } from 'app/modules/admin/role/role.component';
import {RoleDetailComponent} from './detail/role-detail.component';
import { RoleService } from './role.service';

const roleRoutes: Route[] = [
    {
        path     : '',
        component: RoleComponent
    }
];

@NgModule({
    declarations: [
        RoleComponent,
        RoleDetailComponent
    ],
    imports     : [
        RouterModule.forChild(roleRoutes),
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
        SharedModule
    ],providers : [
        RoleService
    ]
})
export class RoleModule
{
}
