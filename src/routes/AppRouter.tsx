import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutPage } from "../pages/about/AboutPage";
import { HomePage } from "../pages/HomePage";
import Footer from "../ui/organisms/footer/Footer";
import { Navbar } from "../ui/organisms/navbar/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div className="grid main-container relative">
        <Navbar />

        <Switch>
          <Route exact path="/about">
            <AboutPage />
          </Route>

          <Route exact path="/projects"></Route>

          <Route exact path="/resume"></Route>

          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};
