import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectGeneratedMarkdown} from "./store/selectors/editor.selectors";
import {AppState} from "./store/state.interface";
import {initFlowbite} from "flowbite";
import {MarkdownService} from "./services/markdown.service";
import {ToastService} from "./services/toast.service";
import {Actions} from "./store/actions/action-types";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public generatedMarkdown$ = this.store.select(selectGeneratedMarkdown);

    constructor(private store: Store<AppState>, private mdService: MarkdownService,
                public toastService: ToastService) {
    }

    ngOnInit(): void {
        initFlowbite();
        // this.markdownData = this.mdService.test();
    }

    GenerateMarkdown() {
        this.store.dispatch(Actions.generateMarkdown({generate: true}));
        window.scroll(0, 0);
    }
}
