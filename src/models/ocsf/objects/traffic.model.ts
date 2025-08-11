import { OcsfObject } from '../base/ocsf-object.model';

export class Traffic extends OcsfObject {
    rx_bytes?: number;
    tx_bytes?: number;
    total_bytes?: number;
    rx_packets?: number;
    tx_packets?: number;
    total_packets?: number;

    constructor(data: Partial<Traffic>) {
        super();
        Object.assign(this, data);
    }
}