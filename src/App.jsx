import { Routes, Route } from "react-router-dom";

import "./App.scss";
import { Home, Contact } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
