import {Component, OnInit} from '@angular/core';
import {technologies} from "../../../data/technologies";
import {PickerItem} from "../multi-picker/multi-picker.component";
import {Actions} from "../../store/actions/action-types";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/state.interface";
import {MarkdownService} from "../../services/markdown.service";
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";
import {LicenseType} from "../../enums/license-type.enum";

interface InputInteraction {
    type: string;
    value: string | boolean;
}

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    technologies = technologies;
    licenses: { name: string; value: string }[] = [];
    protected readonly LicenseType = LicenseType;
    private debounceInput$ = new Subject<InputInteraction>();

    constructor(private store: Store<AppState>, private mdService: MarkdownService) {
        this.getLicenses();
    }

    getLicenses() {
        this.licenses = Object.keys(LicenseType).map(key => {
            return {
                name: LicenseType[key as keyof typeof LicenseType], value: key
            }
        })
    }

    ngOnInit(): void {
        this.debounceInput$.pipe(
            debounceTime(500),
            distinctUntilChanged()).subscribe(input => {
            this.processInput(input);
        })
    }

    selectedTechnologies(technologies: PickerItem[]) {
        console.log(technologies)
    }

    generateMarkdown() {
        this.store.dispatch(Actions.displayMarkdownResult());
        window.scroll(0, 0);
    }

    inputChange(type: string, target: EventTarget | null | boolean) {
        this.debounceInput$.next({
            type,
            value: (target as HTMLInputElement).checked || (target as HTMLInputElement).value
        });
    }

    processInput(input: InputInteraction) {
        console.log(input)
        switch (input.type) {

            case 'title':
                break;
        }
    }
}
