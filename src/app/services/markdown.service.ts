import {Injectable} from "@angular/core";

interface MarkdownData {
    fileName: string;
    title: string;
    headings: { text: string; level: number; }[];
    descriptions: string[];
    images: { url: string; alt: string; }[];
    codeBlocks: { language: string; code: string; }[];
}

export enum LicenseType {
    MIT = 'MIT',
    Apache2 = 'Apache-2.0',
    GPL3 = 'GPL-3.0',
    BSD3 = 'BSD-3-Clause',
    Custom = 'Custom'
}

@Injectable({
    providedIn: 'root'
})
export class MarkdownService {

    constructor() {
        // console.log(this.generateTableOfContentsFromMarkdown(readmeDemo));
        this.test();
    }


    // region test
    test() {
        // Sample data
        const npmPackageName = 'my-awesome-package';
        const githubRepo = 'my-awesome-repo';
        const githubOwner = 'johndoe';


// Generate NPM badges
        const npmBadges = this.generateNpmBadges(npmPackageName, {
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
        });

// Generate GitHub badges
        const githubBadges = this.generateGitHubBadges(githubRepo, githubOwner);

// Generate a custom badge
        const customBadge = this.generateBadge('Custom Badge', 'https://example.com', 'brightgreen', 'github', 'white');

// Generate a parameters table
        const parametersTable = this.generateParametersTable([
            {fieldName: 'name', description: 'Name of the user', defaultValue: 'John Doe'},
            {fieldName: 'age', description: 'Age of the user'},
            {fieldName: 'isAdmin', description: 'Whether the user is an admin or not', defaultValue: 'false'}
        ]);

// Sample data for other components
        const headings = [
            {text: 'Introduction', level: 1},
            {text: 'Installation', level: 2},
            {text: 'Usage', level: 2},
            {text: 'Examples', level: 3}
        ];

        const descriptions = [
            'This is a sample markdown file generated using the MarkdownService.',
            'To install this package, run `npm install my-awesome-package`.'
        ];

        const images = [
            {url: 'https://example.com/image1.png', alt: 'Image 1'},
            {url: 'https://example.com/image2.jpg', alt: 'Image 2'}
        ];

        const codeBlocks = [
            {language: 'javascript', code: 'console.log("Hello, World!");'},
            {language: 'typescript', code: 'const message: string = "Hello, TypeScript!";'}
        ];

        const contributionSection = {
            title: 'Contributing',
            description: 'We welcome contributions from the community! If you would like to contribute to this project, please follow the guidelines below.',
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
            {name: 'Webpack', value: 'webpack', description: "A module bundler for JavaScript applications"},
            {name: 'vite', value: 'vite', description: "A fast and opinionated frontend build tool"},
            {name: 'Babel', value: 'babel', description: "An open-source JavaScript transpiler"},
            {name: 'Sass', value: 'sass', description: "A CSS extension language for stylesheets"},
        ];

// Generate markdown content
        const markdownContent = `${this.generateIntroductionSection('My package', 'Test package introduction just for testing', 'https//:url.com', 'https//:url.com')}
        
${npmBadges}

${githubBadges}

${customBadge}

${parametersTable}

${this.generateTableOfContentsFromMarkdown(`${this.generateDescription(descriptions)}${this.generateImages(images)}${this.generateCodeBlock(codeBlocks)}`)}

${this.generateHeading(headings[0])}
${this.generateDescription(descriptions)}

${this.generateHeading(headings[1])}
To install this package, run \`npm install ${npmPackageName}\`.

${this.generateHeading(headings[2])}
${this.generateImages(images)}

${this.generateHeading(headings[3])}
${this.generateCodeBlock(codeBlocks)}

${this.generateContributionSection(contributionSection)}

${this.generateTechStackSection(techStack)}

${this.generateAcknowledgementsSection(acknowledgements)}

${this.generateLicenseSection(licenseSection)}

${this.generateFeaturesSection(features)}

${this.generateAuthorSection('John Doe', 'john@example.com')}
`;

        console.log(markdownContent);
    }

    // endregion

    generateParametersTable(properties: {
        fieldName: string;
        description: string;
        defaultValue?: string;
    }[]): string {
        const tableHeader = '| Field Name | Description | Default Value |\n| --- | --- | --- |';
        let tableBody = '';

        for (const prop of properties) {
            const row = `| ${prop.fieldName} | ${prop.description} | ${prop.defaultValue || ''} |`;
            tableBody += `${row}\n`;
        }

        return `${tableHeader}\n${tableBody}`;
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

        let tableOfContents = '<details>\n<summary>Tabla de contenidos</summary>\n\n';

        headings.forEach((heading) => {
            const slug = slugify(heading.text);
            const indent = '  '.repeat(heading.level - 1);
            tableOfContents += `${indent}- [${heading.text}](#${slug})\n`;
        });

        tableOfContents += '</details>';

        return tableOfContents;
    }

    generateAuthorSection(authorName: string, githubUsername: string, linkedinUsername?: string) {
        const aboutAuthorSection = `
## About the Author

**${authorName}**

This project was created by ${authorName}. Connect with me on [GitHub](https://github.com/${githubUsername}) ${linkedinUsername ? `and [LinkedIn](https://www.linkedin.com/in/${linkedinUsername}/)` : ''} to learn more about my projects and professional background.
`;

        return aboutAuthorSection;
    }

    generateGitHubBadges(
        repo: string,
        owner: string,
        badgeStyle: 'flat' | 'flat-square' | 'plastic' | 'for-the-badge' = 'for-the-badge'
    ): string {
        const contributorsUrl = `https://github.com/${owner}/${repo}/graphs/contributors`;
        const forksUrl = `https://github.com/${owner}/${repo}/network/members`;
        const starsUrl = `https://github.com/${owner}/${repo}/stargazers`;
        const issuesUrl = `https://github.com/${owner}/${repo}/issues`;

        const contributorsBadgeUrl = `https://img.shields.io/github/contributors/${owner}/${repo}.svg?style=${badgeStyle}`;
        const forksBadgeUrl = `https://img.shields.io/github/forks/${owner}/${repo}.svg?style=${badgeStyle}`;
        const starsBadgeUrl = `https://img.shields.io/github/stars/${owner}/${repo}.svg?style=${badgeStyle}`;
        const issuesBadgeUrl = `https://img.shields.io/github/issues/${owner}/${repo}.svg?style=${badgeStyle}`;

        const badges = `[![Contributors][contributors-shield]][contributors-url]
        [![Forks][forks-shield]][forks-url]
        [![Stargazers][stars-shield]][stars-url]
        [![Issues][issues-shield]][issues-url]
        
[contributors-shield]: ${contributorsBadgeUrl}
[contributors-url]: ${contributorsUrl}
[forks-shield]: ${forksBadgeUrl}
[forks-url]: ${forksUrl}
[stars-shield]: ${starsBadgeUrl}
[stars-url]: ${starsUrl}
[issues-shield]: ${issuesBadgeUrl}
[issues-url]: ${issuesUrl}`;

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
        let markdownContent = '';
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

    generateCodeBlock(codeBlocks: { language: string; code: string; }[]): string {
        let markdownContent = '';
        codeBlocks.forEach(codeBlock => {
            markdownContent += '```' + codeBlock.language + '\n' + codeBlock.code + '\n```\n\n';
        });
        return markdownContent;
    }

    generateContributionSection(section: {
        title: string;
        description: string;
        contributionGuidelinesLink?: string;
    }): string {
        const {title, description, contributionGuidelinesLink} = section;
        let contributionSection = `## ${title}\n\n${description}\n`;

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

        return contributionSection;
    }

    generateAcknowledgementsSection(items: {
        title: string;
        url: string;
        description: string;
    }[]): string {
        let acknowledgementsSectionContent = '## Acknowledgements\n\n';

        items.forEach((item) => {
            const {title, url, description} = item;
            acknowledgementsSectionContent += `- [${title}](${url}) - ${description}\n`;
        });

        return acknowledgementsSectionContent;
    }

    generateLicenseSection(licenseSection: {
        type: LicenseType;
        customText?: string;
    }): string {
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

    generateFeaturesSection(features: {
        title: string;
        description: string;
    }[]): string {
        let featuresSection = '## Features\n\n';

        features.forEach((feature, index) => {
            const {title, description} = feature;
            featuresSection += `${index + 1}. **${title}**\n\n${description}\n\n`;
        });

        return featuresSection;
    }

    generateIntroductionSection(title: string, description: string, url: string, imgUrl: string) {
        return `
<div align="center">

<a href="${url}" target="_blank" title="Go to the Gowebly CLI website"><img width="196px" alt="gowebly logo" src="${imgUrl}"></a>

<a name="readme-top"></a>

# ${title}

${description}

</div>
`
    }

    identifyTechnologies(description: string, technologies: { name: string; value: string }[]): string[] {
        const foundTechnologies: string[] = [];

        technologies.forEach(tech => {
            if (new RegExp(`\\b(${tech.name}|${tech.value})\\b`, 'i').test(description)) {
                foundTechnologies.push(tech.name);
            }
        });

        return foundTechnologies;
    }

    generateTechStackSection(technologies: { name: string; description: string; value: string; }[]) {
        let stackSection = `## Stack Tech\n`;

        technologies.forEach(tech => {
            stackSection += `- ${this.generateBadge(tech.name, 'https://www.typescriptlang.org/', 'blue', tech.value, tech.description)}}\n`;
        });

        return stackSection;
    }
}
