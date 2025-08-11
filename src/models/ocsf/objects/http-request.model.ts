import { OcsfObject } from '../base/ocsf-object.model';
import { Url } from './url.model';
export class HttpRequest extends OcsfObject {
    method?: string;
    url?: Url;
    user_agent?: string;
    version?: string;
    constructor(p?: Partial<HttpRequest>) { super(); Object.assign(this, p); }
}