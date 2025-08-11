import { OcsfObject } from '../base/ocsf-object.model';

export class Container extends OcsfObject {
    name?: string;
    uid?: string;
    image_name?: string;
    start_time?: string;
    status?: string;

    constructor(data: Partial<Container> = {}) {
        super();
        Object.assign(this, data);
    }
}