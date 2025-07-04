import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable,tap } from 'rxjs';
import { BaseUrl } from 'environments/environment';
import { productviewdetails } from './productview.type';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductviewService {
  private productbarcodeItems: BehaviorSubject<productviewdetails[] | null> = new BehaviorSubject(null);
  private productbarcodeItem: BehaviorSubject<productviewdetails[] | null> = new BehaviorSubject(null);
  AuthHead: HttpHeaders  = new HttpHeaders({
    'authorization': sessionStorage.getItem('accessToken')
  });
  productviewdetails: any;


  constructor(private _httpClient: HttpClient,private _formBuilder: FormBuilder,) { }

  get productbarcodeItems$(): Observable<productviewdetails[]>{
   return this.productbarcodeItems.asObservable();}
   get productbarcodeItem$(): Observable<productviewdetails[]>{
    return this.productbarcodeItem.asObservable();}

 getproductBarcodeDetails():Observable<productviewdetails[]> {
  const apiUrl = `${BaseUrl}/ProductBarCode/GetProductBarcodedetails`;
  return this._httpClient.get<productviewdetails[]>(apiUrl).pipe(
    tap((Barcode: productviewdetails[]) => {
        this.productbarcodeItems.next(Barcode);
    })
);
}
getproductBarcodeDetailsById(BatchId:number)  {
const apiUrl = `${BaseUrl}/ProductBarCode/GetProductBarcodedetailsById/${BatchId}`;
return this._httpClient.get(apiUrl);
}

getproductBarcodeById(Id:Number) {
 const apiUrl = `${BaseUrl}/ProductBarCode/GetProductBarcodedetailsById/${Id}`;
 return this._httpClient.get(apiUrl)
}

getproductBarcodeByBatchId(Id:any,WareHouseId) {
  var obj = {"BatchId":Id,"WareHouseId":WareHouseId}
  const apiUrl = `${BaseUrl}/ProductBarCode/GetProductBarCodeDtlByBatchId`;
  return this._httpClient.post(apiUrl,obj)
 }


 SetIsActiveForProductBarcode(BatchIdArray:any) {
  const apiUrl = `${BaseUrl}/ProductBarCode/SetInActiveProductBarcode`;
  return this._httpClient.post(apiUrl,BatchIdArray)
 }

GetProductBarcodedetailsByWareHouseId(WareHouseId: number): Observable<productviewdetails[]> {
 
  const apiUrl = `${BaseUrl}/ProductBarCode/GetProductBarcodedetailsByWareHouseId/${WareHouseId}`;
  return this._httpClient.get<any>(apiUrl).pipe(
     tap((Barcode: productviewdetails[]) => {
     this.productbarcodeItems.next(Barcode);
    })
    );;
}

GetProductBarcodedetailsByWareHouseIdForRepackling(WareHouseId: number): Observable<productviewdetails[]> {
 
  const apiUrl = `${BaseUrl}/ProductBarCode/GetProductBarcodedetailsByWareHouseIdForRepacking/${WareHouseId}`;
  return this._httpClient.get<any>(apiUrl).pipe(
    tap((Barcode: productviewdetails[]) => {
     this.productbarcodeItem.next(Barcode);
    })
    );;
}


createproductBarcode(barcodeItem: any): Observable<any> {
const apiUrl = `${BaseUrl}/ProductBarCode/AddProductBarcode`;
return this._httpClient.post<any>(apiUrl, barcodeItem);
}


getflockDetails():Observable<productviewdetails[]> {
const apiUrl = `${BaseUrl}/Flock/GetFlockDetails`;
return this._httpClient.get<productviewdetails[]>(apiUrl).pipe(
tap((Barcode: productviewdetails[]) => {
this.productbarcodeItems.next(Barcode);
 })
);
}

getskuDetails():Observable<any[]> {
const apiUrl = `${BaseUrl}/SKU/GetSKU`;
return this._httpClient.get<any>(apiUrl)

}

getproductDetails():Observable<productviewdetails[]> {
 const apiUrl = `${BaseUrl}/Product/GetProductdetails`;
return this._httpClient.get<productviewdetails[]>(apiUrl).pipe(
tap((Barcode: productviewdetails[]) => {
this.productbarcodeItems.next(Barcode);
})
);
}

getwarehouseDetails():Observable<productviewdetails[]> {
  const apiUrl = `${BaseUrl}/Warehouse/Getwarehousedetails`;
  return this._httpClient.get<productviewdetails[]>(apiUrl).pipe(
    tap((Barcode: productviewdetails[]) => {
        this.productbarcodeItems.next(Barcode);
    })
);
}


}





