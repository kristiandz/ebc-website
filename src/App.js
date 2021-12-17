import { Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Servers from "./pages/Servers";
import Hosting from "./pages/Hosting";
import League from "./pages/League";
import Stats from "./pages/Stats";
import Applications from "./pages/Applications";
import CommunityApplications from "./components/applicationPages/CommunityApplications";
import CommunityApply from "./components/applicationPages/CommunityApply";
import BanAppeals from "./components/applicationPages/BanAppeals";
import AppealBan from "./components/applicationPages/AppealBan";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact={true} element = {<Home/>} />
        <Route path="/about" element = {<Home />} />
        <Route path="/servers" element = {<Servers />} />
        <Route path="/hosting" element = {<Hosting/>} />
        <Route path="/league" element = {<League/>} />
        <Route path="/stats" element={<Stats/>} />
        <Route path="/applications" element = {<Applications/>}>
          <Route path = "community_applications" element = {<CommunityApplications/>} />
          <Route path = "community_apply" element = {<CommunityApply/>} />
          <Route path = "ban_appeals" element = {<BanAppeals/>} />
          <Route path = "ban_appeal" element = {<AppealBan/>} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
