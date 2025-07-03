import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

constructor(private _httpClient: HttpClient) { }

updateuserpassword(userpasswordItems: any): Observable<any> {
  const apiUrl = `${baseUrl}/User/UpdateUserPassword`;
  return this._httpClient.post<any>(apiUrl, userpasswordItems);
}

getRegistrationDetailsbyOrgId(OrgId: any){
  const apiUrl = `${baseUrl}/Registration/GetRegistrationbyOrgId/${OrgId}`;
  return this._httpClient.get(apiUrl);
  }

createUser(user: any): Observable<any> {
  const apiUrl = `${baseUrl}/User/AddUser`;
  return this._httpClient.post<any>(apiUrl, user);
}
updateUserpassword(user: any): Observable<any> {
  const apiUrl = `${baseUrl}/User/UpdateUserPassword`;
  return this._httpClient.post<any>(apiUrl, user);
}
}