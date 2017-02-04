import {Pipe} from '@angular/core';

@Pipe({
  name: 'namefilter',
    pure: false
})
export class NameFilter {
  transform(value, [input]) {
      return value.filter((user) => user.name.startsWith(input));
  }

}