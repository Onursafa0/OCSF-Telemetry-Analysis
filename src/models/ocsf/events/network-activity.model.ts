import { OcsfEvent } from '../base/ocsf-event.model';
import { ConnectionInfo } from '../objects/connection-info.model';
import { OcsfCategoryUid, OcsfClassUid, NetworkActivityId } from '../enums';
export class NetworkActivity extends OcsfEvent {
    connection_info: ConnectionInfo;
    constructor(p?: Partial<NetworkActivity>) {
        super(OcsfClassUid.NETWORK_ACTIVITY);
        this.category_uid = OcsfCategoryUid.NETWORK_ACTIVITY;
        this.category_name = 'Network Activity';
        this.connection_info = new ConnectionInfo();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = NetworkActivityId[this.activity_id];
    }
}