import { OcsfEvent } from '../base/ocsf-event.model';
import { Assessment } from '../objects/assessment.model';
import { CisBenchmarkResult } from '../objects/cis-benchmark-result.model';
import { OcsfCategoryUid, OcsfClassUid } from '../enums';
export class DeviceConfigState extends OcsfEvent {
    assessments?: Assessment[];
    cis_benchmark_result?: CisBenchmarkResult;
    constructor(p?: Partial<DeviceConfigState>) {
        super(OcsfClassUid.DEVICE_CONFIG_STATE);
        this.category_uid = OcsfCategoryUid.DISCOVERY;
        this.category_name = 'Discovery';
        Object.assign(this, p);
    }
}