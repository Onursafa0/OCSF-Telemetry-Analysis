import { OcsfEvent } from '../base/ocsf-event.model';
import { Module } from '../objects/module.model';
import { QueryInfo } from '../objects/query-info.model';
import { OcsfCategoryUid, OcsfClassUid } from '../enums';
export class ModuleQuery extends OcsfEvent {
    query: QueryInfo;
    modules: Module[];
    constructor(p?: Partial<ModuleQuery>) {
        super(OcsfClassUid.MODULE_QUERY);
        this.category_uid = OcsfCategoryUid.DISCOVERY;
        this.category_name = 'Discovery';
        this.query = new QueryInfo();
        this.modules = [];
        Object.assign(this, p);
    }
}