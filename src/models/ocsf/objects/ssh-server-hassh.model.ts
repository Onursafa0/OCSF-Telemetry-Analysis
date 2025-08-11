import { OcsfObject } from '../base/ocsf-object.model';

export class SshServerHassh extends OcsfObject {
    fingerprint?: string;
    version?: string;
    os?: string;
    server_string?: string;

    constructor(data: Partial<SshServerHassh>) {
        super();
        Object.assign(this, data);
    }
}