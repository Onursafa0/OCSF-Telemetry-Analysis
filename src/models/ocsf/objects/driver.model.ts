import { OcsfObject } from '../base/ocsf-object.model';
import { Hash } from './hash.model';
export class Driver extends OcsfObject {
    name?: string;
    path?: string;
    hash?: Hash;
    constructor(p?: Partial<Driver>) { super(); Object.assign(this, p); }
}