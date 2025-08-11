import { OcsfEvent } from '../base/ocsf-event.model';
import * as OCSF from '../';

export class OsintInventoryInfo extends OcsfEvent {
    osint?: OCSF.Osint;
    
    constructor(data: Partial<OsintInventoryInfo>) {
        super(OCSF.OcsfClassUid.OSINT_INVENTORY_INFO);
        Object.assign(this, data);
    }
}
