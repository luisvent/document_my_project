import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-form-checkbox',
    templateUrl: './form-checkbox.component.html',
    styleUrls: ['./form-checkbox.component.css']
})
export class FormCheckboxComponent {

    @Input()
    disabled = false;

    @Input()
    toggle = true;

    @Input()
    title = '';

    @Output()
    change = new EventEmitter<Event>();

    value = false;

    id = '';

    constructor(private utilsService: UtilsService) {
        this.id = `checkbox-${this.utilsService.guid()}`;
    }

    checkboxChange(e: Event) {
        this.value = (e.target as HTMLInputElement).checked;
        e.stopPropagation();
        e.preventDefault();
        this.change.emit(e);
    }

}
