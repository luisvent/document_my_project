import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-md-code-snippet',
    templateUrl: './md-code-snippet.component.html',
    styleUrls: ['./md-code-snippet.component.css']
})
export class MdCodeSnippetComponent {
    @Input()
    text: string = ''
}
