import { OcsfObject } from '../base/ocsf-object.model';

export class DataSecurity extends OcsfObject {
    classification?: string;
    sensitive_data_type?: string[];
    data_volume?: number;
    data_location?: string;
    is_encrypted?: boolean;

    constructor(data: Partial<DataSecurity> = {}) {
        super();
        Object.assign(this, data);
    }
}