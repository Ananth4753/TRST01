import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, takeUntil } from 'rxjs';
import { RoleDetailComponent } from './detail/role-detail.component';
import { RoleService } from './role.service';
import { RoleDetail } from './role.types';
@Component({
    selector     : 'role',
    templateUrl  : './role.component.html',
    styleUrls    : ['./role.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: fuseAnimations
})
export class RoleComponent implements OnInit,OnDestroy
{
    pageSize: number = TABLE_PAGINATION_SIZE;
    selectedRoleItem: RoleDetail | null = null;
    searchInputControl: FormControl = new FormControl();
    roleItems$: Observable<RoleDetail[]>;
    isLoading: boolean = false;
    columnsToDisplay: string[] = ['Edit', 'Code', 'Name','ViewYN',
        'CreatedDate', 'CreatedByUser', 'UpdatedDate', 'UpdatedByUser'];
    roleDataSource = new MatTableDataSource<RoleDetail>();

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    constructor(private _roleService: RoleService, private _matDialog: MatDialog)
    {
    }

    @ViewChild(MatPaginator, { static: false })
    set paginator(value: MatPaginator) {
        if (this.roleDataSource) {
            this.roleDataSource.paginator = value;
        }
    }

    @ViewChild(MatSort, { static: false })
    set sort(value: MatSort) {
        if (this.roleDataSource) {
            this.roleDataSource.sort = value;
        }
    }

    ngOnInit(): void {
        this.roleItems$ = this._roleService.roleItems$;
        this.refresh();

        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(300),
                distinctUntilChanged(),
                map((query) => {
                    this.roleDataSource.filter = query.trim().toLowerCase();
                })
            ).subscribe();
    }
    refresh(): void {
        this._roleService.getRoleDetails().subscribe((data) => {
            this.roleDataSource.data = data;
        });
    }

        /**
     * Open menu detail dialog
     */
         createRole(): void {
            this.onEditRole(null);
        }

        onEditRole(roleId: number): void {
            // Open the dialog
            const dialogRef = this._matDialog.open(RoleDetailComponent, {
                autoFocus: false,
                // Do not allow user to use escape or clicking on the backdrop to close the modal.
                disableClose: true,
                data     : { roleId }
            });

            dialogRef.afterClosed()
                .subscribe((result) => {
                    if(result) {
                        this.refresh();
                    }
                });
        }

        ngOnDestroy(): void {
            // Unsubscribe from all subscriptions
            this._unsubscribeAll.next(null);
            this._unsubscribeAll.complete();
        }
}
