import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
import { MD5 } from 'crypto-js';
import { RoleService } from '../../role/role.service';
import { RoleDetail } from '../../role/role.types';
import { UserService } from '../user.service';
import { UserDetail, UserItem } from '../user.types';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {

    title: string;
    userItems: UserDetail[];
    userForm: FormGroup;
    roleItems: RoleDetail[];
    oldPwd: string;
    orgId:any;
    regId:any;
    /**
     * Constructor
     */
    constructor(
        public matDialogRef: MatDialogRef<UserDetailComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: { userId: number },
        private _userService: UserService,
        private _formBuilder: FormBuilder,
        private _role: RoleService,
        private _authService: AuthService
    ) {
        this.title = this._data.userId ? 'Update User Details' : 'Create User Details';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        console.log(this._authService.user.orgId);
        
        this.orgId=this._authService.user.orgId
        console.log(this.orgId);
        
        this.regId=this._authService.user.regId
        console.log(this.regId);
        
        this._userService.getUserDetails().subscribe((data) => {
            this.userItems = data;
        });
        this._role.getRoleDetails().subscribe((data) => {
            this.roleItems = data;
        });
        // Create the form
        this.userForm = this._formBuilder.group({
            Id: [],
            UserName: ['', Validators.required],
            Password: ['', Validators.required],
            FirstName: ['', Validators.required],
            MiddileName: [''],
            LastName: [''],
            EmailId: [''],
            MobileNumber: [''],
            Designation: [''],
            ViewYN: [true],
            RoleId: [''],
            CreatedDate: [new Date()],
            CreatedByUserId: [],
            UpdatedDate: [new Date()],
            UpdatedByUserId: [],
            OrgId:[this._authService.user.orgId],
            RegistrationId:[this._authService.user.regId],
        });

        if (this._data.userId) {
            this._userService.getUserById(this._data.userId).subscribe((userItems) => {
                const userItem: UserItem = userItems[0];
                this.oldPwd = userItem.Password;
                this.userForm.setValue(userItem);
            });
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Close
     */
    onClose(): void {
        // Close the dialog
        this.matDialogRef.close(false);
    }

    /**
     * Save the message as a draft
     */
    onCancel(): void {
        // Close the dialog
        this.matDialogRef.close(false);
    }

    /**
     * Send the message
     */
    onSave(): void {

        const userData: UserItem = this.userForm.value;
console.log(userData.Designation);
console.log(typeof(userData.Designation));

        if (userData.Id === null) {
            userData.Password = MD5(userData.Password).toString();
            userData.CreatedDate = new Date();
            userData.CreatedByUserId = this._authService.user.id;
        } else if (this.oldPwd !== userData.Password) {
            userData.Password = MD5(userData.Password).toString();;
        }
        userData.UpdatedDate = new Date();
        userData.UpdatedByUserId = this._authService.user.id;

        this._userService.createUser(userData).subscribe((result) => {
            this.matDialogRef.close(true);
        });
    }

}
