import { Component, OnInit, ChangeDetectorRef,ElementRef, ViewChild,Pipe, PipeTransform  } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { PackingSliphdrDetails,PackingSlipDetails } from './packingslip.type';
import { TABLE_PAGINATION_SIZE } from 'environments/environment';
import { PackingslipService } from './packingslip.service';
import { ProductService } from '../Product/product.service';

import * as  jQuery from 'jquery';
declare var $: any;
import { WarehouseService } from '../WareHouse/warehouse.service';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, takeUntil } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

import { MatSort } from '@angular/material/sort';
import { SkuService } from '../Sku/sku.service';
import * as XLSX from 'xlsx';

import Swal from 'sweetalert2';
import {
  
} from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';





declare var $: any;


@Component({
  selector: 'app-packingslip',
  templateUrl: './packingslip.component.html',
  styleUrls: ['./packingslip.component.scss'],
  animations: fuseAnimations

})
export class PackingslipComponent implements OnInit {
  addedit: boolean;
  LookupMasterForm: FormGroup;
  LookupMsterList: any[];
  lookupdtl: any
  filename;
  data;
  Indent:boolean = true;
  Fileselect:boolean=true;
  newattribute:any={};
  hdrid: any;
  access: object = {};
  ButtonDisabled:boolean = false;
  Edit:boolean = true;
  editit: boolean = false;
  editlookuphdr: any[];
  pageSize: number = TABLE_PAGINATION_SIZE;
  searchInputControl: FormControl = new FormControl();
  isLoading: boolean = false;
  Warehousedetails:any;
  productdetails:any;
  packslipdetaisbyuserid:any;
  status:any;
  fileToUpload: File = null;
  selectedUser: any;
  packingslip;
  searchString='';
  packingslipdatasource = new MatTableDataSource <PackingSliphdrDetails>();
  packingslipItems$: Observable<PackingSlipDetails[]>;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  skudetails: PackingSlipDetails[];
  skudetailsbyId: Object;
  Status: any;
  productArr: any[] = [];
  SkuArr:any[]=[];
  labelImport: ElementRef;
  formImport: FormGroup;
  matDialogRef: any;
WareData=[];
customerList ;
filterdOptions = [];
Submitbutton:boolean = true;
LoopIndex:number;
editbuttonshow:boolean=true;
  constructor(private WarehouseService:WarehouseService,     private _datepipe: DatePipe,private ps : ProductService  ,private _route: Router,private authService:AuthService,private packingslipservice:PackingslipService,private _formBuilder:FormBuilder,private chRef:ChangeDetectorRef,private _SkuService:SkuService) { 
    this.addedit = false;
    this.lookupdtl = [];
    this.formImport = new FormGroup({
      importFile: new FormControl('', Validators.required)
    });

  }

  @ViewChild(MatSort, { static: false })
  set sort(value: MatSort) {
      if (this.packingslipdatasource) {
          this.packingslipdatasource.sort = value;
      }
  }
  maxDate;
  ngOnInit(): void {

    this.packingslipservice.GetSalesOrdrsCustomers().subscribe(Data=>{
      console.log(Data)
      this.customerList = Data;
    })
    const ToadayDate = new Date()
    ToadayDate.setDate(ToadayDate.getDate());
    const Date1 = this._datepipe.transform(ToadayDate, 'yyyy-MM-dd');
    this.maxDate = Date1;

this._SkuService.getSKUDetails().subscribe(data=>{
this.SkuArr = data
  console.log(data);
  
})


this.WarehouseService.getwarehousedetails().subscribe(data=>{
const Data1=data;
Data1.filter((x) => {
        if(x.Id == this.authService.user.warehouseid){}
        else{this.WareData.push(x)}
      });})

    this.ps.getProductDetails().subscribe(res=>{
      this.productArr = res;
     
 
      
    })
    console.log(this.authService.user);
    
    this.LookupMasterForm = this._formBuilder.group({
      
      Id: [],
       Code: ['0'],
      InTransit: [true],
      IsInHouseTransfer: [true],
      LossInTransit: [false],
      LoseInTarnsitDetails: [],
      GRNConfirmation: [false],
      GRNDetails: [],
      DaysInTransit: [0],
      CustomerName:[],
      DeliveryAddress:[],
      DeliveryDate:[Validators.required],
      DeliveryWarehouseId:[],
      IsActive: [true],
      Status:[],
      Type:[Validators.required],
      WareHouseId:[],
      CreatedDate: [new Date()],
      CreatedByUserId: [this.authService.user.id],
      UpdatedDate: [new Date()],
      UpdatedByUserId: [this.authService.user.id]
  });
  
 this.LookupMasterForm.get('Status').setValue(9)

  this.WarehouseService.getwarehousedetailsById(this.authService.user.warehouseid).subscribe(data=>{
  
   
    this.Warehousedetails=data;
    if(this.Warehousedetails.length ===1){
      this.LookupMasterForm.get('WareHouseId').setValue(this.authService.user.warehouseid)
    }
    else {

    }
   
  
   
  
  });

  

  this.getLookupMasterDetail();

  this.packingslipservice.getwarehousedetailsById(this.authService.user.warehouseid).subscribe(data=>{
  
    this.Warehousedetails=data;
  

   });

      // Subscribe to search input field value changes




   this.packingslipservice.GetPackingSlipHDRdetailsByWareHouseId(this.authService.user.warehouseid).subscribe(res=>{
    this.packslipdetaisbyuserid=res;
    $(document).ready(function() {
      $('#datatable').DataTable({
          columnDefs: [
              { type: 'date', targets: [3, 4] } // Assuming "Created Date" is in column 3 and "Delivery Date" is in column 4
          ]
      });
  });
  
 
   
    
    
    
    
   });

   fetch( this.packslipdetaisbyuserid).then(res => res.json()) .then(json => { this.packslipdetaisbyuserid = json; }); 

   this.searchInputControl.valueChanges.pipe(
    takeUntil(this._unsubscribeAll),
    debounceTime(300),
    distinctUntilChanged(),
    map((query) => {
        this.packslipdetaisbyuserid.filter = query.trim().toLowerCase();
    })
).subscribe();

   this.packingslipservice.getproductDetails().subscribe(data=>{
  
    this.productdetails=data;
 
   });

//    this.packingslipservice.getPackingSlipDtlDetailsById('Id').subscribe(data =>{
// this.skudetailsbyId =data;
//    })

this._SkuService.getSKUDetails().subscribe(data =>{
  this.skudetailsbyId = data;
  console.log(this.skudetailsbyId);
  
})

   this.packingslipservice.GetLookupDtldetailsByCode('Packing Slip Status').subscribe(data=>{

 
 

  
    this.status=data;
    const StatusDefault = this.status.find(c => c.Name === 'Opened');

    console.log(StatusDefault.Id);
    
     this.LookupMasterForm.get('Status').setValue(StatusDefault.Id);
    console.log(data);
   })

   this.packingslipservice.GetLookupDtldetailsByCode('Packing Slip Type').subscribe(data=>{
  
    this.packingslip=data;
  
    console.log(data);
   })
}
Transitlose:boolean = false;
onChangeLossInTransit(e){

console.log(e.checked);
if(e.checked === true){

}
else {


}

}
GRN:boolean = false;
// onChangeGRNConfirmation(eve){
//   if(eve.checked === true){
//     this.GRN = true;

//   }
//   else {
//   this.GRN = false;
 
//   } 
//
PackingSlipDTlById(Id,i){
  
 this.editbuttonshow = false;
 this.LoopIndex = i;
console.log(Id,i);
this.packingslipservice.getPackingSlipDtlDetailsById(Id).subscribe(res=>{

  const ProductData = res[0];
  (<HTMLInputElement>document.getElementById("ProductId1")).value = ProductData['ProductId'];
  (<HTMLInputElement>document.getElementById("RequiredQty1")).value = ProductData['Quantity'];
 this.onProductId(ProductData['ProductId']);
 this.ButtonDisabled = true;

})
}
filterUsers() {
  this.filterdOptions = this.customerList.filter(
    item => item.CustomerName.toLowerCase().includes(this.selectedUser.toLowerCase())
  );
  
}
private _filterStates(value: string) {
  const filterValue = value.toLowerCase();

  return this.customerList.filter(state => state.CustomerName.toLowerCase().includes(filterValue));
}

getTitle(bookId: any) {
       
      
        
  return this.filterdOptions.find(book => book.CustomerName === bookId).CustomerName;

}

onBatchChange(Customer){

 let dataArr = this.customerList.filter(x => x.CustomerName == Customer)
this.LookupMasterForm.get('DeliveryAddress').setValue(dataArr[0].DeliveryAddress)
}
onBookChange(ob) {
  
  let selectedBook = ob.value;
 
  
if(selectedBook === 9){
  this.Indent = false;

}
else{
  this.Indent = true;
  this.LookupMasterForm.get('CustomerName').setValue(null)
  this.LookupMasterForm.get('DeliveryAddress').setValue(null)
}
}
onWareChange(Ab){
  let selectedWh = Ab.value;
  this.WarehouseService.getwarehousedetailsById(selectedWh).subscribe(data=>{
    const Data = data[0]
    this.LookupMasterForm.get('CustomerName').setValue(Data['ContactName'])
    this.LookupMasterForm.get('DeliveryAddress').setValue(Data['Address'])
    
    })
}



selectedId = '';
skudetailsbyId1
onProductId(Product){
  console.log(Product)
  this.productdetails.filter(e=>e.Id == Product)
 
  this.selectedId = Product

this._SkuService.getSKUByProductId(Product).subscribe(data =>{
  this.skudetailsbyId1 = data;

  ;
}) 
}
ChooseProduct(i){
 
  
  const SkuId = (<HTMLInputElement>document.getElementById("SkuId1")).value;
  const Qty = (<HTMLInputElement>document.getElementById("RequiredQty1")).value;
  // const Damage = (<HTMLInputElement>document.getElementById("DamageQty1")).value;
  // const Leakage = (<HTMLInputElement>document.getElementById("LeakageQty1")).value;

   (<HTMLInputElement>document.getElementById("Quantity" + i.toString())).value = Qty;
  //  (<HTMLInputElement>document.getElementById("Damage" + i.toString())).value = Damage;
  //  (<HTMLInputElement>document.getElementById("Leakage" + i.toString())).value = Leakage;
  this._SkuService.getSKUById(SkuId).subscribe(data =>{
  const SKUData = data[0];

  
  (<HTMLInputElement>document.getElementById("Product" + i.toString())).value = SKUData["ProductName"];
  (<HTMLInputElement>document.getElementById("Sku" + i.toString())).value = SKUData["Name"];
    
  }) 

  this.Submitbutton = false
}
onSkuId(Id,i){
this._SkuService.getSKUById(Id).subscribe(data=>{
const SKUData = data[0];


//(<HTMLInputElement>document.getElementById("Product" + i.toString())).value = SKUData["ProductId"];
});
}
  addFieldValue(){
    this.ButtonDisabled = true;
    this.editit = true;
    this.lookupdtl.push(this.newattribute);
    this.newattribute = {};
  }

  getLookupMasterDetail(){
    this.packingslipservice.getPackingSlipHdr().subscribe(res=>{
    this.LookupMsterList = res;
    console.log(res);
    
  
    // this.chRef.detectChanges();
  
    
     })
  }
  getLookupMstbyId(Id){ 
this.Edit = false;
    this.addedit = true;
    this.packingslipservice.getPackingSlipHdrDetailsById(Id)
      .subscribe(
        async (res) => {
          this.editlookuphdr = res[0];
         
        
          // this.LookupMasterForm.setValue(res[0]);

          this.LookupMasterForm.get('Id').setValue(this.editlookuphdr['Id'])
          this.LookupMasterForm.get('WareHouseId').setValue(this.editlookuphdr['WareHouseId'])
          this.LookupMasterForm.get('Code').setValue(this.editlookuphdr['Code'])
          this.LookupMasterForm.get('IsActive').setValue(this.editlookuphdr['IsActive'])
          this.LookupMasterForm.get('Type').setValue(this.editlookuphdr['Type'])
          this.LookupMasterForm.get('Status').setValue(this.editlookuphdr['Status'])
        //   if (this.editlookuphdr['Status'] == 'Placed') {
        //     this.Status = ['Placed', 'Confirmed', 'Cancel'];
        // } else if (status == 'Confirmed') {
        //     this.Status = ['Confirmed', 'Preparing for Dispatch', 'Cancel'];
        // } else if (status == 'Preparing for Dispatch') {
        //     this.Status = ['Preparing for Dispatch', 'On the way', 'Cancel'];
        // } else if (status == 'On the way') {
        //     this.Status = ['On the way', 'Delivered', 'Cancel'];
        // }
          this.LookupMasterForm.get('DeliveryDate').setValue(this.editlookuphdr['DeliveryDate'])
          this.LookupMasterForm.get('CustomerName').setValue(this.editlookuphdr['CustomerName'])
          this.LookupMasterForm.get('DeliveryAddress').setValue(this.editlookuphdr['DeliveryAddress'])
          this.LookupMasterForm.get('DaysInTransit').setValue(this.editlookuphdr['DaysInTransit'])
          this.LookupMasterForm.get('GRNConfirmation').setValue(this.editlookuphdr['GRNConfirmation'])
          this.LookupMasterForm.get('InTransit').setValue(this.editlookuphdr['InTransit'])
          this.LookupMasterForm.get('IsInHouseTransfer').setValue(this.editlookuphdr['IsInHouseTransfer'])
          this.LookupMasterForm.get('LossInTransit').setValue(this.editlookuphdr['LossInTransit'])
          
        })
    this.LookupDetails(Id);
  }
  onFileChange(evt: any) {


    const target: DataTransfer = <DataTransfer>(evt.target);

    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
if(target.files.length === 1){
this.Fileselect = false;
}
    this.filename=target.files[0].name

   

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {


     

      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary', cellDates:true, cellNF: false, cellText:false });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = XLSX.utils.sheet_to_json(ws,{raw:true, defval: '',dateNF: "yyyy-mm-dd"});

  
 
     


};

    reader.readAsBinaryString(target.files[0]);

  }

  removeCommon = (first, second) => {

    const spreaded = [...first, ...second];

    return spreaded.filter(el => {

       return !(first.includes(el) && second.includes(el));

    })

 };
LookupDetails(Id){
  this.editit = true;
  // this.tptid=Id; 
  this.packingslipservice.getPackingSlipDetailsByHdrId(Id).subscribe(
    (data) => {
      this.lookupdtl = data;

      console.log(data)

      // this.chRef.detectChanges();
    })
}


  onCreate(){

    const lookuphedaerdata: PackingSliphdrDetails = this.LookupMasterForm.value;
 
  

    if (lookuphedaerdata.Id === null) {
      lookuphedaerdata.CreatedDate = new Date();
      lookuphedaerdata.CreatedByUserId = this.authService.user.id;

  }
  lookuphedaerdata.UpdatedDate = new Date();
  lookuphedaerdata.UpdatedByUserId = this.authService.user.id;


  this.packingslipservice.createPackingSlipHdr(lookuphedaerdata).subscribe((result) => {
    this.hdrid = result;
   this.submitlookupdetails();

    this.addedit = false;
    this.getLookupMasterDetail();
 });


  }


 DtlUpload(){
  for(let i=0;i<this.data.length;i++)

  {
   
    
   
    let dataArr = this.productArr.filter(x => x.Name == this.data[i]["ProductName"])
     let dataArr1 = this.SkuArr.filter(x => x.Name == this.data[i]["SkuName"])

   
    
    
    var obj = {

      "Id" :null,
      "PackingSlipHDRId":this.hdrid.Id,
      "ProductId":dataArr[0]["Id"],
      "Quantity":this.data[i]["Quantity"],
      "SkuId":1,
      "BatchId":null,
      "DamageQty":this.data[i]["DamageQty"],
      "LeakageQty":this.data[i]["LeakageQty"],
      "IsActive":true,
      "CreatedDate":new Date(),
      "CreatedByUserId":1,
      "UpdatedDate":new Date(),
       "UpdatedByUserId":1,

      }




      this.packingslipservice.createPackingSlipDtl(obj).subscribe((res) => {
        this.refresh();
        this.packingslipservice.GetPackingSlipHDRdetailsByWareHouseId(this.authService.user.warehouseid).subscribe(res=>{
          this.packslipdetaisbyuserid=res;
      
          
          $(document).ready(function() {
            $('#datatable').DataTable({
                columnDefs: [
                    { type: 'date', targets: [3, 4] } // Assuming "Created Date" is in column 3 and "Delivery Date" is in column 4
                ]
            });
        });
         });
        
     });
      
  }

 }
  submitlookupdetails(){
  
   
    
    for (var i = 0; i < this.lookupdtl.length; i++) {

      if (this.lookupdtl[i].Id == undefined || this.lookupdtl[i].Id == null || this.lookupdtl[i].Id == '') {
        const tempdata1 = this.productdetails.filter(e=>e.Name == (<HTMLInputElement>document.getElementById("Product" + i.toString())).value);
        const recentdata1 = this.SkuArr.filter(e=>e.Name == (<HTMLInputElement>document.getElementById("Sku" + i.toString())).value);
 
        var intialPostData = 
        {
        Id: null,
        PackingSlipHDRId: this.hdrid.Id,
        ProductId:tempdata1[0].Id,
        SkuId:recentdata1[0].Id,
        Quantity: (<HTMLInputElement>document.getElementById("Quantity" + i.toString())).value,
        BatchId:null,
        LeakageQty:0,
        DamageQty:0,
        DtlStatus:null,
        LossDescription:null,
        IsActive: true,
       
        CreatedDate: new Date(),
        CreatedByUserId: this.authService.user.id,
        UpdatedDate: new Date(),
        UpdatedByUserId:this.authService.user.id,
      }
this.packingslipservice.createPackingSlipDtl(intialPostData).subscribe((res) => {
  this.refresh();
});
}
        else{
        const tempdata1 = this.productdetails.filter(e=>e.Name == (<HTMLInputElement>document.getElementById("Product" + i.toString())).value);
        const recentdata1 = this.SkuArr.filter(e=>e.Name == (<HTMLInputElement>document.getElementById("Sku" + i.toString())).value);
        var updatePostData = {
          Id: this.lookupdtl[i].Id,
          PackingSlipHDRId:this.lookupdtl[i].PackingSlipHDRId,
          // PackingSlipHDRId: (<HTMLInputElement>document.getElementById("PackingSlipHDRId" + i.toString())).value,
          ProductId:tempdata1[0].Id,
          SkuId:recentdata1[0].Id,
          Quantity: (<HTMLInputElement>document.getElementById("Quantity" + i.toString())).value,
          BatchId:null,
          LeakageQty:0,
          DamageQty:0,
          DtlStatus:null,
          LossDescription:null,
          IsActive: true,
          CreatedDate: new Date(),
          CreatedByUserId: this.authService.user.id,
          UpdatedDate: new Date(),
          UpdatedByUserId: this.authService.user.id,
        }
     
     
        
      this.packingslipservice.createPackingSlipDtl(updatePostData).subscribe((res) => {
        this.refresh();
        var Data = res['message']

        Swal.fire({
          title:Data ,
             confirmButtonColor: '#FCB713',
             icon: "success",
         
         });
         this.matDialogRef.close(true);
        
       
      });
    }


    }

  }

  onCancel(){
    this.LookupMasterForm.reset();
    this.Edit = true;
    this.lookupdtl = [];
    this.editit = false;

    this.packingslipservice.GetLookupDtldetailsByCode('Packing Slip Status').subscribe(data=>{
    this.status=data;
    const StatusDefault = this.status.find(c => c.Name === 'Received');

     this.LookupMasterForm.get('Status').setValue(StatusDefault.Id);

   })
   this.refresh()
  }
 
   refresh() {
    this.packingslipservice.GetPackingSlipHDRdetailsByWareHouseId(this.authService.user.warehouseid).subscribe(res=>{
      this.packslipdetaisbyuserid=res;
      
         
      $(document).ready(function() {
        $('#datatable').DataTable({
            columnDefs: [
                { type: 'date', targets: [3, 4] } // Assuming "Created Date" is in column 3 and "Delivery Date" is in column 4
            ]
        });
    });
  
      
      
      
      
     });
    this.Edit = true;
    this.packingslipservice.getPackingSlipDtl().subscribe((data) => {
this.skudetails=data;
  
     
  });
  }

  mergeArr = [];

  ExportTOExcel()

  {



    this.packingslipservice.getPackingSlipExcel().subscribe((data)=>{



      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);

      const countOrderNo = data.reduce((accum, {Code }) => { 

       accum[Code] = accum[Code] ? accum[Code] + 1 : 1; return accum; }, {});
       const countOrderNofilter = Object.keys(countOrderNo).filter(function (el) {
       return countOrderNo[el] > 1;});



          for(let i=0;i<countOrderNofilter.length;i++)

          {

            var resultCountOrderNo = Object.keys(ws).reduce(function (acc, val) {

              if (countOrderNofilter[i] == ws[val].v) {

                acc[val] = ws[val];

                 return acc;

                 } else {

                  return acc;

                }

               }, {});

               let countOrderNorowkeys = Object.keys(resultCountOrderNo);

               let countOrderNofirstVal = countOrderNorowkeys[0].substring(1);

               let countOrderNolastVal = countOrderNorowkeys[countOrderNorowkeys.length - 1].substring(1);

               this.mergeArr.push({

                 s: { r: parseInt(countOrderNofirstVal)-1, c: 0 },

                 e: { r: parseInt(countOrderNolastVal)-1, c: 0 },

                });

                this.mergeArr.push({

                  s: { r: parseInt(countOrderNofirstVal) -1, c: 1 },

                   e: { r: parseInt(countOrderNolastVal) -1, c: 1 },

                   });



                   this.mergeArr.push({

                    s: { r: parseInt(countOrderNofirstVal) -1, c: 2 },

                     e: { r: parseInt(countOrderNolastVal) -1, c: 2 },

                     });

                    this.mergeArr.push({

                       s: { r: parseInt(countOrderNofirstVal) -1, c: 3 },

                       e: { r: parseInt(countOrderNolastVal) -1, c: 3 },

                       });

                       

                       this.mergeArr.push({

                        s: { r: parseInt(countOrderNofirstVal) -1, c: 4 },

                        e: { r: parseInt(countOrderNolastVal) -1, c: 4 },

                        });



                        this.mergeArr.push({

                          s: { r: parseInt(countOrderNofirstVal) -1, c: 8 },

                          e: { r: parseInt(countOrderNolastVal) -1, c: 8 },

                          });

                         

                                 }

                                 ws['!merges'] = this.mergeArr;

                                 const wb: XLSX.WorkBook = XLSX.utils.book_new();

                                 XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

                                 /* save to file */

                                 XLSX.writeFile(wb,'OVO_PackingSlip.xlsx');



    })



   

    // const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);

    // console.log(this.table);

 

  }
}


