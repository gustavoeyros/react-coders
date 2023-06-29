import Button from "../Button";
import InputLabel from "../InputLabel";
import "./index.css";

const AddBilling = () => {
  return (
    <>
      <div className="container-add">
        <InputLabel
          id="name"
          description="Nome"
          placeholder="Informe o nome"
          type="text"
        />
        <InputLabel
          id="month"
          description="Mês"
          placeholder="Informe o mês"
          type="number"
        />
        <InputLabel
          id="year"
          description="Ano"
          placeholder="Informe o ano"
          type="number"
        />
      </div>
      <Button />
    </>
  );
};

export default AddBilling;
