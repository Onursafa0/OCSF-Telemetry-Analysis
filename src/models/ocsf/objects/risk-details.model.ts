import { OcsfObject } from '../base/ocsf-object.model';
export class RiskDetails extends OcsfObject {
    score?: number; level?: string; level_id?: number; description?: string; factors?: string[];
    constructor(data: Partial<RiskDetails> = {}) { super(); Object.assign(this, data); }
}