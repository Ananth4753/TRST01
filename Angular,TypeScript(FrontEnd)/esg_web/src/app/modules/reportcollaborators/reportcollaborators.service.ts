import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportcollaboratorsService {
  constructor(private _httpClient: HttpClient) { }

  GetCollaboratorsinOrganizationById(OrgId:any,ReportId:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/User/GetCollaboratorsinOrganizationById/${OrgId}/${ReportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  assigncollab(reportcollab: any): Observable<any> {
    const apiUrl = `${baseUrl}/ReportCollaborators/AddReportCollaborators`;
    return this._httpClient.post(apiUrl, reportcollab);
}

getcollaboratorsbyreportiddetails(): Observable<any[]> {
  const apiUrl = `${baseUrl}/ReportPictures/GetCollaboratorsByReportNameDetails`;
  return this._httpClient.get<any[]>(apiUrl);
}

getcollaboratorsbyreportid(Id:any): Observable<any[]> {              
  const apiUrl = `${baseUrl}/ReportPictures/GetCollaboratorsByReportNameById/${Id}`;   
   return this._httpClient.get<any[]>(apiUrl);
}

}
