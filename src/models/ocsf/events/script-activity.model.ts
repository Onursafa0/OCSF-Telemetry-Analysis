import { OcsfEvent } from '../base/ocsf-event.model';
import { Script } from '../objects/script.model';
import { OcsfCategoryUid, OcsfClassUid, ScriptActivityId } from '../enums';
export class ScriptActivity extends OcsfEvent {
    script: Script;
    constructor(p?: Partial<ScriptActivity>) {
        super(OcsfClassUid.SCRIPT_ACTIVITY);
        this.category_uid = OcsfCategoryUid.SYSTEM_ACTIVITY;
        this.category_name = 'System Activity';
        this.script = new Script();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = ScriptActivityId[this.activity_id];
    }
}