import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';

import { MD5 } from 'crypto-js';

import { RoleService } from '../../role/role.service';
import { UserService } from '../user.service';
import { UserDetail, UserItem } from '../user.types';

@Component({     
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {
    spdd:boolean=true;
    title: string;
    userItems: UserDetail[];
    userForm: FormGroup;
    roleItems;
    oldPwd: string;
    warehousedata;
    warehouse: any; 

    /**
     * Constructor
     */
    constructor(
        public matDialogRef: MatDialogRef<UserDetailComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: { userId: number },
       private  _userService: UserService,
        private _formBuilder: FormBuilder,
        private _role: RoleService,
        private _authService: AuthService,
    
    ) {
        this.title = this._data.userId ? 'Update User Details' : 'Create User Details';
    }
ngOnInit(): void {
     
        this._userService.getwarehousedetails().subscribe(res=>{
            this.warehousedata = res;
            console.log(res)
        })
        this._userService.getUserDetails().subscribe((data) => {
            this.userItems = data;
        });
        this._role.getRoles().subscribe((data) => {
            this.roleItems = data;
        });
  
        // Create the form
        this.userForm = this._formBuilder.group({
            Id: [],
            UserName: ['', Validators.required],
            Password: ['', Validators.required],
            FirstName: ['', Validators.required],
//          MiddleName: [''],
            LastName: [''],
            Email: ['', [Validators.email]],
            MobileNo: [''],
            WareHouseId:[],
            ViewYN: [true],
            RoleId: [''],
            CreatedDate: [new Date()],
            CreatedByUserId: [],
            UpdatedDate: [new Date()],
            UpdatedByUserId: []
        });

        if (this._data.userId) {
            this._userService.getUserById(this._data.userId).subscribe((userItems) => {
                const userItem: UserItem = userItems[0];
                this.oldPwd = userItem.Password;
                console.log(userItem);
        this.userForm.get('Id').setValue(userItem['Id']);
    this.userForm.get('UserName').setValue(userItem['UserName']);
    this.userForm.get('Password').setValue(userItem['Password']);
    this.userForm.get('FirstName').setValue(userItem['FirstName']);
   // this.userForm.get('MiddleName').setValue(userItem['MiddleName']);
    this.userForm.get('LastName').setValue(userItem['LastName']);
    this.userForm.get('Email').setValue(userItem['Email']);
    this.userForm.get('WareHouseId').setValue(userItem['WareHouseId']);
    this.userForm.get('MobileNo').setValue(userItem['MobileNo']);
    this.userForm.get('RoleId').setValue(userItem['RoleId']);
                // this.userForm.setValue(userItem);
            console.log(this.userItems);
            
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
console.log(userData);

        if (userData.Id === null) {
            userData.Password = MD5(userData.Password).toString();
            userData.CreatedDate = new Date();
            userData.CreatedByUserId = this._authService.user.id;
        } else if (this.oldPwd !== userData.Password) {
            userData.Password = MD5(userData.Password).toString();;
        }
        userData.UpdatedDate = new Date();
        userData.UpdatedByUserId = this._authService.user.id;
        userData.CreatedByUserId = this._authService.user.id;
console.log(userData);

       this._userService.createUser(userData).subscribe(res=>{
        console.log(res)
        this.matDialogRef.close(true);

       })
    }

    OnRoleChange(event)
    {
        console.log(event);
        
    if (event.value==4){
    this.spdd=false;
    }
    else{
        this.spdd=true;
    }
    }
    OnChangeWareHouseuser(event)
    {
        console.log(event.source.triggerValue);
        this.userForm.get('WareHouseId').setValue(event.source.triggerValue);
    }
}
