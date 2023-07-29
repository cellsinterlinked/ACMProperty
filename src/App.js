import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import NavBar from "./Components/Nav/Navbar";
import Footer from "./Components/Nav/Footer";
import MobileNav from "./Components/Nav/MobileNav";
const LazyLocalServices = React.lazy(() => import("./Pages/LocalServices"));
const LazyResidentResources = React.lazy(() =>
import("./Pages/ResidentResources")
);
const LazyOwnerResources = React.lazy(() => import("./Pages/OwnerResources"));
const LazyPropertyManagement = React.lazy(() =>
import("./Pages/PropertyManagement")
);
const LazySales = React.lazy(() => import("./Pages/Sales"));
const LazyAbout = React.lazy(() => import("./Pages/About"));
const LazyContact = React.lazy(() => import("./Pages/Contact"));
const LazySurvey = React.lazy(() => import("./Pages/Survey"));
const LazyBasic = React.lazy(() => import("./Pages/Basic"));
const LazyPremium = React.lazy(() => import("./Pages/Premium"));
const LazyStandard = React.lazy(() => import("./Pages/Standard"));
const LazyHoaManagement = React.lazy(() => import("./Pages/HoaManagement"));


function App() {
  return (
    <div className="App">
      <MobileNav />
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/sales"
          element={
            <React.Suspense>
              <LazySales />
            </React.Suspense>
          }
          fallback="Loading..."
        />
        <Route
          path="/contact"
          element={
            <React.Suspense>
              <LazyContact />
            </React.Suspense>
          }
          fallback="Loading..."
        />
        <Route
          path="/hoamanagement"
          element={
            <React.Suspense>
              <LazyHoaManagement />
            </React.Suspense>
          }
          fallback="Loading..."
        />
        <Route
          path="/propertymanagement"
          element={
            <React.Suspense>
              <LazyPropertyManagement />
            </React.Suspense>
          }
          fallback="Loading..."
        />
        <Route
          path="/ownerresources"
          element={
            <React.Suspense>
              <LazyOwnerResources />
            </React.Suspense>
          }
          fallback="Loading..."
        />
        <Route
          path="/residentresources"
          element={
            <React.Suspense>
              <LazyResidentResources />
            </React.Suspense>
          }
          fallback="Loading..."
        />
        <Route
          path="/about"
          element={
            <React.Suspense>
              <LazyAbout />
            </React.Suspense>
          }
          fallback="Loading..."
        />
        <Route
          path="/localservices"
          element={
            <React.Suspense>
              <LazyLocalServices />
            </React.Suspense>
          }
          fallback="Loading..."
        />
        <Route
          path="/survey"
          element={
            <React.Suspense>
              <LazySurvey />
            </React.Suspense>
          }
          fallback="Loading..."
        />
        <Route
          path="/premium"
          element={
            <React.Suspense>
              <LazyPremium />
            </React.Suspense>
          }
          fallback="Loading..."
        />
        <Route
          path="/basic"
          element={
            <React.Suspense>
              <LazyBasic />
            </React.Suspense>
          }
          fallback="Loading..."
        />
        <Route
          path="/standard"
          element={
            <React.Suspense>
              <LazyStandard />
            </React.Suspense>
          }
          fallback="Loading..."
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
