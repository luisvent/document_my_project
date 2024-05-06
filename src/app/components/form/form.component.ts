import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {technologies} from "../../../data/technologies";
import {PickerItem} from "../multi-picker/multi-picker.component";
import {Actions} from "../../store/actions/action-types";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/state.interface";
import {MarkdownService} from "../../services/markdown.service";
import {debounceTime, distinctUntilChanged, Observable, Subject} from "rxjs";
import {LicenseType} from "../../enums/license-type.enum";
import {
    editorSelector,
    selectAcknowledgment,
    selectAuthorGithubUsername,
    selectAuthorName,
    selectContentTable,
    selectContribution,
    selectContributors,
    selectDescription,
    selectFeatures,
    selectGeneratingMarkdown,
    selectInstallSteps,
    selectLicense,
    selectLogo,
    selectMainImage,
    selectNavigationLinks,
    selectNpmBadges,
    selectNpmPackage,
    selectParameters,
    selectRepository,
    selectRepositoryBadges,
    selectScreenshots,
    selectShortDescription,
    selectStackTech,
    selectTitle,
    selectUsageSteps
} from "../../store/selectors/editor.selectors";
import {EditorState} from "../../store/reducers/editor.reducer";
import {testData} from "../../../data/test";
import {LicenseOptions} from "../../interfaces/license-options.interface";
import {ContributorOptions} from "../../interfaces/contributor-options.interface";
import {ContributionOptions} from "../../interfaces/contribution-options.interface";
import {AcknowledgeOptions} from "../../interfaces/acknowledge-options.interface";
import {FeatureOptions} from "../../interfaces/feature-options.interface";

interface InputInteraction {
    type: string;
    value: any;
}

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    @Output()
    generateMarkdown = new EventEmitter();

    technologies = technologies;
    licenses: { name: string; value: string }[] = [];
    public debounceInput$ = new Subject<InputInteraction>();
    public generating$ = this.store.select(selectGeneratingMarkdown);
    public state$ = this.store.select(editorSelector);

    public title$: Observable<string> = this.store.select(selectTitle);
    public description$: Observable<string> = this.store.select(selectDescription);
    public shortDescription$: Observable<string> = this.store.select(selectShortDescription);
    public contentTable$: Observable<boolean> = this.store.select(selectContentTable);
    public navigationLinks$: Observable<boolean> = this.store.select(selectNavigationLinks);
    public features$: Observable<FeatureOptions[]> = this.store.select(selectFeatures);
    public repository$: Observable<string> = this.store.select(selectRepository);
    public repositoryBadges$: Observable<boolean> = this.store.select(selectRepositoryBadges);
    public npmUrl$: Observable<string> = this.store.select(selectNpmPackage);
    public npmBadges$: Observable<boolean> = this.store.select(selectNpmBadges);
    public logo$: Observable<string> = this.store.select(selectLogo);
    public mainImage$: Observable<string> = this.store.select(selectMainImage);
    public screenshots$: Observable<string[]> = this.store.select(selectScreenshots);
    public stack$: Observable<string[]> = this.store.select(selectStackTech);
    public installSteps$: Observable<string[]> = this.store.select(selectInstallSteps);
    public usageSteps$: Observable<string[]> = this.store.select(selectUsageSteps);
    public parameters$: Observable<{
        field: string,
        description: string,
        default?: string | undefined
    }[]> = this.store.select(selectParameters);
    public acknowledgements$: Observable<AcknowledgeOptions[]> = this.store.select(selectAcknowledgment);
    public contribution$: Observable<ContributionOptions> = this.store.select(selectContribution);
    public contributors$: Observable<ContributorOptions[]> = this.store.select(selectContributors);
    public authorName$: Observable<string> = this.store.select(selectAuthorName);
    public githubUsername$: Observable<string> = this.store.select(selectAuthorGithubUsername);
    public license$: Observable<LicenseOptions> = this.store.select(selectLicense);
    protected readonly LicenseType = LicenseType;

    constructor(private store: Store<AppState>, private mdService: MarkdownService) {
        this.getLicenses();
    }

    ngOnInit(): void {
        this.debounceInput$.pipe(
            debounceTime(500),
            distinctUntilChanged()).subscribe(input => {
            this.processInput(input);
        })

        this.state$.subscribe(state => {
            console.log(state)
            if (state.generateMarkdown) {
                console.log(state)
                this.BuildMarkdown(state);
            }
        })

        this.store.dispatch(Actions.setData({data: testData}));
    }

    BuildMarkdown(state: EditorState) {
        const markdown = this.mdService.Build(state);
        console.log(markdown)
        this.store.dispatch(Actions.markdownGenerated({markdown}));
    }

    selectedTechnologies(technologies: PickerItem[]) {
        this.processInput({type: 'technologies', value: technologies})
    }

    getLicenses() {
        this.licenses = Object.keys(LicenseType).map(key => {
            return {
                name: LicenseType[key as keyof typeof LicenseType], value: key
            }
        })
    }

    generate() {
        this.generateMarkdown.emit();
    }

    inputChange(type: string, target: EventTarget | null | boolean) {
        console.log('input change')
        this.debounceInput$.next({
            type,
            value: (target as any).type === 'checkbox' ? (target as HTMLInputElement).checked : (target as HTMLInputElement).value
        });
    }

    processInput(input: InputInteraction) {
        console.log(input)
        switch (input.type) {

            case 'title':
                this.store.dispatch(Actions.modifyTitle({title: input.value}));
                break;
            case 'short-description':
                this.store.dispatch(Actions.modifyShortDescription({shortDescription: input.value}));
                break;
            case 'description':
                this.store.dispatch(Actions.modifyDescription({description: input.value}));
                break;

            case 'content-table':
                this.store.dispatch(Actions.modifyContentTable({contentTable: input.value}));
                break;

            case 'navigation-links':
                this.store.dispatch(Actions.modifyNavigation({navigation: input.value}));
                break;

            case 'features':
                const features: any[] = [];

                (input.value as any[]).forEach(acknowledge => {
                    features.push({title: acknowledge[0], description: acknowledge[1]});
                })

                this.store.dispatch(Actions.modifyFeatures({features: features}));
                break;

            case 'installation':
                this.store.dispatch(Actions.modifyInstallation({steps: input.value}));
                break;

            case 'usage':
                this.store.dispatch(Actions.modifyUsage({steps: input.value}));
                break;

            case 'repository-url':
                this.store.dispatch(Actions.modifyGithubUrl({url: input.value}));
                break;

            case 'repository-badges':
                this.store.dispatch(Actions.modifyGithubBadge({badge: input.value}));
                break;

            case 'npm-url':
                this.store.dispatch(Actions.modifyNpmUrl({url: input.value}));
                break;

            case 'npm-badges':
                this.store.dispatch(Actions.modifyNpmBadge({badge: input.value}));
                break;

            case 'logo-url':
                this.store.dispatch(Actions.modifyLogoUrl({logoUrl: input.value}));
                break;

            case 'main-img-url':
                this.store.dispatch(Actions.modifyMainImageUrl({mainImageUrl: input.value.replaceAll(' ', '')}));
                break;

            case 'screenshots-url':
                this.store.dispatch(Actions.modifyImages({images: input.value.replaceAll(' ', '').split(/[,\n]/)}));
                break;

            case 'technologies':
                this.store.dispatch(Actions.addTechnologies({technologies: [...input.value]}));
                break;

            case 'tech-stack':
                if (!input.value) {
                    this.store.dispatch(Actions.removeTechnology());
                }
                break;

            case 'acknowledge':

                const acknowledgements: any[] = [];

                (input.value as any[]).forEach(acknowledge => {
                    acknowledgements.push({title: acknowledge[0], url: acknowledge[1], description: acknowledge[2]});
                })

                this.store.dispatch(Actions.modifyAcknowledgement({acknowledgements: acknowledgements}));
                break;

            case 'contribution':
                this.store.dispatch(Actions.modifyContribution({contribution: input.value}));
                break;

            case 'contribution-guideline':
                this.store.dispatch(Actions.modifyContributionGuideline({contributionGuidelinesLink: input.value}));
                break;

            case 'author-name':
                this.store.dispatch(Actions.modifyAuthorName({authorName: input.value}));
                break;

            case 'author-github':
                this.store.dispatch(Actions.modifyAuthorGithub({authorGithub: input.value}));
                break;

            case 'license':
                if (!input.value) {
                    this.store.dispatch(Actions.removeLicense());
                }
                break;

            case 'licenseType':
                this.store.dispatch(Actions.addLicense({license: {type: input.value}}));
                break;

            case 'custom-license':
                this.store.dispatch(Actions.modifyCustomLicense({customText: input.value}));
                break;

        }
    }

}
