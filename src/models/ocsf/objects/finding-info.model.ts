import { OcsfObject } from '../base/ocsf-object.model';
import { OcsfEvent } from '../base/ocsf-event.model';
export class FindingInfo extends OcsfObject {
    [key: string]: any; 
    finding_name?: string; 
    finding_type?: string; 
    finding_type_id?: number; 
    description?: string; 
    remediation_steps?: string[]; 
    related_events?: OcsfEvent[];
    constructor(data: Partial<FindingInfo> = {}) { super(); Object.assign(this, data); }
}