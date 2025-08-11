import { OcsfObject } from '../base/ocsf-object.model';

export class Tls extends OcsfObject {
    protocol_name?: string;
    version?: string;
    cipher?: string;
    issuer?: string;
    subject?: string;
    ja3_fingerprint?: string;
    ja3s_fingerprint?: string;
    negotiated_cipher_suite?: string;
    negotiated_protocol_version?: string;

    constructor(data: Partial<Tls>) {
        super();
        Object.assign(this, data);
    }
}