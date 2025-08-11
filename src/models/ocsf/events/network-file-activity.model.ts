import { OcsfEvent } from '../base/ocsf-event.model';
import { File } from '../objects/file.model';
import { OcsfCategoryUid, OcsfClassUid, NetworkFileActivityId } from '../enums'; 
export class NetworkFileActivity extends OcsfEvent {
    file: File;
    constructor(p?: Partial<NetworkFileActivity>) {
        super(OcsfClassUid.NETWORK_FILE_ACTIVITY);
        this.category_uid = OcsfCategoryUid.NETWORK_ACTIVITY;
        this.category_name = 'Network Activity';
        this.file = new File();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = NetworkFileActivityId[this.activity_id];
    }
}