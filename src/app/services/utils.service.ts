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

    /**
     * Saves the provided text as a file.
     * @param text - The text content to be saved.
     * @param fileName - The desired name for the file.
     * @param fileType - The file type or extension (e.g., '.txt', '.md', '.html').
     */
    saveTextAsFile(text: string, fileName: string = 'readme', fileType: string = 'md') {
        const blob = new Blob([text], {type: `text/${fileType.replace('.', '')}`});
        const anchor = document.createElement('a');
        anchor.download = `${fileName}.${fileType}`;
        anchor.href = window.URL.createObjectURL(blob);
        anchor.dataset['downloadedFilename'] = `${fileName}${fileType}`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }
}
