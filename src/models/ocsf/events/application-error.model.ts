import { OcsfEvent } from '../base/ocsf-event.model';
import * as OCSF from '../';

export class ApplicationError extends OcsfEvent {
    error_code?: number;
    error_type?: string;
    
    constructor(data: Partial<ApplicationError>) {
        super(OCSF.OcsfClassUid.APPLICATION_ERROR);
        Object.assign(this, data);
    }
}