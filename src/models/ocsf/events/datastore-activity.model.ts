import { OcsfEvent } from '../base/ocsf-event.model';
import { Database } from '../objects/database.model';
import { Table } from '../objects/table.model';
import { QueryInfo } from '../objects/query-info.model';
import { OcsfCategoryUid, OcsfClassUid, DatastoreActivityId } from '../enums';
export class DatastoreActivity extends OcsfEvent {
    database: Database;
    table?: Table;
    query_info?: QueryInfo;
    constructor(p?: Partial<DatastoreActivity>) {
        super(OcsfClassUid.DATASTORE_ACTIVITY);
        this.category_uid = OcsfCategoryUid.APPLICATION_ACTIVITY;
        this.category_name = 'Application Activity';
        this.database = new Database();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = DatastoreActivityId[this.activity_id];
    }
}