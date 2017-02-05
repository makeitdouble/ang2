import { Component, Input } from '@angular/core';
import { User } from '../user'
import { Services } from '../services';



@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
    providers: [Services]

})
export class UserListComponent {

    @Input() name;
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

    constructor(private services: Services) { }
    ngOnInit(): void {
        this.services.getUsers()
            .then(users => this.users = users);
    }
    users: User[];
}
