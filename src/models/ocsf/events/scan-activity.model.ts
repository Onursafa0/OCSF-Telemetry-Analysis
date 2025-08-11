import { OcsfEvent } from '../base/ocsf-event.model';
import * as OCSF from '../';

export class ScanActivity extends OcsfEvent {
    scan?: OCSF.Scan;
    
    constructor(data: Partial<ScanActivity>) {
        super(OCSF.OcsfClassUid.SCAN_ACTIVITY);
        Object.assign(this, data);
    }
}