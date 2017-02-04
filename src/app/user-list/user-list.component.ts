import { Component, Input } from '@angular/core';
import { User } from '../user'
import { Services } from '../services';


var toggleSort = true;

function sortField(value: string){
    if (toggleSort)
    {
        this.users.sort(function (a, b) {
            if (a[value] > b[value]) {
                return 1;
            }
            if (a[value] < b[value]) {
                return -1;
            }
            return 0;
        });
    }else{
        this.users.sort(function (a, b) {
            if (a[value] > b[value]) {
                return -1;
            }
            if (a[value] < b[value]) {
                return 1;
            }
            return 0;
        });
    }
    toggleSort = !toggleSort;
}

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
    providers: [Services]

})
export class UserListComponent {

    @Input() name;
    constructor(private services: Services) { }
    ngOnInit(): void {
        this.services.getUsers()
            .then(users => this.users = users);
    }
    users: User[];
    sortField = sortField;
}
