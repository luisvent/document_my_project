import {Injectable} from "@angular/core";

interface MarkdownData {
    fileName: string;
    title: string;
    headings: { text: string; level: number; }[];
    descriptions: string[];
    images: { url: string; alt: string; }[];
    codeBlocks: { language: string; code: string; }[];
}

@Injectable({
    providedIn: 'root'
})
export class MarkdownService {

    constructor() {
        // console.log(this.generateTableOfContentsFromMarkdown(readmeDemo));
    }

    // Interface Segregation Principle (ISP)
    // The MarkdownData interface contains only the properties required by the service.

    // createMarkdownFile(fileData: MarkdownData): string {
    //     const markdownComponents: MarkdownComponent[] = [
    //         new TitleComponent(fileData.title),
    //         new HeadingComponent(fileData.headings),
    //         new DescriptionComponent(fileData.descriptions),
    //         new ImageComponent(fileData.images),
    //         new CodeBlockComponent(fileData.codeBlocks)
    //     ];
    //
    //     let markdownContent = '';
    //     markdownComponents.forEach(component => {
    //         markdownContent += component.generateMarkdown();
    //     });
    //
    //     return markdownContent;
    // }


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
        logoColor?: string,
        badgeStyle: 'flat' | 'flat-square' | 'plastic' | 'for-the-badge' = 'for-the-badge'
    ): string {
        const badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(label)}-${color}?style=${badgeStyle}${
            logo ? `&logo=${logo}` : ''
        }${logoColor ? `&logoColor=${logoColor}` : ''}`;

        return `[![${label}][${label}-badge]][${label}-url]

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
}
