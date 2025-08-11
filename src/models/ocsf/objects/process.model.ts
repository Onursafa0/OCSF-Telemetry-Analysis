import { OcsfObject } from '../base/ocsf-object.model';
import { File } from './file.model';
import { Hash } from './hash.model';

export class Process extends OcsfObject {
    pid?: number;
    name?: string;
    command_line?: string;
    exe_path?: string;
    parent_process?: Process;
    file?: File;
    is_hidden?: boolean;
    start_time?: string;
    uid?: string;
    hash?: Hash;

    constructor(partial?: Partial<Process>) {
        super();
        Object.assign(this, partial);
    }
}