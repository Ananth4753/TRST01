import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DynamiccontentService {

  constructor(private _httpClient: HttpClient) { }

  getPreviewReportDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Framework/GetPreviewByReportIdDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getPreviewReportById(ReportId:number): Observable<any[]> {              
    const apiUrl = `${baseUrl}/Framework/GetPreviewByReportIdById/${ReportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }

  getReportpicDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/ReportPictures/GetReportPicturesDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getReportpicById(Id:number): Observable<any[]> {              
    const apiUrl = `${baseUrl}/ReportPictures/GetReportPicturesById/${Id}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  // getpdfDetails(json): Observable<any[]> {
  //   const apiUrl = `${baseUrl}/home/generatePdf`;
  //   return this._httpClient.post<any[]>(apiUrl,json);
  // }

  createDynamicHtmlFile(json):Observable<any>  {
    const apiUrl = `${baseUrl}/Dynamic/CreateDynamicFile`;
    return this._httpClient.post<any>(apiUrl,json);
  }



}
