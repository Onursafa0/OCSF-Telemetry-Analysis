import { OcsfObject } from '../base/ocsf-object.model';
export class Kernel extends OcsfObject {
    name?: string;
    version?: string;
    constructor(p?: Partial<Kernel>) { super(); Object.assign(this, p); }
}