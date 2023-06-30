import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";

interface IDataFetch {
  credits: [];
  debts: [];
  month: number;
  name: string;
  year: number;
  _id: string;
}

const BillingList = () => {
  const navigate = useNavigate();
  const [list, setList] = useState<IDataFetch[]>([]);
  const fetchList = () => {
    fetch("http://localhost:3000/api/billing", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data);
      });
  };

  const removeRegister = (id: string) => {
    fetch(`http://localhost:3000/api/billing/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        fetchList();
      });
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <table className="table-content">
      <thead>
        <tr>
          <td>Nome</td>
          <td>Mês</td>
          <td>Ano</td>
          <td>Ações</td>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.month}</td>
            <td>{item.year}</td>
            <div className="tab-actions">
              <span onClick={() => navigate(`/register/edit/${item._id}`)}>
                Editar
              </span>
              <span onClick={() => removeRegister(item._id)}>Excluir</span>
            </div>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BillingList;
