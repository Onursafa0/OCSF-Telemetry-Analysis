import { OcsfObject } from '../base/ocsf-object.model';
export class AnomalyAnalysis extends OcsfObject {
    baseline_info?: string; 
    deviation_info?: string; 
    score?: number; 
    threshold?: number; 
    is_anomalous?: boolean; 
    anomaly_score?: number;
    constructor(data: Partial<AnomalyAnalysis> = {}) { super(); Object.assign(this, data); }
}