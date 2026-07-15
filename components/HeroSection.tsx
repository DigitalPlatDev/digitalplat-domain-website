import Container from "@/components/Container";

const namespaces = ["*.qzz.io", "*.dpdns.org", "*.us.kg", "*.xx.kg", "*.qd.je"];

export async function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-gray-200 border-b bg-white pt-32 dark:border-gray-800 dark:bg-gray-950"
      id="home"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(99,102,241,0.13),transparent_34%),radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.08),transparent_26%)]"
      ></div>
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:48px_48px] dark:opacity-10"
      ></div>

      <Container>
        <div className="relative grid items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:py-24">
          <div>
            <p className="mb-6 font-semibold text-indigo-600 text-sm uppercase tracking-[0.18em] dark:text-indigo-400">
              Open namespace infrastructure
            </p>
            <h1 className="max-w-3xl text-balance font-semibold text-5xl text-gray-950 leading-[1.04] tracking-[-0.045em] md:text-6xl lg:text-7xl dark:text-white">
              A trusted name for what you build next.
            </h1>
            <p className="mt-7 max-w-2xl text-gray-600 text-lg leading-8 md:text-xl dark:text-gray-300">
              Register a free public name, connect the DNS provider you already trust, and build on
              an identity that stays portable as your project grows.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://dash.domain.digitalplat.org/"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-gray-950 px-6 font-semibold text-sm text-white shadow-sm transition hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-950 dark:hover:bg-indigo-200"
              >
                Register a domain
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="ml-2 h-4 w-4">
                  <path
                    d="M4 10h12m-5-5 5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="/#features"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white/70 px-6 font-semibold text-gray-700 text-sm backdrop-blur transition hover:border-gray-400 hover:bg-white dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-200 dark:hover:bg-gray-900"
              >
                Explore the platform
              </a>
            </div>
            <p className="mt-6 flex items-center gap-2 text-gray-500 text-sm dark:text-gray-400">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 text-emerald-500"
              >
                <path
                  d="m5.5 10.5 3 3 6-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Free registration available. No hosting lock-in.
            </p>
          </div>

          <div className="relative lg:pl-4">
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[2rem] bg-indigo-500/10 blur-2xl"
            ></div>
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-950/10 dark:border-gray-700 dark:bg-gray-900">
              <div className="flex items-center justify-between border-gray-200 border-b px-5 py-4 dark:border-gray-800">
                <div>
                  <p className="font-semibold text-gray-950 text-sm dark:text-white">
                    Public namespaces
                  </p>
                  <p className="mt-1 text-gray-500 text-xs dark:text-gray-400">
                    Choose a name for your next project
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 font-medium text-emerald-700 text-xs dark:bg-emerald-950/50 dark:text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Open
                </div>
              </div>
              <div className="divide-y divide-gray-100 px-2 dark:divide-gray-800">
                {namespaces.map((namespace) => (
                  <div key={namespace} className="flex items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 font-semibold text-gray-500 text-xs dark:bg-gray-800 dark:text-gray-300">
                        DNS
                      </div>
                      <span className="font-medium font-mono text-gray-900 text-sm dark:text-gray-100">
                        {namespace}
                      </span>
                    </div>
                    <span className="text-gray-400 text-xs">Available</span>
                  </div>
                ))}
              </div>
              <div className="border-gray-200 border-t bg-gray-50 px-6 py-4 dark:border-gray-800 dark:bg-gray-900/80">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="font-medium text-gray-800 text-sm dark:text-gray-200">
                      Bring your own DNS
                    </p>
                    <p className="mt-1 text-gray-500 text-xs dark:text-gray-400">
                      Connect external nameservers (NS).
                    </p>
                  </div>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 shrink-0 text-indigo-500"
                  >
                    <path
                      d="M6.5 18.5h11a4 4 0 0 0 .42-7.98A6 6 0 0 0 6.5 9.5a4.5 4.5 0 0 0 0 9Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative grid border-gray-200 border-t sm:grid-cols-3 dark:border-gray-800">
          <div className="py-6 sm:border-gray-200 sm:border-r sm:pr-8 dark:sm:border-gray-800">
            <p className="font-semibold text-gray-950 text-lg dark:text-white">Free to start</p>
            <p className="mt-1 text-gray-500 text-sm dark:text-gray-400">
              Public names for individuals and projects
            </p>
          </div>
          <div className="border-gray-200 border-t py-6 sm:border-t-0 sm:border-r sm:px-8 dark:border-gray-800">
            <p className="font-semibold text-gray-950 text-lg dark:text-white">Provider neutral</p>
            <p className="mt-1 text-gray-500 text-sm dark:text-gray-400">
              Use the DNS and hosting stack you prefer
            </p>
          </div>
          <div className="border-gray-200 border-t py-6 sm:border-t-0 sm:pl-8 dark:border-gray-800">
            <p className="font-semibold text-gray-950 text-lg dark:text-white">Built for reach</p>
            <p className="mt-1 text-gray-500 text-sm dark:text-gray-400">
              Accessible to communities worldwide
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
