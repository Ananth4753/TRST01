import {  ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationRequiredService } from './confirmation-required.service';
import { MD5 } from 'crypto-js';
@Component({
    selector     : 'auth-confirmation-required',
    templateUrl  : './confirmation-required.component.html',
    styleUrls: ['./confirmation-required.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthConfirmationRequiredComponent
{
    newpassform: FormGroup;
    boolcheck: boolean = true;
    alertmsg;
    /**
     * Constructor
     */
    constructor(    private fb: FormBuilder,
        private router: Router,
        private cs: ConfirmationRequiredService)
    {
    }
    ngOnInit(){
        this.newpassform = this.fb.group({
            VerificationCode: ['', Validators.required],
            // NewPass: ['', Validators.required],
            // ConfirmPass: ['', Validators.required],
          });
    }
    validateSignupForm(){
      
    }
 
    checkverification() {
        var code = this.newpassform.get('VerificationCode')?.value;
        console.log(code);
    
        this.cs.checkverification(code).subscribe((data:any) => {
          var arrLength = data.length;
          if (arrLength == 0) {
            this.boolcheck = true;
            this.alertmsg="verification code is not matched";
            alert('verification code is not matched');
            this.newpassform.reset()
          } else {
    
    
            this.boolcheck = false;
    
            this.alertmsg="verification code is  matched";
            alert('verification code is matched');          
           this.router.navigate([`/createpass/${data[0]['OrgId']}`]);
          }
          console.log(data);
        });
        
      }
}
