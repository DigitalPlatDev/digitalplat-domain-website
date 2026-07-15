import Container from "@/components/Container";

export async function AppFooter() {
  return (
    <footer className="border-gray-100 border-t py-12 dark:border-gray-800">
      <Container>
        <div className="flex flex-col gap-8 text-gray-600 lg:flex-row lg:items-center lg:justify-between dark:text-gray-300">
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="font-semibold text-gray-900 text-lg dark:text-white">
                DigitalPlat Domain
              </span>
            </div>
            <p className="max-w-xl text-gray-500 text-sm dark:text-gray-400">
              A nonprofit stewarding free, public-benefit namespaces so everyone can build a trusted
              home on the internet.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="/about" className="transition hover:text-primary">
              About
            </a>
            <a href="/acceptable-use-policy" className="transition hover:text-primary">
              Acceptable Use
            </a>
            <a href="/privacy-policy" className="transition hover:text-primary">
              Privacy
            </a>
            <a href="/terms-of-service" className="transition hover:text-primary">
              Terms
            </a>
            <a href="mailto:contact@digitalplat.org" className="transition hover:text-primary">
              contact@digitalplat.org
            </a>
            <span className="text-gray-400">|</span>
            <a href="tel:+18559805959" className="transition hover:text-primary">
              +1-855-980-5959
            </a>
          </div>
          <div className="text-gray-500 text-sm dark:text-gray-400">
            <span className="block">
              DigitalPlat Foundation is an independent U.S. 501(c)(3) public charity supporting
              Internet Freedom, open infrastructure, digital rights, and access to technology. EIN:
              38-4397252.
            </span>
            <span className="block">&copy; {new Date().getFullYear()} DigitalPlat Domain</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
