import {AppState} from "../state.interface";
import {createSelector} from "@ngrx/store";
import {EditorState} from "../reducers/editor.reducer";

export const editorSelector = (state: AppState) => state.editor;

export const selectGeneratedMarkdown = createSelector(
    editorSelector,
    (state: EditorState) => state.generatedMarkdown)

export const selectGeneratingMarkdown = createSelector(
    editorSelector,
    (state: EditorState) => state.generateMarkdown)
