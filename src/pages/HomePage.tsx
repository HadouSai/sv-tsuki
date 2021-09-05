import ManCodingSvg from "../assets/svg/man-coding.a.svg";
import { TypeWriter } from "../ui/atoms/typewriter-effect/TypeWriter";
import "./homePage.css";

export const HomePage = () => {
  return (
    <main className="main-section grid bg-primary relative">
      <section className="first-section flex justify-around items-center flex-col pt-28 pb-7 px-7 lg:flex lg:pt-36 lg:px-28 lg:flex-row">
        <div className="pt-4 relative ">
          <h2 className="text-primary text-2xl font-semibold sm:text-3xl">
            Hello there
          </h2>
          <h1 className="text-primary pt-2 font-bold text-m-m word-spacing-2 sm:text-4xl">
            I'M
            <span className="text-main word-spacing-1"> DIEGO BELLO</span>
          </h1>

          <span className="text-main font-bold text-m-s block pt-10 sm:text-3xl">
            {/* <TypeWriter id={"123a"} phrase={"React Developer"} speed={1000} /> */}
            React Developer
          </span>
        </div>

        <div className="pt-14 h-2/3 sm:pt-18 sm:w-96 lg:h-auto lg:w-2/4">
          <span className="flex h-full sm:w-full lg:w-3/5 lg:mx-auto">
            <img
              className="img-man-coding img-responsive sm:w-full"
              src={ManCodingSvg}
              alt="man coding"
            />
          </span>
        </div>
      </section>

      <section className="second-section bg-wallpaperSections"></section>

      <section className="third-section bg-wallpaperSections"></section>
    </main>
  );
};
/* 

sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }
*/
