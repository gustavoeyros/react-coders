import Card from "../Card";
import "./index.css";

const Content = () => {
  return (
    <div className="content">
      <div className="title">
        <h1>
          Dashboard <span>Versão 1.0</span>
        </h1>
      </div>

      <div className="cards-container">
        <Card color="green" valueProps="10" description="Total de Créditos" />
        <Card color="red" valueProps="10" description="Total de Débitos" />
        <Card color="blue" valueProps="0" description="Valor Consolidado" />
      </div>
    </div>
  );
};

export default Content;
