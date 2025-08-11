import * as OCSF from '@models/ocsf';

export class OcsfFactory {
    public static createEventFromObject(obj: any): OCSF.OcsfEvent | null {
        const classUid = typeof obj.class_uid === 'string' ? parseInt(obj.class_uid, 10) : obj.class_uid;
        if (!obj || typeof classUid !== 'number' || isNaN(classUid)) { return null; }
        const cleanObj = { ...obj, class_uid: classUid };
        try {
            // Instantiate the correct class based on class_uid.
            switch (classUid) {
                case OCSF.OcsfClassUid.FILE_SYSTEM_ACTIVITY: return new OCSF.FileSystemActivity(cleanObj);
                case OCSF.OcsfClassUid.MEMORY_ACTIVITY: return new OCSF.MemoryActivity(cleanObj);
                case OCSF.OcsfClassUid.MODULE_ACTIVITY: return new OCSF.ModuleActivity(cleanObj);
                case OCSF.OcsfClassUid.SCHEDULED_JOB_ACTIVITY: return new OCSF.ScheduledJobActivity(cleanObj);
                case OCSF.OcsfClassUid.PROCESS_ACTIVITY: return new OCSF.ProcessActivity(cleanObj);
                case OCSF.OcsfClassUid.SECURITY_FINDING: return new OCSF.SecurityFinding(cleanObj);
                case OCSF.OcsfClassUid.VULNERABILITY_FINDING: return new OCSF.VulnerabilityFinding(cleanObj);
                case OCSF.OcsfClassUid.ACCOUNT_CHANGE: return new OCSF.AccountChange(cleanObj);
                case OCSF.OcsfClassUid.AUTHENTICATION: return new OCSF.Authentication(cleanObj);
                case OCSF.OcsfClassUid.GROUP_MANAGEMENT: return new OCSF.GroupManagement(cleanObj);
                case OCSF.OcsfClassUid.NETWORK_ACTIVITY: return new OCSF.NetworkActivity(cleanObj);
                case OCSF.OcsfClassUid.HTTP_ACTIVITY: return new OCSF.HttpActivity(cleanObj);
                case OCSF.OcsfClassUid.DNS_ACTIVITY: return new OCSF.DnsActivity(cleanObj);
                case OCSF.OcsfClassUid.API_ACTIVITY: return new OCSF.ApiActivity(cleanObj);
                case OCSF.OcsfClassUid.APPLICATION_LIFECYCLE: return new OCSF.ApplicationLifecycle(cleanObj);
                case OCSF.OcsfClassUid.DEVICE_INVENTORY_INFO: return new OCSF.DeviceInventoryInfo(cleanObj);
                case OCSF.OcsfClassUid.USER_INVENTORY: return new OCSF.UserInventory(cleanObj);
                case OCSF.OcsfClassUid.SOFTWARE_INFO: return new OCSF.SoftwareInfo(cleanObj);
                case OCSF.OcsfClassUid.COMPLIANCE_FINDING: return new OCSF.ComplianceFinding(cleanObj);
                case OCSF.OcsfClassUid.DETECTION_FINDING: return new OCSF.DetectionFinding(cleanObj);
                case OCSF.OcsfClassUid.KERNEL_EXTENSION_ACTIVITY: return new OCSF.KernelExtensionActivity(cleanObj);
                case OCSF.OcsfClassUid.EVENT_LOG_ACTIVITY: return new OCSF.EventLogActivity(cleanObj);
                case OCSF.OcsfClassUid.SCRIPT_ACTIVITY: return new OCSF.ScriptActivity(cleanObj);
                case OCSF.OcsfClassUid.RDP_ACTIVITY: return new OCSF.RdpActivity(cleanObj);
                case OCSF.OcsfClassUid.WEB_RESOURCE_ACCESS_ACTIVITY: return new OCSF.WebResourceAccessActivity(cleanObj);
                case OCSF.OcsfClassUid.DEVICE_CONFIG_STATE: return new OCSF.DeviceConfigState(cleanObj);
                case OCSF.OcsfClassUid.PATCH_STATE: return new OCSF.PatchState(cleanObj);
                case OCSF.OcsfClassUid.SMB_ACTIVITY: return new OCSF.SmbActivity(cleanObj);
                case OCSF.OcsfClassUid.FTP_ACTIVITY: return new OCSF.FtpActivity(cleanObj);
                case OCSF.OcsfClassUid.EMAIL_ACTIVITY: return new OCSF.EmailActivity(cleanObj);
                case OCSF.OcsfClassUid.SSH_ACTIVITY: return new OCSF.SshActivity(cleanObj);
                case OCSF.OcsfClassUid.TUNNEL_ACTIVITY: return new OCSF.TunnelActivity(cleanObj);
                case OCSF.OcsfClassUid.NETWORK_FILE_ACTIVITY: return new OCSF.NetworkFileActivity(cleanObj);
                case OCSF.OcsfClassUid.FILE_REMEDIATION_ACTIVITY: return new OCSF.FileRemediationActivity(cleanObj);
                case OCSF.OcsfClassUid.PROCESS_REMEDIATION_ACTIVITY: return new OCSF.ProcessRemediationActivity(cleanObj);
                case OCSF.OcsfClassUid.EMAIL_FILE_ACTIVITY: return new OCSF.EmailFileActivity(cleanObj);
                case OCSF.OcsfClassUid.EMAIL_URL_ACTIVITY: return new OCSF.EmailUrlActivity(cleanObj);
                case OCSF.OcsfClassUid.NTP_ACTIVITY: return new OCSF.NtpActivity(cleanObj);
                case OCSF.OcsfClassUid.AUTHORIZE_SESSION: return new OCSF.AuthorizeSession(cleanObj);
                case OCSF.OcsfClassUid.USER_ACCESS_MANAGEMENT: return new OCSF.UserAccessManagement(cleanObj);
                case OCSF.OcsfClassUid.FILE_QUERY: return new OCSF.FileQuery(cleanObj);
                case OCSF.OcsfClassUid.FOLDER_QUERY: return new OCSF.FolderQuery(cleanObj);
                case OCSF.OcsfClassUid.PROCESS_QUERY: return new OCSF.ProcessQuery(cleanObj);
                case OCSF.OcsfClassUid.SERVICE_QUERY: return new OCSF.ServiceQuery(cleanObj);
                case OCSF.OcsfClassUid.MODULE_QUERY: return new OCSF.ModuleQuery(cleanObj);
                case OCSF.OcsfClassUid.NETWORK_CONNECTION_QUERY: return new OCSF.NetworkConnectionQuery(cleanObj);
                case OCSF.OcsfClassUid.USER_QUERY: return new OCSF.UserQuery(cleanObj);
                case OCSF.OcsfClassUid.JOB_QUERY: return new OCSF.JobQuery(cleanObj);
                case OCSF.OcsfClassUid.DATASTORE_ACTIVITY: return new OCSF.DatastoreActivity(cleanObj);
                case OCSF.OcsfClassUid.INCIDENT_FINDING: return new OCSF.IncidentFinding(cleanObj);
                case OCSF.OcsfClassUid.DATA_SECURITY_FINDING: return new OCSF.DataSecurityFinding(cleanObj);
                case OCSF.OcsfClassUid.APPLICATION_SECURITY_POSTURE_FINDING: return new OCSF.ApplicationSecurityPostureFinding(cleanObj);
                case OCSF.OcsfClassUid.SCAN_ACTIVITY: return new OCSF.ScanActivity(cleanObj);
                case OCSF.OcsfClassUid.APPLICATION_ERROR: return new OCSF.ApplicationError(cleanObj);
                case OCSF.OcsfClassUid.OSINT_INVENTORY_INFO: return new OCSF.OsintInventoryInfo(cleanObj);
                case OCSF.OcsfClassUid.CLOUD_RESOURCES_INVENTORY_INFO: return new OCSF.CloudResourcesInventoryInfo(cleanObj);
                case OCSF.OcsfClassUid.REMEDIATION_ACTIVITY: return new OCSF.RemediationActivity(cleanObj);
                case OCSF.OcsfClassUid.NETWORK_REMEDIATION_ACTIVITY: return new OCSF.NetworkRemediationActivity(cleanObj);
                case OCSF.OcsfClassUid.DHCP_ACTIVITY: return new OCSF.DhcpActivity(cleanObj);
                case OCSF.OcsfClassUid.KERNEL_ACTIVITY: return new OCSF.KernelActivity(cleanObj);

                default:
                    const BaseEvent = class extends OCSF.OcsfEvent { constructor() { super(classUid); } };
                    return Object.assign(new BaseEvent(), cleanObj);
            }
        } catch (error) {
            console.error(`Error creating OCSF event for class_uid ${classUid}:`, error, cleanObj);
            return null;
        }
    }
}
