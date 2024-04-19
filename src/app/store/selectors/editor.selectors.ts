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
export const selectDescription = createSelector(
    editorSelector,
    (state: EditorState) => state.description)
export const selectTitle = createSelector(
    editorSelector,
    (state: EditorState) => state.title)

export const selectShortDescription = createSelector(
    editorSelector,
    (state: EditorState) => state.shortDescription)

export const selectContentTable = createSelector(
    editorSelector,
    (state: EditorState) => state.contentTable)

export const selectNavigationLinks = createSelector(
    editorSelector,
    (state: EditorState) => state.navigationLinks)

export const selectFeatures = createSelector(
    editorSelector,
    (state: EditorState) => state.features)


export const selectRepository = createSelector(
    editorSelector,
    (state: EditorState) => state.github.repo)

export const selectRepositoryBadges = createSelector(
    editorSelector,
    (state: EditorState) => state.github.badges)

export const selectNpmPackage = createSelector(
    editorSelector,
    (state: EditorState) => state.npm.url)

export const selectNpmBadges = createSelector(
    editorSelector,
    (state: EditorState) => state.npm.badges)

export const selectLogo = createSelector(
    editorSelector,
    (state: EditorState) => state.logoUrl)

export const selectMainImage = createSelector(
    editorSelector,
    (state: EditorState) => state.mainImageUrl)

export const selectScreenshots = createSelector(
    editorSelector,
    (state: EditorState) => state.images)

export const selectStackTech = createSelector(
    editorSelector,
    (state: EditorState) => state.technologies)

export const selectInstallSteps = createSelector(
    editorSelector,
    (state: EditorState) => state.installSteps)

export const selectUsageSteps = createSelector(
    editorSelector,
    (state: EditorState) => state.usageSteps)

export const selectParameters = createSelector(
    editorSelector,
    (state: EditorState) => state.configuration.parameters)

export const selectAcknowledgment = createSelector(
    editorSelector,
    (state: EditorState) => state.acknowledgments)

export const selectContribution = createSelector(
    editorSelector,
    (state: EditorState) => state.contribution)

export const selectContributors = createSelector(
    editorSelector,
    (state: EditorState) => state.contributors)

export const selectAuthorName = createSelector(
    editorSelector,
    (state: EditorState) => state.author.name)

export const selectAuthorGithubUsername = createSelector(
    editorSelector,
    (state: EditorState) => state.author.github)


export const selectLicense = createSelector(
    editorSelector,
    (state: EditorState) => state.license)
