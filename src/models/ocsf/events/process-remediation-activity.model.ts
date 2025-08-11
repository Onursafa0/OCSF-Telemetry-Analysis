import { OcsfEvent } from '../base/ocsf-event.model';
import { Process } from '../objects/process.model';
import { Countermeasure } from '../objects/countermeasure.model';
import { OcsfCategoryUid, OcsfClassUid, RemediationActivityId } from '../enums';
export class ProcessRemediationActivity extends OcsfEvent {
    process: Process;
    countermeasures?: Countermeasure[];
    constructor(p?: Partial<ProcessRemediationActivity>) {
        super(OcsfClassUid.PROCESS_REMEDIATION_ACTIVITY);
        this.category_uid = OcsfCategoryUid.REMEDIATION_ACTIVITY;
        this.category_name = 'Remediation Activity';
        this.process = new Process();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = RemediationActivityId[this.activity_id];
    }
}