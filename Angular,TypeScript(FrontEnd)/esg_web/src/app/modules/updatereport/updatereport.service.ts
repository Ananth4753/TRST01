import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdatereportService {

  constructor(private _httpClient: HttpClient) { }

  getReportDetailsByReportId(ReportId: any){
    const apiUrl = `${baseUrl}/ReportGeneration/GetReportGenerationDetailsById/${ReportId}`;
    return this._httpClient.get(apiUrl);
    }

    getBRSRReportDetailsByReportId(ReportId: any){
      const apiUrl = `${baseUrl}/BRSR_ReportGeneration/GetBRSR_ReportGenerationByReportId/${ReportId}`;
      return this._httpClient.get(apiUrl);
      }

  createreport(reportItems: any): Observable<any> {
    const apiUrl = `${baseUrl}/ReportGeneration/AddReportgeneration`;
    return this._httpClient.post<any>(apiUrl, reportItems);
  }

  createimageurl(reportItems: any): Observable<any> {
    const apiUrl = `${baseUrl}/FinalReportGeneration/createImages`;
    return this._httpClient.post<any>(apiUrl, reportItems);
  }
  createimageurl1(reportItems: any): Observable<any> {
    const apiUrl = `${baseUrl}/FinalReportGeneration/createImages1`;
    return this._httpClient.post<any>(apiUrl, reportItems);
  }
   //sgx
   getSGXReportDetailsByReportId(ReportId: any){
    const apiUrl = `${baseUrl}/SGX_ReportGeneration/GetSGX_ReportGenerationByReportId/${ReportId}`;
    return this._httpClient.get(apiUrl);
    }
 
}

