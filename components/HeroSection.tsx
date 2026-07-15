import Image from "next/image";

import Container from "@/components/Container";

import Twilio from "@/public/images/sponsors/twilio.svg";
import github from "@/public/images/sponsors/github.svg";
import onepassword from "@/public/images/sponsors/1password.svg";
import cloudflare from "@/public/images/sponsors/cloudflare.svg";

export async function HeroSection() {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
        <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative ml-auto pt-36">
          <div className="mx-auto text-center lg:w-2/3">
            <h1 className="text-balance font-bold text-5xl text-gray-900 md:text-6xl xl:text-7xl dark:text-white">
              A public namespace for everyone to belong online.
            </h1>
            <p className="mt-8 text-gray-700 text-lg dark:text-gray-300">
              DigitalPlat Domain is a nonprofit stewarding free, resilient namespaces so people and organizations everywhere can claim a trusted home on the internet, and we operate and manage public namespaces such as *.qzz.io, *.dpdns.org, *.us.kg, *.xx.kg, offering free registration and administration to individuals and communities worldwide.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-4">
              <a
                href="https://dash.domain.digitalplat.org/"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative font-semibold text-base text-white">
                  Register a domain
                </span>
              </a>
              <a
                href="/about"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-gradient-to-b before:bg-primary/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max dark:before:border-gray-700 dark:before:bg-gray-800"
              >
                <span className="relative font-semibold text-base text-primary dark:text-white">
                  Learn about our mission
                </span>
              </a>
            </div>
            <div className="mt-16 hidden justify-between border-gray-100 border-y py-8 sm:flex dark:border-gray-800">
              <div className="text-left">
                <h6 className="font-semibold text-gray-700 text-lg dark:text-white">
                  Free public namespaces
                </h6>
                <p className="mt-2 text-gray-500">
                  Open registration for individuals and projects worldwide under domains such as *.dpdns.org, .qzz.io, .us.kg, etc.
                </p>
              </div>
              <div className="text-left">
                <h6 className="font-semibold text-gray-700 text-lg dark:text-white">
                  Responsible stewardship
                </h6>
                <p className="mt-2 text-gray-500">
                  Operated as a nonprofit initiative with governance, safeguards, and abuse
                  response.
                </p>
              </div>
              <div className="text-left">
                <h6 className="font-semibold text-gray-700 text-lg dark:text-white">
                  Built for access
                </h6>
                <p className="mt-2 text-gray-500">
                  Bring your own DNS provider, CDN, or hosting while keeping your name portable.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="mb-6 text-center text-gray-600 text-sm font-medium dark:text-gray-300">
              Our Sponsors
            </h2>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
              <div className="flex h-16 items-center justify-center p-4 grayscale transition duration-200 hover:grayscale-0">
                <Image
                  src={github}
                  className="h-12 w-auto"
                  loading="lazy"
                  alt="sponsor logo"
                />
              </div>

              <div className="flex h-16 items-center justify-center p-4 grayscale transition duration-200 hover:grayscale-0">
                <Image
                  src={Twilio}
                  className="h-12 w-auto"
                  loading="lazy"
                  alt="sponsor logo"
                />
              </div>

              <div className="flex h-16 items-center justify-center p-4 grayscale transition duration-200 hover:grayscale-0">
                <Image
                  src={onepassword}
                  className="h-10 w-auto"
                  loading="lazy"
                  alt="sponsor logo"
                />
              </div>

              <div className="flex h-16 items-center justify-center p-4 grayscale transition duration-200 hover:grayscale-0">
                <Image
                  src={cloudflare}
                  className="h-9 w-auto"
                  loading="lazy"
                  alt="sponsor logo"
                />
              </div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
