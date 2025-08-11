import { OcsfObject } from '../base/ocsf-object.model';

export class Hash extends OcsfObject {
    md5?: string;
    sha1?: string;
    sha256?: string;

    constructor(partial?: Partial<Hash>) {
        super();
        Object.assign(this, partial);
    }
}