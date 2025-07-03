import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DesigntemplateService {
  constructor(private _httpClient: HttpClient) { }

  getDesignTemplatesByOrgId(Id:any): Observable<any[]> {              
      const apiUrl = `${baseUrl}/TemplateGeneration/GetDesignTemplatesByOrgId/${Id}`;   
       return this._httpClient.get<any[]>(apiUrl);
    }
  
    geTemplateIdDetailsByIdonly(Id:any): Observable<any[]> {              
      const apiUrl = `${baseUrl}/TemplateGeneration/GetTemplateGenerationByIdonly/${Id}`;   
       return this._httpClient.get<any[]>(apiUrl);
    }

    getTemplatedetailsbyId(Id:any): Observable<any[]> {              
      const apiUrl = `${baseUrl}/ReportGeneration/GetReportTemplateMenuIdByIdforTemplate/${Id}`;   
       return this._httpClient.get<any[]>(apiUrl);
    }
    pushselected(selectedItems: any): Observable<any> {
      const apiUrl = `${baseUrl}/ReportGeneration/AddReportTemplateMenuId`;
      return this._httpClient.post<any>(apiUrl, selectedItems);
    }
    createreport(reportItems: any): Observable<any> {
      const apiUrl = `${baseUrl}/ReportGeneration/AddReportgeneration`;
      return this._httpClient.post<any>(apiUrl, reportItems);
    }
  }
  