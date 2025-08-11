import { OcsfEvent } from '../base/ocsf-event.model';
import { OcsfCategoryUid, OcsfClassUid } from '../enums';
export class DeviceInventoryInfo extends OcsfEvent {
    constructor(p?: Partial<DeviceInventoryInfo>) {
        super(OcsfClassUid.DEVICE_INVENTORY_INFO);
        this.category_uid = OcsfCategoryUid.DISCOVERY;
        this.category_name = 'Discovery';
        Object.assign(this, p);
    }
}