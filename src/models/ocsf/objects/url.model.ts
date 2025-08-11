import { OcsfObject } from '../base/ocsf-object.model';
export class Url extends OcsfObject {
    scheme?: string;
    domain?: string;
    path?: string;
    query_string?: string;
    full_url?: string;
    constructor(p?: Partial<Url>) { super(); Object.assign(this, p); }
}