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
  selector: 'app-scope3category3',
  templateUrl: './scope3category3.component.html',
  styleUrls: ['./scope3category3.component.css']
})
export class Scope3category3Component implements OnInit {
  lookupdtl:any;
  lookupdtl1:any;
  currencyex:any;
  goodsfil:any;
  filteredList:any;
  filteredList1:any;
  filteredList6:any;
  filteredList7:any;
  scope3form:FormGroup
  goodsp:any;
  goodsp1:any;
  commodity:any;
  newAttribute:any
  newAttribute1:any
  emissionfactor:any
  emi:any;
  selectedName:any;
  quan:any;
  sumtotal:any;
  sumtotal1:any;
  sumtotal2:any;
  finalesum:any;
  supplierspecific:boolean=false;
  averagedata:boolean=false;
  spendbaseddata:boolean=false;
  constructor(public dialog: MatDialog,private fb:FormBuilder,private is:ImportdisService,private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private _data: { data },private router:Router,public matDialogRef:MatDialogRef<Scope3category3Component>) { 
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
     this.is.getScope3Category3Fuel().subscribe((data)=>{
      console.log(data);
      this.goodsp=data
      this.filteredList6=this.goodsp.slice()
     })
     this.is.getScope3Category3elec().subscribe((data)=>{
      console.log(data);
      this.goodsp1=data
      this.filteredList7=this.goodsp1.slice()
     })
     this.is.getScope3spendbased().subscribe((data)=>{
      console.log(data);
      this.commodity=data
      this.filteredList=this.commodity.slice()
     })
     this.is.getScope3currency().subscribe((data)=>{
      console.log(data);
      this.currencyex=data
      this.filteredList1=this.currencyex.slice()
      console.log(this.filteredList1);
     })
  }

  addFieldValue(){

    this.newAttribute = {
      'fueltype': '',
      'Unit': '',
      'Quantity': '',
      'Emissionfactor':'',
      'User': '',
      'Emi': '',
      'Total': this.lookupdtl.reduce((acc, val) => acc + val.Emi, 0),
    };
    this.lookupdtl.push(this.newAttribute);
  }
  addFieldValue1(){

    this.newAttribute1 = {
      'country': '',
      'stdg': '',
      'stdg1':'',
      'Quantity1': '',
      'Emi1': '',
      'Total1': this.lookupdtl1.reduce((acc, val) => acc + val.Emi1, 0),
    };
    this.lookupdtl1.push(this.newAttribute1);
  }

  goodsfilter(value: string){
    this.filteredList6 = this.goodsp.filter(item => item.FuelType.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    console.log(value)
  }
  goodsfilter11(value: string){
    this.filteredList7 = this.goodsp1.filter(item => item.Country.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    console.log(value)
  }
  onOptionSelected(event: any,i) {
    this.selectedName = event.option.value;
    console.log(this.selectedName);
  }
  goods(value: any, index: number) {
    console.log(value)
    var empty='';
this.goodsfilter(empty);
    const selectedGood = this.goodsp.find(g => g.Id === value);
    if (selectedGood != undefined) {
      console.log(selectedGood.Unit);
      this.lookupdtl[index].Emissionfactor = selectedGood.emissionfactor;
      this.lookupdtl[index].Unit = selectedGood.Unit;
    }
  }

  qu(index: string, event: any){
    console.log(event.target.value);
    this.lookupdtl[index].Quantity = event.target.value;
    const emissionfactor = this.lookupdtl[index].Emissionfactor;
    const quantity = this.lookupdtl[index].Quantity;
    console.log(emissionfactor);
    console.log(quantity);
    var saver
    saver=quantity.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    this.lookupdtl[index].Emi = (emissionfactor * saver).toFixed(2);
    console.log(this.lookupdtl[index].Emi)
    this.calculateTotalEmission();
  }
  qu1(index: string, event: any) {
    console.log(event.target.value);
    const quantity = this.lookupdtl1[index].Quantity1;
    var saver = quantity.replace(/\,/g, ''); // 1125, but a string, so convert it to number
    saver = parseFloat(saver);
    console.log(saver);
  
    const stdg = this.lookupdtl1[index].stdg;
    const stdg1 = this.lookupdtl1[index].stdg1;
    
    this.lookupdtl1[index].Emi1 = (((stdg + stdg1) * saver)/1000).toFixed(2);
    console.log(this.lookupdtl1[index].Emi1);
  
    this.calculateTotalEmission1();
  }
  
  uu(index: string, event: any){
    console.log(event.target.value);
    const user = event.target.value;
    const quant = this.lookupdtl[index].Quantity;
    this.lookupdtl[index].User = user;
    var saver
    saver=user.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    var saver1
    saver1=quant.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver1=parseFloat(saver1);
    this.lookupdtl[index].Emi = (saver1 * saver).toFixed(2);
    this.calculateTotalEmission();
  }
  userentered:any
  uuxff( event: any){
  console.log(event.target.value)
  this.userentered=event.target.value;
}
  goods1(value: any, index: number) {
    var empty='';
    this.goodsfilter(empty);
    const selectedGood = this.goodsp1.find(g => g.Id === value);
    if (selectedGood != undefined) {
      this.lookupdtl1[index].stdg = selectedGood.oversgen;
      this.lookupdtl1[index].stdg1 = selectedGood.oversetd;
    }
  }

calculateTotalEmission() {
  let totalEmission = 0;
  for (let i = 0; i < this.lookupdtl.length; i++) {
    totalEmission += parseFloat(this.lookupdtl[i].Emi);
  }
  this.sumtotal = totalEmission.toFixed(2);
  let sum1 = this.sumtotal1 || 0;
  this.finalesum = parseFloat(this.sumtotal) + parseFloat(sum1);
}
  calculateTotalEmission1() {
    let totalEmission = 0;
    for (let i = 0; i < this.lookupdtl1.length; i++) {
      totalEmission += parseFloat(this.lookupdtl1[i].Emi1);
    }
    this.sumtotal1 = totalEmission.toFixed(2);
    let sum = this.sumtotal || 0;
  this.finalesum = parseFloat(this.sumtotal1) + parseFloat(sum);
  }
   
  DataTypeChange(event){
    this.supplierspecific = (event === 'fuel');
    if(event == 'fuel'){
      this.addFieldValue();
      if(this.lookupdtl.length > 1){
        this.deleteQ102a(this.lookupdtl.length-1)
      }
    }
    this.averagedata = (event === 'elec');
    if(event == 'elec'){
      this.addFieldValue1();
      if(this.lookupdtl1.length > 1){
        this.deleteQ102a1(this.lookupdtl1.length-1)
      }
    }
}

  onSave(){
    console.log(this.finalesum);
    console.log(this.userentered);
    if(this.userentered != undefined )
    {
      this.is.userentered='yes';
    }
    else{
      this.is.userentered='novalue';
    }
this.is.scope3category3=Math.round(this.finalesum)
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
deleteQ102a(i){
  this.lookupdtl.splice(i,1);
}
deleteQ102a1(i){
  this.lookupdtl1.splice(i,1);
}
}
