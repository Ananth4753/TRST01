import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { MD5 } from 'crypto-js';
import { catchError, of, switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import { Container, Main } from 'tsparticles';

@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignInComponent implements OnInit
{
    landing:boolean=true;
    login:boolean=false;
    comingsoon:boolean=false;
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
          value: ['#28A8E0'],
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
Login(){
   // this._router.navigate(['/sign-in']);
   this.landing=false;
    this.login=true;
    this.comingsoon=false;
}
gotocomingsoon(){
    this.login=false;
    this.landing=false;
    this.comingsoon=true;
}
backtologinhome(){
    this.login=false;
    this.landing=true;
    this.comingsoon=false;

}
Register(){
    this._router.navigate(['/sign-up']);
    this.login=false;
    this.comingsoon=false;
}
    ngOnInit(): void
    {
      $(document).ready(function() {
        $('.popup-video').click(function(event) {
          event.preventDefault(); // Prevent the default link behavior
      
          var videoUrl = $(this).attr('href'); // Get the YouTube video URL
      
          // Create the popup window
          var popupWindow = window.open(videoUrl, 'popupWindow', 'width=800,height=600');
      
          // Focus the popup window
          if (window.focus) {
            popupWindow.focus();
          }
        });
      });
      
      $(document).ready(function() {
        $('.read-more-trigger_closed').click(function() {
          $(this).hide();
          $(this).siblings('.read-more-trigger_opened').show();
        });
      
        $('.read-more-trigger_opened').click(function() {
          $(this).hide();
          $(this).siblings('.read-more-trigger_closed').show();
        });
      
        $('.read-more-trigger_opened').hide(); // Hide the "Read Less" button initially
      });
      
      
        // Create the form
        this.signInForm = this._formBuilder.group({
            username  : ['', [Validators.required]],
            password  : ['', Validators.required],
            rememberMe: ['']
        });
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
                    message: 'Wrong username or password',
                };
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong Username or Password!',
                    
                  })
                  
                // Show the alert
                this.showAlert = true;

                return of(err);
            }),
            
            switchMap((data: any)=> {
                const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
                this._router.navigateByUrl(redirectURL);

                return of(data);
            })
        ).subscribe();
    }
    gototop() {
      // Scroll to 500 pixels from the top of the document
       window.scrollTo(0, 0);
      }
    topFunction() {
        // Scroll to 500 pixels from the top of the document
         window.scrollTo(0, 600);
        }

    topFunction1() {
        window.scrollTo(0, 1000);
    }
    topFunction2() {
        window.scrollTo(0, 1900);
    }
    topFunction3() {
        window.scrollTo(0, 3200);
    }
    topFunction4() {
        window.scrollTo(0, 4600);
    }
    gotofaq(){
      this._router.navigate([`/faq`]);
    }
    gotoblogs(){
      this._router.navigate([`/blogs`]);
    }
}
