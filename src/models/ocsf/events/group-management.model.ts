import { OcsfEvent } from '../base/ocsf-event.model';
import { User } from '../objects/user.model';
import { Group } from '../objects/group.model';
import { OcsfCategoryUid, OcsfClassUid, GroupManagementActivityId } from '../enums';
export class GroupManagement extends OcsfEvent {
    group: Group;
    user?: User; 
    constructor(p?: Partial<GroupManagement>) {
        super(OcsfClassUid.GROUP_MANAGEMENT);
        this.category_uid = OcsfCategoryUid.IAM;
        this.category_name = 'IAM';
        this.group = new Group();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = GroupManagementActivityId[this.activity_id];
    }
}