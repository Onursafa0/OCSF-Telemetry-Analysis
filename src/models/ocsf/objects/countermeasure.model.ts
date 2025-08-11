import { OcsfObject } from '../base/ocsf-object.model';
import { RemediationStatusId } from '../enums';

export class Countermeasure extends OcsfObject {
    name?: string;
    uid?: string;
    description?: string; 
    type?: string;
    type_id?: number;
    status?: string;
    status_id?: RemediationStatusId;
    applied_time?: string;

    constructor(data: Partial<Countermeasure> = {}) {
        super();
        Object.assign(this, data);
    }
}