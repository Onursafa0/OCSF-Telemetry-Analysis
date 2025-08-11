import { OcsfObject } from '../base/ocsf-object.model';
import { Url } from './url.model';
export class WebResource extends OcsfObject {
    url?: Url;
    content_type?: string;
    constructor(p?: Partial<WebResource>) { super(); Object.assign(this, p); }
}