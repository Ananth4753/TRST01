import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyreportsService {
  constructor(private _httpClient: HttpClient) { }


  getcollabreportdetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/ReportPictures/GetReportCollaboratorsDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }

getcollabreportById(Id:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/ReportPictures/GetReportCollaboratorsById/${Id}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }

  getReportGenerationByReportIdReportType(ReportId:any,ReportType:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/ReportGeneration/GetReportGenerationByReportIdReportType/${ReportId}/${ReportType}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }

}
