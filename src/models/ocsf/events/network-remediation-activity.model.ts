import { OcsfEvent } from '../base/ocsf-event.model';
import * as OCSF from '../';

export class NetworkRemediationActivity extends OcsfEvent {
    connection_info?: OCSF.ConnectionInfo;
    countermeasures?: OCSF.Countermeasure[];
    remediation?: OCSF.Remediation;

    constructor(data: Partial<NetworkRemediationActivity>) {
        super(OCSF.OcsfClassUid.NETWORK_REMEDIATION_ACTIVITY);
        Object.assign(this, data);
    }
}