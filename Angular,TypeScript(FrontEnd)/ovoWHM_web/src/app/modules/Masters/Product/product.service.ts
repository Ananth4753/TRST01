import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';
import { productdetails,productitems } from './product.type';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productItems: BehaviorSubject<productdetails[] | null> = new BehaviorSubject(null);
  AuthHead: HttpHeaders  = new HttpHeaders({
    'authorization': sessionStorage.getItem('accessToken')
  });
  productbarcodeItems$: any;
  constructor(private _httpClient: HttpClient) {

  }

 get productItems$(): Observable<productdetails[]>
   {
      return this._productItems.asObservable();
   }


   getProductDetails(): Observable<any[]> {
    // this.AuthHead = new HttpHeaders({
    //     'authorization': sessionStorage.getItem('accessToken')
    //   });
    const apiUrl = `${baseUrl}/Product/GetProductdetails`;
    return this._httpClient.get(apiUrl).pipe(
        tap((productItems: productdetails[]) => {
            this._productItems.next(productItems);
        })
    );
}

getProductById(Id: number): Observable<productdetails[]> {
  // this.AuthHead = new HttpHeaders({
  //     'authorization': sessionStorage.getItem('accessToken')
  //   });
  const apiUrl = `${baseUrl}/Product/GetProductdetailsById/${Id}`;
  return this._httpClient.get<any>(apiUrl);
}

getProductByCategoryId(CategoryId: number): Observable<productdetails[]> {
  // this.AuthHead = new HttpHeaders({
  //     'authorization': sessionStorage.getItem('accessToken')
  //   });
  const apiUrl = `${baseUrl}/Product/GetProductdetailsByCategoryId/${CategoryId}`;
  return this._httpClient.get<any>(apiUrl);
}




createProduct(productItem:productdetails): Observable<productdetails> {
  // this.AuthHead = new HttpHeaders({
  //     'authorization': sessionStorage.getItem('accessToken')
  //   });
  const apiUrl = `${baseUrl}/Product/AddProduct`;
  return this._httpClient.post<productdetails>(apiUrl, productItem);
}

// getcategorydetailsByCode(code:any):Observable<any>{
//   const apiUrl = `${baseUrl}/Lookup/GetLookupDetailsByHdrCode/'${code}'`;
//   return this._httpClient.get<any>(apiUrl);

// }




}
