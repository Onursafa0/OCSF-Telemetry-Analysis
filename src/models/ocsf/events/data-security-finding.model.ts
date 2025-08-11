import { FindingBase } from '../base/finding-base.model';
import * as OCSF from '../';

export class DataSecurityFinding extends FindingBase {
    data_security?: OCSF.DataSecurity;
    database?: OCSF.Database;
    file?: OCSF.File;
    resources?: OCSF.Resource[];

    constructor(data: Partial<DataSecurityFinding>) {
        super(OCSF.OcsfClassUid.DATA_SECURITY_FINDING, data);
        Object.assign(this, data);
    }
}