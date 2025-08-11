import { OcsfObject } from '../base/ocsf-object.model';
export class RdpRequest extends OcsfObject {
    client_name?: string;
    client_address?: string;
    constructor(p?: Partial<RdpRequest>) { super(); Object.assign(this, p); }
}