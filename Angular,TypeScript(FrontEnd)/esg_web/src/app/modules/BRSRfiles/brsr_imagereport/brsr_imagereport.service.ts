import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable,tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Brsr_imagereportService {


  constructor(private _httpClient: HttpClient) { }

  getReportpicDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Reportpic/GetReportPicturesDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  
  getReportpicById(reportId: number): Observable<any[]> {
  const apiUrl = `${baseUrl}/Reportpic/GetReportPicturesDetailsById/${reportId}`;
  return this._httpClient.get<any[]>(apiUrl);
  }
  
  getBRSRFinalReportDetailsByReportId(ReportHdrId: number){
    const apiUrl = `${baseUrl}/BRSR_finalRP/GetBRSR_FinalReportGenerationDetailsByReportHdrId/${ReportHdrId}`;
    return this._httpClient.get(apiUrl);
    }
    getBRSRFinalReportId(Id: number){
      const apiUrl = `${baseUrl}/BRSR_finalRP/GetBRSR_FinalReportGenerationDetailsById/${Id}`;
      return this._httpClient.get(apiUrl);
      }
  
  createReportpic(reportItem: any): Observable<any> {
  const apiUrl = `${baseUrl}/Reportpic/AddReportpic`;
  return this._httpClient.post<any>(apiUrl, reportItem);
  }
  createBRSRFinalReportpic(reportItem: any): Observable<any> {
    const apiUrl = `${baseUrl}/BRSR_finalRP/AddBRSR_FinalReportGenerationPic`;
    return this._httpClient.post<any>(apiUrl, reportItem);
    }
    createBRSRFinalReport(reportItem: any): Observable<any> {
      const apiUrl = `${baseUrl}/BRSR_finalRP/AddBRSRFinalReportGeneration`;
      return this._httpClient.post<any>(apiUrl, reportItem);
      }
  }
  
