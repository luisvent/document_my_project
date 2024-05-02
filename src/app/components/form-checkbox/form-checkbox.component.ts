import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-form-checkbox',
    templateUrl: './form-checkbox.component.html',
    styleUrls: ['./form-checkbox.component.css']
})
export class FormCheckboxComponent implements AfterViewInit {

    @Input()
    disabled = false;

    @Input()
    toggle = true;

    @Input()
    title = '';

    @Output()
    change = new EventEmitter<Event>();

    @Input()
    value: boolean | undefined | null = false;

    id = '';

    constructor(private utilsService: UtilsService) {
        this.id = `checkbox-${this.utilsService.guid()}`;
    }

    ngAfterViewInit(): void {
        if (this.value) {
            const toggleInput = document.querySelector(`#${this.id}`);
            toggleInput?.dispatchEvent(new Event('change', {bubbles: true}))
        }
    }

    checkboxChange(e: Event) {
        this.value = (e.target as HTMLInputElement).checked;
        e.stopPropagation();
        e.preventDefault();
        this.change.emit(e);
    }

}
