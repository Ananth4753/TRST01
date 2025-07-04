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
import { SharedModule } from 'app/shared/shared.module';
import { UserComponent } from 'app/modules/admin/user/user.component';
import { UserDetailComponent } from './detail/user-detail.component';
import { UserService } from './user.service';
const userRoutes: Route[] = [
    {
        path     : '',
        component: UserComponent
    }
];

@NgModule({
    declarations: [
        UserComponent,
        UserDetailComponent
    ],
    imports     : [
        RouterModule.forChild(userRoutes),
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
    ],
    providers   : [
        UserService
    ]
})
export class UserModule
{
}
