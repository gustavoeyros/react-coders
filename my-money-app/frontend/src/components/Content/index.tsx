import { useEffect, useState } from "react";
import Card from "../Card";
import "./index.css";

const Content = () => {
  const [cred, setCred] = useState();
  const [debt, setDebt] = useState();
  const summaryFetch = () => {
    fetch("http://localhost:3000/api/summary", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCred(data.credit);
        setDebt(data.debt);
      });
  };

  useEffect(() => {
    summaryFetch();
  }, []);
  return (
    <div className="content">
      <div className="title">
        <h1>
          Dashboard <span>Versão 1.0</span>
        </h1>
      </div>

      <div className="cards-container">
        <Card
          color="green"
          valueProps={cred ? cred : "Loading..."}
          description="Total de Créditos"
        />
        <Card
          color="red"
          valueProps={debt ? debt : "Loading..."}
          description="Total de Débitos"
        />
        <Card
          color="blue"
          valueProps={cred && debt ? cred - debt : "Loading..."}
          description="Valor Consolidado"
        />
      </div>
    </div>
  );
};

export default Content;
