import Container from "@/components/Container";

export default function AbuseReportPage() {
  return (
    <Container>
      <div className="mx-auto max-w-4xl space-y-8 py-28 text-gray-700 dark:text-gray-200">
        <h1 className="font-bold text-4xl text-gray-900 dark:text-white">Report Abuse</h1>
        <p className="text-lg">
          We take domain abuse seriously and handle every report with care. Each submission is
          reviewed by our team, and response times may vary from a few hours to several days based
          on complexity and risk. Our goal is to keep the namespace safe while protecting legitimate
          speech and access.
        </p>
        <div className="space-y-3 rounded-2xl border border-gray-200 p-6 shadow-sm dark:border-gray-800">
          <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">How to reach us</h2>
          <p>
            <strong>Email (abuse):</strong> abusereport@digitalplat.org
          </p>
          <p>
            <strong>General contact:</strong> contact@digitalplat.org
          </p>
        </div>
        <section className="space-y-3">
          <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">
            Abuse report form
          </h2>
          <iframe
            title="Abuse report form"
            src="https://support.edgealphix.com/?recipient=DIGITALPLAT_ABUSE_REPORT"
            className="min-h-[720px] w-full rounded-lg border border-gray-200 dark:border-gray-800"
          />
        </section>
        <p className="font-semibold text-gray-900 text-lg dark:text-white">
          Let's keep the internet safe and free for everyone.
        </p>
      </div>
    </Container>
  );
}
