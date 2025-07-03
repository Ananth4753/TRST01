import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';
import { stackproductDetails } from './stackdetails.type';

@Injectable({
  providedIn: 'root'
})
export class StackdetailsService {
  private stackproductDetails: BehaviorSubject<stackproductDetails[] | null> = new BehaviorSubject(null);

  constructor(private _httpClient: HttpClient) { }

  get packingslipdetails$(): Observable<stackproductDetails[]> {
    return this.stackproductDetails.asObservable();
}

getproductleveldetailsByStackId(StackId){
  const apiUrl = `${baseUrl}/ProductStock/GetproductleveldetailsByStackId/${StackId}`;
return this._httpClient.get(apiUrl);
}
}
