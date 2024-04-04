import {Injectable} from '@angular/core';

import {highlight, languages} from "prismjs";

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    constructor() {
    }

    formatCode(text: string) {
        const html = highlight(text, languages['html'], 'html');
        return html;
    }

    copyToClipboard(text: string) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = text;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        selBox.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(selBox.value);
        document.body.removeChild(selBox);
    }

    guid() {
        return 'id-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}
