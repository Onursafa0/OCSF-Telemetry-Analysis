import { FindingBase } from '../base/finding-base.model';
import * as OCSF from '../';

export class ApplicationSecurityPostureFinding extends FindingBase {
    app?: OCSF.App;
    compliance?: OCSF.Compliance;
    remediation?: OCSF.Remediation;
    resources?: OCSF.Resource[];
    vulnerabilities?: OCSF.Vulnerability[];

    constructor(data: Partial<ApplicationSecurityPostureFinding>) {
        super(OCSF.OcsfClassUid.APPLICATION_SECURITY_POSTURE_FINDING, data);
        Object.assign(this, data);
    }
}