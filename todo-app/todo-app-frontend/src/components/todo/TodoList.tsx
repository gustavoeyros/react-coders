import IconButton from "../template/IconButton";
import { connect } from "react-redux";

interface ITodoListProps {
  list: [{ description: string; _id: string; done?: boolean }];
  handleRemove: (id: string) => void;
  handleMarkAsDone: (id: string) => void;
  handleMarkAsPending: (id: string) => void;
}

interface IRedux {
  todo: {
    description: string;
    list: [{ description: string; _id: string; done?: boolean }];
  };
}

const TodoList = ({
  list,
  handleRemove,
  handleMarkAsDone,
  handleMarkAsPending,
}: ITodoListProps) => {
  const renderRows = () => {
    const formattedList = list || [];
    return formattedList.map((todo) => (
      <tr key={todo._id}>
        <td className={`${todo.done ? "markedAsDone" : ""}`}>
          {todo.description}
        </td>

        <td className="d-flex gap-2">
          <IconButton
            style="success"
            icon="check"
            onClick={() => handleMarkAsDone(todo._id)}
            hide={todo.done}
          />
          <IconButton
            style="warning"
            icon="undo"
            onClick={() => handleMarkAsPending(todo._id)}
            hide={!todo.done}
          />
          <IconButton
            style="danger"
            icon="trash-o"
            onClick={() => handleRemove(todo._id)}
            hide={!todo.done}
          />
        </td>
      </tr>
    ));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = (state: IRedux) => ({ list: state.todo.list });

export default connect(mapStateToProps)(TodoList);
