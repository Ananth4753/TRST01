import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

constructor(private _httpClient: HttpClient) { }
pushselected(selectedItems: any): Observable<any> {
  const apiUrl = `${baseUrl}/Mail/SendMails`;
  return this._httpClient.post<any>(apiUrl, selectedItems);}

  getUsersinOrganization(orgid: any): Observable<any[]> {
    const apiUrl = `${baseUrl}/User/GetUsersinOrganization/${orgid}`;
    return this._httpClient.get<any[]>(apiUrl);
    }
    

    addfinalreportvalidation(selectedItems: any): Observable<any> {
      const apiUrl = `${baseUrl}/ReportGeneration/AddValidatingFinalReport`;
      return this._httpClient.post<any>(apiUrl, selectedItems);} 

    pushforvalidation(selectedItems: any): Observable<any> {
      const apiUrl = `${baseUrl}/ValMail/SendvalMails`;
      return this._httpClient.post<any>(apiUrl, selectedItems);} 
}
