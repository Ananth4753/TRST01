import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';
import { Stationarycombustiondetail,Stationarycombustiondetails } from './stationarycombustion/stationarycombustiondetails/combustion.type';
@Injectable({
  providedIn: 'root'
})
export class StationaryService {
  private _stserveItems: BehaviorSubject<any[] | null> = new BehaviorSubject(null);
  private __companyvehicleItems: BehaviorSubject<any[] | null> = new BehaviorSubject(null);

constructor(private _httpClient: HttpClient) { }

get stationarycombustion$(): Observable<any[]>
{
   return this._stserveItems.asObservable();
}

get companyvehiclesobs$(): Observable<any[]>
{
   return this.__companyvehicleItems.asObservable();
}
GetCA_Scope1CompanyFacilitiesDetails(): Observable<any[]> {
  const apiUrl = `${baseUrl}/Carbonaccounting/GetCA_Scope1CompanyFacilitiesDetails`;
  return this._httpClient.get<any[]>(apiUrl).pipe(
    tap((roles) => {
        this._stserveItems.next(roles);
    })
);
}
GetCA_Scope1CompanyFacilitiesDetailsById(Id:any): Observable<any[]> {              
  const apiUrl = `${baseUrl}/Carbonaccounting/GetCA_Scope1CompanyFacilitiesDetailsById/${Id}`;   
   return this._httpClient.get<any[]>(apiUrl);
}

createstationarycombustiondetails(combustionitem:any): Observable<any> {
   
  const apiUrl = `${baseUrl}/Carbonaccounting/AddCA_Scope1CompanyFacilities`;
  return this._httpClient.post<any>(apiUrl, combustionitem);
}
//scope1company vehicles
GetCA_Scope1CompanyVehicleDetails(): Observable<any[]> {
  const apiUrl = `${baseUrl}/Carbonaccountingscope1/GetCA_Scope1CompanyVehiclesDetails`;
  return this._httpClient.get<any[]>(apiUrl).pipe(
    tap((roles) => {
        this.__companyvehicleItems.next(roles);
    })
);
}

GetCA_Scope1CompanyVehiclesDetailsById(Id:any): Observable<any[]> {              
  const apiUrl = `${baseUrl}/Carbonaccountingscope1/GetCA_Scope1CompanyVehiclesDetailsById/${Id}`;   
   return this._httpClient.get<any[]>(apiUrl);
}

createScope1companyVehicledetails(companyvehicle:any): Observable<any> {
   
  const apiUrl = `${baseUrl}/Carbonaccountingscope1/AddCA_Scope1CompanyVehicles`;
  return this._httpClient.post<any>(apiUrl, companyvehicle);
}
}
