import React from "react";
import "./AboutPage.css";
import { TeaLoverSvg } from "../../ui/atoms/icons/TeaLoverSvg";

interface Props {}

export const AboutPage = (props: Props) => {
  return (
    <main className="main-section grid bg-primary relative">
      <section className="first-section">
        <div className="container m-auto flex justify-around items-center flex-col pt-28 pb-7 px-7 lg:flex lg:pt-36 lg:px-28 lg:flex-row">
          <div className="w-full">
            <h2 className="text-primary text-2xl font-semibold sm:text-3xl">
              WHO <span className="text-main">I'M</span>
            </h2>
            <p className="pt-6 text-primary text-lg sm:text-xl 2xl:text-2xl">
              Hello there, I'm Diego Alexander from colombia, i'm 22 years old,
              at the moment i'm learning english i'm continue working on it. I
              have 2 years old of experience working on a company of software
              contable.
            </p>

            <p className="pt-10 text-primary text-lg sm:text-xl 2xl:text-2xl">
              Some activities that i like to make
            </p>

            <ul className="pt-6 text-primary text-lg sm:text-xl 2xl:text-2xl">
              <li>Play video games</li>
              <li>Watch Anime and listen Kpop</li>
              <li>Sleep and go to the gym</li>
            </ul>
          </div>

          <div className="pt-14 h-2/3 sm:pt-18 sm:w-96 lg:h-auto lg:w-2/4">
            <span className="flex h-full sm:w-full lg:w-3/5 lg:mx-auto">
              <TeaLoverSvg />
            </span>
          </div>
        </div>
      </section>

      <section className="second-section bg-wallpaperSections pt-7 pb-12 px-7 xl:pt-10">
        <div className="cont-present container flex flex-col justify-center items-center m-auto pt-20 xl:flex-row">
          <div className="flex flex-col text-primary sm:w-10/12">
            <h2 className="text-primary text-2xl font-semibold sm:text-3xl">
              Professional <span className="text-mainNavbar">Skills</span>
            </h2>

            <div className="">
              <ul>
                <li className="card">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1.1"   
                    viewBox="0 0 32 32"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"></path>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
