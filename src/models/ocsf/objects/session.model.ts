import { OcsfObject } from '../base/ocsf-object.model';

export class Session extends OcsfObject {
    uid?: string;
    start_time?: string;
    end_time?: string;
    is_interactive?: boolean;
    is_remote?: boolean;
    logon_id?: string;
    logon_type?: string;
    logon_type_id?: number;

    constructor(partial?: Partial<Session>) {
        super();
        Object.assign(this, partial);
    }
}