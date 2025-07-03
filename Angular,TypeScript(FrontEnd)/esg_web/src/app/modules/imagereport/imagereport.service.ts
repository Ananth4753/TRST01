import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable,tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagereportService {

constructor(private _httpClient: HttpClient) { }

getReportpicDetails(): Observable<any[]> {
  const apiUrl = `${baseUrl}/Reportpic/GetReportPicturesDetails`;
  return this._httpClient.get<any[]>(apiUrl);
}

getReportpicById(reportId: number): Observable<any[]> {
const apiUrl = `${baseUrl}/Reportpic/GetReportPicturesDetailsById/${reportId}`;
return this._httpClient.get<any[]>(apiUrl);
}

getFinalReportDetailsByReportId(ReportHdrId: number){
  const apiUrl = `${baseUrl}/FinalReportGeneration/GetFinalReportGenerationDetailsByReportHdrId/${ReportHdrId}`;
  return this._httpClient.get(apiUrl);
  }
  getFinalReportId(Id: number){
    const apiUrl = `${baseUrl}/FinalReportGeneration/GetFinalReportGenerationDetailsById/${Id}`;
    return this._httpClient.get(apiUrl);
    }

createReportpic(reportItem: any): Observable<any> {
const apiUrl = `${baseUrl}/Reportpic/AddReportpic`;
return this._httpClient.post<any>(apiUrl, reportItem);
}
createFinalReportpic(reportItem: any): Observable<any> {
  const apiUrl = `${baseUrl}/FinalReportGeneration/AddFinalReportGenerationPic`;
  return this._httpClient.post<any>(apiUrl, reportItem);
  }
  createFinalReport(reportItem: any): Observable<any> {
    const apiUrl = `${baseUrl}/FinalReportGeneration/AddFinalReportGeneration`;
    return this._httpClient.post<any>(apiUrl, reportItem);
    }
}
