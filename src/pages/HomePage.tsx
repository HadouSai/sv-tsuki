import ManCodingSvg from "../assets/svg/man-coding.svg";
import "./homePage.css";

export const HomePage = () => {
  return (
    <main className="main-section grid bg-primary relative">
      <section className="first-section py-24 px-6">
        <div className="pt-4">
          <h2 className="text-primary text-2xl font-semibold">Hello there</h2>
          <h1 className="text-primary pt-2 font-bold text-m-m word-spacing-2">
            I'M
            <span className="text-main word-spacing-1"> DIEGO BELLO</span>
          </h1>

          <span className="text-main font-bold text-m-s block mt-7">
            React Developer
          </span>
        </div>

        <div className="pt-7">
          <span className="flex justify-center m-auto w-4/6 sm:w-2/4">
            <img
              className="img-responsive"
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