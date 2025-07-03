import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ForgotpassService } from './forgotpass.service';
import { SignUpService } from '../sign-up/sign-up.service';
import { Container, Main } from 'tsparticles';
@Component({
    selector: 'auth-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class AuthForgotPasswordComponent implements OnInit {
    regDetails: any;
    Mailvalid: boolean = false;
    alertmsg;
    @ViewChild('forgotPasswordNgForm') forgotPasswordNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };
    forgotform: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private rs: SignUpService,
        private fs: ForgotpassService,
        private fb: FormBuilder,
        private router: Router
    ) {
        var obj = [
            { id: 1, boy: 5, c: 9 },
            { id: 2, boy: 6, c: 10 },
            { id: 3, boy: 7, c: 11 },
            { id: 4, boy: 8, c: 12 },
          ];
          const mapped = obj;
      
          console.log(mapped, 'mapped');
    }
    id = 'tsparticles';

    /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
    particlesUrl = 'http://foo.bar/particles.json';
  
    /* or the classic JavaScript object */
    /* or the classic JavaScript object */
    particlesOptions = {
      particles: {
        color: {
          value: ['#ffffff'],
        },
        lineLinked: {
          enable: true,
          color: 'random',
        },
        move: {
          enable: true,
          speed: 2,
        },
      },
    };
  
    particlesLoaded(container: Container): void {
      console.log(container);
    }
  
    particlesInit(main: Main): void {
      console.log(main);
  
      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.forgotform = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Send the reset link
     */
    sendResetLink(): void {
        // Return if the form is invalid
        if (this.forgotform.invalid) {
            return;
        }

        // Disable the form
        this.forgotform.disable();

        // Hide the alert
        this.showAlert = false;

        // Forgot password
        this._authService
            .forgotPassword(this.forgotform.get('email').value)
            .pipe(
                finalize(() => {
                    // Re-enable the form
                    this.forgotform.enable();

                    // Reset the form
                    this.forgotPasswordNgForm.resetForm();

                    // Show the alert
                    this.showAlert = true;
                })
            )
            .subscribe(
                (response) => {
                    // Set the alert
                    this.alert = {
                        type: 'success',
                        message:
                            "Password reset sent! You'll receive an email if you are registered on our system.",
                    };
                },
                (response) => {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message:
                            'Email does not found! Are you sure you are already a member?',
                    };
                }
            );
    }
    EmailValidate() {
        let EnterEmail = (<HTMLInputElement>document.getElementById('email'))
            .value;

        this.rs.getRegistrationDetailsEmailId(EnterEmail).subscribe((res) => {
            this.regDetails = res;

            if (this.regDetails[0].cnt === 0) {
                this.alertmsg = 'This Email is not registered';
                alert('This Email is not registered');
                this.forgotform.reset();
            } else {
                this.Mailvalid = true;
                var obj = {
                    EmailId: this.forgotform.get('email')?.value,
                    VerificationCode: Math.floor(
                        100000 + Math.random() * 900000
                    ),
                };
               

                this.fs.updateuserverificationcode(obj).subscribe((data) => {
                    console.log(data);
                    
                });
              
            }
            
        });
        this.router.navigate([`/confirmation-required`]);
    }
    onreset() {
        var obj = {
            EmailId: this.forgotform.get('email')?.value,
            VerificationCode: Math.floor(100000 + Math.random() * 900000),
        };
        console.log(obj);
        this.fs.updateuserverificationcode(obj).subscribe((data) => {
            console.log(data);
        });
    }
}
