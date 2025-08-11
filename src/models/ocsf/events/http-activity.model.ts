import { OcsfEvent } from '../base/ocsf-event.model';
import { HttpRequest } from '../objects/http-request.model';
import { HttpResponse } from '../objects/http-response.model';
import { OcsfCategoryUid, OcsfClassUid, HttpActivityId } from '../enums';
export class HttpActivity extends OcsfEvent {
    http_request?: HttpRequest;
    http_response?: HttpResponse;
    constructor(p?: Partial<HttpActivity>) {
        super(OcsfClassUid.HTTP_ACTIVITY);
        this.category_uid = OcsfCategoryUid.NETWORK_ACTIVITY;
        this.category_name = 'Network Activity';
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = HttpActivityId[this.activity_id];
    }
}