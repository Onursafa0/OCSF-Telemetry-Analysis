import { OcsfObject } from '../base/ocsf-object.model';
export class Attack extends OcsfObject {
    technique?: string; 
    tactic?: string; 
    technique_id?: string; 
    tactic_id?: string;
    constructor(data: Partial<Attack> = {}) { super(); Object.assign(this, data); }
}