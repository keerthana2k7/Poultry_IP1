import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Farm from "./Farm";
import Batch from "./Batch";
import Feed from "./Feed";
import Market from "./Market";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/farm" element={<Farm />} />
        <Route path="/batch" element={<Batch />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
