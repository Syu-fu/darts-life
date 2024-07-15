import React from "react";
import { Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import UnderConstructionPage from "./pages/UnderConstructionPage";
import DataMenu from "./pages/DataMenu";
import ZeroOneStatsPage from "./pages/ZeroOneStatsPage";
import Settings from "./pages/Settings";
import ZeroOneMenu from "./pages/ZeroOneMenu";
import CricketMenu from "./pages/CricketMenu";
import ZeroOneBullPage from "./pages/ZeroOneBullPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/submenu/01" element={<ZeroOneMenu />} />
      <Route path="/submenu/cricket" element={<CricketMenu />} />
      <Route path="/practice/01/bull" element={<ZeroOneBullPage />} />
      <Route
        path="/practice/:menu/:subMenu"
        element={<UnderConstructionPage />}
      />
      <Route path="/data" element={<DataMenu />} />
      <Route path="/data/01" element={<ZeroOneStatsPage />} />
      <Route path="/data/cricket" element={<UnderConstructionPage />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
