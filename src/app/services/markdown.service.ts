import {Injectable} from "@angular/core";
import {LicenseType} from "../enums/license-type.enum";
import {InstallationOptions} from "../interfaces/installation-options.interface";
import {AuthorData} from "../interfaces/author-data.interface";
import {GitHubOptions} from "../interfaces/github-options.interface";
import {TechnologyOptions} from "../interfaces/technology-options.interface";
import {FeatureOptions} from "../interfaces/feature-options.interface";
import {LicenseOptions} from "../interfaces/license-options.interface";
import {AcknowledgeOptions} from "../interfaces/acknowledge-options.interface";
import {ContributionOptions} from "../interfaces/contribution-options.interface";
import {EditorState} from "../store/reducers/editor.reducer";
import {ContributorOptions} from "../interfaces/contributor-options.interface";

@Injectable({
    providedIn: 'root'
})
export class MarkdownService {

    TABLE_CONTENT_PLACEHOLDER = '<!-- TABLE_CONTENT_PLACEHOLDER -->';
    LINKS_PLACEHOLDER = '<!-- LINKS_PLACEHOLDER -->';

    constructor() {
    }

    Build(state: EditorState) {

        const sections = [
            state.github.badges && this.generateGitHubBadges({
                username: state.github.username,
                repo: state.github.repo,
                badges: true
            }),
            this.generateIntroductionSection(state.title, state.shortDescription,
                'https//:url.com', state.logoUrl),
            state.npm.badges && this.generateNpmBadges(state.npm.package!, {
                npmVersion: {
                    color: '0470FF',
                    logoColor: 'white'
                },
                npmDownloads: {
                    color: '67ACF3'
                },
                bundleSize: {
                    color: 'F9DBBC'
                }
            }),
            this.generateLinksPlaceholder(),
            state.mainImageUrl && this.generateCenteredImages([{url: state.mainImageUrl, alt: 'Main Image'}]),
            this.generateTableContentPlaceholder(),
            state.description && this.generateDescription([state.description]),
            state.images.length > 0 && this.generateShowcaseSection(state.images),
            state.features.length > 0 && this.generateFeaturesSection(state.features),
            state.technologies.length > 0 && this.generateTechStackSection(state.technologies),
            // this.generateInstallSection({
            //     projectName: 'My Awesome Project',
            //     packageManager: 'npm',
            //     dependencies: ['react', 'react-dom', 'axios'],
            //     devDependencies: ['eslint', 'prettier'],
            //     installationSteps: ['Run the development server with `npm run dev`'],
            //     includeSetup: true,
            //     setupSteps: ['Install Node.js v12 or later', 'Install a code editor (e.g., Visual Studio Code)'],
            //     includeUsage: true,
            //     usageSteps: ['Open the project directory in your code editor', 'Run `npm start` to start the
            // development server'], }),
            // this.generateParametersTable([
            //     {fieldName: 'name', description: 'Name of the user', defaultValue: 'John Doe'},
            //     {fieldName: 'age', description: 'Age of the user'},
            //     {fieldName: 'isAdmin', description: 'Whether the user is an admin or not', defaultValue: 'false'}
            // ]),
            ...(state.installSteps.length > 0 ||
            state.usageSteps.length > 0 ||
            state.configuration.parameters.length > 0 ?
                [this.generateTitle('Setup'),
                    this.generateInstallationSection(state.installSteps),
                    this.generateUsageSection(state.usageSteps),
                    this.generateParametersTable(state.configuration.parameters)] : []),
            state.acknowledgments.length > 0 && this.generateAcknowledgementsSection(state.acknowledgments),
            state.contribution.add && this.generateContributionSection(state.contribution, state.contributors),
            this.generateAuthorSection(state.author),
            this.generateLicenseSection(state.license),
            this.generateWatermark()
        ];

        let result = '';

        for (const section of sections) {
            result += section ? `${section}\n\n` : '';
        }

        if (state.contentTable) {
            result = this.generateTableOfContentsFromMarkdown(result);
        }

        if (state.navigationLinks) {
            result = this.generateLinksSection(result);
        }

        return result;
    }

    test() {
        // Sample data
        const npmPackageName = 'my-awesome-package';
        const githubRepo = 'meta_tag_generator';
        const githubOwner = 'luisvent';

        const descriptions = [
            'This is a sample markdown file generated using the MarkdownService.',
            'To install this package, run `npm install my-awesome-package`.'
        ];

        const images = [
            {url: 'https://placehold.co/600x400', alt: 'Image 1'}
        ];

        const contributionSection = {
            add: true,
            contributionGuidelinesLink: 'https://github.com/johndoe/my-awesome-repo/blob/main/CONTRIBUTING.md'
        };

        const acknowledgements = [
            {
                title: 'Package X',
                url: 'https://example.com/package-x',
                description: 'A dependency used in this project'
            },
            {
                title: 'Library Y',
                url: 'https://example.com/library-y',
                description: 'Another dependency used in this project'
            }
        ];

        const licenseSection = {
            type: LicenseType.MIT
        };

        const features = [
            {title: 'Feature 1', description: 'This is the description of Feature 1.'},
            {title: 'Feature 2', description: 'This is the description of Feature 2.'},
            {title: 'Feature 3', description: 'This is the description of Feature 3.'}
        ];

        const techStack = [
            {
                name: 'Ionic',
                value: 'ionic',
                description: 'Hybrid mobile app development framework',
                mainColor: '#3880FF'
            }, // Blue
            {
                name: 'Quasar',
                value: 'quasar',
                description: 'Vue.js based framework for mobile and web',
                mainColor: '#1976D2'
            }, // Blue
            {
                name: 'Nuxt.js',
                value: 'nuxtjs',
                description: 'Vue.js framework for server-side rendering',
                mainColor: '#00C58E'
            }, // Turquoise
            {name: 'Gatsby', value: 'gatsby', description: 'Static site generator for React', mainColor: '#663399'}, // Rebecca
                                                                                                                     // Purple
            {
                name: 'Gridsome',
                value: 'gridsome',
                description: 'Static site generator for Vue.js',
                mainColor: '#2C3E50'
            }, // Dark
               // Blue
            {
                name: 'NestJS',
                value: 'nestjs',
                description: 'Server-side framework for TypeScript',
                mainColor: '#E0234E'
            }, // Red
            {name: 'AdonisJS', value: 'adonisjs', description: 'MVC web framework for Node.js', mainColor: '#4B32C3'}, // Indigo
            {name: 'LoopBack', value: 'loopback', description: 'API framework for Node.js', mainColor: '#5A68A5'}, // Light
                                                                                                                   // Purple
            {name: 'Slim', value: 'slim', description: 'Microframework for PHP', mainColor: '#2C3E50'}, // Dark Blue
            {
                name: 'Flask-RESTful',
                value: 'flask-restful',
                description: 'RESTful API toolkit for Flask',
                mainColor: '#000000'
            }, // Black
            {
                name: 'Django REST framework',
                value: 'django-rest-framework',
                description: 'RESTful API framework for Django',
                mainColor: '#092E20'
            }, // Dark Green
            {
                name: 'Rails API',
                value: 'rails-api',
                description: 'API-only mode for Ruby on Rails',
                mainColor: '#CC0000'
            }, // Red
            {name: 'Sinatra', value: 'sinatra', description: 'Microframework for Ruby', mainColor: '#7B7B7B'}, // Grey
            {name: 'Dropwizard', value: 'dropwizard', description: 'Web framework for Java', mainColor: '#7B98AB'}, // Light

        ];

        const sections = [
            this.generateGitHubBadges({
                username: 'John Doe',
                repo: 'my-awesome-repo',
                badges: true
            }),
            this.generateIntroductionSection('My package', 'Test package introduction just for testing',
                'https//:url.com', 'https://placehold.co/600x400'),
            this.generateNpmBadges(npmPackageName, {
                npmVersion: {
                    color: '0470FF',
                    logoColor: 'white'
                },
                npmDownloads: {
                    color: '67ACF3'
                },
                bundleSize: {
                    color: 'F9DBBC'
                }
            }),
            this.generateLinksPlaceholder(),
            this.generateCenteredImages(images),
            this.generateTableContentPlaceholder(),
            this.generateTableOfContentsFromMarkdown(''),
            this.generateDescription(descriptions),
            this.generateShowcaseSection(['https://placehold.co/600x400', 'https://placehold.co/600x400', 'https://placehold.co/600x400', 'https://placehold.co/600x400']),
            this.generateFeaturesSection(features),
            this.generateTechStackSection(techStack),
            this.generateInstallSection({
                projectName: 'My Awesome Project',
                packageManager: 'npm',
                dependencies: ['react', 'react-dom', 'axios'],
                devDependencies: ['eslint', 'prettier'],
                installationSteps: ['Run the development server with `npm run dev`'],
                includeSetup: true,
                setupSteps: ['Install Node.js v12 or later', 'Install a code editor (e.g., Visual Studio Code)'],
                includeUsage: true,
                usageSteps: ['Open the project directory in your code editor', 'Run `npm start` to start the development server'],
            }),
            // this.generateParametersTable([
            //     {fieldName: 'name', description: 'Name of the user', defaultValue: 'John Doe'},
            //     {fieldName: 'age', description: 'Age of the user'},
            //     {fieldName: 'isAdmin', description: 'Whether the user is an admin or not', defaultValue: 'false'}
            // ]),
            this.generateAcknowledgementsSection(acknowledgements),
            this.generateContributionSection(contributionSection, []),
            this.generateAuthorSection({
                name: 'John Doe',
                email: 'john@example.com',
                url: 'https://example.com',
                github: 'john',
            }),
            this.generateLicenseSection(licenseSection),
            this.generateWatermark()
        ];

        let result = '';

        for (const section of sections) {
            result += `${section}\n\n`;
        }

        result = this.generateTableOfContentsFromMarkdown(result);
        result = this.generateLinksSection(result);

        return result;
    }

    generateSetupTitle(state: EditorState) {
        return state.installSteps.length > 0 ||
        state.usageSteps.length > 0 ||
        state.configuration.parameters.length > 0 ?
            '## Setup' : '';
    }

    generateTableContentPlaceholder() {
        return this.TABLE_CONTENT_PLACEHOLDER;
    }

    generateParametersTable(properties: {
        field: string;
        description: string;
        default?: string;
    }[]): string {

        if (properties.length === 0) {
            return '';
        }

        const tableHeader = '| Field Name | Description | Default Value |\n| --- | --- | --- |';
        let tableBody = '';

        for (const prop of properties) {
            const row = `| \`${prop.field}\` | ${prop.description} | ${prop.default || ''} |`;
            tableBody += `${row}\n`;
        }

        return `### Parameters\n\n${tableHeader}\n${tableBody}`;
    }

    generateNpmBadges(
        npmPackageName: string,
        options?: {
            npmVersion?: {
                logoColor?: string;
                color?: string;
            };
            npmDownloads?: {
                color?: string;
            };
            bundleSize?: {
                color?: string;
            };
        }
    ): string {
        const npmVersionBadge = `<a aria-label="NPM Version" href="https://www.npmjs.com/package/${npmPackageName}">
            <img alt="" src="https://img.shields.io/npm/v/${npmPackageName}.svg?label=NPM&logo=npm&style=for-the-badge&color=${options?.npmVersion?.color || '0470FF'}&logoColor=${options?.npmVersion?.logoColor || 'white'}">
          </a>`;

        const npmDownloadsBadge = `<a aria-label="NPM Download Count" href="https://www.npmjs.com/package/${npmPackageName}">
            <img alt="" src="https://img.shields.io/npm/dt/${npmPackageName}?label=Downloads&style=for-the-badge&color=${options?.npmDownloads?.color || '67ACF3'}">
          </a>`;

        const bundleSizeBadge = `<a aria-label="palm-api Size" href="https://www.npmjs.com/package/${npmPackageName}">
            <img alt="" src="https://img.shields.io/bundlephobia/minzip/${npmPackageName}?style=for-the-badge&color=${options?.bundleSize?.color || 'F9DBBC'}">
          </a>`;

        const badges = `<p align="center">
            ${npmVersionBadge}
            ${npmDownloadsBadge}
            ${bundleSizeBadge}
          </p>`;

        return badges;
    }

    generateTableOfContentsFromMarkdown(markdownText: string): string {
        const headingRegex = /^(#{1,6})\s*(.*?)$/gm;
        const slugify = (text: string) =>
            text
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');

        const headings: { text: string; level: number }[] = [];
        let match: RegExpExecArray | null;

        while ((match = headingRegex.exec(markdownText))) {
            const level = match[1].length;
            const text = match[2].trim();
            headings.push({text, level});
        }

        let tableOfContents = '## Table of Contents\n <details>\n<summary>Open Contents</summary>\n\n';

        headings.forEach((heading) => {
            const slug = slugify(heading.text);
            const indent = '  '.repeat(heading.level - 1);
            tableOfContents += `${indent}- [${heading.text}](#${slug})\n`;
        });

        tableOfContents += '</details>';

        return markdownText.replace(this.TABLE_CONTENT_PLACEHOLDER, tableOfContents);
    }

    generateAuthorSection(author: AuthorData) {
        const aboutAuthorSection = `
## About the Author

**${author.name}**

This project was created by ${author.name}. Connect with me on [GitHub](https://github.com/${author.github}) ${author.likedIn ? `and [LinkedIn](https://www.linkedin.com/in/${author.likedIn}/)` : ''} to learn more about my projects and professional background.
`;

        return aboutAuthorSection;
    }

    generateGitHubBadges(
        github: GitHubOptions,
        badgeStyle: 'flat' | 'flat-square' | 'plastic' | 'for-the-badge' = 'for-the-badge'
    ): string {

        const badges = `
        <p align="center"><a href="https://github.com/${github.username}/${github.repo}/graphs/contributors"><img src="https://img.shields.io/github/contributors/${github.username}/${github.repo}.svg?style=${badgeStyle}" alt="Contributors"></a>
        <a href="https://github.com/${github.username}/${github.repo}/network/members"><img src="https://img.shields.io/github/forks/${github.username}/${github.repo}.svg?style=${badgeStyle}" alt="Forks"></a>
        <a href="https://github.com/${github.username}/${github.repo}/stargazers"><img src="https://img.shields.io/github/stars/${github.username}/${github.repo}.svg?style=${badgeStyle}" alt="Stargazers"></a>
        <a href="https://github.com/${github.username}/${github.repo}/issues"><img src="https://img.shields.io/github/issues/${github.username}/${github.repo}.svg?style=${badgeStyle}" alt="Issues"></a></p><br/>`;

        return badges;
    }

    generateBadge(
        label: string,
        url: string,
        color: string,
        logo?: string,
        description?: string,
        logoColor?: string,
        badgeStyle: 'flat' | 'flat-square' | 'plastic' | 'for-the-badge' = 'for-the-badge'
    ): string {
        const badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(label)}-${color}?style=${badgeStyle}${
            logo ? `&logo=${logo}` : ''
        }${logoColor ? `&logoColor=${logoColor}` : ''}`;

        return `[![${label}][${label}-badge]][${label}-url]${description ? ` - ${description}` : ''}

[${label}-badge]: ${badgeUrl}
[${label}-url]: ${url}`;
    }

    generateHeading(heading: { text: string; level: number; }): string {
        let markdownContent = '';
        markdownContent += '#'.repeat(heading.level) + ' ' + heading.text + '\n\n';
        return markdownContent;
    }

    generateDescription(descriptions: string[]): string {
        let markdownContent = '## About the Project\n\n';
        descriptions.forEach(description => {
            markdownContent += description + '\n\n';
        });
        return markdownContent;
    }

    generateImages(images: { url: string; alt: string; }[]): string {
        let markdownContent = '';
        images.forEach(image => {
            markdownContent += `![${image.alt}](${image.url})\n\n`;
        });
        return markdownContent;
    }

    generateCenteredImages(images: { url: string; alt: string; }[]): string {
        let markdownContent = '<p align="center">';
        images.forEach(image => {
            markdownContent += `<img src="${image.url}" alt="${image.alt}"/>`;
        });
        return markdownContent + '</p>';
    }

    generateCodeBlock(codeBlocks: { language: string; code: string; }[]): string {
        let markdownContent = '';
        codeBlocks.forEach(codeBlock => {
            markdownContent += '```' + codeBlock.language + '\n' + codeBlock.code + '\n```\n\n';
        });
        return markdownContent;
    }

    generateContributionSection(contribution: ContributionOptions, contributors: ContributorOptions[]): string {
        const {contributionGuidelinesLink} = contribution;
        let contributionSection = `## Contributing\n\nWe welcome contributions from the community! If you would like to contribute to this project, please follow the guidelines below.\n`;

        // Generic contribution information
        contributionSection += `\n### Ways to Contribute\n\n- Report bugs or issues by opening a new issue on our GitHub repository.
- Suggest new features or improvements by opening a new issue on our GitHub repository.
- Contribute code by forking the repository, making changes, and submitting a pull request.\n`;

        // Contribution instructions
        contributionSection += `\n### Contribution Instructions\n\n1. Fork the repository.
2. Create a new branch for your feature or bug fix: \`git checkout -b my-feature-branch\`.
3. Make the necessary changes and commit them: \`git commit -am 'Add my new feature'\`.
4. Push your branch to your forked repository: \`git push origin my-feature-branch\`.
5. Open a pull request against the main repository, describing the changes you made and why they should be merged.\n`;

        if (contributionGuidelinesLink) {
            contributionSection += `\nFor more information on how to contribute, please visit [Contribution Guidelines](${contributionGuidelinesLink}).\n`;
        }

        if (contributors.length > 0) {
            contributionSection += `### Contributors\n\n`;

            contributors.forEach(contributor => {
                contributionSection += `- ${contributor.name} (${contributor.username})\n`;
            })
        }

        return contributionSection;
    }

    generateAcknowledgementsSection(acknowledgements: AcknowledgeOptions[]): string {
        let acknowledgementsSectionContent = '## Acknowledgements\n\n';

        acknowledgements.forEach((item) => {
            const {title, url, description} = item;
            acknowledgementsSectionContent += `- [${title}](${url}) - ${description}\n`;
        });

        return acknowledgementsSectionContent;
    }

    generateLicenseSection(licenseSection: LicenseOptions): string {
        const {type, customText} = licenseSection;
        let licenseSectionContent = '## License\n\n';

        switch (type) {
            case 'MIT':
                licenseSectionContent += 'This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).\n';
                break;
            case 'Apache-2.0':
                licenseSectionContent += 'This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).\n';
                break;
            case 'GPL-3.0':
                licenseSectionContent += 'This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).\n';
                break;
            case 'BSD-3-Clause':
                licenseSectionContent += 'This project is licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).\n';
                break;
            case 'Custom':
                if (customText) {
                    licenseSectionContent += `${customText}\n`;
                } else {
                    licenseSectionContent += 'This project is licensed under a custom license.\n';
                }
                break;
            default:
                licenseSectionContent += 'This project is licensed under an unspecified license.\n';
        }

        return licenseSectionContent;
    }

    generateFeaturesSection(features: FeatureOptions[]): string {
        let featuresSection = '## Features\n\n';

        features.forEach((feature, index) => {
            const {title, description} = feature;
            featuresSection += `${index + 1}. **${title}**\n\n${description}\n\n`;
        });

        return featuresSection;
    }

    generateTitle(titleName: string) {
        return `## ${titleName}`;
    }

    generateIntroductionSection(title: string, description: string, url: string, imgUrl: string) {
        return `
<div align="center">

<a href="${url}" target="_blank" title="Go to ${url} website"><img width="196px" alt="${title}" src="${imgUrl}"></a>

<a name="readme-top"></a>

# ${title}

${description}

</div>
`
    }

    identifyTechnologies(description: string, technologies: TechnologyOptions[]): string[] {
        const foundTechnologies: string[] = [];

        technologies.forEach(tech => {
            if (new RegExp(`\\b(${tech.name}|${tech.value})\\b`, 'i').test(description)) {
                foundTechnologies.push(tech.name);
            }
        });

        return foundTechnologies;
    }

    generateTechStackSection(technologies: TechnologyOptions[]) {
        let stackSection = `## Stack Tech\n`;

        technologies.forEach(tech => {
            stackSection += `- ${this.generateBadge(tech.name, 'https://www.typescriptlang.org/', tech.mainColor.replace('#', ''), tech.value, tech.description)}}\n`;
        });

        return stackSection;
    }

    /**
     * Generates the install section for a Markdown file.
     * @param options - An object containing options for generating the install section.
     * @returns The Markdown content for the install section.
     */
    generateInstallSection(options: InstallationOptions): string {
        const {
            projectName,
            packageManager,
            dependencies,
            devDependencies,
            installationSteps,
            includeSetup = false,
            setupSteps = [],
            includeUsage = false,
            usageSteps = [],
        } = options;

        let installSection = `## Installation\n\nTo install ${projectName}, follow these steps:\n\n`;

        // Add setup section if requested
        if (includeSetup && setupSteps.length > 0) {
            installSection += `### Setup\n\nBefore installation, make sure you have the following prerequisites set up:\n\n`;
            setupSteps.forEach((step, index) => {
                installSection += `${index + 1}. ${step}\n\n`;
            });
        }

        // Add step for installing dependencies
        if (dependencies.length > 0) {
            installSection += `1. Install the required dependencies:\n\n\`\`\`\n${packageManager} install ${dependencies.join(' ')}\n\`\`\`\n\n`;
        }

        // Add step for installing development dependencies
        if (devDependencies.length > 0) {
            installSection += `2. Install the development dependencies (if needed):\n\n\`\`\`\n${packageManager} install --dev ${devDependencies.join(' ')}\n\`\`\`\n\n`;
        }

        // Add additional installation steps
        if (installationSteps.length > 0) {
            installSection += `${dependencies.length > 0 || devDependencies.length > 0 ? '3. ' : '1. '}Additional steps:\n\n`;
            installationSteps.forEach((step, index) => {
                installSection += `${index + 1}. ${step}\n\n`;
            });
        }

        // Add usage section if requested
        if (includeUsage && usageSteps.length > 0) {
            installSection += `## Usage\n\nAfter installation, you can use the project by following these steps:\n\n`;
            usageSteps.forEach((step, index) => {
                installSection += `${index + 1}. ${step}\n\n`;
            });
        }

        return installSection;
    }

    generateInstallationSection(steps: string[]): string {

        if (steps.length === 0) {
            return '';
        }

        let installSection = `### Installation\n\nTo install this project, follow these steps:\n\n`;

        steps.forEach((step, index) => {
            installSection += `${index + 1}. ${step}\n\n`;
        });

        return installSection;
    }

    generateUsageSection(steps: string[]): string {

        if (steps.length === 0) {
            return '';
        }

        let usageSection = `### Usage\n\nAfter installation, you can use the project by following these steps:\n\n`;

        steps.forEach((step, index) => {
            usageSection += `${index + 1}. ${step}\n\n`;
        });

        return usageSection;
    }

    /**
     * Generates a links section for a Markdown file based on the headings.
     * @param markdownContent - The Markdown content of the file.
     * @returns The Markdown content for the links section.
     */
    generateLinksSection(markdownContent: string): string {
        const headings = markdownContent.match(/\n## (.+)\n/g) || [];
        const links = headings.map((heading) => {
            const label = heading.replace(/\n## (.+)\n/, '$1');
            const id = label.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase();
            return {label, id};
        });

        if (links.length === 0) {
            return '';
        }

        let linksSection = '<div align="center"><h4>';

        links.forEach((link, index) => {
            const {label, id} = link;
            const isLastLink = index === links.length - 1;

            linksSection += `<a href="#${id}">${label}</a>${isLastLink ? '' : ' • '}`;
        });

        linksSection += '</h4></div>';

        return markdownContent.replace(this.LINKS_PLACEHOLDER, linksSection);
    }

    /**
     * Generates a showcase section with image URLs and links formatted as a table.
     * @param images - An array of image data objects with author and url properties.
     * @returns The formatted showcase section as a string.
     */
    generateShowcaseSection(images: string[]): string {
        if (images.length === 0) {
            return '';
        }

        const columns = 2;
        let showcaseSection = `## Showcase\n\n <center>\n\n<table>\n`;

        const numRows = Math.ceil(images.length / columns);
        for (let i = 0; i < numRows; i++) {
            showcaseSection += '<tr>\n';

            for (let j = 0; j < columns; j++) {
                const index = i * columns + j;
                if (index < images.length) {
                    const url = images[index];
                    showcaseSection += `<td><a href="${url}"><img width="320" src="${url}"></a></td>\n`;
                } else {
                    showcaseSection += '<td></td>\n';
                }
            }

            showcaseSection += '</tr>\n';
        }

        showcaseSection += '</table>\n\n</center>';

        return showcaseSection;
    }

    generateLinksPlaceholder() {
        return this.LINKS_PLACEHOLDER;
    }

    generateWatermark() {
        return '---\n <div align="center">Built with ❤️ with <a href="https://github.com/luisvent/document_my_project">Document My Project</a></div>';
    }
}
