import { OcsfObject } from '../base/ocsf-object.model';
import { Session } from './session.model';

export class User extends OcsfObject {
  name?: string;
  uid?: string;
  email_addr?: string;
  account_type?: string;
  account_type_id?: number;
  domain?: string;
  session?: Session;

  constructor(partial?: Partial<User>) {
    super();
    Object.assign(this, partial);
  }
}