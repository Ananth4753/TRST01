import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, takeUntil } from 'rxjs';
import { UserDetailComponent } from './detail/user-detail.component';
import { UserService } from './user.service';
import { UserDetail } from './user.types';
import { AuthService } from 'app/core/auth/auth.service';
@Component({
    selector     : 'user',
    templateUrl  : './user.component.html',
    styleUrls: ['./user.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: fuseAnimations
})
export class UserComponent implements OnInit, OnDestroy
{
    pageSize: number = TABLE_PAGINATION_SIZE;
    selectedUserItem: UserDetail | null = null;
    searchInputControl: FormControl = new FormControl();
    userItems$: Observable<UserDetail[]>;
    isLoading: boolean = false;
    orgId:any;
    regId:any;
    columnsToDisplay: string[] = ['Edit','FirstName','UserName','RoleName','Designation','MobileNumber'
                ];
    userDataSource = new MatTableDataSource<any>();

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
     constructor(private userService: UserService, private matDialog: MatDialog,private as:AuthService) {

    }

    @ViewChild(MatPaginator, { static: false })
    set paginator(value: MatPaginator) {
        if (this.userDataSource) {
            this.userDataSource.paginator = value;
        }
    }

    @ViewChild(MatSort, { static: false })
    set sort(value: MatSort) {
        if (this.userDataSource) {
            this.userDataSource.sort = value;
        }
    }

    ngOnInit(): void {

        console.log(this.as.user);
        
        this.orgId=this.as.user.orgId
        console.log(this.orgId);
        
        this.regId=this.as.user.regId
        console.log(this.regId);
        this.userItems$ = this.userService.userItems$;

        this.refresh();

        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(300),
                distinctUntilChanged(),
                map((query) => {
                    this.userDataSource.filter = query.trim().toLowerCase();
                })
            ).subscribe();
    }

    refresh(): void {
        // this.userService.getUserDetails().subscribe((data) => {
        //     console.log(data);
            
        //     this.userDataSource.data = data;
        // });
        this.userService.getUserinorg(this.orgId).subscribe((data) => {
            console.log(data);
            this.userDataSource.data = data;
        });
    }

    /**
     * Open menu detail dialog
     */
    createUser(): void {
        this.onEditUser(null);
    }

    onEditUser(userId: number): void {
        // Open the dialog
        console.log(userId);
        
        const dialogRef = this.matDialog.open(UserDetailComponent, {
            autoFocus: false,
            // Do not allow user to use escape or clicking on the backdrop to close the modal.
            disableClose: true,
            data     : { userId }
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
