import { useState } from "react";
import Navber from "./pages/Navber/Navber";
import Hero from "./pages/Hero/Hero";
import BrandPage from "./pages/BrandPage/BrandPage";
import Helping_Hiring from "./pages/Helping/Helping_Hiring";
import System from "./pages/System/System";
import Pricing from "./pages/Pricing/Pricing";
import Assessment from "./pages/Assessment/Assessment";
import Customer from "./pages/Customer/Customer";
import Platform from "./pages/Platform/Platform";
import Success_Stories from "./pages/Success_Stories/Success_Stories";
import Questions from "./pages/Questions/Questions";
import RequestPage from "./pages/Request/Request";

function App() {
  return (
    <>
      <Navber />
      <Hero />
      <BrandPage />
      <Helping_Hiring />
      <System />
      <Pricing />
      <Assessment />
      <Customer />
      <Platform />
      <Success_Stories />
      <Questions />
      <RequestPage />
    </>
  );
}

export default App;
