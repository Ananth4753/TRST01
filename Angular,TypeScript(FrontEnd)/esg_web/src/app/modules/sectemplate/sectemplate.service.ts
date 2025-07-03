import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SectemplateService {

constructor(private _httpClient: HttpClient) { }

removeFinalReportbyId(Id: any): Observable<any[]> {              
  const apiUrl = `${baseUrl}/FinalReportGeneration/DeleteFinalReportId/${Id}`;    
   return this._httpClient.get<any[]>(apiUrl);  
}

}
