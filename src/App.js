import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
