import { Component, OnInit,OnDestroy, ViewChild, ViewEncapsulation ,ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { StackviewbarcodeComponent } from './stackviewbarcode/stackviewbarcode.component';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, takeUntil } from 'rxjs';
import { StackbarcodeService } from './stackbarcode.service';
import { BarcodedetailsComponent } from './barcodedetails/barcodedetails.component';
import { Stackdetails,Stackitems } from './stack.type';
import * as PDF417 from 'pdf417-generator';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';


@Component({
  selector: 'app-stackbarcode',
  templateUrl: './stackbarcode.component.html',
  styleUrls: ['./stackbarcode.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: fuseAnimations
})

export class StackbarcodeComponent implements OnInit {
  selectedStackItem: Stackitems | null = null;
  StackItems$: Observable<Stackdetails[]>;
  isLoading: boolean = false;
  barcodeId;
  Stackbarcodedetails:any;
  cprintcode2;
  barcodescreen:boolean =false;
  barcodescreen3:boolean=false;
  barcodescreen0;boolean=false;
  searchInputControl: FormControl = new FormControl();
  columnsToDisplay: string[] = ['WareHouseId','Name', 'Area', 'Location','IsActive', 'UpdatedDate','URL'];
  StackdataSource = new MatTableDataSource<Stackdetails>();
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(private _Router:Router,private _stackservice:StackbarcodeService, private _matDialog: MatDialog, private _AuthService:AuthService) { }
  c1 = `this.barcodeId[0].URL`
  
  c2=`this.barcodeId[0].URL`
  code1 =`this.barcodeId[0].URL`
  
  code2=`this.barcodeId[0].URL`
  code3=`this.barcodeId[0].URL`
  printcodes:any


  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
      if (this.StackdataSource) {
          this.StackdataSource.paginator = value;
      }
  }

  @ViewChild(MatSort, { static: false })
  set sort(value: MatSort) {
      if (this.StackdataSource) {
          this.StackdataSource.sort = value;
      }
  }

  ngOnInit(): void {
    console.log(this._AuthService.user)
    this.StackItems$ = this._stackservice.StackItems$;
 
        
         
    
        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges.pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(300),
                distinctUntilChanged(),
                map((query) => {
                    this.StackdataSource.filter = query.trim().toLowerCase();
                })
            ).subscribe();


            this._stackservice.GetstackDtlByWareHouseId(this._AuthService.user.warehouseid).subscribe(data =>{
       



              
              this.StackdataSource.data=data;
          
              
            })

  }
  ngAfterViewChecked(){
    // var canvas = document.getElementById("barcode")

    // PDF417.draw(this.code1, canvas)
    // console.log(this.code1);
    

    // var canvas = document.getElementById("bar")

    // PDF417.draw(this.code2, canvas)
    // console.log(this.code2);
  }


refreshes() {
    // //   this._route.navigateByUrl('/dashboard', { skipLocationChange: true }).then(() =>
    //   this._route.navigate(["/masters/lookup"]));
    // }
  
     this._Router.navigate(["/Stackbarcode"]);
  }
createStack(): void {
  this.onEditStack(null);
}

onEditStack(Id:number): void {
  // Open the dialog
  const dialogRef = this._matDialog.open(BarcodedetailsComponent, {
      autoFocus: false,
      data : { Id },  disableClose: true
  });

  dialogRef.afterClosed()
      .subscribe((result) => {
          if(result) {
            this._stackservice.GetstackDtlByWareHouseId(this._AuthService.user.warehouseid).subscribe(data =>{
       



              
              this.StackdataSource.data=data;
          
              
            })
              // this._stackservice.GetstackDtlByWareHouseId(this._AuthService.user.warehouseid).subscribe(data =>{
              //   const Data1 =  data['Stacks']
              //   // this.StackdataSource.data = Data1;
              
                
              // })
          }
      }); 
}

// Showbarcode(Url:any){
//     const dialogRef = this._matDialog.open(StackviewbarcodeComponent ,{
//         autoFocus: false,
//         data : { Url},  disableClose: true
//     });
  
//     dialogRef.afterClosed()
//         .subscribe((result) => {
//             if(result) {
//                 this.refresh();
                
//             }
//         }); 

// }

printPage() {

    window.print();

  }

toggleStatus(Id:number) {
    this._stackservice.getstackdetailsdetailsById(Id).subscribe((data) => {
        this.barcodeId = data;
        // var Printcodenumber=this.printcodes
    this.printcodes =  this.barcodeId[0].Printcode
        // this.cprintcode2=this.barcodeId[0].Printcode;
   
     
        var canvas = document.getElementById("barcode")
        PDF417.draw(this.barcodeId[0].URL, canvas)
        console.log(this.code1);
        var canvas = document.getElementById("barcode2")
        PDF417.draw(this.barcodeId[0].URL, canvas)
       
        var canvas = document.getElementById("barcode3")
        PDF417.draw(this.barcodeId[0].URL, canvas)
    });
    
    this.barcodescreen3 = true;
    this.barcodescreen0=true;
    this.barcodescreen =false;
  }
  toggleStatus2(Id:number) {
    this._stackservice.getstackdetailsdetailsById(Id).subscribe((data) => {
        this.barcodeId = data;
        // var Printcodenumber=this.printcodes
    this.printcodes =  this.barcodeId[0].Printcode
        // this.cprintcode2=this.barcodeId[0].Printcode;
   
     
        var canvas = document.getElementById("bar1")
        PDF417.draw(this.barcodeId[0].URL, canvas)
        console.log(this.code1);
        var canvas = document.getElementById("bar2")
        PDF417.draw(this.barcodeId[0].URL, canvas)
       
       
    });
       
     
    this.barcodescreen = true;
    this.barcodescreen0=true;
    this.barcodescreen3= false;
  }

ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }


}