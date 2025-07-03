import { Component } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { Router,NavigationEnd } from '@angular/router';
@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    mySubscription;
    /**
     * Constructor
     */
     constructor( public router: Router) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.mySubscription = this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
      // Trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
          }
        }); 
    }
    ngOnDestroy(){
        console.log('app ngOnDestroy')
        if (this.mySubscription) {
         this.mySubscription.unsubscribe();
        }
      }
}
