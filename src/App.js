import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gyms from "./screens/Gyms";
import LandingPage from "./screens/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gyms" element={<Gyms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
