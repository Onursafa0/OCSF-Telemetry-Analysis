import { OcsfEvent } from '../base/ocsf-event.model';
import { Module } from '../objects/module.model';
import { Process } from '../objects/process.model';
import { OcsfCategoryUid, OcsfClassUid, ModuleActivityId } from '../enums';
export class ModuleActivity extends OcsfEvent {
    module: Module;
    process: Process;
    constructor(p?: Partial<ModuleActivity>) {
        super(OcsfClassUid.MODULE_ACTIVITY);
        this.category_uid = OcsfCategoryUid.SYSTEM_ACTIVITY;
        this.category_name = 'System Activity';
        this.module = new Module();
        this.process = new Process();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = ModuleActivityId[this.activity_id];
    }
}