import { OcsfObject } from '../base/ocsf-object.model';
export class Group extends OcsfObject {
    name?: string;
    uid?: string;
    domain?: string;
    privileges?: string[];
    constructor(p?: Partial<Group>) { super(); Object.assign(this, p); }
}