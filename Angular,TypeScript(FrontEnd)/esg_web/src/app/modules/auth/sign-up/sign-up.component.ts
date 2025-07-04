import { Component, OnInit, ViewChild, ViewEncapsulation,Inject } from '@angular/core';

import { Container, Main } from 'tsparticles';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup,Validators, FormBuilder }  from '@angular/forms';
import {Router} from '@angular/router';
import { SignUpService } from './sign-up.service';
import cryptoRandomString from 'crypto-random-string';
import { MD5 } from 'crypto-js';
import { AppComponent } from 'app/app.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
import Swal from 'sweetalert2';
import { result } from 'lodash';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector     : 'auth-sign-up',
    templateUrl  : './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignUpComponent implements OnInit
{


  options = [];
  filteredOptions
data:Observable<any>
  regform:FormGroup;
  Mailvalid:boolean=false;
  Orgvalid:boolean=false;
  regDetails:any;
  regDetails1:any;
  searchTerm = '';
  Country ;
  countryFilteredOptions: Observable<string[]> | undefined;
  term = '';
  myData:any;
  countries: any[] = [
  
  ];
  constructor(private fb:FormBuilder,private router:Router,private rs:SignUpService,public dialog: MatDialog,private http: HttpClient) { 
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
  ngOnInit() {
  
    this.http.get('https://trial.mobiscroll.com/content/countries.json').subscribe((resp: any) => {
            const countries = [];
            for (let i = 0; i < resp.length; ++i) {
                const country = resp[i];
                countries.push({ text: country.text, value: country.value });
            }
            this.myData = countries;
            console.log(this.myData);
            
        });
    this.regform = this.fb.group({
      OrganizationName: ['', Validators.required],
      OrganizationType: ['', Validators.required],
      HeadOffice: ['', Validators.required],
      Country: ['', Validators.required],
      Pincode: [, Validators.required],
      ContactName: ['', Validators.required],
      EmailId: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      ContactNumber: [,Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      Designation: ['', Validators.required],
      Password:[''],
      EncryptedPassword:[''],
      
    });

    // this.countryFilteredOptions = this.regform['Country'].valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );
   

  }

  onlynumbers(event):boolean{
const charCode =(event.which)?event.which:event.keyCode;
if(charCode>31 && (charCode<48 || charCode >57))
{
  console.log(charCode);
  return false;
  
}
return true;
  }

 
  EmailValidate(){
 
  
   let EnterEmail = (<HTMLInputElement>document.getElementById("Email")).value;

   
this.rs.getRegistrationDetailsEmailId(EnterEmail).subscribe(res=>{
  
  this.regDetails = res;

  
   if(this.regDetails[0].cnt === 0 ){
   this.Mailvalid = false;
    
   }else{
    this.Mailvalid = true;
    this.regform.get('EmailId')?.reset();
   

   }
 
  
})
 
}
OrgValidate(){

  let EnterEmail = (<HTMLInputElement>document.getElementById("OrganizationName")).value;
console.log(EnterEmail);

     
this.rs.getRegistrationDetailsRegName(EnterEmail).subscribe(res=>{
  
  this.regDetails1 = res;

  
   if(this.regDetails1[0].cnt === 0 ){
   this.Orgvalid = false;
    
   }else{
    this.Orgvalid = true;
    this.regform.get('OrganizationName')?.reset();
   

   }
 
  
})
}
openDialog() {

  let Password=cryptoRandomString({length: 14});
  this.regform.get('Password')?.setValue(Password)
      var encryptedpassword = MD5(
       Password
      ).toString();
  this.regform.get('EncryptedPassword')?.setValue(encryptedpassword)
  
      const UserDetails: any = this.regform.value;
      console.log(UserDetails)
      this.rs.createuser(UserDetails).subscribe((Data)=>{
        console.log(Data);
        Swal.fire({
          title:'Congratulations !',
          text:'Please Check Your Mail!',
          icon:'success',
          // showCancelButton:true,
          confirmButtonText:'Go To Home',
          //cancelButtonText:'No,keep it'
        }).then((result)=>{
          if(result.value){
            this.router.navigate([`/sign-in`]);
            window.location.reload()
        }
        else if(result.dismiss === Swal.DismissReason.cancel){}
      })
       this.router.navigate([`/sign-in`]);
        //alert('Thanks for Registration !! Your credentials have been sent to your Mail-Id');
      
      })
     
}



  }
  