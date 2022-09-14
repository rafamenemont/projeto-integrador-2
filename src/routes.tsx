import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage/LadingPage";
import Dashboard from "./views/dashboard/Dashboard";
import PageNotFound from "./views/PageNotFoiund/PageNotFoiund"

const AppRoutes = () => {

  return (
    <div>
      <Routes>
        <Route path={'/'} element={<LandingPage />} />
        <Route path={'/'} element={<PageNotFound />} />
        <Route path={'/'} element={<Dashboard />} />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
