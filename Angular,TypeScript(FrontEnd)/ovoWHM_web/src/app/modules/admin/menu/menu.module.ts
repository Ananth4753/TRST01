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
import { MenuComponent } from 'app/modules/admin/menu/menu.component';
import { SharedModule } from 'app/shared/shared.module';
import { MenuDetailComponent } from './detail/menu-detail.component';
import { MenuService } from './menu.service';

const menuRoutes: Route[] = [
    {
        path     : '',
        component: MenuComponent
    }
];

@NgModule({
    declarations: [
        MenuComponent,
        MenuDetailComponent
    ],
    imports     : [
        RouterModule.forChild(menuRoutes),
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
        MenuService
    ]
})
export class MenuModule
{
}
