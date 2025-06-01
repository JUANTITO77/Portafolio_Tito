import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
export function MyRoutes() {
  return (
    <BrowserRouter basename="/Portafolio_Tito">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
