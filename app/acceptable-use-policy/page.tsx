import type { Metadata } from "next";

import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | DigitalPlat Domain",
  description: "DigitalPlat Domain Acceptable Use Policy",
};

type PolicySection = {
  title: string;
  paragraphs?: string[];
};

const effectiveDate = "June 29, 2026";

const sections: PolicySection[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      'This Acceptable Use Policy ("AUP") is part of the DigitalPlat Domain Terms of Service. It applies to all access to and use of DigitalPlat Domain, including all Domains, Namespaces, DNS services, registration requests, account activity, APIs, redirects, websites, applications, email-related use, and other platform features.',
      "DigitalPlat Domain is a public-benefit domain registration platform operated by DigitalPlat Foundation, Inc. The Service supports open public subdomain registration under multiple Namespaces while maintaining abuse prevention, security controls, and cooperation with trusted internet safety partners.",
      "This AUP explains what users may not do, what users are responsible for, how DigitalPlat detects abuse, and how DigitalPlat may enforce this policy. It is intended to complement the Terms of Service, not repeat them.",
    ],
  },
  {
    title: "2. Responsible Use",
    paragraphs: [
      "You are responsible for your account, Domains, DNS records, applications, redirects, services, and activity associated with your use of DigitalPlat Domain.",
      "You must comply with all applicable laws and regulations. You may not use DigitalPlat Domain to commit, enable, conceal, or promote unlawful activity.",
      "You must operate your services securely and responsibly. This includes maintaining reasonable security controls, keeping applications and infrastructure updated, securing reverse proxies and redirects, monitoring for compromise, and preventing your Domains from being used to harm others.",
      "You must maintain accurate and current contact information when required by DigitalPlat. If DigitalPlat contacts you about abuse, security concerns, legal issues, or operational risk, you must respond promptly and in good faith.",
      "You must cooperate with abuse investigations. Cooperation may include removing harmful content, disabling malicious redirects, correcting DNS records, securing compromised systems, providing relevant information, or taking other reasonable remediation steps requested by DigitalPlat.",
      "You are responsible for activity caused by compromised accounts, leaked credentials, vulnerable applications, open redirects, misconfigured DNS, insecure infrastructure, or third parties using your services. Lack of intent does not prevent enforcement when a Domain or account creates risk or harm.",
    ],
  },
  {
    title: "3. Prohibited Uses",
    paragraphs: [
      "You may not use DigitalPlat Domain for illegal, harmful, abusive, deceptive, or high-risk activity. Prohibited uses include the categories below.",
      "Phishing and credential theft. You may not use DigitalPlat Domain for phishing, credential harvesting, MFA phishing, fake login pages, fake banking services, fake government services, fake cloud portals, fake email portals, fake payment pages, fake crypto wallet pages, or any service designed to trick users into revealing passwords, authentication tokens, recovery codes, private keys, financial information, or other sensitive data. This applies even if the harmful content is hosted elsewhere and the Domain is used only for DNS, redirection, tracking, cloaking, or traffic routing.",
      "Malware and exploits. You may not use DigitalPlat Domain to host, distribute, redirect to, promote, control, or facilitate malware or harmful software. This includes ransomware, spyware, trojans, worms, viruses, credential stealers, botnet loaders, malicious downloads, exploit kits, browser exploits, malicious JavaScript, malicious browser extensions, and malicious mobile applications. You may not use Domains for exploit hosting, malware staging, update channels, fallback infrastructure, command infrastructure, or traffic routing for malicious software.",
      "Botnets and network abuse. You may not use DigitalPlat Domain for botnet command and control, malware control servers, DDoS coordination, traffic amplification, proxy abuse, credential stuffing infrastructure, unauthorized scanning, vulnerability exploitation, or systems used to control compromised devices, accounts, or networks. Domains associated with active botnet or network abuse may be suspended immediately.",
      "Spam and messaging abuse. You may not use DigitalPlat Domain to send unsolicited email, operate spam infrastructure, host spam landing pages, support bulk messaging abuse, distribute deceptive marketing messages, or facilitate unsolicited commercial campaigns. You may not use Domains for reply-to abuse, tracking links, redirect chains, fake unsubscribe pages, disposable spam infrastructure, or systems designed to evade spam detection or abuse reporting.",
      "Technical abuse. You may not use DigitalPlat Domain for malicious reverse proxies, open redirects used for abuse, cloaking, traffic laundering, scanner infrastructure, exploit hosting, malicious JavaScript, browser exploitation, unauthorized access, evasion infrastructure, or systems designed to bypass security controls. You may not use DigitalPlat systems in a way that disrupts, overloads, scans, attacks, reverse engineers, bypasses, or interferes with DigitalPlat, other users, registries, registrars, DNS providers, payment systems, abuse systems, or other infrastructure.",
      "Impersonation and deceptive services. You may not use DigitalPlat Domain to impersonate or falsely suggest affiliation with another person, organization, brand, service, or authority. Prohibited impersonation includes misleading references to governments, financial institutions, healthcare providers, schools, universities, charities, DigitalPlat, registries, registrars, technology companies, employers, support teams, security providers, or any other organization. You may not register or use confusing Domains intended to deceive users about source, sponsorship, endorsement, destination, security status, ownership, or purpose.",
      "Intellectual property abuse. You may not use DigitalPlat Domain to infringe or abuse intellectual property rights. This includes copyright infringement, trademark abuse, counterfeit goods or services, piracy, unauthorized software distribution, misleading brand use, and Domains intended to confuse users about affiliation with a rights holder. DigitalPlat may suspend Domains or accounts associated with credible intellectual property complaints, counterfeit activity, or repeated infringement.",
      "Fraud and illegal activity. You may not use DigitalPlat Domain to engage in or support fraud, money laundering, sanctions evasion, illegal marketplaces, unlawful financial schemes, extortion, trafficking, illegal gambling, unauthorized sale of regulated goods, deceptive investment schemes, or any other activity prohibited by applicable law. You may not use DigitalPlat Domain to evade court orders, regulatory requirements, sanctions programs, export controls, law enforcement actions, or other legal restrictions.",
      "Child safety. You may not use DigitalPlat Domain for child sexual abuse material, grooming, child exploitation, sexual extortion, trafficking of minors, or any conduct that harms or attempts to harm children. DigitalPlat may immediately suspend affected Domains and accounts and may report relevant information to appropriate authorities or trusted child safety organizations where permitted or required by law.",
      "Harmful content. You may not use DigitalPlat Domain to promote terrorism, violent extremism, credible threats of violence, recruitment for violent organizations, instructions for violent attacks, or content designed to facilitate serious physical harm. DigitalPlat may act quickly where content or infrastructure presents a risk to public safety.",
      "Cryptomining abuse. You may not use DigitalPlat Domain for unauthorized cryptomining, cryptojacking, deceptive mining scripts, mining malware, mining-related botnets, or infrastructure that abuses third-party computing resources.",
      "Platform abuse. You may not abuse DigitalPlat Domain itself. Prohibited platform abuse includes account farming, automated abuse, automated registrations, abuse of free registrations, abuse of Buy Slot, bypassing limits, evading review, creating multiple accounts to obtain additional free capacity, hoarding names, mass registration that undermines fair access, unauthorized resale of Slots, and attempts to evade suspensions or enforcement actions.",
    ],
  },
  {
    title: "4. Namespace Policies",
    paragraphs: [
      "DigitalPlat may set rules for specific Namespaces, categories of names, registration patterns, or high-risk uses. These rules may vary by Namespace and may change over time.",
      "DigitalPlat may reserve names for operational, security, legal, public-interest, technical, administrative, or community reasons. Reserved names may include names related to DigitalPlat, infrastructure, abuse handling, public services, common protocols, sensitive labels, or names likely to create confusion or risk.",
      "DigitalPlat may reject registrations, prohibit confusing names, prohibit brand-sensitive names, require manual review, or require additional information before approving a registration. This may apply to government-related names, financial-service names, healthcare-related names, security-related names, regulated-industry names, famous brands, or names associated with abuse trends.",
      "DigitalPlat may suspend, delete, rename, restrict, or require changes to Domains that violate Namespace policies, create unreasonable risk, mislead users, interfere with operations, or are likely to harm users, DigitalPlat, upstream providers, or the public.",
    ],
  },
  {
    title: "5. Abuse Detection",
    paragraphs: [
      "DigitalPlat may use a combination of automated and manual methods to detect abuse. These may include automated detection systems, internal security review, trusted security organizations, registry notifications, registrar notifications, CERT reports, user reports, provider reports, public threat intelligence, and internal platform signals.",
      "Abuse signals may include Domain patterns, DNS behavior, redirects, hosting destinations, registration velocity, account relationships, payment signals, infrastructure overlap, malware indicators, phishing reports, spam reports, credential theft reports, suspicious automation, and other evidence of harmful activity.",
      "Open registration platforms may receive abuse reports even with reasonable prevention measures in place. DigitalPlat's role is to detect, investigate, suspend, and remove abuse as quickly as reasonably possible while maintaining practical access for legitimate users.",
      "DigitalPlat may prioritize reports based on severity, credibility, evidence, public harm, infrastructure risk, registry or registrar requirements, and legal obligations.",
    ],
  },
  {
    title: "6. Enforcement",
    paragraphs: [
      "DigitalPlat may take enforcement action when we believe a Domain, account, DNS record, registration request, Slot, application, redirect, or service violates this AUP, violates the Terms of Service, creates risk, or is associated with abuse.",
      "Enforcement actions may include suspending Domains, disabling DNS, removing records, rejecting registrations, suspending all Domains under the same account, restricting platform access, revoking Buy Slots, terminating accounts, refusing future registrations, blocking payment methods, preserving evidence, escalating to providers, or taking other measures we consider appropriate.",
      "DigitalPlat may act with or without prior notice where necessary to prevent harm, stop abuse, protect users, comply with law, respond to registry or registrar requirements, preserve platform integrity, or reduce risk to a broader Namespace.",
      "Enforcement may apply to related Domains, accounts, Slots, DNS records, infrastructure, payment methods, or registration patterns when they appear connected to the same abuse, risk, operator, campaign, or attempted evasion.",
    ],
  },
  {
    title: "7. Registry and Security Cooperation",
    paragraphs: [
      "DigitalPlat actively cooperates with Registry Operators, Registrars, CERTs, trusted security organizations, security vendors, infrastructure providers, law enforcement, courts, regulators, and other relevant parties where reasonably necessary to investigate, prevent, or mitigate abuse.",
      "Cooperation may include reviewing reports, validating indicators, sharing relevant technical information, preserving evidence, disabling Domains, disabling DNS, restricting accounts, or coordinating response to active threats where permitted by law and applicable DigitalPlat policies.",
      "Abuse reports from registries, registrars, CERTs, trusted security organizations, law enforcement, or other credible sources may be acted upon immediately, including before DigitalPlat completes a full investigation, when delay could increase harm or threaten a broader Namespace.",
      "If a Registry Operator, Registrar, or other upstream authority requires action, DigitalPlat may comply promptly and may take additional steps to protect users, the platform, or remaining Namespaces.",
    ],
  },
  {
    title: "8. Appeals",
    paragraphs: [
      "If you believe DigitalPlat took enforcement action in error, you may contact DigitalPlat and provide relevant information for review. Your appeal should include the affected Domain or account, a clear explanation of why you believe the action was incorrect, and any evidence showing that the issue has been resolved.",
      "DigitalPlat may review appeals at its discretion. We may require remediation, control verification, security improvements, configuration changes, or additional information before considering restoration.",
      "DigitalPlat is not obligated to restore any Domain, account, Buy Slot, DNS record, registration, Namespace access, or service. We may decline restoration where we believe risk remains, the violation was serious, the account was used for evasion, or restoration could harm users, DigitalPlat, upstream providers, or the public.",
    ],
  },
  {
    title: "9. Contact",
    paragraphs: [
      "For general questions about DigitalPlat Domain, contact:",
      "General: contact@digitalplat.org",
      "For abuse reports, security concerns, phishing, malware, spam, impersonation, or other harmful activity involving DigitalPlat Domain, contact:",
      "Abuse: abusereport@digitalplat.org",
    ],
  },
];

function ContactLink({ line }: { line: string }) {
  const [label, email] = line.split(": ");

  if (!email?.includes("@")) {
    return line;
  }

  return (
    <>
      {label}:{" "}
      <a className="font-medium text-primary hover:underline" href={`mailto:${email}`}>
        {email}
      </a>
    </>
  );
}

export default function AcceptableUsePolicyPage() {
  return (
    <Container>
      <article className="mx-auto max-w-4xl py-28 text-gray-700 dark:text-gray-300">
        <header className="mb-16 border-gray-200 border-b pb-10 dark:border-gray-800">
          <p className="mb-4 font-semibold text-primary text-sm uppercase tracking-wider">
            DigitalPlat Domain
          </p>
          <h1 className="font-bold text-4xl text-gray-950 md:text-5xl dark:text-white">
            Acceptable Use Policy
          </h1>
          <p className="mt-6 text-gray-600 text-lg dark:text-gray-400">
            Effective Date: {effectiveDate}
          </p>
        </header>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title} className="scroll-mt-28">
              <h2 className="mb-5 font-semibold text-2xl text-gray-950 dark:text-white">
                {section.title}
              </h2>
              <div className="space-y-4 leading-7">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>
                    {section.title === "9. Contact" ? <ContactLink line={paragraph} /> : paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </Container>
  );
}
