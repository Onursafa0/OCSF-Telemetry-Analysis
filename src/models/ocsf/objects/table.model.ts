import { OcsfObject } from '../base/ocsf-object.model';
export class Table extends OcsfObject {
    name?: string;
    uid?: string;
    database_name?: string;
    constructor(p?: Partial<Table>) { super(); Object.assign(this, p); }
}