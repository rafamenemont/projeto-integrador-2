import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage/LadingPage";
import PageNotFound from "./views/PageNotFoiund/PageNotFoiund"

const AppRoutes = () => {

  return (
    <div>
      <Routes>
        <Route path={'/'} element={<LandingPage />} />
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
