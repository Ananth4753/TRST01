import { Component, OnInit } from '@angular/core';
import {  ViewChild, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SignUpService } from '../auth/sign-up/sign-up.service';
import { DashboardService } from '../dashboard/dashboard.service';
import {  NgForm } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { User } from 'app/core/user/user.types';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'app/core/user/user.service';
import {RespasComponent} from 'app/modules/respas/respas.component';
import { MD5 } from 'crypto-js';
import { catchError, of, switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  login:boolean=true;
  @ViewChild('signInNgForm') signInNgForm: NgForm;

  alert: { type: FuseAlertType; message: string } = {
      type   : 'success',
      message: ''
  };
  signInForm: FormGroup;
  showAlert: boolean = false;
reportid: any;
idsearch:any;
name:any;
user:User
orgtype:any;
hdoff:any;
UserId:number;
country:any;
pin:any;
email:any;
no:any;
desg:any;
orgname:any;
profileform:FormGroup
msg:any;
nameofuser:any;
  constructor(private AuthService: AuthService,
    private ss:SignUpService,
    private ds :DashboardService,
    private router: Router,

    private aa: ActivatedRoute,
    private fb:FormBuilder,
    private MatDialog :MatDialog,
    private us:UserService) { 
      var now = new Date();
      var hrs = now.getHours();
      var msg = "";
      
      if (hrs >  0) msg = "Good morning"; // REALLY early
      if (hrs >  6) msg = "Good morning";      // After 6am
      if (hrs > 12) msg = "Good afternoon";    // After 12pm
      if (hrs > 17) msg = "Good evening";      // After 5pm
      if (hrs > 22) msg = "Good evening";        // After 10pm
      this.msg=msg
    }

  ngOnInit() {
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.ds.getuserbyId(this.AuthService.user.id).subscribe((data) => {
      this.idsearch=data[0]['Id'];
      console.log(this.idsearch);
      this.ss.getRegistrationDetailsRegId(this.idsearch).subscribe((data)=>{
        this.name=data[0]['ContactName'];
        this.orgtype=data[0]['OrganizationType'];
        this.hdoff=data[0]['HeadOffice'];
        this.country=data[0]['Country'];
        this.pin=data[0]['Pincode'];
        this.email=data[0]['EmailId'];
        this.no=data[0]['ContactNumber'];
        this.desg=data[0]['Designation'];
        this.orgname=data[0]['OrganizationName'];
        
      });
    });
    this.ss.getRegistrationDetails().subscribe((data)=>{
    });
    this.signInForm = this.fb.group({
      
      password  : ['', Validators.required],
      
  });
    this.profileform = this.fb.group({
      Id:[this.AuthService.user.id],
      OrganizationName: [''],
      OrganizationType: [''],
      HeadOffice:[''],
      Country: [''],
      Pincode: [],	
      ContactName: [''],
      EmailId: [''],	
      ContactNumber: [],
      Designation: [''],	
    });

    this.ds.getuserbyId(this.AuthService.user.id).subscribe((data) => {
      console.log(data);
      this.nameofuser=data[0]['FirstName'];
     
    });
  }
  Save(user:any){
    const dialogRef = this.MatDialog.open( RespasComponent,{
      autoFocus: false,
      data : { user }
  });
dialogRef.afterClosed()
  .subscribe((result) => {
      if(result) {
         
      }
  });
 

}
back(){
  this.router.navigate([`/dashboard`]);
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
    this.AuthService.signIn(credentials).pipe(
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
        
    ).subscribe();
}
doeverything(){
 this.signIn()
}
}