import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-section-title',
    templateUrl: './section-title.component.html',
    styleUrls: ['./section-title.component.css']
})
export class SectionTitleComponent {

    @Input()
    title = ''

    constructor() {
    }

}
