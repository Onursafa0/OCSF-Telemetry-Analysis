import { OcsfObject } from '../base/ocsf-object.model';
import { User } from './user.model';
import { Hash } from './hash.model';

export class File extends OcsfObject {
    file_name?: string;
    file_path?: string;
    file_type?: string;
    file_size?: number;
    extension?: string;
    create_time?: string;
    access_time?: string;
    modify_time?: string;
    mime_type?: string;
    owner?: User;
    hash?: Hash;
    is_hidden?: boolean;
    is_executable?: boolean;

    constructor(partial?: Partial<File>) {
        super();
        Object.assign(this, partial);
    }
}