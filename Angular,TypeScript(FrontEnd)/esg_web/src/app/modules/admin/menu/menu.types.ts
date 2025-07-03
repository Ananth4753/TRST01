export interface MenuDetail
{
    Id: number;
    Code: string;
    Name: string;
    MenuType: string;
    ParentMenu?: string;
    ViewYN: boolean;
    Path: string;
    Icon: string;
    Order: number;
    CreatedDate: Date;
    CreatedByUser: string;
    UpdatedDate: Date;
    UpdatedByUser: string;
}

export interface MenuItem
{
    Id: number;
    Code: string;
    Name: string;
    MenuType: string;
    ParentMenuId?: number;
    ViewYN: boolean;
    Path: string;
    Icon: string;
    Order: number;
    CreatedDate: Date;
    CreatedByUserId: number;
    UpdatedDate: Date;
    UpdatedByUserId: number;
}
