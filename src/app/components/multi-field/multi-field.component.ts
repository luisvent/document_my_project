import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UtilsService} from "../../services/utils.service";
import {FeatureOptions} from "../../interfaces/feature-options.interface";

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
    set value(features: FeatureOptions[] | null) {
        if (!features) return;

        this.entries = [];
        features.forEach(feature => {
            this.entries.push(this.generateFields([feature.title, feature.description]));
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
