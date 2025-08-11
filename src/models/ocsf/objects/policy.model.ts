import { OcsfObject } from '../base/ocsf-object.model';
export class Policy extends OcsfObject {
    name?: string;
    uid?: string;
    desc?: string;
    constructor(p?: Partial<Policy>) { super(); Object.assign(this, p); }
}