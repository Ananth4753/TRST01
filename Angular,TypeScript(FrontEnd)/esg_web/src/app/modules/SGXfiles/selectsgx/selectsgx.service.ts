import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SelectsgxService {
public sgxanswers:any = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  constructor(private _httpClient: HttpClient) { }

  getTemplateMenuDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/SGX_Framework/GetSGX_TemplateMenuDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }

  getCityState(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Lookup/GetCityState`;
    return this._httpClient.get<any[]>(apiUrl);
  }

  getReportTemplateMenuIdDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/SGX_ReportGeneration/GetSGX_ReportTemplateMenuId`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getTemplateSubMenuDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/SGX_Framework/GetSGX_TemplateSubMenuDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  GetTestpurposeTemplateMenuDetails(ReportId:number): Observable<any[]> {              
    const apiUrl = `${baseUrl}/SGX_Framework/GetSGX_TestPurposeTemplateMenuDetails/${ReportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  GetSGX_ReportGenerationByReportId(ReportId:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/SGX_ReportGeneration/GetSGX_ReportGenerationByReportId/${ReportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  GetSGXGuidance(ScreenName:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/SGX_Framework/GetSGXguidance/${ScreenName}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  GetSGXTreeViewTemplateMenuDetails(ReportId:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/SGX_Framework/SGX_TemplateMenuCategoryTreeView/${ReportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  getDescriptionByScreenName(TemplateSubMenuName:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/SGX_Framework/GetSGX_TemplateSubMenubyTemplateSubMenuName/${TemplateSubMenuName}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }

  //Evidence
  uploadImageFiles(formData: any) {
    const apiUrl = `${baseUrl}/Fileuploadevidence/UploadImageFiles`;
    return this._httpClient.post<any>(apiUrl, formData);
  }
  uploadExcelFiles(formData: any) {
    const apiUrl = `${baseUrl}/Fileuploadevidence/UploadXlsxFiles`;
    return this._httpClient.post<any>(apiUrl, formData);
  }

  uploadPDFFiles(formData: any) {
    const apiUrl = `${baseUrl}/Fileuploadevidence/UploadPDFFiles`;
    return this._httpClient.post<any>(apiUrl, formData);
  }
  uploadDocFiles(formData: any) {
    const apiUrl = `${baseUrl}/Fileuploadevidence/UploadDocFiles`;
    return this._httpClient.post<any>(apiUrl, formData);
  }
  uploadDocxFiles(formData: any) {
    const apiUrl = `${baseUrl}/Fileuploadevidence/UploadDocxFiles`;
    return this._httpClient.post<any>(apiUrl, formData);
  }
}
