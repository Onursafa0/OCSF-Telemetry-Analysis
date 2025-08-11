import { OcsfObject } from '../base/ocsf-object.model';
export class Database extends OcsfObject {
    name?: string;
    uid?: string;
    type?: string;
    version?: string;
    constructor(p?: Partial<Database>) { super(); Object.assign(this, p); }
}