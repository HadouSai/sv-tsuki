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
          <h1>Footer</h1>
        </footer>
      </div>
    </Router>
  );
};
