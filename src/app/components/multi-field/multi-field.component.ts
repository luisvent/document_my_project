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

    @Input()
    textarea: boolean = false;
    @Output()
    valueChange = new EventEmitter<string[][]>;
    entries: { id: string, name: string[] }[] = [];

    constructor(private utilsService: UtilsService) {
    }

    @Input()
    set value(values: any[] | null) {
        if (!values) return;


        this.entries = [];
        values.forEach(value => {
            console.log(typeof value)
            if (typeof value === 'string') {
                this.entries.push(this.generateFields([value]));
            } else if (typeof value === 'object') {
                Object.keys(value).forEach(key => {
                    this.entries.push(this.generateFields([value[key], value[key]]));
                })
            }
        })

        console.log(this.entries)
    }

    addEntry() {
        this.entries.push(this.generateFields());
    }

    generateFields(values: string[] = []) {
        const fields = [];

        for (let i = 0; i < this.fields.length; i++) {
            // const field = this.fields[i];
            fields.push(values[i] ?? '');
        }
        return {id: this.utilsService.guid(), name: fields};
    }

    removeEntry(id: string) {
        this.entries = this.entries.filter(e => e.id !== id);
        this.emitChange();
    }

    emitChange() {
        this.valueChange.emit(this.entries.map(e => e.name))
    }

    assignValue(value: string, key: number, index: number) {
        this.entries[index].name[key] = value;
        this.emitChange()
    }
}
