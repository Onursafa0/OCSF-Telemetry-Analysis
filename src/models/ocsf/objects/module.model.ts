import { OcsfObject } from '../base/ocsf-object.model';
import { Hash } from './hash.model';
export class Module extends OcsfObject {
    name?: string;
    path?: string;
    hash?: Hash;
    constructor(p?: Partial<Module>) { super(); Object.assign(this, p); }
}