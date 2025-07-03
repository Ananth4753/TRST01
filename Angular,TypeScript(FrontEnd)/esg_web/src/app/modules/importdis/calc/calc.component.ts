import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ImportdisService } from '../importdis.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  listofarrayvalues:any
  ListForm:FormGroup
  inputValue = 0;
  inputUnit:any;
  convertedValue = 0;
  drop:any;
  liquidform:FormGroup
   constructor(public dialog: MatDialog,private is :ImportdisService,private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) private _data: { data },private router:Router,public matDialogRef:MatDialogRef<CalcComponent>) { }
 screen:any;
 
   ngOnInit() {
    this.liquidform = this.fb.group({
      Id:[],
      NoofUnits: [],
      Units:[],
      mega:[],
      IsActive: [1],
      CreatedDate: [new Date()],
      CreatedByUserId:[1] ,
      UpdatedDate: [new Date()],
      UpdatedByUserId: [1]
     })
     this.is.getLookupDetailsByHdrId(26).subscribe((Data)=>{
      this.drop=Data;
    })
   }
   ProductChange(event){
    this.inputUnit=event;
       }
       convert() {
        let num =this.liquidform.get("NoofUnits").value
        console.log(num);
        
         if (this.inputUnit == 'Cubic meter') {
          var saver
          saver=num.replace(/\,/g,''); // 1125, but a string, so convert it to number
          saver=parseFloat(saver);
          this.convertedValue=saver*(0.001);
           console.log(this.convertedValue);
         } 
         if(this.inputUnit == 'US liquid gallon') {
          var saver
          saver=num.replace(/\,/g,''); // 1125, but a string, so convert it to number
          saver=parseFloat(saver);
          this.convertedValue=saver*0.0000037854;
          console.log(this.convertedValue);
        }  if(this.inputUnit == 'Liter') {
          var saver
          saver=num.replace(/\,/g,''); // 1125, but a string, so convert it to number
          saver=parseFloat(saver);
          this.convertedValue=saver*0.000001;
           console.log(this.convertedValue);
        } if(this.inputUnit == 'Milliliter') {
          var saver
          saver=num.replace(/\,/g,''); // 1125, but a string, so convert it to number
          saver=parseFloat(saver);
          this.convertedValue=saver*0.000000001;
           console.log(this.convertedValue);
        }  if(this.inputUnit == 'Cubit foot') {
          var saver
          saver=num.replace(/\,/g,''); // 1125, but a string, so convert it to number
          saver=parseFloat(saver);
          this.convertedValue=saver*0.000028317;
           console.log(this.convertedValue);
        }
         if(this.inputUnit == 'Fluid Ounce') {
          var saver
          saver=num.replace(/\,/g,''); // 1125, but a string, so convert it to number
          saver=parseFloat(saver);
          this.convertedValue=saver*0.000000029574;
           console.log(this.convertedValue);
        }
         if(this.inputUnit == 'Cubic inch') {
          var saver
          saver=num.replace(/\,/g,''); // 1125, but a string, so convert it to number
          saver=parseFloat(saver);
          this.convertedValue=saver*0.0000000163873247182;
           console.log(this.convertedValue);
        }
        this.liquidform.get('mega').setValue(Math.round(this.convertedValue))
       }
       onClose(): void
       {
           this.matDialogRef.close(false);
       }
    
       onSave(){
        this.is.liquid=Math.round(this.convertedValue)
        this.matDialogRef.close(false);
       }
 }
 