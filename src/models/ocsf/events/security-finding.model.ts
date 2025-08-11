import { FindingBase } from '../base/finding-base.model';
import * as OCSF from '../';

export class SecurityFinding extends FindingBase {
    analytic?: OCSF.Analytic;
    attacks?: OCSF.Attack[];
    kill_chain?: OCSF.KillChain[];
    malware?: OCSF.Malware[];
    process?: OCSF.Process;
    resources?: OCSF.Resource[];
    risk_score?: number;
    vulnerabilities?: OCSF.Vulnerability[];

    constructor(data: Partial<SecurityFinding>) {
        super(OCSF.OcsfClassUid.SECURITY_FINDING, data);
        Object.assign(this, data);
    }
}