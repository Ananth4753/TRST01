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
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthFaqComponent implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit() {
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
gotohome(){
  this._router.navigate([`/sign-in`]);
}
gototop() {
  // Scroll to 500 pixels from the top of the document
   window.scrollTo(0, 0);
  }
}
