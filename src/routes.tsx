import { Route, Routes } from "react-router-dom";
import Dashboard from "./views/dashboard/Dashboard";
import PageNotFound from "./views/PageNotFoiund/PageNotFoiund"

const AppRoutes = () => {

  return (
    <div>
          <Routes>
            <Route path={'/'} element={<PageNotFound />} />
                <Route path={'/dashboard'} element={<Dashboard />} />
            <Route path={'*'} element={<PageNotFound />} />
          </Routes>
    </div>
  );
};

export default AppRoutes;
