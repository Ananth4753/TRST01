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

@Component({
  selector: 'app-scope3hotel',
  templateUrl: './scope3hotel.component.html',
  styleUrls: ['./scope3hotel.component.scss']
})
export class Scope3hotelComponent implements OnInit {
  lookupdtl:any;
  lookupdtl1:any;
  lookupdtl2:any;
  country:any;
  newAttribute:any
  newattribute1:any
  newAttribute2:any
  sumtotal:any;
  sumtotal1:any;
  sumtotal2:any;
  filteredList:any;
  finalesum:any;
  selectedName:any
  scope3form:FormGroup
  hotel:boolean=false;
  businesstravel:boolean=false;
  rentalcars:boolean=false;
  rental:any;
  busin:any;
  constructor(public dialog: MatDialog,private fb:FormBuilder,private is:ImportdisService,private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private _data: { data },private router:Router,public matDialogRef:MatDialogRef<Scope3hotelComponent>) { 
    this.lookupdtl=[];
    this.lookupdtl1=[];
    this.lookupdtl2=[];
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
    this.is.getScope3hotel().subscribe((data)=>{
      this.country=data;
      this.filteredList=this.country.slice();
    })
    this.is.getScope3Category6RentalCars().subscribe((data)=>{
      this.rental=data;
    })
    this.is.getScope3Category6BusinessTravel().subscribe((data)=>{
      this.busin=data;
    })
    this.addFieldValue();
    if(this.lookupdtl.length > 1){
      this.deleteQ102a1(this.lookupdtl.length-1)
    }
    this.addFieldValue2();
    if(this.lookupdtl2.length > 1){
      this.deleteQ102a2(this.lookupdtl2.length-1)
    }
    this.addFieldValue1();
    if(this.lookupdtl1.length > 1){
      this.deleteQ102a3(this.lookupdtl1.length-1)
    }
  }
  countrydropdown(value: any, index: number) {
    var empty='';
    this.countrydropdownsearch(empty);
    const selectedGood = this.country.find(g => g.Id === value);
    if (selectedGood != undefined) {
      this.lookupdtl[index].emissionfactor = selectedGood.emissionfactor;
      console.log(this.lookupdtl[index].emissionfactor );
      
    }
    const rooms = this.lookupdtl[index].rooms;
    const nights = this.lookupdtl[index].nights;
    const emi = this.lookupdtl[index].emissionfactor;
    this.lookupdtl[index].emissions = ((rooms * nights*emi)/1000).toFixed(2);
    this.calculateTotalEmission();
  }
  fueldrop(value: any, index: number) {
    const selectedGood = this.rental.find(g => g.Id === value);
    if (selectedGood != undefined) {
      this.lookupdtl2[index].emissionfactor = selectedGood.Standard;
    }
    this.calculateTotalEmission2();
  }
  userentered:any
  uuxff( event: any){
    console.log(event.target.value)
    this.userentered=event.target.value;
  }
  travelty(value: any, index: number) {
    const selectedGood = this.busin.find(g => g.Id === value);
    if (selectedGood != undefined) {
      this.lookupdtl1[index].emissionfactor = selectedGood.Standard;
    }
    this.calculateTotalEmission1();
  }
  qu(index: string, event: any){
    console.log(event.target.value);
    this.lookupdtl2[index].quantity = event.target.value;
    const quantity = this.lookupdtl2[index].quantity;
    var saver
    saver=quantity.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    this.lookupdtl2[index].emissions = (this.lookupdtl2[index].emissionfactor * saver).toFixed(2);
    this.calculateTotalEmission2();
  }
  qu1(index: string, event: any){
    console.log(event.target.value);
    this.lookupdtl1[index].quantity = event.target.value;
    const quantity = this.lookupdtl1[index].quantity;
    var saver
    saver=quantity.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    this.lookupdtl1[index].emissions = (this.lookupdtl1[index].emissionfactor * saver).toFixed(2);
    this.calculateTotalEmission1();
  }
  uu(index: string, event: any){
    console.log(event.target.value);
    const user = event.target.value;
    const quant = this.lookupdtl2[index].quantity;
    this.lookupdtl2[index].userbased = user;
    var saver
    saver=user.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    var saver1
    saver1=quant.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver1=parseFloat(saver1);
    this.lookupdtl2[index].emissions = (saver1 * saver).toFixed(2);
    this.calculateTotalEmission2();
  }
  uuforhotel(index: string, event: any){
    console.log(event.target.value);
    const user = event.target.value;
    const quant = this.lookupdtl[index].quantity;
    this.lookupdtl[index].userbased = user;
    const rooms = this.lookupdtl[index].rooms;
    const nights = this.lookupdtl[index].nights;
    var saver
    saver=user.replace(/\,/g,'');
    saver=parseFloat(saver);
    this.lookupdtl[index].emissions = ((rooms * nights*saver)/1000).toFixed(2);
    this.calculateTotalEmission();
  }
  uu1(index: string, event: any){
    console.log(event.target.value);
    const user = event.target.value;
    const quant = this.lookupdtl1[index].quantity;
    this.lookupdtl1[index].userbased = user;
    var saver
    saver=user.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    var saver1
    saver1=quant.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver1=parseFloat(saver1);
    this.lookupdtl1[index].emissions = (saver1 * saver).toFixed(2);
    this.calculateTotalEmission1();
  }
  calculateTotalEmission() {
    let totalEmission = 0;
    for (let i = 0; i < this.lookupdtl.length; i++) {
      totalEmission += parseFloat(this.lookupdtl[i].emissions);
    }
    this.sumtotal = totalEmission.toFixed(2);
  
    let sum1 = this.sumtotal1 || 0;
    let sum2 = this.sumtotal2 || 0;
    this.finalesum = parseFloat(this.sumtotal) + parseFloat(sum1) + parseFloat(sum2);
  }
  
  calculateTotalEmission1() {
    let totalEmission = 0;
    for (let i = 0; i < this.lookupdtl1.length; i++) {
      totalEmission += parseFloat(this.lookupdtl1[i].emissions);
    }
    this.sumtotal1 = totalEmission.toFixed(2);
    let sum1 = this.sumtotal || 0;
    let sum2 = this.sumtotal2 || 0;
    this.finalesum = parseFloat(this.sumtotal1) + parseFloat(sum1) + parseFloat(sum2);
  }
   calculateTotalEmission2() {
    let totalEmission = 0;
    for (let i = 0; i < this.lookupdtl2.length; i++) {
      totalEmission += parseFloat(this.lookupdtl2[i].emissions);
    }
    this.sumtotal2 = totalEmission.toFixed(2);
    let sum1 = this.sumtotal || 0;
    let sum2 = this.sumtotal1 || 0;
    this.finalesum = parseFloat(this.sumtotal2) + parseFloat(sum1) + parseFloat(sum2);
  }
  
addFieldValue(){
  this.newAttribute = {
    'hottelname': '',
    'rooms': '',
    'nights': '',
    'Startdate':'','Enddate':'',
    'hotelcountry':'',
    'emissionfactor': '',
    'userbased':'',
    'emissions': '',
    'Total': this.lookupdtl.reduce((acc, val) => acc + val.Emi, 0),
  };
  this.lookupdtl.push(this.newAttribute);
}
addFieldValue1(){
  this.newAttribute = {
    'tripid': '',
    'dateoftravel': '',
    'travelty': '',
    'quantity':'','emissionfactor':'',
    'userbased':'',
    'emissions': '',
    'Total': this.lookupdtl1.reduce((acc, val) => acc + val.Emi, 0),
  };
  this.lookupdtl1.push(this.newAttribute);
}
addFieldValue2(){
  this.newAttribute = {
    'tripid': '',
    'dateoftravel': '',
    'fueltype': '',
    'quantity':'','emissionfactor':'',
    'userbased':'',
    'emissions': '',
    'Total': this.lookupdtl2.reduce((acc, val) => acc + val.Emi, 0),
  };
  this.lookupdtl2.push(this.newAttribute);
}
countrydropdownsearch(value: string){
  this.filteredList = this.country.filter(item => item.HotelCountry.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  console.log(value)
}
onOptionSelected(event: any,i) {
  this.selectedName = event.option.value;
  console.log(this.selectedName);
}
  deleteQ102a1(i){
    this.lookupdtl.splice(i,1);
  }
  deleteQ102a2(i){
    this.lookupdtl2.splice(i,1);
  }
  deleteQ102a3(i){
    this.lookupdtl1.splice(i,1);
  }
  onSave(){
    if(this.userentered != undefined )
    {
      this.is.userentered='yes';
    }
    else{
      this.is.userentered='novalue';
    }
    console.log(this.finalesum);
this.is.scope3hotel=Math.round(this.finalesum)
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
Startdate(i){
  const startdateInput = <HTMLInputElement>document.getElementById("Startdate" + i.toString());
  const startdateValue = startdateInput.value;
  this.lookupdtl[i]['Startdate'] = startdateValue;
  const enddateInput = <HTMLInputElement>document.getElementById("Enddate" + i.toString());
  enddateInput.min = startdateValue;
}

Enddate(i){
  const enddateInput = <HTMLInputElement>document.getElementById("Enddate" + i.toString());
  const enddateValue = enddateInput.value;
  const startdateInput = <HTMLInputElement>document.getElementById("Startdate" + i.toString());
  const startdateValue = startdateInput.value;
  if (enddateValue <= startdateValue) {
    enddateInput.value = startdateValue;
    alert('End date cannot be less than start date');
    this.lookupdtl[i]['Enddate'] = startdateValue;
  } else {
    this.lookupdtl[i]['Enddate'] = enddateValue;
  }
}
   
DataTypeChange(event){
  this.hotel = (event === 'hotel');
  if(event == 'hotel'){
    this.addFieldValue();
    if(this.lookupdtl.length > 1){
      this.deleteQ102a1(this.lookupdtl.length-1)
    }
  }
  this.businesstravel = (event === 'businesstravel');
  if(event == 'businesstravel'){
    this.addFieldValue1();
    if(this.lookupdtl1.length > 1){
      this.deleteQ102a3(this.lookupdtl1.length-1)
    }
  }
  this.rentalcars = (event === 'rentalcars');
  if(event == 'rentalcars'){
    this.addFieldValue2();
    if(this.lookupdtl2.length > 1){
      this.deleteQ102a2(this.lookupdtl2.length-1)
    }
  }
}
}
