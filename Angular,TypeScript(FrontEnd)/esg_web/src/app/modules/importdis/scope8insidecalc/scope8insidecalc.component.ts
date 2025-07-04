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
  selector: 'app-scope8insidecalc',
  templateUrl: './scope8insidecalc.component.html',
  styleUrls: ['./scope8insidecalc.component.scss']
})
export class Scope8insidecalcComponent implements OnInit {
  lookupdtl:any;
  lookupdtl1:any;
  material:any;
  fuel:any;
  newAttribute:any
  newAttribute1:any
  sumtotal:any;
  sumtotal1:any;
  materialnames:any;
  userentered:any;
  filteredList:any;
  finalesum:any;
  finalesum1:any;
  paramtext:any;
  selectedName:any
  scope3form:FormGroup
  firstdrop:boolean=false;
  secdrop:boolean=false;
  thirddrop:boolean=false;
  constructor(public dialog: MatDialog,private fb:FormBuilder,private is:ImportdisService,private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private _data: { data },private router:Router,public matDialogRef:MatDialogRef<Scope8insidecalcComponent>) { 
    this.lookupdtl=[{
      eighth:'',
    }];
    this.lookupdtl1 = [{
      fourth: '', // Set a default value for fourth property
      // Other properties...
    }];
  }
  ngOnInit() {
    this.is.getScope3scope2calc().subscribe((data)=>{
      this.material=data;
    })
    this.is.getScope3scope1calc().subscribe((data)=>{
      this.fuel=data;
    })
    console.log(this._data['downstreamValue'])
    if(this._data['downstreamValue']=='eight'){
      this.firstdrop=true;
    }
    else{
      this.secdrop=true;
    }
    this.addFieldValue();
    if(this.lookupdtl.length > 1){
      this.deleteQ102a(this.lookupdtl.length-1)
    }
    this.addFieldValue1();
    if(this.lookupdtl1.length > 1){
      this.deleteQ102a1(this.lookupdtl1.length-1)
    }
  }
  firstcal(index: number, event: any){
    const quant3 = this.lookupdtl[index].third;
    const quant5= this.lookupdtl[index].fifth;
    const quant6=this.lookupdtl[index].sixth
    const quant7=event.target.value
    var saver1
    saver1=quant3.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver1=parseFloat(saver1);
    var saver3
    saver3=quant5.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver3=parseFloat(saver3);
    var saver4
    saver4=quant6.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver4=parseFloat(saver4);
    var saver5
    saver5=quant7.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver5=parseFloat(saver5);
    const a=saver1*this.lookupdtl[index].fourth
    const b=saver3*saver4
    this.lookupdtl[index].eighth = a+b+saver5;
    this.finalesum=this.lookupdtl[index].eighth
  }
  seconcal(index: number, event: any){
    const quant=event.target.value;
    var saver
    saver=quant.replace(/\,/g,''); // 1125, but a string, so convert it to number
    saver=parseFloat(saver);
    this.lookupdtl1[index].fourth = (saver*this.lookupdtl1[index].third)/1000 ;
    this.finalesum1=this.lookupdtl1[index].fourth
  }
  disposalchange(value: any, index: number) {
    const selectedGood = this.material.find(g => g.Id === value);
    if (selectedGood != undefined) {
      this.lookupdtl1[index].third = selectedGood.Productionfuel;
    }
  }
  fuelchange(value: any, index: number) {
    const selectedGood = this.fuel.find(g => g.Id === value);
    if (selectedGood != undefined) {
      this.lookupdtl[index].second = selectedGood.Units;
      this.lookupdtl[index].fourth = selectedGood.Emissionfactor;
    }
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
  deleteQ102a(i){
    this.lookupdtl.splice(i,1);
  }
  deleteQ102a1(i){
    this.lookupdtl1.splice(i,1);
  }
  onSave(){
    console.log(this.finalesum);
    this.is.scope3insidecal815=this.finalesum1
this.is.scope3insidecal814=this.finalesum
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

calculateinside(data){
  const dialogRef = this.dialog.open(Scope8insidecalcComponent, {
      autoFocus: false,
      data: { downstreamValue: 'eight' },
  });
  dialogRef.afterClosed().subscribe((result) => {
      if (result) {
          console.log(result);
      }
  });
}
}

