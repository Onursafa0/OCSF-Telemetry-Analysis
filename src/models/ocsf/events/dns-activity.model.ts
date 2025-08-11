import { OcsfEvent } from '../base/ocsf-event.model';
import { DnsQuery } from '../objects/dns-query.model';
import { DnsAnswer } from '../objects/dns-answer.model';
import { OcsfCategoryUid, OcsfClassUid, DnsActivityId } from '../enums';
export class DnsActivity extends OcsfEvent {
    query?: DnsQuery;
    answers?: DnsAnswer[];
    constructor(p?: Partial<DnsActivity>) {
        super(OcsfClassUid.DNS_ACTIVITY);
        this.category_uid = OcsfCategoryUid.NETWORK_ACTIVITY;
        this.category_name = 'Network Activity';
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = DnsActivityId[this.activity_id];
    }
}