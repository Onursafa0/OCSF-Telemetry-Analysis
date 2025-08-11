import { OcsfObject } from '../base/ocsf-object.model';
export class Analytic extends OcsfObject {
    name?: string; 
    uid?: string; 
    description?: string; 
    type?: string;
     type_id?: number; 
     version?: string;
    constructor(data: Partial<Analytic> = {}) { super(); Object.assign(this, data); }
}