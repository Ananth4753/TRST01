import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';
import { debounceTime, distinctUntilChanged, map, Subject, takeUntil } from 'rxjs';
import { RoleService } from '../role/role.service';
import { Role } from '../role/role.types';
import { RoleMenuService } from './role-menu.service';
import { RoleMenu, RoleMenuDetail } from './role-menu.types';
import { RoleMenuStatusComponent } from './status/role-menu-status.component';

@Component({
    selector     : 'role-menu',
    templateUrl  : './role-menu.component.html',
    styleUrls    : ['./role-menu.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RoleMenuComponent implements OnInit
{
    pageSize: number = TABLE_PAGINATION_SIZE;
    selectedRoleId: any = '';
    searchInputControl: FormControl = new FormControl();
    isLoading: boolean = false;
    roles: Role[];
    columnsToDisplay: string[] = ['Edit', 'Role', 'ParentMenu', 'Menu', 'AddYN', 'EditYN',
            'ViewYN', 'CreatedDate', 'CreatedByUser', 'UpdatedDate', 'UpdatedByUser'];
    roleMenuDataSource = new MatTableDataSource<RoleMenuDetail>();
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    /**
     * Constructor
     */
    constructor(
        private _roleMenuService: RoleMenuService,
        private _roleService: RoleService,
        private _matDialog: MatDialog
    )
    {
    }

    @ViewChild(MatPaginator, { static: false })
    set paginator(value: MatPaginator) {
        if (this.roleMenuDataSource) {
            this.roleMenuDataSource.paginator = value;
        }
    }

    @ViewChild(MatSort, { static: false })
    set sort(value: MatSort) {
        if (this.roleMenuDataSource) {
            this.roleMenuDataSource.sort = value;
        }
    }

    ngOnInit(): void {
        this.getRoleMenuDetails(this.selectedRoleId);
        this.getRoles();

        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges
        .pipe(
            takeUntil(this._unsubscribeAll),
            debounceTime(300),
            distinctUntilChanged(),
            map((query) => {
                this.roleMenuDataSource.filter = query.trim().toLowerCase();
            })
        ).subscribe();
    }

    onRoleSelected(roleId: number): void {
        this.selectedRoleId = roleId;
        this.getRoleMenuDetails(roleId);
    }

    getRoleMenuDetails(roleId: number): void {
        this._roleMenuService.getRoleMenuDetails(roleId).subscribe((data) => {
            this.roleMenuDataSource.data = data;
        });
    }

    getRoles(): void {
        this._roleService.getRoles().subscribe((roles) => {
            this.roles = roles;
        });
    }

    onEditRoleMenu(roleMenu: RoleMenuDetail): void {
        // Open the dialog
        const dialogRef = this._matDialog.open(RoleMenuStatusComponent, {
            autoFocus: false,
            // Do not allow user to use escape or clicking on the backdrop to close the modal.
            disableClose: true,
            data     : { roleMenu }
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if(result) {
                    // Reflect the updated RoleMenu status in main page.
                    this._roleMenuService.getRoleMenu(roleMenu.Id).subscribe((data: RoleMenu[]) => {
                        const updatedRoleMenu: RoleMenu = data[0];
                        roleMenu.AddYN = updatedRoleMenu.AddYN;
                        roleMenu.EditYN = updatedRoleMenu.EditYN;
                        roleMenu.ViewYN = updatedRoleMenu.ViewYN;
                    });
                }
            });
    }
}
