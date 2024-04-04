export interface InstallationOptions {
    projectName: string;
    packageManager: string;
    dependencies: string[];
    devDependencies: string[];
    installationSteps: string[];
    includeSetup?: boolean;
    setupSteps?: string[];
    includeUsage?: boolean;
    usageSteps?: string[];
}
