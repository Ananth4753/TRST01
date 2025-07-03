import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from 'environments/environment';
import { TreeviewItem } from '../../../../projects/ngx-treeview/src/public-api';
@Injectable({
  providedIn: 'root'
})
export class ImportdisService {
public metricsCO2e:any=0;
public liquid:number=0;
public electricsum:number=0;
public scope3specificsum:any;
public scope3hotel:any;
public scope3category3:any;
public scope3category4:any;
public scope3category5:any;
public scope3category7:any;
public scope3category813:any;
public scope3category10:any;
public scope3category11:any;
public scope3category14:any;
public scope3category15:any;
public scope3insidecal813:any;
public scope3avg:any;
public userentered:any
public scope3insidecal814:any;
public scope3insidecal815:any
public scope3countad:any;
public scope2marketbased:any
  constructor(private _httpClient: HttpClient) { }

  uploadImageFiles(formData: any) {
    const apiUrl = `${baseUrl}/Fileuploadevidence/UploadImageFiles`;
    return this._httpClient.post<any>(apiUrl, formData);
  }

  uploadExcelFiles(formData: any) {
    const apiUrl = `${baseUrl}/Fileuploadevidence/UploadXlsxFiles`;
    return this._httpClient.post<any>(apiUrl, formData);
  }

  uploadPDFFiles(formData: any) {
    const apiUrl = `${baseUrl}/Fileuploadevidence/UploadPDFFiles`;
    return this._httpClient.post<any>(apiUrl, formData);
  }
  uploadDocFiles(formData: any) {
    const apiUrl = `${baseUrl}/Fileuploadevidence/UploadDocFiles`;
    return this._httpClient.post<any>(apiUrl, formData);
  }
  uploadDocxFiles(formData: any) {
    const apiUrl = `${baseUrl}/Fileuploadevidence/UploadDocxFiles`;
    return this._httpClient.post<any>(apiUrl, formData);
  }

  getTemplateSubMenuDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Framework/GetTemplateSubMenuDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }

  getCountryDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Country/GetCountryDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  
  getScope2Marketbased(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope2Marketbased`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getFuelTypeBaseDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/GHemission/GetFuelTypeBaseDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope3supplierspecDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope3Categ1SupplierSpecDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope3scope1calc(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope3scope1calc`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope2SteamHeat(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope2SteamHeat`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope3scope2calc(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope3scope2calc`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope3AvgPieceDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope3AvgPieceDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope3spendbased(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope3spendbased`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope3currency(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetCurrencytypeforExchangerate`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope3hotel(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope3Category6hotel`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope3Category4(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope3Category4`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope3Category2shift(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope3Category2shift`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  GetScope1VehicleEmissionFactor(vehicle:any,type:any,fuel:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/Scope3/GetScope1VehicleEmissionFactor/${vehicle}/${type}/${fuel}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  GetScope1Fugutives() {
    const apiUrl = `${baseUrl}/Scope3/GetScope1Fugutives`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope3Category2spend(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope3Category2spend`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope3Category6RentalCars(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope3Category6RentalCars`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope3Category6BusinessTravel(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope3Category6BusinessTravel`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope3Category3Fuel(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope3Category3Fuel`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope3Category7(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope3Category7`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  GetScope3Category5WasteMaterialNames(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope3Category5WasteMaterialNames`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope3Category3elec(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope3Category3elec`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getScope3Category5Waste(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Scope3/GetScope3Category5Waste`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  GetScope3Category5WasteById(Id:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/Scope3/GetScope3Category5WasteById/${Id}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  getARListDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/GHemission/GetARListDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  GetFuelConvertionTypeById(Id:number): Observable<any[]> {              
    const apiUrl = `${baseUrl}/GHemission/GetFuelConvertionTypeById/${Id}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  getElectricCountryDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/GHemission/GetElectricCountry`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  GetElectricCountryById(Id:number): Observable<any[]> {              
    const apiUrl = `${baseUrl}/GHemission/GetElectricCountryById/${Id}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  GetCalculateARValues(FuelTypeId:number,ARId:number): Observable<any[]> {              
    const apiUrl = `${baseUrl}/GHemission/GetCalculateARValues/${FuelTypeId}/${ARId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  GetTestpurposeTemplateMenuDetailsforimp(ReportId:number): Observable<any[]> {              
    const apiUrl = `${baseUrl}/Framework/GetTestpurposeTemplateMenuDetailsforimp/${ReportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }

  GetQuestionsById(Code:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/RequestData/GetQuestionsById/${Code}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }

  getTemplateSubMenuItemDetails(): Observable<any[]> {
    const apiUrl = `${baseUrl}/Framework/GetTemplateSubMenuItemDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  getTemplateSubMenuItemDetailsById(Id:number): Observable<any[]> {              
    const apiUrl = `${baseUrl}/Framework/GetTemplateSubMenuItemDetailsById/${Id}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  getDescriptionByScreenName(TemplateSubMenuName:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/Framework/GetDescriptionByScreenName/${TemplateSubMenuName}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  getDistinctScreenNameByTemplateSubMenuId(TemplateSubMenuId:number): Observable<any[]> {              
    const apiUrl = `${baseUrl}/Framework/GetDistinctScreenNameByTemplateSubMenuId/${TemplateSubMenuId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  getselectedItems(Id:number,ReportId:any): Observable<any[]> {              
    const apiUrl = `${baseUrl}/Framework/GetTemplateSubMenuItemDetailsByTemplateId/${Id}/${ReportId}`;   
     return this._httpClient.get<any[]>(apiUrl);
  }
  getReportTemplateMenuSubIdByReportId(ReportId: any){
    const apiUrl = `${baseUrl}/ReportGeneration/GetReportTemplateMenuSubIdByReportId/${ReportId}`;
    return this._httpClient.get(apiUrl);
    }
  getLookupHdr() {
    const apiUrl = `${baseUrl}/Lookup/GetLookupHdrDetails`;
    return this._httpClient.get<any[]>(apiUrl);
  }
  
    getLookupDtl() {
      const apiUrl = `${baseUrl}/Lookup/GetLookupDtlDetails`;
      return this._httpClient.get<any[]>(apiUrl);
  }
  
  getLookupDtlDetailsByHdrCode(Code){
    const apiUrl = `${baseUrl}/Lookup/GetLookupDetailsByHdrCode/Code/${Code}`;
  return this._httpClient.get(apiUrl);
  }
  getNICCode(){
    const apiUrl = `${baseUrl}/Lookup/GetNICCode`;
  return this._httpClient.get(apiUrl);
  }
  getNICCodefilter(Code){
    const apiUrl = `${baseUrl}/Lookup/GetNICCodefilter/${Code}`;
  return this._httpClient.get(apiUrl);
  }
  getLookupDtlDetailsById(Id){
    const apiUrl = `${baseUrl}/Lookup/GetLookupDtlDetailsById/${Id}`;
  return this._httpClient.get(apiUrl);
  }
  getLookupHdrDetailsById(Id){
    const apiUrl = `${baseUrl}/Lookup/GetLookupHdrById/${Id}`;
  return this._httpClient.get(apiUrl);
  }
  getLookupDetailsByHdrId(Id){
    const apiUrl = `${baseUrl}/Lookup/GetLookupDtlByHdrId/${Id}`;
  return this._httpClient.get(apiUrl);
  }

  finalArr1:any = [];
templatedata1:any;
validate(object){
  var b=object;
  
}
  getData1(ReportId:number): TreeviewItem[] {
    this.finalArr1 = [];
    console.log(this.finalArr1);
    
   this.GetTestpurposeTemplateMenuDetailsforimp(ReportId).subscribe((rep)=>{
     console.log(rep);
   
     this.templatedata1=rep

 
    for(let i=0;i<=this.templatedata1.length-1;i++)
    {
             let obj = {
               text: this.templatedata1[i].text,
               value: this.templatedata1[i].value,
               collapsed: this.templatedata1[i].collapsed,
               children: JSON.parse(this.templatedata1[i].children),
             };
           
           this.finalArr1.push(new TreeviewItem(obj))
           if(this.templatedata1.length-1 ==i)
           {
             console.log(this.finalArr1);
             
           }
          
    } 
    //this.validate(this.finalArr1.splice(-1))

 
})

console.log(this.finalArr1)
var a=this.validate(Object);
console.log(a);
return this.finalArr1

 }
 GetSelectedTemplateMenuCategoryTreeView(ReportId:any): Observable<any[]> {              
  const apiUrl = `${baseUrl}/Framework/GetSelectedTemplateMenuCategoryTreeView/${ReportId}`;   
   return this._httpClient.get<any[]>(apiUrl);
}

getSelectedTemplateMenuCategoryTreeView(ReportId:any): TreeviewItem[] {
  this.finalArr1 = [];
  
 this.GetSelectedTemplateMenuCategoryTreeView(ReportId).subscribe((rep)=>{
   this.templatedata1=rep
   console.log(rep)
  for(let i=0;i<=this.templatedata1.length-1;i++)
  {
        
         this.finalArr1.push(new TreeviewItem(this.templatedata1[i]))
         if(this.templatedata1.length-1 ==i)
         {
           console.log(this.finalArr1);
           
         }
        
  } 
 
})

console.log(this.finalArr1)
var a=this.validate(Object);
return this.finalArr1

}
  }
  