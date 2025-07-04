import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'environments/environment';
import { LookupDetail } from './lookup.type';
import { LookuphdrDetail } from './lookup.type';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  private lookupDetails: BehaviorSubject<LookupDetail[] | null> = new BehaviorSubject(null);
  private lookupHdrDetails: BehaviorSubject<LookuphdrDetail[] | null> = new BehaviorSubject(null);
  constructor(private _httpClient: HttpClient) { }

  get lookupdetails$(): Observable<LookupDetail[]> {
    return this.lookupDetails.asObservable();
}

getLookupHdr() {
  const apiUrl = `${baseUrl}/LookupHdr/GetLookupHdrDetails`;

  return this._httpClient.get(apiUrl).pipe(
    tap((lookuphdr: LookuphdrDetail[]) => {
        this.lookupHdrDetails.next(lookuphdr);
    })
);
}
  getLookupDtl() {
    const apiUrl = `${baseUrl}/LookupDtl/GetLookupDtlDetails`;

    return this._httpClient.get(apiUrl).pipe(
      tap((menuItems: LookupDetail[]) => {
          this.lookupDetails.next(menuItems);
      })
  );;
}
getLookupDtlDetailsByHdrCode(Code){
  const apiUrl = `${baseUrl}/LookupDtl/GetLookupDtldetailsByCode/${Code}`;
return this._httpClient.get(apiUrl);
}
getLookupDtlDetailsById(Id){
  const apiUrl = `${baseUrl}/LookupDtl/GetLookupDtldetailsById/${Id}`;
return this._httpClient.get(apiUrl);
}
getLookupHdrDetailsById(Id){
  const apiUrl = `${baseUrl}/LookupHdr/GetLookupHdrdetailsById/${Id}`;
return this._httpClient.get(apiUrl);
}
getLookupDetailsByHdrId(Id){
  const apiUrl = `${baseUrl}/LookupDtl/GetLookupDtldetailsByLookupHdrId/${Id}`;
return this._httpClient.get(apiUrl);
}

createlookupHdr(LookupHdr:any) {
  const apiUrl = `${baseUrl}/LookupHdr/AddLookupHdr`;

  return this._httpClient.post(apiUrl, LookupHdr);
}

createlookupDtl(LookupDtl:any) {
  const apiUrl = `${baseUrl}/LookupDtl/AddLookupDtl`;

  return this._httpClient.post(apiUrl, LookupDtl);
}


}
