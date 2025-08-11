import { OcsfEvent } from '../base/ocsf-event.model';
import * as OCSF from '../';

export class RemediationActivity extends OcsfEvent {
    countermeasures?: OCSF.Countermeasure[];
    remediation?: OCSF.Remediation;
    
    constructor(data: Partial<RemediationActivity>) {
        super(OCSF.OcsfClassUid.REMEDIATION_ACTIVITY);
        Object.assign(this, data);
    }
}