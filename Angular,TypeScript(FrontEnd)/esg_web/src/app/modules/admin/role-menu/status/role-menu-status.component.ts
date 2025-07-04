import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
import { RoleMenuService } from '../role-menu.service';
import { RoleMenu, RoleMenuDetail } from '../role-menu.types';

@Component({
    selector     : 'role-menu-status',
    templateUrl  : './role-menu-status.component.html',
    encapsulation: ViewEncapsulation.None
})
export class RoleMenuStatusComponent implements OnInit
{
    title: string;
    roleMenu: RoleMenu;
    roleMenuForm: FormGroup;

    /**
     * Constructor
     */
    constructor(
        public matDialogRef: MatDialogRef<RoleMenuStatusComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: { roleMenu: RoleMenuDetail },
        private _roleMenuService: RoleMenuService,
        private _formBuilder: FormBuilder,
        private _authService: AuthService
    )
    {
        this.title = `Update | Role:${this._data.roleMenu.Role} | Menu:${this._data.roleMenu.Menu} Status`;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.roleMenuForm = this._formBuilder.group({
            AddYN: [false],
            EditYN: [false],
            ViewYN: [false]
        });

        this._roleMenuService.getRoleMenu(this._data.roleMenu.Id).subscribe((data) => {
            this.roleMenu = data[0];

            this.roleMenuForm.get('AddYN').setValue(this.roleMenu.AddYN);
            this.roleMenuForm.get('EditYN').setValue(this.roleMenu.EditYN);
            this.roleMenuForm.get('ViewYN').setValue(this.roleMenu.ViewYN);
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Close
     */
    onClose(): void
    {
        // Close the dialog
        this.matDialogRef.close(false);
    }

    /**
     * Save the message as a draft
     */
    onCancel(): void
    {
        // Close the dialog
        this.matDialogRef.close(false);
    }

    isFormChanged(): boolean {
        return this.roleMenuForm.get('AddYN').value !== this.roleMenu?.AddYN ||
                this.roleMenuForm.get('EditYN').value !== this.roleMenu?.EditYN ||
                this.roleMenuForm.get('ViewYN').value !== this.roleMenu?.ViewYN;
    }

    /**
     * Send the message
     */
    onSave(): void
    {
        this.roleMenu.AddYN = this.roleMenuForm.get('AddYN').value;
        this.roleMenu.EditYN = this.roleMenuForm.get('EditYN').value;
        this.roleMenu.ViewYN = this.roleMenuForm.get('ViewYN').value;

        this.roleMenu.UpdatedDate = new Date();
        this.roleMenu.UpdatedByUserId = this._authService.user.id;

        this._roleMenuService.updateRoleMenu(this.roleMenu).subscribe((result) => {
            this.matDialogRef.close(true);
        });
    }
}
