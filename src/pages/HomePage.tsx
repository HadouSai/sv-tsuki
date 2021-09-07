import ManCodingSvg from "../assets/svg/man-coding.a.svg";
import TelegramaSvg from "../assets/svg/telegrama.svg";
import GithubSvg from "../assets/svg/github.svg";
import DiscordSvg from "../assets/svg/discord.svg";
import { WorkingLaptopSvg } from "../ui/atoms/icons/WorkingLaptopSvg";
import "./homePage.css";

export const HomePage = () => {
  return (
    <main className="main-section grid bg-primary relative">
      <section className="first-section">
        <div className="container m-auto flex justify-around items-center flex-col pt-28 pb-7 px-7 lg:flex lg:pt-36 lg:px-28 lg:flex-row">
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
        </div>
      </section>

      <section className="second-section bg-wallpaperSections pt-7 pb-12 px-7 xl:pt-10">
        <div className="cont-present container flex flex-col justify-center items-center m-auto pt-20 xl:flex-row">
          <div className="flex flex-col text-primary sm:w-10/12 sm:pr-8">
            <h1 className="text-primary text-m-m sm:text-4xl uppercase text-center">
              Let me <span className="text-main">Introduce</span> myself
            </h1>

            <div className="pt-6 px-2">
              <p className="pt-6 text-primary text-lg sm:text-xl 2xl:text-2xl">
                Since I learned that video games interactivity is made by
                programming, I became interested in the world of development.
              </p>

              <p className="pt-6 text-primary text-lg sm:text-xl 2xl:text-2xl">
                My interest gradually became more inclined towards front-end
                development.
              </p>

              <p className="pt-6 text-primary text-lg sm:text-xl 2xl:text-2xl">
                I like developing new web challenges, I have experience building
                apps with
                <span className="text-main">
                  Angular, Javascript and React.
                </span>
                looking for backend languages to be a fullstack developer, I
                discovered <span className="text-main">Golang</span>, an
                excellent language one that I like more every day.
              </p>
            </div>
          </div>

          <div className="pt-14 pl-20 xl:pt-0">
            <div className="tea-lover w-full">
              <WorkingLaptopSvg />
            </div>
          </div>
        </div>
      </section>

      <section className="third-section bg-wallpaperSections pt-8 pb-12 px-7">
        <div className="container mx-auto">
          <h1 className="test-primary text-m-m sm:text-4xl text-center uppercase">
            Find me on
          </h1>

          <div className="icons grid content-center justify-center pt-8">
            <img className="text-lg" src={TelegramaSvg} alt="Icon Telegram" />
            <img className="text-lg" src={GithubSvg} alt="Icon Github" />
            <img className="text-lg" src={DiscordSvg} alt="Icon Discord" />
          </div>
        </div>
      </section>
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
