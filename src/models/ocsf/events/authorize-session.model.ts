import { OcsfEvent } from '../base/ocsf-event.model';
import { User } from '../objects/user.model';
import { Group } from '../objects/group.model';
import { Session } from '../objects/session.model';
import { OcsfCategoryUid, OcsfClassUid, AuthorizeSessionActivityId } from '../enums';
export class AuthorizeSession extends OcsfEvent {
    user: User;
    session: Session;
    group?: Group;
    privileges?: string[];
    constructor(p?: Partial<AuthorizeSession>) {
        super(OcsfClassUid.AUTHORIZE_SESSION);
        this.category_uid = OcsfCategoryUid.IAM;
        this.category_name = 'IAM';
        this.user = new User();
        this.session = new Session();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = AuthorizeSessionActivityId[this.activity_id];
    }
}