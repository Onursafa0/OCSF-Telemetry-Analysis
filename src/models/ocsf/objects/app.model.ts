import { OcsfObject } from '../base/ocsf-object.model';
export class App extends OcsfObject {
    name?: string;
    uid?: string;
    version?: string;
    vendor?: string;
    constructor(p?: Partial<App>) { super(); Object.assign(this, p); }
}