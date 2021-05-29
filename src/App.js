import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

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
      </Switch>
    </Layout>
  );
}

export default App;
