import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'environments/environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Role, RoleDetail } from './role.types';

@Injectable({
    providedIn: 'root'
})
export class RoleService {
    private _roleItems: BehaviorSubject<RoleDetail[] | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    get roleItems$(): Observable<RoleDetail[]> {
        return this._roleItems.asObservable();
    }

    /**
     * Get all role details
     */
    getRoles(): Observable<Role[]> {
        const apiUrl = `${baseUrl}/Role/GetRoles`;
        return this._httpClient.get<Role[]>(apiUrl);
    }

    getRoleDetails(): Observable<RoleDetail[]> {
        const apiUrl = `${baseUrl}/Role/GetRoleDetails`;
        return this._httpClient.get<RoleDetail[]>(apiUrl).pipe(
            tap((roles) => {
                this._roleItems.next(roles);
            })
        );
    }

    getRoleById(roleId): Observable<Role[]> {
        const apiUrl = `${baseUrl}/Role/GetRoles/${roleId}`;
        return this._httpClient.get<Role[]>(apiUrl);
    }

    createRole(roleItem: Role): Observable<Role> {
        const apiUrl = `${baseUrl}/Role/AddRole`;
        return this._httpClient.post<Role>(apiUrl, roleItem);
    }
}
