import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private _httpClient: HttpClient) {}
  // createuser(regiItems: any): Observable<any> {
  //   const apiUrl = `${baseUrl}/Registration/UpdateRegistration`;
  //   return this._httpClient.post<any>(apiUrl, regiItems);
  // }
  createuser(regiItems: any): Observable<any> {
    const apiUrl = `${baseUrl}/Registration/AddRegistration`;
    return this._httpClient.post<any>(apiUrl, regiItems);
  }
  getRegistrationDetailsRegId(RegId: number){
    const apiUrl = `${baseUrl}/Registration/GetRegistrationByRegId/${RegId}`;
    return this._httpClient.get(apiUrl);
    }

    getRegistrationDetailsEmailId(EmailId:String){
      const apiUrl = `${baseUrl}/Registration/GetRegistrationByEmailId/${EmailId}`;
      return this._httpClient.get(apiUrl);
      }
      getUserDetailsEmailId(EmailId:String){
        const apiUrl = `${baseUrl}/Registration/GetUserByEmailId/${EmailId}`;
        return this._httpClient.get(apiUrl);
        }
      getRegistrationDetailsRegName(EmailId:String){
        const apiUrl = `${baseUrl}/Registration/GetRegistrationByOrganizationName/${EmailId}`;
        return this._httpClient.get(apiUrl);
        }
        
    getRegistrationDetails(){
      const apiUrl = `${baseUrl}/Registration/GetRegistrationDetails`;
      return this._httpClient.get(apiUrl);
      }
      getRegistrationDetailsByUserId(Id:String){
        const apiUrl = `${baseUrl}/Registration/GetRegistrationByUserId/${Id}`;
        return this._httpClient.get(apiUrl);
        }
      getContriesDetails(){
        const apiUrl = `https://restcountries.com/v3.1/all`;
        return this._httpClient.get(apiUrl);
        }

    
}

