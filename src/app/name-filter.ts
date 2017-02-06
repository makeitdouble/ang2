import {Pipe} from '@angular/core';

@Pipe({
  name: 'namefilter'
})
export class NameFilter {
    transform(value: any, args: string[]): any {
        if (args){
            var argsArr = [];
            for (var i = 0; i < args.length; i++) {
                argsArr.push(args[i]);
            }
            var filter = argsArr.join('');
            return value.filter(user => user.name.toLocaleLowerCase().indexOf(filter) > -1);
        }
        return value;
    }
}