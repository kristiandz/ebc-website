import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Servers from "./pages/Servers";
import Hosting from "./pages/Hosting";
import League from "./pages/League";
import Stats from "./pages/Stats";
import Panel from "./pages/Panel";
import Applications from "./pages/Applications";
import CommunityApplications from "./components/applicationPages/CommunityApplications";
import CommunityApply from "./components/applicationPages/CommunityApply";
import BanAppeals from "./components/applicationPages/BanAppeals";
import AppealBan from "./components/applicationPages/AppealBan";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        {/* <Route path="*" component={<NotFound />} /> */}
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/league" element={<League />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/applications" element={<Applications />}>
          <Route path="community_applications" element={<CommunityApplications />} />
          <Route path="community_apply" element={<CommunityApply />} />
          <Route path="ban_appeals" element={<BanAppeals />} />
          <Route path="ban_appeal" element={<AppealBan />} />
        </Route>
        <Route path="/panel" element={<Panel />} />
      </Routes>
    </Layout>
  );
}

export default App;
