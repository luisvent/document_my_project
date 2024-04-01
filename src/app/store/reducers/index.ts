import {
  ActionReducerMap,
} from '@ngrx/store';
import {AppState} from "../state.interface";
import {editorReducer} from "./editor.reducer";

export const reducers: ActionReducerMap<AppState> = {
  editor: editorReducer
};

