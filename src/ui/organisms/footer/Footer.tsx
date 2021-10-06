import { ReactElement } from "react";

export default function Footer(): ReactElement {
  return (
    <div>
      <footer className="max-h-14 bg-primary">
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
        <div className="hidden">
          <a href="https://iconscout.com/illustrations/man">
            Man developing website on desk Illustration
          </a>
          by
          <a href="https://iconscout.com/contributors/woobrodesign">
            WOOBRO LTD
          </a>
          on <a href="https://iconscout.com">Iconscout</a>
          <a className="hidden" href="https://www.freepik.com/vectors/work">
            Work vector created by stories - www.freepik.com
          </a>
          <a className="hidden" href="https://iconscout.com/icons/typescript">
            Typescript Logo Icon
          </a>
          <a
            className="hidden"
            href="https://iconscout.com/contributors/icon-54"
          >
            Icon 54
          </a>
          <a className="hidden" href="https://iconscout.com">
            Iconscout
          </a>
          <a className="hidden" href="https://iconscout.com/icons/react">
            React Icon
          </a>
          by
          <a
            className="hidden"
            href="https://iconscout.com/contributors/unicons"
          >
            Unicons Font
          </a>
          on
          <a className="hidden" href="https://iconscout.com">
            Iconscout
          </a>
          <a className="hidden" href="https://iconscout.com/icons/go">
            Go Icon
          </a>
          by
          <a className="hidden" href="https://iconscout.com/icons/javascript">
            Javascript Logo Icon
          </a>
          by
          <a
            className="hidden"
            href="https://iconscout.com/contributors/icon-54"
          >
            Icon 54
          </a>
          on
          <a className="hidden" href="https://iconscout.com">
            Iconscout
          </a>
        </div>
      </footer>
    </div>
  );
}
