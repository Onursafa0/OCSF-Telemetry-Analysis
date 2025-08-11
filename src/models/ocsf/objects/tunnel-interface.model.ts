import { OcsfObject } from '../base/ocsf-object.model';
export class TunnelInterface extends OcsfObject {
    name?: string;
    type?: string;
    ip_address?: string;
    constructor(p?: Partial<TunnelInterface>) { super(); Object.assign(this, p); }
}