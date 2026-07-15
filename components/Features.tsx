import Container from "@/components/Container";

const features = [
  {
    title: "Open by default",
    description:
      "Start with a free public name and a straightforward registration experience designed for real projects, not domain speculation.",
    icon: (
      <path
        d="M12 3v18M3 12h18M5.6 5.6a9 9 0 0 0 0 12.8m12.8 0a9 9 0 0 0 0-12.8M3 12h18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Secure in practice",
    description:
      "Automated signals and human review work together to detect abuse quickly while keeping legitimate projects online.",
    icon: (
      <path
        d="M12 3 5.5 5.5v5.8c0 4.2 2.6 7.8 6.5 9.7 3.9-1.9 6.5-5.5 6.5-9.7V5.5L12 3Zm-3 9 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Portable by design",
    description:
      "Connect any compatible DNS, CDN, or hosting provider. Your infrastructure choices remain yours as you scale.",
    icon: (
      <path
        d="M8 7h10m0 0-3-3m3 3-3 3M16 17H6m0 0 3 3m-3-3 3-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export async function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="font-semibold text-indigo-600 text-sm uppercase tracking-[0.18em] dark:text-indigo-400">
              Platform
            </p>
            <h2 className="mt-5 text-balance font-semibold text-4xl text-gray-950 tracking-[-0.035em] md:text-5xl dark:text-white">
              Infrastructure that stays out of your way.
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-8 dark:text-gray-300">
              DigitalPlat Domains gives builders a credible public identity without dictating the
              rest of their stack.
            </p>
          </div>
          <div className="grid gap-4">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="group grid gap-5 rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:border-indigo-200 hover:shadow-indigo-950/5 hover:shadow-lg sm:grid-cols-[auto_1fr_auto] sm:items-center md:p-7 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-800"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-300">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                    {feature.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-950 text-xl dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-gray-500 leading-7 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
                <span className="hidden font-mono text-gray-300 text-sm sm:block dark:text-gray-700">
                  0{index + 1}
                </span>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
