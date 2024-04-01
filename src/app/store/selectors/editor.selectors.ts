import {AppState} from "../state.interface";
import {createSelector} from "@ngrx/store";
import {EditorState} from "../reducers/editor.reducer";

export const editorSelector = (state: AppState) => state.editor;

export const selectEditorDescription = createSelector(
    editorSelector,
    (state: EditorState) => state.description)

export const selectDisplayMarkdown = createSelector(
    editorSelector,
    (state: EditorState) => state.displayMarkdownResult)
