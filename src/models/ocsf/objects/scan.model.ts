import { OcsfObject } from '../base/ocsf-object.model';
import { Policy } from './policy.model';

export class Scan extends OcsfObject {
    scan_id?: string;
    name?: string;
    status?: string;
    status_id?: number;
    start_time?: string;
    end_time?: string;
    duration?: number;
    num_detections?: number;
    policy?: Policy;

    constructor(data: Partial<Scan> = {}) {
        super();
        Object.assign(this, data);
    }
}