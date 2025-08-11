import { FindingBase } from '../base/finding-base.model';
import * as OCSF from '../';

export class IncidentFinding extends FindingBase {
    assignee?: OCSF.User;
    assignee_group?: OCSF.Group;
    attacks?: OCSF.Attack[];
    is_suspected_breach?: boolean;
    priority?: string;
    priority_id?: number;
    src_url?: string;
    ticket?: OCSF.Ticket;
    tickets?: OCSF.Ticket[];
    verdict?: string;
    verdict_id?: number;

    constructor(data: Partial<IncidentFinding>) {
        super(OCSF.OcsfClassUid.INCIDENT_FINDING, data);
        Object.assign(this, data);
    }
}
