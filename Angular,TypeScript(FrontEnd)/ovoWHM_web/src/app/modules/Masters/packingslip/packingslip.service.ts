
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'environments/environment';
import { PackingSlipDetails } from './packingslip.type';
import { PackingSliphdrDetails } from './packingslip.type';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackingslipService {
  
  private PackingSlipDetails: BehaviorSubject<PackingSlipDetails[] | null> = new BehaviorSubject(null);
  private PackingSlipHdrDetails: BehaviorSubject<PackingSliphdrDetails[] | null> = new BehaviorSubject(null);
  constructor(private _httpClient: HttpClient) { }

  get packingslipdetails$(): Observable<PackingSlipDetails[]> {
    return this.PackingSlipDetails.asObservable();
}

getPackingSlipHdr() {
  const apiUrl = `${baseUrl}/PackingSlipHDR/GetPackingSlipHDRdetails`;
  return this._httpClient.get(apiUrl).pipe(
    tap((PackingSliphdr: PackingSliphdrDetails[]) => {
        this.PackingSlipHdrDetails.next(PackingSliphdr);
    })
);
}

  getPackingSlipDtl() {
    const apiUrl = `${baseUrl}/PackingSlipDTL/GetPackingSlipDTLdetails`;
    return this._httpClient.get(apiUrl).pipe(
      tap((menuItems: PackingSlipDetails[]) => {
          this.PackingSlipDetails.next(menuItems);
      })
  );;
}

// getLookupDtlDetailsByHdrCode(Code){
//   const apiUrl = `${baseUrl}/LookupDtl/GetLookupDtldetailsByCode/${Code}`;
// return this._httpClient.get(apiUrl);
// }

getPackingSlipDtlDetailsById(Id){
  const apiUrl = `${baseUrl}/PackingSlipDTL/GetPackingSlipDTLdetailsById/${Id}`;
return this._httpClient.get(apiUrl);
}
GetInhouseDtlByPSId(Id){
  const apiUrl = `${baseUrl}/WareHouseStockTransaction/GetInHouseStockTransactionByPackingSlipHdrId/${Id}`;
return this._httpClient.get(apiUrl);
}
getPackingSlipHdrDetailsById(Id){
  const apiUrl = `${baseUrl}/PackingSlipHDR/GetPackingSlipHDRdetailsById/${Id}`;
return this._httpClient.get(apiUrl);
}
getPackingSlipDetailsByHdrId(Id){
  const apiUrl = `${baseUrl}/PackingSlipDTL/GetPackingSlipDTLdetailsByHDRId/${Id}`;
return this._httpClient.get(apiUrl);
} 

createPackingSlipHdr(PackingSlipHdr:any) {
  const apiUrl = `${baseUrl}/PackingSlipHDR/AddPackingSlipHDR`;
  return this._httpClient.post(apiUrl, PackingSlipHdr);
}

createPackingSlipDtl(PackingSlipDtl:any) {
  const apiUrl = `${baseUrl}/PackingSlipDTL/AddPackingSlipDTL`;
 return this._httpClient.post(apiUrl, PackingSlipDtl);
}


getwarehouseDetails():Observable<PackingSlipDetails[]> {
    const apiUrl = `${baseUrl}/Warehouse/Getwarehousedetails`;
    return this._httpClient.get<PackingSlipDetails[]>(apiUrl).pipe(
      tap((Barcode: PackingSlipDetails[]) => {
          this.PackingSlipDetails.next(Barcode);
      })
  );
  }

  getproductDetails():Observable<PackingSlipDetails[]> {
      const apiUrl = `${baseUrl}/Product/GetProductdetails`;
      return this._httpClient.get<PackingSlipDetails[]>(apiUrl).pipe(
        tap((Barcode: PackingSlipDetails[]) => {
            this.PackingSlipDetails.next(Barcode);
        })
    );
    }

    getwarehousedetailsById(Id:Number): Observable<any[]> {
      const apiUrl = `${baseUrl}/WareHouse/GetWareHouseDetailsById/${Id}`;
      return this._httpClient.get(apiUrl).pipe(
          tap((warehouse:any[]) => {
              this.PackingSlipDetails.next(warehouse);
          })
      );
    }

    GetSalesOrdrsCustomers() {
      const apiUrl = `${baseUrl}/PackingSlipHDR/GetSalesOrdersCustomers`;
      return this._httpClient.get(apiUrl)
    }
  
    GetPackingStockByWareHouseId(Id:Number): Observable<any[]> {
      const apiUrl = `${baseUrl}/PackingMaterial/GetPackingMaterialsByWareHouseId/${Id}`;
      return this._httpClient.get(apiUrl).pipe(
          tap((warehouse:any[]) => {
              this.PackingSlipDetails.next(warehouse);
          })
      );
    }

 


    GetLookupDtldetailsByCode(Id): Observable<any[]> {
      const apiUrl = `${baseUrl}/LookupDtl/GetLookupDtldetailsByCode/${Id}`;
      return this._httpClient.get(apiUrl).pipe(
          tap((status:any[]) => {
              this.PackingSlipDetails.next(status);
          })
      );
    }

    ProductLevelStockDetailsByPackingSlipHDRId(PackingSlipId:number):Observable<any[]>{
      const apiUrl = `${baseUrl}/ProductStock/GetProductLevelStockDetailsByPackingSlipHDRId/${PackingSlipId}`;
    return this._httpClient.get<any[]>(apiUrl).pipe(
      tap((status:any[]) => {
          this.PackingSlipDetails.next(status);
      })
  );
    }

    GetPackingSlipHDRdetailsByWareHouseId(WareHouseId:number):Observable<any[]>{
      const apiUrl = `${baseUrl}/PackingSlipHDR/GetPackingSlipHDRdetailsByWareHouseId/${WareHouseId}`;
    return this._httpClient.get<any[]>(apiUrl).pipe(
      tap((status:any[]) => {
          this.PackingSlipDetails.next(status);
      })
  );
    }


    GetPackingSlipHDRdetailsByDeliveryWareHouseId(WareHouseId:number):Observable<any[]>{
      const apiUrl = `${baseUrl}/PackingSlipHDR/GetPackingSlipHDRDetailsByDeliveryWareHouseIdForReceivedPS/${WareHouseId}`;
    return this._httpClient.get<any[]>(apiUrl).pipe(
      tap((status:any[]) => {
          this.PackingSlipDetails.next(status);
      })
  );
    }


    GetPackingSlipHDRdetailsByDeliveryWareHouseIdStaus(WareHouseId:number,Status:number):Observable<any[]>{
      const apiUrl = `${baseUrl}/PackingSlipHDR/GetPackingSlipHDRDetailsByDeliveryWareHouseIdForReceivedPacking/${WareHouseId}/${Status}`;
    return this._httpClient.get<any[]>(apiUrl).pipe(
      tap((status:any[]) => {
          this.PackingSlipDetails.next(status);
      })
  );
    }








    PackingSlipStatusUpdate(Id:Number,WareHouseId:number,Status:Number,DaysInTransit:number): Observable<any[]> {

      const apiUrl = `${baseUrl}/PackingSlipHDR/UpdatePackingSlipHDRdetails/${Id}/${WareHouseId}/${Status}/${DaysInTransit}`;

      return this._httpClient.get(apiUrl).pipe(

          tap((warehouse:any[]) => {

              this.PackingSlipDetails.next(warehouse);

          })

      );

    }

    getPackingSlipExcel() {

      const apiUrl = `${baseUrl}/PackingSlipDTL/GetPackingSlipExceldetails`;
    
      return this._httpClient.get(apiUrl).pipe(
    
        tap((PackingSliphdr: PackingSliphdrDetails[]) => {
    
            this.PackingSlipHdrDetails.next(PackingSliphdr);
    
        })
    
    );
    
    }

}
