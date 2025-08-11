import { OcsfObject } from '../base/ocsf-object.model';
export class KbArticle extends OcsfObject {
    id?: string;
    url?: string;
    title?: string;
    constructor(p?: Partial<KbArticle>) { super(); Object.assign(this, p); }
}