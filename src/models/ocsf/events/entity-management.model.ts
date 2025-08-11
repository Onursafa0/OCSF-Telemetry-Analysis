import { OcsfEvent } from '../base/ocsf-event.model';
import { Entity } from '../objects/entity.model';
import { OcsfCategoryUid, OcsfClassUid, EntityManagementActivityId } from '../enums';
export class EntityManagement extends OcsfEvent {
    entity: Entity;
    constructor(p?: Partial<EntityManagement>) {
        super(OcsfClassUid.ENTITY_MANAGEMENT);
        this.category_uid = OcsfCategoryUid.IAM;
        this.category_name = 'IAM';
        this.entity = new Entity();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = EntityManagementActivityId[this.activity_id];
    }
}