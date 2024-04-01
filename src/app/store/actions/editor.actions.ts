import {createAction, createActionGroup, props} from '@ngrx/store';

export const addDescription = createAction(
    '[Editor] Add Description',
    props<{ description: string }>()
);

export const removeDescription = createAction(
    '[Editor] Remove Description'
);

export const displayMarkdownResult = createAction(
    '[Editor] Display Markdown'
);

export const hideMarkdownResult = createAction(
    '[Editor] Hide Markdown'
);

