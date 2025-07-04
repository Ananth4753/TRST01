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
  selector: 'app-scope3category15',
  templateUrl: './scope3category15.component.html',
  styleUrls: ['./scope3category15.component.scss']
})
export class Scope3category15Component implements OnInit {
  lookupdtl:any;
  lookupdtl1:any;
  lookupdtl2:any;
  lookupdtl3:any;
  lookupdtl4:any;
  material:any;
  newAttribute:any
  newAttribute1:any
  newAttribute2:any
  newAttribute3:any
  newAttribute4:any
  sumtotal:any;
  sumtotal1:any;
  sumtotal2:any;
  sumtotal3:any;
  sumtotal4:any;
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
  fourthdrop:boolean=false;
  fifthdrop:boolean=false;
  categ8:boolean=false;
  categ13:boolean=false;
  foods: Food[] = [
    {value: 'Square meter', viewValue: 'Square meter'},
    {value: 'Square yard', viewValue: 'Square yard'},
    {value: 'Square foot', viewValue: 'Square foot'},
    {value: 'Square mile', viewValue: 'Square mile'},
    {value: 'Square kilometer', viewValue: 'Square kilometer'},
    {value: 'Hectare', viewValue: 'Hectare'},
    {value: 'Acre', viewValue: 'Acre'},
  ];
  constructor(public dialog: MatDialog,private fb:FormBuilder,private is:ImportdisService,private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private _data: { data },private router:Router,public matDialogRef:MatDialogRef<Scope3category15Component>) { 
    this.lookupdtl=[];
    this.lookupdtl1=[];
    this.lookupdtl2=[];
    this.lookupdtl3=[];
    this.lookupdtl4=[];
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
    console.log(this._data['downstreamValue'])
    if(this._data['downstreamValue']=='eight'){
      this.categ8=true;
    }
    else{
      this.categ13=true;
    }
    this.addFieldValue();
    if(this.lookupdtl.length > 1){
      this.deleteQ102a(this.lookupdtl.length-1)
    }
    this.addFieldValue1();
    if(this.lookupdtl1.length > 1){
      this.deleteQ102a1(this.lookupdtl1.length-1)
    }
    this.addFieldValue2();
    if(this.lookupdtl2.length > 1){
      this.delete3rd(this.lookupdtl2.length-1)
    }
    this.addFieldValue3();
    if(this.lookupdtl3.length > 1){
      this.delete4th(this.lookupdtl3.length-1)
    }
    this.addFieldValue4();
    if(this.lookupdtl4.length > 1){
      this.delete5th(this.lookupdtl4.length-1)
    }
  }
  calculateTotalEmission() {
    let totalEmission = 0;
    for (let i = 0; i < this.lookupdtl.length; i++) {
      totalEmission += parseFloat(this.lookupdtl[i].fourth);
    }
    this.sumtotal = totalEmission.toFixed(2);
    this.finalesum = this.sumtotal;
  }
  calculateTotalEmission1() {
    let totalEmission = 0;
    for (let i = 0; i < this.lookupdtl1.length; i++) {
      totalEmission += parseFloat(this.lookupdtl1[i].uno6);
    }
    this.sumtotal1 = totalEmission.toFixed(2);
    this.finalesum = this.sumtotal1;
  }
  calculateTotalEmission2() {
    let totalEmission = 0;
    for (let i = 0; i < this.lookupdtl2.length; i++) {
      totalEmission += parseFloat(this.lookupdtl2[i].five);
    }
    this.sumtotal2 = totalEmission.toFixed(2);
    this.finalesum = this.sumtotal2;
  }
  calculateTotalEmission3() {
    let totalEmission = 0;
    for (let i = 0; i < this.lookupdtl3.length; i++) {
      totalEmission += parseFloat(this.lookupdtl3[i].uno6);
    }
    this.sumtotal3 = totalEmission.toFixed(2);
    this.finalesum = this.sumtotal3;
  }
  calculateTotalEmission4() {
    let totalEmission = 0;
    for (let i = 0; i < this.lookupdtl4.length; i++) {
      totalEmission += parseFloat(this.lookupdtl4[i].uno4);
    }
    this.sumtotal4 = totalEmission.toFixed(2);
    this.finalesum = this.sumtotal4;
  }
  firstcal(index: number, event: any){
    const quant1 = this.lookupdtl[index].second;
    const quant2 = event.target.value;
    var saver
    saver=quant1.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    var saver1
    saver1=quant2.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver1=parseFloat(saver1);
    this.lookupdtl[index].fourth = (saver * (saver1/100)).toFixed(2);
    this.calculateTotalEmission();
  }
  secondcal(index: number, event: any){
    const x = event.target.value;
    const a = this.lookupdtl1[index].uno1;
    const b = this.lookupdtl1[index].uno2;
    const c = this.lookupdtl1[index].uno4;
    var saver
    saver=a.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    var saver1
    saver1=b.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver1=parseFloat(saver1);
    var saver2
    saver2=c.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver2=parseFloat(saver2);
    var saver3
    saver3=x.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver3=parseFloat(saver3);
    this.lookupdtl1[index].uno6 = ((saver*(saver1/100)*(saver2/100)*saver3)/1000).toFixed(2);
    this.calculateTotalEmission1();
  }
  thrdca(index: number, event: any){
    const quant5 = event.target.value;
    const quant1 = this.lookupdtl2[index].two;
    var saver
    saver=quant1.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    var saver1
    saver1=quant5.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver1=parseFloat(saver1);
    this.lookupdtl2[index].five = (saver*(saver1/100)).toFixed(2) ;
    this.calculateTotalEmission2();
  }
  last(index: number, event: any){
    const quant3 = event.target.value;
    const quant1 = this.lookupdtl3[index].uno2;
    const quant2 = this.lookupdtl3[index].uno4;
    var saver1
    saver1=quant1.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver1=parseFloat(saver1);
    var saver3
    saver3=quant3.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver3=parseFloat(saver3);
    var saver4
    saver4=quant2.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver4=parseFloat(saver4);
    this.lookupdtl3[index].uno6 = (saver1*(saver3/100)*saver4).toFixed(2);
    this.calculateTotalEmission3();
  }
  lastact(index: number, event: any){
    const quant3 = event.target.value;
    const quant1 = this.lookupdtl4[index].uno2;
    const quant2 = this.lookupdtl4[index].uno1;
    var saver1
    saver1=quant1.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver1=parseFloat(saver1);
    var saver3
    saver3=quant3.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver3=parseFloat(saver3);
    var saver4
    saver4=quant2.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver4=parseFloat(saver4);
    this.lookupdtl4[index].uno4 = (saver1*(saver3/100)*saver4).toFixed(2) ;
    this.calculateTotalEmission4();
  }
addFieldValue(){
  this.newAttribute = {
    'first': '',
    'second': '',
    'third': '',
    'fourth':'',
    'Total': this.lookupdtl.reduce((acc, val) => acc + val.Emi, 0),
  };
  this.lookupdtl.push(this.newAttribute);
}
addFieldValue1(){
  this.newAttribute1 = {
    'uno': '',
    'uno1': '',
    'uno2': '',
    'uno3': '',
    'uno4': '',
    'uno5': '',
    'uno6': '',
    'Total': this.lookupdtl1.reduce((acc, val) => acc + val.Emi, 0),
  };
  this.lookupdtl1.push(this.newAttribute1);
}
addFieldValue2(){
  this.newAttribute2 = {
    'one': '',
    'two': '',
    'three': '',
    'four': '',
    'five': '',
    'Total': this.lookupdtl2.reduce((acc, val) => acc + val.Emi, 0),
  };
  this.lookupdtl2.push(this.newAttribute2);
}
addFieldValue3(){
  this.newAttribute3 = {
    'uno': '',
    'uno1': '',
    'uno2': '',
    'uno3': '',
    'uno4': '',
    'uno5': '',
    'uno6': '',
    'Total': this.lookupdtl3.reduce((acc, val) => acc + val.Emi, 0),
  };
  this.lookupdtl3.push(this.newAttribute3);
}
addFieldValue4(){
  this.newAttribute4 = {
    'uno': '',
    'uno1': '',
    'uno2': '',
    'uno3': '',
    'uno4': '',
    'Total': this.lookupdtl4.reduce((acc, val) => acc + val.Emi, 0),
  };
  this.lookupdtl4.push(this.newAttribute4);
}
  deleteQ102a(i){
    this.lookupdtl.splice(i,1);
  }
  deleteQ102a1(i){
    this.lookupdtl1.splice(i,1);
  }
  delete3rd(i){
    this.lookupdtl2.splice(i,1);
  }
  delete4th(i){
    this.lookupdtl3.splice(i,1);
  }
  delete5th(i){
    this.lookupdtl4.splice(i,1);
  }
  onSave(){
    console.log(this.finalesum);
this.is.scope3category15=Math.round(this.finalesum)
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
  this.thirddrop = (event === 'unavail');
  if(event == 'unavail'){
    this.addFieldValue2();
    if(this.lookupdtl2.length > 1){
      this.delete3rd(this.lookupdtl2.length-1)
    }
  }
  this.fourthdrop = (event === 'unavail2');
  if(event == 'unavail2'){
    this.addFieldValue3();
    if(this.lookupdtl3.length > 1){
      this.delete4th(this.lookupdtl3.length-1)
    }
  }
  this.fifthdrop = (event === 'unavail3');
  if(event == 'unavail3'){
    this.addFieldValue4();
    if(this.lookupdtl4.length > 1){
      this.delete5th(this.lookupdtl4.length-1)
    }
  }
}
}


