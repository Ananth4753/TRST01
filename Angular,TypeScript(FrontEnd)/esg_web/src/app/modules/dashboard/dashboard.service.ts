import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _httpClient: HttpClient) { }
  
  getuserbyId(Id: any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/User/GetUsers/${Id}`;    
     return this._httpClient.get<any[]>(apiUrl);  
  }
  getuserdetails(Id: any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/User/GetUserDetails/${Id}`;    
     return this._httpClient.get<any[]>(apiUrl);  
  }
  getuserdetailsonly(Id: any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/User/GetUserDetailsByonlyId/${Id}`;    
     return this._httpClient.get<any[]>(apiUrl);  
  }
  removebyId(Id: any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/ReportGeneration/DeleteReportId/${Id}`;    
     return this._httpClient.get<any[]>(apiUrl);  
  }
  showreportrbyUserId(Id: any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/ReportGeneration/GetShowReportByReportId/${Id}`;    
     return this._httpClient.get<any[]>(apiUrl);  
  }
  showreportrbyReportId(Id: any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/ReportGeneration/GetShowReportByonlyReportId/${Id}`;    
     return this._httpClient.get<any[]>(apiUrl);  
  }
 //sgx
  

 showSGXreportrbyReportId(Id: any): Observable<any[]> {              
  const apiUrl = `${baseUrl}/SGX_ReportGeneration/GetShowSGX_ReportByonlyReportId/${Id}`;    
   return this._httpClient.get<any[]>(apiUrl);  
}
}
