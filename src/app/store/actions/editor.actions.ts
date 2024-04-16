import {createAction, props} from '@ngrx/store';
import {FeatureOptions} from "../../interfaces/feature-options.interface";
import {TechnologyOptions} from "../../interfaces/technology-options.interface";
import {AcknowledgeOptions} from "../../interfaces/acknowledge-options.interface";
import {LicenseOptions} from "../../interfaces/license-options.interface";
import {ContributorOptions} from "../../interfaces/contributor-options.interface";
import {EditorState} from "../reducers/editor.reducer";

export const modifyTitle = createAction(
    '[Form] Modify Title',
    props<{ title: string }>()
);

export const modifyShortDescription = createAction(
    '[Form] Modify Short Description',
    props<{ shortDescription: string }>()
);

export const modifyNavigation = createAction(
    '[Form] Modify Navigation Links',
    props<{ navigation: boolean }>()
);


export const modifyContentTable = createAction(
    '[Form] Modify Content Table',
    props<{ contentTable: boolean }>()
);

export const modifyGithubUrl = createAction(
    '[Form] Modify Github Url',
    props<{ url: string }>()
);

export const modifyNpmUrl = createAction(
    '[Form] Modify NPM Url',
    props<{ url: string }>()
);

export const modifyNpmBadge = createAction(
    '[Form] Modify NPM Badge',
    props<{ badge: boolean }>()
);

export const modifyGithubBadge = createAction(
    '[Form] Modify Github Badge',
    props<{ badge: boolean }>()
);

export const modifyLogoUrl = createAction(
    '[Form] Modify Logo Url',
    props<{ logoUrl: string }>()
);

export const modifyMainImageUrl = createAction(
    '[Form] Modify Main Image Url',
    props<{ mainImageUrl: string }>()
);

export const modifyImages = createAction(
    '[Form] Modify Images',
    props<{ images: string[] }>()
);

export const addTechnologies = createAction(
    '[Form] Add Technology',
    props<{ technologies: TechnologyOptions[] }>()
);

export const removeTechnology = createAction(
    '[Form] Remove Technology'
);


export const modifyAcknowledgement = createAction(
    '[Form] Modify Acknowledgement',
    props<{ acknowledgements: AcknowledgeOptions[] }>()
);

export const modifyContributors = createAction(
    '[Form] Modify Contributors',
    props<{ contributors: ContributorOptions[] }>()
);


export const modifyContribution = createAction(
    '[Form] Modify Contribution',
    props<{ contribution: boolean }>()
);

export const modifyContributionGuideline = createAction(
    '[Form] Modify Contribution Guideline',
    props<{ contributionGuidelinesLink: string }>()
);


export const modifyAuthorName = createAction(
    '[Form] Modify Author Name',
    props<{ authorName: string }>()
);


export const modifyAuthorGithub = createAction(
    '[Form] Modify Author Github',
    props<{ authorGithub: string }>()
);


export const modifyInstallation = createAction(
    '[Form] Modify Installation Steps',
    props<{ steps: string[] }>()
);

export const modifyUsage = createAction(
    '[Form] Modify Usage Steps',
    props<{ steps: string[] }>()
);

export const addLicense = createAction(
    '[Form] Add License',
    props<{ license: LicenseOptions }>()
);

export const modifyCustomLicense = createAction(
    '[Form] Modify Custom License',
    props<{ customText: string }>()
);

export const removeLicense = createAction(
    '[Form] Remove License'
);

export const modifyFeatures = createAction(
    '[Form] Modify Features',
    props<{ features: FeatureOptions[] }>()
);

export const modifyDescription = createAction(
    '[Form] Modify Description',
    props<{ description: string }>()
);

export const displayMarkdownResult = createAction(
    '[Form] Display Markdown'
);

export const hideMarkdownResult = createAction(
    '[Form] Hide Markdown'
);

export const generateMarkdown = createAction(
    '[Form] Generate Markdown',
    props<{ generate: boolean }>()
);

export const markdownGenerated = createAction(
    '[Form] Markdown Generated',
    props<{ markdown: string }>()
);

export const setData = createAction(
    '[Form] Set Data',
    props<{ data: EditorState }>()
);

