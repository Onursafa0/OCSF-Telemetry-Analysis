import { OcsfEvent } from '../base/ocsf-event.model';
import { File } from '../objects/file.model';
import { OcsfCategoryUid, OcsfClassUid, FileSystemActivityId } from '../enums';

export class FileSystemActivity extends OcsfEvent {
    file: File;
    access_mask?: string;

    constructor(partial?: Partial<FileSystemActivity>) {
        super(OcsfClassUid.FILE_SYSTEM_ACTIVITY);

        this.category_uid = OcsfCategoryUid.SYSTEM_ACTIVITY;
        this.category_name = 'System Activity';
        this.file = new File();
        
        Object.assign(this, partial);
        
        if (this.activity_id) {
            this.activity_name = FileSystemActivityId[this.activity_id] || 'Unknown';
        }
    }
}