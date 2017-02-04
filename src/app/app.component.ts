import { Component } from '@angular/core';
import { Services } from "./services";
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [Services]
})
export class AppComponent {
    constructor(private services: Services) { };
    user: User[];
   
    getUsers(): void {
        this.services.getUsers().then(users => this.user = users);
    };
    ngOnInit(): void {
        this.getUsers();
    }
}
