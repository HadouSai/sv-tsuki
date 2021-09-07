import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Navbar } from "../ui/organisms/navbar/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div className="grid main-container relative">
        <Navbar />

        <Switch>
          <Route exact path="/about"></Route>

          <Route exact path="/projects"></Route>

          <Route exact path="/resume"></Route>

          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>

        <footer className="h-14 bg-primary">
          <div className="container h-full mx-auto flex justify-between items-center text-lg">
            <h3 className="text-xs sm:text-sm lg:text-lg p-1">
              Designed and developed by Sai Tsuki
            </h3>

            <h3 className="text-xs sm:text-sm lg:text-lg p-1">
              Copyright &copy; 2021 SaiTsuki.dev
            </h3>

            <h3 className="text-xs sm:text-sm lg:text-lg p-1">
              Mentions and assets
            </h3>
          </div>
          <a className="hidden" href="https://www.freepik.com/vectors/work">
            Work vector created by stories - www.freepik.com
          </a>
        </footer>
      </div>
    </Router>
  );
};
