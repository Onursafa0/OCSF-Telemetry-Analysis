// Category and Severity Level
export enum OcsfSeverityId { UNKNOWN = 0, INFORMATIONAL = 1, LOW = 2, MEDIUM = 3, HIGH = 4, CRITICAL = 5, FATAL = 6 }
export enum OcsfCategoryUid { SYSTEM_ACTIVITY = 1, FINDINGS = 2, IAM = 3, NETWORK_ACTIVITY = 4, DISCOVERY = 5, APPLICATION_ACTIVITY = 6, REMEDIATION_ACTIVITY = 7, UNMANNED_SYSTEMS = 8, UNKNOWN = 99 }

export enum OcsfClassUid {
    // System Activity [1]
    FILE_SYSTEM_ACTIVITY = 1001,
    KERNEL_EXTENSION_ACTIVITY = 1002,
    KERNEL_ACTIVITY = 1003,
    MEMORY_ACTIVITY = 1004,
    MODULE_ACTIVITY = 1005,
    SCHEDULED_JOB_ACTIVITY = 1006,
    PROCESS_ACTIVITY = 1007,
    EVENT_LOG_ACTIVITY = 1008,
    SCRIPT_ACTIVITY = 1009,

    // Findings [2]
    VULNERABILITY_FINDING = 2002,
    COMPLIANCE_FINDING = 2003,
    DETECTION_FINDING = 2004,
    INCIDENT_FINDING = 2005,
    DATA_SECURITY_FINDING = 2006,
    APPLICATION_SECURITY_POSTURE_FINDING = 2007,
    SECURITY_FINDING = 2001,

    // Identity & Access Management (IAM) [3]
    ACCOUNT_CHANGE = 3001,
    AUTHENTICATION = 3002,
    AUTHORIZE_SESSION = 3003,
    ENTITY_MANAGEMENT = 3004,
    USER_ACCESS_MANAGEMENT = 3005,
    GROUP_MANAGEMENT = 3006,

    // Network Activity [4]
    NETWORK_ACTIVITY = 4001,
    HTTP_ACTIVITY = 4002,
    DNS_ACTIVITY = 4003,
    DHCP_ACTIVITY = 4004,
    RDP_ACTIVITY = 4005,
    SMB_ACTIVITY = 4006,
    SSH_ACTIVITY = 4007,
    FTP_ACTIVITY = 4008,
    EMAIL_ACTIVITY = 4009,
    NTP_ACTIVITY = 4013,
    TUNNEL_ACTIVITY = 4014,
    NETWORK_FILE_ACTIVITY = 4010,
    EMAIL_FILE_ACTIVITY = 4011,
    EMAIL_URL_ACTIVITY = 4012,

    // Discovery [5]
    DEVICE_INVENTORY_INFO = 5001,
    USER_INVENTORY = 5003,
    OPERATING_SYSTEM_PATCH_STATE = 5004,
    DEVICE_CONFIG_STATE_CHANGE = 5019,
    SOFTWARE_INVENTORY_INFO = 5020,
    OSINT_INVENTORY_INFO = 5021,
    CLOUD_RESOURCES_INVENTORY_INFO = 5023,
    LIVE_EVIDENCE_INFO = 5040,
    DEVICE_CONFIG_STATE = 5002,
    PATCH_STATE = 5004,
    SOFTWARE_INFO = 5020,
    FILE_QUERY = 5006,
    FOLDER_QUERY = 5007,
    JOB_QUERY = 5008,
    MODULE_QUERY = 5009,
    NETWORK_CONNECTION_QUERY = 5010,
    PROCESS_QUERY = 5011,
    SERVICE_QUERY = 5012,
    USER_QUERY = 5013,

    // Application Activity [6]
    WEB_RESOURCES_ACTIVITY = 6001,
    APPLICATION_LIFECYCLE = 6002,
    API_ACTIVITY = 6003,
    DATASTORE_ACTIVITY = 6005,
    FILE_HOSTING_ACTIVITY = 6006,
    SCAN_ACTIVITY = 6007,
    APPLICATION_ERROR = 6008,
    WEB_RESOURCE_ACCESS_ACTIVITY = 6004,

    // Remediation [7]
    REMEDIATION_ACTIVITY = 7001,
    FILE_REMEDIATION_ACTIVITY = 7002,
    PROCESS_REMEDIATION_ACTIVITY = 7003,
    NETWORK_REMEDIATION_ACTIVITY = 7004,

    // Unmanned Systems [8]
    DRONE_FLIGHTS_ACTIVITY = 8001,
    AIRBORNE_BROADCAST_ACTIVITY = 8002,
}


export enum FindingActivityId { CREATE = 1, UPDATE = 2, CLOSE = 3 }
export enum FindingStatusId { UNKNOWN = 0, NEW = 1, IN_PROGRESS = 2, SUPPRESSED = 3, RESOLVED = 4, OTHER = 99 }
export enum ConfidenceId { UNKNOWN = 0, LOW = 1, MEDIUM = 2, HIGH = 3, CRITICAL = 4 }
export enum ImpactId { UNKNOWN = 0, LOW = 1, MEDIUM = 2, HIGH = 3, CRITICAL = 4 }
export enum KillChainPhaseId { UNKNOWN = 0, RECONNAISSANCE = 1, WEAPONIZATION = 2, DELIVERY = 3, EXPLOITATION = 4, INSTALLATION = 5, COMMAND_AND_CONTROL = 6, ACTIONS_ON_OBJECTIVES = 7, EXECUTION = 8 }
export enum RemediationStatusId { UNKNOWN = 0, APPLIED = 1, PENDING = 2, FAILED = 3, DOES_NOT_EXIST = 4, UNSUPPORTED = 5, ERROR = 6, PARTIAL = 7 }
export enum ScanActivityId { STARTED = 1, COMPLETED = 2, CANCELLED = 3, DURATION_VIOLATION = 4, PAUSE_VIOLATION = 5, ERROR = 6, PAUSED = 7, RESUMED = 8, RESTARTED = 9, DELAYED = 10 }
export enum IncidentFindingStatusId { NEW = 1, IN_PROGRESS = 2, ON_HOLD = 3, RESOLVED = 4, CLOSED = 5 }
export enum FileSystemActivityId { CREATE = 1, READ = 2, UPDATE = 3, DELETE = 4, RENAME = 5 }
export enum ProcessActivityId { LAUNCH = 1, TERMINATE = 2, INJECT = 4 }
export enum AuthenticationActivityId { LOGON = 1, LOGOFF = 2 }
export enum NetworkActivityId { CONNECT = 1, DISCONNECT = 2, DATA_IN = 3, DATA_OUT = 4 }
export enum HttpActivityId { REQUEST = 1, RESPONSE = 2 }
export enum DnsActivityId { QUERY = 1, RESPONSE = 2 }
export enum ApiActivityId { CREATE = 1, READ = 2, UPDATE = 3, DELETE = 4 }
export enum ApplicationLifecycleActivityId { INSTALL = 1, REMOVE = 2, START = 3, STOP = 4, UPDATE = 8 }
export enum MemoryActivityId { READ = 1, WRITE = 2, ALLOCATE = 3 }
export enum ModuleActivityId { LOAD = 1, UNLOAD = 2 }
export enum ScheduledJobActivityId { CREATE = 1, ENABLE = 2, DISABLE = 3, DELETE = 4, RUN = 5 }
export enum AccountChangeActivityId { CREATE = 1, ENABLE = 2, PASSWORD_CHANGE = 3, DISABLE = 5, DELETE = 6, LOCK = 9, UNLOCK = 12 }
export enum GroupManagementActivityId { ADD_USER = 3, REMOVE_USER = 4, CREATE = 6, DELETE = 5 }
export enum KernelExtensionActivityId { LOAD = 1, UNLOAD = 2 }
export enum EventLogActivityId { CLEAR = 1, EXPORT = 3, RESTART = 8 }
export enum ScriptActivityId { EXECUTE = 1 }
export enum RdpActivityId { CONNECT = 1, DISCONNECT = 7 }
export enum WebResourceAccessActivityId { ALLOW = 1, DENY = 2, ACTION_UNKNOWN = 99 }
export enum SmbActivityId { READ = 1, WRITE = 2, CREATE = 3, DELETE = 4, OPEN = 7 }
export enum FtpActivityId { GET = 1, PUT = 2, DELETE = 4, LIST = 6 }
export enum EmailActivityId { SEND = 1, RECEIVE = 2, SCAN = 3 }
export enum SshActivityId { OPEN = 1, CLOSE = 2, FAIL = 4 }
export enum TunnelActivityId { OPEN = 1, CLOSE = 2, RENEW = 3 }
export enum NetworkFileActivityId { UPLOAD = 1, DOWNLOAD = 2, UPDATE = 3, DELETE = 4, RENAME = 5 }
export enum EmailFileActivityId { SEND = 1, RECEIVE = 2, SCAN = 3 }
export enum EmailUrlActivityId { SEND = 1, RECEIVE = 2, SCAN = 3 }
export enum NtpActivityId { SYNC = 3, CONTROL = 6 }
export enum AuthorizeSessionActivityId { ASSIGN_PRIVILEGES = 1, ASSIGN_GROUPS = 2 }
export enum UserAccessManagementActivityId { ASSIGN_PRIVILEGES = 1, REVOKE_PRIVILEGES = 2 }
export enum RemediationActivityId { ISOLATE = 1, RESTORE = 3, HARDEN = 4, DETECT = 5 }
export enum DatastoreActivityId { READ = 1, UPDATE = 2, CONNECT = 3, QUERY = 4, WRITE = 5, CREATE = 6, DELETE = 7 }
export enum KernelActivityId { CREATE = 1, READ = 2, DELETE = 3, INVOKE = 4 }
export enum EntityManagementActivityId { CREATE = 1, UPDATE = 3, DELETE = 4, ENABLE = 8, DISABLE = 9 }
export enum FileHostingActivityId { UPLOAD = 1, DOWNLOAD = 2, DELETE = 4, SHARE = 12 }
export enum DhcpActivityId { DISCOVER = 1, OFFER = 2, REQUEST = 3, DECLINE = 4, ACK = 5, NAK = 6, RELEASE = 7, INFORM = 8, EXPIRE = 9 }
