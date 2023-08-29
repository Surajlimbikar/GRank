import "./App.css";
import { Routes, Route } from "react-router-dom";
import BlankLayout from "./layout/blanklayout/BlankLayout";
import FullLayout from "./layout/full-layout/FullLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<BlankLayout />} />
        <Route path="/secured/*" element={<FullLayout />} />
      </Routes>
    </>
  );
}

export default App;
