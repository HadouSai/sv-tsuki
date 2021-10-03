import { ReactElement } from "react";

export default function Footer(): ReactElement {
  return (
    <div>
      <footer className="min-h-14 bg-primary">
        <div className="container h-full mx-auto flex flex-col sm:flex-row  justify-between items-center text-lg">
          <h3 className="text-primary text-xs sm:text-sm lg:text-lg p-1">
            Designed and developed by Sai Tsuki
          </h3>

          <h3 className="text-primary text-xs sm:text-sm lg:text-lg p-1">
            Copyright &copy; 2021 SaiTsuki.dev
          </h3>

          <h3 className="text-primary text-xs sm:text-sm lg:text-lg p-1">
            Mentions and assets
          </h3>
        </div>
        <a className="hidden" href="https://www.freepik.com/vectors/work">
          Work vector created by stories - www.freepik.com
        </a>
      </footer>
    </div>
  );
}
