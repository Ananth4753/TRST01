import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable,tap } from 'rxjs';
import { BaseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {

  private BarcodeDetails: BehaviorSubject<any[] | null>
  = new BehaviorSubject(null);
 AuthHead: HttpHeaders  = new HttpHeaders({
   'authorization': sessionStorage.getItem('accessToken')
 });
 constructor(private _httpClient: HttpClient) { }
 get Barcode$(): Observable<any[]>
  {
     return this.BarcodeDetails.asObservable();
  }

  getBarcodedetails(): Observable<any[]> {
    const apiUrl = `${BaseUrl}/Barcode/GetBarcodedetails`;
    return this._httpClient.get(apiUrl).pipe(
        tap((Barcode:any[]) => {
            this.BarcodeDetails.next(Barcode);
        })
    );
}

getBaecodedetailsById(Id:Number): Observable<any[]> {
  const apiUrl = `${BaseUrl}/Barcode/GetBarcodedetailsById/${Id}`;
  return this._httpClient.get(apiUrl).pipe(
      tap((Barcode:any[]) => {
          this.BarcodeDetails.next(Barcode);
      })
  );
}

GetProductBarcodeByUniqueId(UniqueId): Observable<any[]> {
  const apiUrl = `${BaseUrl}/ProductBarCode/GetProductBarcodeByUniqueId/${UniqueId}`;
  return this._httpClient.get(apiUrl).pipe(
      tap((Barcode:any[]) => {
          this.BarcodeDetails.next(Barcode);
      })
  );
}




createBarcode(Barcode:any): Observable<any> { 
  const apiUrl = `${BaseUrl}/Barcode/AddBarcode`;  
  return this._httpClient.post<any>(apiUrl, Barcode);
}

}
