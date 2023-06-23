import IconButton from "../template/IconButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { markAsDone, markAsPending, remove } from "./todoAction";

interface ITodoListProps {
  list: [{ description: string; _id: string; done?: boolean }];
  handleRemove: (id: string) => void;
  handleMarkAsDone: (id: string) => void;
  handleMarkAsPending: (id: string) => void;
  markAsDone: (todo: ITodo) => void;
  markAsPending: (todo: ITodo) => void;
  remove: (todo: ITodo) => void;
}

interface IRedux {
  todo: {
    description: string;
    list: [{ description: string; _id: string; done?: boolean }];
  };
}

interface ITodo {
  description: string;
  _id: string;
  done?: boolean | undefined;
}

const TodoList = ({
  list,
  handleRemove,
  markAsDone,
  markAsPending,
  remove,
}: ITodoListProps) => {
  const renderRows = () => {
    const formattedList = list || [];
    return formattedList.map((todo: ITodo) => (
      <tr key={todo._id}>
        <td className={`${todo.done ? "markedAsDone" : ""}`}>
          {todo.description}
        </td>

        <td className="d-flex gap-2">
          <IconButton
            style="success"
            icon="check"
            onClick={() => markAsDone(todo)}
            hide={todo.done}
          />
          <IconButton
            style="warning"
            icon="undo"
            onClick={() => markAsPending(todo)}
            hide={!todo.done}
          />
          <IconButton
            style="danger"
            icon="trash-o"
            onClick={() => remove(todo)}
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
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
