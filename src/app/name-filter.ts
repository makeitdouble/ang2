import {Pipe} from '@angular/core';

@Pipe({
  name: 'namefilter'
})
export class NameFilter {
    transform(value: any, args: string): any {
        if (args){
            console.log(args);
            return value.filter(user => user.name.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) > -1);
        }
        return value;
    }
}