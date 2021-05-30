import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Servers from "./pages/Servers";
import Hosting from "./pages/Hosting";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/about">
          <Home />
        </Route>
        <Route path="/servers">
          <Servers />
        </Route>
        <Route path="/hosting">
          <Hosting />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
