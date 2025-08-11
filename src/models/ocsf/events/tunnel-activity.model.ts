import { OcsfEvent } from '../base/ocsf-event.model';
import { TunnelInterface } from '../objects/tunnel-interface.model';
import { ConnectionInfo } from '../objects/connection-info.model';
import { OcsfCategoryUid, OcsfClassUid, TunnelActivityId } from '../enums';
export class TunnelActivity extends OcsfEvent {
    connection_info?: ConnectionInfo;
    tunnel_interface?: TunnelInterface;
    constructor(p?: Partial<TunnelActivity>) {
        super(OcsfClassUid.TUNNEL_ACTIVITY);
        this.category_uid = OcsfCategoryUid.NETWORK_ACTIVITY;
        this.category_name = 'Network Activity';
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = TunnelActivityId[this.activity_id];
    }
}