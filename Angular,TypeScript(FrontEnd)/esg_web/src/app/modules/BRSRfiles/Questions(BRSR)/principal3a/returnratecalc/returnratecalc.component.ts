import { Component, OnInit,Inject,ChangeDetectorRef } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { SelectbrsrService } from 'app/modules/BRSRfiles/selectbrsr/selectbrsr.service';
@Component({
  selector: 'app-returnratecalc',
  templateUrl: './returnratecalc.component.html',
  styleUrls: ['./returnratecalc.component.scss']
})
export class ReturnratecalcComponent implements OnInit {
  ghForm:FormGroup
  constructor(public dialog: MatDialog,private fb:FormBuilder,private cdRef: ChangeDetectorRef,private sbrs:SelectbrsrService,
    @Inject(MAT_DIALOG_DATA) private _data: any,private router:Router,public matDialogRef:MatDialogRef<ReturnratecalcComponent>) { 
  }

  ngOnInit() {

    console.log(this._data);
    
    this.ghForm = this.fb.group({
      inp1:[],
      inp2: []
     })
  }
  onClose(): void
  {
      this.matDialogRef.close(false);
  }
  onCancel(): void
{
    // Close the dialog
    this.matDialogRef.close(false);
}
calculate1(){

  var a=(this.ghForm.get('inp1').value/this.ghForm.get('inp2').value)*100

  const roundedResult1 = a.toFixed(0); // Rounds the result to 2 decimal places

  const results321 = Number(roundedResult1).toLocaleString('en-IN');

  this.sbrs.workratecal1=results321

}

onSave(){
  this.calculate1()
this.matDialogRef.close(false);
}
}
