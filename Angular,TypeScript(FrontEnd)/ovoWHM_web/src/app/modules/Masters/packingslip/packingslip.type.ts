export interface PackingSlipDetails
{
    Id :number;
    PackingSlipHDRId :number, 
    ProductId :number,
    SkuId:number,
    Quantity:number,
    IsActive:boolean,
    CreatedDate :Date,
    CreatedByUserId:number,
    UpdatedDate:Date,
    UpdatedByUserId:number
}

export interface PackingSliphdrDetails
{
    Id :number;
    Code :string,
    InTransit:boolean,
    IsInHouseTransfer:boolean,
    LossInTransit:boolean,
    GRNConfirmation:Boolean,
    DaysInTransit:number,
    WareHouseId:number,
    Status:number,
    Type:null,
    IsActive:boolean,
    CreatedDate :Date,
    CreatedByUserId:number,
    UpdatedDate:Date,
    UpdatedByUserId:number
}
