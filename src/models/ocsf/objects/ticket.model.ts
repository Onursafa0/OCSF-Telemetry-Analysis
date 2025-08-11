import { OcsfObject } from '../base/ocsf-object.model';
import { User } from './user.model';
import { FindingStatusId } from '../enums';

export class Ticket extends OcsfObject {
    ticket_id?: string;
    url?: string;
    status?: string;
    status_id?: FindingStatusId;
    priority?: string;
    priority_id?: number;
    assignee?: User;
    created_time?: string;
    updated_time?: string;
    description?: string;

    constructor(data: Partial<Ticket> = {}) {
        super();
        Object.assign(this, data);
    }
}