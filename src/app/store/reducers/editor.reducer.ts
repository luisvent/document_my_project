import {createReducer, on} from '@ngrx/store';
import {Actions} from "../actions/action-types";
import {InstallationOptions} from "../../interfaces/installation-options.interface";
import {LicenseType} from "../../enums/license-type.enum";
import {GitHubOptions} from "../../interfaces/github-options.interface";
import {NPMOptions} from "../../interfaces/npm-options.interface";
import {FeatureOptions} from "../../interfaces/feature-options.interface";
import {TechnologyOptions} from "../../interfaces/technology-options.interface";
import {AcknowledgeOptions} from "../../interfaces/acknowledge-options.interface";
import {ContributionOptions} from "../../interfaces/contribution-options.interface";
import {AuthorData} from "../../interfaces/author-data.interface";
import {LicenseOptions} from "../../interfaces/license-options.interface";

export interface EditorState {
    title: string,
    shortDescription: string;
    description: string,
    github: GitHubOptions,
    displayMarkdownResult: boolean,
    npm: NPMOptions,
    images: string[],
    features: FeatureOptions[],
    technologies: TechnologyOptions[],
    installation: InstallationOptions,
    acknowledgments: AcknowledgeOptions[],
    contribution: ContributionOptions,
    author: AuthorData,
    license: LicenseOptions,
    watermark: boolean
}

const initialState: EditorState = {
    title: '',
    shortDescription: 'string',
    description: '',
    github: {
        username: '',
        repo: '',
    },
    displayMarkdownResult: false,
    npm: {
        package: ''
    },
    images: [],
    features: [],
    technologies: [],
    installation: {
        projectName: '',
        packageManager: '',
        dependencies: [],
        devDependencies: [],
        installationSteps: [],
        includeSetup: false,
        setupSteps: [],
        includeUsage: false,
        usageSteps: [],
    },
    acknowledgments: [],
    contribution: {title: '', description: '', contributionGuidelinesLink: undefined},
    author: {
        name: '',
        email: '',
        url: '',
        github: '',
        likedIn: '',
    },
    license: {type: LicenseType.MIT, customText: undefined},
    watermark: true
};

export const editorReducer = createReducer(
    initialState,

    on(Actions.addDescription, (state, action): EditorState => {
        return newState(state, {description: action.description})
    }),

    on(Actions.removeDescription, (state, action): EditorState => {
        return newState(state, {description: ''})
    }),

    on(Actions.displayMarkdownResult, (state, action): EditorState => {
        return newState(state, {displayMarkdownResult: true})
    }),

    on(Actions.hideMarkdownResult, (state, action): EditorState => {
        return newState(state, {displayMarkdownResult: false})
    }),
);

const newState = (state: any, newData: any): EditorState => {
    const newState = {...state, ...newData}
    console.log('calculating new state', newData, newState)
    return newState
}
