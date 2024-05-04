import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {UtilsService} from "../../services/utils.service";

export interface PickerItem {
    name: string;
    value: string;
    description: string;
}

@Component({
    selector: 'app-multi-picker',
    templateUrl: './multi-picker.component.html',
    styleUrls: ['./multi-picker.component.css']
})
export class MultiPickerComponent implements OnInit, OnChanges {

    @Input()
    items: PickerItem[] = [];

    @Input()
    title: string = 'items';

    @Input()
    value: string[] = [];

    @Output()
    selectedItemsChange = new EventEmitter<PickerItem[]>();

    selectedItems: PickerItem[] = [];

    id = this.utilsService.guid();

    constructor(private utilsService: UtilsService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.value.length === 0) {
            this.selectedItems = [];
        }
    }

    ngOnInit(): void {
        if (this.value.length > 0) {
            const items = this.items.filter(i => this.value.includes(i.value));
            this.selectedItems = [...new Set(items)];
        }
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
