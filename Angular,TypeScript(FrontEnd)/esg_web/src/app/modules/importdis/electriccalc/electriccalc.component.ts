import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ImportdisService } from '../importdis.service';

@Component({
    selector: 'app-electriccalc',
    templateUrl: './electriccalc.component.html',
    styleUrls: ['./electriccalc.component.scss'],
})
export class ElectriccalcComponent implements OnInit {
    country:any;
    rental:any;
    lookupdtl: any;
    newAttribute: any;
    lookupdtl1: any;
    reltypeothers: any;
    filteredList7:any
    newAttribute1: any;
    units:any;
    sumtotal: number = 0; // Initialize sumtotal with 0
    sumtotal1: any = 0; // Initialize sumtotal1 with 0
    finalesum:any;
    electric:boolean=false;
    heat:boolean=false;
    electtricform: FormGroup;
    constructor(
        public dialog: MatDialog,
        private fb: FormBuilder,
        private is: ImportdisService,
        @Inject(MAT_DIALOG_DATA) private _data: { data },
        private router: Router,
        public matDialogRef: MatDialogRef<ElectriccalcComponent>
    ) {
        this.lookupdtl = [];
        this.lookupdtl1 = [];
    }

    ngOnInit() {
      this.electtricform = this.fb.group({
        Id:[],
        BuildingName: [],
        DataType: [],
        Buildingaddress: [],
        Landmark: [],
        Country:[],
        Volume:[],
        Units:[],
        tCO2e:[],
        IsActive: [1],
        CreatedDate: [new Date()],
        CreatedByUserId:[1] ,
        UpdatedDate: [new Date()],
        UpdatedByUserId: [1]
       })
       this.is.getElectricCountryDetails().subscribe((data)=>{
        this.country=data;
        this.filteredList7 = this.country.slice();
       })
       this.is.getLookupDetailsByHdrId(25).subscribe((Data)=>{
        this.units=Data;
      })
      this.is.getScope2SteamHeat().subscribe((data)=>{
        this.rental=data
      })
      this.addFieldValue1();
      if(this.lookupdtl1.length > 1){
        this.deleteQ102a3(this.lookupdtl1.length-1)
      }
    }
    onSave() {
      this.finalesum = this.sumtotal + parseFloat(this.sumtotal1);
      console.log(this.is.electricsum);
      console.log(this.sumtotal);
      console.log(this.sumtotal1);
      console.log(this.finalesum);
      this.is.electricsum = (this.finalesum).toFixed(2);
      this.matDialogRef.close(false);
    }
    
    onClose(): void {
        this.matDialogRef.close(false);
    }
    onCancel(): void {
        this.matDialogRef.close(false);
    }
    fueldrop(value: any, index: number) {
      const selectedGood = this.rental.find(g => g.Id === value);
      if (selectedGood != undefined) {
        this.lookupdtl1[index].uno2 = selectedGood.Emissionfactor;
        const user = this.lookupdtl1[index].uno;
        const saver = parseFloat(user.replace(/,/g, '')); // Remove commas and parse as float
        this.lookupdtl1[index].uno4 = (saver * this.lookupdtl1[index].uno2) / 1000;
      }
      this.lookupdtl1[index].gwpSelected = true; // Set gwpSelected property to true
      this.calculateTotalEmission();
    }
    
    uu(index: string, event: any){
      console.log(event.target.value);
      const user = event.target.value;
      const quant = this.lookupdtl1[index].uno;
      this.lookupdtl1[index].uno3 = user;
      var saver
      saver=user.replace(/\,/g,''); // 1125, but a string, so convert it to number
      saver=parseFloat(saver);
      var saver1
      saver1=quant.replace(/\,/g,''); // 1125, but a string, so convert it to number
      saver1=parseFloat(saver1);
      this.lookupdtl1[index].uno4 = (saver1 * saver)/1000;
      this.calculateTotalEmission();
    }
    calculateTotalEmission() {
      let totalEmission = 0;
      for (let i = 0; i < this.lookupdtl1.length; i++) {
        totalEmission += parseFloat(this.lookupdtl1[i].uno4);
      }
      this.sumtotal1 = totalEmission.toFixed(2);
      console.log(this.sumtotal1);
    }
productionfuel:any;
co2value:any;
co2value1:any;

OnChangeType2(i, value) {
  var empty = '';
  this.onInputChangecountry1(empty);
  console.log(value.value);
  
  this.lookupdtl1[i]['uno9'] = value.value;
  }
   // OnchangeType2x(i, value) {
 
    //   var empty = '';
    
    //   this.onInputChange(empty);
    //   var codeforfilter=value.value;
    // this.is.getNICCodefilter(codeforfilter).subscribe((Data)=>{
    //   var codefiltervalue=Data
    //   this.lookupdtl2x[i]['Projects2x'] = codefiltervalue[0].Description;
    // });
    //       this.lookupdtl2x[i]['Type2x'] = value.value;
      
    // }
addFieldValue() {
  let dataArr = this.country.filter(x => x.Id == this.electtricform.get('Country').value);
  this.productionfuel = dataArr[0]['Productionfuel'];

  if (this.electtricform.get('Units').value == 'mWh') {
    var saver;
    saver = this.electtricform.get('Volume').value.replace(/\,/g, '');
    saver = parseFloat(saver);

    this.co2value = this.productionfuel * saver;  // Calculate co2value first
    this.sumtotal += this.co2value;

    this.newAttribute = {
      BuildingName: this.electtricform.get('BuildingName').value,
      Buildingaddress: this.electtricform.get('Buildingaddress').value,
      Landmark: this.electtricform.get('Landmark').value,
      Country: dataArr[0]['Country'],
      Volume: this.electtricform.get('Volume').value,
      Units: this.electtricform.get('Units').value,
      tC02e: (this.co2value).toFixed(2),
    };
    this.lookupdtl.push(this.newAttribute);
    console.log(this.lookupdtl);
    this.electtricform.reset();
  } else {
    var saver;
    saver = this.electtricform.get('Volume').value.replace(/\,/g, '');
    saver = parseFloat(saver);

    this.co2value1 = (this.productionfuel * saver) / 1000;  // Calculate co2value1 first
    this.sumtotal += this.co2value1;

    this.newAttribute = {
      BuildingName: this.electtricform.get('BuildingName').value,
      Buildingaddress: this.electtricform.get('Buildingaddress').value,
      Landmark: this.electtricform.get('Landmark').value,
      Country: dataArr[0]['Country'],
      Volume: this.electtricform.get('Volume').value,
      Units: this.electtricform.get('Units').value,
      tC02e: (this.co2value1).toFixed(2),
    };
    this.lookupdtl.push(this.newAttribute);
    console.log(this.lookupdtl);
    this.electtricform.reset();
  }
}

addFieldValue1() {
  this.newAttribute1 = {
    uno: '',
    uno1: '',
    uno2: '',
    uno3: '',
    uno4: '',
    uno8: '',
    uno9: '',
    uno5: this.lookupdtl1.reduce((acc, val) => acc + val.Emi, 0),
    gwpSelected: false // Add the gwpSelected property with the initial value of false
  };
  this.lookupdtl1.push(this.newAttribute1);
  this.reltypeothers = '';
}

    deleteQ102a3(i){
      this.lookupdtl1.splice(i,1);
    }
    deleteQ102a(i){
      this.lookupdtl.splice(i,1);
      this.electtricform.reset();
    }
    DataTypeChange(event){
      console.log(event);
      
     
      if(event == 'electric'){
        this.electric=true;
        this.heat=false;
        this.addFieldValue();
        if(this.lookupdtl.length > 1){
          this.deleteQ102a(this.lookupdtl.length-1)
        }
      }
      if(event == 'heat'){
        this.electric=false;
        this.heat=true;
        this.addFieldValue1();
        if(this.lookupdtl1.length > 1){
          this.deleteQ102a3(this.lookupdtl1.length-1)
        }
      }}
      onInputChangecountry1(value: string) {
        this.filteredList7 = this.country.filter(
          (item) =>
              item.Country.toLowerCase().indexOf(value.toLowerCase()) !==
              -1
      );
      }
      onOptionSelectedrelatab2(i, value) {
        var empty = '';
        this.onInputChangecountry1(empty);
    }
   
}
