import { OcsfObject } from '../base/ocsf-object.model';
export class Package extends OcsfObject {
    name?: string;
    version?: string;
    vendor?: string;
    constructor(p?: Partial<Package>) { super(); Object.assign(this, p); }
}