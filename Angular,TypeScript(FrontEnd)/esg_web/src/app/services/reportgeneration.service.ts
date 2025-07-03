import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportgenerationService {

  constructor(private _httpClient: HttpClient) { }

  updateStage(Json: any): Observable<any> {
    const apiUrl = `${baseUrl}/ReportGeneration/UpdateReportGenerationForStage`;
    return this._httpClient.post<any>(apiUrl, Json);
  }
  updateBRSRStage(Json: any): Observable<any> {
    const apiUrl = `${baseUrl}/BRSR_ReportGeneration/UpdateBRSR_ReportGenerationForStage`;
    return this._httpClient.post<any>(apiUrl, Json);
  }
  updateSGXStage(Json: any): Observable<any> {
    const apiUrl = `${baseUrl}/SGX_ReportGeneration/UpdateSGX_ReportGenerationForStage`;
    return this._httpClient.post<any>(apiUrl, Json);
  }

}
