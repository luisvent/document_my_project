import {createReducer,on} from '@ngrx/store';
import {Actions} from "../actions/action-types";

export interface EditorState {
    description: string
}

const initialState: EditorState = {
    description: '',
};

export const editorReducer = createReducer(
    initialState,

    on(Actions.addDescription, (state, action): EditorState => {
        return newState(state, {description: action.description})
    }),

    on(Actions.removeDescription, (state, action): EditorState => {
        return newState(state, { description: ''})
    }),
);

const newState = (state: any, newData: any): EditorState => {
    const newState = { ...state, ...newData }
    console.log('calculating new state', newData, newState)
    return newState
}
