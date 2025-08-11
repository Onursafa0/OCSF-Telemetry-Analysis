import { OcsfObject } from '../base/ocsf-object.model';

export class Databucket extends OcsfObject {
    name?: string;
    uid?: string;
    type?: string;
    region?: string;
    url?: string;

    constructor(data: Partial<Databucket> = {}) {
        super();
        Object.assign(this, data);
    }
}