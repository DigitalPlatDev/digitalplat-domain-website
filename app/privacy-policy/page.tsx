import type { Metadata } from "next";

import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | DigitalPlat Domain",
  description: "DigitalPlat Domain Privacy Policy",
};

const effectiveDate = "June 29, 2026";

const sections = [
  {
    title: "Information We Collect",
    paragraphs: [
      "We collect information you provide when you create an account, register or manage Domains, configure DNS, contact support, submit abuse reports, purchase Buy Slots, or otherwise use DigitalPlat Domain.",
      "This may include your name, email address, account identifiers, contact information, billing metadata, registration data, DNS records, support messages, abuse report details, and other information you choose to provide.",
      "We also collect technical and usage information needed to operate and secure the Service, such as IP addresses, browser and device information, session data, request logs, security events, DNS activity, timestamps, and interactions with platform features.",
    ],
  },
  {
    title: "How We Use Information",
    paragraphs: [
      "We use information to provide, operate, secure, maintain, and improve DigitalPlat Domain. This includes account management, domain registration, DNS operation, Buy Slot processing, support, abuse prevention, fraud detection, service notices, and compliance with applicable law.",
      "We may use technical signals and logs to detect phishing, malware, spam, botnets, impersonation, account compromise, automated abuse, and other activity prohibited by our Terms of Service and Acceptable Use Policy.",
      "We do not sell personal information.",
    ],
  },
  {
    title: "Payments",
    paragraphs: [
      "Payments may be processed by third-party payment processors. DigitalPlat may receive payment status, transaction identifiers, billing metadata, fraud signals, and limited payment-related information needed to confirm purchases, prevent fraud, respond to disputes, and maintain account records.",
      "DigitalPlat does not intentionally store full payment card numbers through the public platform.",
    ],
  },
  {
    title: "Sharing and Disclosure",
    paragraphs: [
      "We may share information with service providers and infrastructure providers that help us operate the Service, including DNS providers, cloud providers, security vendors, communications providers, analytics providers, payment processors, registries, registrars, and other operational partners.",
      "We may disclose information where reasonably necessary to investigate abuse, respond to security incidents, enforce our policies, protect users, comply with law, respond to legal process, cooperate with Registry Operators or Registrars, or protect DigitalPlat and the public.",
      "Abuse reports may require sharing relevant technical information, DNS data, registration data, logs, screenshots, indicators, or account information with trusted security organizations, CERTs, Registry Operators, Registrars, law enforcement, courts, regulators, or affected parties where permitted by law.",
    ],
  },
  {
    title: "Retention",
    paragraphs: [
      "We retain information for as long as reasonably necessary to provide the Service, maintain records, resolve disputes, enforce agreements, investigate abuse, comply with legal obligations, and protect the platform.",
      "Security logs, abuse evidence, payment metadata, and domain records may be retained longer where needed for fraud prevention, abuse mitigation, legal compliance, or operational integrity.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We use reasonable technical, administrative, and organizational measures to protect information. No internet service can guarantee absolute security, but we work to reduce risk through access controls, monitoring, logging, and abuse response.",
      "You are responsible for keeping your account credentials secure and for promptly notifying DigitalPlat if you believe your account or Domains have been compromised.",
    ],
  },
  {
    title: "Your Choices and Rights",
    paragraphs: [
      "Depending on where you live, you may have rights to access, correct, delete, export, restrict, or object to certain processing of your personal information. To make a request, contact us at contact@digitalplat.org.",
      "We may need to verify your request before acting on it. Some information may be retained where required or permitted for security, abuse prevention, legal compliance, accounting, dispute resolution, or service operation.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "DigitalPlat Domain is not directed to children under 13. If we learn that we collected personal information from a child under 13 without appropriate consent, we will take reasonable steps to delete it.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Updates will be posted on this page with the effective date or last updated date.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "General privacy questions: contact@digitalplat.org",
      "Abuse reports: abusereport@digitalplat.org",
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

export default function PrivacyPolicyPage() {
  return (
    <Container>
      <article className="mx-auto max-w-4xl py-28 text-gray-700 dark:text-gray-300">
        <header className="mb-16 border-gray-200 border-b pb-10 dark:border-gray-800">
          <p className="mb-4 font-semibold text-primary text-sm uppercase tracking-wider">
            DigitalPlat Domain
          </p>
          <h1 className="font-bold text-4xl text-gray-950 md:text-5xl dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-6 text-gray-600 text-lg dark:text-gray-400">
            Effective Date: {effectiveDate}
          </p>
        </header>

        <div className="space-y-12">
          <section className="space-y-4 leading-7">
            <p>
              DigitalPlat Domains is operated by EdgeAlphix LLC. This Privacy Policy explains how we
              collect, use, disclose, retain, and protect information when you use the Service.
            </p>
          </section>

          {sections.map((section) => (
            <section key={section.title} className="scroll-mt-28">
              <h2 className="mb-5 font-semibold text-2xl text-gray-950 dark:text-white">
                {section.title}
              </h2>
              <div className="space-y-4 leading-7">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    {section.title === "Contact" ? <ContactLink line={paragraph} /> : paragraph}
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
