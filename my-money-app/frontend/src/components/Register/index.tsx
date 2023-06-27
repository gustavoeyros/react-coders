import BillingRoutes from "../../routes/billingRoutes";
import BillingList from "../BillingList";
import "./index.css";

const Register = () => {
  return (
    <div className="content">
      <div className="title">
        <h1>
          Ciclos de Pagamentos <span>Cadastro</span>
        </h1>
      </div>

      <div className="tab-header">
        <ul>
          <li>Listar</li>
          <li>Incluir</li>
        </ul>
      </div>
      <BillingRoutes />
    </div>
  );
};

export default Register;
