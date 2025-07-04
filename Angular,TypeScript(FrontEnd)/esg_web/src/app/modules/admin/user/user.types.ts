export interface UserDetail
{
    Id: number;
    UserName: string;
    Password: string;
    FirstName: string;
    MiddileName: string;
    LastName: string;
    EmailId: string;
    Designation:string;
    MobileNumber: string;
    RoleId:number;
    ViewYN: boolean;
    CreatedDate: Date;
    CreatedByUser: string;
    UpdatedDate: Date;
    UpdatedByUser: string;
}

export interface UserItem
{
    Id: number;
    UserName: string;
    Password: string;
    FirstName: string;
    MiddileName: string;
    LastName: string;
    EmailId: string;
    Designation:string;
    MobileNumber: string;
    ViewYN: boolean;
    RoleId: number;
    CreatedDate: Date;
    CreatedByUserId: number;
    UpdatedDate: Date;
    UpdatedByUserId: number;
}
