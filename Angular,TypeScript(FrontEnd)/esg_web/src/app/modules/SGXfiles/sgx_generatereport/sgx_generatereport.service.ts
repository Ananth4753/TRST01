import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Sgx_generatereportService {

  constructor(private _httpClient: HttpClient) { }

  base64ToURL(Json: any): Observable<any> {
    console.log(Json)
    const apiUrl = `${baseUrl}/PDF/base64ToURL`;
    return this._httpClient.post<any>(apiUrl, Json);
  }

  GetblockchainReportJsonByReportId(reportId:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/ReportJSON/GetReportJsonByReportId/${reportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }

}
