import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Navigation } from 'app/core/navigation/navigation.types';
import { baseUrl } from 'environments/environment';
import { cloneDeep } from 'lodash-es';
import { Observable, ReplaySubject, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    private _navigation: ReplaySubject<Navigation> = new ReplaySubject<Navigation>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for navigation
     */
    get navigation$(): Observable<Navigation> {
        return this._navigation.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all navigation data
     */
    get(userId: any): Observable<Navigation> {
        const apiUrl = `${baseUrl}/Menu/GetMenuByUser/` + userId;
        return this._httpClient.get<any>(apiUrl).pipe(
            tap((result) => {
                this.processNavigationItems(result);
                const navigation: Navigation = {
                    compact: cloneDeep(result),
                    default: cloneDeep(result),
                    futuristic: cloneDeep(result),
                    horizontal: cloneDeep(result)
                };
                this._navigation.next(navigation);
            })
        );
    }

    /**
     * Parse navigation details as per the FUSE Template needs,
     * Change this code based on future requirements
     * @param navigationItems
     */
    processNavigationItems(navigationItems): void {
        navigationItems?.forEach((navigationItem) => {
            if (navigationItem.type === 'M') {
                if (navigationItem?.children?.length > 0) {
                    navigationItem.type = 'collapsable';
                } else {
                    navigationItem.type = 'basic';
                }
            } else if (navigationItem.type === 'S') {
                navigationItem.type = 'collapsable';
            } else if (navigationItem.type === 'I') {
                navigationItem.type = 'basic';
            }

            return this.processNavigationItems(navigationItem.children);
        });
    }
}
