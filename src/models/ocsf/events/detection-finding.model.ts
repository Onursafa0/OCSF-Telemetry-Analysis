import { FindingBase } from '../base/finding-base.model';
import * as OCSF from '../';

export class DetectionFinding extends FindingBase {
    is_alert?: boolean;
    risk_details?: OCSF.RiskDetails;
    anomaly_analyses?: OCSF.AnomalyAnalysis[];
    malware_scan_info?: OCSF.MalwareScanInfo;
    evidences?: OCSF.Evidence[];
    vulnerabilities?: OCSF.Vulnerability[];

    constructor(data: Partial<DetectionFinding>) {
        super(OCSF.OcsfClassUid.DETECTION_FINDING, data);
        Object.assign(this, data);
    }
}