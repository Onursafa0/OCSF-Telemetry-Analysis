import { OcsfEvent } from '../base/ocsf-event.model';
import { User } from '../objects/user.model';
import { Resource } from '../objects/resource.model';
import { OcsfCategoryUid, OcsfClassUid, UserAccessManagementActivityId } from '../enums';
export class UserAccessManagement extends OcsfEvent {
    user: User;
    resource: Resource;
    privileges?: string[];
    constructor(p?: Partial<UserAccessManagement>) {
        super(OcsfClassUid.USER_ACCESS_MANAGEMENT);
        this.category_uid = OcsfCategoryUid.IAM;
        this.category_name = 'IAM';
        this.user = new User();
        this.resource = new Resource();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = UserAccessManagementActivityId[this.activity_id];
    }
}