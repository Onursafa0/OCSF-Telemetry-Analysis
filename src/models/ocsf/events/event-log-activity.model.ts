import { OcsfEvent } from '../base/ocsf-event.model';
import { OcsfCategoryUid, OcsfClassUid, EventLogActivityId } from '../enums';
export class EventLogActivity extends OcsfEvent {
    log_name?: string;
    log_provider?: string;
    constructor(p?: Partial<EventLogActivity>) {
        super(OcsfClassUid.EVENT_LOG_ACTIVITY);
        this.category_uid = OcsfCategoryUid.SYSTEM_ACTIVITY;
        this.category_name = 'System Activity';
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = EventLogActivityId[this.activity_id];
    }
}