import { OcsfEvent } from '../base/ocsf-event.model';
import { Process } from '../objects/process.model';
import { OcsfCategoryUid, OcsfClassUid } from '../enums';
import { ProcessActivityId } from '@models/ocsf.model';


export class ProcessActivity extends OcsfEvent {
    process: Process;
    constructor(partial?: Partial<ProcessActivity>) {
        super(OcsfClassUid.PROCESS_ACTIVITY); 
        this.category_uid = OcsfCategoryUid.SYSTEM_ACTIVITY;
        this.category_name = 'System Activity';
        this.process = new Process();
        Object.assign(this, partial);
        if (this.activity_id) {
            this.activity_name = ProcessActivityId[this.activity_id] || 'Unknown';
        }
    }
}
