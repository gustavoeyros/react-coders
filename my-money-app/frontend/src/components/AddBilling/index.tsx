import axios from "axios";
import Button from "../Button";
import InputLabel from "../InputLabel";
import "./index.css";
import { useState } from "react";

interface ICredit {
  name: string;
  value: string;
}

const AddBilling = () => {
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [credits, setCredits] = useState<ICredit[]>([
    {
      name: "",
      value: "",
    },
  ]);

  const sendValues = () => {
    const data = {
      name: name,
      month: month,
      year: year,
      credits: credits.map((credit) => ({
        name: credit.name,
        value: credit.value,
      })),
    };
    console.log(credits);
    axios
      .post("http://localhost:3000/api/billing", data)
      .then((res) => console.log(res));
  };

  const addCredit = () => {
    setCredits([...credits, { name: "", value: "" }]);
  };

  return (
    <>
      <div className="container-add">
        <InputLabel
          id="name"
          description="Nome"
          placeholder="Informe o nome"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputLabel
          id="month"
          description="Mês"
          placeholder="Informe o mês"
          type="number"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <InputLabel
          id="year"
          description="Ano"
          placeholder="Informe o ano"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      <div className="container-credits__global">
        <span>Créditos</span>
        <div className="container-credits">
          {credits.map((credit, index) => (
            <div key={index} className="container-add">
              <InputLabel
                id={`creditName_${index}`}
                description="Nome"
                placeholder="Informe o nome"
                type="string"
                value={credit.name}
                onChange={(e) =>
                  setCredits((prevCredits) =>
                    prevCredits.map((prevCredit, i) =>
                      i === index
                        ? { ...prevCredit, name: e.target.value }
                        : prevCredit
                    )
                  )
                }
              />
              <InputLabel
                id={`creditValue_${index}`}
                description="Valor"
                placeholder="Informe o valor"
                type="number"
                value={credit.value}
                onChange={(e) =>
                  setCredits((prevCredits) =>
                    prevCredits.map((prevCredit, i) =>
                      i === index
                        ? { ...prevCredit, value: e.target.value }
                        : prevCredit
                    )
                  )
                }
              />

              <div className="container-add-actions">
                <span onClick={addCredit}>Adicionar</span>
                <span>Clonar</span>
                <span>Excluir</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button text="Submit" onClick={sendValues} />
    </>
  );
};

export default AddBilling;
