import { OcsfObject } from '../base/ocsf-object.model';
export class QueryInfo extends OcsfObject {
    query?: string;
    constructor(p?: Partial<QueryInfo>) { super(); Object.assign(this, p); }
}