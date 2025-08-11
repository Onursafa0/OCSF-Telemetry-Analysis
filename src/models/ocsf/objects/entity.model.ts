import { OcsfObject } from '../base/ocsf-object.model';
export class Entity extends OcsfObject {
    name?: string;
    uid?: string;
    type?: string;
    constructor(p?: Partial<Entity>) { super(); Object.assign(this, p); }
}