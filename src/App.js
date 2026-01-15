import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";

import Register from "./Register";
import Home from "./Home";
import Farm from "./Farm";
import Batch from "./Batch";
import Feed from "./Feed";
import Market from "./Market";
import Reports from "./Reports";  
import Health from "./Health";
import Settings from "./Settings";


function App() {
  return (
    <BrowserRouter>
      <Routes>
           <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/farm" element={<Farm />} />
        <Route path="/batch" element={<Batch />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/market" element={<Market />} />
        <Route path="/health" element={<Health />} />
<Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
