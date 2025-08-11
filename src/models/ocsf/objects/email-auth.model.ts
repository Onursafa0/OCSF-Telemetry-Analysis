import { OcsfObject } from '../base/ocsf-object.model';
export class EmailAuth extends OcsfObject {
    spf_result?: string;
    dkim_result?: string;
    dmarc_result?: string;
    constructor(p?: Partial<EmailAuth>) { super(); Object.assign(this, p); }
}