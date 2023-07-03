import { useEffect, useState } from "react";
import Card from "../Card";
import "./index.css";

const Content = () => {
  const [cred, setCred] = useState<number>(0);
  const [debt, setDebt] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>();
  const summaryFetch = () => {
    setLoading(true);
    fetch("http://localhost:3000/api/summary", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCred(data.credit);
        setDebt(data.debt);
        setLoading(false);
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
          valueProps={loading ? "Loading..." : cred}
          description="Total de Créditos"
        />
        <Card
          color="red"
          valueProps={loading ? "Loading..." : debt}
          description="Total de Débitos"
        />
        <Card
          color="blue"
          valueProps={loading ? "Loading" : cred - debt}
          description="Valor Consolidado"
        />
      </div>
    </div>
  );
};

export default Content;
