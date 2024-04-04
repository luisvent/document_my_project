import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectDisplayMarkdown, selectEditorDescription} from "./store/selectors/editor.selectors";
import {readmeDemo} from "../data/data";
import {AppState} from "./store/state.interface";
import {initFlowbite} from "flowbite";
import {MarkdownService} from "./services/markdown.service";
import {UtilsService} from "./services/utils.service";
import {ToastService} from "./services/toast.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public description$ = this.store.select(selectEditorDescription);
    public displayMarkdown$ = this.store.select(selectDisplayMarkdown);
    public markdownData = readmeDemo;
    formattedCode = '';

    constructor(private store: Store<AppState>, private mdService: MarkdownService,
                private utilsService: UtilsService, public toastService: ToastService) {
    }

    ngOnInit(): void {
        initFlowbite();
        this.markdownData = this.mdService.test();
    }

}
