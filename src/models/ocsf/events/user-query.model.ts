import { OcsfEvent } from '../base/ocsf-event.model';
import { User } from '../objects/user.model';
import { QueryInfo } from '../objects/query-info.model';
import { OcsfCategoryUid, OcsfClassUid } from '../enums';
export class UserQuery extends OcsfEvent {
    query: QueryInfo;
    users: User[];
    constructor(p?: Partial<UserQuery>) {
        super(OcsfClassUid.USER_QUERY);
        this.category_uid = OcsfCategoryUid.DISCOVERY;
        this.category_name = 'Discovery';
        this.query = new QueryInfo();
        this.users = [];
        Object.assign(this, p);
    }
}