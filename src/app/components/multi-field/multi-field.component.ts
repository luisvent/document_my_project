import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-multi-field',
    templateUrl: './multi-field.component.html',
    styleUrls: ['./multi-field.component.css']
})
export class MultiFieldComponent {

    @Input()
    fields: string[] = [];

    @Output()
    change = new EventEmitter<string[][]>;

    entries: { id: string, name: string[] }[] = [];

    constructor(private utilsService: UtilsService) {
    }

    addEntry() {
        this.entries.push(this.generateFields());
    }

    generateFields() {
        const fields = [];

        for (const field of this.fields) {
            fields.push('');
        }
        return {id: this.utilsService.guid(), name: fields};
    }

    removeEntry(id: string) {
        this.entries = this.entries.filter(e => e.id !== id);
        this.emitChange();
    }

    emitChange() {
        this.change.emit(this.entries.map(e => e.name))
    }

    assignValue(value: string, key: number, index: number) {
        this.entries[index].name[key] = value;
        this.emitChange()
    }
}
