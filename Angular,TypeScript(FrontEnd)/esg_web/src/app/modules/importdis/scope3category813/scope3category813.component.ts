import { Component, OnInit,Inject,ChangeDetectorRef } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
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
import { Scope8insidecalcComponent } from '../scope8insidecalc/scope8insidecalc.component';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-scope3category813',
  templateUrl: './scope3category813.component.html',
  styleUrls: ['./scope3category813.component.scss']
})

export class Scope3category813Component implements OnInit {
  lookupdtl:any;
  lookupdtl1:any;
  lookupdtl2:any;
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
    {value: 'Square meter', viewValue: 'Square meter'},
    {value: 'Square yard', viewValue: 'Square yard'},
    {value: 'Square foot', viewValue: 'Square foot'},
    {value: 'Square mile', viewValue: 'Square mile'},
    {value: 'Square kilometer', viewValue: 'Square kilometer'},
    {value: 'Hectare', viewValue: 'Hectare'},
    {value: 'Acre', viewValue: 'Acre'},
  ];
  constructor(public dialog: MatDialog,private fb:FormBuilder,private is:ImportdisService,private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private _data: { data },private router:Router,public matDialogRef:MatDialogRef<Scope3category813Component>) { 
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
      totalEmission += parseFloat(this.lookupdtl1[i].uno3);
    }
    this.sumtotal1 = totalEmission.toFixed(2);
    this.finalesum = this.sumtotal1;
  }
  calculateTotalEmission2() {
    let totalEmission = 0;
    for (let i = 0; i < this.lookupdtl2.length; i++) {
      totalEmission += parseFloat(this.lookupdtl2[i].uno3);
    }
    this.sumtotal2 = totalEmission.toFixed(2);
    this.finalesum = this.sumtotal2;
  }
  qu(index: number, event: any){
    this.lookupdtl[index].fourth=event.target.value
    const quant1 = this.lookupdtl[index].first;
    const quant2 = this.lookupdtl[index].second;
    const quant3= this.lookupdtl[index].third;
    const quant4=this.lookupdtl[index].fourth
    var saver
    saver=quant1.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    var saver1
    saver1=quant2.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver1=parseFloat(saver1);
    var saver2
    saver2=quant3.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver2=parseFloat(saver2);
    var saver3
    saver3=quant4.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver3=parseFloat(saver3);
    this.lookupdtl[index].Emi = (((saver + saver1) * saver2) / saver3).toFixed(2);
    this.calculateTotalEmission();
  }

  a2ndqu(index: number, event: any){
    const quant4 = event.target.value;
    const quant1 = this.lookupdtl1[index].uno;
    var saver
    saver=quant1.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    var saver3
    saver3=quant4.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver3=parseFloat(saver3);
    this.lookupdtl1[index].uno3 = ((saver*saver3)/1000).toFixed(2) ;
    this.calculateTotalEmission1();
  }
  last(index: number, event: any){
    const quant4 = event.target.value;
    const quant1 = this.lookupdtl2[index].uno;
    var saver
    saver=quant1.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    var saver3
    saver3=quant4.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver3=parseFloat(saver3);
    this.lookupdtl2[index].uno3 = ((saver*saver3 || 1)/1000).toFixed(2) ;
    this.calculateTotalEmission2();
  }
  addFieldValue(){
  
    this.newAttribute = {
      'first': '',
      'second': '',
      'third': '',
      'fourth':'','Emi':'',
      'Total': this.lookupdtl.reduce((acc, val) => acc + val.Emi, 0),
    };
    this.lookupdtl.push(this.newAttribute);
    this.is.scope3countad=this.lookupdtl.length;
    console.log(this.lookupdtl.length);
  }
addFieldValue1(){
  this.newAttribute1 = {
    'uno': '',
    'uno1': '',
    'uno2': '',
    'uno3': '',
    'Total': this.lookupdtl1.reduce((acc, val) => acc + val.Emi, 0),
  };
  this.lookupdtl1.push(this.newAttribute1);
}
addFieldValue2(){
  this.newAttribute2 = {
    'uno': '',
    'uno1': '',
    'uno2': '',
    'uno3': '',
    'Total': this.lookupdtl2.reduce((acc, val) => acc + val.Emi, 0),
  };
  this.lookupdtl2.push(this.newAttribute2);
}
deleteQ102a(i){
  this.lookupdtl.splice(i,1);
  this.is.scope3countad=this.lookupdtl.length;
  console.log(this.lookupdtl.length);
}
  deleteQ102a1(i){
    this.lookupdtl1.splice(i,1);
  }
  delete3rd(i){
    this.lookupdtl2.splice(i,1);
  }
  onSave(){
    console.log(this.finalesum);
this.is.scope3category813=Math.round(this.finalesum)
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
}
calculateinside(index: number) {
  const dialogRef = this.dialog.open(Scope8insidecalcComponent, {
    autoFocus: false,
    data: { downstreamValue: 'eight' },
});

  dialogRef.afterClosed().subscribe((result) => {
      var indi= this.is.scope3countad;
      indi=indi-1;
      console.log(indi);
      console.log(this.lookupdtl);
      this.lookupdtl[indi].first = this.is.scope3insidecal814.toLocaleString();
    // }
  });
}
calculateinside2(index: number) {
  const dialogRef = this.dialog.open(Scope8insidecalcComponent, {
    autoFocus: false,
    data: { downstreamValue: 'sec' },
});

  dialogRef.afterClosed().subscribe((result) => {
      var indi= this.is.scope3countad;
      indi=indi-1;
      console.log(indi);
      console.log(this.lookupdtl);
      this.lookupdtl[indi].second = this.is.scope3insidecal815.toLocaleString();
    // }
  });
}

}

