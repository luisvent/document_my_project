import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Actions} from "./store/actions/action-types";
import {selectDisplayMarkdown, selectEditorDescription} from "./store/selectors/editor.selectors";
import {readmeDemo} from "../data/data";
import {AppState} from "./store/state.interface";
import {initFlowbite} from "flowbite";
import {PickerItem} from "./multi-picker/multi-picker.component";
import {MarkdownService} from "./services/markdown.service";
import {UtilsService} from "./services/utils.service";
import {Toast, ToastService} from "./services/toast.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public description$ = this.store.select(selectEditorDescription);
    public displayMarkdown$ = this.store.select(selectDisplayMarkdown);
    public markdownData = readmeDemo;
    formattedCode = '';

    developmentTechnologies = [
        // Languages
        {name: 'JavaScript', value: 'javascript'},
        {name: 'Python', value: 'python'},
        {name: 'Java', value: 'java'},
        {name: 'Ruby', value: 'ruby'},
        {name: 'HTML', value: 'html'},
        {name: 'CSS', value: 'css'},
        {name: 'PHP', value: 'php'},
        {name: 'Swift', value: 'swift'},
        {name: 'Kotlin', value: 'kotlin'},
        {name: 'C#', value: 'csharp'},
        {name: 'TypeScript', value: 'typescript'},
        {name: 'Go', value: 'go'},
        {name: 'Rust', value: 'rust'},
        {name: 'Scala', value: 'scala'},
        {name: 'Perl', value: 'perl'},
        {name: 'SQL', value: 'sql'},
        {name: 'Objective-C', value: 'objectivec'},
        {name: 'C++', value: 'cpp'},
        {name: 'R', value: 'r'},
        {name: 'Shell', value: 'shell'},
        {name: 'Assembly', value: 'assembly'},
        {name: 'Dart', value: 'dart'},
        {name: 'Lua', value: 'lua'},
        {name: 'Haskell', value: 'haskell'},

        // Frontend Frameworks
        {name: 'React', value: 'react'},
        {name: 'Angular', value: 'angular'},
        {name: 'Vue.js', value: 'vue'},
        {name: 'Ember.js', value: 'ember'},
        {name: 'Svelte', value: 'svelte'},
        {name: 'Backbone.js', value: 'backbone'},
        {name: 'Meteor', value: 'meteor'},
        {name: 'Astro', value: 'astro'},
        {name: 'Next.js', value: 'nextjs'},

        // Backend Frameworks
        {name: 'Node.js', value: 'nodejs'},
        {name: 'Express.js', value: 'express'},
        {name: 'Django', value: 'django'},
        {name: 'Flask', value: 'flask'},
        {name: 'Spring Boot', value: 'spring'},
        {name: 'Ruby on Rails', value: 'rubyonrails'},
        {name: 'Laravel', value: 'laravel'},
        {name: 'ASP.NET', value: 'aspnet'},
        {name: 'NestJS', value: 'nestjs'},

        // Frontend Tools
        {name: 'Webpack', value: 'webpack'},
        {name: 'vite', value: 'vite'},
        {name: 'Babel', value: 'babel'},
        {name: 'Sass', value: 'sass'},
        {name: 'LESS', value: 'less'},
        {name: 'PostCSS', value: 'postcss'},
        {name: 'ESLint', value: 'eslint'},
        {name: 'Prettier', value: 'prettier'},
        {name: 'Jest', value: 'jest'},

        // Backend Tools
        {name: 'Docker', value: 'docker'},
        {name: 'Kubernetes', value: 'kubernetes'},
        {name: 'Nginx', value: 'nginx'},
        {name: 'Apache', value: 'apache'},
        {name: 'Postman', value: 'postman'},
        {name: 'Git', value: 'git'},
        {name: 'GitHub', value: 'github'},
        {name: 'GitLab', value: 'gitlab'},
    ];


    constructor(private store: Store<AppState>, private mdService: MarkdownService,
                private utilsService: UtilsService, public toastService: ToastService) {
    }

    ngOnInit(): void {
        initFlowbite();
        this.markdownData = this.mdService.test();
    }

    generateMarkdown() {
        this.store.dispatch(Actions.displayMarkdownResult());
        this.toastService.success('testing');
    }


    addDescription() {
        this.store.dispatch(Actions.addDescription({description: 'testing ngrx'}));
    }

    selectedTechnologies(technologies: PickerItem[]) {
        console.log(technologies)
    }

    generateToast(toast: Toast) {

    }
}
