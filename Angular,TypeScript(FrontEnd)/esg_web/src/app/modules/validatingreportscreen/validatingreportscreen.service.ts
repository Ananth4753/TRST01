import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidatingreportscreenService {

  constructor(private _httpClient: HttpClient) { }
  
  pushforvalidation(selectedItems: any): Observable<any> {
    const apiUrl = `${baseUrl}/ValARMail/SendvalARMails`;
    return this._httpClient.post<any>(apiUrl, selectedItems);} 

    GetValidatingFinalReportByReportId(ReportId:any,UserId:any): Observable<any[]> {              
      const apiUrl = `${baseUrl}/ReportGeneration/GetValidatingFinalReportByReportId/${ReportId}/${UserId}`;   
       return this._httpClient.get<any[]>(apiUrl);
    }

    GetValidatingFinalReportByonlyReportid(ReportId:any): Observable<any[]> {              
      const apiUrl = `${baseUrl}/ReportGeneration/GetValidatingFinalReportonlybyReportid/${ReportId}`;   
       return this._httpClient.get<any[]>(apiUrl);
    }
    addfinalreportvalidation(selectedItems: any): Observable<any> {
      const apiUrl = `${baseUrl}/ReportGeneration/AddValidatingFinalReport`;
      return this._httpClient.post<any>(apiUrl, selectedItems);} 

      approveremarksmail(selectedItems: any): Observable<any> {
        const apiUrl = `${baseUrl}/ValMail/approvedmail`;
        return this._httpClient.post<any>(apiUrl, selectedItems);} 

        rejectremarksmail(selectedItems: any): Observable<any> {
          const apiUrl = `${baseUrl}/ValMail/rejectedmail`;
          return this._httpClient.post<any>(apiUrl, selectedItems);} 

}
