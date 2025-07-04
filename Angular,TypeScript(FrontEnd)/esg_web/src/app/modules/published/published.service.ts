import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublishedService {
  constructor(private _httpClient: HttpClient) { }

getPublishedReportsByOrgId(Id:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/ReportPictures/GetPublishedReportsByOrgId/${Id}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }



}
