import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Sgx_signingoffService {

constructor(private _httpClient: HttpClient) { }
// pushforvalidation(selectedItems: any): Observable<any> {
//   const apiUrl = `${baseUrl}/ValMail/sendsignoffmail`;
//   return this._httpClient.post<any>(apiUrl, selectedItems);} 
}
