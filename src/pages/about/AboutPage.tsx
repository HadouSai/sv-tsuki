import "./AboutPage.css";
import { TypescriptSvg } from "../../ui/atoms/icons/TypescriptSvg";
import { JavascriptSvg } from "../../ui/atoms/icons/JavascriptSvg";
import { GraphqlSvg } from "../../ui/atoms/icons/GraphqlSvg";
import { GithubSvg } from "../../ui/atoms/icons/GithubSvg";
import { ReactSvg } from "../../ui/atoms/icons/ReactSvg";
import { AngularSvg } from "../../ui/atoms/icons/AngularSvg";
import { CondingSkills } from "../../ui/atoms/icons/CondingSkills";

interface Props {}

export const AboutPage = (props: Props) => {
  const items = [
    {
      id: "1aa",
      comp: <TypescriptSvg />,
    },
    { id: "1a", comp: <JavascriptSvg /> },
    { id: "1c", comp: <ReactSvg /> },
    { id: "1d", comp: <AngularSvg /> },
    { id: "1b", comp: <GraphqlSvg /> },
    { id: "1e", comp: <GithubSvg /> },
  ];

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
              <CondingSkills />
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

            <div className="pt-7 pb-10">
              <ul className="flex flex-wrap justify-center">
                {items.map((item) => (
                  <li className="card" key={item.id}>
                    {item.comp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
