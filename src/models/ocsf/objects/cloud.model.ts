import { OcsfObject } from '../base/ocsf-object.model';

export class Cloud extends OcsfObject {
    provider?: string;
    region?: string;
    account_uid?: string;
    project_uid?: string;
    organization_uid?: string;

    constructor(data: Partial<Cloud> = {}) {
        super();
        Object.assign(this, data);
    }
}