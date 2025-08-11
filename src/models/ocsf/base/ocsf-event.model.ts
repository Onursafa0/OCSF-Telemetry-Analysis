import { OcsfObject } from './ocsf-object.model';
import { Actor } from '../objects/actor.model';
import { Device } from '../objects/device.model';
import { OcsfCategoryUid, OcsfClassUid, OcsfSeverityId } from '../enums';

export abstract class OcsfEvent extends OcsfObject {
    time: string;
    class_uid: OcsfClassUid;
    category_uid: OcsfCategoryUid;
    severity_id: OcsfSeverityId;
    class_name: string;
    category_name: string;
    severity: string;
    type_uid: number;
    type_name: string;

    actor: Actor;
    device?: Device; 
    activity_id?: number;
    activity_name?: string;
    message?: string;

    constructor(class_uid: OcsfClassUid) {
        super();
        this.time = new Date().toISOString();
        this.class_uid = class_uid;
        this.class_name = OcsfClassUid[class_uid] || 'Unknown';
        this.category_uid = OcsfCategoryUid.UNKNOWN;
        this.category_name = 'Unknown';
        this.severity_id = OcsfSeverityId.UNKNOWN;
        this.severity = 'Unknown';
        this.type_uid = 0; 
        this.type_name = 'Base Event';
        
        this.actor = new Actor({}); 
    }
}