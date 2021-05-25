import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SearchPage from "./components/SearchPage";
import SavedPage from "./components/SavedPage";
import { useEffect } from "react";

function App() {
  useEffect();
  return (
    <Router>
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
