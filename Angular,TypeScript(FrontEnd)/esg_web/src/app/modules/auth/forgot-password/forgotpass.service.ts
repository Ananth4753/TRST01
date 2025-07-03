import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ForgotpassService {


  constructor(private _httpClient: HttpClient) {}
  createuser(regiItems: any): Observable<any> {
    const apiUrl = `${baseUrl}/Registration/AddRegistration`;
    return this._httpClient.post<any>(apiUrl, regiItems);
  }

  updateuserverificationcode(userItems: any): Observable<any> {
    const apiUrl = `${baseUrl}/User/UpdateUserVerificationCode`;
    return this._httpClient.post<any>(apiUrl, userItems);
  }
}
