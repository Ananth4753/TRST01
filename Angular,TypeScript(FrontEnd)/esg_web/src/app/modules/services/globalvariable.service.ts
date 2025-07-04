import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpRequest,HttpEvent } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalvariableService {
  private reportid=new BehaviorSubject(0);
  current_reportid =this.reportid.asObservable();
  constructor(private _httpClient: HttpClient) { }

saveReportId(Id:number){
this.reportid.next(Id)
}
GetUploadEvidenceByReportId(ReportId:any,QuestionCode:any): Observable<any[]> {              
  const apiUrl = `${baseUrl}/UploadEvidence/GetUploadEvidenceById/${ReportId}/${QuestionCode}`;   
   return this._httpClient.get<any[]>(apiUrl);
}

GetUploadEvidenceByReportIdandOrgId(ReportId:any,OrgId:any): Observable<any[]> {              
  const apiUrl = `${baseUrl}/UploadEvidence/GetUploadEvidenceByReportIdandOrgId/${ReportId}/${OrgId}`;   
   return this._httpClient.get<any[]>(apiUrl);
}

deleteUploadEvidence(OrgId: any, ReportId: any, QuestionCode: any): Observable<any> {
  const apiUrl = `${baseUrl}/UploadEvidence/DeleteUploadEvidence/${OrgId}/${ReportId}/${QuestionCode}`;
  return this._httpClient.delete<any>(apiUrl);
}
createImages(ImageItem:any): Observable<any> {
  const apiUrl = `${baseUrl}/UploadEvidence/AddUploadEvidence`;
  return this._httpClient.post<any>(apiUrl, ImageItem);
}
//SGX
GetSGXUploadEvidenceByReportId(ReportId:any,QuestionCode:any): Observable<any[]> {              
  const apiUrl = `${baseUrl}/SgxUploadEvidenceController/GetUploadSGXEvidenceById/${ReportId}/${QuestionCode}`;   
   return this._httpClient.get<any[]>(apiUrl);
}

GetSGXUploadEvidenceByReportIdandOrgId(ReportId:any,OrgId:any): Observable<any[]> {              
  const apiUrl = `${baseUrl}/SgxUploadEvidenceController/GetSGXUploadEvidenceByReportIdandOrgId/${ReportId}/${OrgId}`;   
   return this._httpClient.get<any[]>(apiUrl);
}

deleteSGXUploadEvidence(OrgId: any, ReportId: any, QuestionCode: any): Observable<any> {
  const apiUrl = `${baseUrl}/SgxUploadEvidenceController/DeleteSGXUploadEvidence/${OrgId}/${ReportId}/${QuestionCode}`;
  return this._httpClient.delete<any>(apiUrl);
}
createSGXImages(ImageItem:any): Observable<any> {
  const apiUrl = `${baseUrl}/SgxUploadEvidenceController/AddSGXUploadEvidence`;
  return this._httpClient.post<any>(apiUrl, ImageItem);
}
//BRSR
GetBRSRUploadEvidenceByReportId(ReportId:any,QuestionCode:any): Observable<any[]> {              
  const apiUrl = `${baseUrl}/BRSRUploadEvidenceController/GetUploadBRSREvidenceById/${ReportId}/${QuestionCode}`;   
   return this._httpClient.get<any[]>(apiUrl);
}

GetBRSRUploadEvidenceByReportIdandOrgId(ReportId:any,OrgId:any): Observable<any[]> {              
  const apiUrl = `${baseUrl}/BRSRUploadEvidenceController/GetBRSRUploadEvidenceByReportIdandOrgId/${ReportId}/${OrgId}`;   
   return this._httpClient.get<any[]>(apiUrl);
}

deleteBRSRUploadEvidence(OrgId: any, ReportId: any, QuestionCode: any): Observable<any> {
  const apiUrl = `${baseUrl}/BRSRUploadEvidenceController/DeleteBRSRUploadEvidence/${OrgId}/${ReportId}/${QuestionCode}`;
  return this._httpClient.delete<any>(apiUrl);
}
createBRSRImages(ImageItem:any): Observable<any> {
  const apiUrl = `${baseUrl}/BRSRUploadEvidenceController/AddBRSRUploadEvidence`;
  return this._httpClient.post<any>(apiUrl, ImageItem);
}
}
