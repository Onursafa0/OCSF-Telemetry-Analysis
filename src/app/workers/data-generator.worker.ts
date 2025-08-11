/// <reference lib="webworker" />
import * as OCSF from '@models/ocsf';

// --- Helper Functions ---
function getRandomEnum<T extends object>(anEnum: T): T[keyof T] {
  const enumValues = Object.values(anEnum).filter(v => typeof v === 'number') as T[keyof T][];
  if (enumValues.length === 0) return 0 as T[keyof T];
  return enumValues[Math.floor(Math.random() * enumValues.length)];
}
function getRandomArrayElement<T>(arr: T[]): T {
  if (!arr || arr.length === 0) return null as T;
  return arr[Math.floor(Math.random() * arr.length)];
}
function generateRandomIp(isInternal: boolean = false): string {
    if (isInternal) {
        const prefix = ['192.168.1', '10.0.0', '172.16.0'];
        return `${getRandomArrayElement(prefix)}.${Math.floor(Math.random() * 254) + 1}`;
    }
    return `${Math.floor(Math.random() * 254) + 1}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 254) + 1}`;
}
function generateRandomGuid(): string { return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = (Math.random() * 16) | 0; const v = c === 'x' ? r : (r & 0x3) | 0x8; return v.toString(16); }); }
function generateRandomHash(length: number): string { const c = 'abcdef0123456789'; return Array.from({ length }, () => c[Math.floor(Math.random() * c.length)]).join(''); }
function generateRandomTimestamp(): string { return new Date(Date.now() - Math.random() * 1000000000).toISOString(); }

// --- Enriched Data Pool ---
const USER_NAMES = ['onur.aygun', 'ayse.yilmaz', 'mehmet.demir', 'fatma.celik', 'ali.turan', 'zeynep.ates', 'can.erkin', 'guest', 'testuser', 'support', 'admin', 'service_account'];
const DOMAINS = ['CORP', 'DEV', 'TEST', 'EXTERNAL', 'WORKGROUP'];
const DEVICE_NAMES = ['DESKTOP-ONUR', 'LAPTOP-AYSE', 'DC01', 'WEBSRV01', 'SQLSRV02', 'FW-MAIN', 'DEV-MACHINE', 'TEST-PC', 'KUBERNETES-NODE-1', 'PRINTER-LOBBY'];
const OS_NAMES = [{ name: 'Windows 11' }, { name: 'Windows Server 2022' }, { name: 'Ubuntu 22.04' }, { name: 'macOS Sonoma' }, { name: 'CentOS 9' }];
const COMMON_PROCESSES = ['explorer.exe', 'svchost.exe', 'chrome.exe', 'powershell.exe', 'winword.exe', 'bash', 'sshd', 'code.exe', 'docker', 'kubelet'];
const MALICIOUS_PROCESSES = ['ransomware.exe', 'mimikatz.exe', 'keylogger.dll', 'revshell.ps1', 'bad.sh', 'cve-2023-exploit.exe'];
const FILE_NAMES = ['document.docx', 'report.xlsx', 'presentation.pptx', 'archive.zip', 'config.json', 'secret_data.csv', 'backup.sql', 'app.log', 'access.log', 'id_rsa'];
const MALWARE_FAMILIES = [{ name: 'Emotet', family: 'Trojan' }, { name: 'WannaCry', family: 'Ransomware' }, { name: 'Cobalt Strike', family: 'C2 Framework' }, { name: 'AgentTesla', family: 'RAT' }, { name: 'Mirai', family: 'Botnet'}];
const C2_IPS = ['1.2.3.4', '8.8.4.4', '104.21.5.196', '123.45.67.89', '98.76.54.32'];
const PHISHING_DOMAINS = ['microsft-login.com', 'paypa1.com', 'your-bank-secure.net', 'google-support.org', 'turkiye-gov.net'];
const CVE_IDS = ['CVE-2021-44228', 'CVE-2023-38831', 'CVE-2020-0796', 'CVE-2017-0199'];
const VULNERABILITY_NAMES = ['Log4Shell', 'WinRAR Code Execution', 'SMBGhost', 'Microsoft Office RTF RCE'];
const API_SERVICES = ['Microsoft Graph API', 'AWS S3 API', 'Stripe API', 'GitHub API'];
const API_OPERATIONS = ['GetUser', 'ListBuckets', 'CreateCharge', 'GetRepository'];
const APP_NAMES = ['Microsoft Office 365', 'Adobe Photoshop', 'Slack', 'Docker Desktop', 'Visual Studio Code'];
const URLS = ['https://google.com/search?q=ocsf', 'https://github.com/ocsf', 'https://example.com/api/v1/users', 'https://internal.corp/dashboard'];
const DOMAINS_FOR_DNS = ['google.com', 'github.com', 'cloudflare.com', 'microsoft.com', 'example.com', 'baddomain.ru'];

// --- NEWLY ADDED MAPS ---
const SEVERITY_MAP: { [key: number]: string } = {
    [OCSF.OcsfSeverityId.UNKNOWN]: 'Unknown',
    [OCSF.OcsfSeverityId.INFORMATIONAL]: 'Informational',
    [OCSF.OcsfSeverityId.LOW]: 'Low',
    [OCSF.OcsfSeverityId.MEDIUM]: 'Medium',
    [OCSF.OcsfSeverityId.HIGH]: 'High',
    [OCSF.OcsfSeverityId.CRITICAL]: 'Critical',
    [OCSF.OcsfSeverityId.FATAL]: 'Fatal',
};

const CATEGORY_MAP: { [key: number]: { uid: OCSF.OcsfCategoryUid, name: string } } = {
    1: { uid: OCSF.OcsfCategoryUid.SYSTEM_ACTIVITY, name: 'System Activity' },
    2: { uid: OCSF.OcsfCategoryUid.FINDINGS, name: 'Findings' },
    3: { uid: OCSF.OcsfCategoryUid.IAM, name: 'Identity & Access Management' },
    4: { uid: OCSF.OcsfCategoryUid.NETWORK_ACTIVITY, name: 'Network Activity' },
    5: { uid: OCSF.OcsfCategoryUid.DISCOVERY, name: 'Discovery' },
    6: { uid: OCSF.OcsfCategoryUid.APPLICATION_ACTIVITY, name: 'Application Activity' },
    7: { uid: OCSF.OcsfCategoryUid.REMEDIATION_ACTIVITY, name: 'Remediation' },
    8: { uid: OCSF.OcsfCategoryUid.UNMANNED_SYSTEMS, name: 'Unmanned Systems' },
    99: { uid: OCSF.OcsfCategoryUid.UNKNOWN, name: 'Unknown' }
};

function getCategoryForClass(classUid: OCSF.OcsfClassUid): { uid: OCSF.OcsfCategoryUid, name: string } {
    const categoryId = Math.floor(classUid / 1000);
    return CATEGORY_MAP[categoryId] || CATEGORY_MAP[99];
}

// --- Generation Context (Common for Scenario and Class Generation) ---
class GenerationContext {
    users: OCSF.User[] = [];
    processes: OCSF.Process[] = [];
    files: OCSF.File[] = [];
    devices: OCSF.Device[] = [];
    malware: OCSF.Malware[] = [];
    vulnerabilities: OCSF.Vulnerability[] = [];

    constructor() {
        for (let i = 0; i < 10; i++) {
            this.users.push({ name: getRandomArrayElement(USER_NAMES), uid: generateRandomGuid(), domain: getRandomArrayElement(DOMAINS) });
            this.devices.push({ uid: generateRandomGuid(), ip_address: generateRandomIp(true), name: getRandomArrayElement(DEVICE_NAMES), os: getRandomArrayElement(OS_NAMES) });
            this.processes.push({ pid: Math.floor(1000 + Math.random() * 9000), name: getRandomArrayElement(COMMON_PROCESSES), uid: generateRandomGuid() });
            this.malware.push(getRandomArrayElement(MALWARE_FAMILIES));
            this.vulnerabilities.push({ cve_id: getRandomArrayElement(CVE_IDS), cvss_score: +(Math.random() * 10).toFixed(1) });
        }
    }

    getRandomUser = () => getRandomArrayElement(this.users);
    getRandomProcess = () => getRandomArrayElement(this.processes);
    getRandomFile = () => getRandomArrayElement(this.files) || this.createFile(getRandomArrayElement(FILE_NAMES));
    getRandomDevice = () => getRandomArrayElement(this.devices);
    getRandomMalware = () => getRandomArrayElement(this.malware);
    getRandomVulnerability = () => getRandomArrayElement(this.vulnerabilities);
    
    spawnProcess(name: string, parent?: OCSF.Process, device?: OCSF.Device): OCSF.Process {
        const p = parent || this.getRandomProcess();
        const d = device || this.getRandomDevice();
        const newProc: OCSF.Process = { pid: Math.floor(Math.random() * 65535), name, uid: generateRandomGuid(), parent_process: p };
        this.processes.push(newProc);
        return newProc;
    }
    
    createFile(name: string, user?: OCSF.User): OCSF.File {
        const u = user || this.getRandomUser();
        const userName = u.name || 'DefaultUser';
        const newFile: OCSF.File = { file_name: name, file_path: `C:\\Users\\${userName}\\Documents\\${name}`, hash: { sha1: generateRandomHash(40), md5: generateRandomHash(32) }, owner: u };
        this.files.push(newFile);
        return newFile;
    }
    
    getActor(process?: OCSF.Process, user?: OCSF.User, device?: OCSF.Device): OCSF.Actor {
        return { 
            user: user || this.getRandomUser(), 
            process: process || this.getRandomProcess(), 
            device: device || this.getRandomDevice() 
        };
    }
}

// --- Single Event Generation ---
function createSingleEvent(classUid: number, context: GenerationContext): OCSF.OcsfEvent {
    let event: OCSF.OcsfEvent;
    const actor = context.getActor();
    const device = actor.device || context.getRandomDevice();
    const user = actor.user || context.getRandomUser();
    const process = actor.process || context.getRandomProcess();
    
    const src_endpoint: OCSF.Endpoint = { ip_address: device.ip_address, port: Math.floor(1024 + Math.random() * 64511), name: device.name };
    const dst_endpoint: OCSF.Endpoint = { ip_address: generateRandomIp(), port: getRandomArrayElement([80, 443, 22, 3389, 53]) };

    const commonFindingProperties = {
        confidence: getRandomArrayElement(['Low', 'Medium', 'High', 'Critical']),
        status: 'New',
        actor,
        device
    };

    switch (classUid) {
        // --- System Activity [1] ---
        case OCSF.OcsfClassUid.FILE_SYSTEM_ACTIVITY:
            event = new OCSF.FileSystemActivity({ activity_id: getRandomEnum(OCSF.FileSystemActivityId), actor, file: context.createFile(getRandomArrayElement(FILE_NAMES), user) });
            break;
        case OCSF.OcsfClassUid.PROCESS_ACTIVITY:
            event = new OCSF.ProcessActivity({ activity_id: getRandomEnum(OCSF.ProcessActivityId), actor, process: context.spawnProcess(getRandomArrayElement(COMMON_PROCESSES), process) });
            break;
        case OCSF.OcsfClassUid.MODULE_ACTIVITY:
            event = new OCSF.ModuleActivity({ activity_id: getRandomEnum(OCSF.ModuleActivityId), actor, module: { name: 'kernel32.dll' } });
            break;
        case OCSF.OcsfClassUid.SCHEDULED_JOB_ACTIVITY:
            event = new OCSF.ScheduledJobActivity({ activity_id: getRandomEnum(OCSF.ScheduledJobActivityId), actor, job: { name: 'System Backup', command: 'wbadmin start backup -allcritical' } });
            break;
        case OCSF.OcsfClassUid.SCRIPT_ACTIVITY:
            event = new OCSF.ScriptActivity({ activity_id: OCSF.ScriptActivityId.EXECUTE, actor, script: { name: 'cleanup.ps1', hash: { sha256: generateRandomHash(64) } } });
            break;

        // --- Findings [2] ---
        case OCSF.OcsfClassUid.SECURITY_FINDING:
        case OCSF.OcsfClassUid.DETECTION_FINDING:
            const finding = new OCSF.DetectionFinding({ ...commonFindingProperties, finding_info: { finding_name: 'Malware Detected' } });
            (finding as any).malware = [context.getRandomMalware()];
            (finding as any).attacks = [{ technique_id: 'T1059.003', technique: 'Execution via Command and Scripting Interpreter' }];
            event = finding;
            break;
        case OCSF.OcsfClassUid.VULNERABILITY_FINDING:
            event = new OCSF.VulnerabilityFinding({ ...commonFindingProperties, vulnerabilities: [context.getRandomVulnerability()], finding_info: { finding_name: 'System Vulnerability Found' } });
            break;
        case OCSF.OcsfClassUid.COMPLIANCE_FINDING:
            event = new OCSF.ComplianceFinding({ ...commonFindingProperties, compliance: { standard: 'CIS', control: '1.1.1 - Ensure password complexity is enabled' } });
            break;

        // --- IAM [3] ---
        case OCSF.OcsfClassUid.AUTHENTICATION:
            event = new OCSF.Authentication({ activity_id: getRandomEnum(OCSF.AuthenticationActivityId), user, device });
            break;
        case OCSF.OcsfClassUid.ACCOUNT_CHANGE:
            event = new OCSF.AccountChange({ activity_id: getRandomEnum(OCSF.AccountChangeActivityId), actor, user: context.getRandomUser() });
            break;
        case OCSF.OcsfClassUid.GROUP_MANAGEMENT:
            event = new OCSF.GroupManagement({ activity_id: getRandomEnum(OCSF.GroupManagementActivityId), actor, user: context.getRandomUser(), group: { name: 'Domain Admins' } });
            break;
        
        // --- Network Activity [4] ---
        case OCSF.OcsfClassUid.NETWORK_ACTIVITY:
            event = new OCSF.NetworkActivity({ activity_id: getRandomEnum(OCSF.NetworkActivityId), actor, device, connection_info: { direction: 'Outbound' } });
            (event as any).dst_endpoint = dst_endpoint;
            (event as any).src_endpoint = src_endpoint;
            break;
        case OCSF.OcsfClassUid.HTTP_ACTIVITY:
            event = new OCSF.HttpActivity({ activity_id: getRandomEnum(OCSF.HttpActivityId), actor, device, http_request: { url: { full_url: getRandomArrayElement(URLS) }, method: 'GET' } as OCSF.HttpRequest });
            (event as any).dst_endpoint = dst_endpoint;
            (event as any).src_endpoint = src_endpoint;
            break;
        case OCSF.OcsfClassUid.DNS_ACTIVITY:
            event = new OCSF.DnsActivity({ activity_id: OCSF.DnsActivityId.QUERY, actor, device, query: { hostname: getRandomArrayElement(DOMAINS_FOR_DNS) } as OCSF.DnsQuery });
            (event as any).dst_endpoint = dst_endpoint;
            (event as any).src_endpoint = src_endpoint;
            break;
        case OCSF.OcsfClassUid.RDP_ACTIVITY:
            event = new OCSF.RdpActivity({ activity_id: getRandomEnum(OCSF.RdpActivityId), actor, device });
            (event as any).dst_endpoint = dst_endpoint;
            (event as any).src_endpoint = src_endpoint;
            break;
        case OCSF.OcsfClassUid.EMAIL_ACTIVITY:
            event = new OCSF.EmailActivity({ activity_id: OCSF.EmailActivityId.RECEIVE, actor, email: { from_address: 'sender@example.com', to_address: [user.email_addr || ''], subject: 'Test Email' } });
            break;
        
        // --- Application Activity [6] ---
        case OCSF.OcsfClassUid.API_ACTIVITY:
            event = new OCSF.ApiActivity({ activity_id: getRandomEnum(OCSF.ApiActivityId), actor, api: { service_name: getRandomArrayElement(API_SERVICES), operation: getRandomArrayElement(API_OPERATIONS) } });
            break;
        case OCSF.OcsfClassUid.APPLICATION_LIFECYCLE:
            event = new OCSF.ApplicationLifecycle({ activity_id: getRandomEnum(OCSF.ApplicationLifecycleActivityId), actor, app: { name: getRandomArrayElement(APP_NAMES), vendor: 'Various' } });
            break;

        // --- Default Case for Unimplemented Classes ---
        default:
            const BaseEvent = class extends OCSF.OcsfEvent { constructor() { super(classUid); } };
            event = new BaseEvent();
            (event as any).actor = actor;
            (event as any).device = device;
            event.message = `Data generation for class UID ${classUid} is not fully implemented.`;
            break;
    }

    // --- Category and Severity Assignment ---
    const randomSeverityId = getRandomEnum(OCSF.OcsfSeverityId);
    const categoryInfo = getCategoryForClass(classUid);

    event.severity_id = randomSeverityId;
    event.severity = SEVERITY_MAP[randomSeverityId];
    event.category_uid = categoryInfo.uid;
    event.category_name = categoryInfo.name;

    // Keep severity higher for Findings
    if (categoryInfo.uid === OCSF.OcsfCategoryUid.FINDINGS && randomSeverityId < OCSF.OcsfSeverityId.MEDIUM) {
        const highSeverityIds = [OCSF.OcsfSeverityId.MEDIUM, OCSF.OcsfSeverityId.HIGH, OCSF.OcsfSeverityId.CRITICAL, OCSF.OcsfSeverityId.FATAL];
        const findingSeverityId = getRandomArrayElement(highSeverityIds);
        event.severity_id = findingSeverityId;
        event.severity = SEVERITY_MAP[findingSeverityId];
    }

    event.time = generateRandomTimestamp();
    return event;
}

// --- Scenario Generators ---

function generateRansomwareScenario(count: number): OCSF.OcsfEvent[] {
    const context = new GenerationContext();
    const events: OCSF.OcsfEvent[] = [];
    const victimUser = context.getRandomUser();
    const victimDevice = context.getRandomDevice();
    const actor = context.getActor(undefined, victimUser, victimDevice);

    // 1. Phishing Email
    events.push(new OCSF.EmailActivity({ activity_id: OCSF.EmailActivityId.RECEIVE, actor, email: { from_address: 'hacker@evil.com', to_address: [victimUser.name || 'unknown.user'], subject: 'Urgent Invoice' } }));
    
    // 2. User opens attachment
    const attachment = context.createFile('invoice.zip', victimUser);
    events.push(new OCSF.FileSystemActivity({ activity_id: OCSF.FileSystemActivityId.CREATE, actor, file: attachment }));
    
    // 3. Malicious process starts
    const malwareProcess = context.spawnProcess(getRandomArrayElement(MALICIOUS_PROCESSES), actor.process, victimDevice);
    const malwareActor = context.getActor(malwareProcess, victimUser, victimDevice);
    events.push(new OCSF.ProcessActivity({ activity_id: OCSF.ProcessActivityId.LAUNCH, actor, process: malwareProcess }));

    // 4. C2 Communication
    events.push(new OCSF.NetworkActivity({ activity_id: OCSF.NetworkActivityId.CONNECT, actor: malwareActor, device: victimDevice, connection_info: { src_ip: victimDevice.ip_address, dst_ip: getRandomArrayElement(C2_IPS) } }));

    // 5. File Encryption
    const encryptionCount = Math.max(1, count - 4);
    for (let i = 0; i < encryptionCount; i++) {
        const fileToEncrypt = context.createFile(`document_${i}.docx`, victimUser);
        events.push(new OCSF.FileSystemActivity({ activity_id: OCSF.FileSystemActivityId.UPDATE, actor: malwareActor, file: fileToEncrypt }));
    }

    // 6. Detection
    const detectionEvent = new OCSF.DetectionFinding({ finding_info: { finding_name: 'Ransomware Detected' } });
    (detectionEvent as any).actor = malwareActor;
    (detectionEvent as any).device = victimDevice;
    events.push(detectionEvent);

    return events.map(e => { e.time = generateRandomTimestamp(); return e; }).slice(0, count);
}

function generatePhishingScenario(count: number): OCSF.OcsfEvent[] {
    const context = new GenerationContext();
    const events: OCSF.OcsfEvent[] = [];
    const victimUser = context.getRandomUser();
    const victimDevice = context.getRandomDevice();
    const actor = context.getActor(undefined, victimUser, victimDevice);
    const phishingUrl = `https://${getRandomArrayElement(PHISHING_DOMAINS)}/login`;

    // 1. Phishing Email Received
    events.push(new OCSF.EmailActivity({ activity_id: OCSF.EmailActivityId.RECEIVE, actor, email: { from_address: 'no-reply@trusted-looking.com', to_address: [victimUser.name || 'unknown.user'], subject: 'Action Required: Verify Your Account' } }));
    
    // 2. User Clicks Link
    events.push(new OCSF.HttpActivity({ activity_id: OCSF.HttpActivityId.REQUEST, actor, device: victimDevice, http_request: { url: { full_url: phishingUrl } } as OCSF.HttpRequest }));

    // 3. User Enters Credentials (Simulated by a POST request)
    events.push(new OCSF.HttpActivity({ activity_id: OCSF.HttpActivityId.REQUEST, actor, device: victimDevice, http_request: { method: 'POST', url: { full_url: phishingUrl } } as OCSF.HttpRequest }));

    // 4. Attacker logs in from a different location
    const attackerDevice = { uid: generateRandomGuid(), ip_address: generateRandomIp(), name: `ATTACKER-PC`, os: { name: 'Kali Linux' } };
    const authEvent = new OCSF.Authentication({ activity_id: OCSF.AuthenticationActivityId.LOGON, user: victimUser, device: attackerDevice });
    authEvent.message = 'Successful Logon';
    events.push(authEvent);

    // 5. Detection
    const detectionEvent = new OCSF.DetectionFinding({ finding_info: { finding_name: 'Anomalous Logon Detected' } });
    (detectionEvent as any).actor = context.getActor(undefined, victimUser, attackerDevice);
    (detectionEvent as any).device = attackerDevice;
    events.push(detectionEvent);
    
    return events.slice(0, count).map(e => { e.time = generateRandomTimestamp(); return e; });
}

function generateDataInfiltrationScenario(count: number): OCSF.OcsfEvent[] {
    const context = new GenerationContext();
    const events: OCSF.OcsfEvent[] = [];
    const internalUser = context.getRandomUser();
    const compromisedDevice = context.getRandomDevice();
    const actor = context.getActor(undefined, internalUser, compromisedDevice);
    
    // 1. Malicious script executed
    const script = { name: 'data_exporter.ps1', uid: generateRandomGuid() };
    const scriptProcess = context.spawnProcess('powershell.exe', undefined, compromisedDevice);
    const scriptActor = context.getActor(scriptProcess, internalUser, compromisedDevice);
    events.push(new OCSF.ScriptActivity({ activity_id: OCSF.ScriptActivityId.EXECUTE, actor: scriptActor, script }));

    // 2. Access sensitive file
    const sensitiveFile = context.createFile('customer_data.csv', internalUser);
    events.push(new OCSF.FileSystemActivity({ activity_id: OCSF.FileSystemActivityId.READ, actor: scriptActor, file: sensitiveFile }));

    // 3. Compress data
    const compressedFile = context.createFile('data.zip', internalUser);
    events.push(new OCSF.FileSystemActivity({ activity_id: OCSF.FileSystemActivityId.CREATE, actor: scriptActor, file: compressedFile }));

    // 4. Exfiltrate data via DNS Tunneling or HTTP POST
    const exfilCount = Math.max(1, count - 3);
    for (let i = 0; i < exfilCount; i++) {
        const exfilDomain = `${generateRandomHash(16)}.attacker.com`;
        events.push(new OCSF.DnsActivity({ activity_id: OCSF.DnsActivityId.QUERY, actor: scriptActor, device: compromisedDevice, query: { hostname: exfilDomain } as OCSF.DnsQuery }));
    }

    // 5. Detection
    const detectionEvent = new OCSF.DetectionFinding({ finding_info: { finding_name: 'Data Exfiltration via DNS Tunneling Detected' } });
    (detectionEvent as any).actor = scriptActor;
    (detectionEvent as any).device = compromisedDevice;
    events.push(detectionEvent);

    return events.slice(0, count).map(e => { e.time = generateRandomTimestamp(); return e; });
}


// --- Main Worker Logic ---
addEventListener('message', ({ data }) => {
    const { classUid, scenarioId, count } = data;
    const CHUNK_SIZE = 1000; 

    try {
        if (scenarioId) {
            let generatedEvents: OCSF.OcsfEvent[] = [];
            switch (scenarioId) {
                case 'ransomware':
                    generatedEvents = generateRansomwareScenario(count);
                    break;
                case 'phishing':
                    generatedEvents = generatePhishingScenario(count);
                    break;
                case 'data_infiltration':
                    generatedEvents = generateDataInfiltrationScenario(count);
                    break;
                default:
                    throw new Error(`Unknown scenario ID: ${scenarioId}`);
            }
            postMessage({ type: 'data', payload: generatedEvents });
        } else if (classUid) {
            // Send single class generation in chunks
            const context = new GenerationContext();
            let totalGenerated = 0;
            while (totalGenerated < count) {
                const remaining = count - totalGenerated;
                const currentChunkSize = Math.min(CHUNK_SIZE, remaining);
                const chunk = Array.from({ length: currentChunkSize }, () => createSingleEvent(classUid, context));
                postMessage({ type: 'data', payload: chunk });
                totalGenerated += currentChunkSize;
            }
        } else {
            throw new Error('Invalid payload to worker. Either classUid or scenarioId must be provided.');
        }
        
        // Send 'done' message when generation is complete
        postMessage({ type: 'done' });

    } catch (error) {
        console.error("Error generating data in worker:", error);
        postMessage({ type: 'error', payload: (error as Error).message });
    }
});
