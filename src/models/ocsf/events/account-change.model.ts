import { OcsfEvent } from '../base/ocsf-event.model';
import { User } from '../objects/user.model';
import { Policy } from '../objects/policy.model';
import { OcsfCategoryUid, OcsfClassUid, AccountChangeActivityId } from '../enums';
export class AccountChange extends OcsfEvent {
    user: User;
    policy?: Policy;
    constructor(p?: Partial<AccountChange>) {
        super(OcsfClassUid.ACCOUNT_CHANGE);
        this.category_uid = OcsfCategoryUid.IAM;
        this.category_name = 'IAM';
        this.user = new User();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = AccountChangeActivityId[this.activity_id];
    }
}