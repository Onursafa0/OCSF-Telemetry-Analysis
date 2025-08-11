import { OcsfEvent } from '../base/ocsf-event.model';
import { SshClientHassh } from '../objects/ssh-client-hassh.model';
import { OcsfCategoryUid, OcsfClassUid, SshActivityId } from '../enums';
export class SshActivity extends OcsfEvent {
    client_hassh?: SshClientHassh;
    auth_type?: string;
    constructor(p?: Partial<SshActivity>) {
        super(OcsfClassUid.SSH_ACTIVITY);
        this.category_uid = OcsfCategoryUid.NETWORK_ACTIVITY;
        this.category_name = 'Network Activity';
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = SshActivityId[this.activity_id];
    }
}