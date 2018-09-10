import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';
import { LoginPayload } from '../models/payload';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class UserService {

    /**
     * The API signature for user related API calls.
     */
    static API = {
        LOGIN: '/api/authentication/login',
        LOGOUT: '/api/v1/logout',
        CURRENT_USER: '/api/v1/users/current'
    };

    constructor(private http: HttpClient) { }

    /**
     * The authorized current logged in user
     */
    currentUser: User;

    /**
     * Finds the currently authorized user.
     */
    getCurrentUser() {
        return this.http.get(UserService.API.CURRENT_USER)
            .pipe(
                map((user: any) => {
                    return new User(user);
                }),
                tap(user => {
                    this.currentUser = user;
                })
            );
    }

    /**
     * Attempts to login an user.
     * @param payload The request payload of the login form
     */
    login(payload: LoginPayload) {
        return this.http.post(UserService.API.LOGIN, payload);
    }

}
