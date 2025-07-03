import { Component, OnInit,ViewChild, ViewEncapsulation,Inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { MD5 } from 'crypto-js';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fuseAnimations } from '@fuse/animations';
import { FuseValidators } from '@fuse/validators';
import { FuseAlertType } from '@fuse/components/alert';
import { UserService } from 'app/modules/admin/user/user.service';
import { AuthService } from 'app/core/auth/auth.service';


@Component({
  selector: 'app-respas',
  templateUrl: './respas.component.html',
  styleUrls: ['./respas.component.scss'],
  encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class RespasComponent implements OnInit {
  @ViewChild('resetPasswordNgForm') resetPasswordNgForm: NgForm;

  alert: { type: FuseAlertType; message: string } = {
      type   : 'success',
      message: ''
  };
  resetPasswordForm: FormGroup;
  showAlert: boolean = false;

  constructor(public matDialogRef:MatDialogRef<RespasComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: { user:any },
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private UserService :UserService,
    private Router : Router
    ) {

      console.log(this._data.user);
     }

  ngOnInit() :void {
    
this.UserService.getUserById(this._data.user).subscribe(res=>{
  console.log(res);
  
})
      // Create the form
      this.resetPasswordForm = this._formBuilder.group({
              password       : ['', Validators.required],
              passwordConfirm: ['', Validators.required]
          },
          {
              validators: FuseValidators.mustMatch('password', 'passwordConfirm')
          }
      );
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Reset password
   */
  resetPassword(): void
  {
      // Return if the form is invalid
      if ( this.resetPasswordForm.invalid )
      {
          return;
      }

      // Disable the form
      this.resetPasswordForm.disable();

      // Hide the alert
      this.showAlert = false;
    const password =  MD5(this.resetPasswordForm.get('passwordConfirm').value).toString()

    console.log(password,this._data.user)
this.UserService.UpdateUserPassword(password,this._data.user).subscribe(res=>{


console.log(res);
alert("Your password has been Update")
          this.Router.navigate([`/sign-out`]);
          this.matDialogRef.close(false);

 })
  }

}