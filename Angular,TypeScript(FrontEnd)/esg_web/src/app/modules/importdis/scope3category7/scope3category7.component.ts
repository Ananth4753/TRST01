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
  selector: 'app-scope3category7',
  templateUrl: './scope3category7.component.html',
  styleUrls: ['./scope3category7.component.scss']
})
export class Scope3category7Component implements OnInit {
  lookupdtl:any;
  vehicle:any;
  newAttribute:any
  sumtotal:any;
  materialnames:any;
  userentered:any;
  filteredList:any;
  finalesum:any;
  paramtext:any;
  selectedName:any
  categ5:boolean=false;
  categ12:boolean=false;
  constructor(public dialog: MatDialog,private fb:FormBuilder,private is:ImportdisService,private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private _data: { data },private router:Router,public matDialogRef:MatDialogRef<Scope3category7Component>) { 
    this.lookupdtl=[];
  }
  ngOnInit() {
    console.log(this._data['downstreamValue'])
    if(this._data['downstreamValue']=='five'){
      this.categ5=true;
    }
    else{
      this.categ12=true;
    }
    this.is.getScope3Category7().subscribe((data)=>{
      this.vehicle=data;
    })
    this.addFieldValue();
    if(this.lookupdtl.length > 1){
      this.deleteQ102a1(this.lookupdtl.length-1)
    }
  }
  vehicledrop(value: any, index: number) {
    const selectedGood = this.vehicle.find(g => g.Id === value);
    if (selectedGood != undefined) {
      this.lookupdtl[index].standardef = selectedGood.emissionfactor;
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
  lasto(index: number, event: any){
    const quant = event.target.value;
    var saver
    saver=quant.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    const quant1 = this.lookupdtl[index].avgd;
    var saver1
    saver1=quant1.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver1=parseFloat(saver1);
    const quant2 = this.lookupdtl[index].noofemp;
    var saver2
    saver2=quant2.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver2=parseFloat(saver2);
    const quant3 = this.lookupdtl[index].standardef;
    this.lookupdtl[index].emissions = ((saver*saver1*saver2*quant3) / 1000).toFixed(2);
    this.calculateTotalEmission();
  }
  userbased(index: number, event: any){
    const user = event.target.value;
    const quant = this.lookupdtl[index].avgd;
    const quant2 = this.lookupdtl[index].avgy;
    var saver
    saver=quant.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    var saver1
    saver1=user.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver1=parseFloat(saver1);
    var saver2
    saver2=quant2.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver2=parseFloat(saver2);
    this.lookupdtl[index].emissions = ((saver*saver1*saver2) / 1000).toFixed(2);
    this.calculateTotalEmission();
  }
addFieldValue(){
  this.newAttribute = {
    'noofemp': '',
    'vehicletype': '',
    'avgd': '',
    'avgy': '',
    'standardef':'','userbased':'',
    'emissions': '',
    'Total': this.lookupdtl.reduce((acc, val) => acc + val.Emi, 0),
  };
  this.lookupdtl.push(this.newAttribute);
}
  deleteQ102a1(i){
    this.lookupdtl.splice(i,1);
  }
  uuxff( event: any){
    console.log(event.target.value)
    this.userentered=event.target.value;
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
this.is.scope3category7=Math.round(this.finalesum)
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
