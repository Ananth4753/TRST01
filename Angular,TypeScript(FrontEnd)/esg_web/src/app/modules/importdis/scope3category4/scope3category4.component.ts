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
  selector: 'app-scope3category4',
  templateUrl: './scope3category4.component.html',
  styleUrls: ['./scope3category4.component.scss']
})
export class Scope3category4Component implements OnInit {
  lookupdtl:any;
  vehicle:any;
  newAttribute:any
  sumtotal:any;
  filteredList:any;
  finalesum:any;
  categ4:boolean=false;
  categ9:boolean=false;
  selectedName:any
  userentered:any
  constructor(public dialog: MatDialog,private fb:FormBuilder,private is:ImportdisService,private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private _data: { data },private router:Router,public matDialogRef:MatDialogRef<Scope3category4Component>) { 
    this.lookupdtl=[];
  }
  ngOnInit() {
    console.log(this._data['downstreamValue'])
    if(this._data['downstreamValue']=='downstream'){
      this.categ9=true;
    }
    else{
      this.categ4=true;
    }
    this.is.getScope3Category4().subscribe((data)=>{
      this.vehicle=data;
    })
    this.addFieldValue();
    if(this.lookupdtl.length > 1){
      this.deleteQ102a1(this.lookupdtl.length-1)
    }
  }
  uuxff( event: any){
    console.log(event.target.value)
    this.userentered=event.target.value;
  }
  vehicledropdown(value: any, index: number) {
    const selectedGood = this.vehicle.find(g => g.Id === value);
    if (selectedGood != undefined) {
      this.lookupdtl[index].units = selectedGood.Units;
      this.lookupdtl[index].standardef = selectedGood.Emissionfactor;
    }
    this.calculateTotalEmission();
  }
  calculateTotalEmission() {
    let totalEmission = 0;
    for (let i = 0; i < this.lookupdtl.length; i++) {
      totalEmission += parseFloat(this.lookupdtl[i].emissions);
    }
    this.sumtotal = totalEmission.toFixed(2);
    this.finalesum = this.sumtotal;
  }
  quantity(index: number, event: any){
    const quant = event.target.value;
    var saver
    saver=quant.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    this.lookupdtl[index].emissions = ((saver*this.lookupdtl[index].standardef) / 1000).toFixed(2);
    this.calculateTotalEmission();
  }
  userbased(index: number, event: any){
    const user = event.target.value;
    const quant = this.lookupdtl[index].quantity;
    var saver
    saver=quant.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    var saver1
    saver1=user.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver1=parseFloat(saver1);
    this.lookupdtl[index].emissions = ((saver*saver1) / 1000).toFixed(2);
    this.calculateTotalEmission();
  }
addFieldValue(){
  this.newAttribute = {
    'vehicletype': '',
    'units': '',
    'quantity': '',
    'standardef':'','userbased':'',
    'emissions': '',
    'Total': this.lookupdtl.reduce((acc, val) => acc + val.Emi, 0),
  };
  this.lookupdtl.push(this.newAttribute);
}
  deleteQ102a1(i){
    this.lookupdtl.splice(i,1);
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
this.is.scope3category4=Math.round(this.finalesum)
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
}
