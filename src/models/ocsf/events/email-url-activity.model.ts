import { OcsfEvent } from '../base/ocsf-event.model';
import { Url } from '../objects/url.model';
import { OcsfCategoryUid, OcsfClassUid, EmailUrlActivityId } from '../enums';
export class EmailUrlActivity extends OcsfEvent {
    url: Url;
    email_uid?: string;
    constructor(p?: Partial<EmailUrlActivity>) {
        super(OcsfClassUid.EMAIL_URL_ACTIVITY);
        this.category_uid = OcsfCategoryUid.NETWORK_ACTIVITY;
        this.category_name = 'Network Activity';
        this.url = new Url();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = EmailUrlActivityId[this.activity_id];
    }
}