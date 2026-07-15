import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <Container>
      <div className="mx-auto max-w-4xl space-y-8 py-28 text-gray-700 dark:text-gray-200">
        <h1 className="font-bold text-4xl text-gray-900 dark:text-white">
          About DigitalPlat Domains
        </h1>
        <p className="text-lg">
          DigitalPlat Domains was initiated by Edward Hsing in August 2023 to make internet
          infrastructure more open and accessible. Today, DigitalPlat Domains is operated by
          EdgeAlphix LLC, which provides the service, billing, infrastructure, and support.
        </p>
        <p>
          DigitalPlat Foundation, Inc. is an independent 501(c)(3) organization and does not operate
          or bill for DigitalPlat Domains.
        </p>
        <p>
          Whether you are building your first website, launching a civic project, or growing an
          open-source community, DigitalPlat Domains provides accessible names without unnecessary
          gatekeeping. Any charges are service fees paid to EdgeAlphix LLC, not donations, and are
          not represented as tax-deductible contributions.
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
