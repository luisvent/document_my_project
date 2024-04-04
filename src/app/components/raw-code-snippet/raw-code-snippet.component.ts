import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UtilsService} from "../../services/utils.service";

@Component({
    selector: 'app-raw-code-snippet',
    templateUrl: './raw-code-snippet.component.html',
    styleUrls: ['./raw-code-snippet.component.css']
})
export class RawCodeSnippetComponent {

    @Input()
    code: string = ''

    @Output()
    codeCopied: EventEmitter<string> = new EventEmitter<string>();

    constructor(private utilsService: UtilsService) {

    }

    copyCode() {
        this.utilsService.copyToClipboard(this.code);
        this.codeCopied.emit(this.code);
    }
}
