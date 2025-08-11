import { OcsfObject } from '../base/ocsf-object.model';
import { File } from './file.model';
import { Url } from './url.model';
export class Email extends OcsfObject {
    from_address?: string;
    to_address?: string[];
    subject?: string;
    files?: File[];
    urls?: Url[];
    constructor(p?: Partial<Email>) { super(); Object.assign(this, p); }
}