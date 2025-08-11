import { OcsfObject } from '../base/ocsf-object.model';
export class Share extends OcsfObject {
    name?: string;
    path?: string;
    type?: string;
    constructor(p?: Partial<Share>) { super(); Object.assign(this, p); }
}