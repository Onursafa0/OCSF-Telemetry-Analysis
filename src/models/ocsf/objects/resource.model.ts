import { OcsfObject } from '../base/ocsf-object.model';
export class Resource extends OcsfObject {
    name?: string;
    uid?: string;
    type?: string;
    path?: string;
    constructor(p?: Partial<Resource>) { super(); Object.assign(this, p); }
}