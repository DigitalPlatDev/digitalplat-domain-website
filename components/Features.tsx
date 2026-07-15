import Image from "next/image";

import Container from "@/components/Container";

import Compas from "@/public/images/compas.webp";
import Hat from "@/public/images/hat.webp";
import Recorder from "@/public/images/recorder.webp";

export async function Features() {
  return (
    <div id="features" className="-mt-28 pt-28">
      <Container>
        <div className="md:w-2/3 lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 text-secondary"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            />
          </svg>

          <h2 className="my-8 font-bold text-2xl text-gray-700 md:text-4xl dark:text-white">
            An open namespace built for the public good
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            DigitalPlat Domain keeps the doorway to the internet unlocked. We combine open access,
            resilient infrastructure, and accountable governance so anyone can secure a trustworthy
            identity online without barriers.
          </p>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3 dark:divide-gray-700 dark:border-gray-700">
          <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
            <div className="relative space-y-8 p-8 py-12">
              <Image
                src={Compas}
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="font-semibold text-gray-700 text-xl transition group-hover:text-secondary dark:text-white">
                  Access without gatekeepers
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Free namespaces so anyone—students, community builders, open-source maintainers,
                  civic organizations—can establish a credible presence online.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
            <div className="relative space-y-8 p-8 py-12">
              <Image
                src={Recorder}
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="font-semibold text-gray-700 text-xl transition group-hover:text-secondary dark:text-white">
                  Security with accountability
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Governance, AI safeguards models, integrations with multiple security partners, and automated abuse-detection APIs continuously scan and remediate potentially malicious or unlawful domains. Our real-time AI Safeguard System actively monitors registration patterns and flags threats for immediate action, ensuring the namespace remains secure while still preserving openness and user trust.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
            <div className="relative space-y-8 p-8 py-12">
              <Image
                src={Hat}
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="font-semibold text-gray-700 text-xl transition group-hover:text-secondary dark:text-white">
                  Portability by design
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Bring your own DNS, CDN, or hosting provider (e.g. Cloudflare, AWS, Hostry, FreeDNS) while keeping your DigitalPlat
                  identity stable as you grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
