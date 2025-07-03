import { Component, OnInit,NgZone, ViewEncapsulation,ViewChild,ElementRef} from '@angular/core';
import { WarehouseService } from '../Masters/WareHouse/warehouse.service';
import { AuthService } from 'app/core/auth/auth.service';
import { FormGroup,Validators,FormControl,FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { ProductService } from '../Masters/Product/product.service';
import * as  jQuery from 'jquery';
declare var $: any;
import * as XLSX from 'xlsx';
import { MatAutocomplete } from '@angular/material/autocomplete';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";
import { DashboardService } from './dashboard.service';
import { DatePipe } from '@angular/common';
import {
  BsDatepickerConfig,
  BsDatepickerModule,
} from 'ngx-bootstrap/datepicker';



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @ViewChild('TABLE') table: ElementRef;
  ShowDetails:boolean= true;
  isLoading:boolean = true;
  DashBoardData;
  filterForm: FormGroup;
  filterForm1:FormGroup;
  SelectMonthChart:FormGroup;
  searchString='';
  orgname1;
  Stackdetails:boolean = false;
  selectedUser: any='';
  customerList ;
  filterdOptions = [];
  PackingMaterils;
  ProductsStacks;
  AvailableStockDtl;
  ProductsData=[];
  SalesData=[];
  DamageData=[];
  LeakageData=[];
  CalenderData=[];
  YearsData;

  WarehouseIdForExel;
  FromDateForExcel;
  ToDateForExel;

  WarehouseIdForExel1;
  FromDateForExcel1;
  ToDateForExel1;

  WarehouseIdForExel2;
  FromDateForExcel2;
  ToDateForExel2;



  AutoId:any='';
  keyword = 'Name';
  constructor(
    private WarehouseService :WarehouseService,
    private AuthService:AuthService,
    private _datepipe: DatePipe, 
    private ProductService :ProductService,  
    private fb_: FormBuilder,
    private DashboardService:DashboardService,
    
    ) { 
     
    }
WareHouseData;
WareHouseTotal;
stackdetails;
PackingDetails
CategoertCount
CalenderDta;
monthNames;
MonthwiseDates=[];
MonthwiseProduct=[];
MonthwiseSales=[];
MonthwiseDamage=[];
initialLoad:any = [];
value:any={
  WareHouseId:null,FromDate:'2023-08-01',ToDate :'2023-08-30'
}
@ViewChild('auto') auto: MatAutocomplete;
showDropdown:boolean=true
  ngOnInit(): void {
  
    this.WarehouseIdForExel = this.AuthService.user.warehouseid
    const FromDate = new Date();
    FromDate.setDate(FromDate.getDate() - 6);
    const FromDate1 = this._datepipe.transform(FromDate, 'yyyy-MM-dd');
    const ToDate = new Date()
    ToDate.setDate(ToDate.getDate());
    const ToDate1 = this._datepipe.transform(ToDate, 'yyyy-MM-dd');

this.FromDateForExcel = FromDate1;
this.ToDateForExel = ToDate1
this.FromDateForExcel1 = FromDate1;
this.ToDateForExel1 = ToDate1;

this.FromDateForExcel2 = FromDate1;
this.ToDateForExel2 = ToDate1

this.WarehouseIdForExel1 = this.AuthService.user.warehouseid
this.WarehouseIdForExel2 = this.AuthService.user.warehouseid

 const currentmonth = FromDate.getMonth();
 const currentyear = FromDate.getFullYear();
 this.filterForm = this.fb_.group({
  FromDate: [],
  ToDate: [],
  WareHouseId:[]});

  this.filterForm1 = this.fb_.group({
    FromDate2: [],
    ToDate2: [],
    WareHouseId2:[]});

    this.SelectMonthChart = this.fb_.group({
      Month: [],
      WareHouseId:[],
      Year:[]});
 const month1 = currentmonth;

  let Currentmonth = month1;
 
  const firstDay = new Date(currentyear,Currentmonth,1);
  
  const lastDay = new Date(currentyear,Currentmonth+1,0);
  const FirstDay = this._datepipe.transform(firstDay, 'yyyy-MM-dd');
  const LastDay = this._datepipe.transform(lastDay, 'yyyy-MM-dd');




this.SelectMonthChart.get("Month").setValue(month1+1)
this.SelectMonthChart.get("Year").setValue(currentyear)
this.SelectMonthChart.get("WareHouseId").setValue('null')

this.DashboardService.getDashboardDataForBarChat(FirstDay,LastDay,null).subscribe(res=>{
  let dates;

dates = res



dates.map((item,i)=>{

this.MonthwiseDates.push("Week" +' - '+ (i+1) + "\n"  +'('+ (item.FirstDayofWeek +  ' - ' + item.LastDayOfWeek ) + ')');
this.MonthwiseProduct.push(item.PerDayProduct);

this.MonthwiseSales.push(item.PerDaySales);
this.MonthwiseDamage.push(item.DamageQty);



})
this.chartOptions = {
  series: [
    {
      name: "Production",
      data: this.MonthwiseProduct
    },
    {
      name: "Sales",
      data:this.MonthwiseSales
    },
    {
      name: "Damages",
      data:this.MonthwiseDamage
    }
  ],
  chart: {
    type: "bar",
    height:350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "35%",
    
    }
  },
  dataLabels: {
    enabled: false,
    style: {
      colors: ['#FCB713', '#3CB371', '#9C27B0']
    }
  },
  stroke: {
    show: true,
    width:2,
    colors: ["transparent"]
  },
  
  xaxis: {
    categories:this.MonthwiseDates,
  },
  yaxis: {
    title: {
      text: "(thousands)"
    }
  },
  fill: {
  
    colors: ['#FCB713', '#3CB371', '#4169E1']
  },
  tooltip: {
    enabled: true,
    shared: false,
   
    y: {
  
      formatter: function(val) {
        
        return  val + ""
      }
    }
  },
  legend: {
    show: true,
    showForSingleSeries: false,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: 'bottom',
    horizontalAlign: 'center', 
    floating: false,
    fontSize: '16px',
    fontFamily: 'Helvetica, Arial',
    fontWeight: 400,
    formatter: undefined,
    inverseOrder: false,
    width: undefined,
    height: undefined,
    tooltipHoverFormatter: undefined,
    customLegendItems: [],
    offsetX: 0,
    offsetY: 0,
    labels: {
       colors: ['#FCB713', '#3CB371','#4169E1'],
        useSeriesColors: false
    },  markers: {
      width: 12,
      height: 12,
      strokeWidth: 0,
      strokeColor: '#FCB713',
      fillColors:['#FCB713', '#3CB371','#4169E1'],
      radius: 12,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0
  },
  
  
    onItemHover: {
        highlightDataSeries: true
    },
  }
  }
  
})



    this.monthNames = [
    { Id:1,Name:"January"},
    { Id:2,Name:"February"},
    { Id:3,Name:"March"},
    { Id:4,Name:"April"},
    { Id:5,Name:"May"},
    { Id:6,Name:"June"},
    { Id:7,Name:"July"},
    { Id:8,Name:"August"},
    { Id:9,Name:"September"},
    { Id:10,Name:"October"},
    { Id:11,Name:"November"},
    { Id:12,Name:"December"}
    ];
    this.YearsData = [
      2022,2023,2024,2025
     
      ];


this.ProductService.getProductDetails().subscribe(Data=>{
  this.customerList = Data;
})
this.DashboardService.GetTotalDashboard().subscribe(data=>{
    const TotalStocks  = data[0][0]
    this.WareHouseTotal = TotalStocks.TotalAvailableStock;
    this.CategoertCount = data[1];
    this.PackingMaterils = data[2]
    this.CategoertCount.TotalStock ;  
})
this.DashboardService.getDashboardData(FromDate1,ToDate1,this.AuthService.user.warehouseid).subscribe(data=>{
      this.DashBoardData = data;
      $(document).ready(function() {
        $("#datatable").DataTable({
          order: [
           
            [2, 'desc'],  
            [3, 'desc'],  
            
           
          ] 
        })})
    })
      this.filterForm.get('FromDate').setValue(FromDate1)
      this.filterForm.get('ToDate').setValue(ToDate1)
      this.filterForm1.get('FromDate2').setValue(FromDate1)
      this.filterForm1.get('ToDate2').setValue(ToDate1)

   this.WarehouseService.getwarehousedetailsById(this.AuthService.user.warehouseid).subscribe(res=>{
this.WareHouseData = res;


    })

    this.DashboardService.getStockBalanceSheet(this.AuthService.user.warehouseid,FromDate1,ToDate1).subscribe(res=>{
      this.stackdetails = res;
    

    
        // this.stackdetails = res;
    })



    this.DashboardService.getPackingMaterialBalanceSheet(this.AuthService.user.warehouseid,FromDate1,ToDate1).subscribe(res=>{
    this.PackingDetails = res;
  
    })

}

ExportTOExcel() {
  this.DashboardService.getStockBalanceSheet(this.WarehouseIdForExel,
    this.FromDateForExcel ,this.ToDateForExel).subscribe((data:any)=>{

const ExcelData  = data;
const ExcelData1 = []

// ExcelData.forEach(x=>{
//   ExcelData1.push({Name:x.Name,StockIn:x.StockIn,StockOut:x.StockOut})

// });

console.log( ExcelData1)
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(ExcelData)
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  XLSX.writeFile(wb, 'ProductStock_BarCode.xlsx');
  })
}

ExportTOExcel1() {
  this.DashboardService.GetWareHousePackingMaterialStockReporitngByWarehouseId(this.WarehouseIdForExel1,
  this.FromDateForExcel1 ,this.ToDateForExel1).subscribe((data:any)=>{
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data)
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, 'PackingStock_BarCode.xlsx');
  })
}


ExportTOExcel2() {

  this.DashboardService.getDashboardData(this.FromDateForExcel2,this.ToDateForExel2,this.WarehouseIdForExel2).subscribe((data:any)=>{
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data)
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, 'OverallStock_BarCode.xlsx');
  })
}





getMothFilter(Month){
this.MonthwiseDates = []
this.MonthwiseProduct =[]
this.MonthwiseSales =[]
this.MonthwiseDamage =[]
const month1 = Month.Month;
const warehouseid1 = Month.WareHouseId;
  let Currentmonth = month1-1;
  
  const firstDay = new Date(2023,Currentmonth,1);
  
  const lastDay = new Date(2023,Currentmonth+1,0);
  const FirstDay = this._datepipe.transform(firstDay, 'yyyy-MM-dd');
  const LastDay = this._datepipe.transform(lastDay, 'yyyy-MM-dd');
  
  this.DashboardService.getDashboardDataForBarChat(FirstDay,LastDay,warehouseid1).subscribe(res=>{
    let dates;
  
dates = res

dates.map((item,i)=>{

this.MonthwiseDates.push("Week" +' - '+ (i+1) + '\n'  +'('+ (item.FirstDayofWeek +  ' - ' + item.LastDayOfWeek ) + ')');
this.MonthwiseProduct.push(item.PerDayProduct);
this.MonthwiseSales.push(item.PerDaySales);
this.MonthwiseDamage.push(item.DamageQty);
})
this.chartOptions = {
  series: [
    {
      name: "Production",
      data: this.MonthwiseProduct
    },
    {
      name: "Sales",
      data:this.MonthwiseSales
    },
    {
      name: "Damages",
      data:this.MonthwiseDamage
    }
  ],
  chart: {
    type: "bar",
    height:350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "35%",
    
    }
  },
  dataLabels: {
    enabled: false,
    style: {
      colors: ['#FCB713', '#3CB371', '#9C27B0']
    }
  },
  stroke: {
    show: true,
    width:2,
    colors: ["transparent"]
  },

  xaxis: {
    categories:this.MonthwiseDates,
  
  },
  yaxis: {
    title: {
      text: "(thousands)"
    }
  },
  fill: {
  
    colors: ['#FCB713', '#3CB371', '#4169E1']
  },
  
  tooltip: {
    y: {

      formatter: function(val) {
        return  val + ""
      }
    }
  },
  legend: {
    show: true,
    showForSingleSeries: false,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: 'bottom',
    horizontalAlign: 'center', 
    floating: false,
    fontSize: '16px',
    fontFamily: 'Helvetica, Arial',
    fontWeight: 400,
    formatter: undefined,
    inverseOrder: false,
    width: undefined,
    height: undefined,
    tooltipHoverFormatter: undefined,
    customLegendItems: [],
    offsetX: 0,
    offsetY: 0,
    labels: {
       colors: ['#FCB713', '#3CB371','#4169E1'],
        useSeriesColors: false
    },  markers: {
      width: 12,
      height: 12,
      strokeWidth: 0,
      strokeColor: '#FCB713',
      fillColors:['#FCB713', '#3CB371','#4169E1'],
      radius: 12,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0
  },
  
 
    onItemHover: {
        highlightDataSeries: true
    },
}
}
  })

}
getDateRange(Value){
 
  
const Date1 = Value.FromDate;
const Date2 = Value.ToDate;
const warehouseid = Value.WareHouseId;
this.WarehouseIdForExel = Value.WareHouseId;
this.WarehouseIdForExel2 = Value.WareHouseId;
  const FromDate = this._datepipe.transform(Date1, 'yyyy-MM-dd')
  const ToDate = this._datepipe.transform(Date2, 'yyyy-MM-dd')

  this.FromDateForExcel =  FromDate;
  this.ToDateForExel = ToDate;

    this.FromDateForExcel2 =  FromDate;
  this.ToDateForExel2 = ToDate;
  this.DashboardService.getStockBalanceSheet(warehouseid,FromDate,ToDate).subscribe(res=>{
    this.stackdetails = res;

  
  
  })

  this.DashboardService.getDashboardData(FromDate,ToDate,warehouseid).subscribe(data=>{
    this.DashBoardData = data;
 



    
  this.DashBoardData.map((Item,i)=>{})
})
 
}


toggleDropdown(event: Event): void {
  event.stopPropagation(); 

  // if (this.autoTrigger.panelOpen) {
  //   this.autoTrigger.closePanel(); 
  // } else {
  //   this.autoTrigger.openPanel(); 
  // }
}

getDateRange1(Value){
  const Date1 = Value.FromDate2;
  const Date2 = Value.ToDate2;
  const warehouseid = Value.WareHouseId2;
  this.WarehouseIdForExel1 = Value.WareHouseId2
    const FromDate = this._datepipe.transform(Date1, 'yyyy-MM-dd')
    const ToDate = this._datepipe.transform(Date2, 'yyyy-MM-dd')
this.FromDateForExcel1 = FromDate;
this.ToDateForExel1 = ToDate;
    this.DashboardService.getPackingMaterialBalanceSheet(warehouseid,FromDate,ToDate).subscribe(res=>{
      this.PackingDetails = res;

   
  
    })
}


selectEvent(item:any) {
  this.AutoId=item;
  
 
   } 




IsNoAvailableStock:boolean = false;
ProductName;
onProductChange(Event){
  this.initialLoad = [{}]
  let dataArr = this.customerList.filter(x => x.Id == Event);
  this.orgname1 = dataArr[0].Name;
  this.ProductName =dataArr[0].Name;

  this.Stackdetails = false;
  const ProductId = Event;
  this.DashboardService.GetWareHouseAvailableStocksByProductId(ProductId).subscribe(res=>{
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
getTitle(bookId: any) {
       
      
        
  return this.filterdOptions.find(book => book.Name === bookId).Name;

}
filterUsers() {

  this.filterdOptions = this.customerList.filter(
    item => item.Name.toLowerCase().includes(this.selectedUser.toLowerCase())
  );
  
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
}
