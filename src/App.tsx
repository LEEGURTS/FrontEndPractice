import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navigate/NavigationBar";
import ScrollTop from "./components/ScrollTop";
import HomePage from "./pages/HomePage";
import LoadPage from "./pages/LoadPage";

const App: React.FunctionComponent = () => {
  const ArcodianPage = lazy(() => import("./pages/ArcodianPage"));
  const GridPage = lazy(() => import("./pages/GridPage"));
  const SlidePage = lazy(() => import("./pages/SlidePage"));
  const TyphoGraphyPage = lazy(() => import("./pages/TyphoGraphyPage"));
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="relative font-sanfransisco">
        <NavigationBar />
        <Suspense fallback={<LoadPage />}>
          <ScrollTop>
            <div className="relative z-50 text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/arcodian" element={<ArcodianPage />} />
                <Route path="/grid" element={<GridPage />} />
                <Route path="/slide" element={<SlidePage />} />
                <Route path="/typhography" element={<TyphoGraphyPage />} />
              </Routes>
            </div>
          </ScrollTop>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
