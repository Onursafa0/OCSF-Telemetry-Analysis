import { OcsfEvent } from './ocsf-event.model';
import { FindingInfo } from '../objects/finding-info.model';
import { FindingStatusId } from '../enums';

export abstract class FindingBase extends OcsfEvent {
    finding_info: FindingInfo;
    comment?: string;
    confidence?: string;
    confidence_id?: number;
    confidence_score?: number;
    end_time?: string;
    start_time: string;
    status: string;
    status_id: FindingStatusId;
    
    constructor(class_uid: number, data: any) {
        super(class_uid);
        this.finding_info = data.finding_info;
        this.start_time = data.start_time;
        this.status = data.status;
        this.status_id = data.status_id;
        Object.assign(this, data);
    }
}