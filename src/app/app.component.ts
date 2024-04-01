import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Actions} from "./store/actions/action-types";
import {selectEditorDescription} from "./store/selectors/editor.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public description$ = this.store.select(selectEditorDescription);
  constructor(private store: Store) {
  }

  ngOnInit(): void {

  }

  addDescription() {
    this.store.dispatch(Actions.addDescription({description: 'testing ngrx'}));
  }
}
