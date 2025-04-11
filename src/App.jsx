import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
