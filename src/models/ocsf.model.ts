export interface OcsfEvent {
  time: string;
  class_uid: number;
  class_name: string;
  activity_id?: number;
  activity_name?: string;
  category_uid: number;
  category_name: string;
  severity_id: number;
  severity: string;
  type_uid: number;
  type_name: string;
  src_ip?: string;
  user?: User;
  [key: string]: any;
}

export interface Actor {
  user?: User;
  process?: Process;
  device?: Device;
  application?: App;
  api?: Api;
}

export interface User {
  name?: string;
  uid?: string;
  email_addr?: string;
  account_type?: string;
  account_type_id?: number;
  domain?: string;
  session?: Session;
}

export interface Process {
  pid?: number;
  name?: string;
  command_line?: string;
  exe_path?: string;
  parent_process?: Process;
  cmd_line?: string;
  file?: File;
  is_hidden?: boolean;
  is_system?: boolean;
  start_time?: string;
  end_time?: string;
  integrity_level?: string;
  integrity_level_id?: number;
  uid?: string;
  args?: string[];
  arg_count?: number;
  hash?: Hash;
}

export interface File {
  file_name?: string;
  file_path?: string;
  file_type?: string;
  file_size?: number;
  file_hash?: string;
  extension?: string;
  create_time?: string;
  access_time?: string;
  modify_time?: string;
  mime_type?: string;
  owner?: User;
  hash?: Hash;
  is_hidden?: boolean;
  is_executable?: boolean;
  is_system?: boolean;
  magic_number?: string;
  pe_info?: PeInfo;
}

export interface Hash {
  md5?: string;
  sha1?: string;
  sha256?: string;
  ssdeep?: string;
}

export interface PeInfo {
  imphash?: string;
  pe_sections?: PeSection[];
}

export interface PeSection {
  name?: string;
  entropy?: number;
  size?: number;
  virtual_size?: number;
  virtual_address?: string;
}

export interface Device {
  uid?: string;
  name?: string;
  ip_address?: string;
  hostname?: string;
  mac_address?: string;
  os?: {
    name?: string;
    version?: string;
    build?: string;
    sp_name?: string;
    sp_ver?: string;
  };
  location?: Location;
  type?: string;
  type_id?: number;
}

export interface OsInfo {
  name?: string;
  version?: string;
  build?: string;
  sp_name?: string;
  sp_ver?: string;
}

export interface Location {
  lat?: number;
  lon?: number;
  city?: string;
  country?: string;
  continent?: string;
  postal_code?: string;
  region?: string;
  timezone?: string;
}

export interface Module {
  uid?: string;
  name?: string;
  file_path?: string;
  hash?: Hash;
  load_time?: string;
  version?: string;
}

export interface Job {
  uid?: string;
  name?: string;
  command?: string;
  cron_expression?: string;
  description?: string;
  status?: string;
  status_id?: number;
  start_time?: string;
  end_time?: string;
  user?: User;
}

export interface Script {
  uid?: string;
  name?: string;
  file_path?: string;
  hash?: Hash;
  command_line?: string;
  interpreter?: string;
}

export interface Endpoint {
  uid?: string;
  ip_address?: string;
  name?: string;
  port?: number;
  mac_address?: string;
  hostname?: string;
  interface_name?: string;
}

export interface Kernel {
  uid?: string;
  name?: string;
  file_path?: string;
  version?: string;
  release?: string;
  build?: string;
  hash?: Hash;
}

export interface Driver {
  uid?: string;
  name?: string;
  file_path?: string;
  hash?: Hash;
  load_time?: string;
  version?: string;
}

export interface FileDiff {
  added_lines?: number;
  deleted_lines?: number;
  diff_text?: string;
}

export interface ConnectionInfo {
  uid?: string;
  protocol_name?: string;
  protocol_version?: string;
  src_ip?: string;
  dst_ip?: string;
  src_port?: number;
  dst_port?: number;
  direction?: string;
  direction_id?: number;
  duration?: number;
  transport_protocol?: string;
  transport_protocol_id?: number;
  application_protocol?: string;
  application_protocol_id?: number;
  tcp_flags?: string;
  state?: string;
  state_id?: number;
  rx_bytes?: number;
  tx_bytes?: number;
  total_bytes?: number;
  rx_packets?: number;
  tx_packets?: number;
  total_packets?: number;
}

export interface HttpRequest {
  method?: string;
  url?: string;
  user_agent?: string;
  headers?: { [key: string]: string };
  body?: string;
  version?: string;
  referrer?: string;
  http_cookies?: string;
  mime_type?: string;
  params?: { [key: string]: string };
  size?: number;
}

export interface HttpResponse {
  status_code?: number;
  status_message?: string;
  headers?: { [key: string]: string };
  body?: string;
  version?: string;
  mime_type?: string;
  size?: number;
}

export interface Tls {
  protocol_name?: string;
  version?: string;
  cipher?: string;
  issuer?: string;
  subject?: string;
  certificate_chain?: Certificate[];
  ja3_fingerprint?: string;
  ja3s_fingerprint?: string;
  negotiated_cipher_suite?: string;
  negotiated_protocol_version?: string;
  server_certificate?: Certificate;
}

export interface WebResource {
  url?: string;
  mime_type?: string;
  content_type?: string;
  response_code?: number;
  response_message?: string;
  size?: number;
  hash?: Hash;
}

export interface Api {
  name?: string;
  version?: string;
  operation?: string;
  service_name?: string;
  method?: string;
  parameters?: { [key: string]: any };
  response_code?: number;
  response_message?: string;
}

export interface Resource {
  name?: string;
  uid?: string;
  type?: string;
  path?: string;
  region?: string;
}

export interface Scan {
  scan_id?: string;
  name?: string;
  status?: string;
  status_id?: number;
  start_time?: string;
  end_time?: string;
  duration?: number;
  num_detections?: number;
  num_files?: number;
  num_folders?: number;
  num_network_items?: number;
  num_processes?: number;
  num_registry_items?: number;
  num_resolutions?: number;
  num_skipped_items?: number;
  num_trusted_items?: number;
  policy?: Policy;
  scan_result?: string;
  schedule_uid?: string;
  total?: number;
}

export interface App {
  name?: string;
  uid?: string;
  version?: string;
  vendor?: string;
  install_time?: string;
  install_path?: string;
  hash?: Hash;
}

export interface Database {
  name?: string;
  uid?: string;
  type?: string;
  version?: string;
  instance_name?: string;
  port?: number;
}

export interface Databucket {
  name?: string;
  uid?: string;
  type?: string;
  region?: string;
  url?: string;
}

export interface Table {
  name?: string;
  uid?: string;
  database_name?: string;
  row_count?: number;
}

export interface QueryInfo {
  query?: string;
  query_type?: string;
  query_type_id?: number;
  query_parameters?: { [key: string]: any };
}

export interface Folder {
  name?: string;
  path?: string;
  create_time?: string;
  access_time?: string;
  modify_time?: string;
  file_count?: number;
  subfolder_count?: number;
}

export interface Group {
  name?: string;
  uid?: string;
  privileges?: string[];
  resource?: string;
  user?: User;
  subgroup?: Group;
  description?: string;
  is_admin?: boolean;
}

export interface Cloud {
  provider?: string;
  region?: string;
  account_uid?: string;
  project_uid?: string;
  organization_uid?: string;
  resource_uid?: string;
  zone?: string;
}

export interface Container {
  name?: string;
  uid?: string;
  image_name?: string;
  image_uid?: string;
  command_line?: string;
  start_time?: string;
  end_time?: string;
  status?: string;
  status_id?: number;
  labels?: { [key: string]: string };
}

export interface Idp {
  name?: string;
  uid?: string;
  type?: string;
  url?: string;
}

export interface Assessment {
  name?: string;
  status?: string;
  status_id?: number;
  description?: string;
  score?: number;
  max_score?: number;
  start_time?: string;
  end_time?: string;
}

export interface CisBenchmarkResult {
  benchmark_name?: string;
  score?: number;
  profile?: string;
  result?: string;
  result_id?: number;
  description?: string;
  control_id?: string;
}

export interface PeripheralDevice {
  name?: string;
  uid?: string;
  type?: string;
  vendor?: string;
  model?: string;
  serial_number?: string;
  connection_type?: string;
  connection_type_id?: number;
}

export interface Service {
  name?: string;
  uid?: string;
  status?: string;
  description?: string;
  display_name?: string;
  start_type?: string;
  state?: string;
  path?: string;
}

export interface NetworkInterface {
  name?: string;
  mac_address?: string;
  ip_addresses?: string[];
  is_up?: boolean;
  speed?: number;
  mtu?: number;
  rx_bytes?: number;
  tx_bytes?: number;
}

export interface Osint {
  feed_name?: string;
  threat_intelligence?: any;
  malware_families?: string[];
  indicator_type?: string;
  indicator_value?: string;
  last_update_time?: string;
}

export interface KbArticle {
  id?: string;
  url?: string;
  title?: string;
  description?: string;
  publish_date?: string;
}

export interface StartupItem {
  name?: string;
  path?: string;
  type?: string;
  type_id?: number;
  command_line?: string;
  user?: User;
}

export interface Session {
  uid?: string;
  start_time?: string;
  end_time?: string;
  is_interactive?: boolean;
  is_remote?: boolean;
  logon_id?: string;
  logon_type?: string;
  logon_type_id?: number;
  protocol_name?: string;
  duration?: number;
}

export interface Package {
  name?: string;
  version?: string;
  vendor?: string;
  install_time?: string;
  install_path?: string;
  hash?: Hash;
  architecture?: string;
}

export interface Product {
  name?: string;
  vendor?: string;
  version?: string;
  uid?: string;
  family?: string;
}

export interface Sbom {
  format?: string;
  content?: string;
  hash?: Hash;
}

export interface Analytic {
  name?: string;
  uid?: string;
  description?: string;
  type?: string;
  type_id?: number;
  version?: string;
}

export interface Attack {
  technique?: string;
  tactic?: string;
  technique_id?: string;
  tactic_id?: string;
}

export interface CisCsc {
  control_id?: string;
  description?: string;
  version?: string;
  status?: string;
  status_id?: number;
}

export interface Compliance {
  standard?: string;
  control?: string;
  status?: string;
  status_id?: number;
  description?: string;
  requirement?: string;
}

export interface DataSource {
  name?: string;
  type?: string;
  uid?: string;
  ingestion_time?: string;
}

export interface Evidence {
  uid?: string;
  type?: string;
  type_id?: number;
  description?: string;
  content?: string;
  file?: File;
  process?: Process;
  url?: Url;
  device?: Device;
}

export interface FindingInfo {
  [key: string]: any;
  finding_name?: string;
  finding_type?: string;
  finding_type_id?: number;
  description?: string;
  remediation_steps?: string[];
  related_events?: OcsfEvent[];
}

export interface Impact {
  name?: string;
  uid?: number;
  description?: string;
}

export interface KillChain {
  phase?: string;
  phase_id?: number;
}

export interface Malware {
  name?: string;
  type?: string;
  type_id?: number;
  family?: string;
  hash?: Hash;
  path?: string;
  is_packed?: boolean;
  signatures?: string[];
}

export interface Nist {
  control_id?: string;
  version?: string;
  description?: string;
}

export interface Vulnerability {
  cve_id?: string;
  cvss_score?: number;
  description?: string;
  severity?: string;
  severity_id?: number;
  exploit_available?: boolean;
  patch_available?: boolean;
  references?: string[];
  epss_score?: number;
}

export interface Remediation {
  description?: string;
  steps?: string[];
  name?: string;
  uid?: string;
  status?: string;
  status_id?: number;
  start_time?: string;
  end_time?: string;
  applied_by?: User;
}

export interface AnomalyAnalysis {
  baseline_info?: string;
  deviation_info?: string;
  score?: number;
  threshold?: number;
  is_anomalous?: boolean;
  anomaly_score?: number;
}

export interface MalwareScanInfo {
  scan_id?: string;
  scan_time?: string;
  status?: string;
  status_id?: number;
  result?: string;
  result_id?: number;
  detections?: string[];
  num_infected_files?: number;
}

export interface RiskDetails {
  score?: number;
  level?: string;
  level_id?: number;
  description?: string;
  factors?: string[];
}

export interface DataSecurity {
  classification?: string;
  sensitive_data_type?: string[];
  data_volume?: number;
  data_location?: string;
  is_encrypted?: boolean;
}

export interface Ticket {
  ticket_id?: string;
  url?: string;
  status?: string;
  status_id?: number;
  priority?: string;
  priority_id?: number;
  assignee?: User;
  created_time?: string;
  updated_time?: string;
  description?: string;
}

export interface Policy {
  name?: string;
  uid?: string;
  description?: string;
  rules?: string[];
  version?: string;
  is_active?: boolean;
}

export interface AuthFactor {
  type?: string;
  type_id?: number;
  status?: string;
  status_id?: number;
}

export interface Certificate {
  fingerprint?: string;
  subject?: string;
  issuer?: string;
  serial_number?: string;
  valid_from?: string;
  valid_until?: string;
  algorithm?: string;
  key_size?: number;
  is_valid?: boolean;
}

export interface Entity {
  name?: string;
  uid?: string;
  type?: string;
  description?: string;
  attributes?: { [key: string]: any };
}

export interface Ja4Fingerprint {
  hash?: string;
  version?: string;
  os?: string;
  browser?: string;
}

export interface Proxy {
  name?: string;
  type?: string;
  ip_address?: string;
  port?: number;
  vendor?: string;
  version?: string;
}

export interface Traffic {
  rx_bytes?: number;
  tx_bytes?: number;
  total_bytes?: number;
  rx_packets?: number;
  tx_packets?: number;
  total_packets?: number;
}

export interface Url {
  url_string?: string;
  domain?: string;
  fqdn?: string;
  path?: string;
  query_string?: string;
  scheme?: string;
  port?: number;
  username?: string;
  password?: string;
  fragment?: string;
  is_valid?: boolean;
}

export interface DnsAnswer {
  rr_type?: string;
  rr_type_id?: number;
  rdata?: string;
  ttl?: number;
}

export interface DnsQuery {
  query_name?: string;
  query_type?: string;
  query_type_id?: number;
}

export interface Email {
  from_address?: string[];
  to_address?: string[];
  cc_address?: string[];
  bcc_address?: string[];
  subject?: string;
  files?: File[];
  urls?: Url[];
  body?: string;
  size?: number;
  is_html?: boolean;
  send_time?: string;
  received_time?: string;
}

export interface EmailAuth {
  spf_result?: string;
  dkim_result?: string;
  dmarc_result?: string;
}

export interface Ntp {
  delay?: number;
  dispersion?: number;
  precision?: number;
  stratum?: number;
  stratum_id?: number;
  version?: string;
  root_delay?: number;
  root_dispersion?: number;
  reference_id?: string;
}

export interface RdpCapabilities {
  display_flags?: number;
  desktop_width?: number;
  desktop_height?: number;
  color_depth?: number;
}

export interface RdpKeyboardInfo {
  keyboard_layout?: number;
  keyboard_type?: number;
  keyboard_subtype?: number;
  keyboard_function_keys?: number;
}

export interface RdpRemoteDisplay {
  width?: number;
  height?: number;
  color_depth?: number;
}

export interface RdpRequest {
  client_build?: number;
  client_name?: string;
  client_address?: string;
  client_version?: string;
}

export interface RdpResponse {
  server_build?: number;
  server_address?: string;
  server_version?: string;
}

export interface SmbDceRpc {
  operation?: string;
  function_name?: string;
  uuid?: string;
  opnum?: number;
}

export interface SshClientHassh {
  fingerprint?: string;
  version?: string;
  os?: string;
  client_string?: string;
}

export interface SshServerHassh {
  fingerprint?: string;
  version?: string;
  os?: string;
  server_string?: string;
}

export interface TunnelInterface {
  name?: string;
  ip_address?: string;
  mac_address?: string;
  type?: string;
  status?: string;
}

export interface Countermeasure {
  name?: string;
  uid?: string;
  description?: string;
  type?: string;
  type_id?: number;
  status?: string;
  status_id?: number;
  applied_time?: string;
}

export interface RemediationScan {
  scan_id?: string;
  name?: string;
  status?: string;
  status_id?: number;
  start_time?: string;
  end_time?: string;
  num_items_scanned?: number;
  num_items_remediated?: number;
}

export interface UnmannedAerialSystem {
  uid?: string;
  name?: string;
  type?: string;
  serial_number?: string;
  manufacturer?: string;
  model?: string;
  firmware_version?: string;
}

export interface UnmannedSystemOperatingArea {
  name?: string;
  uid?: string;
  location?: Location;
  radius?: number;
}

export interface UnmannedSystemOperator {
  name?: string;
  uid?: string;
  email_addr?: string;
  organization?: string;
}

export interface Aircraft {
  uid?: string;
  tail_number?: string;
  call_sign?: string;
  manufacturer?: string;
  model?: string;
  type?: string;
}

export enum OcsfSeverityId {
  UNKNOWN = 0,
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
  CRITICAL = 4,
}

export enum OcsfCategoryUid {
  UNKNOWN = 0,
  SYSTEM_ACTIVITY = 1,
  PROCESS_ACTIVITY = 2,
  FILE_ACTIVITY = 3,
  AUTHENTICATION_ACTIVITY = 4,
  API_ACTIVITY = 5,
  APPLICATION_ACTIVITY = 6,
  DISCOVERY_ACTIVITY = 7,
  FINDINGS_ACTIVITY = 8,
  IAM_ACTIVITY = 9,
  NETWORK_ACTIVITY = 10,
  REMEDIATION_ACTIVITY = 11,
  UNMANNED_SYSTEMS_ACTIVITY = 12,
}

export enum OcsfClassUid {
  UNKNOWN = 0,
  FILE_SYSTEM_ACTIVITY = 1001,
  KERNEL_EXTENSION_ACTIVITY = 1002,
  KERNEL_ACTIVITY = 1003,
  MEMORY_ACTIVITY = 1004,
  MODULE_ACTIVITY = 1005,
  SCHEDULED_JOB_ACTIVITY = 1006,
  PROCESS_ACTIVITY = 1007,
  EVENT_LOG_ACTIVITY = 1008,
  SCRIPT_ACTIVITY = 1009,
  WEB_RESOURCES_ACTIVITY = 1101,
  APPLICATION_LIFECYCLE = 1102,
  API_ACTIVITY = 1103,
  WEB_RESOURCE_ACCESS_ACTIVITY = 1104,
  DATASTORE_ACTIVITY = 1105,
  FILE_HOSTING_ACTIVITY = 1106,
  SCAN_ACTIVITY = 1107,
  APPLICATION_ERROR = 1108,
  DEVICE_INVENTORY_INFO = 2001,
  DEVICE_CONFIG_STATE = 2002,
  USER_INVENTORY = 2003,
  PATCH_STATE = 2004,
  SOFTWARE_INFO = 2005,
  KERNEL_OBJECT_QUERY = 2006,
  FILE_QUERY = 2007,
  FOLDER_QUERY = 2008,
  ADMIN_GROUP_QUERY = 2009,
  JOB_QUERY = 2010,
  MODULE_QUERY = 2011,
  NETWORK_CONNECTION_QUERY = 2012,
  NETWORKS_QUERY = 2013,
  PERIPHERAL_DEVICE_QUERY = 2014,
  PROCESS_QUERY = 2015,
  SERVICE_QUERY = 2016,
  USER_SESSION_QUERY = 2017,
  USER_QUERY = 2018,
  DEVICE_CONFIG_STATE_CHANGE = 2019,
  OSINT_INVENTORY_INFO = 2020,
  STARTUP_ITEM_QUERY = 2021,
  CLOUD_RESOURCES_INVENTORY_INFO = 2022,
  LIVE_EVIDENCE_INFO = 2023,
  SECURITY_FINDING = 3001,
  VULNERABILITY_FINDING = 3002,
  COMPLIANCE_FINDING = 3003,
  DETECTION_FINDING = 3004,
  INCIDENT_FINDING = 3005,
  DATA_SECURITY_FINDING = 3006,
  APPLICATION_SECURITY_POSTURE_FINDING = 3007,
  ACCOUNT_CHANGE = 4001,
  AUTHENTICATION = 4002,
  AUTHORIZE_SESSION = 4003,
  ENTITY_MANAGEMENT = 4004,
  USER_ACCESS_MANAGEMENT = 4005,
  GROUP_MANAGEMENT = 4006,
  NETWORK_ACTIVITY = 5001,
  HTTP_ACTIVITY = 5002,
  DNS_ACTIVITY = 5003,
  DHCP_ACTIVITY = 5004,
  RDP_ACTIVITY = 5005,
  SMB_ACTIVITY = 5006,
  SSH_ACTIVITY = 5007,
  FTP_ACTIVITY = 5008,
  EMAIL_ACTIVITY = 5009,
  NETWORK_FILE_ACTIVITY = 5010,
  EMAIL_FILE_ACTIVITY = 5011,
  EMAIL_URL_ACTIVITY = 5012,
  NTP_ACTIVITY = 5013,
  TUNNEL_ACTIVITY = 5014,
  REMEDIATION_ACTIVITY = 6001,
  FILE_REMEDIATION_ACTIVITY = 6002,
  PROCESS_REMEDIATION_ACTIVITY = 6003,
  NETWORK_REMEDIATION_ACTIVITY = 6004,
  DRONE_FLIGHTS_ACTIVITY = 7001,
  AIRBORNE_BROADCAST_ACTIVITY = 7002,
}

export enum FileSystemActivityId {
  CREATE = 1, READ = 2, UPDATE = 3, DELETE = 4, RENAME = 5,
  SET_ATTRIBUTES = 6, SET_SECURITY = 7, GET_ATTRIBUTES = 8, GET_SECURITY = 9,
  ENCRYPT = 10, DECRYPT = 11, MOUNT = 12, UNMOUNT = 13, OPEN = 14,
}
export enum KernelExtensionActivityId { LOAD = 1, UNLOAD = 2 }
export enum KernelActivityId { CREATE = 1, READ = 2, DELETE = 3, INVOKE = 4 }
export enum MemoryActivityId {
  ALLOCATE_PAGE = 1, MODIFY_PAGE = 2, DELETE_PAGE = 3, BUFFER_OVERFLOW = 4,
  DISABLE_DEP = 5, ENABLE_DEP = 6, READ = 7, S_WRITE = 8, MAP_VIEW = 9,
}
export enum ModuleActivityId { LOAD = 1, UNLOAD = 2 }
export enum ScheduledJobActivityId { CREATE = 1, UPDATE = 2, DELETE = 3, ENABLE = 4, DISABLE = 5, START = 6 }
export enum ProcessActivityId { LAUNCH = 1, TERMINATE = 2, OPEN = 3, INJECT = 4, SET_USER_ID = 5 }
export enum EventLogActivityId {
  CLEAR = 1, DELETE = 2, EXPORT = 3, ARCHIVE = 4, ROTATE = 5,
  START = 6, STOP = 7, RESTART = 8, ENABLE = 9, DISABLE = 10,
}
export enum ScriptActivityId { EXECUTE = 1 }

export enum WebResourcesActivityId {
  CREATE = 1, READ = 2, UPDATE = 3, DELETE = 4, SEARCH = 5,
  IMPORT = 6, EXPORT = 7, SHARE = 8,
}
export enum ApplicationLifecycleActivityId {
  INSTALL = 1, REMOVE = 2, START = 3, STOP = 4, RESTART = 5,
  ENABLE = 6, DISABLE = 7, UPDATE = 8,
}
export enum ApiActivityId { CREATE = 1, READ = 2, UPDATE = 3, DELETE = 4 }
export enum WebResourceAccessActivityId { ACCESS_GRANT = 1, ACCESS_DENY = 2, ACCESS_REVOKE = 3, ACCESS_ERROR = 4 }
export enum DatastoreActivityId {
  READ = 1, UPDATE = 2, CONNECT = 3, QUERY = 4, S_WRITE = 5,
  CREATE = 6, DELETE = 7, LIST = 8, ENCRYPT = 9, DECRYPT = 10,
}
export enum FileHostingActivityId {
  UPLOAD = 1, DOWNLOAD = 2, UPDATE = 3, DELETE = 4, RENAME = 5,
  COPY = 6, MOVE = 7, RESTORE = 8, PREVIEW = 9, LOCK = 10,
  UNLOCK = 11, SHARE = 12, UNSHARE = 13, OPEN = 14, SYNC = 15,
  UNSYNC = 16, ACCESS_CHECK = 17,
}
export enum ScanActivityId {
  STARTED = 1, COMPLETED = 2, CANCELLED = 3, DURATION_VIOLATION = 4, PAUSE_VIOLATION = 5,
  ERROR = 6, PAUSED = 7, RESUMED = 8, RESTARTED = 9, DELAYED = 10,
}
export enum ApplicationErrorActivityId { GENERAL_ERROR = 1, TRANSLATION_ERROR = 2 }

export enum DiscoveryActivityId { LOG = 1, COLLECT = 2 }
export enum DiscoveryResultActivityId { QUERY = 1 }
export enum DeviceConfigStateChangeActivityId { UNKNOWN = 0, DISABLED = 1, ENABLED = 2, OTHER = 99 }
export enum NetworkConnectionQueryStateId {
  UNKNOWN = 0, ESTABLISHED = 1, SYN_SENT = 2, SYN_RECV = 3, FIN_WAIT1 = 4,
  FIN_WAIT2 = 5, TIME_WAIT = 6, CLOSED = 7, CLOSE_WAIT = 8, LAST_ACK = 9,
  LISTEN = 10, CLOSING = 11,
}
export enum DatastoreTypeID {
  UNKNOWN = 0,
  DATABASE = 1,
  DATABUCKET = 2,
  TABLE = 3,
  OTHER = 99,
}

export enum FindingActivityId {
  CREATE = 1,
  UPDATE = 2,
  CLOSE = 3,
}

export enum SecurityFindingStateId {
  NEW = 1,
  IN_PROGRESS = 2,
  SUPPRESSED = 3,
  RESOLVED = 4,
}

export enum DataSecurityFindingActivityId {
  CREATE = 1,
  UPDATE = 2,
  CLOSE = 3,
  SUPPRESSED = 4,
}

export enum IncidentFindingActivityId {
  CREATE = 1,
  UPDATE = 2,
  CLOSE = 3,
}

export enum IncidentFindingStatusId {
  NEW = 1,
  IN_PROGRESS = 2,
  ON_HOLD = 3,
  RESOLVED = 4,
  CLOSED = 5,
}

export enum AccountChangeActivityId {
  CREATE = 1, ENABLE = 2, PASSWORD_CHANGE = 3, PASSWORD_RESET = 4, DISABLE = 5,
  DELETE = 6, ATTACH_POLICY = 7, DETACH_POLICY = 8, LOCK = 9,
  MFA_FACTOR_ENABLE = 10, MFA_FACTOR_DISABLE = 11, UNLOCK = 12,
}

export enum AuthenticationActivityId {
  LOGON = 1, LOGOFF = 2, AUTHENTICATION_TICKET = 3, SERVICE_TICKET_REQUEST = 4,
  SERVICE_TICKET_RENEW = 5, PREAUTH = 6,
}

export enum AuthorizeSessionActivityId {
  ASSIGN_PRIVILEGES = 1, ASSIGN_GROUPS = 2,
}

export enum EntityManagementActivityId {
  CREATE = 1, READ = 2, UPDATE = 3, DELETE = 4, MOVE = 5,
  ENROLL = 6, UNENROLL = 7, ENABLE = 8, DISABLE = 9, ACTIVATE = 10,
  DEACTIVATE = 11, SUSPEND = 12, RESUME = 13,
}

export enum UserAccessActivityId {
  ASSIGN_PRIVILEGES = 1, REVOKE_PRIVILEGES = 2,
}

export enum GroupManagementActivityId {
  ASSIGN_PRIVILEGES = 1, REVOKE_PRIVILEGES = 2, ADD_USER = 3, REMOVE_USER = 4,
  DELETE = 5, CREATE = 6, ADD_SUBGROUP = 7, REMOVE_SUBGROUP = 8,
}

export enum NetworkActivityId {
  OPEN = 1, CLOSE = 2, RESET = 3, FAIL = 4, REFUSE = 5, TRAFFIC = 6, LISTEN = 7,
}

export enum HttpActivityId {
  CONNECT = 1, DELETE = 2, GET = 3, HEAD = 4, OPTIONS = 5, POST = 6, PUT = 7, TRACE = 8, PATCH = 9,
}

export enum DnsActivityId {
  QUERY = 1, RESPONSE = 2, TRAFFIC = 6,
}

export enum DhcpActivityId {
  DISCOVER = 1, OFFER = 2, REQUEST = 3, DECLINE = 4, ACK = 5, NAK = 6, RELEASE = 7, INFORM = 8, EXPIRE = 9,
}

export enum FtpActivityId {
  PUT = 1, GET = 2, POLL = 3, DELETE = 4, RENAME = 5, LIST = 6,
}

export enum EmailActivityId {
  SEND = 1, RECEIVE = 2, SCAN = 3, TRACE = 4,
}

export enum EmailDirectionId {
  UNKNOWN = 0, INBOUND = 1, OUTBOUND = 2, INTERNAL = 3, OTHER = 99,
}

export enum EmailFileActivityId {
  SEND = 1, RECEIVE = 2, SCAN = 3,
}

export enum EmailUrlActivityId {
  SEND = 1, RECEIVE = 2, SCAN = 3,
}

export enum DnsRcodeId {
  NoError = 0, FormError = 1, ServError = 2, NXDomain = 3, NotImp = 4,
  Refused = 5, YXDomain = 6, YXRRSet = 7, NXRRSet = 8, NotAuth = 9,
  NotZone = 10, DSOTYPENI = 11, BADSIG_VERS = 16, BADKEY = 17, BADTIME = 18,
  BADMODE = 19, BADNAME = 20, BADALG = 21, BADTRUNC = 22, BADCOOKIE = 23,
  Unassigned = 24, Reserved = 25, Other = 99,
}

export enum NtpActivityId {
  UNKNOWN = 0, SYMMETRIC_ACTIVE_EXCHANGE = 1, SYMMETRIC_PASSIVE_RESPONSE = 2,
  CLIENT_SYNCHRONIZATION = 3, SERVER_RESPONSE = 4, BROADCAST = 5,
  CONTROL = 6, PRIVATE_USE_CASE = 7, OTHER = 99,
}

export enum RdpActivityId {
  INITIAL_REQUEST = 1, INITIAL_RESPONSE = 2, CONNECT_REQUEST = 3,
  CONNECT_RESPONSE = 4, TLS_HANDSHAKE = 5, TRAFFIC = 6, DISCONNECT = 7, RECONNECT = 8,
}

export enum SmbActivityId {
  FILE_SUPERSEDE = 1, FILE_OPEN = 2, FILE_CREATE = 3, FILE_OPEN_IF = 4,
  FILE_OVERWRITE = 5, FILE_OVERWRITE_IF = 6,
}

export enum SshActivityId {
  OPEN = 1, CLOSE = 2, RESET = 3, FAIL = 4, REFUSE = 5, TRAFFIC = 6, LISTEN = 7,
}

export enum SshAuthTypeId {
  UNKNOWN = 0, CERTIFICATE_BASED = 1, GSSAPI = 2, HOST_BASED = 3,
  KEYBOARD_INTERACTIVE = 4, PASSWORD = 5, PUBLIC_KEY = 6, OTHER = 99,
}

export enum TunnelActivityId {
  UNKNOWN = 0, OPEN = 1, CLOSE = 2, RENEW = 3, OTHER = 99,
}

export enum TunnelTypeId {
  UNKNOWN = 0, SPLIT_TUNNEL = 1, FULL_TUNNEL = 2, OTHER = 99,
}

export enum RemediationActivityId {
  ISOLATE = 1, EVICT = 2, RESTORE = 3, HARDEN = 4, DETECT = 5,
}

export enum RemediationStatusId {
  DOES_NOT_EXIST = 3, PARTIAL = 4, ERROR = 6, UNSUPPORTED = 5,
}

export enum DroneFlightsActivityId {
  UNKNOWN = 0, CAPTURE = 1, RECORD = 2, OTHER = 99,
}

export enum DroneFlightsAuthProtocolId {
  UNKNOWN = 0, NONE = 1, UAS_ID_SIGNATURE = 2, OPERATOR_ID_SIGNATURE = 3,
  MESSAGE_SET_SIGNATURE = 4, AUTH_PROVIDED_BY_NETWORK_REMOTE_ID = 5,
  SPECIFIC_AUTHENTICATION_METHOD = 6, RESERVED = 7, PRIVATE_USER = 8, OTHER = 99,
}

export enum DroneFlightsStatusId {
  UNDECLARED = 1, GROUND = 2, AIRBORNE = 3, EMERGENCY = 4,
  REMOTE_ID_SYSTEM_FAILURE = 5, RESERVED = 6,
}

export enum AirborneBroadcastActivityId {
  UNKNOWN = 0, CAPTURE = 1, RECORD = 2, OTHER = 99,
}

export interface FileSystemActivity extends OcsfEvent {
  class_uid: OcsfClassUid.FILE_SYSTEM_ACTIVITY; class_name: 'File System Activity'; activity_id?: FileSystemActivityId;
  actor?: Actor; file?: File; access_mask?: string; component?: string;
  connection_uid?: string; create_mask?: string; file_diff?: FileDiff; file_result?: File;
  object?: File;
}
export interface KernelExtensionActivity extends OcsfEvent {
  class_uid: OcsfClassUid.KERNEL_EXTENSION_ACTIVITY; class_name: 'Kernel Extension Activity'; activity_id?: KernelExtensionActivityId;
  actor?: Actor; driver?: Driver;
}
export interface KernelActivity extends OcsfEvent {
  class_uid: OcsfClassUid.KERNEL_ACTIVITY; class_name: 'Kernel Activity'; activity_id?: KernelActivityId;
  kernel?: Kernel;
}
export interface MemoryActivity extends OcsfEvent {
  class_uid: OcsfClassUid.MEMORY_ACTIVITY; class_name: 'Memory Activity'; activity_id?: MemoryActivityId;
  process?: Process; actual_permissions?: string; base_address?: string;
  requested_permissions?: string; size?: number;
}
export interface ModuleActivity extends OcsfEvent {
  class_uid: OcsfClassUid.MODULE_ACTIVITY; class_name: 'Module Activity'; activity_id?: ModuleActivityId;
  actor?: Actor; module?: Module;
}
export interface ScheduledJobActivity extends OcsfEvent {
  class_uid: OcsfClassUid.SCHEDULED_JOB_ACTIVITY; class_name: 'Scheduled Job Activity'; activity_id?: ScheduledJobActivityId;
  actor?: Actor; job?: Job;
}
export interface ProcessActivity extends OcsfEvent {
  class_uid: OcsfClassUid.PROCESS_ACTIVITY; class_name: 'Process Activity'; activity_id?: ProcessActivityId;
  actor?: Actor; process?: Process; actual_permissions?: string; exit_code?: number;
  injection_type?: string; injection_type_id?: number; module?: Module; requested_permissions?: string;
}
export interface EventLogActivity extends OcsfEvent {
  class_uid: OcsfClassUid.EVENT_LOG_ACTIVITY; class_name: 'Event Log Activity'; activity_id?: EventLogActivityId;
  actor?: Actor; device?: Device; dst_endpoint?: Endpoint; file?: File;
  log_name?: string; log_provider?: string; log_type?: string; log_type_id?: number;
  src_endpoint?: Endpoint; status_code?: number; status_detail?: string;
}
export interface ScriptActivity extends OcsfEvent {
  class_uid: OcsfClassUid.SCRIPT_ACTIVITY; class_name: 'Script Activity'; activity_id?: ScriptActivityId;
  script?: Script;
}
export interface SystemActivityBase extends OcsfEvent {
  actor?: Actor; device?: Device;
}

export interface ApplicationActivityBase extends OcsfEvent { }

export interface WebResourcesActivity extends ApplicationActivityBase {
  class_uid: OcsfClassUid.WEB_RESOURCES_ACTIVITY; class_name: 'Web Resources Activity'; activity_id?: WebResourcesActivityId;
  dst_endpoint?: Endpoint; http_request?: HttpRequest; http_response?: HttpResponse;
  src_endpoint?: Endpoint; tls?: Tls; web_resources?: WebResource[]; web_resources_result?: WebResource;
}
export interface ApplicationLifecycle extends ApplicationActivityBase {
  class_uid: OcsfClassUid.APPLICATION_LIFECYCLE; class_name: 'Application Lifecycle'; activity_id?: ApplicationLifecycleActivityId;
  app?: App;
}
export interface ApiActivity extends ApplicationActivityBase {
  class_uid: OcsfClassUid.API_ACTIVITY; class_name: 'API Activity'; activity_id?: ApiActivityId;
  actor?: Actor; api?: Api; dst_endpoint?: Endpoint; http_request?: HttpRequest;
  http_response?: HttpResponse; resources?: Resource[]; src_endpoint?: Endpoint;
}
export interface WebResourceAccessActivity extends ApplicationActivityBase {
  class_uid: OcsfClassUid.WEB_RESOURCE_ACCESS_ACTIVITY; class_name: 'Web Resource Access Activity'; activity_id?: WebResourceAccessActivityId;
  http_request?: HttpRequest; http_response?: HttpResponse; proxy?: Proxy;
  src_endpoint?: Endpoint; tls?: Tls; web_resources?: WebResource;
}
export interface DatastoreActivity extends ApplicationActivityBase {
  class_uid: OcsfClassUid.DATASTORE_ACTIVITY; class_name: 'Datastore Activity'; activity_id?: DatastoreActivityId;
  actor?: Actor; database?: Database; databucket?: Databucket; dst_endpoint?: Endpoint;
  http_request?: HttpRequest; http_response?: HttpResponse; query_info?: QueryInfo;
  src_endpoint?: Endpoint; table?: Table; type?: string; type_id?: DatastoreTypeID;
}
export interface FileHostingActivity extends ApplicationActivityBase {
  class_uid: OcsfClassUid.FILE_HOSTING_ACTIVITY; class_name: 'File Hosting Activity'; activity_id?: FileHostingActivityId;
  access_list?: any; access_mask?: string; access_result?: any; actor?: Actor;
  connection_info?: ConnectionInfo; dst_endpoint?: Endpoint; expiration_time?: string;
  file?: File; file_result?: File; share?: string; share_type?: string;
  share_type_id?: number; src_endpoint?: Endpoint;
}
export interface ScanActivity extends ApplicationActivityBase {
  class_uid: OcsfClassUid.SCAN_ACTIVITY; class_name: 'Scan Activity'; activity_id?: ScanActivityId;
  command_uid?: string; duration?: number; end_time?: string; num_detections?: number;
  num_files?: number; num_folders?: number; num_network_items?: number;
  num_processes?: number; num_registry_items?: number; num_resolutions?: number;
  num_skipped_items?: number; num_trusted_items?: number; policy?: Policy;
  scan?: Scan; schedule_uid?: string; start_time?: string; total?: number;
}
export interface ApplicationError extends ApplicationActivityBase {
  class_uid: OcsfClassUid.APPLICATION_ERROR; class_name: 'Application Error'; activity_id?: ApplicationErrorActivityId;
  message?: string;
  error_code?: number;
  error_type?: string;
  stack_trace?: string;
}

export interface DiscoveryBase extends OcsfEvent {
  activity_id?: DiscoveryActivityId;
}
export interface DiscoveryResultBase extends OcsfEvent {
  activity_id?: DiscoveryResultActivityId;
  query_info?: QueryInfo;
  query_result?: any;
  query_result_id?: string;
}

export interface DeviceInventoryInfo extends DiscoveryBase {
  class_uid: OcsfClassUid.DEVICE_INVENTORY_INFO; class_name: 'Device Inventory Info';
  actor?: Actor; device?: Device;
}
export interface DeviceConfigState extends DiscoveryBase {
  class_uid: OcsfClassUid.DEVICE_CONFIG_STATE; class_name: 'Device Config State';
  actor?: Actor; assessments?: Assessment[]; cis_benchmark_result?: CisBenchmarkResult;
  device?: Device;
}
export interface FileQuery extends DiscoveryResultBase {
  class_uid: OcsfClassUid.FILE_QUERY; class_name: 'File Query';
  file?: File;
  files?: File[];
}
export interface FolderQuery extends DiscoveryResultBase {
  class_uid: OcsfClassUid.FOLDER_QUERY; class_name: 'Folder Query';
  folder?: Folder;
  folders?: Folder[];
}
export interface AdminGroupQuery extends DiscoveryResultBase {
  class_uid: OcsfClassUid.ADMIN_GROUP_QUERY; class_name: 'Admin Group Query';
  group?: Group; users?: User[];
}
export interface DeviceConfigStateChange extends DiscoveryBase {
  class_uid: OcsfClassUid.DEVICE_CONFIG_STATE_CHANGE; class_name: 'Device Config State Change';
  actor?: Actor; device?: Device; prev_security_level?: string;
  prev_security_level_id?: number; prev_security_states?: string[];
  security_level?: string; security_level_id?: number;
  security_states?: string[]; state?: string; state_id?: DeviceConfigStateChangeActivityId;
}
export interface CloudResourcesInventoryInfo extends DiscoveryBase {
  class_uid: OcsfClassUid.CLOUD_RESOURCES_INVENTORY_INFO; class_name: 'Cloud Resources Inventory Info';
  cloud?: Cloud; container?: Container; database?: Database; databucket?: Databucket;
  idp?: Idp; region?: string; resources?: Resource[];
  table?: Table;
}
export interface LiveEvidenceInfo extends DiscoveryResultBase {
  class_uid: OcsfClassUid.LIVE_EVIDENCE_INFO; class_name: 'Live Evidence Info';
  device?: Device; query_evidence?: Evidence;
  evidences?: Evidence[];
}
export interface PatchState extends DiscoveryBase {
  class_uid: OcsfClassUid.PATCH_STATE; class_name: 'Operating System Patch State';
  device?: Device; kb_article_list?: KbArticle[];
}
export interface KernelObjectQuery extends DiscoveryResultBase {
  class_uid: OcsfClassUid.KERNEL_OBJECT_QUERY; class_name: 'Kernel Object Query';
  kernel?: Kernel;
}
export interface JobQuery extends DiscoveryResultBase {
  class_uid: OcsfClassUid.JOB_QUERY; class_name: 'Job Query';
  job?: Job;
  jobs?: Job[];
}
export interface ModuleQuery extends DiscoveryResultBase {
  class_uid: OcsfClassUid.MODULE_QUERY; class_name: 'Module Query';
  module?: Module; process?: Process;
  modules?: Module[];
}
export interface NetworkConnectionQuery extends DiscoveryResultBase {
  class_uid: OcsfClassUid.NETWORK_CONNECTION_QUERY; class_name: 'Network Connection Query';
  connection_info?: ConnectionInfo; process?: Process; state?: string;
  state_id?: NetworkConnectionQueryStateId;
  connection_infos?: ConnectionInfo[];
}
export interface NetworksQuery extends DiscoveryResultBase {
  class_uid: OcsfClassUid.NETWORKS_QUERY; class_name: 'Networks Query';
  network_interfaces?: NetworkInterface[];
}
export interface PeripheralDeviceQuery extends DiscoveryResultBase {
  class_uid: OcsfClassUid.PERIPHERAL_DEVICE_QUERY; class_name: 'Peripheral Device Query';
  peripheral_device?: PeripheralDevice;
  peripheral_devices?: PeripheralDevice[];
}
export interface ProcessQuery extends DiscoveryResultBase {
  class_uid: OcsfClassUid.PROCESS_QUERY; class_name: 'Process Query';
  process?: Process;
  processes?: Process[];
}
export interface ServiceQuery extends DiscoveryResultBase {
  class_uid: OcsfClassUid.SERVICE_QUERY; class_name: 'Service Query';
  service?: Service;
  services?: Service[];
}
export interface OsintInventoryInfo extends DiscoveryBase {
  class_uid: OcsfClassUid.OSINT_INVENTORY_INFO; class_name: 'OSINT Inventory Info';
  actor?: Actor; osint?: Osint;
}
export interface UserInventory extends DiscoveryBase {
  class_uid: OcsfClassUid.USER_INVENTORY; class_name: 'User Inventory Info';
  actor?: Actor; user?: User;
}
export interface SoftwareInventoryInfo extends DiscoveryBase {
  class_uid: OcsfClassUid.SOFTWARE_INFO; class_name: 'Software Inventory Info';
  actor?: Actor; device?: Device; package?: Package; product?: Product; sbom?: Sbom;
  packages?: Package[];
  products?: Product[];
}
export interface UserSessionQuery extends DiscoveryResultBase {
  class_uid: OcsfClassUid.USER_SESSION_QUERY; class_name: 'User Session Query';
  session?: Session;
  sessions?: Session[];
}
export interface UserQuery extends DiscoveryResultBase {
  class_uid: OcsfClassUid.USER_QUERY; class_name: 'User Query';
  user?: User;
  users?: User[];
}
export interface StartupItemQuery extends DiscoveryResultBase {
  class_uid: OcsfClassUid.STARTUP_ITEM_QUERY; class_name: 'Startup Item Query';
  startup_item?: StartupItem;
  startup_items?: StartupItem[];
}

export interface FindingBase extends OcsfEvent {
  activity_name?: string;
  comment?: string;
  confidence?: string;
  confidence_id?: number;
  confidence_score?: number;
  device?: Device;
  end_time?: string;
  finding_info?: FindingInfo;
  start_time?: string;
  status?: string;
  status_id?: SecurityFindingStateId;
  vendor_attributes?: any;
}

export interface SecurityFinding extends FindingBase {
  class_uid: OcsfClassUid.SECURITY_FINDING; class_name: 'Security Finding'; activity_id?: FindingActivityId;
  analytic?: Analytic; attacks?: Attack[]; cis_csc?: CisCsc; compliance?: Compliance;
  data_sources?: DataSource[]; evidence?: Evidence[]; impact?: Impact; impact_id?: number;
  impact_score?: number; kill_chain?: KillChain; malware?: Malware; nist?: Nist;
  process?: Process; resources?: Resource[]; risk_level?: string; risk_level_id?: number;
  risk_score?: number; state?: string; state_id?: SecurityFindingStateId; vulnerabilities?: Vulnerability[];
}
export interface VulnerabilityFinding extends FindingBase {
  class_uid: OcsfClassUid.VULNERABILITY_FINDING; class_name: 'Vulnerability Finding'; activity_id?: FindingActivityId;
  resources?: Resource[]; vulnerabilities?: Vulnerability[];
}
export interface ComplianceFinding extends FindingBase {
  class_uid: OcsfClassUid.COMPLIANCE_FINDING; class_name: 'Compliance Finding'; activity_id?: FindingActivityId;
  compliance?: Compliance; evidences?: Evidence[]; remediation?: Remediation; resources?: Resource[];
}
export interface DetectionFinding extends FindingBase {
  class_uid: OcsfClassUid.DETECTION_FINDING; class_name: 'Detection Finding'; activity_id?: FindingActivityId;
  anomaly_analyses?: AnomalyAnalysis[]; confidence?: string; confidence_id?: number;
  confidence_score?: number; evidences?: Evidence[]; impact?: Impact; impact_id?: number;
  impact_score?: number; is_alert?: boolean; malware?: Malware; malware_scan_info?: MalwareScanInfo;
  remediation?: Remediation; resources?: Resource[]; risk_details?: RiskDetails;
  risk_level?: string; risk_level_id?: number; risk_score?: number; vulnerabilities?: Vulnerability[];
}
export interface IncidentFinding extends OcsfEvent {
  class_uid: OcsfClassUid.INCIDENT_FINDING; class_name: 'Incident Finding'; activity_id?: IncidentFindingActivityId;
  activity_name?: string; assignee?: User; assignee_group?: Group; attacks?: Attack[];
  comment?: string; confidence?: string; confidence_id?: number; confidence_score?: number;
  desc?: string; end_time?: string; finding_info_list?: FindingInfo[]; impact?: Impact;
  impact_id?: number; impact_score?: number; is_suspected_breach?: boolean; priority?: string;
  priority_id?: number; src_url?: string; start_time?: string; status?: string;
  status_id?: IncidentFindingStatusId; ticket?: Ticket; tickets?: Ticket[];
  vendor_attributes?: any; verdict?: string; verdict_id?: number;
}
export interface DataSecurityFinding extends FindingBase {
  class_uid: OcsfClassUid.DATA_SECURITY_FINDING; class_name: 'Data Security Finding'; activity_id?: DataSecurityFindingActivityId;
  activity_name?: string; actor?: Actor; confidence?: string; confidence_id?: number;
  confidence_score?: number; data_security?: DataSecurity; database?: Database;
  databucket?: Databucket; device?: Device; dst_endpoint?: Endpoint; file?: File;
  impact?: Impact; impact_id?: number; impact_score?: number; is_alert?: boolean;
  resources?: Resource[]; risk_details?: RiskDetails; risk_level?: string;
  risk_level_id?: number; risk_score?: number; src_endpoint?: Endpoint; table?: Table;
}
export interface ApplicationSecurityPostureFinding extends FindingBase {
  class_uid: OcsfClassUid.APPLICATION_SECURITY_POSTURE_FINDING; class_name: 'Application Security Posture Finding'; activity_id?: FindingActivityId;
  application?: App; compliance?: Compliance; remediation?: Remediation; resources?: Resource[];
  vulnerabilities?: Vulnerability[];
}

export interface IamBase extends OcsfEvent {
  actor?: Actor;
  http_request?: HttpRequest;
  http_response?: HttpResponse;
  src_endpoint?: Endpoint;
}

export interface AccountChange extends IamBase {
  class_uid: OcsfClassUid.ACCOUNT_CHANGE; class_name: 'Account Change'; activity_id?: AccountChangeActivityId;
  policies?: Policy[]; policy?: Policy; user?: User; user_result?: User;
}
export interface Authentication extends IamBase {
  class_uid: OcsfClassUid.AUTHENTICATION; class_name: 'Authentication'; activity_id?: AuthenticationActivityId;
  auth_factors?: AuthFactor[]; auth_protocol?: string; auth_protocol_id?: number;
  authentication_token?: string; certificate?: Certificate; dst_endpoint?: Endpoint;
  is_cleartext?: boolean; is_mfa?: boolean; is_new_logon?: boolean; is_remote?: boolean;
  logon_process?: string; logon_type?: string; logon_type_id?: number;
  service?: Service; session?: Session; status_detail?: string; user?: User;
}
export interface AuthorizeSession extends IamBase {
  class_uid: OcsfClassUid.AUTHORIZE_SESSION; class_name: 'Authorize Session'; activity_id?: AuthorizeSessionActivityId;
  dst_endpoint?: Endpoint; group?: Group; privileges?: string[]; session?: Session; user?: User;
}
export interface EntityManagement extends IamBase {
  class_uid: OcsfClassUid.ENTITY_MANAGEMENT; class_name: 'Entity Management'; activity_id?: EntityManagementActivityId;
  access_list?: any; access_mask?: string; comment?: string; entity?: Entity; entity_result?: Entity;
}
export interface UserAccessManagement extends IamBase {
  class_uid: OcsfClassUid.USER_ACCESS_MANAGEMENT; class_name: 'User Access Management'; activity_id?: UserAccessActivityId;
  privileges?: string[]; resource?: Resource; resources?: Resource[]; user?: User;
}
export interface GroupManagement extends IamBase {
  class_uid: OcsfClassUid.GROUP_MANAGEMENT; class_name: 'Group Management'; activity_id?: GroupManagementActivityId;
  group?: Group; privileges?: string[]; resource?: Resource; user?: User; subgroup?: Group;
}

export interface NetworkBase extends OcsfEvent {
  app_name?: string;
  connection_info?: ConnectionInfo;
  dst_endpoint?: Endpoint;
  ja4_fingerprint_list?: Ja4Fingerprint[];
  proxy?: Proxy;
  src_endpoint?: Endpoint;
  tls?: Tls;
  traffic?: Traffic;
}

export interface NetworkActivity extends NetworkBase {
  class_uid: OcsfClassUid.NETWORK_ACTIVITY; class_name: 'Network Activity'; activity_id?: NetworkActivityId;
  url?: Url;
}
export interface HttpActivity extends NetworkBase {
  class_uid: OcsfClassUid.HTTP_ACTIVITY; class_name: 'HTTP Activity'; activity_id?: HttpActivityId;
  file?: File; http_cookies?: string; http_request?: HttpRequest; http_response?: HttpResponse;
  http_status?: number;
}
export interface DnsActivity extends NetworkBase {
  class_uid: OcsfClassUid.DNS_ACTIVITY; class_name: 'DNS Activity'; activity_id?: DnsActivityId;
  answers?: DnsAnswer[]; connection_info?: ConnectionInfo; dst_endpoint?: Endpoint;
  query?: DnsQuery; query_time?: string; rcode?: string; rcode_id?: DnsRcodeId;
  response_time?: string; traffic?: Traffic;
}
export interface DhcpActivity extends NetworkBase {
  class_uid: OcsfClassUid.DHCP_ACTIVITY; class_name: 'DHCP Activity'; activity_id?: DhcpActivityId;
  dst_endpoint?: Endpoint; is_renewal?: boolean; lease_dur?: number; relay?: any;
  src_endpoint?: Endpoint; transaction_uid?: string;
}
export interface FtpActivity extends NetworkBase {
  class_uid: OcsfClassUid.FTP_ACTIVITY; class_name: 'FTP Activity'; activity_id?: FtpActivityId;
  codes?: number[]; command?: string; command_responses?: string[]; file?: File;
  name?: string; port?: number; type?: string;
}
export interface EmailActivity extends OcsfEvent {
  class_uid: OcsfClassUid.EMAIL_ACTIVITY; class_name: 'Email Activity'; activity_id?: EmailActivityId;
  attempt?: number; banner?: string; command?: string; direction?: string;
  direction_id?: EmailDirectionId; dst_endpoint?: Endpoint; email?: Email;
  email_auth?: EmailAuth; message_trace_uid?: string; protocol_name?: string;
  smtp_hello?: string; src_endpoint?: Endpoint;
}
export interface EmailFileActivity extends OcsfEvent {
  class_uid: OcsfClassUid.EMAIL_FILE_ACTIVITY; class_name: 'Email File Activity'; activity_id?: EmailFileActivityId;
  email_uid?: string; file?: File;
}
export interface EmailUrlActivity extends OcsfEvent {
  class_uid: OcsfClassUid.EMAIL_URL_ACTIVITY; class_name: 'Email URL Activity'; activity_id?: EmailUrlActivityId;
  email_uid?: string; url?: Url;
}
export interface NetworkFileActivity extends NetworkBase {
  class_uid: OcsfClassUid.NETWORK_FILE_ACTIVITY; class_name: 'Network File Activity'; activity_id?: FileHostingActivityId;
  actor?: Actor; connection_info?: ConnectionInfo; dst_endpoint?: Endpoint;
  expiration_time?: string; file?: File; src_endpoint?: Endpoint;
}

export interface NtpActivity extends NetworkBase {
  class_uid: OcsfClassUid.NTP_ACTIVITY; class_name: 'NTP Activity'; activity_id?: NtpActivityId;
  delay?: number; dispersion?: number; precision?: number; stratum?: number;
  stratum_id?: number; version?: string;
}
export interface RdpActivity extends NetworkBase {
  class_uid: OcsfClassUid.RDP_ACTIVITY; class_name: 'RDP Activity'; activity_id?: RdpActivityId;
  capabilities?: RdpCapabilities; certificate_chain?: Certificate[]; connection_info?: ConnectionInfo;
  device?: Device; file?: File; identifier_cookie?: string; keyboard_info?: RdpKeyboardInfo;
  protocol_ver?: string; remote_display?: RdpRemoteDisplay; request?: RdpRequest;
  response?: RdpResponse; user?: User;
}
export interface SmbActivity extends NetworkBase {
  class_uid: OcsfClassUid.SMB_ACTIVITY; class_name: 'SMB Activity'; activity_id?: SmbActivityId;
  client_dialects?: string[]; command?: string; dce_rpc?: SmbDceRpc; dialect?: string;
  file?: File; open_type?: string; response?: string; share?: string;
  share_type?: string; share_type_id?: number; tree_uid?: string;
}
export interface SshActivity extends NetworkBase {
  class_uid: OcsfClassUid.SSH_ACTIVITY; class_name: 'SSH Activity'; activity_id?: SshActivityId;
  auth_type?: string; auth_type_id?: SshAuthTypeId; client_hassh?: SshClientHassh;
  file?: File; protocol_ver?: string; server_hassh?: SshServerHassh;
}
export interface TunnelActivity extends NetworkBase {
  class_uid: OcsfClassUid.TUNNEL_ACTIVITY; class_name: 'Tunnel Activity'; activity_id?: TunnelActivityId;
  connection_info?: ConnectionInfo; device?: Device; dst_endpoint?: Endpoint;
  protocol_name?: string; session?: Session; src_endpoint?: Endpoint; traffic?: Traffic;
  tunnel_interface?: TunnelInterface; tunnel_type?: string; tunnel_type_id?: TunnelTypeId;
  user?: User;
}

export interface RemediationBase extends OcsfEvent {
  activity_id?: RemediationActivityId;
  command_uid?: string;
  countermeasures?: Countermeasure[];
  remediation?: Remediation;
  scan?: RemediationScan;
  status_id?: RemediationStatusId;
}

export interface RemediationActivity extends RemediationBase {
  class_uid: OcsfClassUid.REMEDIATION_ACTIVITY; class_name: 'Remediation Activity';
}
export interface FileRemediationActivity extends RemediationBase {
  class_uid: OcsfClassUid.FILE_REMEDIATION_ACTIVITY; class_name: 'File Remediation Activity';
  file?: File;
}
export interface ProcessRemediationActivity extends RemediationBase {
  class_uid: OcsfClassUid.PROCESS_REMEDIATION_ACTIVITY; class_name: 'Process Remediation Activity';
  process?: Process;
}
export interface NetworkRemediationActivity extends RemediationBase {
  class_uid: OcsfClassUid.NETWORK_REMEDIATION_ACTIVITY; class_name: 'Network Remediation Activity';
  connection_info?: ConnectionInfo;
}

export interface UnmannedSystemsBase extends OcsfEvent {
  connection_info?: ConnectionInfo;
  dst_endpoint?: Endpoint;
  proxy_endpoint?: Endpoint;
  src_endpoint?: Endpoint;
  tls?: Tls;
  traffic?: Traffic;
}

export interface DroneFlightsActivity extends UnmannedSystemsBase {
  class_uid: OcsfClassUid.DRONE_FLIGHTS_ACTIVITY;
  class_name: 'Drone Flights Activity';
  activity_id?: DroneFlightsActivityId;
  auth_protocol?: string;
  auth_protocol_id?: DroneFlightsAuthProtocolId;
  classification?: string;
  comment?: string;
  protocol_name?: string;
  status?: string;
  status_id?: DroneFlightsStatusId;
  unmanned_aerial_system?: UnmannedAerialSystem;
  unmanned_system_operating_area?: UnmannedSystemOperatingArea;
  unmanned_system_operator?: UnmannedSystemOperator;
}

export interface AirborneBroadcastActivity extends UnmannedSystemsBase {
  class_uid: OcsfClassUid.AIRBORNE_BROADCAST_ACTIVITY;
  class_name: 'Airborne Broadcast Activity';
  activity_id?: AirborneBroadcastActivityId;
  aircraft?: Aircraft;
  protocol_name?: string;
  rssi?: number;
  unmanned_aerial_system?: UnmannedAerialSystem;
  unmanned_system_operating_area?: UnmannedSystemOperatingArea;
  unmanned_system_operator?: UnmannedSystemOperator;
}

export function getOcsfSchemaByClassUid(classUid: number): OcsfEvent {
  switch (classUid) {
    case OcsfClassUid.FILE_SYSTEM_ACTIVITY: return {} as FileSystemActivity;
    case OcsfClassUid.KERNEL_EXTENSION_ACTIVITY: return {} as KernelExtensionActivity;
    case OcsfClassUid.KERNEL_ACTIVITY: return {} as KernelActivity;
    case OcsfClassUid.MEMORY_ACTIVITY: return {} as MemoryActivity;
    case OcsfClassUid.MODULE_ACTIVITY: return {} as ModuleActivity;
    case OcsfClassUid.SCHEDULED_JOB_ACTIVITY: return {} as ScheduledJobActivity;
    case OcsfClassUid.PROCESS_ACTIVITY: return {} as ProcessActivity;
    case OcsfClassUid.EVENT_LOG_ACTIVITY: return {} as EventLogActivity;
    case OcsfClassUid.SCRIPT_ACTIVITY: return {} as ScriptActivity;
    case OcsfClassUid.WEB_RESOURCES_ACTIVITY: return {} as WebResourcesActivity;
    case OcsfClassUid.APPLICATION_LIFECYCLE: return {} as ApplicationLifecycle;
    case OcsfClassUid.API_ACTIVITY: return {} as ApiActivity;
    case OcsfClassUid.WEB_RESOURCE_ACCESS_ACTIVITY: return {} as WebResourceAccessActivity;
    case OcsfClassUid.DATASTORE_ACTIVITY: return {} as DatastoreActivity;
    case OcsfClassUid.FILE_HOSTING_ACTIVITY: return {} as FileHostingActivity;
    case OcsfClassUid.SCAN_ACTIVITY: return {} as ScanActivity;
    case OcsfClassUid.APPLICATION_ERROR: return {} as ApplicationError;
    case OcsfClassUid.DEVICE_INVENTORY_INFO: return {} as DeviceInventoryInfo;
    case OcsfClassUid.DEVICE_CONFIG_STATE: return {} as DeviceConfigState;
    case OcsfClassUid.USER_INVENTORY: return {} as UserInventory;
    case OcsfClassUid.PATCH_STATE: return {} as PatchState;
    case OcsfClassUid.SOFTWARE_INFO: return {} as SoftwareInventoryInfo;
    case OcsfClassUid.KERNEL_OBJECT_QUERY: return {} as KernelObjectQuery;
    case OcsfClassUid.FILE_QUERY: return {} as FileQuery;
    case OcsfClassUid.FOLDER_QUERY: return {} as FolderQuery;
    case OcsfClassUid.ADMIN_GROUP_QUERY: return {} as AdminGroupQuery;
    case OcsfClassUid.JOB_QUERY: return {} as JobQuery;
    case OcsfClassUid.MODULE_QUERY: return {} as ModuleQuery;
    case OcsfClassUid.NETWORK_CONNECTION_QUERY: return {} as NetworkConnectionQuery;
    case OcsfClassUid.NETWORKS_QUERY: return {} as NetworksQuery;
    case OcsfClassUid.PERIPHERAL_DEVICE_QUERY: return {} as PeripheralDeviceQuery;
    case OcsfClassUid.PROCESS_QUERY: return {} as ProcessQuery;
    case OcsfClassUid.SERVICE_QUERY: return {} as ServiceQuery;
    case OcsfClassUid.USER_SESSION_QUERY: return {} as UserSessionQuery;
    case OcsfClassUid.USER_QUERY: return {} as UserQuery;
    case OcsfClassUid.DEVICE_CONFIG_STATE_CHANGE: return {} as DeviceConfigStateChange;
    case OcsfClassUid.OSINT_INVENTORY_INFO: return {} as OsintInventoryInfo;
    case OcsfClassUid.STARTUP_ITEM_QUERY: return {} as StartupItemQuery;
    case OcsfClassUid.CLOUD_RESOURCES_INVENTORY_INFO: return {} as CloudResourcesInventoryInfo;
    case OcsfClassUid.LIVE_EVIDENCE_INFO: return {} as LiveEvidenceInfo;
    case OcsfClassUid.SECURITY_FINDING: return {} as SecurityFinding;
    case OcsfClassUid.VULNERABILITY_FINDING: return {} as VulnerabilityFinding;
    case OcsfClassUid.COMPLIANCE_FINDING: return {} as ComplianceFinding;
    case OcsfClassUid.DETECTION_FINDING: return {} as DetectionFinding;
    case OcsfClassUid.INCIDENT_FINDING: return {} as IncidentFinding;
    case OcsfClassUid.DATA_SECURITY_FINDING: return {} as DataSecurityFinding;
    case OcsfClassUid.APPLICATION_SECURITY_POSTURE_FINDING: return {} as ApplicationSecurityPostureFinding;
    case OcsfClassUid.ACCOUNT_CHANGE: return {} as AccountChange;
    case OcsfClassUid.AUTHENTICATION: return {} as Authentication;
    case OcsfClassUid.AUTHORIZE_SESSION: return {} as AuthorizeSession;
    case OcsfClassUid.ENTITY_MANAGEMENT: return {} as EntityManagement;
    case OcsfClassUid.USER_ACCESS_MANAGEMENT: return {} as UserAccessManagement;
    case OcsfClassUid.GROUP_MANAGEMENT: return {} as GroupManagement;
    case OcsfClassUid.NETWORK_ACTIVITY: return {} as NetworkActivity;
    case OcsfClassUid.HTTP_ACTIVITY: return {} as HttpActivity;
    case OcsfClassUid.DNS_ACTIVITY: return {} as DnsActivity;
    case OcsfClassUid.DHCP_ACTIVITY: return {} as DhcpActivity;
    case OcsfClassUid.FTP_ACTIVITY: return {} as FtpActivity;
    case OcsfClassUid.EMAIL_ACTIVITY: return {} as EmailActivity;
    case OcsfClassUid.NETWORK_FILE_ACTIVITY: return {} as NetworkFileActivity;
    case OcsfClassUid.EMAIL_FILE_ACTIVITY: return {} as EmailFileActivity;
    case OcsfClassUid.EMAIL_URL_ACTIVITY: return {} as EmailUrlActivity;
    case OcsfClassUid.NTP_ACTIVITY: return {} as NtpActivity;
    case OcsfClassUid.RDP_ACTIVITY: return {} as RdpActivity;
    case OcsfClassUid.SMB_ACTIVITY: return {} as SmbActivity;
    case OcsfClassUid.SSH_ACTIVITY: return {} as SshActivity;
    case OcsfClassUid.TUNNEL_ACTIVITY: return {} as TunnelActivity;
    case OcsfClassUid.REMEDIATION_ACTIVITY: return {} as RemediationActivity;
    case OcsfClassUid.FILE_REMEDIATION_ACTIVITY: return {} as FileRemediationActivity;
    case OcsfClassUid.PROCESS_REMEDIATION_ACTIVITY: return {} as ProcessRemediationActivity;
    case OcsfClassUid.NETWORK_REMEDIATION_ACTIVITY: return {} as NetworkRemediationActivity;
    case OcsfClassUid.DRONE_FLIGHTS_ACTIVITY: return {} as DroneFlightsActivity;
    case OcsfClassUid.AIRBORNE_BROADCAST_ACTIVITY: return {} as AirborneBroadcastActivity;

    default:
      return {} as OcsfEvent;
  }
}

export type FieldType = 'string' | 'number' | 'boolean' | 'enum' | 'object' | 'array' | 'any';

export interface OCSFFieldSchema {
  type: FieldType;
  enumRef?: any;
  objectRef?: string;
  arrayElementType?: FieldType;
  arrayObjectRef?: string;
  canBeNull?: boolean;
  canBeUndefined?: boolean;
}

export interface OCSFClassSchema {
  [key: string]: OCSFFieldSchema;
}

export const OCSF_SCHEMA: { [key: string]: OCSFClassSchema } = {
  OcsfEvent: {
    time: { type: 'string' },
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'number', canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    category_uid: { type: 'number' },
    category_name: { type: 'string' },
    severity_id: { type: 'enum', enumRef: OcsfSeverityId },
    severity: { type: 'string' },
    type_uid: { type: 'number' },
    type_name: { type: 'string' },
    src_ip: { type: 'string', canBeUndefined: true },
    user: { type: 'object', objectRef: 'User', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    device: { type: 'object', objectRef: 'Device', canBeUndefined: true },
  },
  Actor: {
    user: { type: 'object', objectRef: 'User', canBeUndefined: true },
    process: { type: 'object', objectRef: 'Process', canBeUndefined: true },
    device: { type: 'object', objectRef: 'Device', canBeUndefined: true },
    application: { type: 'object', objectRef: 'App', canBeUndefined: true },
    api: { type: 'object', objectRef: 'Api', canBeUndefined: true },
  },
  User: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    email_addr: { type: 'string', canBeUndefined: true },
    account_type: { type: 'string', canBeUndefined: true },
    account_type_id: { type: 'number', canBeUndefined: true },
    domain: { type: 'string', canBeUndefined: true },
    session: { type: 'object', objectRef: 'Session', canBeUndefined: true },
  },
  Process: {
    pid: { type: 'number', canBeUndefined: true },
    name: { type: 'string', canBeUndefined: true },
    command_line: { type: 'string', canBeUndefined: true },
    exe_path: { type: 'string', canBeUndefined: true },
    parent_process: { type: 'object', objectRef: 'Process', canBeUndefined: true },
    file: { type: 'object', objectRef: 'File', canBeUndefined: true },
    is_hidden: { type: 'boolean', canBeUndefined: true },
    is_system: { type: 'boolean', canBeUndefined: true },
    start_time: { type: 'string', canBeUndefined: true },
    end_time: { type: 'string', canBeUndefined: true },
    integrity_level: { type: 'string', canBeUndefined: true },
    integrity_level_id: { type: 'number', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    args: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    arg_count: { type: 'number', canBeUndefined: true },
    hash: { type: 'object', objectRef: 'Hash', canBeUndefined: true },
  },
  File: {
    file_name: { type: 'string', canBeUndefined: true },
    file_path: { type: 'string', canBeUndefined: true },
    file_type: { type: 'string', canBeUndefined: true },
    file_size: { type: 'number', canBeUndefined: true },
    file_hash: { type: 'string', canBeUndefined: true },
    extension: { type: 'string', canBeUndefined: true },
    create_time: { type: 'string', canBeUndefined: true },
    access_time: { type: 'string', canBeUndefined: true },
    modify_time: { type: 'string', canBeUndefined: true },
    mime_type: { type: 'string', canBeUndefined: true },
    owner: { type: 'object', objectRef: 'User', canBeUndefined: true },
    hash: { type: 'object', objectRef: 'Hash', canBeUndefined: true },
    is_hidden: { type: 'boolean', canBeUndefined: true },
    is_executable: { type: 'boolean', canBeUndefined: true },
    is_system: { type: 'boolean', canBeUndefined: true },
    magic_number: { type: 'string', canBeUndefined: true },
    pe_info: { type: 'object', objectRef: 'PeInfo', canBeUndefined: true },
  },
  Hash: {
    md5: { type: 'string', canBeUndefined: true },
    sha1: { type: 'string', canBeUndefined: true },
    sha256: { type: 'string', canBeUndefined: true },
    ssdeep: { type: 'string', canBeUndefined: true },
  },
  PeInfo: {
    imphash: { type: 'string', canBeUndefined: true },
    pe_sections: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'PeSection', canBeUndefined: true },
  },
  PeSection: {
    name: { type: 'string', canBeUndefined: true },
    entropy: { type: 'number', canBeUndefined: true },
    size: { type: 'number', canBeUndefined: true },
    virtual_size: { type: 'number', canBeUndefined: true },
    virtual_address: { type: 'string', canBeUndefined: true },
  },
  Device: {
    uid: { type: 'string', canBeUndefined: true },
    name: { type: 'string', canBeUndefined: true },
    ip_address: { type: 'string', canBeUndefined: true },
    hostname: { type: 'string', canBeUndefined: true },
    mac_address: { type: 'string', canBeUndefined: true },
    os: { type: 'object', objectRef: 'OsInfo', canBeUndefined: true },
    location: { type: 'object', objectRef: 'Location', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    type_id: { type: 'number', canBeUndefined: true },
  },
  OsInfo: {
    name: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    build: { type: 'string', canBeUndefined: true },
    sp_name: { type: 'string', canBeUndefined: true },
    sp_ver: { type: 'string', canBeUndefined: true },
  },
  Location: {
    lat: { type: 'number', canBeUndefined: true },
    lon: { type: 'number', canBeUndefined: true },
    city: { type: 'string', canBeUndefined: true },
    country: { type: 'string', canBeUndefined: true },
    continent: { type: 'string', canBeUndefined: true },
    postal_code: { type: 'string', canBeUndefined: true },
    region: { type: 'string', canBeUndefined: true },
    timezone: { type: 'string', canBeUndefined: true },
  },
  Module: {
    uid: { type: 'string', canBeUndefined: true },
    name: { type: 'string', canBeUndefined: true },
    file_path: { type: 'string', canBeUndefined: true },
    hash: { type: 'object', objectRef: 'Hash', canBeUndefined: true },
    load_time: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
  },
  Job: {
    uid: { type: 'string', canBeUndefined: true },
    name: { type: 'string', canBeUndefined: true },
    command: { type: 'string', canBeUndefined: true },
    cron_expression: { type: 'string', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
    status: { type: 'string', canBeUndefined: true },
    status_id: { type: 'number', canBeUndefined: true },
    start_time: { type: 'string', canBeUndefined: true },
    end_time: { type: 'string', canBeUndefined: true },
    user: { type: 'object', objectRef: 'User', canBeUndefined: true },
  },
  Script: {
    uid: { type: 'string', canBeUndefined: true },
    name: { type: 'string', canBeUndefined: true },
    file_path: { type: 'string', canBeUndefined: true },
    hash: { type: 'object', objectRef: 'Hash', canBeUndefined: true },
    command_line: { type: 'string', canBeUndefined: true },
    interpreter: { type: 'string', canBeUndefined: true },
  },
  Endpoint: {
    uid: { type: 'string', canBeUndefined: true },
    ip_address: { type: 'string', canBeUndefined: true },
    name: { type: 'string', canBeUndefined: true },
    port: { type: 'number', canBeUndefined: true },
    mac_address: { type: 'string', canBeUndefined: true },
    hostname: { type: 'string', canBeUndefined: true },
    interface_name: { type: 'string', canBeUndefined: true },
  },
  Kernel: {
    uid: { type: 'string', canBeUndefined: true },
    name: { type: 'string', canBeUndefined: true },
    file_path: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    release: { type: 'string', canBeUndefined: true },
    build: { type: 'string', canBeUndefined: true },
    hash: { type: 'object', objectRef: 'Hash', canBeUndefined: true },
  },
  Driver: {
    uid: { type: 'string', canBeUndefined: true },
    name: { type: 'string', canBeUndefined: true },
    file_path: { type: 'string', canBeUndefined: true },
    hash: { type: 'object', objectRef: 'Hash', canBeUndefined: true },
    load_time: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
  },
  FileDiff: {
    added_lines: { type: 'number', canBeUndefined: true },
    deleted_lines: { type: 'number', canBeUndefined: true },
    diff_text: { type: 'string', canBeUndefined: true },
  },
  ConnectionInfo: {
    uid: { type: 'string', canBeUndefined: true },
    protocol_name: { type: 'string', canBeUndefined: true },
    protocol_version: { type: 'string', canBeUndefined: true },
    src_ip: { type: 'string', canBeUndefined: true },
    dst_ip: { type: 'string', canBeUndefined: true },
    src_port: { type: 'number', canBeUndefined: true },
    dst_port: { type: 'number', canBeUndefined: true },
    direction: { type: 'string', canBeUndefined: true },
    direction_id: { type: 'number', canBeUndefined: true },
    duration: { type: 'number', canBeUndefined: true },
    transport_protocol: { type: 'string', canBeUndefined: true },
    transport_protocol_id: { type: 'number', canBeUndefined: true },
    application_protocol: { type: 'string', canBeUndefined: true },
    application_protocol_id: { type: 'number', canBeUndefined: true },
    tcp_flags: { type: 'string', canBeUndefined: true },
    state: { type: 'string', canBeUndefined: true },
    state_id: { type: 'number', canBeUndefined: true },
    rx_bytes: { type: 'number', canBeUndefined: true },
    tx_bytes: { type: 'number', canBeUndefined: true },
    total_bytes: { type: 'number', canBeUndefined: true },
    rx_packets: { type: 'number', canBeUndefined: true },
    tx_packets: { type: 'number', canBeUndefined: true },
    total_packets: { type: 'number', canBeUndefined: true },
  },
  HttpRequest: {
    method: { type: 'string', canBeUndefined: true },
    url: { type: 'string', canBeUndefined: true },
    user_agent: { type: 'string', canBeUndefined: true },
    headers: { type: 'any', canBeUndefined: true },
    body: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    referrer: { type: 'string', canBeUndefined: true },
    http_cookies: { type: 'string', canBeUndefined: true },
    mime_type: { type: 'string', canBeUndefined: true },
    params: { type: 'any', canBeUndefined: true },
    size: { type: 'number', canBeUndefined: true },
  },
  HttpResponse: {
    status_code: { type: 'number', canBeUndefined: true },
    status_message: { type: 'string', canBeUndefined: true },
    headers: { type: 'any', canBeUndefined: true },
    body: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    mime_type: { type: 'string', canBeUndefined: true },
    size: { type: 'number', canBeUndefined: true },
  },
  Tls: {
    protocol_name: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    cipher: { type: 'string', canBeUndefined: true },
    issuer: { type: 'string', canBeUndefined: true },
    subject: { type: 'string', canBeUndefined: true },
    certificate_chain: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Certificate', canBeUndefined: true },
    ja3_fingerprint: { type: 'string', canBeUndefined: true },
    ja3s_fingerprint: { type: 'string', canBeUndefined: true },
    negotiated_cipher_suite: { type: 'string', canBeUndefined: true },
    negotiated_protocol_version: { type: 'string', canBeUndefined: true },
    server_certificate: { type: 'object', objectRef: 'Certificate', canBeUndefined: true },
  },
  WebResource: {
    url: { type: 'string', canBeUndefined: true },
    mime_type: { type: 'string', canBeUndefined: true },
    content_type: { type: 'string', canBeUndefined: true },
    response_code: { type: 'number', canBeUndefined: true },
    response_message: { type: 'string', canBeUndefined: true },
    size: { type: 'number', canBeUndefined: true },
    hash: { type: 'object', objectRef: 'Hash', canBeUndefined: true },
  },
  Api: {
    name: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    operation: { type: 'string', canBeUndefined: true },
    service_name: { type: 'string', canBeUndefined: true },
    method: { type: 'string', canBeUndefined: true },
    parameters: { type: 'any', canBeUndefined: true },
    response_code: { type: 'number', canBeUndefined: true },
    response_message: { type: 'string', canBeUndefined: true },
  },
  Resource: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    path: { type: 'string', canBeUndefined: true },
    region: { type: 'string', canBeUndefined: true },
  },
  Scan: {
    scan_id: { type: 'string', canBeUndefined: true },
    name: { type: 'string', canBeUndefined: true },
    status: { type: 'string', canBeUndefined: true },
    status_id: { type: 'number', canBeUndefined: true },
    start_time: { type: 'string', canBeUndefined: true },
    end_time: { type: 'string', canBeUndefined: true },
    duration: { type: 'number', canBeUndefined: true },
    num_detections: { type: 'number', canBeUndefined: true },
    num_files: { type: 'number', canBeUndefined: true },
    num_folders: { type: 'number', canBeUndefined: true },
    num_network_items: { type: 'number', canBeUndefined: true },
    num_processes: { type: 'number', canBeUndefined: true },
    num_registry_items: { type: 'number', canBeUndefined: true },
    num_resolutions: { type: 'number', canBeUndefined: true },
    num_skipped_items: { type: 'number', canBeUndefined: true },
    num_trusted_items: { type: 'number', canBeUndefined: true },
    policy: { type: 'object', objectRef: 'Policy', canBeUndefined: true },
    scan_result: { type: 'string', canBeUndefined: true },
    schedule_uid: { type: 'string', canBeUndefined: true },
    total: { type: 'number', canBeUndefined: true },
  },
  App: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    vendor: { type: 'string', canBeUndefined: true },
    install_time: { type: 'string', canBeUndefined: true },
    install_path: { type: 'string', canBeUndefined: true },
    hash: { type: 'object', objectRef: 'Hash', canBeUndefined: true },
  },
  Database: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    instance_name: { type: 'string', canBeUndefined: true },
    port: { type: 'number', canBeUndefined: true },
  },
  Databucket: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    region: { type: 'string', canBeUndefined: true },
    url: { type: 'string', canBeUndefined: true },
  },
  Table: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    database_name: { type: 'string', canBeUndefined: true },
    row_count: { type: 'number', canBeUndefined: true },
  },
  QueryInfo: {
    query: { type: 'string', canBeUndefined: true },
    query_type: { type: 'string', canBeUndefined: true },
    query_type_id: { type: 'number', canBeUndefined: true },
    query_parameters: { type: 'any', canBeUndefined: true },
  },
  Folder: {
    name: { type: 'string', canBeUndefined: true },
    path: { type: 'string', canBeUndefined: true },
    create_time: { type: 'string', canBeUndefined: true },
    access_time: { type: 'string', canBeUndefined: true },
    modify_time: { type: 'string', canBeUndefined: true },
    file_count: { type: 'number', canBeUndefined: true },
    subfolder_count: { type: 'number', canBeUndefined: true },
  },
  Group: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    privileges: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    resource: { type: 'string', canBeUndefined: true },
    user: { type: 'object', objectRef: 'User', canBeUndefined: true },
    subgroup: { type: 'object', objectRef: 'Group', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
    is_admin: { type: 'boolean', canBeUndefined: true },
  },
  Cloud: {
    provider: { type: 'string', canBeUndefined: true },
    region: { type: 'string', canBeUndefined: true },
    account_uid: { type: 'string', canBeUndefined: true },
    project_uid: { type: 'string', canBeUndefined: true },
    organization_uid: { type: 'string', canBeUndefined: true },
    resource_uid: { type: 'string', canBeUndefined: true },
    zone: { type: 'string', canBeUndefined: true },
  },
  Container: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    image_name: { type: 'string', canBeUndefined: true },
    image_uid: { type: 'string', canBeUndefined: true },
    command_line: { type: 'string', canBeUndefined: true },
    start_time: { type: 'string', canBeUndefined: true },
    end_time: { type: 'string', canBeUndefined: true },
    status: { type: 'string', canBeUndefined: true },
    status_id: { type: 'number', canBeUndefined: true },
    labels: { type: 'any', canBeUndefined: true },
  },
  Idp: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    url: { type: 'string', canBeUndefined: true },
  },
  Assessment: {
    name: { type: 'string', canBeUndefined: true },
    status: { type: 'string', canBeUndefined: true },
    status_id: { type: 'number', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
    score: { type: 'number', canBeUndefined: true },
    max_score: { type: 'number', canBeUndefined: true },
    start_time: { type: 'string', canBeUndefined: true },
    end_time: { type: 'string', canBeUndefined: true },
  },
  CisBenchmarkResult: {
    benchmark_name: { type: 'string', canBeUndefined: true },
    score: { type: 'number', canBeUndefined: true },
    profile: { type: 'string', canBeUndefined: true },
    result: { type: 'string', canBeUndefined: true },
    result_id: { type: 'number', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
    control_id: { type: 'string', canBeUndefined: true },
  },
  PeripheralDevice: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    vendor: { type: 'string', canBeUndefined: true },
    model: { type: 'string', canBeUndefined: true },
    serial_number: { type: 'string', canBeUndefined: true },
    connection_type: { type: 'string', canBeUndefined: true },
    connection_type_id: { type: 'number', canBeUndefined: true },
  },
  Service: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    status: { type: 'string', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
    display_name: { type: 'string', canBeUndefined: true },
    start_type: { type: 'string', canBeUndefined: true },
    state: { type: 'string', canBeUndefined: true },
    path: { type: 'string', canBeUndefined: true },
  },
  NetworkInterface: {
    name: { type: 'string', canBeUndefined: true },
    mac_address: { type: 'string', canBeUndefined: true },
    ip_addresses: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    is_up: { type: 'boolean', canBeUndefined: true },
    speed: { type: 'number', canBeUndefined: true },
    mtu: { type: 'number', canBeUndefined: true },
    rx_bytes: { type: 'number', canBeUndefined: true },
    tx_bytes: { type: 'number', canBeUndefined: true },
  },
  Osint: {
    feed_name: { type: 'string', canBeUndefined: true },
    threat_intelligence: { type: 'any', canBeUndefined: true },
    malware_families: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    indicator_type: { type: 'string', canBeUndefined: true },
    indicator_value: { type: 'string', canBeUndefined: true },
    last_update_time: { type: 'string', canBeUndefined: true },
  },
  KbArticle: {
    id: { type: 'string', canBeUndefined: true },
    url: { type: 'string', canBeUndefined: true },
    title: { type: 'string', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
    publish_date: { type: 'string', canBeUndefined: true },
  },
  StartupItem: {
    name: { type: 'string', canBeUndefined: true },
    path: { type: 'string', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    type_id: { type: 'number', canBeUndefined: true },
    command_line: { type: 'string', canBeUndefined: true },
    user: { type: 'object', objectRef: 'User', canBeUndefined: true },
  },
  Session: {
    uid: { type: 'string', canBeUndefined: true },
    start_time: { type: 'string', canBeUndefined: true },
    end_time: { type: 'string', canBeUndefined: true },
    is_interactive: { type: 'boolean', canBeUndefined: true },
    is_remote: { type: 'boolean', canBeUndefined: true },
    logon_id: { type: 'string', canBeUndefined: true },
    logon_type: { type: 'string', canBeUndefined: true },
    logon_type_id: { type: 'number', canBeUndefined: true },
    protocol_name: { type: 'string', canBeUndefined: true },
    duration: { type: 'number', canBeUndefined: true },
  },
  Package: {
    name: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    vendor: { type: 'string', canBeUndefined: true },
    install_time: { type: 'string', canBeUndefined: true },
    install_path: { type: 'string', canBeUndefined: true },
    hash: { type: 'object', objectRef: 'Hash', canBeUndefined: true },
    architecture: { type: 'string', canBeUndefined: true },
  },
  Product: {
    name: { type: 'string', canBeUndefined: true },
    vendor: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    family: { type: 'string', canBeUndefined: true },
  },
  Sbom: {
    format: { type: 'string', canBeUndefined: true },
    content: { type: 'string', canBeUndefined: true },
    hash: { type: 'object', objectRef: 'Hash', canBeUndefined: true },
  },
  Analytic: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    type_id: { type: 'number', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
  },
  Attack: {
    technique: { type: 'string', canBeUndefined: true },
    tactic: { type: 'string', canBeUndefined: true },
    technique_id: { type: 'string', canBeUndefined: true },
    tactic_id: { type: 'string', canBeUndefined: true },
  },
  CisCsc: {
    control_id: { type: 'string', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    status: { type: 'string', canBeUndefined: true },
    status_id: { type: 'number', canBeUndefined: true },
  },
  Compliance: {
    standard: { type: 'string', canBeUndefined: true },
    control: { type: 'string', canBeUndefined: true },
    status: { type: 'string', canBeUndefined: true },
    status_id: { type: 'number', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
    requirement: { type: 'string', canBeUndefined: true },
  },
  DataSource: {
    name: { type: 'string', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    ingestion_time: { type: 'string', canBeUndefined: true },
  },
  Evidence: {
    uid: { type: 'string', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    type_id: { type: 'number', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
    content: { type: 'string', canBeUndefined: true },
    file: { type: 'object', objectRef: 'File', canBeUndefined: true },
    process: { type: 'object', objectRef: 'Process', canBeUndefined: true },
    url: { type: 'object', objectRef: 'Url', canBeUndefined: true },
    device: { type: 'object', objectRef: 'Device', canBeUndefined: true },
  },
  FindingInfo: {
    finding_name: { type: 'string', canBeUndefined: true },
    finding_type: { type: 'string', canBeUndefined: true },
    finding_type_id: { type: 'number', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
    remediation_steps: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    related_events: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'OcsfEvent', canBeUndefined: true },
  },
  Impact: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'number', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
  },
  KillChain: {
    phase: { type: 'string', canBeUndefined: true },
    phase_id: { type: 'number', canBeUndefined: true },
  },
  Malware: {
    name: { type: 'string', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    type_id: { type: 'number', canBeUndefined: true },
    family: { type: 'string', canBeUndefined: true },
    hash: { type: 'object', objectRef: 'Hash', canBeUndefined: true },
    path: { type: 'string', canBeUndefined: true },
    is_packed: { type: 'boolean', canBeUndefined: true },
    signatures: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
  },
  Nist: {
    control_id: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
  },
  Vulnerability: {
    cve_id: { type: 'string', canBeUndefined: true },
    cvss_score: { type: 'number', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
    severity: { type: 'string', canBeUndefined: true },
    severity_id: { type: 'number', canBeUndefined: true },
    exploit_available: { type: 'boolean', canBeUndefined: true },
    patch_available: { type: 'boolean', canBeUndefined: true },
    references: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    epss_score: { type: 'number', canBeUndefined: true },
  },
  Remediation: {
    description: { type: 'string', canBeUndefined: true },
    steps: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    status: { type: 'string', canBeUndefined: true },
    status_id: { type: 'enum', enumRef: RemediationStatusId, canBeUndefined: true },
    start_time: { type: 'string', canBeUndefined: true },
    end_time: { type: 'string', canBeUndefined: true },
    applied_by: { type: 'object', objectRef: 'User', canBeUndefined: true },
  },
  AnomalyAnalysis: {
    baseline_info: { type: 'string', canBeUndefined: true },
    deviation_info: { type: 'string', canBeUndefined: true },
    score: { type: 'number', canBeUndefined: true },
    threshold: { type: 'number', canBeUndefined: true },
    is_anomalous: { type: 'boolean', canBeUndefined: true },
    anomaly_score: { type: 'number', canBeUndefined: true },
  },
  MalwareScanInfo: {
    scan_id: { type: 'string', canBeUndefined: true },
    scan_time: { type: 'string', canBeUndefined: true },
    status: { type: 'string', canBeUndefined: true },
    status_id: { type: 'enum', enumRef: ScanActivityId, canBeUndefined: true },
    result: { type: 'string', canBeUndefined: true },
    result_id: { type: 'number', canBeUndefined: true },
    detections: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    num_infected_files: { type: 'number', canBeUndefined: true },
  },
  RiskDetails: {
    score: { type: 'number', canBeUndefined: true },
    level: { type: 'string', canBeUndefined: true },
    level_id: { type: 'number', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
    factors: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
  },
  DataSecurity: {
    classification: { type: 'string', canBeUndefined: true },
    sensitive_data_type: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    data_volume: { type: 'number', canBeUndefined: true },
    data_location: { type: 'string', canBeUndefined: true },
    is_encrypted: { type: 'boolean', canBeUndefined: true },
  },
  Ticket: {
    ticket_id: { type: 'string', canBeUndefined: true },
    url: { type: 'string', canBeUndefined: true },
    status: { type: 'string', canBeUndefined: true },
    status_id: { type: 'enum', enumRef: IncidentFindingStatusId, canBeUndefined: true },
    priority: { type: 'string', canBeUndefined: true },
    priority_id: { type: 'number', canBeUndefined: true },
    assignee: { type: 'object', objectRef: 'User', canBeUndefined: true },
    created_time: { type: 'string', canBeUndefined: true },
    updated_time: { type: 'string', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
  },
  Policy: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
    rules: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    is_active: { type: 'boolean', canBeUndefined: true },
  },
  AuthFactor: {
    type: { type: 'string', canBeUndefined: true },
    type_id: { type: 'number', canBeUndefined: true },
    status: { type: 'string', canBeUndefined: true },
    status_id: { type: 'number', canBeUndefined: true },
  },
  Certificate: {
    fingerprint: { type: 'string', canBeUndefined: true },
    subject: { type: 'string', canBeUndefined: true },
    issuer: { type: 'string', canBeUndefined: true },
    serial_number: { type: 'string', canBeUndefined: true },
    valid_from: { type: 'string', canBeUndefined: true },
    valid_until: { type: 'string', canBeUndefined: true },
    algorithm: { type: 'string', canBeUndefined: true },
    key_size: { type: 'number', canBeUndefined: true },
    is_valid: { type: 'boolean', canBeUndefined: true },
  },
  Entity: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
    attributes: { type: 'any', canBeUndefined: true },
  },
  Ja4Fingerprint: {
    hash: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    os: { type: 'string', canBeUndefined: true },
    browser: { type: 'string', canBeUndefined: true },
  },
  Proxy: {
    name: { type: 'string', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    ip_address: { type: 'string', canBeUndefined: true },
    port: { type: 'number', canBeUndefined: true },
    vendor: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
  },
  Traffic: {
    rx_bytes: { type: 'number', canBeUndefined: true },
    tx_bytes: { type: 'number', canBeUndefined: true },
    total_bytes: { type: 'number', canBeUndefined: true },
    rx_packets: { type: 'number', canBeUndefined: true },
    tx_packets: { type: 'number', canBeUndefined: true },
    total_packets: { type: 'number', canBeUndefined: true },
  },
  Url: {
    url_string: { type: 'string', canBeUndefined: true },
    domain: { type: 'string', canBeUndefined: true },
    fqdn: { type: 'string', canBeUndefined: true },
    path: { type: 'string', canBeUndefined: true },
    query_string: { type: 'string', canBeUndefined: true },
    scheme: { type: 'string', canBeUndefined: true },
    port: { type: 'number', canBeUndefined: true },
    username: { type: 'string', canBeUndefined: true },
    password: { type: 'string', canBeUndefined: true },
    fragment: { type: 'string', canBeUndefined: true },
    is_valid: { type: 'boolean', canBeUndefined: true },
  },
  DnsAnswer: {
    rr_type: { type: 'string', canBeUndefined: true },
    rr_type_id: { type: 'number', canBeUndefined: true },
    rdata: { type: 'string', canBeUndefined: true },
    ttl: { type: 'number', canBeUndefined: true },
  },
  DnsQuery: {
    query_name: { type: 'string', canBeUndefined: true },
    query_type: { type: 'string', canBeUndefined: true },
    query_type_id: { type: 'number', canBeUndefined: true },
  },
  Email: {
    from_address: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    to_address: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    cc_address: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    bcc_address: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    subject: { type: 'string', canBeUndefined: true },
    files: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'File', canBeUndefined: true },
    urls: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Url', canBeUndefined: true },
    body: { type: 'string', canBeUndefined: true },
    size: { type: 'number', canBeUndefined: true },
    is_html: { type: 'boolean', canBeUndefined: true },
    send_time: { type: 'string', canBeUndefined: true },
    received_time: { type: 'string', canBeUndefined: true },
  },
  EmailAuth: {
    spf_result: { type: 'string', canBeUndefined: true },
    dkim_result: { type: 'string', canBeUndefined: true },
    dmarc_result: { type: 'string', canBeUndefined: true },
  },
  Ntp: {
    delay: { type: 'number', canBeUndefined: true },
    dispersion: { type: 'number', canBeUndefined: true },
    precision: { type: 'number', canBeUndefined: true },
    stratum: { type: 'number', canBeUndefined: true },
    stratum_id: { type: 'number', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    root_delay: { type: 'number', canBeUndefined: true },
    root_dispersion: { type: 'number', canBeUndefined: true },
    reference_id: { type: 'string', canBeUndefined: true },
  },
  RdpCapabilities: {
    display_flags: { type: 'number', canBeUndefined: true },
    desktop_width: { type: 'number', canBeUndefined: true },
    desktop_height: { type: 'number', canBeUndefined: true },
    color_depth: { type: 'number', canBeUndefined: true },
  },
  RdpKeyboardInfo: {
    keyboard_layout: { type: 'number', canBeUndefined: true },
    keyboard_type: { type: 'number', canBeUndefined: true },
    keyboard_subtype: { type: 'number', canBeUndefined: true },
    keyboard_function_keys: { type: 'number', canBeUndefined: true },
  },
  RdpRemoteDisplay: {
    width: { type: 'number', canBeUndefined: true },
    height: { type: 'number', canBeUndefined: true },
    color_depth: { type: 'number', canBeUndefined: true },
  },
  RdpRequest: {
    client_build: { type: 'number', canBeUndefined: true },
    client_name: { type: 'string', canBeUndefined: true },
    client_address: { type: 'string', canBeUndefined: true },
    client_version: { type: 'string', canBeUndefined: true },
  },
  RdpResponse: {
    server_build: { type: 'number', canBeUndefined: true },
    server_address: { type: 'string', canBeUndefined: true },
    server_version: { type: 'string', canBeUndefined: true },
  },
  SmbDceRpc: {
    operation: { type: 'string', canBeUndefined: true },
    function_name: { type: 'string', canBeUndefined: true },
    uuid: { type: 'string', canBeUndefined: true },
    opnum: { type: 'number', canBeUndefined: true },
  },
  SshClientHassh: {
    fingerprint: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    os: { type: 'string', canBeUndefined: true },
    client_string: { type: 'string', canBeUndefined: true },
  },
  SshServerHassh: {
    fingerprint: { type: 'string', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
    os: { type: 'string', canBeUndefined: true },
    server_string: { type: 'string', canBeUndefined: true },
  },
  TunnelInterface: {
    name: { type: 'string', canBeUndefined: true },
    ip_address: { type: 'string', canBeUndefined: true },
    mac_address: { type: 'string', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    status: { type: 'string', canBeUndefined: true },
  },
  Countermeasure: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    description: { type: 'string', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    type_id: { type: 'number', canBeUndefined: true },
    status: { type: 'string', canBeUndefined: true },
    status_id: { type: 'enum', enumRef: RemediationStatusId, canBeUndefined: true },
    applied_time: { type: 'string', canBeUndefined: true },
  },
  RemediationScan: {
    scan_id: { type: 'string', canBeUndefined: true },
    name: { type: 'string', canBeUndefined: true },
    status: { type: 'string', canBeUndefined: true },
    status_id: { type: 'enum', enumRef: ScanActivityId, canBeUndefined: true },
    start_time: { type: 'string', canBeUndefined: true },
    end_time: { type: 'string', canBeUndefined: true },
    num_items_scanned: { type: 'number', canBeUndefined: true },
    num_items_remediated: { type: 'number', canBeUndefined: true },
  },
  UnmannedAerialSystem: {
    uid: { type: 'string', canBeUndefined: true },
    name: { type: 'string', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    serial_number: { type: 'string', canBeUndefined: true },
    manufacturer: { type: 'string', canBeUndefined: true },
    model: { type: 'string', canBeUndefined: true },
    firmware_version: { type: 'string', canBeUndefined: true },
  },
  UnmannedSystemOperatingArea: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    location: { type: 'object', objectRef: 'Location', canBeUndefined: true },
    radius: { type: 'number', canBeUndefined: true },
  },
  UnmannedSystemOperator: {
    name: { type: 'string', canBeUndefined: true },
    uid: { type: 'string', canBeUndefined: true },
    email_addr: { type: 'string', canBeUndefined: true },
    organization: { type: 'string', canBeUndefined: true },
  },
  Aircraft: {
    uid: { type: 'string', canBeUndefined: true },
    tail_number: { type: 'string', canBeUndefined: true },
    call_sign: { type: 'string', canBeUndefined: true },
    manufacturer: { type: 'string', canBeUndefined: true },
    model: { type: 'string', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
  },
  FileSystemActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: FileSystemActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    file: { type: 'object', objectRef: 'File', canBeUndefined: true },
    access_mask: { type: 'string', canBeUndefined: true },
    component: { type: 'string', canBeUndefined: true },
    connection_uid: { type: 'string', canBeUndefined: true },
    create_mask: { type: 'string', canBeUndefined: true },
    file_diff: { type: 'object', objectRef: 'FileDiff', canBeUndefined: true },
    file_result: { type: 'object', objectRef: 'File', canBeUndefined: true },
    object: { type: 'object', objectRef: 'File', canBeUndefined: true },
  },
  KernelExtensionActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: KernelExtensionActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    driver: { type: 'object', objectRef: 'Driver', canBeUndefined: true },
  },
  KernelActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: KernelActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    kernel: { type: 'object', objectRef: 'Kernel', canBeUndefined: true },
  },
  MemoryActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: MemoryActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    process: { type: 'object', objectRef: 'Process', canBeUndefined: true },
    actual_permissions: { type: 'string', canBeUndefined: true },
    base_address: { type: 'string', canBeUndefined: true },
    requested_permissions: { type: 'string', canBeUndefined: true },
    size: { type: 'number', canBeUndefined: true },
  },
  ModuleActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: ModuleActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    module: { type: 'object', objectRef: 'Module', canBeUndefined: true },
  },
  ScheduledJobActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: ScheduledJobActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    job: { type: 'object', objectRef: 'Job', canBeUndefined: true },
  },
  ProcessActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: ProcessActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    process: { type: 'object', objectRef: 'Process', canBeUndefined: true },
    actual_permissions: { type: 'string', canBeUndefined: true },
    exit_code: { type: 'number', canBeUndefined: true },
    injection_type: { type: 'string', canBeUndefined: true },
    injection_type_id: { type: 'number', canBeUndefined: true },
    module: { type: 'object', objectRef: 'Module', canBeUndefined: true },
    requested_permissions: { type: 'string', canBeUndefined: true },
  },
  EventLogActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: EventLogActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    device: { type: 'object', objectRef: 'Device', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    file: { type: 'object', objectRef: 'File', canBeUndefined: true },
    log_name: { type: 'string', canBeUndefined: true },
    log_provider: { type: 'string', canBeUndefined: true },
    log_type: { type: 'string', canBeUndefined: true },
    log_type_id: { type: 'number', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    status_code: { type: 'number', canBeUndefined: true },
    status_detail: { type: 'string', canBeUndefined: true },
  },
  ScriptActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: ScriptActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    script: { type: 'object', objectRef: 'Script', canBeUndefined: true },
  },
  WebResourcesActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: WebResourcesActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    http_request: { type: 'object', objectRef: 'HttpRequest', canBeUndefined: true },
    http_response: { type: 'object', objectRef: 'HttpResponse', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    tls: { type: 'object', objectRef: 'Tls', canBeUndefined: true },
    web_resources: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'WebResource', canBeUndefined: true },
    web_resources_result: { type: 'object', objectRef: 'WebResource', canBeUndefined: true },
  },
  ApplicationLifecycle: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: ApplicationLifecycleActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    app: { type: 'object', objectRef: 'App', canBeUndefined: true },
  },
  ApiActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: ApiActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    api: { type: 'object', objectRef: 'Api', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    http_request: { type: 'object', objectRef: 'HttpRequest', canBeUndefined: true },
    http_response: { type: 'object', objectRef: 'HttpResponse', canBeUndefined: true },
    resources: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Resource', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
  },
  WebResourceAccessActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: WebResourceAccessActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    http_request: { type: 'object', objectRef: 'HttpRequest', canBeUndefined: true },
    http_response: { type: 'object', objectRef: 'HttpResponse', canBeUndefined: true },
    proxy: { type: 'object', objectRef: 'Proxy', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    tls: { type: 'object', objectRef: 'Tls', canBeUndefined: true },
    web_resources: { type: 'object', objectRef: 'WebResource', canBeUndefined: true },
  },
  DatastoreActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: DatastoreActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    database: { type: 'object', objectRef: 'Database', canBeUndefined: true },
    databucket: { type: 'object', objectRef: 'Databucket', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    http_request: { type: 'object', objectRef: 'HttpRequest', canBeUndefined: true },
    http_response: { type: 'object', objectRef: 'HttpResponse', canBeUndefined: true },
    query_info: { type: 'object', objectRef: 'QueryInfo', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    table: { type: 'object', objectRef: 'Table', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
    type_id: { type: 'enum', enumRef: DatastoreTypeID, canBeUndefined: true },
  },
  FileHostingActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: FileHostingActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    access_list: { type: 'any', canBeUndefined: true },
    access_mask: { type: 'string', canBeUndefined: true },
    access_result: { type: 'any', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    connection_info: { type: 'object', objectRef: 'ConnectionInfo', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    expiration_time: { type: 'string', canBeUndefined: true },
    file: { type: 'object', objectRef: 'File', canBeUndefined: true },
    file_result: { type: 'object', objectRef: 'File', canBeUndefined: true },
    share: { type: 'string', canBeUndefined: true },
    share_type: { type: 'string', canBeUndefined: true },
    share_type_id: { type: 'number', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
  },
  ScanActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: ScanActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    command_uid: { type: 'string', canBeUndefined: true },
    duration: { type: 'number', canBeUndefined: true },
    end_time: { type: 'string', canBeUndefined: true },
    num_detections: { type: 'number', canBeUndefined: true },
    num_files: { type: 'number', canBeUndefined: true },
    num_folders: { type: 'number', canBeUndefined: true },
    num_network_items: { type: 'number', canBeUndefined: true },
    num_processes: { type: 'number', canBeUndefined: true },
    num_registry_items: { type: 'number', canBeUndefined: true },
    num_resolutions: { type: 'number', canBeUndefined: true },
    num_skipped_items: { type: 'number', canBeUndefined: true },
    num_trusted_items: { type: 'number', canBeUndefined: true },
    policy: { type: 'object', objectRef: 'Policy', canBeUndefined: true },
    scan: { type: 'object', objectRef: 'Scan', canBeUndefined: true },
    schedule_uid: { type: 'string', canBeUndefined: true },
    start_time: { type: 'string', canBeUndefined: true },
    total: { type: 'number', canBeUndefined: true },
  },
  ApplicationError: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: ApplicationErrorActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    message: { type: 'string', canBeUndefined: true },
    error_code: { type: 'number', canBeUndefined: true },
    error_type: { type: 'string', canBeUndefined: true },
    stack_trace: { type: 'string', canBeUndefined: true },
  },
  DeviceInventoryInfo: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    device: { type: 'object', objectRef: 'Device', canBeUndefined: true },
  },
  DeviceConfigState: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    assessments: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Assessment', canBeUndefined: true },
    cis_benchmark_result: { type: 'object', objectRef: 'CisBenchmarkResult', canBeUndefined: true },
    device: { type: 'object', objectRef: 'Device', canBeUndefined: true },
  },
  UserInventory: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    user: { type: 'object', objectRef: 'User', canBeUndefined: true },
  },
  PatchState: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    device: { type: 'object', objectRef: 'Device', canBeUndefined: true },
    kb_article_list: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'KbArticle', canBeUndefined: true },
  },
  SoftwareInventoryInfo: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    device: { type: 'object', objectRef: 'Device', canBeUndefined: true },
    package: { type: 'object', objectRef: 'Package', canBeUndefined: true },
    product: { type: 'object', objectRef: 'Product', canBeUndefined: true },
    sbom: { type: 'object', objectRef: 'Sbom', canBeUndefined: true },
    packages: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Package', canBeUndefined: true },
    products: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Product', canBeUndefined: true },
  },
  KernelObjectQuery: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    kernel: { type: 'object', objectRef: 'Kernel', canBeUndefined: true },
    query_info: { type: 'object', objectRef: 'QueryInfo', canBeUndefined: true },
    query_result: { type: 'any', canBeUndefined: true },
  },
  FileQuery: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    file: { type: 'object', objectRef: 'File', canBeUndefined: true },
    query_info: { type: 'object', objectRef: 'QueryInfo', canBeUndefined: true },
    files: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'File', canBeUndefined: true },
  },
  FolderQuery: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    folder: { type: 'object', objectRef: 'Folder', canBeUndefined: true },
    query_info: { type: 'object', objectRef: 'QueryInfo', canBeUndefined: true },
    folders: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Folder', canBeUndefined: true },
  },
  AdminGroupQuery: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    group: { type: 'object', objectRef: 'Group', canBeUndefined: true },
    query_info: { type: 'object', objectRef: 'QueryInfo', canBeUndefined: true },
    users: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'User', canBeUndefined: true },
  },
  JobQuery: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    job: { type: 'object', objectRef: 'Job', canBeUndefined: true },
    query_info: { type: 'object', objectRef: 'QueryInfo', canBeUndefined: true },
    jobs: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Job', canBeUndefined: true },
  },
  ModuleQuery: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    module: { type: 'object', objectRef: 'Module', canBeUndefined: true },
    process: { type: 'object', objectRef: 'Process', canBeUndefined: true },
    query_info: { type: 'object', objectRef: 'QueryInfo', canBeUndefined: true },
    modules: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Module', canBeUndefined: true },
  },
  NetworkConnectionQuery: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    connection_info: { type: 'object', objectRef: 'ConnectionInfo', canBeUndefined: true },
    process: { type: 'object', objectRef: 'Process', canBeUndefined: true },
    state: { type: 'string', canBeUndefined: true },
    state_id: { type: 'enum', enumRef: NetworkConnectionQueryStateId, canBeUndefined: true },
    query_info: { type: 'object', objectRef: 'QueryInfo', canBeUndefined: true },
    connection_infos: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'ConnectionInfo', canBeUndefined: true },
  },
  NetworksQuery: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    network_interfaces: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'NetworkInterface', canBeUndefined: true },
    query_info: { type: 'object', objectRef: 'QueryInfo', canBeUndefined: true },
  },
  PeripheralDeviceQuery: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    peripheral_device: { type: 'object', objectRef: 'PeripheralDevice', canBeUndefined: true },
    query_info: { type: 'object', objectRef: 'QueryInfo', canBeUndefined: true },
    peripheral_devices: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'PeripheralDevice', canBeUndefined: true },
  },
  ProcessQuery: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    process: { type: 'object', objectRef: 'Process', canBeUndefined: true },
    query_info: { type: 'object', objectRef: 'QueryInfo', canBeUndefined: true },
    processes: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Process', canBeUndefined: true },
  },
  ServiceQuery: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    service: { type: 'object', objectRef: 'Service', canBeUndefined: true },
    query_info: { type: 'object', objectRef: 'QueryInfo', canBeUndefined: true },
    services: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Service', canBeUndefined: true },
  },
  UserSessionQuery: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    session: { type: 'object', objectRef: 'Session', canBeUndefined: true },
    query_info: { type: 'object', objectRef: 'QueryInfo', canBeUndefined: true },
    sessions: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Session', canBeUndefined: true },
  },
  UserQuery: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    user: { type: 'object', objectRef: 'User', canBeUndefined: true },
    query_info: { type: 'object', objectRef: 'QueryInfo', canBeUndefined: true },
    users: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'User', canBeUndefined: true },
  },
  DeviceConfigStateChange: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: DeviceConfigStateChangeActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    device: { type: 'object', objectRef: 'Device', canBeUndefined: true },
    prev_security_level: { type: 'string', canBeUndefined: true },
    prev_security_level_id: { type: 'number', canBeUndefined: true },
    prev_security_states: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    security_level: { type: 'string', canBeUndefined: true },
    security_level_id: { type: 'number', canBeUndefined: true },
    security_states: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    state: { type: 'string', canBeUndefined: true },
    state_id: { type: 'enum', enumRef: DeviceConfigStateChangeActivityId, canBeUndefined: true },
  },
  OsintInventoryInfo: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    osint: { type: 'object', objectRef: 'Osint', canBeUndefined: true },
  },
  StartupItemQuery: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    startup_item: { type: 'object', objectRef: 'StartupItem', canBeUndefined: true },
    query_info: { type: 'object', objectRef: 'QueryInfo', canBeUndefined: true },
    startup_items: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'StartupItem', canBeUndefined: true },
  },
  CloudResourcesInventoryInfo: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    cloud: { type: 'object', objectRef: 'Cloud', canBeUndefined: true },
    container: { type: 'object', objectRef: 'Container', canBeUndefined: true },
    database: { type: 'object', objectRef: 'Database', canBeUndefined: true },
    databucket: { type: 'object', objectRef: 'Databucket', canBeUndefined: true },
    idp: { type: 'object', objectRef: 'Idp', canBeUndefined: true },
    region: { type: 'string', canBeUndefined: true },
    resources: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Resource', canBeUndefined: true },
    table: { type: 'object', objectRef: 'Table', canBeUndefined: true },
  },
  LiveEvidenceInfo: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    device: { type: 'object', objectRef: 'Device', canBeUndefined: true },
    query_evidence: { type: 'object', objectRef: 'Evidence', canBeUndefined: true },
    evidences: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Evidence', canBeUndefined: true },
  },
  SecurityFinding: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: FindingActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    analytic: { type: 'object', objectRef: 'Analytic', canBeUndefined: true },
    attacks: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Attack', canBeUndefined: true },
    cis_csc: { type: 'object', objectRef: 'CisCsc', canBeUndefined: true },
    compliance: { type: 'object', objectRef: 'Compliance', canBeUndefined: true },
    data_sources: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'DataSource', canBeUndefined: true },
    evidence: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Evidence', canBeUndefined: true },
    impact: { type: 'object', objectRef: 'Impact', canBeUndefined: true },
    impact_id: { type: 'number', canBeUndefined: true },
    impact_score: { type: 'number', canBeUndefined: true },
    kill_chain: { type: 'object', objectRef: 'KillChain', canBeUndefined: true },
    malware: { type: 'object', objectRef: 'Malware', canBeUndefined: true },
    nist: { type: 'object', objectRef: 'Nist', canBeUndefined: true },
    process: { type: 'object', objectRef: 'Process', canBeUndefined: true },
    resources: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Resource', canBeUndefined: true },
    risk_level: { type: 'string', canBeUndefined: true },
    risk_level_id: { type: 'number', canBeUndefined: true },
    risk_score: { type: 'number', canBeUndefined: true },
    state: { type: 'string', canBeUndefined: true },
    state_id: { type: 'enum', enumRef: SecurityFindingStateId, canBeUndefined: true },
    vulnerabilities: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Vulnerability', canBeUndefined: true },
  },
  VulnerabilityFinding: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: FindingActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    resources: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Resource', canBeUndefined: true },
    vulnerabilities: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Vulnerability', canBeUndefined: true },
  },
  ComplianceFinding: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: FindingActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    compliance: { type: 'object', objectRef: 'Compliance', canBeUndefined: true },
    evidences: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Evidence', canBeUndefined: true },
    remediation: { type: 'object', objectRef: 'Remediation', canBeUndefined: true },
    resources: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Resource', canBeUndefined: true },
  },
  DetectionFinding: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: FindingActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    anomaly_analyses: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'AnomalyAnalysis', canBeUndefined: true },
    confidence: { type: 'string', canBeUndefined: true },
    confidence_id: { type: 'number', canBeUndefined: true },
    confidence_score: { type: 'number', canBeUndefined: true },
    evidences: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Evidence', canBeUndefined: true },
    impact: { type: 'object', objectRef: 'Impact', canBeUndefined: true },
    impact_id: { type: 'number', canBeUndefined: true },
    impact_score: { type: 'number', canBeUndefined: true },
    is_alert: { type: 'boolean', canBeUndefined: true },
    malware: { type: 'object', objectRef: 'Malware', canBeUndefined: true },
    malware_scan_info: { type: 'object', objectRef: 'MalwareScanInfo', canBeUndefined: true },
    remediation: { type: 'object', objectRef: 'Remediation', canBeUndefined: true },
    resources: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Resource', canBeUndefined: true },
    risk_details: { type: 'object', objectRef: 'RiskDetails', canBeUndefined: true },
    risk_level: { type: 'string', canBeUndefined: true },
    risk_level_id: { type: 'number', canBeUndefined: true },
    risk_score: { type: 'number', canBeUndefined: true },
    vulnerabilities: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Vulnerability', canBeUndefined: true },
  },
  IncidentFinding: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: IncidentFindingActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    assignee: { type: 'object', objectRef: 'User', canBeUndefined: true },
    assignee_group: { type: 'object', objectRef: 'Group', canBeUndefined: true },
    attacks: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Attack', canBeUndefined: true },
    comment: { type: 'string', canBeUndefined: true },
    confidence: { type: 'string', canBeUndefined: true },
    confidence_id: { type: 'number', canBeUndefined: true },
    confidence_score: { type: 'number', canBeUndefined: true },
    desc: { type: 'string', canBeUndefined: true },
    end_time: { type: 'string', canBeUndefined: true },
    finding_info_list: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'FindingInfo', canBeUndefined: true },
    impact: { type: 'object', objectRef: 'Impact', canBeUndefined: true },
    impact_id: { type: 'number', canBeUndefined: true },
    impact_score: { type: 'number', canBeUndefined: true },
    is_suspected_breach: { type: 'boolean', canBeUndefined: true },
    priority: { type: 'string', canBeUndefined: true },
    priority_id: { type: 'number', canBeUndefined: true },
    src_url: { type: 'string', canBeUndefined: true },
    start_time: { type: 'string', canBeUndefined: true },
    status: { type: 'string', canBeUndefined: true },
    status_id: { type: 'enum', enumRef: IncidentFindingStatusId, canBeUndefined: true },
    ticket: { type: 'object', objectRef: 'Ticket', canBeUndefined: true },
    tickets: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Ticket', canBeUndefined: true },
    vendor_attributes: { type: 'any', canBeUndefined: true },
    verdict: { type: 'string', canBeUndefined: true },
    verdict_id: { type: 'number', canBeUndefined: true },
  },
  DataSecurityFinding: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: DataSecurityFindingActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    confidence: { type: 'string', canBeUndefined: true },
    confidence_id: { type: 'number', canBeUndefined: true },
    confidence_score: { type: 'number', canBeUndefined: true },
    data_security: { type: 'object', objectRef: 'DataSecurity', canBeUndefined: true },
    database: { type: 'object', objectRef: 'Database', canBeUndefined: true },
    databucket: { type: 'object', objectRef: 'Databucket', canBeUndefined: true },
    device: { type: 'object', objectRef: 'Device', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    file: { type: 'object', objectRef: 'File', canBeUndefined: true },
    impact: { type: 'object', objectRef: 'Impact', canBeUndefined: true },
    impact_id: { type: 'number', canBeUndefined: true },
    impact_score: { type: 'number', canBeUndefined: true },
    is_alert: { type: 'boolean', canBeUndefined: true },
    resources: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Resource', canBeUndefined: true },
    risk_details: { type: 'object', objectRef: 'RiskDetails', canBeUndefined: true },
    risk_level: { type: 'string', canBeUndefined: true },
    risk_level_id: { type: 'number', canBeUndefined: true },
    risk_score: { type: 'number', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    table: { type: 'object', objectRef: 'Table', canBeUndefined: true },
  },
  ApplicationSecurityPostureFinding: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: FindingActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    application: { type: 'object', objectRef: 'App', canBeUndefined: true },
    compliance: { type: 'object', objectRef: 'Compliance', canBeUndefined: true },
    remediation: { type: 'object', objectRef: 'Remediation', canBeUndefined: true },
    resources: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Resource', canBeUndefined: true },
    vulnerabilities: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Vulnerability', canBeUndefined: true },
  },
  AccountChange: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: AccountChangeActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    http_request: { type: 'object', objectRef: 'HttpRequest', canBeUndefined: true },
    http_response: { type: 'object', objectRef: 'HttpResponse', canBeUndefined: true },
    policies: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Policy', canBeUndefined: true },
    policy: { type: 'object', objectRef: 'Policy', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    user: { type: 'object', objectRef: 'User', canBeUndefined: true },
    user_result: { type: 'object', objectRef: 'User', canBeUndefined: true },
  },
  Authentication: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: AuthenticationActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    auth_factors: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'AuthFactor', canBeUndefined: true },
    auth_protocol: { type: 'string', canBeUndefined: true },
    auth_protocol_id: { type: 'number', canBeUndefined: true },
    authentication_token: { type: 'string', canBeUndefined: true },
    certificate: { type: 'object', objectRef: 'Certificate', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    http_request: { type: 'object', objectRef: 'HttpRequest', canBeUndefined: true },
    http_response: { type: 'object', objectRef: 'HttpResponse', canBeUndefined: true },
    is_cleartext: { type: 'boolean', canBeUndefined: true },
    is_mfa: { type: 'boolean', canBeUndefined: true },
    is_new_logon: { type: 'boolean', canBeUndefined: true },
    is_remote: { type: 'boolean', canBeUndefined: true },
    logon_process: { type: 'string', canBeUndefined: true },
    logon_type: { type: 'string', canBeUndefined: true },
    logon_type_id: { type: 'number', canBeUndefined: true },
    service: { type: 'object', objectRef: 'Service', canBeUndefined: true },
    session: { type: 'object', objectRef: 'Session', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    status_detail: { type: 'string', canBeUndefined: true },
    user: { type: 'object', objectRef: 'User', canBeUndefined: true },
  },
  AuthorizeSession: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: AuthorizeSessionActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    group: { type: 'object', objectRef: 'Group', canBeUndefined: true },
    http_request: { type: 'object', objectRef: 'HttpRequest', canBeUndefined: true },
    http_response: { type: 'object', objectRef: 'HttpResponse', canBeUndefined: true },
    privileges: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    session: { type: 'object', objectRef: 'Session', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    user: { type: 'object', objectRef: 'User', canBeUndefined: true },
  },
  EntityManagement: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: EntityManagementActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    access_list: { type: 'any', canBeUndefined: true },
    access_mask: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    comment: { type: 'string', canBeUndefined: true },
    entity: { type: 'object', objectRef: 'Entity', canBeUndefined: true },
    entity_result: { type: 'object', objectRef: 'Entity', canBeUndefined: true },
    http_request: { type: 'object', objectRef: 'HttpRequest', canBeUndefined: true },
    http_response: { type: 'object', objectRef: 'HttpResponse', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
  },
  UserAccessManagement: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: UserAccessActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    http_request: { type: 'object', objectRef: 'HttpRequest', canBeUndefined: true },
    http_response: { type: 'object', objectRef: 'HttpResponse', canBeUndefined: true },
    privileges: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    resource: { type: 'object', objectRef: 'Resource', canBeUndefined: true },
    resources: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Resource', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    user: { type: 'object', objectRef: 'User', canBeUndefined: true },
  },
  GroupManagement: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: GroupManagementActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    group: { type: 'object', objectRef: 'Group', canBeUndefined: true },
    http_request: { type: 'object', objectRef: 'HttpRequest', canBeUndefined: true },
    http_response: { type: 'object', objectRef: 'HttpResponse', canBeUndefined: true },
    privileges: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    resource: { type: 'object', objectRef: 'Resource', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    subgroup: { type: 'object', objectRef: 'Group', canBeUndefined: true },
    user: { type: 'object', objectRef: 'User', canBeUndefined: true },
  },
  NetworkActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: NetworkActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    app_name: { type: 'string', canBeUndefined: true },
    connection_info: { type: 'object', objectRef: 'ConnectionInfo', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    ja4_fingerprint_list: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Ja4Fingerprint', canBeUndefined: true },
    proxy: { type: 'object', objectRef: 'Proxy', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    tls: { type: 'object', objectRef: 'Tls', canBeUndefined: true },
    traffic: { type: 'object', objectRef: 'Traffic', canBeUndefined: true },
    url: { type: 'object', objectRef: 'Url', canBeUndefined: true },
  },
  HttpActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: HttpActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    app_name: { type: 'string', canBeUndefined: true },
    connection_info: { type: 'object', objectRef: 'ConnectionInfo', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    file: { type: 'object', objectRef: 'File', canBeUndefined: true },
    http_cookies: { type: 'string', canBeUndefined: true },
    http_request: { type: 'object', objectRef: 'HttpRequest', canBeUndefined: true },
    http_response: { type: 'object', objectRef: 'HttpResponse', canBeUndefined: true },
    http_status: { type: 'number', canBeUndefined: true },
    ja4_fingerprint_list: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Ja4Fingerprint', canBeUndefined: true },
    proxy: { type: 'object', objectRef: 'Proxy', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    tls: { type: 'object', objectRef: 'Tls', canBeUndefined: true },
    traffic: { type: 'object', objectRef: 'Traffic', canBeUndefined: true },
  },
  DnsActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: DnsActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    answers: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'DnsAnswer', canBeUndefined: true },
    app_name: { type: 'string', canBeUndefined: true },
    connection_info: { type: 'object', objectRef: 'ConnectionInfo', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    ja4_fingerprint_list: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Ja4Fingerprint', canBeUndefined: true },
    proxy: { type: 'object', objectRef: 'Proxy', canBeUndefined: true },
    query: { type: 'object', objectRef: 'DnsQuery', canBeUndefined: true },
    query_time: { type: 'string', canBeUndefined: true },
    rcode: { type: 'string', canBeUndefined: true },
    rcode_id: { type: 'enum', enumRef: DnsRcodeId, canBeUndefined: true },
    response_time: { type: 'string', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    tls: { type: 'object', objectRef: 'Tls', canBeUndefined: true },
    traffic: { type: 'object', objectRef: 'Traffic', canBeUndefined: true },
  },
  DhcpActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: DhcpActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    app_name: { type: 'string', canBeUndefined: true },
    connection_info: { type: 'object', objectRef: 'ConnectionInfo', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    is_renewal: { type: 'boolean', canBeUndefined: true },
    ja4_fingerprint_list: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Ja4Fingerprint', canBeUndefined: true },
    lease_dur: { type: 'number', canBeUndefined: true },
    proxy: { type: 'object', objectRef: 'Proxy', canBeUndefined: true },
    relay: { type: 'any', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    tls: { type: 'object', objectRef: 'Tls', canBeUndefined: true },
    traffic: { type: 'object', objectRef: 'Traffic', canBeUndefined: true },
    transaction_uid: { type: 'string', canBeUndefined: true },
  },
  FtpActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: FtpActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    app_name: { type: 'string', canBeUndefined: true },
    codes: { type: 'array', arrayElementType: 'number', canBeUndefined: true },
    command: { type: 'string', canBeUndefined: true },
    command_responses: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    connection_info: { type: 'object', objectRef: 'ConnectionInfo', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    file: { type: 'object', objectRef: 'File', canBeUndefined: true },
    ja4_fingerprint_list: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Ja4Fingerprint', canBeUndefined: true },
    name: { type: 'string', canBeUndefined: true },
    port: { type: 'number', canBeUndefined: true },
    proxy: { type: 'object', objectRef: 'Proxy', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    tls: { type: 'object', objectRef: 'Tls', canBeUndefined: true },
    traffic: { type: 'object', objectRef: 'Traffic', canBeUndefined: true },
    type: { type: 'string', canBeUndefined: true },
  },
  EmailActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: EmailActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    attempt: { type: 'number', canBeUndefined: true },
    banner: { type: 'string', canBeUndefined: true },
    command: { type: 'string', canBeUndefined: true },
    direction: { type: 'string', canBeUndefined: true },
    direction_id: { type: 'enum', enumRef: EmailDirectionId, canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    email: { type: 'object', objectRef: 'Email', canBeUndefined: true },
    email_auth: { type: 'object', objectRef: 'EmailAuth', canBeUndefined: true },
    message_trace_uid: { type: 'string', canBeUndefined: true },
    protocol_name: { type: 'string', canBeUndefined: true },
    smtp_hello: { type: 'string', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
  },
  NetworkFileActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: FileHostingActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    actor: { type: 'object', objectRef: 'Actor', canBeUndefined: true },
    app_name: { type: 'string', canBeUndefined: true },
    connection_info: { type: 'object', objectRef: 'ConnectionInfo', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    expiration_time: { type: 'string', canBeUndefined: true },
    file: { type: 'object', objectRef: 'File', canBeUndefined: true },
    ja4_fingerprint_list: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Ja4Fingerprint', canBeUndefined: true },
    proxy: { type: 'object', objectRef: 'Proxy', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    tls: { type: 'object', objectRef: 'Tls', canBeUndefined: true },
    traffic: { type: 'object', objectRef: 'Traffic', canBeUndefined: true },
  },
  EmailFileActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: EmailFileActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    email_uid: { type: 'string', canBeUndefined: true },
    file: { type: 'object', objectRef: 'File', canBeUndefined: true },
  },
  EmailUrlActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: EmailUrlActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    email_uid: { type: 'string', canBeUndefined: true },
    url: { type: 'object', objectRef: 'Url', canBeUndefined: true },
  },
  NtpActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: NtpActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    app_name: { type: 'string', canBeUndefined: true },
    connection_info: { type: 'object', objectRef: 'ConnectionInfo', canBeUndefined: true },
    delay: { type: 'number', canBeUndefined: true },
    dispersion: { type: 'number', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    ja4_fingerprint_list: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Ja4Fingerprint', canBeUndefined: true },
    precision: { type: 'number', canBeUndefined: true },
    proxy: { type: 'object', objectRef: 'Proxy', canBeUndefined: true },
    root_delay: { type: 'number', canBeUndefined: true },
    root_dispersion: { type: 'number', canBeUndefined: true },
    reference_id: { type: 'string', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    stratum: { type: 'number', canBeUndefined: true },
    stratum_id: { type: 'enum', enumRef: NtpActivityId, canBeUndefined: true },
    tls: { type: 'object', objectRef: 'Tls', canBeUndefined: true },
    traffic: { type: 'object', objectRef: 'Traffic', canBeUndefined: true },
    version: { type: 'string', canBeUndefined: true },
  },
  RdpActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: RdpActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    app_name: { type: 'string', canBeUndefined: true },
    capabilities: { type: 'object', objectRef: 'RdpCapabilities', canBeUndefined: true },
    certificate_chain: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Certificate', canBeUndefined: true },
    connection_info: { type: 'object', objectRef: 'ConnectionInfo', canBeUndefined: true },
    device: { type: 'object', objectRef: 'Device', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    file: { type: 'object', objectRef: 'File', canBeUndefined: true },
    identifier_cookie: { type: 'string', canBeUndefined: true },
    ja4_fingerprint_list: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Ja4Fingerprint', canBeUndefined: true },
    keyboard_info: { type: 'object', objectRef: 'RdpKeyboardInfo', canBeUndefined: true },
    protocol_ver: { type: 'string', canBeUndefined: true },
    proxy: { type: 'object', objectRef: 'Proxy', canBeUndefined: true },
    remote_display: { type: 'object', objectRef: 'RdpRemoteDisplay', canBeUndefined: true },
    request: { type: 'object', objectRef: 'RdpRequest', canBeUndefined: true },
    response: { type: 'object', objectRef: 'RdpResponse', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    tls: { type: 'object', objectRef: 'Tls', canBeUndefined: true },
    traffic: { type: 'object', objectRef: 'Traffic', canBeUndefined: true },
    user: { type: 'object', objectRef: 'User', canBeUndefined: true },
  },
  SmbActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: SmbActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    app_name: { type: 'string', canBeUndefined: true },
    client_dialects: { type: 'array', arrayElementType: 'string', canBeUndefined: true },
    command: { type: 'string', canBeUndefined: true },
    connection_info: { type: 'object', objectRef: 'ConnectionInfo', canBeUndefined: true },
    dce_rpc: { type: 'object', objectRef: 'SmbDceRpc', canBeUndefined: true },
    dialect: { type: 'string', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    file: { type: 'object', objectRef: 'File', canBeUndefined: true },
    ja4_fingerprint_list: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Ja4Fingerprint', canBeUndefined: true },
    open_type: { type: 'string', canBeUndefined: true },
    proxy: { type: 'object', objectRef: 'Proxy', canBeUndefined: true },
    response: { type: 'string', canBeUndefined: true },
    share: { type: 'string', canBeUndefined: true },
    share_type: { type: 'string', canBeUndefined: true },
    share_type_id: { type: 'number', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    tls: { type: 'object', objectRef: 'Tls', canBeUndefined: true },
    traffic: { type: 'object', objectRef: 'Traffic', canBeUndefined: true },
    tree_uid: { type: 'string', canBeUndefined: true },
  },
  SshActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: SshActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    app_name: { type: 'string', canBeUndefined: true },
    auth_type: { type: 'string', canBeUndefined: true },
    auth_type_id: { type: 'enum', enumRef: SshAuthTypeId, canBeUndefined: true },
    client_hassh: { type: 'object', objectRef: 'SshClientHassh', canBeUndefined: true },
    connection_info: { type: 'object', objectRef: 'ConnectionInfo', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    file: { type: 'object', objectRef: 'File', canBeUndefined: true },
    ja4_fingerprint_list: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Ja4Fingerprint', canBeUndefined: true },
    protocol_ver: { type: 'string', canBeUndefined: true },
    proxy: { type: 'object', objectRef: 'Proxy', canBeUndefined: true },
    server_hassh: { type: 'object', objectRef: 'SshServerHassh', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    tls: { type: 'object', objectRef: 'Tls', canBeUndefined: true },
    traffic: { type: 'object', objectRef: 'Traffic', canBeUndefined: true },
  },
  TunnelActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: TunnelActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    app_name: { type: 'string', canBeUndefined: true },
    connection_info: { type: 'object', objectRef: 'ConnectionInfo', canBeUndefined: true },
    device: { type: 'object', objectRef: 'Device', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    ja4_fingerprint_list: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Ja4Fingerprint', canBeUndefined: true },
    protocol_name: { type: 'string', canBeUndefined: true },
    proxy: { type: 'object', objectRef: 'Proxy', canBeUndefined: true },
    session: { type: 'object', objectRef: 'Session', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    tls: { type: 'object', objectRef: 'Tls', canBeUndefined: true },
    traffic: { type: 'object', objectRef: 'Traffic', canBeUndefined: true },
    tunnel_interface: { type: 'object', objectRef: 'TunnelInterface', canBeUndefined: true },
    tunnel_type: { type: 'string', canBeUndefined: true },
    tunnel_type_id: { type: 'enum', enumRef: TunnelTypeId, canBeUndefined: true },
    user: { type: 'object', objectRef: 'User', canBeUndefined: true },
  },
  RemediationActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: RemediationActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    command_uid: { type: 'string', canBeUndefined: true },
    countermeasures: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Countermeasure', canBeUndefined: true },
    remediation: { type: 'object', objectRef: 'Remediation', canBeUndefined: true },
    scan: { type: 'object', objectRef: 'RemediationScan', canBeUndefined: true },
    status_id: { type: 'enum', enumRef: RemediationStatusId, canBeUndefined: true },
  },
  FileRemediationActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: RemediationActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    command_uid: { type: 'string', canBeUndefined: true },
    countermeasures: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Countermeasure', canBeUndefined: true },
    file: { type: 'object', objectRef: 'File', canBeUndefined: true },
    remediation: { type: 'object', objectRef: 'Remediation', canBeUndefined: true },
    scan: { type: 'object', objectRef: 'RemediationScan', canBeUndefined: true },
    status_id: { type: 'enum', enumRef: RemediationStatusId, canBeUndefined: true },
  },
  ProcessRemediationActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: RemediationActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    command_uid: { type: 'string', canBeUndefined: true },
    countermeasures: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Countermeasure', canBeUndefined: true },
    process: { type: 'object', objectRef: 'Process', canBeUndefined: true },
    remediation: { type: 'object', objectRef: 'Remediation', canBeUndefined: true },
    scan: { type: 'object', objectRef: 'RemediationScan', canBeUndefined: true },
    status_id: { type: 'enum', enumRef: RemediationStatusId, canBeUndefined: true },
  },
  NetworkRemediationActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: RemediationActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    command_uid: { type: 'string', canBeUndefined: true },
    connection_info: { type: 'object', objectRef: 'ConnectionInfo', canBeUndefined: true },
    countermeasures: { type: 'array', arrayElementType: 'object', arrayObjectRef: 'Countermeasure', canBeUndefined: true },
    remediation: { type: 'object', objectRef: 'Remediation', canBeUndefined: true },
    scan: { type: 'object', objectRef: 'RemediationScan', canBeUndefined: true },
    status_id: { type: 'enum', enumRef: RemediationStatusId, canBeUndefined: true },
  },
  DroneFlightsActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: DroneFlightsActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    auth_protocol: { type: 'string', canBeUndefined: true },
    auth_protocol_id: { type: 'enum', enumRef: DroneFlightsAuthProtocolId, canBeUndefined: true },
    classification: { type: 'string', canBeUndefined: true },
    comment: { type: 'string', canBeUndefined: true },
    connection_info: { type: 'object', objectRef: 'ConnectionInfo', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    protocol_name: { type: 'string', canBeUndefined: true },
    proxy_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    status: { type: 'string', canBeUndefined: true },
    status_id: { type: 'enum', enumRef: DroneFlightsStatusId, canBeUndefined: true },
    tls: { type: 'object', objectRef: 'Tls', canBeUndefined: true },
    traffic: { type: 'object', objectRef: 'Traffic', canBeUndefined: true },
    unmanned_aerial_system: { type: 'object', objectRef: 'UnmannedAerialSystem', canBeUndefined: true },
    unmanned_system_operating_area: { type: 'object', objectRef: 'UnmannedSystemOperatingArea', canBeUndefined: true },
    unmanned_system_operator: { type: 'object', objectRef: 'UnmannedSystemOperator', canBeUndefined: true },
  },
  AirborneBroadcastActivity: {
    class_uid: { type: 'number' },
    class_name: { type: 'string' },
    activity_id: { type: 'enum', enumRef: AirborneBroadcastActivityId, canBeUndefined: true },
    activity_name: { type: 'string', canBeUndefined: true },
    aircraft: { type: 'object', objectRef: 'Aircraft', canBeUndefined: true },
    connection_info: { type: 'object', objectRef: 'ConnectionInfo', canBeUndefined: true },
    dst_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    protocol_name: { type: 'string', canBeUndefined: true },
    proxy_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    rssi: { type: 'number', canBeUndefined: true },
    src_endpoint: { type: 'object', objectRef: 'Endpoint', canBeUndefined: true },
    tls: { type: 'object', objectRef: 'Tls', canBeUndefined: true },
    traffic: { type: 'object', objectRef: 'Traffic', canBeUndefined: true },
    unmanned_aerial_system: { type: 'object', objectRef: 'UnmannedAerialSystem', canBeUndefined: true },
    unmanned_system_operating_area: { type: 'object', objectRef: 'UnmannedSystemOperatingArea', canBeUndefined: true },
    unmanned_system_operator: { type: 'object', objectRef: 'UnmannedSystemOperator', canBeUndefined: true },
  },
};
