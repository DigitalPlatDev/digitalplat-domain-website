import Container from "@/components/Container";

export async function CallToAction() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-indigo-600 px-7 py-14 text-white shadow-2xl shadow-indigo-950/20 sm:px-12 md:py-20 lg:px-20">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-20 h-80 w-80 rounded-full border-[60px] border-white/5"
          ></div>
          <div
            aria-hidden="true"
            className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full border-[60px] border-white/5"
          ></div>
          <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="font-semibold text-indigo-200 text-sm uppercase tracking-[0.18em]">
                Start building
              </p>
              <h2 className="mt-5 text-balance font-semibold text-4xl tracking-[-0.035em] md:text-5xl">
                Give your next project a name.
              </h2>
              <p className="mt-5 max-w-xl text-indigo-100 text-lg leading-8">
                Create an account, choose an available namespace, and connect the infrastructure you
                already use.
              </p>
            </div>
            <a
              href="https://dash.domain.digitalplat.org/"
              className="inline-flex h-12 w-full shrink-0 items-center justify-center rounded-lg bg-white px-6 font-semibold text-indigo-700 text-sm shadow-lg transition hover:bg-indigo-50 sm:w-auto"
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
          </div>
        </div>
      </Container>
    </section>
  );
}
