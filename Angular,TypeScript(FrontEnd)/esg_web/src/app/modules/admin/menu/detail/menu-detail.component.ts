import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
import { MenuService } from '../menu.service';
import { MenuDetail, MenuItem } from '../menu.types';

@Component({
    selector: 'admin-menu-detail',
    templateUrl: './menu-detail.component.html',
    encapsulation: ViewEncapsulation.None
})
export class MenuDetailComponent implements OnInit {
    title: string;
    menuTypes: { id: string; name: string }[];
    menuItems: MenuDetail[];
    menuForm: FormGroup;

    /**
     * Constructor
     */
    constructor(
        public matDialogRef: MatDialogRef<MenuDetailComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: { menuId: number },
        private _menuService: MenuService,
        private _formBuilder: FormBuilder,
        private _authService: AuthService
    ) {
        this.title = this._data.menuId ? 'Update Menu Details' : 'Create Menu Details';
        this.menuTypes = [
            { id: 'M', name: 'Menu' },
            { id: 'S', name: 'Sub Menu' },
            { id: 'I', name: 'Item' }
        ];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this._menuService.getMenuDetails().subscribe((data) => {
            this.menuItems = data;
        });

        // Create the form
        this.menuForm = this._formBuilder.group({
            Id: [],
            Code: ['', Validators.required],
            Name: ['', Validators.required],
            MenuType: ['', Validators.required],
            ParentMenuId: [''],
            Path: [''],
            Icon: [''],
            Order: ['', Validators.required],
            ViewYN: [true],
            CreatedDate: [new Date()],
            CreatedByUserId: [],
            UpdatedDate: [new Date()],
            UpdatedByUserId: []
        });

        if (this._data.menuId) {
            this._menuService.getMenuById(this._data.menuId).subscribe((menuItems) => {
                const menuItem: MenuItem = menuItems[0];
                this.menuForm.setValue(menuItem);

                if (this.menuForm.get('ParentMenuId').value === null ||
                    this.menuForm.get('ParentMenuId').value === 0) {
                    this.menuForm.get('ParentMenuId').setValue('');
                }

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
        const menu: MenuItem = this.menuForm.value;

        if (menu.Id === null) {
            menu.CreatedDate = new Date();
            menu.CreatedByUserId = this._authService.user.id;
        }
        menu.UpdatedDate = new Date();
        menu.UpdatedByUserId = this._authService.user.id;

        this._menuService.createMenu(menu).subscribe((result) => {
            this.matDialogRef.close(true);
        });
    }
}
