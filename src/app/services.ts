import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'
import { User } from './user';


@Injectable()
export class Services {
    private usersUrl = 'server/test.json';
    constructor(private http: Http) { }

    getUsers(): Promise<User[]> {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json().result as User[])
            .catch(this.handleError);
    }
    getUser(id: string): Promise<User> {
        return this.getUsers()
            .then(users => users.find(user => user.id === id));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
