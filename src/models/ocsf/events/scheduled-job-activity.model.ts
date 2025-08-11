import { OcsfEvent } from '../base/ocsf-event.model';
import { Job } from '../objects/job.model';
import { OcsfCategoryUid, OcsfClassUid, ScheduledJobActivityId } from '../enums';
export class ScheduledJobActivity extends OcsfEvent {
    job: Job;
    constructor(p?: Partial<ScheduledJobActivity>) {
        super(OcsfClassUid.SCHEDULED_JOB_ACTIVITY);
        this.category_uid = OcsfCategoryUid.SYSTEM_ACTIVITY;
        this.category_name = 'System Activity';
        this.job = new Job();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = ScheduledJobActivityId[this.activity_id];
    }
}