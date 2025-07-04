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
  selector: 'app-scope3avg',
  templateUrl: './scope3avg.component.html',
  styleUrls: ['./scope3avg.component.scss']
})
export class Scope3avgComponent implements OnInit {
  scope3form:FormGroup
  shiftb:boolean=false;
  averagedata:boolean=false;
  lookupdtl:any
  lookupdtl1:any
  newAttribute:any;
  newAttribute1:any;
  filteredList1:any;
  filteredList2:any;
  filteredList3:any;
  machinery:any
  commodity:any
  sumtotal:any ;
  sumtotal1:any ;
  currencyex:any;
  selectedName:any;
  finalesum:any;
  constructor(public dialog: MatDialog,private fb:FormBuilder,private is:ImportdisService,private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private _data: { data },private router:Router,public matDialogRef:MatDialogRef<Scope3avgComponent>) { 
    this.lookupdtl=[];
    this.lookupdtl1=[];
  }
  ngOnInit() {
    this.is.getScope3Category2shift().subscribe((data)=>{
      console.log(data);
      this.machinery=data;
      this.filteredList1=this.machinery.slice()
    })
    this.is.getScope3Category2spend().subscribe((data)=>{
      console.log(data);
      this.commodity=data;
      this.filteredList2=this.commodity.slice()
    })
    this.is.getScope3currency().subscribe((data)=>{
      console.log(data);
      this.currencyex=data
      this.filteredList3=this.currencyex.slice()
     })
  }
  modity(value: any, index: number) {
    var empty='';
    this.modityselectfilter(empty);
    const selectedGood = this.commodity.find(g => g.Id === value);
  if (selectedGood != undefined) {
    this.lookupdtl1[index].ef = selectedGood.emissionfactor;
  }
  }
  coomo(value: any, index: number) {
    var empty='';
    this.coomofilter(empty);
    const selectedGood = this.currencyex.find(g => g.Id === value);
    if (selectedGood != undefined) {
      const exchangeRate = selectedGood.Exchangerate;
      const value = this.lookupdtl1[index].curr;
      var saver
      saver=value.replace(/\,/g,''); // 1125, but a string, so convert it to number
      saver=parseFloat(saver);
      // this.lookupdtl1[index].Exchangerate = exchangeRate;
      this.lookupdtl1[index].emis3 = ((saver/exchangeRate)*this.lookupdtl1[index].ef).toFixed(2);
    }
    this.calculateTotalEmission1();
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
this.is.scope3avg=Math.round(this.finalesum)
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
machineselect(value: any, index: number) {
  var empty='';
  this.machineselectfilter(empty);
  const selectedGood = this.machinery.find(g => g.Id === value);
  if (selectedGood != undefined) {
    this.lookupdtl[index].gasoline = selectedGood.Gasoline;
    this.lookupdtl[index].diesel = selectedGood.DieselFuel;
    this.lookupdtl[index].elec = selectedGood.Electricity;
    this.lookupdtl[index].co2shift = selectedGood.emissionfactor;
  }
}
machineselectfilter(value:string){
  this.filteredList1 = this.machinery.filter(item => item.MachineryType.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  console.log(value)
}
modityselectfilter(value:string){
  this.filteredList2 = this.commodity.filter(item => item.CommodityCodeName.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  console.log(value)
}
coomofilter(value:string){
  this.filteredList3 = this.currencyex.filter(item => item.Currency.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  console.log(value)
}
shiftinput(index: string, event: any){
  console.log(event.target.value);
  this.lookupdtl[index].shifts = event.target.value;
  const shifts = this.lookupdtl[index].shifts;
  var saver
  saver=shifts.replace(/\,/g,''); // 1125, but a string, so convert it to number
  saver=parseFloat(saver);
  this.lookupdtl[index].tco2e =(saver * this.lookupdtl[index].co2shift).toFixed(2);
  this.calculateTotalEmission();
}
userinput(index: string, event: any){
  console.log(event.target.value);
  this.lookupdtl[index].userbased = event.target.value;
  const shifts = this.lookupdtl[index].shifts;
  const userbased = this.lookupdtl[index].userbased;
  var saver
  saver=shifts.replace(/\,/g,''); // 1125, but a string, so convert it to number
  saver=parseFloat(saver);
  var saver1
  saver1=userbased.replace(/\,/g,''); // 1125, but a string, so convert it to number
  saver1=parseFloat(saver1);
  this.lookupdtl[index].tco2e = (saver* saver1).toFixed(2);
  this.calculateTotalEmission();
}
  addFieldValue(){
    this.newAttribute = {
      'machinerytype': '',
      'gasoline': '',
      'diesel': '',
      'elec':'',
      'shifts': '',
      'co2shift': '',
      'userbased': '',
      'tco2e': '',
      'Total': this.lookupdtl.reduce((acc, val) => acc + val.Emi, 0),
    };
    this.lookupdtl.push(this.newAttribute);
  }
  onOptionSelected(event: any,i) {
    this.selectedName = event.option.value;
    console.log(this.selectedName);
  }
  calculateTotalEmission() {
    let totalEmission = 0;
    for (let i = 0; i < this.lookupdtl.length; i++) {
      totalEmission += parseFloat(this.lookupdtl[i].tco2e);
    }
    this.sumtotal = totalEmission.toFixed(2);
    this.finalesum = this.sumtotal;
  }
  userentered:any
  uuxff( event: any){
  console.log(event.target.value)
  this.userentered=event.target.value;
}
  calculateTotalEmission1() {
    let totalEmission = 0;
    for (let i = 0; i < this.lookupdtl1.length; i++) {
      totalEmission += parseFloat(this.lookupdtl1[i].emis3);
    }
    this.sumtotal1 = totalEmission.toFixed(2);
    this.finalesum = this.sumtotal1;
  }
  userbased3(index: number, event: any){
    console.log(event.target.value);
    const user = event.target.value;
    const quant = this.lookupdtl1[index].curr;
    var saver
    saver=quant.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    const exchangeRate = this.currencyex.find(g => g.Id === this.lookupdtl1[index].currtype)?.Exchangerate;
    this.lookupdtl1[index].userbased3 = user;
    var saver1
    saver1=user.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver1=parseFloat(saver1);
    this.lookupdtl1[index].emis3 = ((saver/exchangeRate) * saver1).toFixed(2);
    this.calculateTotalEmission1();
  }
  addFieldValue1(){
    this.newAttribute1 = {
      'Commodity': '',
      'curr': '',
      'currtype':'',
      'Exchangerate': '',
      'ef':'',
      'userbased3':'',
      'emis3': '',
      'Total2': this.lookupdtl1.reduce((acc, val) => acc + val.Emi1, 0),
    };
    this.lookupdtl1.push(this.newAttribute1);
  }

delete3rd(i){
  this.lookupdtl1.splice(i,1);
}
deleteQ102a(i){
  this.lookupdtl.splice(i,1);
}
DataTypeChange(event){
  this.shiftb = (event === 'Shift-based');
  if(event == 'Shift-based'){
    this.addFieldValue();
    if(this.lookupdtl.length > 1){
      this.deleteQ102a(this.lookupdtl.length-1)
    }}
  this.averagedata = (event === 'spend-based');
  if(event == 'spend-based'){
    this.addFieldValue1();
    if(this.lookupdtl1.length > 1){
      this.delete3rd(this.lookupdtl1.length-1)
    }}
}
}
