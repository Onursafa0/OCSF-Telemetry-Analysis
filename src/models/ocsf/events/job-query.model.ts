import { OcsfEvent } from '../base/ocsf-event.model';
import { Job } from '../objects/job.model';
import { QueryInfo } from '../objects/query-info.model';
import { OcsfCategoryUid, OcsfClassUid } from '../enums';
export class JobQuery extends OcsfEvent {
    query: QueryInfo;
    jobs: Job[];
    constructor(p?: Partial<JobQuery>) {
        super(OcsfClassUid.JOB_QUERY);
        this.category_uid = OcsfCategoryUid.DISCOVERY;
        this.category_name = 'Discovery';
        this.query = new QueryInfo();
        this.jobs = [];
        Object.assign(this, p);
    }
}