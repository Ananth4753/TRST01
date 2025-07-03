import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreatereportService {

  constructor(private _httpClient: HttpClient) { }
  getReportById(RegId: any){
    const apiUrl = `${baseUrl}/ReportGeneration/GetReportGenerationDetailsById/${RegId}`;
    return this._httpClient.get(apiUrl);
    }

    getReportGenerationByReportId(ReportId: any){
      const apiUrl = `${baseUrl}/ReportGeneration/GetReportGenerationByReportId/${ReportId}`;
      return this._httpClient.get(apiUrl);
      }



  createreport(reportItems: any): Observable<any> {
    const apiUrl = `${baseUrl}/ReportGeneration/AddReportgeneration`;
    return this._httpClient.post<any>(apiUrl, reportItems);
  }
  Updatereport(reportItems: any): Observable<any> {
    const apiUrl = `${baseUrl}/ReportGeneration/UpdateReportGeneration`;
    return this._httpClient.post<any>(apiUrl, reportItems);
  }
  }
  