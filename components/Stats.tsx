import Image from "next/image";

import Container from "@/components/Container";

import Pie from "@/public/images/pie.svg";

export async function Stats() {
  return (
    <div id="solution">
      <Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-sky-500"
        >
          <path
            fillRule="evenodd"
            d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
            clipRule="evenodd"
          />
        </svg>

        <div className="flex-row-reverse justify-between space-y-6 text-gray-600 md:flex md:gap-6 md:space-y-0 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-1/2">
            <Image src={Pie} alt="image" loading="lazy" className="w-full" />
          </div>
          <div className="md:7/12 space-y-6 lg:w-1/2">
            <h2 className="font-bold text-3xl text-gray-900 md:text-4xl dark:text-white">
              Stewardship that protects the namespace for the long term
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              DigitalPlat Domain is operated by DigitalPlat Foundation, an independent U.S.
              501(c)(3) public charity supporting Internet Freedom, open infrastructure, digital
              rights, and access to technology. EIN: 38-4397252. We maintain reliable
              infrastructure, transparent policies, and humane abuse response so the namespace
              remains stable, interoperable, and worthy of trust.
            </p>
            <div className="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
              <div className="flex gap-4 pt-0 md:items-center">
                <div className="flex h-12 w-12 gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="m-auto h-6 w-6 text-indigo-500 dark:text-indigo-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="w-5/6">
                  <h3 className="font-semibold text-gray-700 text-lg dark:text-indigo-300">
                    Open access, global reach
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Names are available worldwide with bring-your-own DNS flexibility.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pt-4 md:items-center">
                <div className="flex h-12 w-12 gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="m-auto h-6 w-6 text-teal-600 dark:text-teal-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="w-5/6">
                  <h3 className="font-semibold text-gray-700 text-lg dark:text-teal-300">
                    Trustworthy governance
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Policies on privacy and acceptable use prioritize safety, accountability, and
                    respect for internet freedom.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pt-4 md:items-center">
                <div className="flex h-12 w-12 gap-4 rounded-full bg-sky-100 dark:bg-sky-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="m-auto h-6 w-6 text-sky-600 dark:text-sky-400"
                  >
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <line
                      x1="6"
                      y1="6"
                      x2="18"
                      y2="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="w-5/6">
                  <h3 className="font-semibold text-gray-700 text-lg dark:text-sky-300">
                    Abuse response with care
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our Trust & Safety Team works alongside automated abuse detection and trusted
                    security partners to review reports, remove harmful domains, and protect
                    legitimate expression and access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
