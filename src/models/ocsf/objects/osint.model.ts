import { OcsfObject } from '../base/ocsf-object.model';

export class Osint extends OcsfObject {
    feed_name?: string;
    indicator_type?: string;
    indicator_value?: string;
    last_update_time?: string;

    constructor(data: Partial<Osint> = {}) {
        super();
        Object.assign(this, data);
    }
}