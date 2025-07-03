import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { StationaryService } from '../../stationary.service';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-scope1vehicledetails',
  templateUrl: './scope1vehicledetails.component.html',
  styleUrls: ['./scope1vehicledetails.component.scss']
})
export class Scope1vehicledetailsComponent implements OnInit {
  scope1vehicle:FormGroup;
  unitchan1:any;
  unitchan2:any;
  unitchan3:any;
  initialDraftReport:any;
  distance:any;
  valuestore:any;

  foods3: Food[] = [
    {value: 'Car', viewValue: 'Car'},
    {value: 'Motorbike', viewValue: 'Motorbike'},
    {value: 'HGV', viewValue: 'HGV'},
    {value: 'HGVs refrigerated', viewValue: 'HGVs refrigerated'},
    {value: 'Vans', viewValue: 'Vans'}
  ];
  foods2: Food[] = [
    {value: 'Small', viewValue: 'Small'},
    {value: 'Medium', viewValue: 'Medium'},
    {value: 'Large', viewValue: 'Large'},
    {value: 'Average', viewValue: 'Average'},
    {value: 'Rigid (>3.5 - 7.5 tonnes)', viewValue: 'Rigid (>3.5 - 7.5 tonnes)'},
    {value: 'Rigid (>7.5 tonnes-17 tonnes)', viewValue: 'Rigid (>7.5 tonnes-17 tonnes)'},
    {value: 'Rigid (>17 tonnes)', viewValue: 'Rigid (>17 tonnes)'},
    {value: 'All rigids', viewValue: 'All rigids'},
    {value: 'Articulated (>3.5 - 33t)', viewValue: 'Articulated (>3.5 - 33t)'},
    {value: 'Articulated (>33t)', viewValue: 'Articulated (>33t)'},
    {value: 'All artics', viewValue: 'All artics'},
    {value: 'All HGVs', viewValue: 'All HGVs'},
    {value: 'Class I (up to 1.305t)', viewValue: 'Class I (up to 1.305t)'},
    {value: 'Class II (1.305 to 1.74t)', viewValue: 'Class II (1.305 to 1.74t)'},
    {value: 'Class III (1.74 to 3.5t)', viewValue: 'Class III (1.74 to 3.5t)'},
    {value: 'Average (up to 3.5t)', viewValue: 'Average (up to 3.5t)'}
  ];
  foods1: Food[] = [
    {value: 'Diesel', viewValue: 'Diesel'},
    {value: 'Petrol', viewValue: 'Petrol'},
    {value: 'Hybrid', viewValue: 'Hybrid'},
    {value: 'CNG', viewValue: 'CNG'},
    {value: 'LPG', viewValue: 'LPG'},
    {value: 'Unknown', viewValue: 'Unknown'},
    {value: 'Plug-in Hybrid Electric (Petrol)', viewValue: 'Plug-in Hybrid Electric (Petrol)'},
  ];
  foods4: Food[] = [
    {value: 'Diesel', viewValue: 'Diesel'},
    {value: 'Petrol', viewValue: 'Petrol'},
   
    {value: 'CNG', viewValue: 'CNG'},
    {value: 'LPG', viewValue: 'LPG'},
    {value: 'Unknown', viewValue: 'Unknown'},
    
  ];
  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private is: ImportdisService,
    private stserve: StationaryService,
    public matDialogRef: MatDialogRef<Scope1vehicledetailsComponent>
  ) { }

  ngOnInit() {


    this.scope1vehicle = this._formBuilder.group({
      Id:[],
      Vehicle: [],
      Type: [],
      Fuel: [],
      EmissionFactor: [],
      Distance: [],
      tCO2e: [],
      IsActive: [],
      CreatedDate: [new Date()],
      CreatedByUserId: [],
      UpdatedDate: [new Date()],
      UpdatedByUserId: [],
      OrgId: [],
     });


  }


  store:any;
  store1:any;
unitchange1(value){
console.log(value);
this.unitchan1=value;
console.log(this.foods2);
if (this.unitchan1=='Car'){
this.store=this.foods2.slice(0,4)
this.store1=this.foods1;
}
else if (this.unitchan1=='Motorbike'){
this.store=this.foods2.slice(0,4)
this.store1=this.foods1.slice(1,2)
}
else if (this.unitchan1=='HGV'){
this.store=this.foods2.slice(4,12)
this.store1=this.foods1.slice(0,1)
}
else if (this.unitchan1=='HGVs refrigerated'){
this.store=this.foods2.slice(4,12)
this.store1=this.foods1.slice(0,1)
}
else if (this.unitchan1=='Vans'){
this.store=this.foods2.slice(12,16)
this.store1=this.foods4;
}
}

unitchange2(value){
  console.log(value);
  this.unitchan2=value;
    }
    unitchange3(value){
      console.log(value);
      this.unitchan3=value;
    this.trigerforemi();
        }
  trigerforemi(){
    console.log(this.unitchan1,this.unitchan2,this.unitchan3);
    this.is.GetScope1VehicleEmissionFactor(this.unitchan1,this.unitchan2,this.unitchan3).subscribe((data) => {
      console.log(data);
      this.initialDraftReport=data;
      if(this.initialDraftReport[0]['EmissionFactor']!=null){
      this.scope1vehicle.patchValue({
        EmissionFactor: this.initialDraftReport[0]['EmissionFactor'],
      });}
    });
  }   

  Distance(event:any){
    // console.log(this.ghForm.get('yolo2').value);
    this.distance = this.scope1vehicle.get('Distance').value;
    var noofunits1=this.distance.replace(/\,/g,''); 
    console.log(noofunits1);
    var tempvar=this.initialDraftReport[0]['EmissionFactor'];
    console.log(tempvar);
    this.valuestore=(noofunits1*tempvar)/1000;
    console.log(this.valuestore);
    this.scope1vehicle.patchValue({
      tCO2e: this.valuestore.toFixed(0),
    })
  }

  onClose(): void {
    // Close the dialog
    this.matDialogRef.close(false);
}

/**
 * Save the message as a draft
 */
onCancel(): void {
    // Close the dialog
    this.matDialogRef.close(false);
}

onSave(): void {

  if (this.scope1vehicle.get('Id').value === null) {

           const selectedboxes: any = {
               Id: null,
               Vehicle:  this.scope1vehicle.get('Vehicle').value,
               Type: this.scope1vehicle.get('Type').value,
               Fuel: this.scope1vehicle.get('Fuel').value,
               EmissionFactor:  this.scope1vehicle.get('EmissionFactor').value,
               Distance: this.scope1vehicle.get('Distance').value,
               tCO2e: this.scope1vehicle.get('tCO2e').value,
               IsActive: true,
               CreatedDate: new Date(),
               CreatedByUserId: this.authService.user.id,
               UpdatedDate: new Date(),
               UpdatedByUserId: this.authService.user.id,
               OrgId: this.authService.user.orgId,
           };
         
           this.stserve
               .createScope1companyVehicledetails(selectedboxes)
               .subscribe((result) => {
                console.log(selectedboxes);
                   this.matDialogRef.close(true);
               });
       
   }
}

}
