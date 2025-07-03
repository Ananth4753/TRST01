import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Sgx_validatingreportscreenService {

constructor(private _httpClient: HttpClient) { }

pushforvalidation(selectedItems: any): Observable<any> {
  const apiUrl = `${baseUrl}/ValARMail/SendvalARMails`;
  return this._httpClient.post<any>(apiUrl, selectedItems);} 

  GetSGXValidatingFinalReportByReportId(ReportId:any,UserId:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/SGX_ReportGeneration/GetSGXValidatingFinalReport/${ReportId}/${UserId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  
  GetSGXValidatingFinalReportByonlyReportid(ReportId:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/SGX_ReportGeneration/GetSGX_ValidatingFinalReportonlybyReportid/${ReportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  addSGXfinalreportvalidation(selectedItems: any): Observable<any> {
    const apiUrl = `${baseUrl}/SGX_ReportGeneration/AddSGXValidatingFinalReport`;
    return this._httpClient.post<any>(apiUrl, selectedItems);} 

    approveremarksmail(selectedItems: any): Observable<any> {
      const apiUrl = `${baseUrl}/ValMail/approvedmail`;
      return this._httpClient.post<any>(apiUrl, selectedItems);} 

      rejectremarksmail(selectedItems: any): Observable<any> {
        const apiUrl = `${baseUrl}/ValMail/rejectedmail`;
        return this._httpClient.post<any>(apiUrl, selectedItems);} 


}
