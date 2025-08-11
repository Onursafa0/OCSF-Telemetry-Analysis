import { OcsfEvent } from '../base/ocsf-event.model';
import { Service } from '../objects/service.model';
import { QueryInfo } from '../objects/query-info.model';
import { OcsfCategoryUid, OcsfClassUid } from '../enums';
export class ServiceQuery extends OcsfEvent {
    query: QueryInfo;
    services: Service[];
    constructor(p?: Partial<ServiceQuery>) {
        super(OcsfClassUid.SERVICE_QUERY);
        this.category_uid = OcsfCategoryUid.DISCOVERY;
        this.category_name = 'Discovery';
        this.query = new QueryInfo();
        this.services = [];
        Object.assign(this, p);
    }
}