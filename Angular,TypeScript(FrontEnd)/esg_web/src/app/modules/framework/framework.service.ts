import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FrameworkService {

  constructor(private _httpClient: HttpClient) { }

  getFrameworkDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Framework/GetFrameworkDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }

}
