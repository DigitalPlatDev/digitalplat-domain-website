import Container from "@/components/Container";

export async function AppFooter() {
  return (
    <footer className="border-gray-200 border-t bg-gray-50 py-14 dark:border-gray-800 dark:bg-gray-950">
      <Container>
        <div className="grid gap-10 text-gray-600 lg:grid-cols-[1.2fr_1fr] lg:gap-16 dark:text-gray-300">
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="font-semibold text-gray-900 text-lg dark:text-white">
                DigitalPlat Domains
              </span>
            </div>
            <p className="max-w-xl text-gray-500 text-sm dark:text-gray-400">
              Free, flexible public namespaces for people, projects, and organizations worldwide.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col items-start gap-3 text-sm">
              <p className="font-semibold text-gray-900 dark:text-white">Service</p>
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
            </div>
            <div className="flex flex-col items-start gap-3 text-sm">
              <p className="font-semibold text-gray-900 dark:text-white">Contact</p>
              <a href="mailto:contact@digitalplat.org" className="transition hover:text-primary">
                contact@digitalplat.org
              </a>
              <a href="tel:+18559805959" className="transition hover:text-primary">
                +1-855-980-5959
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-gray-200 border-t pt-7 text-gray-500 text-xs leading-5 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800 dark:text-gray-400">
          <p>Operated by EdgeAlphix LLC</p>
          <p className="shrink-0">&copy; {new Date().getFullYear()} DigitalPlat Domains</p>
        </div>
      </Container>
    </footer>
  );
}
