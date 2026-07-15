import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <Container>
      <div className="mx-auto max-w-4xl space-y-8 py-28 text-gray-700 dark:text-gray-200">
        <h1 className="font-bold text-4xl text-gray-900 dark:text-white">
          About DigitalPlat Domain
        </h1>
        <p className="text-lg">
          DigitalPlat Domain was initiated by Edward Hsing in August 2023 as part of the DigitalPlat
          Foundation’s mission to make internet infrastructure more open and accessible. Today, the
          namespace is operated and held by the DigitalPlat Foundation as a public-benefit
          initiative that keeps domain names free for individuals and organizations.
        </p>
        <p>
          DigitalPlat Foundation is an independent U.S. 501(c)(3) public charity supporting Internet
          Freedom, open infrastructure, digital rights, and access to technology. EIN: 38-4397252.
          Our governance prioritizes safety, accountability, and interoperability so the namespace
          remains stable for the long term.
        </p>
        <p>
          Whether you are building your first website, launching a civic project, or growing an
          open-source community, DigitalPlat Domain exists to provide a trusted name without cost or
          gatekeeping. Donations directly support this nonprofit work and help us maintain resilient
          infrastructure for everyone.
        </p>
        <div className="space-y-2 rounded-2xl border border-gray-200 p-6 shadow-sm dark:border-gray-800">
          <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">Contact</h2>
          <p>General inquiries: contact@digitalplat.org</p>
          <p>Toll-free: +1-855-980-5959</p>
        </div>
      </div>
    </Container>
  );
}
