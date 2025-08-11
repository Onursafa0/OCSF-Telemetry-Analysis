import { OcsfEvent } from '../base/ocsf-event.model';
import * as OCSF from '../';

export class CloudResourcesInventoryInfo extends OcsfEvent {
    cloud?: OCSF.Cloud;
    container?: OCSF.Container;
    database?: OCSF.Database;
    databucket?: OCSF.Databucket;
    resources?: OCSF.Resource[];
    
    constructor(data: Partial<CloudResourcesInventoryInfo>) {
        super(OCSF.OcsfClassUid.CLOUD_RESOURCES_INVENTORY_INFO);
        Object.assign(this, data);
    }
}