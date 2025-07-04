import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Brsr_validatingreportscreenService {

  constructor(private _httpClient: HttpClient) { }
  
  pushforvalidation(selectedItems: any): Observable<any> {
    const apiUrl = `${baseUrl}/ValARMail/SendvalARMails`;
    return this._httpClient.post<any>(apiUrl, selectedItems);} 

    GetBRSRValidatingFinalReportByReportId(ReportId:any,UserId:any): Observable<any[]> {              
      const apiUrl = `${baseUrl}/BRSR_ReportGeneration/GetBRSRValidatingFinalReport/${ReportId}/${UserId}`;   
       return this._httpClient.get<any[]>(apiUrl);
    }
   GetBRSRRemarksReportByUserandReportId(ReportId:any,UserId:any): Observable<any[]> {              

      const apiUrl = `${baseUrl}/BRSR_ReportGeneration/GetBRSRValidatingFinalReport/${ReportId}/${UserId}`;    

       return this._httpClient.get<any[]>(apiUrl);

    }
    GetBRSRValidatingFinalReportByonlyReportid(ReportId:any): Observable<any[]> {              
      const apiUrl = `${baseUrl}/BRSR_ReportGeneration/GetBRSR_ValidatingFinalReportonlybyReportid/${ReportId}`;   
       return this._httpClient.get<any[]>(apiUrl);
    }
    addBRSRfinalreportvalidation(selectedItems: any): Observable<any> {
      const apiUrl = `${baseUrl}/BRSR_ReportGeneration/AddBRSRValidatingFinalReport`;
      return this._httpClient.post<any>(apiUrl, selectedItems);} 

      approveremarksmail(selectedItems: any): Observable<any> {
        const apiUrl = `${baseUrl}/ValMail/approvedmail`;
        return this._httpClient.post<any>(apiUrl, selectedItems);} 

        rejectremarksmail(selectedItems: any): Observable<any> {
          const apiUrl = `${baseUrl}/ValMail/rejectedmail`;
          return this._httpClient.post<any>(apiUrl, selectedItems);} 

          GetSGXRemarksReportByUserandReportId(ReportId:any,UserId:any): Observable<any[]> {              
            const apiUrl = `${baseUrl}/SGX_ReportGeneration/GetSGXValidatingFinalReport/${ReportId}/${UserId}`;    
             return this._httpClient.get<any[]>(apiUrl);
          }

}
