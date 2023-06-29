import { useNavigate } from "react-router-dom";
import "./index.css";

interface IRegisterProps {
  children: React.ReactNode;
}

const Register = ({ children }: IRegisterProps) => {
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
        </ul>
      </div>
      {children}
    </div>
  );
};

export default Register;
