import { OcsfEvent } from '../base/ocsf-event.model';
import { Folder } from '../objects/folder.model';
import { QueryInfo } from '../objects/query-info.model';
import { OcsfCategoryUid, OcsfClassUid } from '../enums';
export class FolderQuery extends OcsfEvent {
    query: QueryInfo;
    folders: Folder[];
    constructor(p?: Partial<FolderQuery>) {
        super(OcsfClassUid.FOLDER_QUERY);
        this.category_uid = OcsfCategoryUid.DISCOVERY;
        this.category_name = 'Discovery';
        this.query = new QueryInfo();
        this.folders = [];
        Object.assign(this, p);
    }
}