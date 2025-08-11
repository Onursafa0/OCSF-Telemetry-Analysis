import { OcsfObject } from '../base/ocsf-object.model';
export class Ntp extends OcsfObject {
    stratum?: number;
    version?: string;
    precision?: number;
    constructor(p?: Partial<Ntp>) { super(); Object.assign(this, p); }
}