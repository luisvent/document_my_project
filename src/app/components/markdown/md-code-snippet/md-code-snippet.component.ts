import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UtilsService} from "../../../services/utils.service";
import {ToastService} from "../../../services/toast.service";

@Component({
    selector: 'app-md-code-snippet',
    templateUrl: './md-code-snippet.component.html',
    styleUrls: ['./md-code-snippet.component.css']
})
export class MdCodeSnippetComponent {
    @Input()
    text: string = ''

    @Output()
    updateFileGenerated = new EventEmitter();

    tabEnabled: 'preview' | 'raw' = 'preview';
    theme: 'dark' | 'light' = 'light';

    constructor(private utilsService: UtilsService, private toastService: ToastService) {
    }

    switchTab(tab: 'preview' | 'raw') {
        this.tabEnabled = tab;
    }

    copyCode() {
        this.utilsService.copyToClipboard(this.text);
        this.toastService.success('Copied!');
    }

    switchTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
    }

    downloadReadme() {
        this.utilsService.saveTextAsFile(this.text);
        this.toastService.success('File Downloaded!');
    }

    updateFileRequest() {
        this.updateFileGenerated.emit();
    }
}
