import {createReducer,on} from '@ngrx/store';
import {Actions} from "../actions/action-types";

export interface EditorState {
    description: string,
    displayMarkdownResult: boolean
}

const initialState: EditorState = {
    description: '',
    displayMarkdownResult: false
};

export const editorReducer = createReducer(
    initialState,

    on(Actions.addDescription, (state, action): EditorState => {
        return newState(state, {description: action.description})
    }),

    on(Actions.removeDescription, (state, action): EditorState => {
        return newState(state, { description: ''})
    }),

    on(Actions.displayMarkdownResult, (state, action): EditorState => {
        return newState(state, { displayMarkdownResult: true})
    }),

    on(Actions.hideMarkdownResult, (state, action): EditorState => {
        return newState(state, { displayMarkdownResult: false})
    }),
);

const newState = (state: any, newData: any): EditorState => {
    const newState = { ...state, ...newData }
    console.log('calculating new state', newData, newState)
    return newState
}
