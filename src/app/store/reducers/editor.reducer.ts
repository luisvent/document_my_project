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
import {ContributorOptions} from "../../interfaces/contributor-options.interface";

export interface EditorState {
    title: string,
    shortDescription: string;
    description: string,
    github: GitHubOptions,
    npm: NPMOptions,
    logoUrl: string;
    navigationLinks: boolean;
    contentTable: boolean;
    mainImageUrl: string;
    images: string[],
    features: FeatureOptions[],
    technologies: TechnologyOptions[],
    installation: InstallationOptions,
    acknowledgments: AcknowledgeOptions[],
    contribution: ContributionOptions,
    contributors: ContributorOptions[],
    author: AuthorData,
    license: LicenseOptions,
    watermark: boolean,
    displayMarkdownResult: boolean,
    generateMarkdown: boolean,
    generatedMarkdown: string
}

const initialState: EditorState = {
    title: '',
    shortDescription: 'string',
    description: '',
    navigationLinks: false,
    contentTable: false,
    github: {
        username: '',
        repo: '',
        badges: false
    },
    logoUrl: '',
    mainImageUrl: '',
    displayMarkdownResult: false,
    npm: {
        package: '',
        url: '',
        badges: false
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
    contribution: {add: false, contributionGuidelinesLink: undefined},
    contributors: [],
    author: {
        name: '',
        email: '',
        url: '',
        github: '',
        likedIn: '',
    },
    license: {type: LicenseType.MIT, customText: undefined},
    watermark: true,
    generateMarkdown: false,
    generatedMarkdown: ''
};

export const editorReducer = createReducer(
    initialState,

    on(Actions.modifyTitle, (state, action): EditorState => {
        console.log(action)
        return newState(state, {title: action.title})
    }),

    on(Actions.modifyDescription, (state, action): EditorState => {
        return newState(state, {description: action.description})
    }),

    on(Actions.modifyShortDescription, (state, action): EditorState => {
        return newState(state, {shortDescription: action.shortDescription})
    }),

    on(Actions.modifyGithubUrl, (state, action): EditorState => {
        const github = newState(state.github, {url: action.url})
        return newState(state, {github: github})
    }),

    on(Actions.modifyNavigation, (state, action): EditorState => {
        return newState(state, {navigationLinks: action.navigation})
    }),

    on(Actions.modifyContentTable, (state, action): EditorState => {
        return newState(state, {contentTable: action.contentTable})
    }),

    on(Actions.modifyGithubBadge, (state, action): EditorState => {
        const github = newState(state.github, {badges: action.badge})
        return newState(state, {github: github})
    }),

    on(Actions.modifyNpmUrl, (state, action): EditorState => {
        const npm = newState(state.npm, {url: action.url})
        return newState(state, {npm: npm})
    }),

    on(Actions.modifyNpmBadge, (state, action): EditorState => {
        const npm = newState(state.npm, {badges: action.badge})
        return newState(state, {npm: npm})
    }),

    on(Actions.modifyLogoUrl, (state, action): EditorState => {
        return newState(state, {logoUrl: action.logoUrl})
    }),

    on(Actions.modifyMainImageUrl, (state, action): EditorState => {
        return newState(state, {mainImageUrl: action.mainImageUrl})
    }),

    on(Actions.modifyImages, (state, action): EditorState => {
        return newState(state, {images: action.images})
    }),

    on(Actions.addTechnologies, (state, action): EditorState => {
        return newState(state, {technologies: action.technologies})
    }),

    on(Actions.removeTechnology, (state, action): EditorState => {
        return newState(state, {technologies: []})
    }),

    on(Actions.modifyAcknowledgement, (state, action): EditorState => {
        return newState(state, {acknowledgments: action.acknowledgements || []})
    }),

    on(Actions.modifyContributors, (state, action): EditorState => {
        return newState(state, {contributors: action.contributors || []})
    }),

    on(Actions.modifyContribution, (state, action): EditorState => {
        const contribution = newState(state.contribution, {add: action.contribution})
        return newState(state, {contribution: contribution})
    }),

    on(Actions.modifyContributionGuideline, (state, action): EditorState => {
        const contribution = newState(state.contribution, {contributionGuidelinesLink: action.contributionGuidelinesLink})
        return newState(state, {contribution: contribution})
    }),

    on(Actions.modifyAuthorName, (state, action): EditorState => {
        const author = newState(state.author, {name: action.authorName})
        return newState(state, {author: author})
    }),

    on(Actions.modifyAuthorGithub, (state, action): EditorState => {
        const author = newState(state.author, {github: action.authorGithub})
        return newState(state, {author: author})
    }),

    on(Actions.addLicense, (state, action): EditorState => {
        return newState(state, {license: action.license})
    }),

    on(Actions.removeLicense, (state, action): EditorState => {
        const license = {type: undefined, customText: undefined};
        return newState(state, {license: license})
    }),

    on(Actions.modifyCustomLicense, (state, action): EditorState => {
        const license = newState(state.license, {customText: action.customText})
        return newState(state, {license: license})
    }),

    on(Actions.modifyFeatures, (state, action): EditorState => {
        return newState(state, {features: action.features || []})
    }),

    on(Actions.displayMarkdownResult, (state, action): EditorState => {
        return newState(state, {displayMarkdownResult: true})
    }),

    on(Actions.hideMarkdownResult, (state, action): EditorState => {
        return newState(state, {displayMarkdownResult: false})
    }),

    on(Actions.generateMarkdown, (state, action): EditorState => {
        return newState(state, {generateMarkdown: action.generate})
    }),

    on(Actions.markdownGenerated, (state, action): EditorState => {
        return newState(state, {
            generateMarkdown: false,
            generatedMarkdown: action.markdown,
            displayMarkdownResult: true
        })
    }),
);

const newState = (oldState: any, newData: any): EditorState => {
    const newState = {...oldState, ...newData}
    console.log('calculating new state', newData, newState)
    return newState
}
