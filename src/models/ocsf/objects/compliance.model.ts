import { OcsfObject } from '../base/ocsf-object.model';
export class Compliance extends OcsfObject {
    standard?: string;
    control?: string;
    status?: string;
    constructor(p?: Partial<Compliance>) { super(); Object.assign(this, p); }
}