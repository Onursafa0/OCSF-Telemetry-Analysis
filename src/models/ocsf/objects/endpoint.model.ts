import { OcsfObject } from '../base/ocsf-object.model';

export class Endpoint extends OcsfObject {
    uid?: string;
    ip_address?: string;
    name?: string;
    port?: number;
    mac_address?: string;
    hostname?: string;
    interface_name?: string;

    constructor(data: Partial<Endpoint>) {
        super();
        Object.assign(this, data);
    }
}