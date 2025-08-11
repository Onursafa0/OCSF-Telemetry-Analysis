import { OcsfObject } from '../base/ocsf-object.model';
import { User } from './user.model';
import { Process } from './process.model';
import { Device } from './device.model';

export class Actor extends OcsfObject {
    user?: User;
    process?: Process;
    device?: Device;

    constructor(partial?: Partial<Actor>) {
        super();
        Object.assign(this, partial);
    }
}
