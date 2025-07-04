import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'environments/environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserDetail, UserItem } from './user.types';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _userItems: BehaviorSubject<UserDetail[] | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {

    }

    /**
     * Getter for product
     */
    get userItems$(): Observable<UserDetail[]> {
        return this._userItems.asObservable();
    }

    /**
    * Get menu details
    *
    * @param userId
    */
    getUserDetails(): Observable<UserDetail[]> {
        const apiUrl = `${baseUrl}/User/GetUserDetails`;
        return this._httpClient.get(apiUrl).pipe(
            tap((menuItems: UserDetail[]) => {
                this._userItems.next(menuItems);
            })
        );
    }

    /**
     * Get menu details
     *
     * @param userId
     */
    getUserById(userId): Observable<UserItem[]> {
        const apiUrl = `${baseUrl}/User/GetUsers/${userId}`;
        return this._httpClient.get<UserItem[]>(apiUrl);
    }
    getUserinorg(orgid): Observable<UserDetail[]> {
        const apiUrl = `${baseUrl}/User/GetUsersinOrganization/${orgid}`;
        return this._httpClient.get(apiUrl).pipe(
            tap((menuItems: UserDetail[]) => {
                this._userItems.next(menuItems);
            })
        );
    }
    
    UpdateUserPassword(Password,Id): Observable<UserItem[]> {
        const apiUrl = `${baseUrl}/User/UpdateUsersPassword/${Password}/${Id}`;
        return this._httpClient.get<UserItem[]>(apiUrl);
    }
    createUser(userItem: UserItem): Observable<any> {
        const apiUrl = `${baseUrl}/User/AddUser`;
        return this._httpClient.post(apiUrl, userItem);
    }

}
