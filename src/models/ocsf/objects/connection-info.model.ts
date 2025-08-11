import { OcsfObject } from '../base/ocsf-object.model';

export class ConnectionInfo extends OcsfObject {
    protocol_name?: string;
    direction?: string;
    src_ip?: string;    
    dst_ip?: string;    
    src_port?: number;  
    dst_port?: number;  

    constructor(data: Partial<ConnectionInfo> = {}) {
        super();
        Object.assign(this, data);
    }
}