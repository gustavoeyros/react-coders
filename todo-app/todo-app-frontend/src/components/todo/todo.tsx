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

  const search = (description: string) => {
    axios
      .get(`${URL}?sort=-createdAt&description=${input.description}`)
      .then((res) => setInput({ ...input, description, list: res.data }));
  };

  const handleAdd = () => {
    const description = input.description;
    axios.post(URL, { description }).then(() => refresh());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, description: e.target.value });
  };

  const handleRemove = (id: string) => {
    axios.delete(`${URL}/${id}`).then(() => search(input.description));
  };

  const handleMarkAsDone = (id: string) => {
    axios
      .put(`${URL}/${id}`, { done: true })
      .then(() => search(input.description));
  };

  const handleMarkAsPending = (id: string) => {
    axios
      .put(`${URL}/${id}`, { done: false })
      .then(() => search(input.description));
  };

  const handleSearch = () => {
    search(input.description);
  };

  const handleClear = () => {
    refresh();
  };

  useEffect(() => {
    search(input.description);
  }, []);

  return (
    <div>
      <PageHeader name="Tasks" small="Register" />
      <TodoForm
        handleSearch={handleSearch}
        handleAdd={handleAdd}
        handleChange={handleChange}
        handleClear={handleClear}
      />
      <TodoList
        handleMarkAsPending={handleMarkAsPending}
        handleMarkAsDone={handleMarkAsDone}
        handleRemove={handleRemove}
      />
    </div>
  );
};

export default Todo;
