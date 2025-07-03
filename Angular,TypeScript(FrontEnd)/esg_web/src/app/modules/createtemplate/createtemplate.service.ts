import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreatetemplateService {

  constructor(private _httpClient: HttpClient) { }

    getTemplateGenerationByReportId(ReportId: any){
      const apiUrl = `${baseUrl}/TemplateGeneration/GetTemplateGenerationByReportId/${ReportId}`;
      return this._httpClient.get(apiUrl);
      }

  createtemplate(reportItems: any): Observable<any> {
    const apiUrl = `${baseUrl}/TemplateGeneration/AddTemplategeneration`;
    return this._httpClient.post<any>(apiUrl, reportItems);
  }

}
