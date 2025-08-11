import {
    OcsfEvent,
    OcsfClassUid,
    DhcpActivityId,
    Endpoint,
    ConnectionInfo,
    Tls,
    Traffic,
    Proxy
} from '../';

export class DhcpActivity extends OcsfEvent {
    app_name?: string;
    connection_info?: ConnectionInfo;
    dst_endpoint?: Endpoint;
    proxy?: Proxy;
    src_endpoint?: Endpoint;
    tls?: Tls;
    traffic?: Traffic;

    is_renewal?: boolean;
    lease_dur?: number; 
    relay?: any; 
    transaction_uid?: string;

    constructor(data: Partial<DhcpActivity>) {
        super(OcsfClassUid.DHCP_ACTIVITY); 
        this.activity_id = data.activity_id;
        Object.assign(this, data);
    }
}