import { OcsfObject } from '../base/ocsf-object.model';
export class Service extends OcsfObject {
    name?: string;
    display_name?: string;
    path?: string;
    status?: string;
    constructor(p?: Partial<Service>) { super(); Object.assign(this, p); }
}