import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable,tap } from 'rxjs';
import { BaseUrl } from 'environments/environment';
import { flockdetails,flockitems } from './flock.type';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FlockService {
  private _flockItems: BehaviorSubject<flockdetails[] | null> = new BehaviorSubject(null);
  AuthHead: HttpHeaders  = new HttpHeaders({
    'authorization': sessionStorage.getItem('accessToken')
  });

  constructor(private _httpClient: HttpClient) { }
  get flockitems$(): Observable<flockdetails[]>

 {

    return this._flockItems.asObservable();

 }

 getflockDetails():Observable<flockdetails[]> {
  const apiUrl = `${BaseUrl}/Flock/GetFlockDetails`;
  return this._httpClient.get<flockdetails[]>(apiUrl).pipe(
   
    tap((flockitems: flockdetails[]) => {
        this._flockItems.next(flockitems);
    })
);
}
getflockDetailsById(Id: number)  {
const apiUrl = `${BaseUrl}/Flock/GetFlockDetailsById/${Id}`;
return this._httpClient.get(apiUrl);
}
createflock(flockItem: flockdetails): Observable<flockdetails> {
const apiUrl = `${BaseUrl}/Flock/AddFlock`;
return this._httpClient.post<flockdetails>(apiUrl, flockItem);
}
}
