export interface RoleMenuDetail {
    Id: number;
    Role: string;
    ParentMenu?: string;
    Menu: string;
    AddYN: boolean;
    EditYN: boolean;
    ViewYN: boolean;
    DeleteYN: boolean;
    MenuId: number;
    RoleId: number;
    CreatedByUserId: number;
    CreatedByUser: string;
    CreatedDate: Date;
    UpdatedByUserId: number;
    UpdatedByUser: string;
    UpdatedDate: Date;
}

export interface RoleMenu {
    Id: number;
    RoleId: number;
    MenuId: number;
    AddYN: boolean;
    EditYN: boolean;
    ViewYN: boolean;
    DeleteYN: boolean;
    CreatedDate: Date;
    CreatedByUserId: number;
    UpdatedDate: Date;
    UpdatedByUserId: number;
}
