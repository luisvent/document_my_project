import {Component, Input} from '@angular/core';
import {IconType} from "../svg-icon/svg-icon.component";

@Component({
    selector: 'app-section-title',
    templateUrl: './section-title.component.html',
    styleUrls: ['./section-title.component.css']
})
export class SectionTitleComponent {

    @Input()
    title = ''

    @Input()
    iconType?: IconType;

    constructor() {
    }

}
