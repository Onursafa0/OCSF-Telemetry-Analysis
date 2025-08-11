import { OcsfObject } from '../base/ocsf-object.model';
import { Vulnerability } from './vulnerability.model';
export class Finding extends OcsfObject {
    title?: string;
    status_id?: number;
    vulnerabilities?: Vulnerability[];
    constructor(p?: Partial<Finding>) { super(); Object.assign(this, p); }
}