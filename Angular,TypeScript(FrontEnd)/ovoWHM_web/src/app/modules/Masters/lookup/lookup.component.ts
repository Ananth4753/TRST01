import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { Router } from '@angular/router';
import { LookuphdrDetail } from './lookup.type';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';

import { TABLE_PAGINATION_SIZE } from 'environments/environment';
import { LookupService } from './lookup.service';
import Swal from 'sweetalert2';


declare var $: any;

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss'],
  animations: fuseAnimations
})
export class LookupComponent implements OnInit {
  addedit: boolean;
  LookupMasterForm: FormGroup;
  LookupMsterList: any[];
  lookupdtl: any
  newAttribute: any = {};
  hdrid: any;
  access: object = {};
  editit: boolean = false;
  editlookuphdr: any[];
  pageSize: number = TABLE_PAGINATION_SIZE;
  searchInputControl: FormControl = new FormControl();
  isLoading: boolean = false;
  matDialogRef: any;
  
  constructor(private _route: Router,private authService:AuthService,private lookupService:LookupService,private _formBuilder:FormBuilder,private chRef:ChangeDetectorRef) { 
       
    this.addedit = false;
    this.lookupdtl = [];
  }

  ngOnInit() {
    this.LookupMasterForm = this._formBuilder.group({
      Id: [],
      Code: ['', Validators.required],
      Name: ['', Validators.required],
      IsActive: [1],
      CreatedDate: [new Date()],
      CreatedByUserId: [this.authService.user.id],
      UpdatedDate: [new Date()],
      UpdatedByUserId: [this.authService.user.id]
  });

  this.getLookupMasterDetail();
  }

  addFieldValue(){
    this.editit = true;
    this.lookupdtl.push(this.newAttribute)
    this.newAttribute = {};
  }

  getLookupMasterDetail(){
    this.lookupService.getLookupHdr().subscribe(res=>{
    this.LookupMsterList = res;
  
    // this.chRef.detectChanges();
  
    
     })
  }
  getLookupMstbyId(Id){ 

    this.addedit = true;
    this.lookupService.getLookupHdrDetailsById(Id)
      .subscribe(
        async (res) => {
          this.editlookuphdr = res[0];
          console.log(res);
          
          this.LookupMasterForm.setValue(res[0]);
        })
    this.LookupDetails(Id);
  }

LookupDetails(Id){
  this.editit = true;
  // this.tptid=Id; 
  this.lookupService.getLookupDetailsByHdrId(Id).subscribe(
    (data) => {
      this.lookupdtl = data;
    console.log(this.lookupdtl)
      // this.chRef.detectChanges();
    })
}


  onCreate(){

    const lookuphedaerdata: LookuphdrDetail = this.LookupMasterForm.value;
  

    if (lookuphedaerdata.Id === null) {
      lookuphedaerdata.CreatedDate = new Date();
      lookuphedaerdata.CreatedByUserId = this.authService.user.id;
     

  }
  else{
  lookuphedaerdata.UpdatedDate = new Date();
  lookuphedaerdata.UpdatedByUserId = this.authService.user.id;
 

  }

  this.lookupService.createlookupHdr(lookuphedaerdata).subscribe((result) => {
    this.hdrid = result;
    var Data = result['message']


    

    this.submitlookupdetails()
  });

  }
  submitlookupdetails(){
    console.log(this.hdrid)
    
    for (var i = 0; i < this.lookupdtl.length; i++) {
      if (this.lookupdtl[i].Id == undefined || this.lookupdtl[i].Id == null || this.lookupdtl[i].Id == '') {
     
        var intialPostData = {
          Id: null,
          LookupHdrId: this.hdrid.Id,
          Code: (<HTMLInputElement>document.getElementById("Code" + i.toString())).value,
          Name: (<HTMLInputElement>document.getElementById("Name" + i.toString())).value,
         
          IsActive: true,
          CreatedDate: new Date(),
          CreatedByUserId: this.authService.user.id,
          UpdatedDate: new Date(),
          UpdatedByUserId:this.authService.user.id,
        }
      
        
        this.lookupService.createlookupDtl(intialPostData).subscribe((res) => {
           this.refresh();
           var Data = res['message']
      
    Swal.fire({
      title:Data ,
         confirmButtonColor: '#FCB713',
         icon: "success",
     
     });
     this.onCancel();
        });
      }
      else{
        var updatePostData = {
          Id: this.lookupdtl[i].Id,
          LookupHdrId:this.lookupdtl[i].LookupHdrId,
          Code: (<HTMLInputElement>document.getElementById("Code" + i.toString())).value,
          Name: (<HTMLInputElement>document.getElementById("Name" + i.toString())).value,
         
          IsActive: true,
          CreatedDate: new Date(),
          CreatedByUserId: this.authService.user.id,
          UpdatedDate: new Date(),
          UpdatedByUserId: this.authService.user.id,
        }
       
        
      this.lookupService.createlookupDtl(updatePostData).subscribe((res) => {
        this.refresh();
        console.log(res);
        var Data = res['message']
      
        Swal.fire({
          title:Data ,
             confirmButtonColor: '#FCB713',
             icon: "success",
         
         });

         this.onCancel();
      });
    }


    }

  }

  onCancel(){
    this.LookupMasterForm.reset();
    
    this.lookupdtl = [];
    this.editit = false;
  }
 
   refresh() {
  // //   this._route.navigateByUrl('/dashboard', { skipLocationChange: true }).then(() =>
  //   this._route.navigate(["/masters/lookup"]));
  // }

   this._route.navigate(["/masters/lookup"]);
}

}