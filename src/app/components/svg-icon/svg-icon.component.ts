import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-svg-icon',
    templateUrl: './svg-icon.component.html',
    styleUrls: ['./svg-icon.component.css']
})
export class SvgIconComponent {

    @Input()
    type: IconType | undefined;

}

export type IconType =
    'info' |
    'none'
