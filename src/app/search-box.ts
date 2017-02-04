import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'search-box',
    template: '<input #input type="text" (keyup)="update.emit(input.value)" />'
})
export class SearchBox{
    @Output() update = new EventEmitter();

    ngOnInit(){
        this.update.emit('');
    }
}