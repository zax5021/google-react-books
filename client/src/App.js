import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SearchPage from "./components/SearchPage";
import SavedPage from "./components/SavedPage";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <SearchPage />
        </Route>
        <Route path="/saved">
          <SavedPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
