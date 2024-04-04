import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-form-field',
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent {
    @Input()
    disabled = false;

    @Input()
    placeholder = '';

    @Input()
    textarea = false;

    @Output()
    change = new EventEmitter<Event>();

    value = '';

    constructor() {
    }

    inputChange(e: Event) {
        this.change.emit(e);
    }
}
