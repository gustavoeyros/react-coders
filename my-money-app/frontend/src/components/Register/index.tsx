import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.css";

interface IRegisterProps {
  children: React.ReactNode;
}

const Register = ({ children }: IRegisterProps) => {
  const routePath = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <div className="content">
      <div className="title">
        <h1>
          Ciclos de Pagamentos <span>Cadastro</span>
        </h1>
      </div>

      <div className="tab-header">
        <ul>
          <li onClick={() => navigate("/register")}>Listar</li>
          <li onClick={() => navigate("add")}>Incluir</li>
          {routePath.includes("/register/edit") && <li>Editar</li>}
        </ul>
      </div>
      {children}
    </div>
  );
};

export default Register;
