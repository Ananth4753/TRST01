import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';
import { FuseValidators } from '@fuse/validators';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { ResetPasswordService } from './reset-password.service';
import { SignUpService } from '../sign-up/sign-up.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MD5 } from 'crypto-js';
@Component({
    selector     : 'auth-reset-password',
    templateUrl  : './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthResetPasswordComponent implements OnInit
{
    newpassform: FormGroup;
    regData:any;
    boolcheck: boolean = true;
    regDetails:any;
    @ViewChild('resetPasswordNgForm') resetPasswordNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    resetPasswordForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private rs: ResetPasswordService,
        private ss:SignUpService
    )
    {
        this.createForm();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
     createForm()
     {
       this.newpassform = this._formBuilder.group({
         Id:[''],
         EmailId:[''],
         NewPass: ['', Validators.required],
         ConfirmPass: ['', Validators.required],
         RegId:['']
       },{
         validators: this.MustMatch('NewPass','ConfirmPass' )
   
       });
     }
     MustMatch(controlName: string, matchingControlName:string){

        return(formGroup:FormGroup)=>{
    const control = formGroup.controls[controlName];
    const  matchingControl= formGroup.controls[matchingControlName];
     if(matchingControl.errors && !matchingControl.errors['MustMatch']){
      return
     }
    
     if(control.value !==matchingControl.value ){
      matchingControl.setErrors(this.MustMatch)
    
     }
     else{
      matchingControl.setErrors(null);
     }
        }
      } 
    ngOnInit(): void
    {
        let OrgId = this.route.snapshot.params['regId'];
 
  
        this.rs.getRegistrationDetailsbyOrgId(OrgId).subscribe(res=>{
         this.regData = res;
  
       this.newpassform.get('EmailId')?.setValue( this.regData[0].EmailId) 
       console.log(this.regData[0].EmailId);
          
        })
        // Create the form
        // this.resetPasswordForm = this._formBuilder.group({
        //         password       : ['', Validators.required],
        //         passwordConfirm: ['', Validators.required]
        //     },
        //     {
        //         validators: FuseValidators.mustMatch('password', 'passwordConfirm')
        //     }
        // );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Reset password
     */
     validateSignupForm() {

        this.ss.getUserDetailsEmailId(this.regData[0].EmailId).subscribe(res=>{
         
             this.regDetails = res;
        
           
             
              if(this.regDetails[0].cnt === 0 ){
               var encryptedpassword = MD5(
                 this.newpassform.get('NewPass')?.value
               ).toString();
               var obj = {
                 EmailId: this.regData[0].EmailId ,
                 Password: encryptedpassword,
                 UserName: this.regData[0].EmailId ,
                 RegistrationId : this.regData[0].Id,
                 FirstName:this.regData[0].ContactName,
                 MobileNumber:this.regData[0].ContactNumber,
                 ViewYN:true,
                 RoleId:1,
                 CreatedDate:new Date(),
                 CreatedByUserId:1,
                 UpdatedDate:new Date(),
                 UpdatedByUserId:1
               
               };
               console.log(obj);
                this.rs.createUser(obj).subscribe((Data) => {
             
             alert('Successfully created User And Password');
             this.router.navigate([`/sign-in`]);
           });
               
              }else{
              
               var encryptedpassword = MD5(
                 this.newpassform.get('NewPass')?.value
               ).toString();
       
               var obj1 = {
                 Id: this.regData[0].Id,
                 EmailId: this.regData[0].EmailId ,
                 Password: encryptedpassword,
                 UserName: this.regData[0].EmailId ,
                 RegistrationId : this.regData[0].Id,
                 FirstName:this.regData[0].ContactName,
                 MobileNumber:this.regData[0].ContactNumber,
                 ViewYN:true,
                 RoleId:1,
                 CreatedDate:new Date(),
                 CreatedByUserId:1,
                 UpdatedDate:new Date(),
                 UpdatedByUserId:1,
                OrgId:this.regData[0].OrgId
               };
              
            this.rs.updateUserpassword(obj1).subscribe((Data) => {
             alert('Successfully Updated Password');
             this.router.navigate([`/sign-in`]);
           });
              }
        
           })
         }
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

        // Send the request to the server
        this._authService.resetPassword(this.resetPasswordForm.get('password').value)
            .pipe(
                finalize(() => {

                    // Re-enable the form
                    this.resetPasswordForm.enable();

                    // Reset the form
                    this.resetPasswordNgForm.resetForm();

                    // Show the alert
                    this.showAlert = true;
                })
            )
            .subscribe(
                (response) => {

                    // Set the alert
                    this.alert = {
                        type   : 'success',
                        message: 'Your password has been reset.'
                    };
                },
                (response) => {

                    // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: 'Something went wrong, please try again.'
                    };
                }
            );
    }
}
