import { Route, Routes } from "react-router-dom";
import About from "../components/about/about";
import Todo from "../components/todo/todo";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/tasks" element={<Todo />} />
      <Route path="/" element={<Todo />} />
    </Routes>
  );
};

export default RoutesManager;
