import Container from "@/components/Container";

export async function Blog() {
  return (
    <div id="blog">
      <Container>
        <div className="mb-12 space-y-2 text-center">
          <h2 className="font-bold text-3xl text-gray-800 md:text-4xl dark:text-white">
            Commitments that guide our work
          </h2>
          <p className="text-gray-600 lg:mx-auto lg:w-6/12 dark:text-gray-300">
            DigitalPlat Domain exists to keep the internet open, trustworthy, and inclusive. These
            commitments shape every decision we make.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-6 shadow-2xl shadow-gray-600/10 sm:p-8 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative mt-6">
              <h3 className="font-semibold text-2xl text-gray-800 dark:text-white">
                Open, interoperable access
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Free namespaces with bring-your-own DNS keep people in control of their identity and
                infrastructure choices.
              </p>
            </div>
          </div>
          <div className="group rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-6 shadow-2xl shadow-gray-600/10 sm:p-8 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative mt-6">
              <h3 className="font-semibold text-2xl text-gray-800 dark:text-white">
                Safety with dignity
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Automated abuse review and trusted security reporting protect users while respecting
                privacy and free expression.
              </p>
            </div>
          </div>
          <div className="group rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-6 shadow-2xl shadow-gray-600/10 sm:p-8 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative mt-6">
              <h3 className="font-semibold text-2xl text-gray-800 dark:text-white">
                Nonprofit stewardship
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                DigitalPlat Domain is operated by DigitalPlat Foundation, an independent U.S.
                501(c)(3) public charity supporting Internet Freedom, open infrastructure, digital
                rights, and access to technology. EIN: 38-4397252.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
