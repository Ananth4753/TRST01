import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';
import { Stackdetails ,Stackitems} from './stack.type';

@Injectable({
  providedIn: 'root'
})


export class StackbarcodeService {

  private _stackItems: BehaviorSubject<Stackdetails[] | null> = new BehaviorSubject(null);
  AuthHead: HttpHeaders  = new HttpHeaders({
    'authorization': sessionStorage.getItem('accessToken')
  });
  

  constructor(private _httpClient: HttpClient) { }
  get StackItems$(): Observable<Stackdetails[]>
  {
     return this._stackItems.asObservable()
  }


  getStackDetails(): Observable<Stackdetails[]> {
  
    const apiUrl = `${baseUrl}/stack/Getstackdetails`;
    return this._httpClient.get(apiUrl).pipe(
        tap((Stackitems: Stackdetails[]) => {
            this._stackItems.next(Stackitems);
        })
    );
}

getstackdetailsdetailsById(Id: number): Observable<Stackdetails[]> {
 
  const apiUrl = `${baseUrl}/stack/GetstackdetailsById/${Id}`;
  return this._httpClient.get<any>(apiUrl);
}

// GetstackdetailsByWareHouseId(WareHouseId: number): Observable<Stackdetails[]> {
 
//   const apiUrl = `${baseUrl}/stack/GetstackdetailsByWareHouseId/${WareHouseId}`;
//   return this._httpClient.get<any>(apiUrl).pipe(
//     tap((Stackitems: Stackdetails[]) => {
//         this._stackItems.next(Stackitems);
//     })
// );;
// }
GetstackDtlByWareHouseId(WareHouseId: number): Observable<Stackdetails[]> {
 
  const apiUrl = `${baseUrl}/stack/GetStackdDtlByWareHouseId/${WareHouseId}`;
  return this._httpClient.get<any>(apiUrl).pipe(
    tap((Stackitems: Stackdetails[]) => {
        this._stackItems.next(Stackitems);
    })
);;
}


createStack(StacktItem:Stackdetails): Observable<Stackdetails> {

  const apiUrl = `${baseUrl}/stack/Addstackdetails`;
  return this._httpClient.post<Stackdetails>(apiUrl, StacktItem);
}



InhouseStackChange(StacktItem:any) {

  const apiUrl = `${baseUrl}/stack/RetailStackChange`;
  return this._httpClient.post<any>(apiUrl, StacktItem);
}
}
