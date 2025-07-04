import { Component, OnInit,Inject,ChangeDetectorRef } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { ImportdisService } from '../importdis.service';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-ghemissions',
  templateUrl: './ghemissions.component.html',
  styleUrls: ['./ghemissions.component.scss']
})
export class GhemissionsComponent implements OnInit {
  pricedropProd:any
  fueltype:any;
  distance:any;
  distance1:any;
  valuestore:any;
  valuestore1:number=0;
  initialDraftReport:any;
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
  arlist:any;
  ghForm:FormGroup
  unitselectedvalue:any;
  unit:any;
  unitchan11:any;
  newAttribute:any;
  newAttribute2:any;
  newAttribute3:any;
  lookupdtl:any;
  lookupdtl1:any;
  lookupdtl2:any;
  FuelType: string;
  NoofUnits: any;
  fugiwara:any;
  Unitselection: any;
  unitchan1:any;
  unitchan2:any;
  unitchan3:any;
  factor:any;
  isdisabled:boolean=false;
  output:number;
  myNumber:string
  scope1ghemi:boolean=false;
  scope1vehic:boolean=false;
  scope1fugu:boolean=false;
  isInputDisabled: boolean = false;
  constructor(public dialog: MatDialog,private fb:FormBuilder,private is:ImportdisService,private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private _data: { data },private router:Router,public matDialogRef:MatDialogRef<GhemissionsComponent>) { 
      this.lookupdtl=[];
      this.lookupdtl1=[];
      this.lookupdtl2=[];
  }

  ngOnInit() {
   
 
    this.ghForm = this.fb.group({
      Id:[],
      FuelType: [],
      FuelType1: [],
      FuelType11: [],
      NoofUnits: [],
      yolo1: [],
      yolo2: [],
      yolo3: [],
      yolo11: [],
      yolo22: [],
      yolo33: [],
      Unitselection: [],
      factor:[],
      NoofUnits1: [],
      Unitselection1: [],
      factor1:[],
      IsActive: [1],
      CreatedDate: [new Date()],
      CreatedByUserId:[1] ,
      UpdatedDate: [new Date()],
      UpdatedByUserId: [1]
     })
     this.is.GetScope1Fugutives().subscribe((data)=>{
      console.log(data);
      this.fugiwara=data
    })
     this.is.getARListDetails().subscribe((data)=>{
      this.arlist=data;
     })
     this.is.getFuelTypeBaseDetails().subscribe((data)=>{
      this.fueltype=data;
      console.log(this.fueltype);
     })

  }
  onClose(): void
  {
    
      this.matDialogRef.close(false);
  }
  onCancel(): void
{
    // Close the dialog
    this.matDialogRef.close(false);
}
DataTypeChange(event){
  console.log(event);
  
 
  if(event == 'scope1ghemi'){
    this.scope1ghemi=true;
    this.scope1vehic=false;
    this.scope1fugu=false;
    // this.addFieldValue();
    if(this.lookupdtl.length > 1){
      this.deleteQ102a(this.lookupdtl.length-1)
    }
  }
  if(event == 'scope1vehic'){
    this.scope1ghemi=false;
    this.scope1vehic=true;
    this.scope1fugu=false;
    // this.addFieldValue1();
    if(this.lookupdtl1.length > 1){
      this.deleteQ102a3(this.lookupdtl1.length-1)
    }
  }
  if(event == 'scope1fugu'){
    this.scope1ghemi=false;
    this.scope1vehic=false;
    this.scope1fugu=true;
    // this.addFieldValue2();
    if(this.lookupdtl2.length > 1){
      this.deleteQ102a4(this.lookupdtl2.length-1)
    }
  }
}
addFieldValue1(){
  let dataArr = this.foods3 .filter(x => x.value == this.ghForm.get('FuelType1').value)
  let dataArr2 = this.foods2 .filter(f => f.value == this.ghForm.get('Unitselection1').value)
  let dataArr3 = this.foods1 .filter(j => j.value == this.ghForm.get('NoofUnits1').value)
console.log(dataArr,dataArr2,dataArr3);
var finalvalue=parseFloat(this.ghForm.get('yolo3').value)
this.sumtotal = this.sumtotal + finalvalue;
this.newAttribute2 = {'FuelType1':this.ghForm.get('FuelType1').value,
                   'noofunits1': this.ghForm.get('Unitselection1').value,
                   'unitselection1':this.ghForm.get('NoofUnits1').value,
                   'gwpselection1':this.ghForm.get('yolo1').value,
                   'metricform1':this.ghForm.get('yolo2').value,
                   'metric1':this.ghForm.get('yolo3').value,};
this.lookupdtl1.push(this.newAttribute2);
console.log(typeof(this.lookupdtl1))
//this.ghForm.reset();
this.ghForm.get('FuelType1').reset();
this.ghForm.get('Unitselection1').reset();
this.ghForm.get('NoofUnits1').reset();
this.ghForm.get('yolo1').reset();
this.ghForm.get('yolo2').reset();
this.ghForm.get('yolo3').reset();
this.isdisabled=true;
// this.isInputDisabled = true;
}
addFieldValue(){
      let dataArr = this.fueltype .filter(x => x.Id == this.ghForm.get('FuelType').value)
      let dataArr2 = this.arlist .filter(f => f.Id == this.ghForm.get('factor').value)
console.log(dataArr2);

 var finalvalue=Math.round(this.globalunitValue*this.arfinalvalue)
//var finalvalue=(this.globalunitValue*this.arfinalvalue)
console.log((document.getElementById('fullesc') as HTMLInputElement).value);
 this.sumtotal = this.sumtotal + finalvalue;
  this.newAttribute = {'FuelType':dataArr[0]['Name'],
                       'noofunits': (document.getElementById('fullesc') as HTMLInputElement).value,
                       'unitselection':this.ghForm.get('Unitselection').value,
                       'gwpselection':dataArr2[0]['TypeName'],
                       'metricform':finalvalue};
  this.lookupdtl.push(this.newAttribute);
  console.log(typeof(this.lookupdtl))
//this.ghForm.reset();
this.ghForm.get('FuelType').reset();
this.ghForm.get('NoofUnits').reset();
this.ghForm.get('Unitselection').reset();
this.isdisabled=true;
// this.isInputDisabled = true;
}
addFieldValue2(){
console.log(this.valuestore1);
if (this.valuestore1!=0){
  this.sumtotal+=this.valuestore1;
}else{
  this.sumtotal=this.valuestore1;
}
this.newAttribute3 = {'FuelType2':this.ghForm.get('FuelType11').value,
                   'gwpselection2': this.ghForm.get('yolo11').value,
                   'metricform2':this.ghForm.get('yolo22').value,
                   'metric2':this.ghForm.get('yolo33').value,
                   };
this.lookupdtl2.push(this.newAttribute3);
console.log(typeof(this.lookupdtl2))
//this.ghForm.reset();
this.ghForm.get('FuelType11').reset();
this.ghForm.get('yolo11').reset();
this.ghForm.get('yolo22').reset();
this.ghForm.get('yolo33').reset();
this.isdisabled=true;
// this.isInputDisabled = true;
}
sumtotal:number = 0;
arfinalvalue:any;
gwpchange(value){
  console.log(value);
this.is.GetCalculateARValues(this.fueltypeId,value).subscribe((data)=>{
  console.log(data);
  this.arfinalvalue=data[0]['TotalValue']
})
}
  onSave(){
this.is.metricsCO2e=this.sumtotal
this.matDialogRef.close(false);
  }
  fueltypeId:any;
  ProductChange(value){
    console.log(value);
this.unitselectedvalue=value
this.fueltypeId=value;
this.is.GetFuelConvertionTypeById(this.unitselectedvalue).subscribe((data)=>{
  this.unit=data;
  console.log(this.unit);
  
 })
  }
  globalunitValue = 0;
  unitchange(value){
    this.isInputDisabled = false;
    console.log(value);
   var result= this.unit.filter(u=> u.ConvertFrom==value)
   console.log(result);
   var noofunits=this.ghForm.get('NoofUnits').value
   var noofunits1=noofunits.replace(/\,/g,''); // 1125, but a string, so convert it to number
   noofunits1=parseFloat(noofunits1);
   console.log(noofunits1);
   console.log(result[0].MultiplyBy);
   this.globalunitValue = result[0].MultiplyBy * noofunits1;
   console.log(this.globalunitValue)
   if(this.ghForm.get("factor").value != ""){
    this.is.GetCalculateARValues(this.fueltypeId,this.ghForm.get("factor").value).subscribe((data)=>{
      console.log(data);
      this.arfinalvalue=data[0]['TotalValue']
    })
   }
  }
  Distance1(event:any){
    // console.log(this.ghForm.get('yolo2').value);
    this.distance1 = this.ghForm.get('yolo22').value;
    var noofunits1=this.distance1.replace(/\,/g,''); 
    console.log(noofunits1);
    var tempvar=this.ghForm.get('yolo11').value;
    console.log(tempvar);
    this.valuestore1=(noofunits1*tempvar)/1000;
    console.log(this.valuestore1);
    this.ghForm.patchValue({
      yolo33: this.valuestore1.toFixed(0),
        FuelType11: this.unitchan11.Emission
     
    })
  }
  Distance(event:any){
    // console.log(this.ghForm.get('yolo2').value);
    this.distance = this.ghForm.get('yolo2').value;
    var noofunits1=this.distance.replace(/\,/g,''); 
    console.log(noofunits1);
    var tempvar=this.initialDraftReport[0]['EmissionFactor'];
    console.log(tempvar);
    this.valuestore=(noofunits1*tempvar)/1000;
    console.log(this.valuestore);
    this.ghForm.patchValue({
      yolo3: this.valuestore.toFixed(0),
    })
  }
  unitchange12(value){
    console.log(value);
  }
  unitchange11(value){
    console.log(value);
    this.unitchan11=value;
    this.ghForm.patchValue({
      yolo11: this.unitchan11.factor,
    })
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
      this.ghForm.patchValue({
        yolo1: this.initialDraftReport[0]['EmissionFactor'],
      });}
    });
  }        
  changeSubject(i)
  {
     console.log((<HTMLInputElement>document.getElementById("Subject" + i.toString())).value)
     this.lookupdtl[i]['Subject'] = (<HTMLInputElement>document.getElementById("Subject" + i.toString())).value
  }
  OnChangeType(i,value)
  {
    this.lookupdtl[i]['Type'] = value.value;
  }
  deleteQ102a(i){
    this.lookupdtl.splice(i,1);
    this.ghForm.reset();
    this.isdisabled=false;
  }
  deleteQ102a3(i){
    this.lookupdtl1.splice(i,1);
    this.ghForm.reset();
    this.isdisabled=false;
  }
  deleteQ102a4(i){
    this.lookupdtl2.splice(i,1);
    this.ghForm.reset();
    this.isdisabled=false;
  }
}
