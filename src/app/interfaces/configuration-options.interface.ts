export interface ConfigurationOptions {
    description: string,
    parameters: {
        field: string, description: string, default?: string
    }[]
}
