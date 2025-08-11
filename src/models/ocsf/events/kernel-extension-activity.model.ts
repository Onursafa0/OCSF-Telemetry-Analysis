import { OcsfEvent } from '../base/ocsf-event.model';
import { Driver } from '../objects/driver.model';
import { OcsfCategoryUid, OcsfClassUid, KernelExtensionActivityId } from '../enums';
export class KernelExtensionActivity extends OcsfEvent {
    driver: Driver;
    constructor(p?: Partial<KernelExtensionActivity>) {
        super(OcsfClassUid.KERNEL_EXTENSION_ACTIVITY);
        this.category_uid = OcsfCategoryUid.SYSTEM_ACTIVITY;
        this.category_name = 'System Activity';
        this.driver = new Driver();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = KernelExtensionActivityId[this.activity_id];
    }
}