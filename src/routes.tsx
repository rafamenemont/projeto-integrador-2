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
          <Route path={'/'} element={<FormLogin />} />
            {/* <PrivateRoutes path={'/search'} element={<PageNotFound />} /> */}
            {/* <MenuAndHeader> */}
            {/* <PrivateRoutes path={'/inicial'} element={<PageNotFound />} /> */}
            {/* </MenuAndHeader> */}
            <Route path={'/'} element={<LandingPage />} />
            <Route path={'/'} element={<PageNotFound />} />
            <Route path={'/'} element={<Dashboard />} />
            <Route path={'*'} element={<PageNotFound />} />
            <Route path={'/Login'} element={<FormLogin />}/>
            <Route path={'/SignUp'} element={<FormSignUp />} />
          </Routes>
    </div>
  );
};

export default AppRoutes;
