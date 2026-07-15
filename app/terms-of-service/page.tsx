import type { Metadata } from "next";

import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms of Service | DigitalPlat Domain",
  description: "DigitalPlat Domain Terms of Service",
};

type TermsSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  afterBullets?: string[];
};

const effectiveDate = "June 29, 2026";

const sections: TermsSection[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      'These Terms of Service ("Terms") govern your access to and use of DigitalPlat Domain, including any related websites, applications, APIs, DNS services, account tools, registration systems, abuse handling systems, payment features, documentation, and other services we provide in connection with DigitalPlat Domain.',
      "DigitalPlat Domains is operated by EdgeAlphix LLC. Its mission is to make public namespaces more accessible while maintaining reasonable security, reliability, and abuse prevention controls. The Service primarily allows eligible users to request and manage public subdomain registrations under Namespaces operated, administered, or made available through DigitalPlat.",
      "By accessing or using the Service, creating an account, registering or attempting to register a Domain, purchasing a Buy Slot, configuring DNS, or otherwise using DigitalPlat Domain, you agree to these Terms. These Terms apply to continued access to and use of the Service after their effective date. If you do not agree to these Terms, you must not use the Service.",
      "DigitalPlat Domain operates on a best-effort basis. Some Namespaces may be available without charge, and some features or additional registration capacity may require payment. The Service does not sell ownership of top-level domains, registries, Namespaces, or permanent domain rights. Availability of any Namespace, Domain, DNS configuration, account feature, or related service may change over time.",
      "These Terms are intended to be understandable while still describing important legal rights, responsibilities, and limitations. Please read them carefully.",
    ],
  },
  {
    title: "2. Definitions",
    paragraphs: ["For purposes of these Terms:"],
    bullets: [
      '"Organization" means EdgeAlphix LLC, together with its authorized operators and representatives acting on its behalf.',
      '"DigitalPlat," "we," "us," and "our" refer to the Organization operating DigitalPlat Domain.',
      '"Platform" means DigitalPlat Domain and the related systems, interfaces, websites, dashboards, APIs, databases, DNS tools, registration tools, payment tools, abuse systems, documentation, and infrastructure used to provide the Service.',
      '"Service" means the services made available through DigitalPlat Domain, including public subdomain registration, Namespace access, DNS hosting or DNS configuration features, account management, Buy Slot management, abuse handling, and related platform functions.',
      '"Namespace" means a domain, zone, suffix, public suffix, delegated name, or other naming space under which DigitalPlat allows or may allow users to register subdomains or other names. A Namespace may be operated directly by DigitalPlat or made available through third-party registries, registrars, DNS providers, infrastructure providers, or other Upstream Providers.',
      '"Registry" means a technical or administrative system, database, zone, or authority responsible for maintaining domain name records, Namespace delegations, or related registration data for a domain or Namespace.',
      '"Registry Operator" means the person or entity that operates, administers, controls, or has authority over a Registry or Namespace, whether or not that operator is DigitalPlat.',
      '"Registrar" means a domain name registrar, reseller, registration service provider, or similar entity that provides domain registration, renewal, delegation, or management services for a domain or Namespace used by DigitalPlat.',
      '"Slot" means a unit of registration capacity associated with a user account or other approved registration context. A Slot may allow a user to request or maintain one or more eligible registrations, subject to availability, approval, technical limits, abuse controls, these Terms, and applicable policies.',
      '"Buy Slot" means a one-time platform service fee that increases a user\'s registration capacity by adding one or more Slots. Buy Slot is not the purchase of a Domain, Namespace, Registry, TLD, property interest, renewal right, perpetual right, or guarantee of future service availability.',
      '"User," "you," and "your" mean any person or entity that accesses or uses the Service, creates an account, submits a registration request, purchases a Buy Slot, configures DNS, manages a Domain, or otherwise interacts with DigitalPlat Domain.',
      '"Registrant" means the User or other person or entity associated with a Domain, subdomain, registration, DNS record, account, or other naming resource made available through the Service.',
      '"Domain" means any subdomain, name, label, hostname, or related registration made available through the Service under a Namespace.',
      '"Content" means websites, applications, files, scripts, redirects, DNS records, traffic, services, communications, metadata, or other materials associated with a User, Registrant, Domain, account, or use of the Service.',
      '"Upstream Provider" means any third-party provider whose systems, decisions, policies, services, or infrastructure may affect the Service, including Registry Operators, Registrars, DNS providers, Public Suffix List maintainers, CDN providers, cloud providers, Certificate Authorities, security organizations, security vendors, payment processors, hosting providers, network providers, and other infrastructure providers.',
    ],
  },
  {
    title: "3. Eligibility",
    paragraphs: [
      "You may use the Service only if you are legally able to enter into a binding agreement with DigitalPlat and only if your use complies with these Terms and all applicable laws.",
      "You must be at least 13 years old to use the Service. If the laws of your jurisdiction require a higher minimum age for online services, account creation, domain registration, payment, or contractual consent, you must meet that higher age requirement. If you are under the age of majority in your jurisdiction, you may use the Service only with the consent and supervision of a parent or legal guardian who agrees to be bound by these Terms.",
      'If you use the Service on behalf of an organization, company, project, community, government body, educational institution, or other entity, you represent that you have authority to bind that entity to these Terms. In that case, "you" and "your" refer to both you and that entity.',
      "You may not use the Service if you are prohibited from doing so under applicable law, sanctions rules, export controls, court orders, regulatory restrictions, or DigitalPlat policies. You are responsible for ensuring that your access to and use of the Service is lawful in every jurisdiction where you operate, offer services, host Content, receive traffic, or target users.",
    ],
  },
  {
    title: "4. Service Description",
    paragraphs: [
      "DigitalPlat Domain provides a public-benefit platform for requesting, registering, configuring, and managing public subdomains under available Namespaces. The Service may include account tools, registration workflows, DNS management, Namespace listings, abuse response systems, documentation, and other features that support domain access and operation.",
      "The Service is primarily designed for public subdomain registration. A User may request a Domain under a Namespace made available by DigitalPlat, subject to technical availability, eligibility, capacity limits, review, abuse controls, and applicable policies. Approval of a request does not create ownership of the Namespace, the Registry, any TLD, or any permanent property right in the Domain.",
      "DigitalPlat may provide DNS services or DNS configuration features for some Domains or Namespaces. DNS features may include record management, delegation, verification, routing support, or integration with third-party DNS providers. DNS behavior depends on systems outside DigitalPlat's direct control, including resolvers, caches, registries, registrars, nameservers, network operators, and end-user devices.",
      "DigitalPlat operates the Service on a best-effort basis. Unless we expressly provide a separate written service level agreement, the Service is provided without any SLA, uptime commitment, support response guarantee, propagation guarantee, approval guarantee, renewal guarantee, or availability guarantee.",
      "We may modify, limit, suspend, retire, replace, or discontinue any part of the Service at any time, including specific Namespaces, DNS features, registration workflows, APIs, account features, free usage allowances, Buy Slot rules, abuse controls, or payment features. We will try to communicate material changes when reasonable, but urgent security, abuse, legal, registry, or infrastructure circumstances may require immediate action without prior notice.",
    ],
  },
  {
    title: "5. Namespace Availability",
    paragraphs: [
      "Namespace availability is central to the Service, but it is not guaranteed. DigitalPlat Domain depends on third-party providers and external systems, including Registry Operators, Registrars, DNS providers, Public Suffix List maintainers, CDN providers, cloud providers, Certificate Authorities, security organizations, payment processors, and other Upstream Providers. Their continued cooperation, support, compatibility, and availability cannot be guaranteed.",
      "A Namespace may become unavailable, restricted, suspended, removed, transferred, redelegated, retired, discontinued, deleted, blocked, renamed, rate-limited, technically impaired, or otherwise affected for reasons outside DigitalPlat's control. These reasons may include registry actions, Registry Operator decisions, Registrar actions, Public Suffix List removal or policy changes, legal orders, regulatory requirements, upstream provider decisions, infrastructure changes, technical failures, security incidents, abuse mitigation, contractual changes, operational constraints, domain expiration, payment disputes involving upstream services, force majeure events, or other circumstances.",
      "Some Namespaces may exist under ccTLD registries or other third-party registries. DigitalPlat has no authority to override registry policy decisions, and those decisions may affect all users and Domains under the affected Namespace.",
      "DigitalPlat may retire or discontinue a Namespace if continuing operation is no longer practical due to registry policies, legal requirements, excessive abuse, operational considerations, upstream provider decisions, technical limitations, security concerns, or the public-benefit needs of the Platform.",
      "Open registration platforms may receive abuse reports even when reasonable abuse prevention measures are in place. DigitalPlat's role is to detect, investigate, suspend, and remove abuse as quickly as reasonably possible while maintaining practical access for legitimate users.",
      "You accept the risk that any Namespace may disappear or become unusable. You should not rely on any DigitalPlat Domain Namespace as your sole method of identity, branding, authentication, account recovery, business continuity, legal notice, critical infrastructure, production hosting, financial operations, emergency communications, or any use where interruption would cause significant harm.",
    ],
  },
  {
    title: "6. Buy Slot Policy",
    paragraphs: [
      "Users may receive a limited number of free registration Slots. Additional registration capacity may be available through Buy Slot.",
      "Buy Slot is only a one-time platform service fee that increases registration capacity associated with your account or approved registration context. It does not purchase a Domain. It does not purchase ownership of any kind. It does not purchase any Namespace, Registry, TLD, DNS zone, public suffix, or other naming resource. It does not create any property interest, perpetual right, renewal right, leasehold interest, exclusive right, or continuing entitlement to use any particular Domain or Namespace.",
      "Purchasing a Buy Slot does not guarantee approval of any registration request. It does not reserve any particular Domain. It does not guarantee that a requested Domain is available, lawful, technically valid, appropriate, non-infringing, or acceptable under our policies. It does not guarantee DNS service, uptime, propagation, registry continuity, Public Suffix List status, registrar availability, future availability, or continued operation of any Namespace.",
      "Buy Slot does not require DigitalPlat to continue offering, operating, supporting, or maintaining any specific Namespace indefinitely. DigitalPlat may suspend, retire, discontinue, migrate, restrict, or modify any Namespace or related registration rules as described in these Terms.",
      "Slots are non-transferable unless DigitalPlat expressly allows a transfer in writing or through an official Platform feature. You may not sell, resell, rent, assign, sublicense, pledge, or trade Slots outside the Service. DigitalPlat may reject or reverse unauthorized Slot transfers.",
      "Slots may be limited, modified, revoked, suspended, or disabled if associated with abuse, fraud, payment reversal, violation of these Terms, legal risk, technical risk, account compromise, or misuse of the Service. DigitalPlat may also adjust Slot mechanics, limits, or registration capacity rules as the Platform evolves.",
      "Buy Slot payments are non-refundable except where required by applicable law. You should purchase Buy Slots only if you understand and accept that DigitalPlat Domain is a best-effort public-benefit platform and that Buy Slots do not protect you from Namespace loss, registry action, abuse enforcement, provider disruption, or service discontinuation.",
    ],
  },
  {
    title: "7. Payments",
    paragraphs: [
      "Some features of the Service may require payment, including Buy Slot. Prices, taxes, fees, payment methods, payment processors, supported currencies, and availability may vary by location, account status, risk profile, and Platform configuration.",
      "You are responsible for all charges associated with your purchases, including applicable taxes, duties, assessments, payment processor fees, currency conversion fees, bank fees, and similar costs unless the checkout process expressly states otherwise. Prices may change over time. A price change does not entitle you to a refund for prior purchases.",
      "Payments may be processed by third-party payment processors. By submitting payment information, you authorize DigitalPlat and its payment processors to charge the selected payment method for the relevant amount. Payment processors may have their own terms, privacy policies, fraud controls, dispute processes, and identity or risk checks. DigitalPlat is not responsible for payment processor outages, errors, delays, holds, account restrictions, or declined transactions.",
      "You must not use stolen payment methods, unauthorized accounts, false billing information, fraudulent chargeback tactics, payment laundering, payment abuse, or any method intended to evade fees or obtain unauthorized access to Buy Slots or services.",
      "DigitalPlat may suspend, disable, or terminate accounts, Domains, Slots, or access to the Service if we believe a payment is fraudulent, unauthorized, reversed, disputed, charged back, high risk, unlawful, or associated with abuse. We may also withhold or revoke benefits obtained through a payment that later fails, is reversed, or is found to be unauthorized.",
      "If you initiate a chargeback or payment dispute, we may treat the affected purchase as unpaid while the dispute is pending. We may suspend related Slots, Domains, or account features until the dispute is resolved. We reserve the right to contest chargebacks, provide transaction records to payment processors, and recover costs associated with fraudulent or improper disputes.",
    ],
  },
  {
    title: "8. Refund Policy",
    paragraphs: [
      "Except where required by applicable law, all Buy Slot payments and other one-time platform service fees are final and non-refundable.",
      "Because Buy Slot purchases increase registration capacity rather than purchase a specific Domain or guarantee continued service, refunds are not provided merely because a Domain cannot be registered, a registration request is denied, a Domain is suspended, a Namespace becomes unavailable, DNS does not behave as expected, or an Upstream Provider takes action affecting the Service.",
      "Without limiting the above, DigitalPlat does not provide refunds for registry suspension, registry deletion, registry policy changes, suspension or discontinuation of an entire Namespace, Namespace retirement, Namespace removal, registrar action, Public Suffix List changes, DNS provider action, CDN or cloud provider action, Certificate Authority action, payment processor action, abuse enforcement, DNS interruption, technical outages, legal orders, account suspension, account termination, user error, configuration mistakes, loss of interest, failure to use purchased Slots, rejected registration requests, or incompatibility with a user's intended project.",
      "DigitalPlat also does not provide refunds for interruptions, suspensions, or losses caused by security incidents, fraud controls, domain conflicts, trademark complaints, copyright complaints, malware reports, phishing reports, spam reports, botnet activity, credential harvesting, malicious redirects, infrastructure failures, resolver caching, DNS propagation delays, provider downtime, force majeure events, or changes in our policies or business model.",
      "If applicable law gives you a mandatory refund, cancellation, cooling-off, consumer protection, or similar right that cannot be waived, we will honor that right to the extent required by law. Nothing in these Terms limits rights that cannot legally be limited.",
    ],
  },
  {
    title: "9. Registrant Responsibilities",
    paragraphs: [
      "You are responsible for your account, Domains, DNS records, Content, services, traffic, users, and use of the Platform.",
      "You must keep your account credentials secure and promptly notify DigitalPlat if you suspect unauthorized access. You are responsible for activity under your account, including activity by collaborators, employees, contractors, automated systems, compromised credentials, or third parties who gain access through your systems.",
      "You must provide accurate and current information when required by the Service, including contact information, abuse contact information, billing information, and account recovery information. You must keep that information updated. DigitalPlat may use available contact information to send operational notices, abuse reports, legal notices, payment notices, security alerts, or other communications.",
      "You are responsible for securing any website, API, reverse proxy, origin server, application, storage bucket, tunnel, redirect, mail service, authentication system, or other service connected to a Domain. Misconfigured reverse proxies, open redirects, exposed admin panels, vulnerable applications, open storage, leaked credentials, and compromised services can create harm even if you did not intend abuse.",
      "You must monitor your Domains and services for abuse, compromise, and unauthorized use. You must respond promptly to abuse reports, security notices, legal notices, and requests from DigitalPlat. Failure to respond may result in suspension or termination.",
      "You must comply with applicable laws, regulations, sanctions, export controls, court orders, intellectual property rules, privacy obligations, consumer protection laws, security requirements, and industry standards that apply to your use of the Service.",
      "You are responsible for maintaining backups, alternative domains, failover plans, business continuity plans, and independent access to your Content and users. DigitalPlat Domain should not be your only path to critical services.",
    ],
  },
  {
    title: "10. Acceptable Use",
    paragraphs: [
      "You may not use the Service to engage in, enable, promote, facilitate, or conceal illegal, harmful, abusive, deceptive, or high-risk activity.",
      "Prohibited activity includes phishing, credential harvesting, malware distribution, botnet command and control, spam, unsolicited bulk messaging, fraud, impersonation, deceptive services, malicious redirects, traffic laundering, cloaking, typosquatting, brand abuse, copyright abuse, trademark abuse, counterfeit goods, illegal marketplaces, child sexual abuse material or exploitation, terrorist content, violent extremist content, harassment campaigns, doxxing, non-consensual intimate content, cryptomining abuse, unauthorized scanning, exploit hosting, ransomware, scareware, spyware, ad fraud, payment fraud, account takeover, evasion of enforcement, and any activity that threatens the security, stability, reputation, or lawful operation of the Service.",
      "You may not use the Service to mislead users about identity, affiliation, sponsorship, endorsement, origin, destination, security status, or purpose. You may not create Domains that falsely imply association with DigitalPlat, another platform, a government agency, a financial institution, a healthcare provider, an educational institution, a security provider, or another person or organization.",
      "You may not use the Service in a way that overloads, scans, disrupts, attacks, reverse engineers, bypasses, or interferes with DigitalPlat systems, Upstream Providers, other users, DNS infrastructure, payment systems, abuse systems, or security controls. You may not attempt to evade rate limits, registration limits, Slot limits, suspension, review, verification, or abuse detection.",
      "You may not resell, rent, broker, warehouse, mass-register, speculate in, or automate registrations in a way that undermines fair access to public Namespaces, unless DigitalPlat expressly authorizes the activity.",
      "DigitalPlat may immediately suspend, disable, remove, sinkhole, redirect, lock, limit, or terminate Domains, accounts, Slots, DNS records, or Platform access without prior notice when we believe there is abuse, risk, legal exposure, user harm, provider risk, security risk, policy violation, or urgent operational need.",
    ],
  },
  {
    title: "11. Abuse Handling",
    paragraphs: [
      "DigitalPlat takes abuse prevention seriously because public Namespaces can be misused at scale. We may use automated detection, manual review, third-party intelligence, user reports, security researcher reports, registry notifications, registrar notifications, provider alerts, law enforcement reports, court orders, and internal signals to identify and respond to abuse.",
      "Abuse handling may include rapid suspension, DNS disabling, record removal, registration denial, account restriction, Slot revocation, traffic blocking, provider escalation, law enforcement cooperation, preservation of evidence, or other measures we consider appropriate.",
      "We may act before completing a full investigation if we believe delay could increase harm, expose users to fraud, damage infrastructure, violate law, threaten upstream provider relationships, or risk suspension of a broader Namespace. We are not required to provide prior notice, detailed evidence, or an appeal opportunity before taking emergency action.",
      "DigitalPlat may cooperate with trusted security organizations where reasonably necessary to investigate abuse, including security researchers, Registry Operators, Registrars, abuse reporting organizations, DNS providers, CDN providers, cloud providers, security vendors, payment processors, law enforcement, courts, regulators, victims, and other relevant parties. Cooperation may include sharing account information, logs, payment information, DNS data, registration data, abuse evidence, or other information where permitted by law and our Privacy Policy.",
      "We may decline to restore a Domain, account, Slot, or service if we believe restoration would create unacceptable risk. We may also require remediation, additional information, security improvements, or other corrective steps before restoring access.",
    ],
  },
  {
    title: "12. Registry Actions",
    paragraphs: [
      "Some Namespaces may exist under ccTLD registries, gTLD registries, alternative registries, delegated zones, or other third-party registry arrangements. Registry Operators, Registrars, and other upstream authorities may suspend, delete, transfer, block, place on hold, disable, redelegate, remove, permanently discontinue, or otherwise affect a Namespace or Domain for legal, technical, policy, contractual, security, abuse, payment, operational, or discretionary reasons.",
      "Registry Operators may suspend or permanently discontinue an entire Namespace. When this happens, the action may affect every Domain registered under that Namespace, including Domains used by users who did not violate these Terms.",
      "DigitalPlat has no authority to override registry policy decisions and cannot guarantee that it can reverse, appeal, delay, or mitigate a Registry Operator's or Registrar's action. Even when DigitalPlat disagrees with an upstream action, we may lack the legal right, technical control, or practical ability to change the result.",
      "By using the Service, you accept the risk that registry or registrar action may affect your Domain, Namespace, DNS service, account, Slot usage, or access to the Platform. You also accept that such actions may occur without advance notice to DigitalPlat or to you.",
      "Registry actions do not create refund obligations for DigitalPlat. This includes registry suspension, registry deletion, registry policy changes, suspension or discontinuation of an entire Namespace, domain holds, Namespace removal, registrar suspension, upstream account restrictions, legal takedowns, abuse-related actions, and other provider decisions.",
      "If a Registry Operator, Registrar, or Upstream Provider requires DigitalPlat to take action, we may comply immediately. We may also take additional action to protect the Platform, other users, or remaining Namespaces.",
    ],
  },
  {
    title: "13. Domain, Account, and Namespace Suspension",
    paragraphs: [
      "DigitalPlat may suspend, disable, remove, restrict, lock, or terminate any account, Domain, Namespace, DNS record, Slot, registration request, API access, or other Service feature temporarily or permanently.",
      "Reasons for suspension may include abuse, suspected abuse, fraud, payment issues, chargebacks, security compromise, malware, phishing, spam, impersonation, legal complaints, intellectual property complaints, registry requirements, registrar requirements, provider requirements, user reports, law enforcement requests, court orders, risk to other users, technical instability, excessive load, policy violations, or any other conduct that DigitalPlat reasonably believes may harm the Service, users, the public, or Upstream Providers.",
      "Suspension may occur with or without notice. Where reasonable, we may provide notice or an opportunity to remediate. However, notice is not required when we believe immediate action is necessary or appropriate.",
      "Suspension may affect related Domains, accounts, Slots, DNS records, or services if they appear connected to the same abuse pattern, risk, account, payment method, infrastructure, Registrant, organization, or operational control.",
      "DigitalPlat may refuse future registrations from users, accounts, Domains, projects, organizations, infrastructure, or payment methods associated with abuse or repeated violations.",
    ],
  },
  {
    title: "14. Privacy",
    paragraphs: [
      "Your use of the Service is subject to the DigitalPlat Domain Privacy Policy, which explains how we collect, use, disclose, retain, and protect information. By using the Service, you acknowledge that DigitalPlat may process information as described in the Privacy Policy.",
      "We may process account information, registration information, payment metadata, DNS data, security logs, abuse reports, technical identifiers, usage data, communications, and other information necessary to provide, secure, operate, improve, and protect the Service.",
      "We may disclose information where necessary to provide the Service, comply with law, respond to legal process, prevent abuse, investigate security incidents, enforce these Terms, cooperate with Upstream Providers, process payments, protect users, or protect DigitalPlat and the public.",
      "You are responsible for ensuring that your use of the Service complies with privacy laws applicable to your Content, users, applications, and services.",
    ],
  },
  {
    title: "15. Intellectual Property",
    paragraphs: [
      "DigitalPlat and its licensors retain all rights, title, and interest in and to the Platform, Service, software, systems, interfaces, documentation, branding, logos, designs, content, and other materials provided by DigitalPlat, except for rights expressly granted in these Terms.",
      "Subject to your compliance with these Terms, DigitalPlat grants you a limited, revocable, non-exclusive, non-transferable right to access and use the Service for its intended purposes.",
      "You retain rights in Content that you own. By using the Service, you grant DigitalPlat a limited license to host, process, transmit, display, store, copy, analyze, and otherwise use your Content and related technical data as necessary to provide, secure, operate, maintain, enforce, and improve the Service.",
      "You must not use DigitalPlat's names, logos, trademarks, service marks, or branding in a way that suggests endorsement, sponsorship, affiliation, or official status without written permission.",
      "DigitalPlat respects intellectual property rights and may respond to copyright, trademark, or other rights complaints. We may suspend or remove Domains, Content, or accounts associated with infringement, impersonation, counterfeit activity, or misleading use of another party's rights.",
    ],
  },
  {
    title: "16. Third-Party Services",
    paragraphs: [
      "The Service depends on third-party services and infrastructure. These include, but are not limited to, Registry Operators, Registrars, DNS providers, Public Suffix List maintainers, CDN providers, cloud providers, Certificate Authorities, security organizations, security vendors, payment processors, hosting providers, network providers, analytics providers, communications providers, and other vendors.",
      "Third-party services may be governed by their own terms, policies, technical limitations, abuse standards, legal obligations, pricing, outages, and operational decisions. Your use of the Service may be affected by those third-party services even if you do not interact with them directly.",
      "DigitalPlat cannot guarantee the continued availability, compatibility, performance, support, or cooperation of any third-party provider. Provider relationships, technical integrations, registry access, DNS arrangements, payment support, certificate issuance, Public Suffix List treatment, and infrastructure access may change or end at any time.",
      "DigitalPlat is not responsible for third-party services, third-party outages, third-party policy changes, third-party security incidents, third-party errors, third-party delays, third-party account actions, or third-party decisions. If a third-party provider changes, suspends, limits, or terminates a service used by DigitalPlat, we may modify, suspend, or discontinue affected parts of the Service without liability.",
    ],
  },
  {
    title: "17. Disclaimers",
    paragraphs: [
      'The Service is provided "as is" and "as available." To the maximum extent permitted by law, DigitalPlat disclaims all warranties, whether express, implied, statutory, or otherwise, including warranties of merchantability, fitness for a particular purpose, title, non-infringement, quiet enjoyment, availability, reliability, accuracy, security, and uninterrupted operation.',
      "DigitalPlat does not warrant that the Service will meet your requirements, be available at any particular time or location, be uninterrupted, be secure, be error-free, be free of harmful components, propagate DNS records within any particular time, maintain any specific DNS behavior, preserve any Domain or Namespace, remain listed in the Public Suffix List, maintain any registry relationship, support any registrar, prevent abuse, prevent unauthorized access, or produce any particular result.",
      "DigitalPlat does not guarantee approval of any registration request. We do not guarantee that any requested Domain will be available, appropriate, lawful, non-infringing, technically valid, accepted by Upstream Providers, or continue to resolve, route, delegate, renew, or function.",
      "You are solely responsible for determining whether the Service is suitable for your intended use. You should maintain independent backups, alternative domains, failover plans, monitoring, and business continuity processes.",
      "Some jurisdictions do not allow certain warranty disclaimers. In those jurisdictions, the disclaimers apply only to the maximum extent permitted by law.",
    ],
  },
  {
    title: "18. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, DigitalPlat and its operators, maintainers, affiliates, employees, contractors, contributors, agents, service providers, and representatives will not be liable for any indirect, incidental, special, punitive, exemplary, or consequential damages; loss of profits; loss of revenue; loss of goodwill; loss of data; loss of Content; loss of business opportunity; service interruption; DNS failure; domain loss; namespace loss; registry action; registrar action; payment processor action; security incident; abuse enforcement; or cost of substitute services.",
      "This limitation applies regardless of the legal theory asserted, including contract, tort, negligence, statute, strict liability, warranty, or any other legal theory, even if DigitalPlat has been advised of the possibility of such damages.",
      "To the maximum extent permitted by law, DigitalPlat's total liability for all claims arising out of or relating to the Service or these Terms will not exceed the amount you actually paid to DigitalPlat for Buy Slot purchases during the twelve months immediately preceding the event giving rise to the claim. If you did not pay DigitalPlat for Buy Slot purchases during that period, DigitalPlat's total liability will be zero dollars to the maximum extent permitted by law.",
      "The limitations in this section apply to all claims, whether related to free services, paid Slots, DNS services, registration requests, registry actions, Namespace availability, abuse handling, account suspension, payment disputes, technical failures, security incidents, third-party services, or changes to the Service.",
      "Some jurisdictions do not allow certain limitations of liability. In those jurisdictions, liability is limited to the maximum extent permitted by law.",
    ],
  },
  {
    title: "19. Indemnification",
    paragraphs: [
      "You agree to defend, indemnify, and hold harmless DigitalPlat and its operators, maintainers, affiliates, employees, contractors, contributors, agents, service providers, and representatives from and against any claims, demands, damages, losses, liabilities, costs, expenses, and fees, including reasonable attorneys' fees, arising out of or related to:",
    ],
    bullets: [
      "your access to or use of the Service;",
      "your Domains, DNS records, Content, applications, redirects, services, traffic, or users;",
      "your violation of these Terms or applicable policies;",
      "your violation of law or third-party rights;",
      "abuse, fraud, security incidents, or harmful activity associated with your account, infrastructure, or Domains;",
      "payment disputes, chargebacks, unauthorized payments, or fraudulent transactions;",
      "your failure to secure your systems, credentials, reverse proxies, applications, or services;",
      "claims that your Content or Domain infringes, misappropriates, or violates another party's rights.",
    ],
    afterBullets: [
      "DigitalPlat may control the defense of any matter subject to indemnification, and you agree to cooperate with our defense. You may not settle any claim in a way that imposes obligations on DigitalPlat without our prior written consent.",
    ],
  },
  {
    title: "20. Termination",
    paragraphs: [
      "You may stop using the Service at any time. You may also close your account if account closure functionality is available or by contacting DigitalPlat through the appropriate support channel.",
      "DigitalPlat may suspend or terminate your access to the Service at any time if we believe you violated these Terms, created risk, engaged in abuse, failed to pay amounts owed, initiated improper chargebacks, provided false information, compromised the security of the Service, violated law, or otherwise used the Service in a way that harms DigitalPlat, users, Upstream Providers, or the public.",
      "DigitalPlat may also terminate or discontinue the Service, a Namespace, a feature, or an account category for operational, legal, technical, security, financial, public-benefit, provider-related, or strategic reasons.",
      "Upon termination, your right to access or use the Service ends immediately. DigitalPlat may disable your account, Domains, DNS records, Slots, API access, and related features. We are not required to retain Content, registration data, DNS records, logs, or account data after termination, except as required by law or as described in our Privacy Policy.",
      "Sections that by their nature should survive termination will survive, including payment obligations, refund limitations, intellectual property provisions, disclaimers, limitation of liability, indemnification, governing law, and dispute provisions.",
    ],
  },
  {
    title: "21. Changes to Terms",
    paragraphs: [
      "DigitalPlat may update these Terms from time to time. Changes may be made to reflect new features, business model changes, legal requirements, security needs, abuse patterns, provider requirements, or improvements in clarity.",
      "When we make material changes, we will make reasonable efforts to provide notice, such as by posting the updated Terms, updating the effective date, sending an email, displaying an in-product notice, or using another appropriate communication method. Changes may take effect immediately where required for legal, security, abuse, provider, or operational reasons.",
      "Your continued access to or use of the Service after updated Terms become effective means you accept the updated Terms. If you do not agree to the updated Terms, you must stop using the Service.",
    ],
  },
  {
    title: "22. Governing Law and Venue",
    paragraphs: [
      "These Terms and any dispute arising out of or relating to these Terms or the Service are governed by the laws of the State of California, without regard to conflict of law principles.",
      "To the maximum extent permitted by law, the exclusive venue for any dispute arising out of or relating to these Terms or the Service will be the state or federal courts located in Los Angeles County, California. You and DigitalPlat consent to the personal jurisdiction of those courts.",
      "Nothing in this section prevents DigitalPlat from seeking injunctive or equitable relief in any jurisdiction where necessary to protect the Service, users, infrastructure, intellectual property, security, or public interest.",
    ],
  },
  {
    title: "23. Entire Agreement",
    paragraphs: [
      "These Terms, together with any policies or documents expressly incorporated by reference, constitute the entire agreement between you and DigitalPlat regarding the Service and supersede any prior or contemporaneous understandings, communications, or agreements regarding the Service.",
    ],
  },
  {
    title: "24. Severability",
    paragraphs: [
      "If any provision of these Terms is held to be invalid, illegal, or unenforceable, that provision will be enforced to the maximum extent permitted by law, and the remaining provisions will remain in full force and effect.",
    ],
  },
  {
    title: "25. No Waiver",
    paragraphs: [
      "DigitalPlat's failure to enforce any provision of these Terms does not waive its right to enforce that provision or any other provision later. Any waiver must be in writing and signed by an authorized representative of DigitalPlat to be effective.",
    ],
  },
  {
    title: "26. Contact",
    paragraphs: [
      "For general questions about DigitalPlat Domain, contact:",
      "General Contact: contact@digitalplat.org",
      "For abuse reports, security concerns, phishing, malware, spam, impersonation, or other harmful activity involving DigitalPlat Domain, contact:",
      "Abuse Reports: abusereport@digitalplat.org",
      "For legal notices, law enforcement requests, intellectual property complaints, or formal correspondence, contact:",
      "Legal: contact@digitalplat.org",
      "Please include enough information for us to review your request, such as the relevant Domain, account identifier if available, description of the issue, evidence, timestamps, contact information, and any legal documents or authority supporting the request.",
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

export default function TermsOfServicePage() {
  return (
    <Container>
      <article className="mx-auto max-w-4xl py-28 text-gray-700 dark:text-gray-300">
        <header className="mb-16 border-gray-200 border-b pb-10 dark:border-gray-800">
          <p className="mb-4 font-semibold text-primary text-sm uppercase tracking-wider">
            DigitalPlat Domain
          </p>
          <h1 className="font-bold text-4xl text-gray-950 md:text-5xl dark:text-white">
            Terms of Service
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
                    {section.title === "26. Contact" ? <ContactLink line={paragraph} /> : paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="list-disc space-y-3 pl-6">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.afterBullets?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </Container>
  );
}
