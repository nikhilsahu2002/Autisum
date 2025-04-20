import { useState } from "react";

export const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };
  const closeNavbar = () => {
    setOpenNavbar(false);
  };
  return (
    <>
      <div
        onClick={() => {
          closeNavbar();
        }}
        aria-hidden="true"
        className={`fixed bg-gray-800/40 inset-0 z-30 ${
          openNavbar ? "flex lg:hidden" : "hidden"
        }`}
      />
      <header className="absolute inset-x-0 top-0 flex items-center h-20 z-40">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <a href="/" className="text-xl font-semibold text-gray-800 ">
              <span className="relative after:absolute after:inset-0 after:rotate-3 after:border after:border-blue-600 text-blue-600 ">
                Health
              </span>
              Care
            </a>
          </div>
          <div
            className={`
                    absolute top-full left-0   py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:w-max lg:flex duration-300 ease-linear gap-x-6
                    ${
                      openNavbar
                        ? "opacity-100 translate-y-0 visible backdrop-blur-md"
                        : "translate-y-10  opacity-0 invisible lg:visible  lg:translate-y-0 lg:opacity-100"
                    }
                `}>
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700  lg:w-full lg:justify-center">
              <li>
                <a
                  href="/Diagnose/questionnaire_stage_1"
                  className="duration-300 ease-linear hover:text-blue-600 ">
                  Diagnose
                </a>
              </li>
              <li>
                <a
                  href="/Blog"
                  className="duration-300 ease-linear hover:text-blue-600 ">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/consultancy"
                  className="duration-300 ease-linear hover:text-blue-600 ">
                  Consultancy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleNavbar}
              aria-label="Toggle navbar"
              className="outline-none p-3">
              <span
                aria-hidden="true"
                className={`
        block h-1 w-6 rounded bg-gray-800 transition duration-300
        ${
          openNavbar
            ? "transform rotate-45 -translate-y-1.5 transform-origin-center"
            : ""
        }
      `}
              />
              <span
                aria-hidden="true"
                className={`
        block mt-1 h-1 w-6 rounded bg-gray-800 transition duration-300
        ${
          openNavbar
            ? "transform -rotate-45 -translate-y-1.5 transform-origin-center"
            : ""
        }
      `}
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
export default function HeroSection() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-20 lg:pt-24 pb-20 bg-blue-50 ">
          <div className="absolute top-0 inset-x-0 h-64 flex items-start">
            <div className="h-24 w-2/3 bg-gradient-to-br from-blue-500 opacity-20 blur-2xl "></div>
            <div className="h-20 w-3/5 bg-gradient-to-r from-[#488ad4] opacity-40 blur-2xl "></div>
          </div>
          <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 w-44 left-0 hidden ">
              <div className="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 "></div>
            </div>
            <div className="mx-auto space-y-8 text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
              <h1 className="text-blue-950  text-3xl/snug sm:text-5xl/tight lg:text-4xl/tight xl:text-[3.50rem]/tight font-bold">
                Revolutionizing Autism Diagnosis with MRI Scanning Technology
              </h1>
              <p className=" text-gray-700  lg:text-lg max-w-2xl lg:max-w-none mx-auto"></p>
              Revolutionizing Autism Diagnosis with MRI Scanning Technology"
              offers precise, early detection, revolutionizing intervention
              strategies and improving outcomes for autism spectrum disorders
              globally.
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[34rem] mx-auto lg:mx-0 w-full">
                <div className="relative text-center bg-white  border border-blue-100 dark:border-gray-950 p-5 rounded-3xl before:absolute before:inset-1 before:bg-blue-50 dark:before:bg-gray-950 before:rounded-[1.25rem]">
                  <span className="font-bold text-2xl text-gray-900 dark:text-gray-100 relative">
                    150+
                  </span>
                  <h2 className="text-sm text-gray-700 dark:text-gray-300 relative">
                    Visit
                  </h2>
                </div>
                <div className="relative text-center bg-white  border border-blue-100 dark:border-gray-950 p-5 rounded-3xl before:absolute before:inset-1 before:bg-blue-50 dark:before:bg-gray-950 before:rounded-[1.25rem]">
                  <span className="font-bold text-2xl text-gray-900 dark:text-gray-100 relative">
                    150+
                  </span>
                  <h2 className="text-sm text-gray-700 dark:text-gray-300 relative">
                    MRI test
                  </h2>
                </div>
                <div className="relative text-center bg-white  border border-blue-100 dark:border-gray-950 p-5 rounded-3xl before:absolute before:inset-1 before:bg-blue-50 dark:before:bg-gray-950 before:rounded-[1.25rem]">
                  <span className="font-bold text-2xl text-gray-900 dark:text-gray-100 relative">
                    150+
                  </span>
                  <h2 className="text-sm text-gray-700 dark:text-gray-300 relative">
                    Questionnaire
                  </h2>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-1 lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none">
              <div className="lg:absolute lg:right-0 md:w-5/6 md:h-auto lg:w-full lg:h-full bg-blue-100 overflow-hidden rounded-b-[24px]">
                <img
                  src="https://www.shutterstock.com/image-photo/kid-boy-hands-holding-puzzle-600nw-1926666809.jpg"
                  alt="happy team"
                  width={1850}
                  height="auto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
