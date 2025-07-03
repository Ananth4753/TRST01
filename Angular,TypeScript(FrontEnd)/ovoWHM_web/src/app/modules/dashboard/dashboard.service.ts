import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable,tap } from 'rxjs';
import { BaseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  AuthHead: HttpHeaders  = new HttpHeaders({
    'authorization': sessionStorage.getItem('accessToken')
  });
  constructor(private _httpClient: HttpClient) {

  }

  getOrderHDRDetailsByOrderDate(fromDate,toDate,WareHouseId) {
    const apiUrl = `${BaseUrl}/Dashboard/OrderDetailsForDashboard/${fromDate}/${toDate}/${WareHouseId}`;
    return this._httpClient.get(apiUrl)
  }
  getOrderHDRDetailsByPinCode(PinCode) {
    const apiUrl = `${BaseUrl}/Dashboard/OrderDetailsByPinCode/${PinCode}`;
    return this._httpClient.get(apiUrl)
  }
  getAvailablestocks() {
    const apiUrl = `${BaseUrl}/Stock/GetStockDetails`;
    return this._httpClient.get(apiUrl)
  } 
  
  getOrderPincodes() {
    const apiUrl = `${BaseUrl}/Dashboard/OrderDetailPinCodes`;
    return this._httpClient.get(apiUrl)
  }

  getDashboardData(fromDate,toDate,WareHouseId) {
    const apiUrl = `${BaseUrl}/Dashboard/DashBoardDetails/${fromDate}/${toDate}/${WareHouseId}`;
    return this._httpClient.get(apiUrl)
  }
  getStockBalanceSheet(fromDate,toDate,WareHouseId) {
    const apiUrl = `${BaseUrl}/Dashboard/GetStockBalanceSheet/${WareHouseId}/${fromDate}/${toDate}`;
    return this._httpClient.get(apiUrl)
  }

  getPackingMaterialBalanceSheet(WareHouseId,fromDate,toDate) {
    const apiUrl = `${BaseUrl}/Dashboard/GetPackingMaterialBalanceSheet/${WareHouseId}/${fromDate}/${toDate}`;
    return this._httpClient.get(apiUrl)
  }


   
  getDashboardDataForBarChat(fromDate,toDate,WareHouseId) {
    const apiUrl = `${BaseUrl}/Dashboard/DashboardBarchartData/${fromDate}/${toDate}/${WareHouseId}`;
    return this._httpClient.get(apiUrl)
  }

  CalenderMonthandYear(Year,Month) {
    const apiUrl = `${BaseUrl}/Dashboard/CalenderMonthandYear/${Year}/${Month}`;
    return this._httpClient.get(apiUrl)
  }


  GetTotalDashboard() {
    const apiUrl = `${BaseUrl}/Dashboard/GetTotalDashboard`;
    return this._httpClient.get(apiUrl)
  }



  GetWareHouseStockReporitngByWarehouseId (WareHouse,FromDate,ToDate) {
    const apiUrl = `${BaseUrl}/WareHouseStock/GetWareHouseStockHistoryByWarehouseandSummaryDate/${WareHouse}/'${FromDate}'/'${ToDate}'`;
    return this._httpClient.get(apiUrl)
  }

  GetWareHouseStockReporitngByWarehouseIdPerDay (WareHouse,FromDate) {
    const apiUrl = `${BaseUrl}/WareHouseStock/GetWareHouseStockHistoryByWarehouseandSummaryDatePerDay/${WareHouse}/'${FromDate}'`;
    return this._httpClient.get(apiUrl)
  }

  GetWareHouseAvailableStocksByProductId(ProductId) {
    const apiUrl = `${BaseUrl}/WareHouseStock/GetWareHouseAvailableStocksByProductId/${ProductId}`;
    return this._httpClient.get(apiUrl)
  }

  GetWareHouseAvailableStocksByProductIdWarehouseId(ProductId,WarehouseId) {
    const apiUrl = `${BaseUrl}/WareHouseStock/GetWareHouseAvailableStocksByProductIdWarehouseId/${ProductId}/${WarehouseId}`;
    return this._httpClient.get(apiUrl)
  }
  
  GetSalesOrdersByWarehouse(WarehouseId) {
    const apiUrl = `${BaseUrl}/PackingSlipHDR/GetSalesOrdersCustomersList/${WarehouseId}`;
    return this._httpClient.get(apiUrl)
  }




  GetProductDtlByProductIdWarehouseId(ProductId,WarehouseId) {
    const apiUrl = `${BaseUrl}/WareHouseStock/GetProductDtlByProductIdWarehouseId/${ProductId}/${WarehouseId}`;
    return this._httpClient.get(apiUrl)
  }

  GetWareHousePackingMaterialStockReporitngByWarehouseId (WareHouse,FromDate,ToDate) {
    const apiUrl = `${BaseUrl}/PackingMaterial/GetPackingMaterialHistoryByWarehouseandSummaryDate/${WareHouse}/'${FromDate}'/'${ToDate}'`;
    return this._httpClient.get(apiUrl)
  }

  GetWareHousePackingMaterialStockReporitngByWarehouseIdPerDay (WareHouse,FromDate) {
    const apiUrl = `${BaseUrl}/PackingMaterial/GetPackingMaterialHistoryByWarehouseandSummaryDatePerDay/${WareHouse}/'${FromDate}'`;
    return this._httpClient.get(apiUrl)
  }
}
