import { Component, OnInit, ViewChild, ViewEncapsulation,HostListener } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { MD5 } from 'crypto-js';
import { catchError, of, switchMap } from 'rxjs';

@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignInComponent implements OnInit
{
    public getScreenWidth:any;
    public getScreenHeight:any;

    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signInForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router
    )
    {
    }

    ngOnInit(): void
    {
        // Create the form
        this.signInForm = this._formBuilder.group({
            username  : ['', [Validators.required]],
            password  : ['', Validators.required],
            rememberMe: ['']
        });
        this.getScreenWidth=window.innerWidth;
        this.getScreenHeight=window.innerHeight;

    
    }


    @HostListener('window:resize',['$event'])

    onWindowResize(){
        this.getScreenWidth=window.innerWidth;
        this.getScreenHeight=window.innerHeight;
    }


    signIn(): void
    {
        // Return if the form is invalid
        if ( this.signInForm.invalid )
        {
            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;

        const credentials = this.signInForm.value;
        credentials.password = MD5(credentials.password).toString();
        this._authService.signIn(credentials).pipe(
            catchError((err) => {
                // Re-enable the form
                this.signInForm.enable();

                // Reset the form
                this.signInNgForm.resetForm();

                // Set the alert
                this.alert = {
                    type   : 'error',
                    message: 'Wrong username or password'
                };

                // Show the alert
                this.showAlert = true;

                return of(err);
            }),
            switchMap((data: any)=> {
                // const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/dashboard';
                // this._router.navigateByUrl(redirectURL);
const Data1 = data;

console.log(Data1.user.warehouseid)
if(Data1.user.warehouseid === null){
    const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/dashboard';
    this._router.navigateByUrl(redirectURL);
} else {
    const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/daywisereports';
    this._router.navigateByUrl(redirectURL);  
}
// if(Data1.user.warehouseid ==! null){
//     const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/daywisereports';
//     this._router.navigateByUrl(redirectURL);
// } 

return of(data);
            })
        ).subscribe();
    }
}