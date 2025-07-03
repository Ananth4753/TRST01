export interface Role {
    Id: number;
    Code: string;
    Name: string;
    ViewYN: boolean;
    CreatedByUserId: number;
    CreatedDate: Date;
    UpdatedByUserId: number;
    UpdatedDate: Date;
}

export interface RoleDetail
{
    Id: number;
    Code: string;
    Name: string;
    ViewYN: boolean;
    CreatedByUser: string;
    CreatedDate: Date;
    UpdatedByUser: string;
    UpdatedDate: Date;
}
