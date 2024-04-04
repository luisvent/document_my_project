import {LicenseType} from "../enums/license-type.enum";

export interface LicenseOptions {
    type: LicenseType,
    customText?: string | undefined
}
