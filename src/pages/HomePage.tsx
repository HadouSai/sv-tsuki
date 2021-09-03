import ManCodingSvg from "../assets/svg/man-coding.a.svg";
import "./homePage.css";

export const HomePage = () => {
  return (
    <main className="main-section grid bg-primary relative">
      <section className="first-section pt-28 pb-7 px-7 lg:flex lg:justify-center lg:pt-36">
        <div className="pt-4 h-1/3 lg:h-auto">
          <h2 className="text-primary text-2xl font-semibold">Hello there</h2>
          <h1 className="text-primary pt-2 font-bold text-m-m word-spacing-2">
            I'M
            <span className="text-main word-spacing-1"> DIEGO BELLO</span>
          </h1>

          <span className="text-main font-bold text-m-s block pt-7">
            React Developer
          </span>
        </div>

        <div className="pt-9 h-2/3 lg:h-auto lg:w-2/4">
          <span className="flex h-full justify-center m-auto w-4/6 sm:w-3/6 md:w-5/12 lg:w-3/5">
            <img
              className="img-man-coding img-responsive "
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
