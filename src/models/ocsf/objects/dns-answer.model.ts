import { OcsfObject } from '../base/ocsf-object.model';
export class DnsAnswer extends OcsfObject {
    data?: string;
    type?: string;
    ttl?: number;
    constructor(p?: Partial<DnsAnswer>) { super(); Object.assign(this, p); }
}