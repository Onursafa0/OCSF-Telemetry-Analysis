import { OcsfObject } from '../base/ocsf-object.model';

export class OsInfo extends OcsfObject {
    name?: string;
    version?: string;
    build?: string;

    constructor(partial?: Partial<OsInfo>) {
        super();
        Object.assign(this, partial);
    }
}

export class Device extends OcsfObject {
    uid?: string;
    name?: string;
    ip_address?: string;
    hostname?: string;
    mac_address?: string;
    os?: OsInfo;
    type?: string;
    type_id?: number;

    constructor(partial?: Partial<Device>) {
        super();
        Object.assign(this, partial);
        if (!this.os) {
            this.os = new OsInfo();
        }
    }
}