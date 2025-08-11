import { OcsfEvent } from '../base/ocsf-event.model';
import { App } from '../objects/app.model';
import { OcsfCategoryUid, OcsfClassUid, ApplicationLifecycleActivityId } from '../enums';
export class ApplicationLifecycle extends OcsfEvent {
    app: App;
    constructor(p?: Partial<ApplicationLifecycle>) {
        super(OcsfClassUid.APPLICATION_LIFECYCLE);
        this.category_uid = OcsfCategoryUid.APPLICATION_ACTIVITY;
        this.category_name = 'Application Activity';
        this.app = new App();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = ApplicationLifecycleActivityId[this.activity_id];
    }
}