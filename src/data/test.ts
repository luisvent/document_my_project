import {EditorState} from "../app/store/reducers/editor.reducer";
import {LicenseType} from "../app/enums/license-type.enum";

export const testData: EditorState = {
    title: 'Document My Project',
    shortDescription: 'Easily create markdown documentation for your project',
    description: 'Tired of manually writing README files? Introducing an web app that streamlines your documentation process for Github projects. Our intuitive platform lets you generate beautiful and informative Markdown documentation in seconds.',
    navigationLinks: true,
    installSteps: [
        'Install Node.js v12 or later',
        'Install a code editor (e.g., Visual Studio Code)',
        'Install the required dependencies:',
        '`npm install react react-dom axios`',
        'Install the development dependencies (if needed):',
        '`npm install --dev eslint prettier`'
    ],
    usageSteps: [
        'Open the project directory in your code editor',
        'Run `npm start` to start the development server',
    ],
    contentTable: false,
    github: {
        username: 'luisvent',
        repo: 'document_my_project',
        badges: true
    },
    logoUrl: 'https://api.lorem.space/image/game?w=200&h=200',
    mainImageUrl: 'https://api.lorem.space/image/game?w=300&h=300',
    displayMarkdownResult: false,
    npm: {
        package: 'http-status-utility',
        url: 'https://www.npmjs.com/package/http-status-utility',
        badges: true
    },
    images: [
        'https://api.lorem.space/image/dashboard?w=200&h=200',
        'https://api.lorem.space/image/dashboard?w=200&h=200',
        'https://api.lorem.space/image/dashboard?w=200&h=200',
        'https://api.lorem.space/image/dashboard?w=200&h=200',
    ],
    features: [
        {
            title: 'AI Generation',
            description: 'Use AI to autogenerate all the info for your project'
        },
        {
            title: 'Feature 2',
            description: 'Use AI to autogenerate all the info for your project'
        },
        {
            title: 'Feature 3',
            description: 'Use AI to autogenerate all the info for your project'
        }
    ],
    technologies: [{
        name: 'Angular',
        value: 'angular',
        description: "A front-end web application framework",
        mainColor: "#DD0031"
    },
        {
            name: 'Vue.js',
            value: 'vue',
            description: "An open-source JavaScript library for building user interfaces",
            mainColor: "#41B883"
        },
        {name: 'Ember.js', value: 'ember', description: "A front-end web application framework", mainColor: "#E04E39"},
        {
            name: 'Svelte',
            value: 'svelte',
            description: "A high-performance reactive JavaScript UI library",
            mainColor: "#FF3E00"
        },
        {
            name: 'Backbone.js',
            value: 'backbone',
            description: "A JavaScript library for building web applications",
            mainColor: "#0071B5"
        },
        {
            name: 'Meteor',
            value: 'meteor',
            description: "An open-source platform for building scalable real-time web applications",
            mainColor: "#DE4F4F"
        },
        {
            name: 'Astro',
            value: 'astro',
            description: "An opinionated framework for building web pages with React and TypeScript",
            mainColor: "#FF5D01"
        },],
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
    configuration: {
        description: 'Default values to configure',
        parameters: [{
            field: 'name',
            description: 'Project name',
            default: 'project'
        }]
    },
    acknowledgments: [
        {
            title: 'ngx-markdown',
            url: 'https://www.npmjs.com/package/ngx-markdown',
            description: 'Angular markdown component/directive/pipe/service to parse static, dynamic or remote content to HTML with syntax highlight and more'
        },
        {
            title: 'Flowbite',
            url: 'https://flowbite.com/',
            description: 'Build websites even faster with components on top of Tailwind CSS'
        },
        {
            title: 'PrismJs',
            url: 'https://prismjs.com/',
            description: 'Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind. It’s used in millions of websites, including some of those you visit daily.'
        }
    ],
    contribution: {add: true, contributionGuidelinesLink: undefined},
    contributors: [
        {
            name: 'Luis Ventura',
            username: 'luisvent'
        },
        {
            name: 'Luis Ventura',
            username: 'luisvent'
        }
    ],
    author: {
        name: 'Luis Ventura',
        email: 'luis.ventura@email.com',
        url: 'luisvent.com ',
        github: 'https://github.com/luisvent',
        likedIn: 'https://www.linkedin.com/in/luisvent/',
    },
    license: {type: LicenseType.MIT, customText: undefined},
    watermark: true,
    generateMarkdown: false,
    generatedMarkdown: ''
};
