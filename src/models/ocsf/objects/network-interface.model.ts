import { OcsfObject } from '../base/ocsf-object.model';
export class NetworkInterface extends OcsfObject {
    name?: string;
    ip_addresses?: string[];
    mac_address?: string;
    constructor(p?: Partial<NetworkInterface>) { super(); Object.assign(this, p); }
}