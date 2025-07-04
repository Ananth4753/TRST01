export interface productdetails {
    Id:number;
    CategoryId:number;
    Name:string;
    Description:string;
    BrandId:number;
    ProductCode:string;
    Qty:number;
    IsActive: boolean;
    CreatedDate: Date;
    CreatedByUserId: string;
    UpdatedDate: Date;
    UpdatedByUserId: string;
   
  }
  export interface productitems {
   Id:number;
    CategoryId:number;
    Name:string;
    Description:number;
    BrandId:number;
    ProductCode:string;
    Qty:number;
    IsActive: boolean;
    CreatedDate: Date;
    CreatedByUserId: string;
    UpdatedDate: Date;
    UpdatedByUserId: string;
  }