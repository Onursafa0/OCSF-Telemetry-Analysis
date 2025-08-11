import { OcsfObject } from '../base/ocsf-object.model';
export class Assessment extends OcsfObject {
    name?: string;
    score?: number;
    constructor(p?: Partial<Assessment>) { super(); Object.assign(this, p); }
}