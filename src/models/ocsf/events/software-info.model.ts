import { OcsfEvent } from '../base/ocsf-event.model';
import { Package } from '../objects/package.model';
import { OcsfCategoryUid, OcsfClassUid } from '../enums';
export class SoftwareInfo extends OcsfEvent {
    packages: Package[];
    constructor(p?: Partial<SoftwareInfo>) {
        super(OcsfClassUid.SOFTWARE_INFO);
        this.category_uid = OcsfCategoryUid.DISCOVERY;
        this.category_name = 'Discovery';
        this.packages = [];
        Object.assign(this, p);
    }
}