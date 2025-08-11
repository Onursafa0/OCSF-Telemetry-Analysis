import { OcsfObject } from '../base/ocsf-object.model';
export class Proxy extends OcsfObject {
    hostname?: string;
    ip?: string;
    version?: string;
    constructor(p?: Partial<Proxy>) { super(); Object.assign(this, p); }
}