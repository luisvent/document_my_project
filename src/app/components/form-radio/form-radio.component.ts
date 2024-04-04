import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-form-radio',
    templateUrl: './form-radio.component.html',
    styleUrls: ['./form-radio.component.css']
})
export class FormRadioComponent {

    @Input()
    options: { name: string; value: string; }[] = [];

    @Output()
    change = new EventEmitter<Event>();

    value = '';

    constructor() {
    }


    radioChange(e: Event) {
        this.value = (e.target as HTMLInputElement).value;
        e.stopPropagation();
        e.preventDefault();
        this.change.emit(e);
    }
}
