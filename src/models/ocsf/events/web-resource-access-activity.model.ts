import { OcsfEvent } from '../base/ocsf-event.model';
import { HttpRequest } from '../objects/http-request.model';
import { WebResource } from '../objects/web-resource.model';
import { Proxy } from '../objects/proxy.model';
import { OcsfCategoryUid, OcsfClassUid, WebResourceAccessActivityId } from '../enums';
export class WebResourceAccessActivity extends OcsfEvent {
    http_request: HttpRequest;
    proxy?: Proxy;
    web_resource?: WebResource;
    constructor(p?: Partial<WebResourceAccessActivity>) {
        super(OcsfClassUid.WEB_RESOURCE_ACCESS_ACTIVITY);
        this.category_uid = OcsfCategoryUid.APPLICATION_ACTIVITY;
        this.category_name = 'Application Activity';
        this.http_request = new HttpRequest();
        Object.assign(this, p);
        if (this.activity_id) this.activity_name = WebResourceAccessActivityId[this.activity_id];
    }
}