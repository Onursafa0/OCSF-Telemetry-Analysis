import { OcsfEvent } from '../base/ocsf-event.model';
import { Process } from '../objects/process.model';
import { QueryInfo } from '../objects/query-info.model';
import { OcsfCategoryUid, OcsfClassUid } from '../enums';
export class ProcessQuery extends OcsfEvent {
    query: QueryInfo;
    processes: Process[];
    constructor(p?: Partial<ProcessQuery>) {
        super(OcsfClassUid.PROCESS_QUERY);
        this.category_uid = OcsfCategoryUid.DISCOVERY;
        this.category_name = 'Discovery';
        this.query = new QueryInfo();
        this.processes = [];
        Object.assign(this, p);
    }
}