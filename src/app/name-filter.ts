import {Pipe} from '@angular/core';

@Pipe({
  name: 'namefilter',
    pure: false
})
export class NameFilter {
  transform(users, [input]) {
       /* return users.filter((user) => input ? user.name.startsWith(input) : true); */
     /* */
      if (input){
          return users.filter((user) => user.name.toLowerCase().indexOf(input.toLowerCase()) > -1);
      }
      return users;
  }
}