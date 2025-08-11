import { OcsfEvent } from '../base/ocsf-event.model';
import { User } from '../objects/user.model';
import { Session } from '../objects/session.model';
import { OcsfCategoryUid, OcsfClassUid, AuthenticationActivityId } from '../enums';

export class Authentication extends OcsfEvent {
    user: User;
    session?: Session;
    constructor(partial?: Partial<Authentication>) {
        super(OcsfClassUid.AUTHENTICATION);
        this.category_uid = OcsfCategoryUid.IAM; 
        this.category_name = 'IAM';
        this.user = new User();
        Object.assign(this, partial);
        if (this.activity_id) {
            this.activity_name = AuthenticationActivityId[this.activity_id] || 'Unknown';
        }
    }
}