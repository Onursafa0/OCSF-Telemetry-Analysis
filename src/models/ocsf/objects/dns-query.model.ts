import { OcsfObject } from '../base/ocsf-object.model';
export class DnsQuery extends OcsfObject {
    hostname?: string;
    type?: string;
    class?: string;
    constructor(p?: Partial<DnsQuery>) { super(); Object.assign(this, p); }
}