import { Injectable } from '@angular/core';
import { baseUrl } from 'environments/environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { SKUDetail} from './sku.type';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


  export class SkuService {
    private _skuItems: BehaviorSubject<SKUDetail[] | null> = new BehaviorSubject(null);
  
 
    constructor(private _httpClient: HttpClient) { }
  
    get skuItems$(): Observable<SKUDetail[]>
    {
       return this._skuItems.asObservable();
    }
    
  getSKUDetails(): Observable<SKUDetail[]> {
    
      const apiUrl = `${baseUrl}/SKU/GetSKU`;
      //  this._httpClient.get<SKUDetail[]>(apiUrl)

      return this._httpClient.get(apiUrl).pipe(
        tap((skuItems: SKUDetail[]) => {
            this._skuItems.next(skuItems);
        })
    );
  }
  
  getSKUById(SKUId): Observable<SKUDetail[]> {
  
    const apiUrl = `${baseUrl}/SKU/GetSkuById/${SKUId}`;
    return this._httpClient.get<SKUDetail[]>(apiUrl);
  }
  getSKUByProductId(ProductId): Observable<any[]> {
  
    const apiUrl = `${baseUrl}/SKU/GetSkuByProductId/${ProductId}`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  // getSKUByProductId(Id: number): Observable<SKUDetail[]> {
  
  //   const apiUrl = `${baseUrl}/Product/GetProductdetailsById/${Id}`;
  //   return this._httpClient.get<SKUDetail[]>(apiUrl);
  // }




  createSKU(SKUitem:SKUDetail): Observable<SKUDetail> {
   
    const apiUrl = `${baseUrl}/SKU/AddSku`;
    return this._httpClient.post<SKUDetail>(apiUrl, SKUitem);
  }
  createSKUPacking(SKUitem:any): Observable<any> {
   
    const apiUrl = `${baseUrl}/SKU/AddSkuPackingMaterial`;
    return this._httpClient.post<any>(apiUrl, SKUitem);
  }
  getWarehouseStockDetails(Id){
    const apiUrl = `${baseUrl}/WareHouseStock/GetWarehousestockdetailsById/${Id}`;
    return this._httpClient.get(apiUrl)
       
  }

  getSKUPackingmaterialBySKUId(SKUId){
    const apiUrl = `${baseUrl}/SKU/GetSKUPackingMatetialBySKUId/${SKUId}`;
    return this._httpClient.get(apiUrl)
       
  }

  UpdateSKUPackingMaterial(Id){
    const apiUrl = `${baseUrl}/SKU/UpdateSKUPackingMaterial/${Id}`;
    return this._httpClient.get(apiUrl)
       
  }
}
