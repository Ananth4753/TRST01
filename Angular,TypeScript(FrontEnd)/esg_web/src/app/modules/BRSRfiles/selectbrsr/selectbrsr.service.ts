import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SelectbrsrService {
  public workratecal1:any
  public workratecal2:any
  public permaemp:any
  public permaemp1:any
  public permaemp2:any
  public permaemp3:any
  public permaemp4:any
  public permaemp5:any
  public permaemp6:any
  public permaemp7:any
  public turnover:any
  public liquid:any=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  constructor(private _httpClient: HttpClient) { }

  getTemplateMenuDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/BRSR_Framework/GetBRSR_TemplateMenuDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }

  getCityState(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Lookup/GetCityState`;
    return this._httpClient.get<any[]>(apiUrl);
  }

  GetDistrictDtlbyleadership(ReportId:number): Observable<any[]> {              
    const apiUrl = `${baseUrl}/Lookup/GetDistrictDtlbyleadership/${ReportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  GetDistrictDtlbyessential(ReportId:number): Observable<any[]> {              
    const apiUrl = `${baseUrl}/Lookup/GetDistrictDtlbyessential/${ReportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  getStateHdr(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Lookup/GetStateHdr`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getReportTemplateMenuIdDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/BRSR_ReportGeneration/GetBRSR_ReportTemplateMenuId`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getTemplateSubMenuDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/BRSR_Framework/GetBRSR_TemplateSubMenuDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  GetTestpurposeTemplateMenuDetails(ReportId:number): Observable<any[]> {              
    const apiUrl = `${baseUrl}/BRSR_Framework/GetBRSR_TestPurposeTemplateMenuDetails/${ReportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  GetBRSR_ReportGenerationByReportId(ReportId:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/BRSR_ReportGeneration/GetBRSR_ReportGenerationByReportId/${ReportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  GetBRSRTreeViewTemplateMenuDetails(ReportId:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/BRSR_Framework/BRSR_TemplateMenuCategoryTreeView/${ReportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  getDescriptionByScreenName(TemplateSubMenuName:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/BRSR_Framework/GetBRSR_TemplateSubMenubyTemplateSubMenuName/${TemplateSubMenuName}`;   
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