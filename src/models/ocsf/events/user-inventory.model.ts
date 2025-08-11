import { OcsfEvent } from '../base/ocsf-event.model';
import { User } from '../objects/user.model';
import { OcsfCategoryUid, OcsfClassUid } from '../enums';
export class UserInventory extends OcsfEvent {
    user: User;
    constructor(p?: Partial<UserInventory>) {
        super(OcsfClassUid.USER_INVENTORY);
        this.category_uid = OcsfCategoryUid.DISCOVERY;
        this.category_name = 'Discovery';
        this.user = new User();
        Object.assign(this, p);
    }
}