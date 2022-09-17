import { Route, Routes } from "react-router-dom";
import FormLogin from "./views/FormLogin/FormLogin";
import FormSignUp from "./views/FormSignUp/FormSignUp";
import LandingPage from "./views/LandingPage/LadingPage";
import Dashboard from "./views/dashboard/Dashboard";
import PageNotFound from "./views/PageNotFoiund/PageNotFoiund"

const AppRoutes = () => {

  return (
    <div>
          <Routes>
            <Route path={'/'} element={<LandingPage />} />
            <Route path={'/dashboard'} element={<Dashboard />} />
            <Route path={'/login'} element={<FormLogin />}/>
            <Route path={'/signUp'} element={<FormSignUp />} />
            <Route path={'*'} element={<PageNotFound />} />
          </Routes>
    </div>
  );
};

export default AppRoutes;
