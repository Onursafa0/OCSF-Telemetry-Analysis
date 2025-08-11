import { OcsfObject } from '../base/ocsf-object.model';
import { Hash } from './hash.model';
export class Script extends OcsfObject {
    name?: string;
    path?: string;
    hash?: Hash;
    command_line?: string;
    interpreter?: string;
    constructor(p?: Partial<Script>) { super(); Object.assign(this, p); }
}