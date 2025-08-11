import { OcsfEvent } from '../base/ocsf-event.model';
import { File } from '../objects/file.model';
import { QueryInfo } from '../objects/query-info.model';
import { OcsfCategoryUid, OcsfClassUid } from '../enums';
export class FileQuery extends OcsfEvent {
    query: QueryInfo;
    files: File[];
    constructor(p?: Partial<FileQuery>) {
        super(OcsfClassUid.FILE_QUERY);
        this.category_uid = OcsfCategoryUid.DISCOVERY;
        this.category_name = 'Discovery';
        this.query = new QueryInfo();
        this.files = [];
        Object.assign(this, p);
    }
}