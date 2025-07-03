import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
import { RoleService } from '../role.service';
import { Role } from '../role.types';

@Component({
    selector: 'app-role-detail',
    templateUrl: './role-detail.component.html',
    encapsulation: ViewEncapsulation.None
})
export class RoleDetailComponent implements OnInit {

    title: string;
    roleForm: FormGroup;

    constructor(
        public matDialogRef: MatDialogRef<RoleDetailComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: { roleId: number },
        private _roleService: RoleService,
        private _formBuilder: FormBuilder,
        private _authService: AuthService
    ) {
        this.title = this._data.roleId ? 'Update Role Details' : 'Create Role Details';
    }


    ngOnInit(): void {
        // Create the form
        this.roleForm = this._formBuilder.group({
            Id: [],
            Code: ['', Validators.required],
            Name: ['', Validators.required],
            ViewYN: [true],
            CreatedDate: [new Date()],
            CreatedByUserId: [],
            UpdatedDate: [new Date()],
            UpdatedByUserId: []
        });

        if (this._data.roleId) {
            this._roleService.getRoleById(this._data.roleId).subscribe((roleItems: Role[]) => {
                const roleItem: Role = roleItems[0];
                this.roleForm.setValue(roleItem);
            });
        }
    }

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
        const role: Role = this.roleForm.value;

        if (role.Id === null) {
            role.CreatedDate = new Date();
            role.CreatedByUserId = this._authService.user.id;
        }
        role.UpdatedDate = new Date();
        role.UpdatedByUserId = this._authService.user.id;

        this._roleService.createRole(role).subscribe((result) => {
            this.matDialogRef.close(true);
        });
    }

}
