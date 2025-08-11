import { OcsfObject } from '../base/ocsf-object.model';
export class DataSource extends OcsfObject {
    name?: string;
    type?: string;
    uid?: string;
    ingestion_time?: string;
}