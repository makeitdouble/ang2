import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent }   from './user-list/user-list.component';
import { UserDetailsComponent }      from './user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',  component: UserListComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: '**', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
