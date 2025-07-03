export interface LookupDetail
{
    Id :number;
    LookupHdrId :number, 
    Code :string,
    Name:string,
    Remarks:string,
    Ord:number,
    IsActive:boolean,
    CreatedDate :Date,
    CreatedByUserId:number,
    UpdatedDate:Date,
    UpdatedByUserId:number
}

export interface LookuphdrDetail
{
    Id :number;
    Code :string,
    Name:string,
    IsActive:boolean,
    CreatedDate :Date,
    CreatedByUserId:number,
    UpdatedDate:Date,
    UpdatedByUserId:number
}