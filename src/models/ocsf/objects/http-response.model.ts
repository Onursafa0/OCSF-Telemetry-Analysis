import { OcsfObject } from '../base/ocsf-object.model';
export class HttpResponse extends OcsfObject {
    status_code?: number;
    status_message?: string;
    version?: string;
    constructor(p?: Partial<HttpResponse>) { super(); Object.assign(this, p); }
}
