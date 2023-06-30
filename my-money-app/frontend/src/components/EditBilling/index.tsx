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
  debts: [];
  credits: [];
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
    };

    await axios
      .put(`http://localhost:3000/api/billing/${id}`, data)
      .then((res) => console.log(res));
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
      <Button text="Edit" onClick={sendValues} />
    </>
  );
};

export default EditBilling;
