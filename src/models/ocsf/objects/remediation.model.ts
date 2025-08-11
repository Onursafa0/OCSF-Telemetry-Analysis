import { OcsfObject } from '../base/ocsf-object.model';
import { RemediationStatusId } from '../enums';
import { User } from './user.model';

export class Remediation extends OcsfObject {
    description?: string;
    steps?: string[];
    name?: string;
    uid?: string;
    status?: string;
    status_id?: RemediationStatusId;
    start_time?: string;
    end_time?: string;
    applied_by?: User;

    constructor(data: Partial<Remediation> = {}) {
        super();
        Object.assign(this, data);
    }
}