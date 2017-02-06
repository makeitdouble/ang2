import { Component } from '@angular/core';
import { Services } from "./services";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [Services]
})
export class AppComponent {
   

}
