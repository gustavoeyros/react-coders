import Grid from "../template/Grid";
import IconButton from "../template/IconButton";
import { bindActionCreators } from "redux";
import { changeDescription, refresh, add, clear, search } from "./todoAction";
import { connect } from "react-redux";
import { useEffect } from "react";

interface ITodoFormProps {
  handleAdd: () => void;
  description: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  handleClear: () => void;
  changeDescription: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refresh: () => void;
  add: (description: string) => void;
}

interface IRedux {
  todo: {
    description: string;
    list: [{ description: string; _id: string; done?: boolean }];
  };
}

const TodoForm = ({
  description,
  changeDescription,
  refresh,
  add,
  search,
}: ITodoFormProps) => {
  const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      e.shiftKey ? refresh() : add(description);
    } else if (e.key === "Escape") {
      clear();
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div role="form" className="todoForm d-flex">
      <Grid cols="12 9 10">
        <input
          type="text"
          id="description"
          className="form-control"
          placeholder="Add task"
          onChange={changeDescription}
          onKeyUp={keyHandler}
          value={description}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton
          style="primary"
          icon="plus"
          onClick={() => add(description)}
        />
        <IconButton style="info" icon="search" onClick={search} />
        <IconButton style="default" icon="close" onClick={clear} />
      </Grid>
    </div>
  );
};

const mapStateToProps = (state: IRedux) => ({
  description: state.todo.description,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    { changeDescription, refresh, add, clear, search },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
