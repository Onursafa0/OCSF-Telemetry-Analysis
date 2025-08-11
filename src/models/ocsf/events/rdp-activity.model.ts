import { OcsfEvent } from '../base/ocsf-event.model';
import { RdpRequest } from '../objects/rdp-request.model';
import { OcsfCategoryUid, OcsfClassUid, RdpActivityId } from '../enums';
export class RdpActivity extends OcsfEvent {
    request?: RdpRequest;
    constructor(p?: Partial<RdpActivity>) {
        super(OcsfClassUid.RDP_ACTIVITY);
        this.category_uid = OcsfCategoryUid.NETWORK_ACTIVITY;
        this.category_name = 'Network Activity';
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = RdpActivityId[this.activity_id];
    }
}