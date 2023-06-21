import PageHeader from "../template/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import axios from "axios";
import { useEffect, useState } from "react";

interface IInput {
  _id?: string;
  description: string;
  list: [{ description: string; _id: string }];
}

const Todo = () => {
  const [input, setInput] = useState<IInput>({
    description: "",
    list: [{ description: "", _id: "" }],
  });
  const URL = "http://localhost:3003/api/todo";

  const refresh = () => {
    axios
      .get(`${URL}?sort=-createdAt`)
      .then((res) => setInput({ ...input, description: "", list: res.data }));
  };

  const handleAdd = () => {
    const description = input.description;
    axios.post(URL, { description }).then(() => refresh());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, description: e.target.value });
  };

  const handleRemove = (id: string) => {
    axios.delete(`${URL}/${id}`).then(() => refresh());
  };

  const handleMarkAsDone = (id: string) => {
    axios.put(`${URL}/${id}`, { done: true }).then(() => refresh());
  };

  const handleMarkAsPending = (id: string) => {
    axios.put(`${URL}/${id}`, { done: false }).then(() => refresh());
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div>
      <PageHeader name="Tasks" small="Register" />
      <TodoForm
        handleAdd={handleAdd}
        handleChange={handleChange}
        description={input.description}
      />
      <TodoList
        handleMarkAsPending={handleMarkAsPending}
        handleMarkAsDone={handleMarkAsDone}
        handleRemove={handleRemove}
        list={input.list}
      />
    </div>
  );
};

export default Todo;
