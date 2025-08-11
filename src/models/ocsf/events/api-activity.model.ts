import { OcsfEvent } from '../base/ocsf-event.model';
import { Api } from '../objects/api.model';
import { HttpRequest } from '../objects/http-request.model';
import { OcsfCategoryUid, OcsfClassUid, ApiActivityId } from '../enums';
export class ApiActivity extends OcsfEvent {
    api: Api;
    http_request?: HttpRequest;
    constructor(p?: Partial<ApiActivity>) {
        super(OcsfClassUid.API_ACTIVITY);
        this.category_uid = OcsfCategoryUid.APPLICATION_ACTIVITY;
        this.category_name = 'Application Activity';
        this.api = new Api();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = ApiActivityId[this.activity_id];
    }
}