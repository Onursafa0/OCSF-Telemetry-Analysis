import { OcsfEvent } from '../base/ocsf-event.model';
import { Email } from '../objects/email.model';
import { EmailAuth } from '../objects/email-auth.model';
import { OcsfCategoryUid, OcsfClassUid, EmailActivityId } from '../enums';
export class EmailActivity extends OcsfEvent {
    email: Email;
    email_auth?: EmailAuth;
    constructor(p?: Partial<EmailActivity>) {
        super(OcsfClassUid.EMAIL_ACTIVITY);
        this.category_uid = OcsfCategoryUid.NETWORK_ACTIVITY;
        this.category_name = 'Network Activity';
        this.email = new Email();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = EmailActivityId[this.activity_id];
    }
}