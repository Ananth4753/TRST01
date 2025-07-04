export interface SKUDetail
{
    Id: number;
    Code: string;
    Name:string,
    UOM :Number,
    Qty: number;
    ProductId: number;
    PackingMaterialId:number;
    IsActive: boolean;
    CreatedDate: Date;
    CreatedByUserId:number;
    UpdatedDate: Date;
    UpdateByUserId: number;

}

export interface SKUItem
{
    Id: number;
    Code: string;
    Name:string,
    Weight :string,
    WarehouseStockId: number;
    ProductId: number;
    PackingMaterialId:number;
    IsActive: boolean;
    CreatedDate: Date;
    CreatedByUserId:number;
    UpdatedDate: Date;
    UpdateByUserId: number;

}