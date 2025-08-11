import { OcsfEvent } from '../base/ocsf-event.model';
import { File } from '../objects/file.model';
import { OcsfCategoryUid, OcsfClassUid, FtpActivityId } from '../enums';
export class FtpActivity extends OcsfEvent {
    file?: File;
    command?: string;
    constructor(p?: Partial<FtpActivity>) {
        super(OcsfClassUid.FTP_ACTIVITY);
        this.category_uid = OcsfCategoryUid.NETWORK_ACTIVITY;
        this.category_name = 'Network Activity';
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = FtpActivityId[this.activity_id];
    }
}