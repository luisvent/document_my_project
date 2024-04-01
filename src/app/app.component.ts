import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Actions} from "./store/actions/action-types";
import {selectDisplayMarkdown, selectEditorDescription} from "./store/selectors/editor.selectors";
import {readmeDemo} from "../data/data";
import {AppState} from "./store/state.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public description$ = this.store.select(selectEditorDescription);
  public displayMarkdown$ = this.store.select(selectDisplayMarkdown);
  public markdownData = readmeDemo;


  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {

  }

  generateMarkdown() {
    this.store.dispatch(Actions.displayMarkdownResult())
  }

  addDescription() {
    this.store.dispatch(Actions.addDescription({description: 'testing ngrx'}));
  }
}
