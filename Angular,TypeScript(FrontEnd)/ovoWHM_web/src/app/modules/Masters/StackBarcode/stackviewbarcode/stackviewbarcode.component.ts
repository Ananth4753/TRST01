import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import * as PDF417 from 'pdf417-generator';

import { Router } from '@angular/router';



@Component({
  selector: 'app-stackviewbarcode',
  templateUrl: './stackviewbarcode.component.html',
  styleUrls: ['./stackviewbarcode.component.scss']
})
export class StackviewbarcodeComponent implements OnInit {

  constructor(private route:Router,  @Inject(MAT_DIALOG_DATA) private _data: { Url: any} ,private matdiaref:MatDialogRef<StackviewbarcodeComponent>){}

 Code 

    ngOnInit(): void {
this.Code = this._data.Url
      var canvas = document.getElementById("barcode")
         PDF417.draw(this.Code, canvas)



 

    }    

    onClose(){

      this.matdiaref.close(false);    }

      printPage() {

        window.print();
    
      }
}
