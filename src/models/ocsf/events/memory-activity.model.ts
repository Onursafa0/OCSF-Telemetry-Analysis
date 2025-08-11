import { OcsfEvent } from '../base/ocsf-event.model';
import { Process } from '../objects/process.model';
import { OcsfCategoryUid, OcsfClassUid, MemoryActivityId } from '../enums';
export class MemoryActivity extends OcsfEvent {
    process: Process;
    base_address?: string;
    size?: number;
    constructor(p?: Partial<MemoryActivity>) {
        super(OcsfClassUid.MEMORY_ACTIVITY);
        this.category_uid = OcsfCategoryUid.SYSTEM_ACTIVITY;
        this.category_name = 'System Activity';
        this.process = new Process();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = MemoryActivityId[this.activity_id];
    }
}