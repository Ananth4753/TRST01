import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, Subject, takeUntil, takeWhile, tap, timer } from 'rxjs';
import { AuthService } from 'app/core/auth/auth.service';
import { Container, Main } from 'tsparticles';
@Component({
    selector     : 'auth-sign-out',
    templateUrl  : './sign-out.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AuthSignOutComponent implements OnInit, OnDestroy
{
    countdown: number = 5;
    countdownMapping: any = {
        '=1'   : '# second',
        'other': '# seconds'
    };
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
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
    ngOnInit(): void
    {
        // Sign out
        this._authService.signOut();

        // Redirect after the countdown
        timer(1000, 1000)
            .pipe(
                finalize(() => {
                    this._router.navigate(['sign-in']);
                }),
                takeWhile(() => this.countdown > 0),
                takeUntil(this._unsubscribeAll),
                tap(() => this.countdown--)
            )
            .subscribe();
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
