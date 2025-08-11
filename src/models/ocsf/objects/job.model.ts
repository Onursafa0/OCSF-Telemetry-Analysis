import { OcsfObject } from '../base/ocsf-object.model';
import { User } from './user.model';
export class Job extends OcsfObject {
    name?: string;
    uid?: string;
    command?: string;
    user?: User;
    constructor(p?: Partial<Job>) { super(); Object.assign(this, p); }
}