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
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class AuthBlogComponent implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit() {
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