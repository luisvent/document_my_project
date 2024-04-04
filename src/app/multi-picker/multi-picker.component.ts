import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UtilsService} from "../services/utils.service";

export interface PickerItem {
    name: string;
    value: string;
}

@Component({
    selector: 'app-multi-picker',
    templateUrl: './multi-picker.component.html',
    styleUrls: ['./multi-picker.component.css']
})
export class MultiPickerComponent {

    @Input()
    items: PickerItem[] = [];

    @Input()
    title: string = 'items';

    @Output()
    selectedItemsChange = new EventEmitter<PickerItem[]>();

    selectedItems: PickerItem[] = [];

    id = this.utilsService.guid();

    constructor(private utilsService: UtilsService) {
    }

    itemChange(event: Event, item: PickerItem) {
        const target = event.target as HTMLInputElement;
        if (target.checked) {
            this.addItem(item);
        } else {
            this.removeItem(item)
        }
    }

    addItem(item: PickerItem) {
        if (!this.selectedItems.find(i => i.name === item.name)) {
            this.selectedItems.push(item);
            this.emitSelectedEvent();
        }
    }

    emitSelectedEvent() {
        this.selectedItemsChange.emit(this.selectedItems);
    }

    removeItem(item: PickerItem) {
        this.selectedItems = this.selectedItems.filter(i => i.name !== item.name);
        this.emitSelectedEvent();
    }
}
