import { OcsfEvent } from '../base/ocsf-event.model';
import { ConnectionInfo } from '../objects/connection-info.model';
import { QueryInfo } from '../objects/query-info.model';
import { OcsfCategoryUid, OcsfClassUid } from '../enums';
export class NetworkConnectionQuery extends OcsfEvent {
    query: QueryInfo;
    connections: ConnectionInfo[];
    constructor(p?: Partial<NetworkConnectionQuery>) {
        super(OcsfClassUid.NETWORK_CONNECTION_QUERY);
        this.category_uid = OcsfCategoryUid.DISCOVERY;
        this.category_name = 'Discovery';
        this.query = new QueryInfo();
        this.connections = [];
        Object.assign(this, p);
    }
}