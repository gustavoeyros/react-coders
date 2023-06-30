import axios from "axios";
import Button from "../Button";
import InputLabel from "../InputLabel";
import "./index.css";
import { useRef } from "react";

const AddBilling = () => {
  const name = useRef<HTMLInputElement>(null);
  const month = useRef<HTMLInputElement>(null);
  const year = useRef<HTMLInputElement>(null);

  const sendValues = () => {
    const data = {
      name: name.current?.value,
      month: month.current?.value,
      year: year.current?.value,
    };

    axios
      .post("http://localhost:3000/api/billing", data)
      .then((res) => console.log(res));
  };
  return (
    <>
      <div className="container-add">
        <InputLabel
          id="name"
          description="Nome"
          placeholder="Informe o nome"
          type="text"
          ref={name}
        />
        <InputLabel
          id="month"
          description="Mês"
          placeholder="Informe o mês"
          type="number"
          ref={month}
        />
        <InputLabel
          id="year"
          description="Ano"
          placeholder="Informe o ano"
          type="number"
          ref={year}
        />
      </div>
      <Button text="Submit" onClick={sendValues} />
    </>
  );
};

export default AddBilling;