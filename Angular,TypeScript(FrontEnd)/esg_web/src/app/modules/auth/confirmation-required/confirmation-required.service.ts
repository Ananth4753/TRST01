import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationRequiredService {

constructor(private _httpClient: HttpClient) { }
updateuserpassword(userpasswordItems: any): Observable<any> {
  const apiUrl = `${baseUrl}/User/UpdateUserPassword`;
  return this._httpClient.post<any>(apiUrl, userpasswordItems);
}

checkverification(verificationcode:number): Observable<any[]> {              
  const apiUrl = `${baseUrl}/User/ValidateVerificationCode/${verificationcode}`;    
   return this._httpClient.get<any[]>(apiUrl);  
}
}
