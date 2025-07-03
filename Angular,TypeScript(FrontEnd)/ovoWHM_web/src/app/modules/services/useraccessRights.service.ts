import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'environments/environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UseraccessRightsService {

constructor(private _httpClient:HttpClient) { }

CreateuseraccessRights(UserAccess:any): Observable<any[]> {
  const apiUrl = `${baseUrl}/User/GetUserAccessRights`;
  return this._httpClient.post<any>(apiUrl, UserAccess);
}

}