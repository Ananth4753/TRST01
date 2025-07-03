import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable,tap } from 'rxjs';
import { baseUrl } from 'environments/environment';


@Injectable({
  providedIn: 'root'
})
export class Sgx_imagereportService {

constructor(private _httpClient: HttpClient) { }

getReportpicDetails(): Observable<any[]> {
  const apiUrl = `${baseUrl}/Reportpic/GetReportPicturesDetails`;
  return this._httpClient.get<any[]>(apiUrl);
}

getReportpicById(reportId: number): Observable<any[]> {
const apiUrl = `${baseUrl}/Reportpic/GetReportPicturesDetailsById/${reportId}`;
return this._httpClient.get<any[]>(apiUrl);
}

getSGXFinalReportDetailsByReportId(ReportHdrId: number){
  const apiUrl = `${baseUrl}/SGX_finalRP/GetSGX_FinalReportGenerationDetailsByReportHdrId/${ReportHdrId}`;
  return this._httpClient.get(apiUrl);
  }
  getSGXFinalReportId(Id: number){
    const apiUrl = `${baseUrl}/SGX_finalRP/GetSGX_FinalReportGenerationDetailsById/${Id}`;
    return this._httpClient.get(apiUrl);
    }

createReportpic(reportItem: any): Observable<any> {
const apiUrl = `${baseUrl}/Reportpic/AddReportpic`;
return this._httpClient.post<any>(apiUrl, reportItem);
}
createSGXFinalReportpic(reportItem: any): Observable<any> {
  const apiUrl = `${baseUrl}/SGX_finalRP/AddSGX_FinalReportGenerationPic`;
  return this._httpClient.post<any>(apiUrl, reportItem);
  }
  createSGXFinalReport(reportItem: any): Observable<any> {
    const apiUrl = `${baseUrl}/SGX_finalRP/AddSGXFinalReportGeneration`;
    return this._httpClient.post<any>(apiUrl, reportItem);
    }
}
