import { OcsfObject } from '../base/ocsf-object.model';
import { File } from './file.model';
import { Process } from './process.model';
import { Url } from './url.model';
import { Device } from './device.model';
export class Evidence extends OcsfObject {
    uid?: string; 
    type?: string; 
    type_id?: number; 
    description?: string; 
    content?: string; 
    file?: File; 
    process?: Process; 
    url?: Url; 
    device?: Device;
    constructor(data: Partial<Evidence> = {}) { super(); Object.assign(this, data); }
}