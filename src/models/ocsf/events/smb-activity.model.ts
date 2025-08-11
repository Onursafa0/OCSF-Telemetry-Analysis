import { OcsfEvent } from '../base/ocsf-event.model';
import { File } from '../objects/file.model';
import { Share } from '../objects/share.model';
import { OcsfCategoryUid, OcsfClassUid, SmbActivityId } from '../enums';
export class SmbActivity extends OcsfEvent {
    file?: File;
    share: Share;
    constructor(p?: Partial<SmbActivity>) {
        super(OcsfClassUid.SMB_ACTIVITY);
        this.category_uid = OcsfCategoryUid.NETWORK_ACTIVITY;
        this.category_name = 'Network Activity';
        this.share = new Share();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = SmbActivityId[this.activity_id];
    }
}