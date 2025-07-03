import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'environments/environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { MenuDetail, MenuItem } from './menu.types';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    private _menuItems: BehaviorSubject<MenuDetail[] | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {

    }

    /**
     * Getter for product
     */
     get menuItems$(): Observable<MenuDetail[]>
     {
        return this._menuItems.asObservable();
     }

     /**
     * Get menu details
     *
     * @param userId
     */
    getMenuDetails(): Observable<MenuDetail[]> {
        const apiUrl = `${baseUrl}/Menu/GetMenuDetails`;
        return this._httpClient.get(apiUrl).pipe(
            tap((menuItems: MenuDetail[]) => {
                this._menuItems.next(menuItems);
            })
        );
    }

    /**
     * Get menu details
     *
     * @param menuId
     */
    getMenuById(menuId): Observable<MenuItem[]> {
        const apiUrl = `${baseUrl}/Menu/GetMenu/${menuId}`;
        return this._httpClient.get<MenuItem[]>(apiUrl);
    }

    createMenu(menuItem: MenuItem): Observable<MenuItem> {
        const apiUrl = `${baseUrl}/Menu/AddMenu`;
        return this._httpClient.post<MenuItem>(apiUrl, menuItem);
    }

}
