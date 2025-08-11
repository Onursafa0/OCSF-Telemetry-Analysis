import { OcsfEvent } from '../base/ocsf-event.model';
import { File } from '../objects/file.model';
import { Countermeasure } from '../objects/countermeasure.model';
import { OcsfCategoryUid, OcsfClassUid, RemediationActivityId } from '../enums';
export class FileRemediationActivity extends OcsfEvent {
    file: File;
    countermeasures?: Countermeasure[];
    constructor(p?: Partial<FileRemediationActivity>) {
        super(OcsfClassUid.FILE_REMEDIATION_ACTIVITY);
        this.category_uid = OcsfCategoryUid.REMEDIATION_ACTIVITY;
        this.category_name = 'Remediation Activity';
        this.file = new File();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = RemediationActivityId[this.activity_id];
    }
}