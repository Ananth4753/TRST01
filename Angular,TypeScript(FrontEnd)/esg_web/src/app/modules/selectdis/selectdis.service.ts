import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SelectdisService {

  constructor(private _httpClient: HttpClient) { }

  getTemplateMenuDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Framework/GetTemplateMenuDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getReportTemplateMenuIdDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/ReportGeneration/GetReportTemplateMenuIdDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getReportTemplateMenuIdDetailsById(Id:number): Observable<any[]> {              
    const apiUrl = `${baseUrl}/ReportGeneration/GetReportTemplateMenuIdById/${Id}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  getTemplateSubMenuDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Framework/GetTemplateSubMenuDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getTemplateSubMenuItemDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Framework/GetTemplateSubMenuItemDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getTemplateSubMenuItemDetailsById(Id:number): Observable<any[]> {              
    const apiUrl = `${baseUrl}/Framework/GetTemplateSubMenuItemDetailsById/${Id}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  getTemplateSubMenuDetailsByTemplateId(Id:number,ReportId:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/Framework/GetTemplateSubMenuDetailsByTemplateId/${Id}/${ReportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }

  getTemplateSubMenuItemByTemplateSubmenuId(Id:number): Observable<any[]> {              
    const apiUrl = `${baseUrl}/Framework/GetTemplateSubMenuItemsByTemplateSubmenuId/${Id}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  GetTestpurposeTemplateMenuDetails(ReportId:number): Observable<any[]> {              
    const apiUrl = `${baseUrl}/Framework/GetTestpurposeTemplateMenuDetails/${ReportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }

  pushselected(selectedItems: any): Observable<any> {
    const apiUrl = `${baseUrl}/ReportGeneration/AddReportTemplateMenuId`;
    return this._httpClient.post<any>(apiUrl, selectedItems);
  }
  updatereportstatus(selectedItems: any): Observable<any> {
    const apiUrl = `${baseUrl}/ReportGeneration/UpdateReportTemplateMenuId`;
    return this._httpClient.post<any>(apiUrl, selectedItems);
  }
  updatereportstatusback(selectedItems: any): Observable<any> {
    const apiUrl = `${baseUrl}/ReportGeneration/UpdateReportTemplateMenuIdBack`;
    return this._httpClient.post<any>(apiUrl, selectedItems);
  }
  updatereport(selectedItems: any): Observable<any> {
    const apiUrl = `${baseUrl}/ReportGeneration/UpdateReportTemplateMenuId`;
    return this._httpClient.post<any>(apiUrl, selectedItems);
  }
  GetTreeViewTemplateMenuDetails(ReportId:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/Framework/GetTemplateMenuCategoryTreeView/${ReportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
}
