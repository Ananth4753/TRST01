import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'environments/environment';
import { Observable } from 'rxjs';
import { RoleMenu, RoleMenuDetail } from './role-menu.types';

@Injectable({
    providedIn: 'root'
})
export class RoleMenuService {

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {

    }

    /**
    * Get menu details
    *
    * @param roleId
    */
    getRoleMenuDetails(roleId: number): Observable<RoleMenuDetail[]> {
        const apiUrl = `${baseUrl}/RoleMenu/GetRoleMenuDetails/${roleId}`;
        return this._httpClient.get<RoleMenuDetail[]>(apiUrl);
    }

    /**
     * Get menu details
     *
     * @param roleMenuId
     */
    getRoleMenu(roleMenuId): Observable<RoleMenu[]> {
        const apiUrl = `${baseUrl}/RoleMenu/GetRoleMenu/${roleMenuId}`;
        return this._httpClient.get<RoleMenu[]>(apiUrl);
    }

    updateRoleMenu(roleMeunu: RoleMenu): Observable<RoleMenu> {
        const apiUrl = `${baseUrl}/RoleMenu/AddRoleMenu`;
        return this._httpClient.post<RoleMenu>(apiUrl, roleMeunu);
    }

}
