import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'namefilter'
})
export class NameFilter implements PipeTransform {
    transform(value: any, args: string[]): any {
       /* return users.filter((user) => input ? user.name.startsWith(input) : true); */
     /* */
        if (args[0]){
            let filter = args[0].toLocaleLowerCase();
            console.log(filter);
            return value.filter(user => user.name.toLocaleLowerCase().indexOf(filter) != -1);
        }
        return value;
    }
}