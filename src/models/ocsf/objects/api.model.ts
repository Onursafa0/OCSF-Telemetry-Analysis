import { OcsfObject } from '../base/ocsf-object.model';
export class Api extends OcsfObject {
    name?: string;
    version?: string;
    operation?: string;
    service_name?: string;
    constructor(p?: Partial<Api>) { super(); Object.assign(this, p); }
}