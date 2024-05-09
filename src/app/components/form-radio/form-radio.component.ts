import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-form-radio',
    templateUrl: './form-radio.component.html',
    styleUrls: ['./form-radio.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormRadioComponent {

    @Input()
    options: { name: string; value: string; }[] = [];

    @Output()
    change = new EventEmitter<Event>();

    @Input()
    value: string | undefined = '';

    constructor() {
    }

    radioChange(e: Event) {
        this.value = (e.target as HTMLInputElement).value;
        e.stopPropagation();
        e.preventDefault();
        this.change.emit(e);
    }
}
