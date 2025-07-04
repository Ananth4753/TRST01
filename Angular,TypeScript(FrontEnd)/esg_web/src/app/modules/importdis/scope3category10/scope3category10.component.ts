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
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-scope3category10',
  templateUrl: './scope3category10.component.html',
  styleUrls: ['./scope3category10.component.scss']
})
export class Scope3category10Component implements OnInit {
  lookupdtl:any;
  lookupdtl1:any;
  material:any;
  newAttribute:any
  newAttribute1:any
  newAttribute2:any
  sumtotal:any;
  sumtotal1:any;
  sumtotal2:any;
  materialnames:any;
  userentered:any;
  filteredList:any;
  finalesum:any;
  paramtext:any;
  selectedName:any
  scope3form:FormGroup
  firstdrop:boolean=false;
  secdrop:boolean=false;
  thirddrop:boolean=false;
  categ8:boolean=false;
  categ13:boolean=false;
  foods: Food[] = [
    {value: 'Petrol (L)', viewValue: 'Petrol (L)'},
    {value: 'Diesel (L)', viewValue: 'Diesel (L)'},
    {value: 'CNG (m3)', viewValue: 'CNG (m3)'},
    {value: 'LNG (m3)', viewValue: 'LNG (m3)'},
    {value: 'LPG (kg) or (L)', viewValue: 'LPG (kg) or (L)'},
    {value: 'Biodiesel (L)', viewValue: 'Biodiesel (L)'},
    {value: 'Ethanol (L)', viewValue: 'Ethanol (L)'},
    {value: 'Jet Fuel (gal)', viewValue: 'Jet Fuel (gal)'},
    {value: 'Propane (gal) or  (lb)', viewValue: 'Propane (gal) or  (lb)'},
    {value: 'Hydrogen (kg) or (m³)', viewValue: 'Hydrogen (kg) or (m³)'},
    {value: 'Coal (MT) or (ST)', viewValue: 'Coal (MT) or (ST)'},
    {value: 'Waste (kg)', viewValue: 'Waste (kg)'},
    {value: 'Electricity (kWh)', viewValue: 'Electricity (kWh)'},
  ];
  foods1: Food[] = [
    {value: 'kg', viewValue: 'kg'},
    {value: 'tonnes', viewValue: 'tonnes'},
    {value: 'tons', viewValue: 'tons'},
    {value: 'Pounds', viewValue: 'Pounds'},
    {value: 'm3', viewValue: 'm3'},
    {value: 'liters', viewValue: 'liters'},
    {value: 'Gallons', viewValue: 'Gallons'},
    {value: 'Electricity (kWh)', viewValue: 'Electricity (kWh)'},
  ];
  constructor(public dialog: MatDialog,private fb:FormBuilder,private is:ImportdisService,private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private _data: { data },private router:Router,public matDialogRef:MatDialogRef<Scope3category10Component>) { 
    this.lookupdtl=[];
    this.lookupdtl1=[];
  }
  ngOnInit() {
 
    this.scope3form = this.fb.group({
      Id:[],
      DataType: [],
      suppliername:[],
      purchasedgoods:[],
      emf:[],
      userbased:[],
      userquantity:[],
      emi:[],
      IsActive: [1],
      CreatedDate: [new Date()],
      CreatedByUserId:[1] ,
      UpdatedDate: [new Date()],
      UpdatedByUserId: [1]
     })
    this.addFieldValue();
    if(this.lookupdtl.length > 1){
      this.deleteQ102a(this.lookupdtl.length-1)
    }
    this.addFieldValue1();
    if(this.lookupdtl1.length > 1){
      this.deleteQ102a1(this.lookupdtl1.length-1)
    }
  }
  calculateTotalEmission() {
    let totalEmission = 0;
    for (let i = 0; i < this.lookupdtl.length; i++) {
      totalEmission += parseFloat(this.lookupdtl[i].Emi);
    }
    this.sumtotal = totalEmission.toFixed(2);
    this.finalesum = this.sumtotal;
  }
  calculateTotalEmission1() {
    let totalEmission = 0;
    for (let i = 0; i < this.lookupdtl1.length; i++) {
      totalEmission += parseFloat(this.lookupdtl1[i].fifth);
    }
    this.sumtotal1 = totalEmission.toFixed(2);
    this.finalesum = this.sumtotal1;
  }
  qu(index: number, event: any){
    this.lookupdtl[index].third=event.target.value
    const quant1 = this.lookupdtl[index].third;
    const quant2 = this.lookupdtl[index].second;
    var saver
    saver=quant1.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    var saver1
    saver1=quant2.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver1=parseFloat(saver1);
    this.lookupdtl[index].Emi = ((saver * saver1) / 1000).toFixed(2);
    this.calculateTotalEmission();
  }

  a2ndqu(index: number, event: any){
    const quant4 = event.target.value;
    const quant1 = this.lookupdtl1[index].second;
    var saver
    saver=quant1.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    var saver3
    saver3=quant4.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver3=parseFloat(saver3);
    this.lookupdtl1[index].fifth = ((saver*saver3)/1000).toFixed(2) ;
    this.calculateTotalEmission1();
  }
addFieldValue(){
  this.newAttribute = {
    'random1': '',
    'random2': '',
    'first': '',
    'second': '',
    'third': '','Emi':'',
    'Total': this.lookupdtl.reduce((acc, val) => acc + val.Emi, 0),
  };
  this.lookupdtl.push(this.newAttribute);
}
addFieldValue1(){
  this.newAttribute1 = {
    'first': '',
    'second': '',
    'third': '',
    'fourth': '',
    'fifth': '',
    'Total': this.lookupdtl1.reduce((acc, val) => acc + val.Emi, 0),
  };
  this.lookupdtl1.push(this.newAttribute1);
}
  deleteQ102a(i){
    this.lookupdtl.splice(i,1);
  }
  deleteQ102a1(i){
    this.lookupdtl1.splice(i,1);
  }
  onSave(){
    console.log(this.finalesum);
this.is.scope3category10=Math.round(this.finalesum)
this.matDialogRef.close(false);
  }
  onClose(): void
  {
      this.matDialogRef.close(false);
  }
  onCancel(): void
{
    this.matDialogRef.close(false);
}
DataTypeChange(event){
  this.firstdrop = (event === 'lessor');
  if(event == 'lessor'){
    this.addFieldValue();
    if(this.lookupdtl.length > 1){
      this.deleteQ102a(this.lookupdtl.length-1)
    }
  }
  this.secdrop = (event === 'floorspace');
  if(event == 'floorspace'){
    this.addFieldValue1();
    if(this.lookupdtl1.length > 1){
      this.deleteQ102a1(this.lookupdtl1.length-1)
    }
  }
}
}
