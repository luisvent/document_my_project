import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {

    OpenProjectRepo() {
        window.open('https://github.com/luisvent/document_my_project', '_blank');
    }
}
