import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector     : 'auth-sign-up',
    templateUrl  : './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignUpComponent implements OnInit
{
    @ViewChild('signUpNgForm') signUpNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signUpForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.signUpForm = this._formBuilder.group({
                // name      : ['', Validators.required],
                // email     : ['', [Validators.required, Validators.email]],
                // password  : ['', Validators.required],
                // company   : [''],
                // agreements: ['', Validators.requiredTrue]

                firstname:['',Validators.required,Validators.minLength(5)],
                lastname:['',Validators.required,Validators.minLength(4)],
                email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
                password:['',Validators.required,Validators.minLength(6)],
                confirmpassword:['',Validators.required,,Validators.minLength(6)],
              acceptTerms: [false, Validators.requiredTrue]
          }, 
          {
            validators: this.MustMatch('password','confirmpassword' )
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

    //         }
    //     );
    // }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign up
     */
    signUp(): void
    {
        // Do nothing if the form is invalid
        if ( this.signUpForm.invalid )
        {
            return;
        }

        // Disable the form
        this.signUpForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign up
        this._authService.signUp(this.signUpForm.value)
            .subscribe(
                (response) => {

                    // Navigate to the confirmation required page
                    this._router.navigateByUrl('/confirmation-required');
                },
                (response) => {

                    // Re-enable the form
                    this.signUpForm.enable();

                    // Reset the form
                    this.signUpNgForm.resetForm();

                    // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: 'Something went wrong, please try again.'
                    };

                    // Show the alert
                    this.showAlert = true;
                }
            );
    }
}
