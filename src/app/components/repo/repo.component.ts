import {Component} from '@angular/core';

@Component({
    selector: 'app-repo',
    templateUrl: './repo.component.html',
    styleUrls: ['./repo.component.css']
})
export class RepoComponent {

    OpenProjectRepo() {
        window.open('https://github.com/luisvent/document_my_project', '_blank');
    }
}
