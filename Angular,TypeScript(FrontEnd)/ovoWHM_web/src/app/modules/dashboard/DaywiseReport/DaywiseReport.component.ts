import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl,FormBuilder } from '@angular/forms';
import * as moment from 'moment';
declare var $: any;
import { DashboardService } from '../dashboard.service';
import { DatePipe } from '@angular/common';
import { ProductService } from 'app/modules/Masters/Product/product.service';
import { AuthService } from 'app/core/auth/auth.service';
import { WarehouseService } from 'app/modules/Masters/WareHouse/warehouse.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
  BsDatepickerConfig,
  BsDatepickerModule,
} from 'ngx-bootstrap/datepicker';
// import {NgSelectModule, NgOption} from '@ng-select/ng-select';
@Component({
  selector: 'app-DaywiseReport',
  templateUrl: './DaywiseReport.component.html',
  styleUrls: ['./DaywiseReport.component.css']
})
export class DaywiseReportComponent implements OnInit {


  custonDropdown = new FormControl();
  filterControl = new FormControl();
  filteredOptions: Observable<Array<any>>;





  filterForm: FormGroup;
  filterForm2: FormGroup;
  WareHouseData;
  searchString='';
  orgname1;
  AvailableStockDtl:any = [];
  initialLoad:any = [];
  stackdetails;
  selectedUser: any;
  ProductsStacks
  customerList:any=[] ;
  filterdOptions: Observable<string[]>;
  DashBoardData;
  PackingDetails;
  Showall:Boolean;
  maxDate;
  keyword:any='Name'
  Stackdetails:boolean = false;
  IsNoAvailableStock:boolean = false;

ProductName;
  constructor(
    private WarehouseService :WarehouseService,
    private AuthService:AuthService,
    private _datepipe: DatePipe, 
   private ProductService:ProductService,
    private fb_: FormBuilder,
    private DashboardService:DashboardService,
  ) { 
    
    this.ProductService.getProductDetails().subscribe(Data=>{
      this.customerList = Data;
      console.log(Data)
    })
 

  }

  ngOnInit() {
    this.ProductService.getProductDetails().subscribe(Data=>{
      this.customerList = Data;

      this.filteredOptions = this.filterControl.valueChanges.pipe(
        startWith(''),
        map((value: string) => {
          
          this.customerList.forEach((option:any) => {
            console.log(option)
            option.Name
              .toLocaleLowerCase()
              .includes(value.toLowerCase());
          });
          return this.customerList;
        })
      );
      
    })





    this.WarehouseService.getwarehousedetailsById(this.AuthService.user.warehouseid).subscribe(res=>{
      this.WareHouseData = res;
      if(this.WareHouseData.length ===1){
        this.Showall = true;
      }
          })
    this.filterForm = this.fb_.group({
      SummaryDate: [],
      ToDate: [],
      WareHouseId:[]});
      this.filterForm2 = this.fb_.group({
        SummaryDate: [],
        ToDate: [],
        WareHouseId:[]});

        this.filterForm.get('WareHouseId').setValue(this.AuthService.user.warehouseid)

        this.filterForm2.get('WareHouseId').setValue(this.AuthService.user.warehouseid)
        const FromDate = new Date()
    FromDate.setDate(FromDate.getDate() - 1);
    this.filterForm2.get('SummaryDate').setValue(FromDate)
    this.filterForm.get('SummaryDate').setValue(FromDate)
    const FromDate1 = this._datepipe.transform(FromDate, 'yyyy-MM-dd');
    this.maxDate = FromDate1;
    this.DashboardService.getPackingMaterialBalanceSheet(this.AuthService.user.warehouseid,FromDate1,FromDate1).subscribe(res=>{
      this.PackingDetails = res;
     
      console.log(res)
    })
    this.DashboardService.getStockBalanceSheet(this.AuthService.user.warehouseid,FromDate1,FromDate1).subscribe(res=>{
      this.DashBoardData = res;
  
    })
  }


  filtercountry(name: string) {
    return this.customerList.filter(country => 
      country.Name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }



  onProductChange(Event){
  this.initialLoad = [{}]
    console.log(Event)
 
    let dataArr = this.customerList.filter(x => x.Id == Event);
    this.orgname1 = dataArr[0].Name;
    this.ProductName =dataArr[0].Name;
  
    this.Stackdetails = false;
    const ProductId = Event;
    this.DashboardService.GetWareHouseAvailableStocksByProductIdWarehouseId(ProductId,this.AuthService.user.warehouseid).subscribe(res=>{
    this.AvailableStockDtl = res;
   if(this.AvailableStockDtl.length ===0){
    this.IsNoAvailableStock = true;
   }
   else {
    this.IsNoAvailableStock = false;
   }
  const Data = res[0];
  
    })
  
  }
  ShowProducts(Id,WId){

    this.DashboardService.GetProductDtlByProductIdWarehouseId(Id,WId).subscribe(res=>{
    
      this.ProductsStacks = res;
      this.Stackdetails = true;
      
    })
    this.AvailableStockDtl.map(m=>{
    
  
      if(m.WareHouseId===WId){
        document.getElementById('btn'+m.WareHouseId).style.backgroundColor = 'rgb(252, 183, 19)'; 
      }
      else {
        document.getElementById('btn'+m.WareHouseId).style.backgroundColor = 'rgb(253, 216, 129)';  
      }
    
      
    })
  }
  getDateRange(Value){

    
  const Date = Value.SummaryDate;
 
  const warehouseid = Value.WareHouseId;
    const FromDate = this._datepipe.transform(Date, 'yyyy-MM-dd')
   
  
   
    
    this.DashboardService.getStockBalanceSheet(warehouseid,FromDate,FromDate).subscribe(res=>{
      this.DashBoardData = res;
   
    })
  

   
  }

  getDateRange1(Value){

    
    const Date = Value.SummaryDate;
   
    const warehouseid = Value.WareHouseId;
      const FromDate = this._datepipe.transform(Date, 'yyyy-MM-dd')
     
    
  
      
      this.DashboardService.getPackingMaterialBalanceSheet(warehouseid,FromDate,FromDate).subscribe(res=>{
        this.PackingDetails = res;
     
      })
     
  
     
    }
}
