import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable,tap } from 'rxjs';
import { BaseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private WareHouseLocationDetails: BehaviorSubject<any[] | null>
  = new BehaviorSubject(null);
 AuthHead: HttpHeaders  = new HttpHeaders({
   'authorization': sessionStorage.getItem('accessToken')
 });
 constructor(private _httpClient: HttpClient) { }
 get warehouseLocation$(): Observable<any[]>
  {
     return this.WareHouseLocationDetails.asObservable();
  }


  getwarehouselocationdetails(): Observable<any[]> {
   const apiUrl = `${BaseUrl}/WareHouse/GetWareHouseServiceLocationDetails`;
   return this._httpClient.get(apiUrl).pipe(
       tap((warehouse:any[]) => {
           this.WareHouseLocationDetails.next(warehouse);
       })
   );
}

getwarehouselocationdetailsById(Id:Number): Observable<any[]> {
 const apiUrl = `${BaseUrl}/WareHouse/GetWareHouseServiceLocationDetailsById/${Id}`;
 return this._httpClient.get(apiUrl).pipe(
     tap((warehouse:any[]) => {
         this.WareHouseLocationDetails.next(warehouse);
     })
 );
}

getwarehouselocationdetailsByWareHouseId(WareHouseId:Number): Observable<any[]> {
  const apiUrl = `${BaseUrl}/WareHouse/GetWareHouseServiceLocationByWareHouseId/${WareHouseId}`;
  return this._httpClient.get(apiUrl).pipe(
      tap((warehouse:any[]) => {
          this.WareHouseLocationDetails.next(warehouse);
      })
  );
 }


createwarehouseLocation(warehouse:any): Observable<any> { 
 const apiUrl = `${BaseUrl}/WarehouseServiceLocation/Addwarehouseservicelocation`;  
 return this._httpClient.post<any>(apiUrl, warehouse);

}

}
