import {EditorState} from "../app/store/reducers/editor.reducer";
import {LicenseType} from "../app/enums/license-type.enum";

export const testData: EditorState = {
    title: 'Document My Project',
    shortDescription: 'Easily create markdown documentation for your project',
    description: 'Tired of manually writing README files? this tool simplifies the process of creating documentation for Github projects. With just a few clicks, you can generate comprehensive documentation that enhances the visibility and usability of your repositories in seconds.',
    navigationLinks: true,
    sectionIcons: true,
    backToTop: true,
    installSteps: [
        'Install Node.js v16 or later',
        'Install the required dependencies:',
        '`npm install`'
    ],
    usageSteps: [
        'Open the project directory in your code editor',
        'Run `npm run start` to start the development server',
    ],
    contentTable: true,
    github: {
        username: 'luisvent',
        repo: 'document_my_project',
        badges: true
    },
    logoUrl: '../assets/images/icon.png',
    mainImageUrl: '../assets/images/dmp_1.png',
    displayMarkdownResult: false,
    npm: {
        package: 'http-status-utility',
        url: 'https://www.npmjs.com/package/http-status-utility',
        badges: true
    },
    images: [
        '../assets/images/dmp_s_1.png',
        '../assets/images/dmp_s_2.png',
        '../assets/images/dmp_s_3.png',
        '../assets/images/dmp_s_4.png',
    ],
    features: [
        {
            title: 'Template ready',
            description: 'Provide a clear and concise description of your project, highlight the main features, goals, and benefits of your project'
        },
        {
            title: 'Ease fo use',
            description: 'Easily generate a well-structured README file for your GitHub project'
        },
        {
            title: 'Preview',
            description: 'Preview the generated README (light/dark theme) file before committing it to your repository'
        }
    ],
    technologies: [
        {
            name: 'Angular',
            value: 'angular',
            description: "A front-end web application framework",
            mainColor: "#DD0031"
        },
        {name: 'NgRx', value: 'ngrx', description: "Angular state management based on Redux", mainColor: "#B7116E"},
        {name: 'Tailwind CSS', value: 'tailwindcss', description: 'Utility-first CSS framework', mainColor: '#38B2AC'},
        {
            name: 'TypeScript',
            value: 'typescript',
            description: "A strict syntactical superset of JavaScript",
            mainColor: "#3178C6"
        },
    ],
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
        parameters: []
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
        }
    ],
    author: {
        name: 'Luis Ventura',
        email: 'luis.ventura@email.com',
        url: 'luisvent.com ',
        github: 'luisvent',
        likedIn: 'luisvent',
    },
    license: {type: LicenseType.MIT, customText: undefined},
    watermark: true,
    generateMarkdown: false,
    generatedMarkdown: ''
};
