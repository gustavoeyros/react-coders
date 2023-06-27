import { Routes, Route } from "react-router-dom";
import Content from "../components/Content";
import Register from "../components/Register";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default RoutesManager;
