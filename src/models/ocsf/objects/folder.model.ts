import { OcsfObject } from '../base/ocsf-object.model';
export class Folder extends OcsfObject {
    name?: string;
    path?: string;
    created_time?: string;
    constructor(p?: Partial<Folder>) { super(); Object.assign(this, p); }
}