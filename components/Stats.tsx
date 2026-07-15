import Container from "@/components/Container";

const steps = [
  { title: "Register your name", detail: "Choose an available public namespace", status: "01" },
  { title: "Connect your DNS", detail: "Point to the provider you already use", status: "02" },
  {
    title: "Build and publish",
    detail: "Keep full control of your application stack",
    status: "03",
  },
];

export async function Stats() {
  return (
    <section id="solution" className="scroll-mt-24 bg-gray-950 py-24 text-white md:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="font-semibold text-indigo-300 text-sm uppercase tracking-[0.18em]">
              How it works
            </p>
            <h2 className="mt-5 text-balance font-semibold text-4xl tracking-[-0.035em] md:text-5xl">
              From idea to a live name in three steps.
            </h2>
            <p className="mt-6 max-w-xl text-gray-400 text-lg leading-8">
              A focused workflow gets you online without bundling hosting, DNS, or tools you do not
              need.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-gray-300 text-sm">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>No hosting lock-in
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>Clear usage policies
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>Responsive abuse
                handling
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl">
            <div className="flex items-center justify-between border-white/10 border-b px-6 py-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
              </div>
              <span className="font-mono text-gray-500 text-xs">domain.setup</span>
            </div>
            <div className="p-4 sm:p-6">
              {steps.map((step, index) => (
                <div key={step.title} className="relative flex gap-4 pb-7 last:pb-0">
                  {index < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute top-9 left-4 h-[calc(100%-2rem)] w-px bg-white/10"
                    ></div>
                  )}
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-indigo-400/40 bg-indigo-400/10 font-mono text-indigo-300 text-xs">
                    {step.status}
                  </div>
                  <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-medium text-white">{step.title}</p>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-4 w-4 shrink-0 text-emerald-400"
                      >
                        <path
                          d="m5 10 3 3 7-7"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="mt-1.5 text-gray-400 text-sm">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
