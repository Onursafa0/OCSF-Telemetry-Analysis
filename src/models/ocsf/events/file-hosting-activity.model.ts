import { OcsfEvent } from '../base/ocsf-event.model';
import { File } from '../objects/file.model';
import { OcsfCategoryUid, OcsfClassUid, FileHostingActivityId } from '../enums';
export class FileHostingActivity extends OcsfEvent {
    file: File;
    constructor(p?: Partial<FileHostingActivity>) {
        super(OcsfClassUid.FILE_HOSTING_ACTIVITY);
        this.category_uid = OcsfCategoryUid.APPLICATION_ACTIVITY;
        this.category_name = 'Application Activity';
        this.file = new File();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = FileHostingActivityId[this.activity_id];
    }
}