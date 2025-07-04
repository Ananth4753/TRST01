import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable,tap } from 'rxjs';
import { BaseUrl } from 'environments/environment';
import { packagingmaterialdetails } from './packagingmaterial.type';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PackagingmaterialService {
  private _PackageItems: BehaviorSubject<packagingmaterialdetails[] | null> = new BehaviorSubject(null);
  AuthHead: HttpHeaders  = new HttpHeaders({
    'authorization': sessionStorage.getItem('accessToken')
  });

   constructor(private _httpClient: HttpClient,private _formBuilder: FormBuilder,) { }
  get _PackageItems$(): Observable<packagingmaterialdetails[]>

  {
 
     return this._PackageItems.asObservable();
 
  }
 
  getPackageDetails():Observable<packagingmaterialdetails[]> {
   const apiUrl = `${BaseUrl}/PackingMaterial/GetPackingMaterials`;
   return this._httpClient.get<packagingmaterialdetails[]>(apiUrl).pipe(
     tap((PackageItems: packagingmaterialdetails[]) => {
         this._PackageItems.next(PackageItems);
     })
 );
 }
 

 getPackageDetailsByWarehouseId(Id: number):Observable<packagingmaterialdetails[]> {
  const apiUrl = `${BaseUrl}/PackingMaterial/GetPackingMaterialsByWareHouseId/${Id}`;
  return this._httpClient.get<packagingmaterialdetails[]>(apiUrl).pipe(
    tap((PackageItems: packagingmaterialdetails[]) => {
        this._PackageItems.next(PackageItems);
    })
);
}

CheckPackingStockAvailability(PackId:Number,WhId:Number): Observable<any[]> {
  const apiUrl = `${BaseUrl}/PackingMaterial/CheckPackingStockAvailability/${PackId}/${WhId}`;
  return this._httpClient.get(apiUrl).pipe(
      tap((warehouse:any[]) => {
          this._PackageItems.next(warehouse);
      })
  );
}


 getPackageDetailsById(Id: number)  {
 const apiUrl = `${BaseUrl}/PackingMaterial/GetPackingMaterialsById/${Id}`;
 return this._httpClient.get(apiUrl);
 }

 GetPackingMaterialForDropDown(WareHouseId: number)  {
  const apiUrl = `${BaseUrl}/PackingMaterial/GetPackingMaterialForDropDown/${WareHouseId}`;
  return this._httpClient.get(apiUrl);
  }




 getPackageDetailStockById(Id: number)  {
  const apiUrl = `${BaseUrl}/PackingMaterial/GetPackingMaterialStockById/${Id}`;
  return this._httpClient.get(apiUrl);
  }
 createPackage(PackageItems: packagingmaterialdetails): Observable<packagingmaterialdetails> {
 const apiUrl = `${BaseUrl}/PackingMaterial/AddPackingMaterial`;
 return this._httpClient.post<packagingmaterialdetails>(apiUrl, PackageItems);
 }

 createPackageStock(PackageItems: any): Observable<any> {
  const apiUrl = `${BaseUrl}/PackingMaterial/AddPackingMaterialStock`;
  return this._httpClient.post<any>(apiUrl, PackageItems);
  }
}
