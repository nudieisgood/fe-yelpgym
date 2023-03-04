import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gyms from "./screens/Gyms";
import Show from "./screens/Show";
import LandingPage from "./screens/LandingPage";
import AddGymw from "./screens/AddGym";
import EditGym from "./screens/EditGym";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gyms" element={<Gyms />} />
        <Route path="/gym/:id" element={<Show />} />
        <Route path="/gyms/new" element={<AddGymw />} />
        <Route path="/gyms/:id/edit" element={<EditGym />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
