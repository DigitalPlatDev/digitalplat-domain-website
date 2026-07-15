import Container from "@/components/Container";

const principles = [
  {
    number: "01",
    title: "Interoperability",
    description:
      "Open DNS choices keep your identity independent from any single hosting or infrastructure provider.",
  },
  {
    number: "02",
    title: "Responsible access",
    description:
      "Practical safeguards protect the namespace without placing unnecessary barriers in front of legitimate builders.",
  },
  {
    number: "03",
    title: "Long-term reliability",
    description:
      "Clear policies and careful operations support a service that people can confidently build around.",
  },
];

export async function Blog() {
  return (
    <section id="blog" className="pb-24 md:pb-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 border-gray-200 border-b pb-10 md:flex-row md:items-end dark:border-gray-800">
          <div>
            <p className="font-semibold text-indigo-600 text-sm uppercase tracking-[0.18em] dark:text-indigo-400">
              Principles
            </p>
            <h2 className="mt-5 text-balance font-semibold text-4xl text-gray-950 tracking-[-0.035em] md:text-5xl dark:text-white">
              Built for an open internet.
            </h2>
          </div>
          <p className="max-w-md text-gray-500 leading-7 md:text-right dark:text-gray-400">
            The decisions behind DigitalPlat Domains are guided by a small set of durable
            principles.
          </p>
        </div>
        <div className="grid md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="border-gray-200 border-b py-8 md:border-r md:border-b-0 md:px-8 md:py-10 md:last:border-r-0 md:last:pr-0 md:first:pl-0 dark:border-gray-800"
            >
              <span className="font-mono text-indigo-500 text-sm">{principle.number}</span>
              <h3 className="mt-8 font-semibold text-2xl text-gray-950 dark:text-white">
                {principle.title}
              </h3>
              <p className="mt-4 text-gray-500 leading-7 dark:text-gray-400">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
