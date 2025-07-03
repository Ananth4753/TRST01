export interface Stackdetails {
    Id:number;
    WareHouseId:number;
    Name:string;
    Area:string;
    Location:string;
    URL:string;
    IsActive: boolean;
    CreatedDate: Date;
    CreatedByUserId: string;
    UpdatedDate: Date;
    UpdatedByUserId: string;
   
  }
  export interface Stackitems {
   Id:number;
    WareHouseId:number;
    Name:string;
    Area:number;
    Location:string;
    URL:string;
    IsActive: boolean;
    CreatedDate: Date;
    CreatedByUserId: string;
    UpdatedDate: Date;
    UpdatedByUserId: string;
  }