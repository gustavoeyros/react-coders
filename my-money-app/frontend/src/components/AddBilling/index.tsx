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

  const [lastCredit, setLastCredit] = useState<ICredit | null>(null);

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

  const cloneCredit = (index: number) => {
    const clonedCredit = { ...credits[index] };
    setCredits((prevCredits) => {
      const newCredits = [...prevCredits];
      newCredits.splice(index + 1, 0, clonedCredit);
      return newCredits;
    });
  };

  const deleteCredit = (index: number) => {
    setCredits((prevCredits) => prevCredits.filter((_, i) => i !== index));
  };

  const handleCreditNameChange = (index: number, value: string) => {
    setCredits((prevCredits) =>
      prevCredits.map((prevCredit, i) =>
        i === index ? { ...prevCredit, name: value } : prevCredit
      )
    );
    setLastCredit({ ...lastCredit, name: value });
  };

  const handleCreditValueChange = (index: number, value: string) => {
    setCredits((prevCredits) =>
      prevCredits.map((prevCredit, i) =>
        i === index ? { ...prevCredit, value: value } : prevCredit
      )
    );
    setLastCredit({ ...lastCredit, value: value });
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
                onChange={(e) => handleCreditNameChange(index, e.target.value)}
              />
              <InputLabel
                id={`creditValue_${index}`}
                description="Valor"
                placeholder="Informe o valor"
                type="number"
                value={credit.value}
                onChange={(e) => handleCreditValueChange(index, e.target.value)}
              />

              <div className="container-add-actions">
                <span onClick={addCredit}>Adicionar</span>
                <span onClick={() => cloneCredit(index)}>Clonar</span>
                <span onClick={() => index !== 0 && deleteCredit(index)}>
                  Excluir
                </span>
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
