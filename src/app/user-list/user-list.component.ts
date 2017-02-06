import { Component } from '@angular/core';
import { User } from '../user'
import { Services } from '../services';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
    providers: [Services]

})
export class UserListComponent {

    constructor(private services: Services) { }

    users: User[];
    fields = ['photo', 'name', 'surname', 'age', 'city', 'sex'];
    totalAge: number = 0;
    totalUsers: number = 0;
    maleCounter: number = 0;
    femaleCounter: number = 0;

    sortParams: { "field": string, "asc": boolean } = { "field": null, "asc": true};

    sortField(field: string): void {

        if (!this.sortParams.field){
            this.sortParams.field = field;
        }

        if( this.sortParams.field != field || this.sortParams.asc){

            let f = this.sortParams.field = field;
            this.sortParams.asc = false;

            this.users.sort(function (a, b) {
                if (a[f] > b[f]) {
                    return 1;
                }
                if (a[f] < b[f]) {
                    return -1;
                }
                return 0;
            });

        }else{

            this.sortParams.asc = true;
            let f = this.sortParams.field;

            this.users.sort(function (a, b) {
                if (a[f] > b[f]) {
                    return -1;
                }
                if (a[f] < b[f]) {
                    return 1;
                }
                return 0;
            });
        }
    }

    renderInfo(users: User[]): void {

        this.users = users;
        this.totalUsers = users.length;
        
        for (let i = 0; i < users.length; i++){
            this.totalAge += +users[i].age;
            
            if( users[i].sex === 'male' ){
                this.maleCounter++;
            }else{
                this.femaleCounter++;
            }
        }
        this.totalAge = this.totalAge / users.length;
    }

    ngOnInit(): void {
        this.services.getUsers()
            .then(users => this.renderInfo(users));
    }
}
