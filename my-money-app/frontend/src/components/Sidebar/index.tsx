import { useNavigate } from "react-router-dom";
import "./index.css";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <span onClick={() => navigate("/")}>Dashboard</span>
      <span onClick={() => navigate("/register")}>Cadastro</span>
    </div>
  );
};

export default Sidebar;
