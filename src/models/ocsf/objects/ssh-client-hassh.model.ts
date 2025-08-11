import { OcsfObject } from '../base/ocsf-object.model';
export class SshClientHassh extends OcsfObject {
    fingerprint?: string;
    constructor(p?: Partial<SshClientHassh>) { super(); Object.assign(this, p); }
}