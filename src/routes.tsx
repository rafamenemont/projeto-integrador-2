import { Route, Routes } from "react-router-dom";
import FormLogin from "./views/FormLogin/FormLogin";
import FormSignUp from "./views/FormSignUp/FormSignUp";
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
            <Route path={'*'} element={<PageNotFound />} />
          </Routes>
    </div>
  );
};

export default AppRoutes;
