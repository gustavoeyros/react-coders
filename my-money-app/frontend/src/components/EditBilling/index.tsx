import InputLabel from "../InputLabel";
import Button from "../Button";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface IBilling {
  _id: string;
  name: string;
  year: number;
  month: number;
  debts: { name: string; value: string }[];
  credits: { name: string; value: string }[];
}

const EditBilling = () => {
  const { id } = useParams();
  const name = useRef<HTMLInputElement>(null);
  const month = useRef<HTMLInputElement>(null);
  const year = useRef<HTMLInputElement>(null);
  const [billing, setBilling] = useState<IBilling>();

  const getBillingById = () => {
    axios
      .get(`http://localhost:3000/api/billing/${id}`)
      .then((res) => setBilling(res.data));
  };

  const sendValues = async () => {
    const data = {
      name: name.current?.value,
      month: month.current?.value,
      year: year.current?.value,
      credits: billing?.credits.map((credit) => ({
        name: credit.name,
        value: credit.value,
      })),
      debts: billing?.debts.map((debt) => ({
        name: debt.name,
        value: debt.value,
      })),
    };

    await axios
      .put(`http://localhost:3000/api/billing/${id}`, data)
      .then((res) => console.log(res));
  };

  const addCredit = () => {
    setBilling((prevBilling: IBilling | undefined) => {
      if (!prevBilling) {
        return prevBilling; // Retorna undefined se prevBilling for undefined
      }

      const newCredits = prevBilling.credits.concat({ name: "", value: "" });
      return { ...prevBilling, credits: newCredits };
    });
  };

  const removeCredit = (index: number) => {
    setBilling((prevBilling: IBilling | undefined) => {
      if (!prevBilling) {
        return prevBilling; // Retorna undefined se prevBilling for undefined
      }

      const newCredits = prevBilling.credits.filter((_, i) => i !== index);
      return { ...prevBilling, credits: newCredits };
    });
  };

  const addDebt = () => {
    setBilling((prevBilling: IBilling | undefined) => {
      if (!prevBilling) {
        return prevBilling; // Retorna undefined se prevBilling for undefined
      }

      const newDebts = prevBilling.debts.concat({ name: "", value: "" });
      return { ...prevBilling, debts: newDebts };
    });
  };

  const removeDebt = (index: number) => {
    setBilling((prevBilling: IBilling | undefined) => {
      if (!prevBilling) {
        return prevBilling; // Retorna undefined se prevBilling for undefined
      }

      const newDebts = prevBilling.debts.filter((_, i) => i !== index);
      return { ...prevBilling, debts: newDebts };
    });
  };

  const handleCreditNameChange = (index: number, value: string) => {
    setBilling((prevBilling: IBilling | undefined) => {
      if (!prevBilling) {
        return prevBilling; // Retorna undefined se prevBilling for undefined
      }

      const updatedCredits = prevBilling.credits.map((credit, i) =>
        i === index ? { ...credit, name: value } : credit
      );
      return { ...prevBilling, credits: updatedCredits };
    });
  };

  const handleCreditValueChange = (index: number, value: string) => {
    setBilling((prevBilling: IBilling | undefined) => {
      if (!prevBilling) {
        return prevBilling; // Retorna undefined se prevBilling for undefined
      }

      const updatedCredits = prevBilling.credits.map((credit, i) =>
        i === index ? { ...credit, value: value } : credit
      );
      return { ...prevBilling, credits: updatedCredits };
    });
  };

  const handleDebtNameChange = (index: number, value: string) => {
    setBilling((prevBilling: IBilling | undefined) => {
      if (!prevBilling) {
        return prevBilling; // Retorna undefined se prevBilling for undefined
      }

      const updatedDebts = prevBilling.debts.map((debt, i) =>
        i === index ? { ...debt, name: value } : debt
      );
      return { ...prevBilling, debts: updatedDebts };
    });
  };

  const handleDebtValueChange = (index: number, value: string) => {
    setBilling((prevBilling: IBilling | undefined) => {
      if (!prevBilling) {
        return prevBilling; // Retorna undefined se prevBilling for undefined
      }

      const updatedDebts = prevBilling.debts.map((debt, i) =>
        i === index ? { ...debt, value: value } : debt
      );
      return { ...prevBilling, debts: updatedDebts };
    });
  };

  useEffect(() => {
    getBillingById();
  }, []);

  if (!billing) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="container-add">
        <InputLabel
          id="name"
          description="Nome"
          placeholder="Informe o nome"
          type="text"
          ref={name}
          value={billing.name}
        />
        <InputLabel
          id="month"
          description="Mês"
          placeholder="Informe o mês"
          type="number"
          ref={month}
          value={billing.month}
        />
        <InputLabel
          id="year"
          description="Ano"
          placeholder="Informe o ano"
          type="number"
          ref={year}
          value={billing.year}
        />
      </div>
      <div className="container-credits__global">
        <span>Créditos</span>
        <div className="container-credits">
          {billing.credits.map((credit, index) => (
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
                {index !== 0 && (
                  <span onClick={() => removeCredit(index)}>Excluir</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-credits__global">
        <span>Débitos</span>
        <div className="container-credits">
          {billing.debts.map((debt, index) => (
            <div key={index} className="container-add">
              <InputLabel
                id={`debtName_${index}`}
                description="Nome"
                placeholder="Informe o nome"
                type="string"
                value={debt.name}
                onChange={(e) => handleDebtNameChange(index, e.target.value)}
              />
              <InputLabel
                id={`debtValue_${index}`}
                description="Valor"
                placeholder="Informe o valor"
                type="number"
                value={debt.value}
                onChange={(e) => handleDebtValueChange(index, e.target.value)}
              />

              <div className="container-add-actions">
                <span onClick={addDebt}>Adicionar</span>
                {index !== 0 && (
                  <span onClick={() => removeDebt(index)}>Excluir</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button text="Edit" onClick={sendValues} />
    </>
  );
};

export default EditBilling;
