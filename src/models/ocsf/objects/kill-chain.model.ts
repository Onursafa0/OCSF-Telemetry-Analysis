import { OcsfObject } from '../base/ocsf-object.model';
export class KillChain extends OcsfObject {
    phase?: string; 
    phase_id?: number;
    constructor(data: Partial<KillChain> = {}) { super(); Object.assign(this, data); }
}