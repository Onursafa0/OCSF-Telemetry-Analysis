import { FindingBase } from '../base/finding-base.model';
import * as OCSF from '../';

export class ComplianceFinding extends FindingBase {
    compliance: OCSF.Compliance;
    remediation?: OCSF.Remediation;
    evidences?: OCSF.Evidence[];
    resources?: OCSF.Resource[];

    constructor(data: Partial<ComplianceFinding>) {
        super(OCSF.OcsfClassUid.COMPLIANCE_FINDING, data);
        this.compliance = data.compliance!;
        Object.assign(this, data);
    }
}