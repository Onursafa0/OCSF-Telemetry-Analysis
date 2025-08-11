import { OcsfObject } from '../base/ocsf-object.model';
export class CisBenchmarkResult extends OcsfObject {
    control_id?: string;
    profile?: string;
    result?: 'passed' | 'failed';
    constructor(p?: Partial<CisBenchmarkResult>) { super(); Object.assign(this, p); }
}