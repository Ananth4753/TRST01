import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as PDF417 from 'pdf417-generator';
import { Router } from '@angular/router';
import { ProductviewService } from '../../productview/productview.service';
import { Observable } from 'rxjs';
import { productviewdetails } from '../../productview/productview.type';


@Component({
  selector: 'app-RepackingView',
  templateUrl: './RepackingView.component.html',
  styleUrls: ['./RepackingView.component.scss']
})
export class RepackingViewComponent implements OnInit {

  constructor(private route:Router,  @Inject(MAT_DIALOG_DATA) private _data: { Url: any} ,private matdiaref:MatDialogRef<RepackingViewComponent>,private  _productviewService:ProductviewService){}
  productbarcodeItems$: Observable<productviewdetails[]>;

  Code 
 
     ngOnInit(): void {
 this.Code = this._data.Url
       var canvas = document.getElementById("barcode")
 
          PDF417.draw(this.Code, canvas)

          this.productbarcodeItems$ = this._productviewService.productbarcodeItem$;
          console.log(
              this.productbarcodeItems$ );
     }    
 
     onClose(){
 
       this.matdiaref.close(false);    }
       printPage(){
        window.print()
       }

}
