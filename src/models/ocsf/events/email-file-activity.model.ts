import { OcsfEvent } from '../base/ocsf-event.model';
import { File } from '../objects/file.model';
import { OcsfCategoryUid, OcsfClassUid, EmailFileActivityId } from '../enums';
export class EmailFileActivity extends OcsfEvent {
    file: File;
    email_uid?: string;
    constructor(p?: Partial<EmailFileActivity>) {
        super(OcsfClassUid.EMAIL_FILE_ACTIVITY);
        this.category_uid = OcsfCategoryUid.NETWORK_ACTIVITY;
        this.category_name = 'Network Activity';
        this.file = new File();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = EmailFileActivityId[this.activity_id];
    }
}