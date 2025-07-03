import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, takeUntil } from 'rxjs';
import { MenuDetailComponent } from './detail/menu-detail.component';
import { MenuService } from './menu.service';
import { MenuDetail } from './menu.types';

@Component({
    selector: 'admin-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: fuseAnimations
})
export class MenuComponent implements OnInit, OnDestroy {

    pageSize: number = TABLE_PAGINATION_SIZE;
    selectedMenuItem: MenuDetail | null = null;
    searchInputControl: FormControl = new FormControl();
    menuItems$: Observable<MenuDetail[]>;
    isLoading: boolean = false;
    columnsToDisplay: string[] = ['Edit', 'Name', 'MenuType', 'ParentMenu', 'ViewYN',
        'Path', 'Icon', 'Code', 'Order', 'CreatedDate', 'CreatedByUser', 'UpdatedDate', 'UpdatedByUser'];
    menuDataSource = new MatTableDataSource<MenuDetail>();

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(private _menuService: MenuService, private _matDialog: MatDialog) {

    }

    @ViewChild(MatPaginator, { static: false })
    set paginator(value: MatPaginator) {
        if (this.menuDataSource) {
            this.menuDataSource.paginator = value;
        }
    }

    @ViewChild(MatSort, { static: false })
    set sort(value: MatSort) {
        if (this.menuDataSource) {
            this.menuDataSource.sort = value;
        }
    }

    ngOnInit(): void {
        this.menuItems$ = this._menuService.menuItems$;

        this.refresh();

        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(300),
                distinctUntilChanged(),
                map((query) => {
                    this.menuDataSource.filter = query.trim().toLowerCase();
                })
            ).subscribe();
    }

    refresh(): void {
        this._menuService.getMenuDetails().subscribe((data) => {
            this.menuDataSource.data = data;
        });
    }

    /**
     * Open menu detail dialog
     */
     createMenu(): void {
        this.onEditMenu(null);
    }

    onEditMenu(menuId: number): void {
        // Open the dialog
        const dialogRef = this._matDialog.open(MenuDetailComponent, {
            autoFocus: false,
            // Do not allow user to use escape or clicking on the backdrop to close the modal.
            disableClose: true,
            data     : { menuId }
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
