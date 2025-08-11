import { OcsfEvent } from '../base/ocsf-event.model';
import { Ntp } from '../objects/ntp.model';
import { OcsfCategoryUid, OcsfClassUid, NtpActivityId } from '../enums';
export class NtpActivity extends OcsfEvent {
    ntp: Ntp;
    constructor(p?: Partial<NtpActivity>) {
        super(OcsfClassUid.NTP_ACTIVITY);
        this.category_uid = OcsfCategoryUid.NETWORK_ACTIVITY;
        this.category_name = 'Network Activity';
        this.ntp = new Ntp();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = NtpActivityId[this.activity_id];
    }
}