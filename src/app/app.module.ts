import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { Services } from "./services";

import { AppComponent }         from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {NameFilter} from "./name-filter";
import { SearchBox } from './search-box';

@NgModule({

    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpModule
    ],

    declarations: [
        AppComponent,
        UserListComponent,
        UserDetailsComponent,
        NameFilter,
        SearchBox
    ],

  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }

