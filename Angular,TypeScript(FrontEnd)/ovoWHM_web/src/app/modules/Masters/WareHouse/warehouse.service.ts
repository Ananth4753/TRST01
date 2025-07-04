import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable,tap } from 'rxjs';
import { BaseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private WareHouseDetails: BehaviorSubject<any[] | null>
   = new BehaviorSubject(null);
  AuthHead: HttpHeaders  = new HttpHeaders({
    'authorization': sessionStorage.getItem('accessToken')
  });
  constructor(private _httpClient: HttpClient) { }
  get warehouse$(): Observable<any[]>
   {
      return this.WareHouseDetails.asObservable();
   }
   getwarehousedetails(): Observable<any[]> {
    const apiUrl = `${BaseUrl}/Warehouse/Getwarehousedetails`;
    return this._httpClient.get(apiUrl).pipe(
        tap((warehouse:any[]) => {
            this.WareHouseDetails.next(warehouse);
        })
    );
}

getwarehousedetailsById(Id:Number): Observable<any[]> {
  const apiUrl = `${BaseUrl}/WareHouse/GetWareHouseDetailsById/${Id}`;
  return this._httpClient.get(apiUrl).pipe(
      tap((warehouse:any[]) => {
          this.WareHouseDetails.next(warehouse);
      })
  );
}
GetwarehouseservicelocationByWareHouseId(WareHouseId:Number): Observable<any[]> {
  const apiUrl = `${BaseUrl}/WarehouseServiceLocation/GetwarehouseservicelocationdetailsByWareHouseId/${WareHouseId}`;
  return this._httpClient.get(apiUrl).pipe(
      tap((warehouse:any[]) => {
          this.WareHouseDetails.next(warehouse);
      })
  );
}

createwarehouse(warehouse:any): Observable<any> { 
  const apiUrl = `${BaseUrl}/Warehouse/Addwarehouse`;  
  return this._httpClient.post<any>(apiUrl, warehouse);
}
}
