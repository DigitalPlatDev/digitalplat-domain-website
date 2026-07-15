"use client";

import { useState } from "react";

import Container from "@/components/Container";

const links = [
  {
    to: "/#features",
    label: "Platform",
  },
  {
    to: "/#solution",
    label: "How it works",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/abuse",
    label: "Abuse",
  },
];

export function AppHeader() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <header>
      <nav
        id="nav"
        className="group absolute z-10 w-full border-gray-200/70 border-b bg-white/70 backdrop-blur-xl dark:border-gray-800/70 dark:bg-gray-950/70"
        data-state={isToggled ? "active" : ""}
      >
        <Container>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3.5 md:gap-0">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-fit">
              <a href="/#home" aria-label="DigitalPlat Domains home" className="flex items-center">
                <span className="font-semibold text-gray-950 text-lg tracking-[-0.02em] dark:text-white">
                  DigitalPlat Domains
                </span>
              </a>
              <div className="relative flex max-h-10 items-center lg:hidden">
                <button
                  aria-label="Toggle navigation"
                  id="hamburger"
                  className="relative -mr-6 p-6 duration-300 active:scale-95"
                  onClick={() => setIsToggled((prev) => !prev)}
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 origin-top rounded-sm bg-gray-950 transition duration-300 group-data-[state=active]:translate-y-1.5 group-data-[state=active]:rotate-45 dark:bg-white"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 origin-bottom rounded-sm bg-gray-950 transition duration-300 group-data-[state=active]:-translate-y-1 group-data-[state=active]:-rotate-45 dark:bg-white"
                  ></div>
                </button>
              </div>
            </div>
            <div
              id="navLayer"
              aria-hidden="true"
              className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 group-data-[state=active]:origin-top group-data-[state=active]:scale-y-100 lg:hidden dark:bg-gray-950/70"
            ></div>
            <div
              id="navlinks"
              className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-95 flex-col flex-wrap justify-end gap-6 rounded-2xl border border-gray-200 bg-white p-7 opacity-0 shadow-gray-950/10 shadow-xl transition-all duration-200 group-data-[state=active]:visible group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 lg:visible lg:relative lg:flex lg:w-fit lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:group-data-[state=active]:translate-y-0 dark:border-gray-700 dark:bg-gray-900 dark:shadow-none lg:dark:bg-transparent"
            >
              <div className="w-full text-gray-600 lg:w-auto lg:pt-0 lg:pr-5 dark:text-gray-300">
                <div
                  id="links-group"
                  className="flex flex-col gap-6 lg:flex-row lg:gap-0 lg:text-sm"
                >
                  {links.map((link, i) => (
                    <a
                      key={`link-${i}`}
                      href={link.to}
                      className="block font-medium transition hover:text-gray-950 md:px-4 dark:hover:text-white"
                      onClick={() => setIsToggled((prev) => !prev)}
                    >
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-12 lg:mt-0">
                <a
                  href="https://dash.domain.digitalplat.org/auth/register"
                  className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-gray-950 px-5 font-semibold text-sm text-white transition hover:bg-indigo-600 sm:w-auto dark:bg-white dark:text-gray-950 dark:hover:bg-indigo-200"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
