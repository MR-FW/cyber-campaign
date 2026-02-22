export const domainsData = [
  {
    slug: "network-security",
    title: "Network security",
    shortDescription: "This domain is concerned with the protection of network infrastructure and data integrity, and typically includes the use of firewalls, intrusion detection, and secure network design.",
    content: [
      { body: "Network security can be defined as the set of measures used to protect the integrity, confidentiality, and availability of data and resources as they are transmitted across or stored on networks. In academic and industry literature, the scope of network security is often taken to include both physical infrastructure—such as routers, switches, and cabling—and the logical control of traffic and access." },
      { heading: "Main concepts and controls", body: "Firewalls are widely discussed as a first line of defence, filtering traffic between trusted and untrusted zones. Intrusion detection and prevention systems (IDS/IPS) are used to monitor for malicious or anomalous activity. Secure network design frequently emphasises segmentation (for example, through VLANs or zero-trust architectures) in order to limit the impact of a compromise. In addition, the use of VPNs and encryption protocols such as TLS is commonly recommended to protect data in transit." },
      { heading: "Significance in practice", body: "It is important to note that networks form the backbone of modern information systems. A successful attack or serious outage can affect entire organisations. For this reason, many sources argue that strong network security is essential for reducing the risk of unauthorised access, data theft, and service disruption." },
    ],
  },
  {
    slug: "application-security",
    title: "Application security",
    shortDescription: "Application security refers to the practice of securing software and applications from threats across the development lifecycle, including secure coding, testing, and deployment.",
    content: [
      { body: "Application security (often abbreviated as AppSec) is the practice of designing, building, and maintaining software so that it is resilient to attack and misuse. In the literature, this domain is typically presented as spanning the full software development lifecycle—from initial design and coding through testing, deployment, and ongoing operations." },
      { heading: "Main concepts and practices", body: "Secure coding is commonly guided by frameworks such as the OWASP Top Ten, which highlight vulnerabilities including injection, broken authentication, and sensitive data exposure. Security testing may include static analysis (SAST), dynamic analysis (DAST), and dependency scanning. The concept of DevSecOps is often introduced as a way to integrate security checks into continuous integration and deployment (CI/CD) pipelines." },
      { heading: "Significance in practice", body: "Applications are frequently identified as a primary target for attackers. Flaws in code or configuration can lead to data breaches, account takeover, and full system compromise. Many authors suggest that building security in from the start is more effective and cost-efficient than attempting to fix issues after release." },
    ],
  },
  {
    slug: "cloud-security",
    title: "Cloud security",
    shortDescription: "Cloud security involves safeguarding data, applications, and services in cloud environments, and is generally understood to rest on a shared responsibility model between provider and customer.",
    content: [
      { body: "Cloud security can be described as the set of policies, controls, and technologies used to protect data, applications, and infrastructure in cloud computing environments. A central concept in this domain is the shared responsibility model: the provider is responsible for securing the underlying platform, while the customer is responsible for securing their own data, identity and access, and configuration choices." },
      { heading: "Main concepts and areas", body: "Identity and access management (IAM) is often emphasised as central to cloud security—including the principle of least privilege, multi-factor authentication (MFA), and careful management of keys and roles. Data protection typically involves encryption at rest and in transit, as well as secure handling of secrets. Configuration and posture management are discussed as important for avoiding misconfigurations (such as exposed storage or overly permissive policies) that have been linked to many real-world breaches." },
      { heading: "Significance in practice", body: "Organisations are increasingly relying on the cloud for critical workloads. Research and incident reports suggest that misconfigurations and weak identity controls are among the leading causes of cloud-related security incidents. An understanding of shared responsibility and the consistent application of security controls is therefore considered essential for reducing risk." },
    ],
  },
  {
    slug: "endpoint-security",
    title: "Endpoint security",
    shortDescription: "Endpoint security focuses on protecting devices that connect to the network, such as laptops, phones, and servers, and commonly involves antivirus, EDR, patch management, and device control.",
    content: [
      { body: "Endpoint security is the practice of securing end-user devices—including laptops, desktops, smartphones, and tablets—as well as servers that connect to organisational or home networks. In the literature, these endpoints are often identified as common targets for malware, phishing, and the theft of credentials or data." },
      { heading: "Main concepts and controls", body: "Antivirus and endpoint detection and response (EDR) tools are widely used to detect and block malicious activity. Patch management is recommended to keep operating systems and applications up to date with security fixes. Device control and encryption (for example, full-disk encryption) are discussed as important for protecting against loss and theft. Mobile device management (MDM) is often mentioned in the context of enforcing security policies on phones and tablets." },
      { heading: "Significance in practice", body: "Endpoints are where users interact with systems and where many attacks are observed to start or land. A compromised device can be used to move laterally through a network, exfiltrate data, or launch further attacks. For these reasons, strong endpoint security is generally regarded as a core layer of defence." },
    ],
  },
  {
    slug: "iot-security",
    title: "IoT security",
    shortDescription: "IoT security addresses the risks posed by connected devices and sensors; many such devices are noted for weak default settings and limited support for security updates.",
    content: [
      { body: "IoT (Internet of Things) security addresses the risks associated with connected devices and sensors—ranging from smart home devices and wearables to industrial sensors and medical equipment. Academic and industry sources frequently point out that many of these devices have limited processing power, weak default credentials, and few or no mechanisms for security updates." },
      { heading: "Main concepts and strategies", body: "Recommended strategies often include changing default passwords and disabling unnecessary services. Network segmentation is commonly suggested so that a compromised IoT device cannot easily reach sensitive systems or data. Monitoring of traffic and behaviour for anomalies is also discussed. Where possible, it is recommended to choose devices that support secure updates and have a clear security lifecycle; the use of a dedicated IoT security or device management platform may also be considered." },
      { heading: "Significance in practice", body: "IoT devices have been observed to be used as a stepping stone into larger networks or to form botnets for DDoS and other attacks. Securing them is therefore argued to be important both for the organisation and for the broader internet." },
    ],
  },
  {
    slug: "data-security",
    title: "Data security",
    shortDescription: "Data security is the discipline of protecting data from unauthorised access, modification, or destruction throughout its lifecycle; encryption, access controls, and DLP are commonly emphasised.",
    content: [
      { body: "Data security can be defined as the discipline of protecting data from unauthorised access, modification, or destruction throughout its lifecycle. This is typically discussed in terms of three states: data at rest (in storage), in transit (over the network), and in use (during processing)." },
      { heading: "Main concepts and controls", body: "Encryption is widely recommended for data at rest (for example, full-disk or database encryption) and in transit (for example, TLS). Access controls and authentication are used to ensure that only authorised users and systems can access data. Data loss prevention (DLP) tools are often introduced to monitor and control how sensitive data is used, stored, and shared. Classification and handling policies are discussed as a way to define what data is sensitive and how it must be protected." },
      { heading: "Significance in practice", body: "Data is frequently identified as a primary target for attackers and is often subject to regulatory requirements (such as GDPR or HIPAA). Breaches can result in financial loss, legal liability, and reputational damage. For these reasons, protecting data is generally considered central to overall security posture." },
    ],
  },
  {
    slug: "iam",
    title: "Identity and access management (IAM)",
    shortDescription: "IAM refers to the framework used to manage digital identities and control access to systems and data, including authentication, authorisation, and lifecycle management.",
    content: [
      { body: "Identity and access management (IAM) is the framework of policies, processes, and technologies used to manage digital identities and to control access to systems and data. In the literature, it is often framed as answering two questions: who are you (authentication) and what are you allowed to do (authorisation)?" },
      { heading: "Main concepts and components", body: "Authentication is the process of verifying identity—commonly through passwords, multi-factor authentication (MFA), biometrics, or certificates. Authorisation determines what an identity is permitted to access, often through roles, permissions, and policies. Lifecycle management covers the provisioning, modification, and de-provisioning of accounts. Single sign-on (SSO) and federation are frequently discussed as ways to simplify access across multiple systems while centralising control." },
      { heading: "Significance in practice", body: "Many breaches are reported to begin with stolen or weak credentials. Strong IAM—including MFA and least privilege—is therefore argued to reduce the impact of credential theft and to limit what attackers can do once they have gained access. IAM is also often presented as foundational to zero-trust and cloud security approaches." },
    ],
  },
];

export function getDomainBySlug(slug: string) {
  for (let i = 0; i < domainsData.length; i++) {
    if (domainsData[i].slug === slug) {
      return domainsData[i];
    }
  }
  return null;
}
