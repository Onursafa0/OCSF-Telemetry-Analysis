import { OcsfEvent } from '../base/ocsf-event.model';
import { Kernel } from '../objects/kernel.model';
import { OcsfCategoryUid, OcsfClassUid, KernelActivityId } from '../enums';
export class KernelActivity extends OcsfEvent {
    kernel: Kernel;
    constructor(p?: Partial<KernelActivity>) {
        super(OcsfClassUid.KERNEL_ACTIVITY);
        this.category_uid = OcsfCategoryUid.SYSTEM_ACTIVITY;
        this.category_name = 'System Activity';
        this.kernel = new Kernel();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = KernelActivityId[this.activity_id];
    }
}