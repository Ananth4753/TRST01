import { Component, OnInit,ViewChild, ViewEncapsulation,HostListener, Inject, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators,AbstractControl,ValidationErrors } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlockService } from '../flock.service';
import { AuthService } from 'app/core/auth/auth.service';
import { flockdetails,flockitems } from '../flock.type';
import { WarehouseService } from '../../WareHouse/warehouse.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-flockdetails',
  templateUrl: './flockdetails.component.html',
  styleUrls: ['./flockdetails.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class FlockdetailsComponent implements OnInit {
  FlockForm : FormGroup;
  searchInputControl: FormControl = new FormControl();
  barcode: number;
  Flockdetail: any;
  flockdetails:flockdetails[];
  flockitems:any;
  Wearehousedetails: any[];
  constructor(
    private route:Router, 
    private _formBuilder: FormBuilder,
    private flockservice:FlockService,
    private auth:AuthService,
private _WarehouseService:WarehouseService,

    // public navCtrl: NavController,
    @Inject(MAT_DIALOG_DATA)
    

    private _data: {
      flockId: any;
},  
  
    private matDialogRef: MatDialogRef<FlockdetailsComponent>,
  ) { }

  ngOnInit(): void {

    // this._WarehouseService.getwarehousedetails().subscribe(data=>{
    //   this.Wearehousedetails=data;
    // })


    this.FlockForm = this._formBuilder.group({
      Id :[],
      Name : ['', [Validators.required]],
      Area  : ['', Validators.required],
      Location : ['', Validators.required],
      IsAcive: [true],
     CreatedDate: [new Date()],
     CreatedByUserId:[this.auth.user.id] ,
     UpdatedDate: [new Date()],
     UpdateByUserId: [this.auth.user.id]

      
  });
  if(this._data.flockId) {
    this.flockservice.getflockDetailsById(this._data.flockId).subscribe((flockitem) => {
      this.flockitems = flockitem[0];
      const fitem =flockitem;
      console.log(this.flockitems);
    console.log(this.flockitems.Name);
    console.log(fitem['Name']);
    
    
      this.FlockForm.get('Id').setValue(this.flockitems['Id']);
      this.FlockForm.get('Name').setValue(this.flockitems.Name);
      this.FlockForm.get('Area').setValue(this.flockitems['Area']);
      this.FlockForm.get('Location').setValue(this.flockitems['Location']);
      this.FlockForm.get('CreatedByUserId').setValue(this.flockitems['CreatedByUserId']);
      this.FlockForm.get('CreatedDate').setValue(this.flockitems['CreatedDate']);
      this.FlockForm.get('UpdateByUserId').setValue(this.flockitems['UpdateByUserId']);
      this.FlockForm.get('UpdatedDate').setValue(this.flockitems['UpdatedDate']);
  });
  }
}

static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
  if((control.value as string).indexOf(' ') >= 0){
      return {cannotContainSpace: true}
  }

  return null;
}


keyDown(e) { 
  var e = window.event || e;
  var key = e.keyCode;
  //space pressed
   if (key == 32) { //space
    e.preventDefault();
   }
  }
  
onSave(){
  // console.log(this.FlockForm.value);
  {
    const FlockData: flockdetails = this.FlockForm.value;
    if (this.FlockForm.get('Id').value === null) {
        this.FlockForm.get('CreatedDate').setValue(new Date());
        this.FlockForm.get('CreatedByUserId').setValue(this.auth.user.id);
      
    
      }
      else{
      
      this.FlockForm.get('UpdatedDate').setValue(new Date());
      this.FlockForm.get('UpdateByUserId').setValue(this.auth.user.id);
console.log(FlockData); 



      }   

  this.flockservice.createflock(FlockData).subscribe((result) => {
      this.matDialogRef.close(true); 
      var Data = result['message']
      
      Swal.fire({
        title:Data ,
           confirmButtonColor: '#FCB713',
           icon: "success",
       
       });
       this.matDialogRef.close(true);

   
  });
}
  
//   const code =
// `HRVHUB30
// HRK
// 000000000012355
// PETAR KORETIĆ
// PREVOJ DD
// 10000 Zagreb
// FIRMA J.D.O.O
// PREVOJ DD
// 10000 ZAGREB
// HR5041240000000000
// HR01
// 7336-68949637625-00001
// COST
// Uplata za 1. mjesec`
//   var canvas =this.barcodeservice .getBarcodeDetailsById(this.barcode)
//    PDF417.draw(code, canvas)
  
  
}

  get f(){
    return this.FlockForm.controls;
  }
  
  onCancel(){
    this.matDialogRef.close(false);
  }
  onClose(){
    this.matDialogRef.close(false);
  }

}
