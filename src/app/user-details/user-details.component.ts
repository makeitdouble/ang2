import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Services } from "../services";
import { User } from '../user';


@Component({

  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
    providers:[Services]
})
export class UserDetailsComponent implements OnInit {
    
    user: User;
    constructor(
        private services: Services,
        private route: ActivatedRoute
    ){};

    ngOnInit(): void {
        this.route.params
            .switchMap( (params: Params) => this.services.getUser( params['id']))
            .subscribe(user => this.user = user);
    };
}